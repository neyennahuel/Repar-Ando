param(
  [string]$Version,
  [string]$Token
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Update-VersionFile($file, $version) {
  $data = Get-Content -Raw -Path $file | ConvertFrom-Json
  if ($data.version) { $data.version = $version }
  if ($data.packages -and $data.packages."") {
    if ($data.packages."".version) { $data.packages."".version = $version }
  }
  $data | ConvertTo-Json -Depth 20 | Set-Content -Path $file
}

if (-not $Version -or $Version -eq "") {
  Write-Host "Usage: scripts\\release.ps1 -Version X.Y.Z [-Token <PAT>]"
  exit 1
}

if (-not $Token -or $Token -eq "") {
  $Token = $env:GH_TOKEN
}

if (-not $Token -or $Token -eq "") {
  Write-Host "Missing GitHub token. Provide -Token or set GH_TOKEN."
  exit 1
}

Update-VersionFile "package.json" $Version
Update-VersionFile "package-lock.json" $Version

Write-Host "Building..."
npm run dist | Write-Output

$dist = Join-Path (Get-Location) "dist"
$setupSpaced = Join-Path $dist ("Repar-Ando Setup $Version.exe")
$setupSpacedBlock = Join-Path $dist ("Repar-Ando Setup $Version.exe.blockmap")
$setupHyphen = Join-Path $dist ("Repar-Ando-Setup-$Version.exe")
$setupHyphenBlock = Join-Path $dist ("Repar-Ando-Setup-$Version.exe.blockmap")

if (Test-Path $setupSpaced) { Copy-Item -Force $setupSpaced $setupHyphen }
if (Test-Path $setupSpacedBlock) { Copy-Item -Force $setupSpacedBlock $setupHyphenBlock }

Write-Host "Committing..."
git add -A | Out-Null
git commit -m "Release $Version" | Write-Output
git tag "v$Version" | Write-Output
git push | Write-Output
git push --tags | Write-Output

$releaseBody = "{`"tag_name`":`"v$Version`",`"name`":`"v$Version`",`"draft`":false,`"prerelease`":false}"
$releaseJson = "release.json"
$releaseBody | Set-Content -NoNewline -Path $releaseJson

$createResp = curl.exe -s -w "`n%{http_code}`n" `
  -H "Authorization: token $Token" `
  -H "User-Agent: repar-ando-release" `
  -H "Content-Type: application/json" `
  -d "@$releaseJson" `
  "https://api.github.com/repos/neyennahuel/Repar-Ando/releases"

$lines = $createResp -split "`n"
$code = $lines[-2]
$json = ($lines[0..($lines.Length-3)] -join "`n")

if ($code -eq "201") {
  $release = $json | ConvertFrom-Json
} elseif ($code -eq "422") {
  $release = curl.exe -s `
    -H "Authorization: token $Token" `
    -H "User-Agent: repar-ando-release" `
    "https://api.github.com/repos/neyennahuel/Repar-Ando/releases/tags/v$Version" | ConvertFrom-Json
} else {
  Write-Host "Release creation failed: HTTP $code"
  Write-Host $json
  exit 1
}

$uploadBase = ($release.upload_url -split "\{")[0]
$assets = @(
  "latest.yml",
  "Repar-Ando-Setup-$Version.exe",
  "Repar-Ando-Setup-$Version.exe.blockmap",
  "Repar-Ando $Version.exe"
)

Write-Host "Uploading assets..."
foreach ($name in $assets) {
  $path = Join-Path $dist $name
  if (-not (Test-Path $path)) {
    Write-Host "Missing asset: $name"
    exit 1
  }
  $uri = $uploadBase + "?name=" + [uri]::EscapeDataString($name)
  curl.exe -s `
    -H "Authorization: token $Token" `
    -H "User-Agent: repar-ando-release" `
    -H "Content-Type: application/octet-stream" `
    --data-binary "@$path" `
    $uri | Out-Null
}

Remove-Item -Force $releaseJson

Write-Host "Release published: $($release.html_url)"
