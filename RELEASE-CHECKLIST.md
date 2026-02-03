Release checklist (Repar-Ando)

1) Update version
   - package.json version -> X.Y.Z
   - package-lock.json version -> X.Y.Z

2) Build
   - Run: npm run dist
   - Verify in dist/:
     - Repar-Ando Setup X.Y.Z.exe
     - Repar-Ando Setup X.Y.Z.exe.blockmap
     - Repar-Ando-Setup-X.Y.Z.exe  (hyphenated)
     - Repar-Ando-Setup-X.Y.Z.exe.blockmap  (hyphenated)
     - Repar-Ando X.Y.Z.exe
     - latest.yml (must reference Repar-Ando-Setup-X.Y.Z.exe)

3) Git
   - git add -A
   - git commit -m "Release X.Y.Z"
   - git tag vX.Y.Z
   - git push
   - git push --tags (ignore v1.0.8 already exists error)

4) Create GitHub release
   - Create release for tag vX.Y.Z (draft = false)
   - Upload assets with exact names:
     - latest.yml
     - Repar-Ando-Setup-X.Y.Z.exe
     - Repar-Ando-Setup-X.Y.Z.exe.blockmap
     - Repar-Ando X.Y.Z.exe

5) Verify
   - GitHub release shows all 4 assets
   - App can check updates (no error)
