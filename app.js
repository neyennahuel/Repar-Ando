const STORAGE_KEY = "gm_data_v1";
const SETTINGS_KEY = "gm_settings_v1";
const DEFAULT_GROUP_ID = "default";

const checklistTemplateData = [
  {
    titleLabels: {
      es: "Limpieza Fisica",
      en: "Physical Cleaning",
      pt: "Limpeza Fisica",
    },
    items: [
      {
        id: "Limpiar ventiladores y rejillas de ventilacion",
        labels: {
          es: "Limpiar ventiladores y rejillas de ventilacion",
          en: "Clean fans and ventilation grills",
          pt: "Limpar ventiladores e grelhas de ventilacao",
        },
      },
      {
        id: "Limpiar gabinete o carcasa",
        labels: {
          es: "Limpiar gabinete o carcasa",
          en: "Clean case or chassis",
          pt: "Limpar gabinete ou carcaca",
        },
      },
      {
        id: "Reaplicar pasta termica del procesador",
        labels: {
          es: "Reaplicar pasta termica del procesador",
          en: "Reapply CPU thermal paste",
          pt: "Reaplicar pasta termica do processador",
        },
      },
    ],
  },
  {
    titleLabels: {
      es: "Hardware",
      en: "Hardware",
      pt: "Hardware",
    },
    items: [
      {
        id: "Verificar estado del disco duro (SMART)",
        labels: {
          es: "Verificar estado del disco duro (SMART)",
          en: "Check hard drive health (SMART)",
          pt: "Verificar estado do disco rigido (SMART)",
        },
      },
      {
        id: "Comprobar modulos de RAM",
        labels: {
          es: "Comprobar modulos de RAM",
          en: "Check RAM modules",
          pt: "Verificar modulos de RAM",
        },
      },
      {
        id: "Comprobar integridad de cables y conexiones",
        labels: {
          es: "Comprobar integridad de cables y conexiones",
          en: "Check integrity of cables and connections",
          pt: "Verificar integridade de cabos e conexoes",
        },
      },
    ],
  },
  {
    titleLabels: {
      es: "Software",
      en: "Software",
      pt: "Software",
    },
    items: [
      {
        id: "Actualizar sistema operativo",
        labels: {
          es: "Actualizar sistema operativo",
          en: "Update operating system",
          pt: "Atualizar sistema operacional",
        },
      },
      {
        id: "Actualizar controladores (drivers)",
        labels: {
          es: "Actualizar controladores (drivers)",
          en: "Update drivers",
          pt: "Atualizar drivers",
        },
      },
      {
        id: "Actualizar software instalado",
        labels: {
          es: "Actualizar software instalado",
          en: "Update installed software",
          pt: "Atualizar software instalado",
        },
      },
      {
        id: "Ejecutar analisis antivirus completo",
        labels: {
          es: "Ejecutar analisis antivirus completo",
          en: "Run full antivirus scan",
          pt: "Executar analise antivirus completa",
        },
      },
      {
        id: "Ejecutar limpieza de malware/adware",
        labels: {
          es: "Ejecutar limpieza de malware/adware",
          en: "Run malware/adware cleanup",
          pt: "Executar limpeza de malware/adware",
        },
      },
      {
        id: "Desinstalar programas innecesarios",
        labels: {
          es: "Desinstalar programas innecesarios",
          en: "Uninstall unnecessary programs",
          pt: "Desinstalar programas desnecessarios",
        },
      },
    ],
  },
  {
    titleLabels: {
      es: "Archivos y Sistema",
      en: "Files and System",
      pt: "Arquivos e Sistema",
    },
    items: [
      {
        id: "Limpiar archivos temporales y caches",
        labels: {
          es: "Limpiar archivos temporales y caches",
          en: "Clean temporary files and caches",
          pt: "Limpar arquivos temporarios e caches",
        },
      },
      {
        id: "Desfragmentar disco duro (solo HDD)",
        labels: {
          es: "Desfragmentar disco duro (solo HDD)",
          en: "Defragment hard drive (HDD only)",
          pt: "Desfragmentar disco rigido (somente HDD)",
        },
      },
      {
        id: "Revisar uso de espacio en disco",
        labels: {
          es: "Revisar uso de espacio en disco",
          en: "Review disk space usage",
          pt: "Revisar uso de espaco em disco",
        },
      },
      {
        id: "Hacer copia de seguridad (backup)",
        labels: {
          es: "Hacer copia de seguridad (backup)",
          en: "Create backup",
          pt: "Fazer backup",
        },
      },
      {
        id: "Verificar estado de copias de seguridad",
        labels: {
          es: "Verificar estado de copias de seguridad",
          en: "Check backup status",
          pt: "Verificar estado dos backups",
        },
      },
    ],
  },
  {
    titleLabels: {
      es: "Internet y Red",
      en: "Internet and Network",
      pt: "Internet e Rede",
    },
    items: [
      {
        id: "Comprobar velocidad de conexion",
        labels: {
          es: "Comprobar velocidad de conexion",
          en: "Check connection speed",
          pt: "Verificar velocidade de conexao",
        },
      },
      {
        id: "Verificar configuracion del firewall",
        labels: {
          es: "Verificar configuracion del firewall",
          en: "Check firewall configuration",
          pt: "Verificar configuracao do firewall",
        },
      },
    ],
  },
  {
    titleLabels: {
      es: "Seguridad",
      en: "Security",
      pt: "Seguranca",
    },
    items: [
      {
        id: "Revisar permisos y cuentas de usuario",
        labels: {
          es: "Revisar permisos y cuentas de usuario",
          en: "Review permissions and user accounts",
          pt: "Revisar permissoes e contas de usuario",
        },
      },
      {
        id: "Revisar funcionamiento de puertos USB/audio/video",
        labels: {
          es: "Revisar funcionamiento de puertos USB/audio/video",
          en: "Check USB/audio/video ports",
          pt: "Revisar funcionamento das portas USB/audio/video",
        },
      },
    ],
  },
  {
    titleLabels: {
      es: "Otros",
      en: "Other",
      pt: "Outros",
    },
    items: [
      {
        id: "Probar perifericos (mouse, teclado, impresora, etc.)",
        labels: {
          es: "Probar perifericos (mouse, teclado, impresora, etc.)",
          en: "Test peripherals (mouse, keyboard, printer, etc.)",
          pt: "Testar perifericos (mouse, teclado, impressora, etc.)",
        },
      },
      {
        id: "Verificar estado de la bateria (si es laptop)",
        labels: {
          es: "Verificar estado de la bateria (si es laptop)",
          en: "Check battery status (if laptop)",
          pt: "Verificar estado da bateria (se for laptop)",
        },
      },
    ],
  },
];

function getChecklistTemplate() {
  const lang = settings.language || "es";
  return checklistTemplateData.map((group) => ({
    title: group.titleLabels[lang] || group.titleLabels.es,
    items: group.items.map((item) => ({
      id: item.id,
      label: item.labels[lang] || item.labels.es,
    })),
  }));
}

const defaultData = {
  pcs: [],
  groups: [],
};

const defaultSettings = {
  showNextLabel: true,
  language: "es",
  notificationsEnabled: true,
  notificationSound: false,
  dateFormat: "locale",
  historyLimit: 4,
  autoBackupEnabled: false,
  lastBackupAt: null,
  updateMode: "ask",
  darkMode: false,
  largeText: false,
  highContrast: false,
};

const i18n = {
  es: {
    heroSubtitle: "Calendario, checklist e inventario de PCs en un solo lugar.",
    btnAddPc: "Agregar PC",
    btnExportJson: "Exportar JSON",
    btnImportJson: "Importar JSON",
    btnExportCsv: "Exportar CSV",
    btnExportExcel: "Exportar Excel",
    btnImportCsv: "Importar CSV",
    btnExport: "Exportar",
    btnImport: "Importar",
    btnImportExcel: "Importar Excel",
    tabAlerts: "Alertas",
    tabMaintenance: "Mantenimientos",
    tabInventory: "Inventario",
    tabGroups: "Grupos",
    tabHidden: "Ocultos",
    tabConfig: "Configuracion",
    sectionAlertsTitle: "Alertas de mantenimiento",
    sectionSummaryTitle: "Resumen",
    chartTitle: "Mantenimientos por mes",
    chartNote: "Ultimos 12 meses",
    chartAria: "Grafico de mantenimientos por mes",
    sectionHistoryTitle: "Historial de mantenimientos",
    labelFrom: "Desde",
    labelTo: "Hasta",
    labelType: "Tipo",
    labelTecnico: "Tecnico",
    labelTecnico: "Tecnico",
    optionAll: "Todos",
    optionTotal: "Total",
    optionCleaning: "Limpieza",
    tableDate: "Fecha",
    tableEquipo: "Equipo",
    tableUsuario: "Usuario",
    tableTipo: "Tipo",
    tableTecnico: "Tecnico",
    tableNotas: "Notas",
    tableAcciones: "Acciones",
    sectionRegisterTitle: "Registrar mantenimiento",
    labelUsuario: "Usuario",
    labelPC: "PC",
    labelFecha: "Fecha",
    labelAdjuntos: "Adjuntos",
    labelObservaciones: "Observaciones",
    btnClearFilter: "Borrar filtro",
    btnOpenChecklist: "Abrir checklist (solo total)",
    btnSaveMaintenance: "Guardar mantenimiento",
    sectionInventoryTitle: "Inventario de PCs",
    searchPlaceholder: "Buscar por usuario, equipo o IP...",
    tableIP: "IP",
    tableEstado: "Estado",
    tableGrupo: "Grupo",
    tableUltimo: "Ultimo mantenimiento",
    tableProximo: "Proximo",
    sectionGroupsTitle: "Grupos de equipos",
    sectionGroupCreateTitle: "Crear / editar grupo",
    labelNombre: "Nombre",
    labelCadaMeses: "Cada (meses)",
    labelAvisoDias: "Aviso (dias)",
    monthsUnit: "meses",
    daysUnit: "dias",
    btnCancel: "Cancelar",
    btnSaveGroup: "Guardar grupo",
    tableIntervalo: "Intervalo",
    tableAviso: "Aviso",
    tableEquipos: "Equipos",
    sectionGroupAssignTitle: "Asignacion de grupos",
    sectionConfigTitle: "Configuracion",
    sectionAlertsNextTitle: "Alertas y proximos",
    switchShowNextLabel: "Mostrar cartel Proximo",
    helperShowNextLabel: "Activa o desactiva la linea Proximo en las alertas.",
    sectionLanguagesTitle: "Idiomas",
    labelLanguage: "Idioma",
    languageEs: "Espanol",
    languageEn: "English",
    languagePt: "Portugues",
    sectionUpdatesTitle: "Actualizaciones",
    labelUpdateMode: "Modo",
    updateModeAuto: "Automaticas",
    updateModeAsk: "Preguntar antes",
    helperUpdateMode: "Elegi si queres descargar en automatico o pedir confirmacion.",
    footerTitle: "Hecho por Sistemas Whittall",
    footerSubtitle: "Paginas web, sistemas de gestion, portfolios y mas.",
    sectionNotificationsTitle: "Notificaciones",
    switchNotifications: "Activar notificaciones al abrir",
    switchNotificationSound: "Reproducir sonido con la notificacion",
    sectionThemeTitle: "Apariencia",
    switchDarkMode: "Activar modo oscuro",
    switchLargeText: "Texto grande",
    switchHighContrast: "Alto contraste",
    sectionDateFormatTitle: "Formato de fecha",
    labelDateFormat: "Formato",
    dateFormatLocale: "Automatico",
    dateFormatDMY: "DD/MM/AAAA",
    dateFormatMDY: "MM/DD/AAAA",
    sectionHistoryLimitTitle: "Historial",
    labelHistoryLimit: "Mantener ultimos",
    labelHistoryItems: "registros",
    sectionBackupTitle: "Auto-backup",
    switchAutoBackup: "Guardar un backup semanal",
    helperAutoBackup: "Se descargara un JSON cuando pase 1 semana.",
    sectionExportTitle: "Exportaciones",
    btnExportAll: "Exportar todo",
    btnEmail: "Email",
    btnLinkedIn: "LinkedIn",
    btnInstagram: "Instagram (pronto)",
    ariaEmail: "Email",
    ariaLinkedIn: "LinkedIn",
    ariaInstagram: "Instagram (pronto)",
    windowMinimize: "Minimizar",
    windowMaximize: "Maximizar o restaurar",
    windowClose: "Cerrar",
    sectionsLabel: "Secciones",
    sectionHiddenTitle: "Mantenimientos ocultos",
    btnClearHidden: "Borrar todos",
    labelEquipo: "Equipo",
    labelIP: "IP",
    labelGrupo: "Grupo",
    labelEstado: "Estado",
    labelNotas: "Notas",
    btnSave: "Guardar",
    btnDeletePc: "Eliminar PC",
    btnConfirm: "Confirmar",
    pcDialogNew: "Nueva PC",
    pcDialogEdit: "Editar PC",
    checklistTitle: "Checklist de mantenimiento total",
    btnClose: "Cerrar",
    btnClear: "Limpiar",
    btnSaveChecklist: "Guardar checklist",
    checklistViewTitle: "Checklist ultimo mantenimiento",
    attachmentsTitle: "Adjuntos del mantenimiento",
    checklistMarkAll: "Marcar todo",
    noDate: "Sin fecha",
    overdue: "Vencido",
    dueIn: "En {days} dias",
    upToDate: "Al dia",
    noPcs: "No hay PCs cargadas. Usa 'Agregar PC' o importa un archivo.",
    noResults: "No hay resultados.",
    noGroups: "No hay equipos cargados.",
    noMaintenance: "No hay mantenimientos registrados.",
    noHiddenMaintenance: "No hay mantenimientos ocultos.",
    noAttachments: "No hay adjuntos.",
    attachmentFile: "archivo",
    download: "Descargar",
    lastNone: "Sin registro",
    groupLabel: "Grupo",
    lastLabel: "Ultimo",
    nextLabel: "Proximo",
    estimatedLabel: "Fecha estimada",
    viewChecklist: "Ver checklist",
    statusActive: "Activo",
    statusStock: "Stock",
    statusBaja: "Baja",
    typeTotal: "Total",
    typeCleaning: "Limpieza",
    chartTotal: "Total",
    chartNoData: "Sin registros en este periodo",
    summaryTotalPcs: "PCs totales",
    summaryStatusCounts: "Activos / Stock / Baja",
    summaryDue: "Vencidos",
    summaryWarn: "Por vencer",
    summaryMaintenance: "Mantenimientos",
    summaryHidden: "Ocultos",
    summaryTopTech: "Tecnico principal",
    summaryLastMaintenance: "Ultimo mantenimiento",
    actionEdit: "Editar",
    actionDelete: "Eliminar",
    actionRegister: "Registrar",
    actionHide: "Ocultar",
    actionShow: "Reactivar",
    actionViewAttachments: "Adjuntos",
    actionEditRecord: "Editar",
    confirmTitle: "Confirmar",
    exportDialogTitle: "Exportar",
    importDialogTitle: "Importar",
    confirmDeleteGroup: "Eliminar el grupo '{name}'? Los equipos pasaran a {defaultGroup}.",
    confirmDeletePc: "Eliminar la PC '{equipo}' de {usuario}? Se borrara su historial.",
    confirmDeleteHidden: "Eliminar este mantenimiento oculto definitivamente?",
    updateAvailableTitle: "Actualizacion disponible",
    updateAvailableMessage:
      "Hay una nueva version ({version}). Queres descargarla ahora? (La actualizacion no borra los datos cargados)",
    updateDownloadingTitle: "Descargando actualizacion",
    updateDownloadingMessage:
      "Estamos descargando la actualizacion. Espera unos segundos...",
    updateDownloadedTitle: "Actualizacion lista",
    updateDownloadedMessage: "La actualizacion se descargo. Queres reiniciar ahora?",
    updateDownloadBtn: "Descargar",
    updateInstallBtn: "Reiniciar",
    updateDownloading: "Descargando actualizacion...",
    updateError: "No se pudo buscar actualizaciones.",
    toastConfigSaved: "Configuracion guardada.",
    notificationTitle: "Repar-Ando",
    notificationBody:
      "No te olvides: tenes {count} mantenimiento(s) pendiente(s).",
    backupDone: "Backup descargado.",
    toastMaintenanceSaved: "Mantenimiento guardado.",
    toastMaintenanceUpdated: "Mantenimiento actualizado.",
    toastMaintenanceDeleted: "Mantenimiento eliminado.",
    toastPcDeleted: "PC eliminada.",
    toastChecklistRequired: "Completa el checklist antes de guardar.",
    toastHiddenRemoved: "Mantenimientos ocultos eliminados.",
    toastHiddenNone: "No hay mantenimientos ocultos.",
    alertChecklistOnlyTotal: "El checklist solo aplica para mantenimiento total.",
    alertNoMaintenance: "Este equipo no tiene mantenimiento registrado.",
    alertNotTotal: "El mantenimiento no fue total.",
    alertNotTotalLast: "El ultimo mantenimiento no fue total.",
    alertAttachmentsRead: "No se pudieron leer los adjuntos.",
    alertImportJson: "No se pudo importar el JSON. Verifica el formato.",
    alertImportSpreadsheet: "No se pudo importar el archivo. Verifica el formato.",
    alertExportSpreadsheet: "No se pudo exportar el Excel.",
    checklistTitleWithDate: "Checklist mantenimiento: {equipo} ({date})",
    checklistTitleLast: "Checklist ultimo mantenimiento: {equipo}",
    exportJsonFilename: "repar-ando-datos.json",
    exportCsvFilename: "repar-ando-inventario.csv",
    exportExcelFilename: "repar-ando-inventario.xlsx",
    csvUsuario: "usuario",
    csvEquipo: "equipo",
    csvIp: "ip",
    csvEstado: "estado",
    csvGrupo: "grupo",
    csvNotasPc: "notas_pc",
    csvUltimaFecha: "ultima_fecha",
    csvUltimoTipo: "ultimo_tipo",
    csvNotas: "notas",
    csvTecnico: "tecnico",
    placeholderPc: "Filtrar por PC...",
    placeholderUser: "Filtrar por usuario...",
    labelDefaultGroup: "Por defecto",
    labelGroupFallback: "Grupo",
    labelSection: "Seccion",
    labelMonth: "{month}",
  },
  en: {
    heroSubtitle: "Calendar, checklist, and PC inventory in one place.",
    btnAddPc: "Add PC",
    btnExportJson: "Export JSON",
    btnImportJson: "Import JSON",
    btnExportCsv: "Export CSV",
    btnExportExcel: "Export Excel",
    btnImportCsv: "Import CSV",
    btnExport: "Export",
    btnImport: "Import",
    btnImportExcel: "Import Excel",
    tabAlerts: "Alerts",
    tabMaintenance: "Maintenance",
    tabInventory: "Inventory",
    tabGroups: "Groups",
    tabHidden: "Hidden",
    tabConfig: "Settings",
    sectionAlertsTitle: "Maintenance alerts",
    sectionSummaryTitle: "Summary",
    chartTitle: "Maintenance per month",
    chartNote: "Last 12 months",
    chartAria: "Maintenance per month chart",
    sectionHistoryTitle: "Maintenance history",
    labelFrom: "From",
    labelTo: "To",
    labelType: "Type",
    labelTecnico: "Technician",
    optionAll: "All",
    optionTotal: "Total",
    optionCleaning: "Cleaning",
    tableDate: "Date",
    tableEquipo: "PC",
    tableUsuario: "User",
    tableTipo: "Type",
    tableTecnico: "Technician",
    tableNotas: "Notes",
    tableAcciones: "Actions",
    sectionRegisterTitle: "Register maintenance",
    labelUsuario: "User",
    labelPC: "PC",
    labelFecha: "Date",
    labelAdjuntos: "Attachments",
    labelObservaciones: "Notes",
    btnClearFilter: "Clear filter",
    btnOpenChecklist: "Open checklist (total only)",
    btnSaveMaintenance: "Save maintenance",
    sectionInventoryTitle: "PC inventory",
    searchPlaceholder: "Search by user, PC, or IP...",
    tableIP: "IP",
    tableEstado: "Status",
    tableGrupo: "Group",
    tableUltimo: "Last maintenance",
    tableProximo: "Next",
    sectionGroupsTitle: "PC groups",
    sectionGroupCreateTitle: "Create / edit group",
    labelNombre: "Name",
    labelCadaMeses: "Every (months)",
    labelAvisoDias: "Alert (days)",
    monthsUnit: "months",
    daysUnit: "days",
    btnCancel: "Cancel",
    btnSaveGroup: "Save group",
    tableIntervalo: "Interval",
    tableAviso: "Alert",
    tableEquipos: "PCs",
    sectionGroupAssignTitle: "Group assignment",
    sectionConfigTitle: "Settings",
    sectionAlertsNextTitle: "Alerts and next",
    switchShowNextLabel: "Show Next label",
    helperShowNextLabel: "Toggle the Next line in alerts.",
    sectionLanguagesTitle: "Languages",
    labelLanguage: "Language",
    languageEs: "Spanish",
    languageEn: "English",
    languagePt: "Portuguese",
    sectionUpdatesTitle: "Updates",
    labelUpdateMode: "Mode",
    updateModeAuto: "Automatic",
    updateModeAsk: "Ask first",
    helperUpdateMode: "Choose whether to auto-download or ask for confirmation.",
    footerTitle: "Made by Sistemas Whittall",
    footerSubtitle: "Websites, management systems, portfolios, and more.",
    sectionNotificationsTitle: "Notifications",
    switchNotifications: "Enable notifications on start",
    switchNotificationSound: "Play a sound with the notification",
    sectionThemeTitle: "Appearance",
    switchDarkMode: "Enable dark mode",
    switchLargeText: "Large text",
    switchHighContrast: "High contrast",
    sectionDateFormatTitle: "Date format",
    labelDateFormat: "Format",
    dateFormatLocale: "Automatic",
    dateFormatDMY: "DD/MM/YYYY",
    dateFormatMDY: "MM/DD/YYYY",
    sectionHistoryLimitTitle: "History",
    labelHistoryLimit: "Keep last",
    labelHistoryItems: "records",
    sectionBackupTitle: "Auto-backup",
    switchAutoBackup: "Save a weekly backup",
    helperAutoBackup: "A JSON download will run after 1 week.",
    sectionExportTitle: "Exports",
    btnExportAll: "Export all",
    btnEmail: "Email",
    btnLinkedIn: "LinkedIn",
    btnInstagram: "Instagram (soon)",
    ariaEmail: "Email",
    ariaLinkedIn: "LinkedIn",
    ariaInstagram: "Instagram (soon)",
    windowMinimize: "Minimize",
    windowMaximize: "Maximize or restore",
    windowClose: "Close",
    sectionsLabel: "Sections",
    sectionHiddenTitle: "Hidden maintenance",
    btnClearHidden: "Clear all",
    labelEquipo: "PC",
    labelIP: "IP",
    labelGrupo: "Group",
    labelEstado: "Status",
    labelNotas: "Notes",
    btnSave: "Save",
    btnDeletePc: "Delete PC",
    btnConfirm: "Confirm",
    pcDialogNew: "New PC",
    pcDialogEdit: "Edit PC",
    checklistTitle: "Total maintenance checklist",
    btnClose: "Close",
    btnClear: "Clear",
    btnSaveChecklist: "Save checklist",
    checklistViewTitle: "Last maintenance checklist",
    attachmentsTitle: "Maintenance attachments",
    checklistMarkAll: "Mark all",
    noDate: "No date",
    overdue: "Overdue",
    dueIn: "In {days} days",
    upToDate: "Up to date",
    noPcs: "No PCs loaded. Use 'Add PC' or import a file.",
    noResults: "No results.",
    noGroups: "No PCs loaded.",
    noMaintenance: "No maintenance records.",
    noHiddenMaintenance: "No hidden maintenance.",
    noAttachments: "No attachments.",
    attachmentFile: "file",
    download: "Download",
    lastNone: "No record",
    groupLabel: "Group",
    lastLabel: "Last",
    nextLabel: "Next",
    estimatedLabel: "Estimated date",
    viewChecklist: "View checklist",
    statusActive: "Active",
    statusStock: "Stock",
    statusBaja: "Retired",
    typeTotal: "Total",
    typeCleaning: "Cleaning",
    chartTotal: "Total",
    chartNoData: "No records in this period",
    summaryTotalPcs: "Total PCs",
    summaryStatusCounts: "Active / Stock / Retired",
    summaryDue: "Overdue",
    summaryWarn: "Due soon",
    summaryMaintenance: "Maintenance",
    summaryHidden: "Hidden",
    summaryTopTech: "Top technician",
    summaryLastMaintenance: "Last maintenance",
    actionEdit: "Edit",
    actionDelete: "Delete",
    actionRegister: "Register",
    actionHide: "Hide",
    actionShow: "Restore",
    actionViewAttachments: "Attachments",
    actionEditRecord: "Edit",
    confirmTitle: "Confirm",
    exportDialogTitle: "Export",
    importDialogTitle: "Import",
    confirmDeleteGroup: "Delete group '{name}'? PCs will move to {defaultGroup}.",
    confirmDeletePc: "Delete PC '{equipo}' for {usuario}? Its history will be removed.",
    confirmDeleteHidden: "Delete this hidden maintenance permanently?",
    updateAvailableTitle: "Update available",
    updateAvailableMessage:
      "A new version is available ({version}). Download it now? (Your data will not be deleted)",
    updateDownloadingTitle: "Downloading update",
    updateDownloadingMessage:
      "We are downloading the update. Please wait a few seconds...",
    updateDownloadedTitle: "Update ready",
    updateDownloadedMessage: "The update was downloaded. Restart now?",
    updateDownloadBtn: "Download",
    updateInstallBtn: "Restart",
    updateDownloading: "Downloading update...",
    updateError: "Could not check for updates.",
    toastConfigSaved: "Settings saved.",
    notificationTitle: "Repar-Ando",
    notificationBody:
      "Don’t forget: you have {count} pending maintenance item(s).",
    backupDone: "Backup downloaded.",
    toastMaintenanceSaved: "Maintenance saved.",
    toastMaintenanceUpdated: "Maintenance updated.",
    toastMaintenanceDeleted: "Maintenance deleted.",
    toastPcDeleted: "PC deleted.",
    toastChecklistRequired: "Complete the checklist before saving.",
    toastHiddenRemoved: "Hidden maintenance removed.",
    toastHiddenNone: "No hidden maintenance.",
    alertChecklistOnlyTotal: "Checklist applies only to total maintenance.",
    alertNoMaintenance: "This PC has no maintenance record.",
    alertNotTotal: "Maintenance was not total.",
    alertNotTotalLast: "Last maintenance was not total.",
    alertAttachmentsRead: "Could not read attachments.",
    alertImportJson: "Could not import JSON. Check the format.",
    alertImportSpreadsheet: "Could not import the file. Check the format.",
    alertExportSpreadsheet: "Could not export the spreadsheet.",
    checklistTitleWithDate: "Maintenance checklist: {equipo} ({date})",
    checklistTitleLast: "Last maintenance checklist: {equipo}",
    exportJsonFilename: "repar-ando-data.json",
    exportCsvFilename: "repar-ando-inventory.csv",
    exportExcelFilename: "repar-ando-inventory.xlsx",
    csvUsuario: "user",
    csvEquipo: "pc",
    csvIp: "ip",
    csvEstado: "status",
    csvGrupo: "group",
    csvNotasPc: "pc_notes",
    csvUltimaFecha: "last_date",
    csvUltimoTipo: "last_type",
    csvNotas: "notes",
    csvTecnico: "technician",
    placeholderPc: "Filter by PC...",
    placeholderUser: "Filter by user...",
    labelDefaultGroup: "Default",
    labelGroupFallback: "Group",
    labelSection: "Section",
  },
  pt: {
    heroSubtitle: "Calendario, checklist e inventario de PCs em um só lugar.",
    btnAddPc: "Adicionar PC",
    btnExportJson: "Exportar JSON",
    btnImportJson: "Importar JSON",
    btnExportCsv: "Exportar CSV",
    btnExportExcel: "Exportar Excel",
    btnImportCsv: "Importar CSV",
    btnExport: "Exportar",
    btnImport: "Importar",
    btnImportExcel: "Importar Excel",
    tabAlerts: "Alertas",
    tabMaintenance: "Manutencoes",
    tabInventory: "Inventario",
    tabGroups: "Grupos",
    tabHidden: "Ocultos",
    tabConfig: "Configuracao",
    sectionAlertsTitle: "Alertas de manutencao",
    sectionSummaryTitle: "Resumo",
    chartTitle: "Manutencoes por mes",
    chartNote: "Ultimos 12 meses",
    chartAria: "Grafico de manutencoes por mes",
    sectionHistoryTitle: "Historico de manutencoes",
    labelFrom: "De",
    labelTo: "Ate",
    labelType: "Tipo",
    optionAll: "Todos",
    optionTotal: "Total",
    optionCleaning: "Limpeza",
    tableDate: "Data",
    tableEquipo: "PC",
    tableUsuario: "Usuario",
    tableTipo: "Tipo",
    tableTecnico: "Tecnico",
    tableNotas: "Notas",
    tableAcciones: "Acoes",
    sectionRegisterTitle: "Registrar manutencao",
    labelUsuario: "Usuario",
    labelPC: "PC",
    labelFecha: "Data",
    labelAdjuntos: "Anexos",
    labelObservaciones: "Observacoes",
    btnClearFilter: "Limpar filtro",
    btnOpenChecklist: "Abrir checklist (somente total)",
    btnSaveMaintenance: "Salvar manutencao",
    sectionInventoryTitle: "Inventario de PCs",
    searchPlaceholder: "Buscar por usuario, PC ou IP...",
    tableIP: "IP",
    tableEstado: "Status",
    tableGrupo: "Grupo",
    tableUltimo: "Ultima manutencao",
    tableProximo: "Proximo",
    sectionGroupsTitle: "Grupos de PCs",
    sectionGroupCreateTitle: "Criar / editar grupo",
    labelNombre: "Nome",
    labelCadaMeses: "Cada (meses)",
    labelAvisoDias: "Aviso (dias)",
    monthsUnit: "meses",
    daysUnit: "dias",
    btnCancel: "Cancelar",
    btnSaveGroup: "Salvar grupo",
    tableIntervalo: "Intervalo",
    tableAviso: "Aviso",
    tableEquipos: "PCs",
    sectionGroupAssignTitle: "Atribuicao de grupos",
    sectionConfigTitle: "Configuracao",
    sectionAlertsNextTitle: "Alertas e proximo",
    switchShowNextLabel: "Mostrar linha Proximo",
    helperShowNextLabel: "Ative ou desative a linha Proximo nos alertas.",
    sectionLanguagesTitle: "Idiomas",
    labelLanguage: "Idioma",
    languageEs: "Espanhol",
    languageEn: "Ingles",
    languagePt: "Portugues",
    sectionUpdatesTitle: "Atualizacoes",
    labelUpdateMode: "Modo",
    updateModeAuto: "Automaticas",
    updateModeAsk: "Perguntar antes",
    helperUpdateMode: "Escolha baixar automaticamente ou pedir confirmacao.",
    footerTitle: "Feito por Sistemas Whittall",
    footerSubtitle: "Sites, sistemas de gestao, portfolios e mais.",
    sectionNotificationsTitle: "Notificacoes",
    switchNotifications: "Ativar notificacoes ao abrir",
    switchNotificationSound: "Reproduzir som com a notificacao",
    sectionThemeTitle: "Aparencia",
    switchDarkMode: "Ativar modo escuro",
    switchLargeText: "Texto grande",
    switchHighContrast: "Alto contraste",
    sectionDateFormatTitle: "Formato de data",
    labelDateFormat: "Formato",
    dateFormatLocale: "Automatico",
    dateFormatDMY: "DD/MM/AAAA",
    dateFormatMDY: "MM/DD/AAAA",
    sectionHistoryLimitTitle: "Historico",
    labelHistoryLimit: "Manter ultimos",
    labelHistoryItems: "registros",
    sectionBackupTitle: "Auto-backup",
    switchAutoBackup: "Salvar um backup semanal",
    helperAutoBackup: "Um JSON sera baixado quando passar 1 semana.",
    sectionExportTitle: "Exportacoes",
    btnExportAll: "Exportar tudo",
    btnEmail: "Email",
    btnLinkedIn: "LinkedIn",
    btnInstagram: "Instagram (em breve)",
    ariaEmail: "Email",
    ariaLinkedIn: "LinkedIn",
    ariaInstagram: "Instagram (em breve)",
    windowMinimize: "Minimizar",
    windowMaximize: "Maximizar ou restaurar",
    windowClose: "Fechar",
    sectionsLabel: "Secoes",
    sectionHiddenTitle: "Manutencoes ocultas",
    btnClearHidden: "Apagar tudo",
    labelEquipo: "PC",
    labelIP: "IP",
    labelGrupo: "Grupo",
    labelEstado: "Status",
    labelNotas: "Notas",
    btnSave: "Salvar",
    btnDeletePc: "Excluir PC",
    btnConfirm: "Confirmar",
    pcDialogNew: "Novo PC",
    pcDialogEdit: "Editar PC",
    checklistTitle: "Checklist de manutencao total",
    btnClose: "Fechar",
    btnClear: "Limpar",
    btnSaveChecklist: "Salvar checklist",
    checklistViewTitle: "Checklist da ultima manutencao",
    attachmentsTitle: "Anexos da manutencao",
    checklistMarkAll: "Marcar tudo",
    noDate: "Sem data",
    overdue: "Vencido",
    dueIn: "Em {days} dias",
    upToDate: "Em dia",
    noPcs: "Nenhum PC carregado. Use 'Adicionar PC' ou importe um arquivo.",
    noResults: "Nenhum resultado.",
    noGroups: "Nenhum PC carregado.",
    noMaintenance: "Nenhuma manutencao registrada.",
    noHiddenMaintenance: "Nenhuma manutencao oculta.",
    noAttachments: "Sem anexos.",
    attachmentFile: "arquivo",
    download: "Baixar",
    lastNone: "Sem registro",
    groupLabel: "Grupo",
    lastLabel: "Ultimo",
    nextLabel: "Proximo",
    estimatedLabel: "Data estimada",
    viewChecklist: "Ver checklist",
    statusActive: "Ativo",
    statusStock: "Estoque",
    statusBaja: "Baixa",
    typeTotal: "Total",
    typeCleaning: "Limpeza",
    chartTotal: "Total",
    chartNoData: "Sem registros neste periodo",
    summaryTotalPcs: "Total de PCs",
    summaryStatusCounts: "Ativo / Estoque / Baixa",
    summaryDue: "Vencidos",
    summaryWarn: "A vencer",
    summaryMaintenance: "Manutencoes",
    summaryHidden: "Ocultos",
    summaryTopTech: "Tecnico principal",
    summaryLastMaintenance: "Ultima manutencao",
    actionEdit: "Editar",
    actionDelete: "Excluir",
    actionRegister: "Registrar",
    actionHide: "Ocultar",
    actionShow: "Reativar",
    actionViewAttachments: "Anexos",
    actionEditRecord: "Editar",
    confirmTitle: "Confirmar",
    exportDialogTitle: "Exportar",
    importDialogTitle: "Importar",
    confirmDeleteGroup: "Excluir o grupo '{name}'? Os PCs irao para {defaultGroup}.",
    confirmDeletePc: "Excluir o PC '{equipo}' de {usuario}? O historico sera removido.",
    confirmDeleteHidden: "Excluir esta manutencao oculta definitivamente?",
    updateAvailableTitle: "Atualizacao disponivel",
    updateAvailableMessage:
      "Uma nova versao esta disponivel ({version}). Baixar agora? (A atualizacao nao apaga os dados)",
    updateDownloadingTitle: "Baixando atualizacao",
    updateDownloadingMessage:
      "Estamos baixando a atualizacao. Aguarde alguns segundos...",
    updateDownloadedTitle: "Atualizacao pronta",
    updateDownloadedMessage: "A atualizacao foi baixada. Reiniciar agora?",
    updateDownloadBtn: "Baixar",
    updateInstallBtn: "Reiniciar",
    updateDownloading: "Baixando atualizacao...",
    updateError: "Nao foi possivel buscar atualizacoes.",
    toastConfigSaved: "Configuracao salva.",
    notificationTitle: "Repar-Ando",
    notificationBody:
      "Nao esqueca: voce tem {count} manutencao(oes) pendente(s).",
    backupDone: "Backup baixado.",
    toastMaintenanceSaved: "Manutencao salva.",
    toastMaintenanceUpdated: "Manutencao atualizada.",
    toastMaintenanceDeleted: "Manutencao excluida.",
    toastPcDeleted: "PC excluido.",
    toastChecklistRequired: "Complete o checklist antes de salvar.",
    toastHiddenRemoved: "Manutencoes ocultas removidas.",
    toastHiddenNone: "Nenhuma manutencao oculta.",
    alertChecklistOnlyTotal: "Checklist vale apenas para manutencao total.",
    alertNoMaintenance: "Este PC nao tem manutencao registrada.",
    alertNotTotal: "A manutencao nao foi total.",
    alertNotTotalLast: "A ultima manutencao nao foi total.",
    alertAttachmentsRead: "Nao foi possivel ler os anexos.",
    alertImportJson: "Nao foi possivel importar o JSON. Verifique o formato.",
    alertImportSpreadsheet: "Nao foi possivel importar o arquivo. Verifique o formato.",
    alertExportSpreadsheet: "Nao foi possivel exportar o Excel.",
    checklistTitleWithDate: "Checklist manutencao: {equipo} ({date})",
    checklistTitleLast: "Checklist ultima manutencao: {equipo}",
    exportJsonFilename: "repar-ando-dados.json",
    exportCsvFilename: "repar-ando-inventario.csv",
    exportExcelFilename: "repar-ando-inventario.xlsx",
    csvUsuario: "usuario",
    csvEquipo: "pc",
    csvIp: "ip",
    csvEstado: "status",
    csvGrupo: "grupo",
    csvNotasPc: "notas_pc",
    csvUltimaFecha: "ultima_data",
    csvUltimoTipo: "ultimo_tipo",
    csvNotas: "notas",
    csvTecnico: "tecnico",
    placeholderPc: "Filtrar por PC...",
    placeholderUser: "Filtrar por usuario...",
    labelDefaultGroup: "Padrao",
    labelGroupFallback: "Grupo",
    labelSection: "Secao",
  },
};

function t(key, vars = {}) {
  const lang = settings.language || "es";
  const dict = i18n[lang] || i18n.es;
  let value = dict[key] || i18n.es[key] || key;
  Object.entries(vars).forEach(([name, val]) => {
    value = value.replace(new RegExp(`\\{${name}\\}`, "g"), String(val));
  });
  return value;
}

function getLocale() {
  if (settings.language === "en") return "en-US";
  if (settings.language === "pt") return "pt-BR";
  return "es-AR";
}

const state = {
  data: loadData(),
  checklistDraft: {},
  checklistPcId: null,
  editingRecord: null,
};

const settings = loadSettings();

normalizeData();

const alertGrid = document.getElementById("alertGrid");
const summaryGrid = document.getElementById("summaryGrid");
const maintenanceChart = document.getElementById("maintenanceChart");
const maintenanceChartLegend = document.getElementById(
  "maintenanceChartLegend"
);
const startNextSwitch = document.getElementById("startNextSwitch");
const languageSelect = document.getElementById("languageSelect");
const notificationsSwitch = document.getElementById("notificationsSwitch");
const darkModeSwitch = document.getElementById("darkModeSwitch");
const notificationSoundSwitch = document.getElementById(
  "notificationSoundSwitch"
);
const updateModeSelect = document.getElementById("updateModeSelect");
const dateFormatSelect = document.getElementById("dateFormatSelect");
const historyLimitInput = document.getElementById("historyLimitInput");
const autoBackupSwitch = document.getElementById("autoBackupSwitch");
const exportAllBtn = document.getElementById("exportAllBtn");
const largeTextSwitch = document.getElementById("largeTextSwitch");
const highContrastSwitch = document.getElementById("highContrastSwitch");
const pcTableBody = document.getElementById("pcTableBody");
const maintenanceTableBody = document.getElementById("maintenanceTableBody");
const hiddenMaintenanceTableBody = document.getElementById(
  "hiddenMaintenanceTableBody"
);
const maintenancePcSelect = document.getElementById("maintenancePcSelect");
const maintenanceTypeSelect = document.getElementById("maintenanceTypeSelect");
const maintenanceDateInput = document.getElementById("maintenanceDateInput");
const maintenanceTechInput = document.getElementById("maintenanceTechInput");
const maintenanceAttachmentsInput = document.getElementById(
  "maintenanceAttachmentsInput"
);
const maintenanceNotesInput = document.getElementById("maintenanceNotesInput");
const openChecklistBtn = document.getElementById("openChecklistBtn");
const maintenanceForm = document.getElementById("maintenanceForm");
const maintenanceUserSelect = document.getElementById(
  "maintenanceUserSelect"
);
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const searchInput = document.getElementById("searchInput");
const historyFromInput = document.getElementById("historyFromInput");
const historyToInput = document.getElementById("historyToInput");
const historyTypeSelect = document.getElementById("historyTypeSelect");
const toast = document.getElementById("toast");
const groupForm = document.getElementById("groupForm");
const groupIdInput = document.getElementById("groupIdInput");
const groupNameInput = document.getElementById("groupNameInput");
const groupIntervalInput = document.getElementById("groupIntervalInput");
const groupAlertInput = document.getElementById("groupAlertInput");
const groupCancelBtn = document.getElementById("groupCancelBtn");
const groupTableBody = document.getElementById("groupTableBody");
const groupAssignTableBody = document.getElementById(
  "groupAssignTableBody"
);

const pcDialog = document.getElementById("pcDialog");
const pcForm = document.getElementById("pcForm");
const pcDialogTitle = document.getElementById("pcDialogTitle");
const pcIdInput = document.getElementById("pcIdInput");
const pcUserInput = document.getElementById("pcUserInput");
const pcEquipoInput = document.getElementById("pcEquipoInput");
const pcIpInput = document.getElementById("pcIpInput");
const pcGroupSelect = document.getElementById("pcGroupSelect");
const pcStatusSelect = document.getElementById("pcStatusSelect");
const pcNotesInput = document.getElementById("pcNotesInput");
const pcCancelBtn = document.getElementById("pcCancelBtn");
const pcDeleteBtn = document.getElementById("pcDeleteBtn");

const checklistDialog = document.getElementById("checklistDialog");
const checklistForm = document.getElementById("checklistForm");
const checklistContainer = document.getElementById("checklistContainer");
const checklistCancelBtn = document.getElementById("checklistCancelBtn");
const checklistClearBtn = document.getElementById("checklistClearBtn");
const checklistViewDialog = document.getElementById("checklistViewDialog");
const checklistViewContainer = document.getElementById(
  "checklistViewContainer"
);
const checklistViewTitle = document.getElementById("checklistViewTitle");
const checklistViewCloseBtn = document.getElementById("checklistViewCloseBtn");
const attachmentsDialog = document.getElementById("attachmentsDialog");
const attachmentsContainer = document.getElementById("attachmentsContainer");
const attachmentsCloseBtn = document.getElementById("attachmentsCloseBtn");
const confirmDialog = document.getElementById("confirmDialog");
const confirmDialogTitle = document.getElementById("confirmDialogTitle");
const confirmDialogMessage = document.getElementById("confirmDialogMessage");
const confirmCancelBtn = document.getElementById("confirmCancelBtn");
const confirmOkBtn = document.getElementById("confirmOkBtn");
const updateLoadingDialog = document.getElementById("updateLoadingDialog");
const exportDialog = document.getElementById("exportDialog");
const importDialog = document.getElementById("importDialog");
const exportJsonOption = document.getElementById("exportJsonOption");
const exportCsvOption = document.getElementById("exportCsvOption");
const exportExcelOption = document.getElementById("exportExcelOption");
const exportCloseBtn = document.getElementById("exportCloseBtn");
const importJsonOption = document.getElementById("importJsonOption");
const importCsvOption = document.getElementById("importCsvOption");
const importExcelOption = document.getElementById("importExcelOption");
const importCloseBtn = document.getElementById("importCloseBtn");

const addPcBtn = document.getElementById("addPcBtn");
const importJsonInput = document.getElementById("importJsonInput");
const importCsvInput = document.getElementById("importCsvInput");
const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");
const clearHiddenBtn = document.getElementById("clearHiddenBtn");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const minBtn = document.getElementById("minBtn");
const maxBtn = document.getElementById("maxBtn");
const closeBtn = document.getElementById("closeBtn");
const titlebarSection = document.getElementById("titlebarSection");
const externalLinkElements = document.querySelectorAll("[data-external-link]");
const brandHomeBtn = document.getElementById("brandHomeBtn");

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return structuredClone(defaultData);
  }
  try {
    return JSON.parse(raw);
  } catch {
    return structuredClone(defaultData);
  }
}

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) {
    return structuredClone(defaultSettings);
  }
  try {
    return { ...structuredClone(defaultSettings), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultSettings);
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.dataset.i18nTitle));
  });
  document.documentElement.lang = settings.language || "es";
}

function applyTheme() {
  document.body.classList.toggle("dark", Boolean(settings.darkMode));
  document.body.classList.toggle("large-text", Boolean(settings.largeText));
  document.body.classList.toggle("high-contrast", Boolean(settings.highContrast));
}


function normalizeData() {
  let changed = false;
  if (!Array.isArray(state.data.groups)) {
    state.data.groups = [];
    changed = true;
  }
  if (!state.data.groups.length) {
    state.data.groups.push({
      id: DEFAULT_GROUP_ID,
      name: "Por defecto",
      intervalMonths: 3,
      alertDays: 7,
    });
    changed = true;
  } else {
    const hasDefault = state.data.groups.some(
      (group) => group.id === DEFAULT_GROUP_ID
    );
    if (!hasDefault) {
      state.data.groups.unshift({
        id: DEFAULT_GROUP_ID,
        name: "Por defecto",
        intervalMonths: 3,
        alertDays: 7,
      });
      changed = true;
    }
  }

  state.data.groups.forEach((group) => {
    if (!group.name) {
      group.name = group.id === DEFAULT_GROUP_ID ? "Por defecto" : "Grupo";
      changed = true;
    }
    if (!Number.isFinite(Number(group.intervalMonths))) {
      group.intervalMonths = 3;
      changed = true;
    }
    if (!Number.isFinite(Number(group.alertDays))) {
      group.alertDays = 7;
      changed = true;
    }
    group.intervalMonths = Math.max(1, Number(group.intervalMonths));
    group.alertDays = Math.max(0, Number(group.alertDays));
  });

  state.data.pcs.forEach((pc) => {
    if (!pc.groupId || !state.data.groups.some((g) => g.id === pc.groupId)) {
      pc.groupId = DEFAULT_GROUP_ID;
      changed = true;
    }
    if (!pc.status) {
      pc.status = "activo";
      changed = true;
    }
    if (pc.notes === undefined) {
      pc.notes = "";
      changed = true;
    }
    if (!Array.isArray(pc.maintenanceHistory)) {
      pc.maintenanceHistory = [];
      changed = true;
    }
    if (pc.lastMaintenance && pc.maintenanceHistory.length === 0) {
      pc.maintenanceHistory.push({
        id: crypto.randomUUID(),
        date: pc.lastMaintenance.date,
        type: pc.lastMaintenance.type || "total",
        notes: pc.lastMaintenance.notes || "",
        technician: pc.lastMaintenance.technician || "",
        checklist: pc.lastMaintenance.checklist || {},
        attachments: [],
        hidden: false,
      });
      changed = true;
    }
    if (pc.maintenanceHistory.length) {
      pc.maintenanceHistory.forEach((record) => {
        if (!Array.isArray(record.attachments)) {
          record.attachments = [];
          changed = true;
        }
      });
    }
    if (pc.maintenanceHistory.length && !pc.lastMaintenance) {
      syncLastMaintenance(pc);
      changed = true;
    }
    if (trimMaintenanceHistory(pc)) {
      changed = true;
    }
  });
  if (changed) saveData();
}

function getGroupById(groupId) {
  return state.data.groups.find((group) => group.id === groupId);
}

function getDefaultGroup() {
  return (
    getGroupById(DEFAULT_GROUP_ID) || {
      id: DEFAULT_GROUP_ID,
      name: "Por defecto",
      intervalMonths: 3,
      alertDays: 7,
    }
  );
}

function getGroupForPc(pc) {
  return getGroupById(pc.groupId) || getDefaultGroup();
}

function getGroupLabel(group) {
  if (!group) return t("labelDefaultGroup");
  if (group.id === DEFAULT_GROUP_ID) return t("labelDefaultGroup");
  if (!group.name || group.name === "Grupo") return t("labelGroupFallback");
  return group.name;
}

function getMaintenanceTypeLabel(type) {
  if (type === "limpieza") return t("typeCleaning");
  return t("typeTotal");
}

function getStatusLabel(status) {
  if (status === "stock") return t("statusStock");
  if (status === "baja") return t("statusBaja");
  return t("statusActive");
}

function ensureGroupByName(name) {
  const trimmed = String(name || "").trim();
  if (!trimmed) return DEFAULT_GROUP_ID;
  const existing = state.data.groups.find(
    (group) => group.name.toLowerCase() === trimmed.toLowerCase()
  );
  if (existing) return existing.id;
  const newGroup = {
    id: crypto.randomUUID(),
    name: trimmed,
    intervalMonths: 3,
    alertDays: 7,
  };
  state.data.groups.push(newGroup);
  return newGroup.id;
}

function getLatestRecord(pc) {
  const records = pc.maintenanceHistory || [];
  if (!records.length) return null;
  return records.reduce((latest, record) => {
    const latestTime = new Date(latest.date).getTime() || 0;
    const recordTime = new Date(record.date).getTime() || 0;
    return recordTime >= latestTime ? record : latest;
  }, records[0]);
}

function syncLastMaintenance(pc) {
  const latest = getLatestRecord(pc);
  if (!latest) {
    pc.lastMaintenance = null;
    return;
  }
  pc.lastMaintenance = {
    type: latest.type,
    date: latest.date,
    technician: latest.technician || "",
    notes: latest.notes || "",
    checklist: latest.checklist || {},
  };
}

function trimMaintenanceHistory(pc) {
  const history = pc.maintenanceHistory || [];
  const limit = Math.max(1, Number(settings.historyLimit || 4));
  if (history.length <= limit) return false;
  const sorted = [...history].sort((a, b) => {
    const aTime = new Date(a.date).getTime() || 0;
    const bTime = new Date(b.date).getTime() || 0;
    return aTime - bTime;
  });
  const trimmed = sorted.slice(-limit);
  pc.maintenanceHistory = trimmed;
  syncLastMaintenance(pc);
  return true;
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
}

function parseDateOnly(value) {
  if (!value) return null;
  if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  if (typeof value === "string") {
    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (match) {
      const [, y, m, d] = match;
      return new Date(Number(y), Number(m) - 1, Number(d));
    }
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
}

function formatDate(date) {
  if (!date) return t("noDate");
  const parsed = parseDateOnly(date);
  if (!parsed) return t("noDate");
  if (settings.dateFormat === "DMY") {
    return parsed.toLocaleDateString("es-ES");
  }
  if (settings.dateFormat === "MDY") {
    return parsed.toLocaleDateString("en-US");
  }
  return parsed.toLocaleDateString(getLocale());
}

function toDateInputValue(date) {
  const d = parseDateOnly(date);
  if (!d) return "";
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

function addMonths(dateString, months) {
  const date = parseDateOnly(dateString);
  if (!date) return null;
  const day = date.getDate();
  date.setMonth(date.getMonth() + months);
  if (date.getDate() < day) {
    date.setDate(0);
  }
  return date;
}

function getNextMaintenance(pc) {
  if (!pc.lastMaintenance?.date) {
    return { dueDate: null, nextType: null };
  }
  const group = getGroupForPc(pc);
  const dueDate = addMonths(pc.lastMaintenance.date, group.intervalMonths || 3);
  const nextType = pc.lastMaintenance.type === "total" ? "limpieza" : "total";
  return { dueDate, nextType };
}

function getStatus(dueDate, alertDays) {
  if (!dueDate) return { label: t("noDate"), className: "warn" };
  const now = new Date();
  const diff = dueDate.getTime() - now.setHours(0, 0, 0, 0);
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days < 0) return { label: t("overdue"), className: "due" };
  if (days <= alertDays) {
    return { label: t("dueIn", { days }), className: "warn" };
  }
  return { label: t("upToDate"), className: "ok" };
}

function renderAlerts() {
  const items = state.data.pcs
    .map((pc) => {
      const group = getGroupForPc(pc);
      const { dueDate, nextType } = getNextMaintenance(pc);
      const status = getStatus(dueDate, group.alertDays || 0);
      return { pc, dueDate, nextType, status, group };
    })
    .filter(({ pc, status }) => {
      if (!pc.lastMaintenance) return true;
      return status.className !== "ok";
    });

  items.sort((a, b) => {
    const dateA = a.dueDate ? a.dueDate.getTime() : Infinity;
    const dateB = b.dueDate ? b.dueDate.getTime() : Infinity;
    return dateA - dateB;
  });

  alertGrid.innerHTML = "";
  if (!items.length) {
    alertGrid.innerHTML = `<p>${t("noPcs")}</p>`;
    return items;
  }

  items.forEach(({ pc, dueDate, nextType, status, group }) => {
    const card = document.createElement("div");
    card.className = "alert-card";
    const lastMaintenance = pc.lastMaintenance
      ? `${getMaintenanceTypeLabel(pc.lastMaintenance.type)} - ${formatDate(
          pc.lastMaintenance.date
        )}`
      : t("lastNone");
    const nextTypeLabel = nextType ? getMaintenanceTypeLabel(nextType) : "-";
    const canViewChecklist =
      pc.lastMaintenance?.type === "total" && pc.lastMaintenance?.checklist;
    card.innerHTML = `
      <strong>${pc.equipo}</strong>
      <span>${pc.usuario} - ${pc.ip}</span>
      <span>${t("groupLabel")}: ${getGroupLabel(group)}</span>
      <span>${t("lastLabel")}: ${lastMaintenance}</span>
      ${
        settings.showNextLabel
          ? `<span>${t("nextLabel")}: ${nextTypeLabel}</span>`
          : ""
      }
      <span>${t("estimatedLabel")}: ${formatDate(dueDate)}</span>
      <span class="badge ${status.className}">${status.label}</span>
      ${
        canViewChecklist
          ? `<button class="btn ghost" data-action="view-checklist" data-id="${pc.id}">${t("viewChecklist")}</button>`
          : ""
      }
    `;
    alertGrid.appendChild(card);
  });

  return items;
}

function buildMonthlyMaintenanceSeries(months = 12) {
  const now = new Date();
  const series = [];
  const counts = new Map();

  for (let offset = months - 1; offset >= 0; offset -= 1) {
    const date = new Date(now.getFullYear(), now.getMonth() - offset, 1);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const monthLabel = date
      .toLocaleString(getLocale(), { month: "short" })
      .replace(".", "");
    const label = `${monthLabel} ${String(date.getFullYear()).slice(-2)}`;
    counts.set(key, 0);
    series.push({ key, label, count: 0 });
  }

  state.data.pcs.forEach((pc) => {
    (pc.maintenanceHistory || []).forEach((record) => {
      if (record.hidden) return;
      const date = new Date(record.date);
      if (Number.isNaN(date.getTime())) return;
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      if (!counts.has(key)) return;
      counts.set(key, counts.get(key) + 1);
    });
  });

  return series.map((item) => ({
    ...item,
    count: counts.get(item.key) || 0,
  }));
}

function renderMaintenanceChart(series) {
  if (!maintenanceChart || !maintenanceChartLegend) return;
  const total = series.reduce((sum, item) => sum + item.count, 0);
  maintenanceChartLegend.innerHTML = total
    ? `<span><span class="dot"></span>${t("chartTotal")}: ${total}</span>`
    : `<span>${t("chartNoData")}</span>`;

  const ctx = maintenanceChart.getContext("2d");
  if (!ctx) return;

  const width = maintenanceChart.clientWidth || 800;
  const height = maintenanceChart.clientHeight || 240;
  const dpr = window.devicePixelRatio || 1;
  maintenanceChart.width = Math.round(width * dpr);
  maintenanceChart.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  if (!series.length || total === 0) {
    ctx.fillStyle = "rgba(92, 79, 66, 0.7)";
    ctx.font = "14px Cambria, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(t("chartNoData"), width / 2, height / 2);
    return;
  }

  const padding = { top: 16, right: 12, bottom: 32, left: 28 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxCount = Math.max(...series.map((item) => item.count), 1);

  ctx.strokeStyle = "rgba(226, 201, 166, 0.6)";
  ctx.lineWidth = 1;
  ctx.fillStyle = "rgba(92, 79, 66, 0.75)";
  ctx.font = "11px Cambria, serif";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";

  const ticks = 4;
  for (let i = 0; i <= ticks; i += 1) {
    const value = Math.round((maxCount * i) / ticks);
    const y = padding.top + chartHeight - (chartHeight * i) / ticks;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    ctx.fillText(String(value), padding.left - 6, y);
  }

  const slotWidth = chartWidth / series.length;
  const barGap = Math.min(10, slotWidth * 0.3);
  const barWidth = slotWidth - barGap;

  ctx.textAlign = "center";
  ctx.textBaseline = "top";

  series.forEach((item, index) => {
    const barHeight = (chartHeight * item.count) / maxCount;
    const x = padding.left + index * slotWidth + barGap / 2;
    const y = padding.top + chartHeight - barHeight;

    ctx.fillStyle = "rgba(217, 119, 6, 0.85)";
    ctx.fillRect(x, y, barWidth, barHeight);
    ctx.fillStyle = "rgba(92, 79, 66, 0.85)";
    ctx.fillText(item.label, x + barWidth / 2, padding.top + chartHeight + 6);
  });
}

function renderSummary() {
  if (!summaryGrid) return;
  const totalPcs = state.data.pcs.length;
  const statusCounts = { activo: 0, stock: 0, baja: 0 };
  const maintenanceCounts = { total: 0, hidden: 0 };
  let dueCount = 0;
  let warnCount = 0;
  const techCounts = {};
  let lastMaintenanceDate = null;

  state.data.pcs.forEach((pc) => {
    const pcStatus = pc.status || "activo";
    if (statusCounts[pcStatus] !== undefined) {
      statusCounts[pcStatus] += 1;
    }

    const { dueDate } = getNextMaintenance(pc);
    const group = getGroupForPc(pc);
    const status = getStatus(dueDate, group.alertDays || 0);
    if (status.className === "due") dueCount += 1;
    if (status.className === "warn") warnCount += 1;

    (pc.maintenanceHistory || []).forEach((record) => {
      maintenanceCounts.total += 1;
      if (record.hidden) maintenanceCounts.hidden += 1;
      if (!record.hidden && record.date) {
        const recordDate = parseDateOnly(record.date);
        if (recordDate && (!lastMaintenanceDate || recordDate > lastMaintenanceDate)) {
          lastMaintenanceDate = recordDate;
        }
      }
      const tech = (record.technician || "").trim();
      if (tech) techCounts[tech] = (techCounts[tech] || 0) + 1;
    });
  });

  const topTech = Object.entries(techCounts)
    .sort((a, b) => b[1] - a[1])[0];
  const topTechLabel = topTech ? `${topTech[0]} (${topTech[1]})` : "-";

  summaryGrid.innerHTML = `
    <div class="summary-card">
      <span>${t("summaryTotalPcs")}</span>
      <strong>${totalPcs}</strong>
    </div>
    <div class="summary-card">
      <span>${t("summaryStatusCounts")}</span>
      <strong>${statusCounts.activo} / ${statusCounts.stock} / ${statusCounts.baja}</strong>
    </div>
    <div class="summary-card">
      <span>${t("summaryDue")}</span>
      <strong>${dueCount}</strong>
    </div>
    <div class="summary-card">
      <span>${t("summaryWarn")}</span>
      <strong>${warnCount}</strong>
    </div>
    <div class="summary-card">
      <span>${t("summaryMaintenance")}</span>
      <strong>${maintenanceCounts.total}</strong>
    </div>
    <div class="summary-card">
      <span>${t("summaryHidden")}</span>
      <strong>${maintenanceCounts.hidden}</strong>
    </div>
    <div class="summary-card">
      <span>${t("summaryTopTech")}</span>
      <strong>${topTechLabel}</strong>
    </div>
    <div class="summary-card">
      <span>${t("summaryLastMaintenance")}</span>
      <strong>${lastMaintenanceDate ? formatDate(lastMaintenanceDate) : "-"}</strong>
    </div>
  `;

  const monthlySeries = buildMonthlyMaintenanceSeries(12);
  requestAnimationFrame(() => renderMaintenanceChart(monthlySeries));
}

function renderGroupSelectOptions(selectedId = null) {
  const currentValue =
    selectedId || pcGroupSelect.value || DEFAULT_GROUP_ID;
  const options = state.data.groups
    .map((group) => `<option value="${group.id}">${getGroupLabel(group)}</option>`)
    .join("");
  pcGroupSelect.innerHTML = options;
  pcGroupSelect.value = currentValue;
}

function renderGroups() {
  if (!groupTableBody) return;
  groupTableBody.innerHTML = "";
  const counts = {};
  state.data.pcs.forEach((pc) => {
    const groupId = pc.groupId || DEFAULT_GROUP_ID;
    counts[groupId] = (counts[groupId] || 0) + 1;
  });

  state.data.groups.forEach((group) => {
    const row = document.createElement("tr");
    const isDefault = group.id === DEFAULT_GROUP_ID;
    row.innerHTML = `
      <td>${getGroupLabel(group)}</td>
      <td>${group.intervalMonths} ${t("monthsUnit")}</td>
      <td>${group.alertDays} ${t("daysUnit")}</td>
      <td>${counts[group.id] || 0}</td>
      <td>
        <button class="btn ghost" data-action="edit-group" data-id="${group.id}">${t("actionEdit")}</button>
        ${
          isDefault
            ? ""
            : `<button class="btn danger" data-action="delete-group" data-id="${group.id}">${t("actionDelete")}</button>`
        }
      </td>
    `;
    groupTableBody.appendChild(row);
  });
}

function renderGroupAssignments() {
  if (!groupAssignTableBody) return;
  groupAssignTableBody.innerHTML = "";
  if (!state.data.pcs.length) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="3">${t("noGroups")}</td>`;
    groupAssignTableBody.appendChild(row);
    return;
  }

  const options = state.data.groups
    .map((group) => `<option value="${group.id}">${getGroupLabel(group)}</option>`)
    .join("");

  state.data.pcs.forEach((pc) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pc.usuario}</td>
      <td>${pc.equipo}</td>
      <td>
        <select data-action="assign-group" data-id="${pc.id}">
          ${options}
        </select>
      </td>
    `;
    const select = row.querySelector("select");
    select.value = pc.groupId || DEFAULT_GROUP_ID;
    groupAssignTableBody.appendChild(row);
  });
}

function renderPcSelect() {
  const query = (maintenanceUserSelect.value || "").toLowerCase();
  const currentValue = maintenancePcSelect.value;
  maintenancePcSelect.innerHTML = "";
  const placeholder = document.createElement("option");
  const placeholderText = t("placeholderPc");
  placeholder.value = "";
  placeholder.textContent = placeholderText;
  placeholder.disabled = true;
  placeholder.selected = true;
  maintenancePcSelect.appendChild(placeholder);

  const pcs = state.data.pcs.filter((pc) => {
    if (!query) return true;
    return pc.usuario.toLowerCase().includes(query);
  });
  pcs.forEach((pc) => {
    const option = document.createElement("option");
    option.value = pc.id;
    option.textContent = `${pc.equipo} (${pc.usuario})`;
    maintenancePcSelect.appendChild(option);
  });

  if (currentValue && pcs.some((pc) => pc.id === currentValue)) {
    maintenancePcSelect.value = currentValue;
  }
}

function renderUserSuggestions() {
  const currentValue = maintenanceUserSelect.value;
  const selectedPc = state.data.pcs.find(
    (pc) => pc.id === maintenancePcSelect.value
  );
  const users = new Set();
  state.data.pcs.forEach((pc) => {
    const name = (pc.usuario || "").trim();
    if (!name) return;
    if (selectedPc && pc.usuario !== selectedPc.usuario) return;
    users.add(name);
  });

  maintenanceUserSelect.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = t("placeholderUser");
  placeholder.disabled = true;
  placeholder.selected = true;
  maintenanceUserSelect.appendChild(placeholder);

  Array.from(users)
    .sort((a, b) => a.localeCompare(b))
    .forEach((user) => {
      const option = document.createElement("option");
      option.value = user;
      option.textContent = user;
      maintenanceUserSelect.appendChild(option);
    });

  if (currentValue) {
    const exists = Array.from(maintenanceUserSelect.options).some(
      (option) => option.value === currentValue
    );
    if (exists) maintenanceUserSelect.value = currentValue;
  }

  if (selectedPc) {
    maintenanceUserSelect.value = selectedPc.usuario;
  }
}

function renderTable() {
  const query = (searchInput.value || "").toLowerCase();
  pcTableBody.innerHTML = "";
  const rows = state.data.pcs.filter((pc) => {
    return (
      pc.usuario.toLowerCase().includes(query) ||
      pc.equipo.toLowerCase().includes(query) ||
      pc.ip.toLowerCase().includes(query)
    );
  });

  if (!rows.length) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="9">${t("noResults")}</td>`;
    pcTableBody.appendChild(row);
    return;
  }

  rows.forEach((pc) => {
    const group = getGroupForPc(pc);
    const { dueDate, nextType } = getNextMaintenance(pc);
    const status = getStatus(dueDate, group.alertDays || 0);
    const pcStatus = pc.status || "activo";
    const pcStatusLabel = getStatusLabel(pcStatus);
    const nextTypeLabel = nextType ? getMaintenanceTypeLabel(nextType) : "-";
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pc.usuario}</td>
      <td>${pc.equipo}</td>
      <td>${pc.ip}</td>
      <td><span class="status-badge ${pcStatus}">${pcStatusLabel}</span></td>
      <td>${getGroupLabel(group)}</td>
      <td>${pc.notes || "-"}</td>
      <td>${pc.lastMaintenance ? `${getMaintenanceTypeLabel(pc.lastMaintenance.type)} - ${formatDate(pc.lastMaintenance.date)}` : t("lastNone")}</td>
      <td>
        ${formatDate(dueDate)} - ${nextTypeLabel}
        <span class="badge ${status.className}">${status.label}</span>
      </td>
      <td>
        <button class="btn ghost" data-action="record" data-id="${pc.id}">${t("actionRegister")}</button>
        <button class="btn ghost" data-action="edit" data-id="${pc.id}">${t("actionEdit")}</button>
      </td>
    `;
    pcTableBody.appendChild(row);
  });
}

function renderMaintenanceHistory() {
  maintenanceTableBody.innerHTML = "";
  const rows = [];
  const fromValue = historyFromInput.value;
  const toValue = historyToInput.value;
  const typeFilter = historyTypeSelect.value;

  state.data.pcs.forEach((pc) => {
    (pc.maintenanceHistory || []).forEach((record) => {
      if (record.hidden) return;
      if (typeFilter && record.type !== typeFilter) return;
      if (fromValue || toValue) {
        const date = new Date(record.date);
        if (Number.isNaN(date.getTime())) return;
        if (fromValue) {
          const fromDate = new Date(fromValue);
          fromDate.setHours(0, 0, 0, 0);
          if (date < fromDate) return;
        }
        if (toValue) {
          const toDate = new Date(toValue);
          toDate.setHours(23, 59, 59, 999);
          if (date > toDate) return;
        }
      }
      rows.push({ pc, record });
    });
  });

  rows.sort((a, b) => {
    const aDate = new Date(a.record.date).getTime() || 0;
    const bDate = new Date(b.record.date).getTime() || 0;
    return bDate - aDate;
  });

  if (!rows.length) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="7">${t("noMaintenance")}</td>`;
    maintenanceTableBody.appendChild(row);
    return;
  }

  rows.forEach(({ pc, record }) => {
    const hasAttachments = (record.attachments || []).length > 0;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${formatDate(record.date)}</td>
      <td>${pc.equipo}</td>
      <td>${pc.usuario}</td>
      <td>${getMaintenanceTypeLabel(record.type)}</td>
      <td>${record.technician || "-"}</td>
      <td>${record.notes || "-"}</td>
      <td>
        ${
          record.type === "total" && record.checklist
            ? `<button class="btn ghost" data-action="view-checklist" data-id="${pc.id}" data-record-id="${record.id}">${t("viewChecklist")}</button>`
            : ""
        }
        ${
          hasAttachments
            ? `<button class="btn ghost" data-action="view-attachments" data-id="${pc.id}" data-record-id="${record.id}">${t("actionViewAttachments")} (${record.attachments.length})</button>`
            : ""
        }
        <button class="btn ghost" data-action="edit-record" data-id="${pc.id}" data-record-id="${record.id}">${t("actionEditRecord")}</button>
        <button class="btn ghost" data-action="hide-record" data-id="${pc.id}" data-record-id="${record.id}">${t("actionHide")}</button>
      </td>
    `;
    maintenanceTableBody.appendChild(row);
  });
}

function renderHiddenMaintenanceHistory() {
  hiddenMaintenanceTableBody.innerHTML = "";
  const rows = [];
  state.data.pcs.forEach((pc) => {
    (pc.maintenanceHistory || []).forEach((record) => {
      if (record.hidden) {
        rows.push({ pc, record });
      }
    });
  });

  rows.sort((a, b) => {
    const aDate = new Date(a.record.date).getTime() || 0;
    const bDate = new Date(b.record.date).getTime() || 0;
    return bDate - aDate;
  });

  if (!rows.length) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="7">${t("noHiddenMaintenance")}</td>`;
    hiddenMaintenanceTableBody.appendChild(row);
    return;
  }

  rows.forEach(({ pc, record }) => {
    const hasAttachments = (record.attachments || []).length > 0;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${formatDate(record.date)}</td>
      <td>${pc.equipo}</td>
      <td>${pc.usuario}</td>
      <td>${getMaintenanceTypeLabel(record.type)}</td>
      <td>${record.technician || "-"}</td>
      <td>${record.notes || "-"}</td>
      <td>
        <button class="btn ghost" data-action="show-record" data-id="${pc.id}" data-record-id="${record.id}">${t("actionShow")}</button>
        ${
          record.type === "total" && record.checklist
            ? `<button class="btn ghost" data-action="view-checklist" data-id="${pc.id}" data-record-id="${record.id}">${t("viewChecklist")}</button>`
            : ""
        }
        ${
          hasAttachments
            ? `<button class="btn ghost" data-action="view-attachments" data-id="${pc.id}" data-record-id="${record.id}">${t("actionViewAttachments")} (${record.attachments.length})</button>`
            : ""
        }
        <button class="btn danger" data-action="delete-record" data-id="${pc.id}" data-record-id="${record.id}">${t("actionDelete")}</button>
      </td>
    `;
    hiddenMaintenanceTableBody.appendChild(row);
  });
}

const confirmState = {
  resolve: null,
};

function setConfirmButtonStyle(style = "danger") {
  if (!confirmOkBtn) return;
  confirmOkBtn.classList.remove("danger", "primary", "ghost");
  if (style === "primary") {
    confirmOkBtn.classList.add("primary");
    return;
  }
  if (style === "ghost") {
    confirmOkBtn.classList.add("ghost");
    return;
  }
  confirmOkBtn.classList.add("danger");
}

function openConfirmDialog({
  title,
  message,
  confirmLabel,
  confirmStyle = "danger",
} = {}) {
  if (!confirmDialog || !confirmOkBtn || !confirmDialogTitle || !confirmDialogMessage) {
    return Promise.resolve(true);
  }
  confirmDialogTitle.textContent = title || t("confirmTitle");
  confirmDialogMessage.textContent = message || "";
  confirmOkBtn.textContent = confirmLabel || t("btnConfirm");
  setConfirmButtonStyle(confirmStyle);
  confirmDialog.returnValue = "";
  confirmDialog.showModal();
  return new Promise((resolve) => {
    confirmState.resolve = resolve;
  });
}

function setPcDeleteState(pc = null) {
  if (!pcDeleteBtn) return;
  const canDelete = Boolean(pc && pc.id);
  pcDeleteBtn.classList.toggle("is-hidden", !canDelete);
  pcDeleteBtn.disabled = !canDelete;
}

function openPcDialog(pc = null) {
  pcDialogTitle.textContent = pc ? t("pcDialogEdit") : t("pcDialogNew");
  pcIdInput.value = pc?.id || "";
  pcUserInput.value = pc?.usuario || "";
  pcEquipoInput.value = pc?.equipo || "";
  pcIpInput.value = pc?.ip || "";
  renderGroupSelectOptions(pc?.groupId || DEFAULT_GROUP_ID);
  pcStatusSelect.value = pc?.status || "activo";
  pcNotesInput.value = pc?.notes || "";
  setPcDeleteState(pc);
  pcDialog.showModal();
}

function closePcDialog() {
  pcDialog.close();
  pcForm.reset();
  pcIdInput.value = "";
  setPcDeleteState(null);
}

function renderChecklist(checklistData = {}) {
  checklistContainer.innerHTML = "";
  getChecklistTemplate().forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "checklist-group";
    const header = document.createElement("div");
    header.className = "checklist-header";
    const title = document.createElement("h4");
    title.textContent = group.title;
    const markAllBtn = document.createElement("button");
    markAllBtn.type = "button";
    markAllBtn.className = "btn ghost btn-small";
    markAllBtn.textContent = t("checklistMarkAll");
    markAllBtn.addEventListener("click", () => {
      groupEl
        .querySelectorAll("input[type='checkbox']")
        .forEach((cb) => {
          cb.checked = true;
        });
    });
    header.appendChild(title);
    header.appendChild(markAllBtn);
    groupEl.appendChild(header);

    group.items.forEach((item) => {
      const label = document.createElement("label");
      label.className = "checklist-item";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = item.id;
      checkbox.checked = Boolean(checklistData[item.id]);
      label.appendChild(checkbox);
      const text = document.createElement("span");
      text.textContent = item.label;
      label.appendChild(text);
      groupEl.appendChild(label);
    });

    checklistContainer.appendChild(groupEl);
  });
}

function renderChecklistView(checklistData = {}) {
  checklistViewContainer.innerHTML = "";
  getChecklistTemplate().forEach((group) => {
    const itemsDone = group.items.filter((item) => checklistData[item.id]);
    if (!itemsDone.length) return;
    const groupEl = document.createElement("div");
    groupEl.className = "checklist-group";
    const title = document.createElement("h4");
    title.textContent = group.title;
    groupEl.appendChild(title);

    itemsDone.forEach((item) => {
      const row = document.createElement("div");
      row.className = "checklist-item";
      row.textContent = item.label;
      groupEl.appendChild(row);
    });

    checklistViewContainer.appendChild(groupEl);
  });
}

function openChecklist(pcId) {
  const pc = state.data.pcs.find((item) => item.id === pcId);
  state.checklistPcId = pcId;
  if (state.editingRecord && state.editingRecord.pcId === pcId) {
    state.checklistDraft = state.checklistDraft || {};
  } else {
    state.checklistDraft = pc?.lastMaintenance?.checklist || {};
  }
  renderChecklist(state.checklistDraft);
  checklistDialog.showModal();
}

function closeChecklist() {
  checklistDialog.close();
  state.checklistPcId = null;
  state.checklistDraft = {};
}

function openChecklistView(pcId, recordId = null) {
  const pc = state.data.pcs.find((item) => item.id === pcId);
  if (!pc) return;
  const record = recordId
    ? (pc.maintenanceHistory || []).find((item) => item.id === recordId)
    : pc.lastMaintenance;
  if (!record) {
    alert(t("alertNoMaintenance"));
    return;
  }
  if (record.type !== "total") {
    alert(recordId ? t("alertNotTotal") : t("alertNotTotalLast"));
    return;
  }
  if (recordId) {
    checklistViewTitle.textContent = t("checklistTitleWithDate", {
      equipo: pc.equipo,
      date: formatDate(record.date),
    });
  } else {
    checklistViewTitle.textContent = t("checklistTitleLast", {
      equipo: pc.equipo,
    });
  }
  renderChecklistView(record.checklist || {});
  checklistViewDialog.showModal();
}

function closeChecklistView() {
  checklistViewDialog.close();
}

function openAttachments(record) {
  attachmentsContainer.innerHTML = "";
  const list = record.attachments || [];
  if (!list.length) {
    attachmentsContainer.innerHTML = `<p>${t("noAttachments")}</p>`;
  } else {
    list.forEach((file) => {
      const row = document.createElement("div");
      row.className = "attachment-item";
      const name = document.createElement("span");
      name.textContent = file.name || t("attachmentFile");
      const link = document.createElement("a");
      link.href = file.data;
      link.download = file.name || t("attachmentFile");
      link.className = "btn ghost";
      link.textContent = t("download");
      row.appendChild(name);
      row.appendChild(link);
      attachmentsContainer.appendChild(row);
    });
  }
  attachmentsDialog.showModal();
}

function closeAttachments() {
  attachmentsDialog.close();
}

function buildChecklistPayload() {
  const payload = {};
  checklistContainer.querySelectorAll("input[type='checkbox']").forEach((cb) => {
    payload[cb.name] = cb.checked;
  });
  return payload;
}

function checklistHasSelection() {
  if (!state.checklistDraft) return false;
  return Object.values(state.checklistDraft).some(Boolean);
}

function readAttachments(fileList) {
  const files = Array.from(fileList || []);
  if (!files.length) return Promise.resolve([]);
  const readers = files.map(
    (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({
            name: file.name,
            type: file.type || "application/octet-stream",
            data: String(reader.result || ""),
          });
        };
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      })
  );
  return Promise.all(readers);
}

async function handleMaintenanceSubmit(event) {
  event.preventDefault();
  const pcId = maintenancePcSelect.value;
  const pc = state.data.pcs.find((item) => item.id === pcId);
  if (!pc) return;

  const type = maintenanceTypeSelect.value;
  if (type === "total" && !checklistHasSelection()) {
    openChecklist(pcId);
    showToast(t("toastChecklistRequired"));
    return;
  }
  let attachments = [];
  try {
    attachments = await readAttachments(maintenanceAttachmentsInput.files);
  } catch {
    alert(t("alertAttachmentsRead"));
    return;
  }
  const recordPayload = {
    type,
    date: maintenanceDateInput.value,
    technician: maintenanceTechInput.value.trim(),
    notes: maintenanceNotesInput.value.trim(),
    checklist: type === "total" ? state.checklistDraft : {},
    attachments,
  };

  pc.maintenanceHistory = pc.maintenanceHistory || [];
  if (state.editingRecord) {
    const record = pc.maintenanceHistory.find(
      (item) => item.id === state.editingRecord.recordId
    );
    if (record) {
      record.type = recordPayload.type;
      record.date = recordPayload.date;
      record.technician = recordPayload.technician;
      record.notes = recordPayload.notes;
      record.checklist = recordPayload.checklist;
      if (attachments.length) {
        record.attachments = attachments;
      }
    }
  } else {
    pc.maintenanceHistory.push({
      ...recordPayload,
      hidden: false,
      id: crypto.randomUUID(),
    });
    trimMaintenanceHistory(pc);
  }

  syncLastMaintenance(pc);

  saveData();
  renderAll();
  maintenanceForm.reset();
  maintenanceDateInput.value = toDateInputValue(new Date());
  state.checklistDraft = {};
  maintenanceUserSelect.value = "";
  maintenancePcSelect.value = "";
  maintenanceTechInput.value = "";
  maintenanceAttachmentsInput.value = "";
  renderUserSuggestions();
  renderPcSelect();
  showToast(
    state.editingRecord ? t("toastMaintenanceUpdated") : t("toastMaintenanceSaved")
  );
  state.editingRecord = null;
}

function handlePcSubmit(event) {
  event.preventDefault();
  const payload = {
    usuario: pcUserInput.value.trim(),
    equipo: pcEquipoInput.value.trim(),
    ip: pcIpInput.value.trim(),
    groupId: pcGroupSelect.value || DEFAULT_GROUP_ID,
    status: pcStatusSelect.value,
    notes: pcNotesInput.value.trim(),
  };

  if (pcIdInput.value) {
    const pc = state.data.pcs.find((item) => item.id === pcIdInput.value);
    if (!pc) return;
    Object.assign(pc, payload);
  } else {
    state.data.pcs.push({
      id: crypto.randomUUID(),
      maintenanceHistory: [],
      lastMaintenance: null,
      ...payload,
    });
  }

  saveData();
  renderAll();
  closePcDialog();
}

async function handlePcDelete() {
  const pcId = pcIdInput.value;
  if (!pcId) return;
  const pc = state.data.pcs.find((item) => item.id === pcId);
  if (!pc) return;
  const confirmed = await openConfirmDialog({
    title: t("confirmTitle"),
    message: t("confirmDeletePc", {
      equipo: pc.equipo || pc.ip || pc.id,
      usuario: pc.usuario || "-",
    }),
    confirmLabel: t("btnDeletePc"),
    confirmStyle: "danger",
  });
  if (!confirmed) return;
  state.data.pcs = state.data.pcs.filter((item) => item.id !== pcId);
  if (state.editingRecord?.pcId === pcId) {
    state.editingRecord = null;
  }
  if (state.checklistPcId === pcId) {
    state.checklistPcId = null;
    state.checklistDraft = {};
  }
  if (maintenancePcSelect.value === pcId) {
    maintenancePcSelect.value = "";
    maintenanceUserSelect.value = "";
  }
  saveData();
  renderAll();
  closePcDialog();
  showToast(t("toastPcDeleted"));
}

function resetGroupForm() {
  groupIdInput.value = "";
  groupNameInput.value = "";
  groupIntervalInput.value = "3";
  groupAlertInput.value = "7";
}

function handleGroupSubmit(event) {
  event.preventDefault();
  const name = groupNameInput.value.trim();
  if (!name) return;
  const intervalMonths = Math.max(1, Number(groupIntervalInput.value || 1));
  const alertDays = Math.max(0, Number(groupAlertInput.value || 0));
  if (groupIdInput.value) {
    const group = getGroupById(groupIdInput.value);
    if (group) {
      group.name = name;
      group.intervalMonths = intervalMonths;
      group.alertDays = alertDays;
    }
  } else {
    state.data.groups.push({
      id: crypto.randomUUID(),
      name,
      intervalMonths,
      alertDays,
    });
  }
  saveData();
  renderAll();
  resetGroupForm();
}

async function handleGroupTableClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const action = target.dataset.action;
  const groupId = target.dataset.id;
  if (!action || !groupId) return;
  const group = getGroupById(groupId);
  if (!group) return;

  if (action === "edit-group") {
    groupIdInput.value = group.id;
    groupNameInput.value = group.name;
    groupIntervalInput.value = String(group.intervalMonths);
    groupAlertInput.value = String(group.alertDays);
    setActiveTab("grupos");
  }

  if (action === "delete-group") {
    const confirmed = await openConfirmDialog({
      title: t("confirmTitle"),
      message: t("confirmDeleteGroup", {
        name: group.name,
        defaultGroup: t("labelDefaultGroup"),
      }),
      confirmLabel: t("actionDelete"),
      confirmStyle: "danger",
    });
    if (!confirmed) return;
    state.data.pcs.forEach((pc) => {
      if (pc.groupId === groupId) {
        pc.groupId = DEFAULT_GROUP_ID;
      }
    });
    state.data.groups = state.data.groups.filter((g) => g.id !== groupId);
    saveData();
    renderAll();
  }
}

function handleGroupAssignChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement)) return;
  const action = target.dataset.action;
  const pcId = target.dataset.id;
  if (action !== "assign-group" || !pcId) return;
  const pc = state.data.pcs.find((item) => item.id === pcId);
  if (!pc) return;
  pc.groupId = target.value || DEFAULT_GROUP_ID;
  saveData();
  renderAll();
}

function handleTableClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const action = target.dataset.action;
  const id = target.dataset.id;
  if (!action || !id) return;

  if (action === "edit") {
    const pc = state.data.pcs.find((item) => item.id === id);
    if (pc) openPcDialog(pc);
  }

  if (action === "record") {
    setActiveTab("mantenimientos");
    maintenancePcSelect.value = id;
    const pc = state.data.pcs.find((item) => item.id === id);
    const nextType = getNextMaintenance(pc).nextType;
    maintenanceTypeSelect.value = nextType || "total";
    maintenanceDateInput.value = toDateInputValue(new Date());
    maintenanceNotesInput.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

async function handleMaintenanceHistoryClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const action = target.dataset.action;
  const pcId = target.dataset.id;
  const recordId = target.dataset.recordId;
  if (!action || !pcId || !recordId) return;

  const pc = state.data.pcs.find((item) => item.id === pcId);
  if (!pc) return;
  const record = (pc.maintenanceHistory || []).find(
    (item) => item.id === recordId
  );
  if (!record) return;

  if (action === "hide-record") {
    record.hidden = true;
    syncLastMaintenance(pc);
    saveData();
    renderAll();
  }

  if (action === "show-record") {
    record.hidden = false;
    syncLastMaintenance(pc);
    saveData();
    renderAll();
  }

  if (action === "delete-record") {
    const confirmed = await openConfirmDialog({
      title: t("confirmTitle"),
      message: t("confirmDeleteHidden"),
      confirmLabel: t("actionDelete"),
      confirmStyle: "danger",
    });
    if (!confirmed) return;
    pc.maintenanceHistory = (pc.maintenanceHistory || []).filter(
      (item) => item.id !== recordId
    );
    syncLastMaintenance(pc);
    saveData();
    renderAll();
    showToast(t("toastMaintenanceDeleted"));
  }

  if (action === "view-checklist") {
    openChecklistView(pcId, recordId);
  }

  if (action === "view-attachments") {
    openAttachments(record);
  }

  if (action === "edit-record") {
    setActiveTab("mantenimientos");
    state.editingRecord = { pcId, recordId };
    maintenanceUserSelect.value = pc.usuario;
    renderPcSelect();
    maintenancePcSelect.value = pcId;
    maintenanceTypeSelect.value = record.type;
    maintenanceDateInput.value = record.date || toDateInputValue(new Date());
    maintenanceTechInput.value = record.technician || "";
    maintenanceNotesInput.value = record.notes || "";
    state.checklistDraft = record.checklist || {};
    openChecklistBtn.disabled = record.type !== "total";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function handleAlertClick(event) {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;
  const action = target.dataset.action;
  const id = target.dataset.id;
  if (action === "view-checklist") {
    openChecklistView(id);
  }
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state.data, null, 2)], {
    type: "application/json",
  });
  downloadBlob(blob, t("exportJsonFilename"));
}

function exportCsv() {
  const headers = [
    t("csvUsuario"),
    t("csvEquipo"),
    t("csvIp"),
    t("csvEstado"),
    t("csvGrupo"),
    t("csvNotasPc"),
    t("csvUltimaFecha"),
    t("csvUltimoTipo"),
    t("csvNotas"),
    t("csvTecnico"),
  ];
  const rows = state.data.pcs.map((pc) => {
    const group = getGroupForPc(pc);
    const status = pc.status || "activo";
    const lastTypeLabel = pc.lastMaintenance?.type
      ? getMaintenanceTypeLabel(pc.lastMaintenance.type)
      : "";
    return [
      pc.usuario,
      pc.equipo,
      pc.ip,
      getStatusLabel(status),
      getGroupLabel(group),
      pc.notes || "",
      pc.lastMaintenance?.date || "",
      lastTypeLabel,
      pc.lastMaintenance?.notes || "",
      pc.lastMaintenance?.technician || "",
    ];
  });
  const csv = [headers, ...rows]
    .map((row) => row.map(escapeCsv).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  downloadBlob(blob, t("exportCsvFilename"));
}

function exportExcel() {
  if (typeof XLSX === "undefined" || !XLSX?.utils) {
    alert(t("alertExportSpreadsheet"));
    return;
  }
  const headers = [
    t("csvUsuario"),
    t("csvEquipo"),
    t("csvIp"),
    t("csvEstado"),
    t("csvGrupo"),
    t("csvNotasPc"),
    t("csvUltimaFecha"),
    t("csvUltimoTipo"),
    t("csvNotas"),
    t("csvTecnico"),
  ];
  const rows = state.data.pcs.map((pc) => {
    const group = getGroupForPc(pc);
    const status = pc.status || "activo";
    const lastTypeLabel = pc.lastMaintenance?.type
      ? getMaintenanceTypeLabel(pc.lastMaintenance.type)
      : "";
    return [
      pc.usuario,
      pc.equipo,
      pc.ip,
      getStatusLabel(status),
      getGroupLabel(group),
      pc.notes || "",
      pc.lastMaintenance?.date || "",
      lastTypeLabel,
      pc.lastMaintenance?.notes || "",
      pc.lastMaintenance?.technician || "",
    ];
  });
  const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Inventario");
  const output = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([output], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  downloadBlob(blob, t("exportExcelFilename"));
}

function escapeCsv(value) {
  const text = String(value ?? "");
  if (text.includes(",") || text.includes('"') || text.includes("\n")) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      if (!payload?.pcs) throw new Error("Formato invalido");
      state.data = payload;
      normalizeData();
      saveData();
      renderAll();
    } catch {
      alert(t("alertImportJson"));
    }
  };
  reader.readAsText(file);
}

function importSpreadsheet(file) {
  if (isExcelFile(file)) {
    importExcelFile(file);
    return;
  }
  importDelimitedFile(file);
}

function isExcelFile(file) {
  const name = String(file?.name || "").toLowerCase();
  return (
    name.endsWith(".xlsx") ||
    name.endsWith(".xls") ||
    String(file?.type || "").includes("spreadsheet")
  );
}

function importExcelFile(file) {
  if (typeof XLSX === "undefined" || !XLSX?.read) {
    alert(t("alertImportSpreadsheet"));
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = new Uint8Array(reader.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = sheetName ? workbook.Sheets[sheetName] : null;
      if (!sheet) throw new Error("Sheet not found");
      const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        raw: false,
        defval: "",
      });
      importRows(rows);
    } catch {
      alert(t("alertImportSpreadsheet"));
    }
  };
  reader.readAsArrayBuffer(file);
}

function importDelimitedFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || "");
    const rows = parseDelimited(text);
    importRows(rows);
  };
  reader.readAsText(file);
}

function normalizeHeader(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

function findHeaderRow(rows) {
  const maxScan = Math.min(rows.length, 8);
  for (let i = 0; i < maxScan; i += 1) {
    const row = rows[i] || [];
    const normalized = row.map(normalizeHeader);
    const hasUsuario = normalized.includes("usuario");
    const hasEquipo =
      normalized.includes("equipo") ||
      normalized.includes("pc") ||
      normalized.includes("hostname");
    const hasIp =
      normalized.includes("ip") ||
      normalized.includes("ip address") ||
      normalized.includes("direccion ip");
    if (hasUsuario || hasEquipo || hasIp) {
      return i;
    }
  }
  return -1;
}

function getColumnIndex(header, candidates) {
  for (const name of candidates) {
    const index = header.indexOf(name);
    if (index >= 0) return index;
  }
  return -1;
}

function importRows(rows) {
  if (!rows.length) return;

  const headerRowIndex = findHeaderRow(rows);
  const headerRow =
    headerRowIndex >= 0 ? rows[headerRowIndex] : ["usuario", "equipo", "ip"];
  const header = headerRow.map(normalizeHeader);
  const dataRows =
    headerRowIndex >= 0 ? rows.slice(headerRowIndex + 1) : rows;

  const usuarioIndex = getColumnIndex(header, ["usuario", "user"]);
  const equipoIndex = getColumnIndex(header, [
    "equipo",
    "pc",
    "hostname",
    "nombre equipo",
  ]);
  const ipIndex = getColumnIndex(header, [
    "ip",
    "ip address",
    "direccion ip",
  ]);
  const statusIndex = getColumnIndex(header, ["estado", "status"]);
  const groupIndex = getColumnIndex(header, ["grupo", "group"]);
  const pcNotesIndex = getColumnIndex(header, [
    "pcnotes",
    "notas pc",
    "notas del equipo",
  ]);
  const lastDateIndex = getColumnIndex(header, [
    "lastdate",
    "ultima fecha",
    "ultimo mantenimiento",
    "fecha mantenimiento",
  ]);
  const lastTypeIndex = getColumnIndex(header, ["lasttype", "tipo"]);
  const notesIndex = getColumnIndex(header, ["notes", "observaciones"]);
  const technicianIndex = getColumnIndex(header, [
    "technician",
    "tecnico",
    "técnico",
  ]);

  const mapped = dataRows.map((row) => {
    const usuario = String(row[usuarioIndex] ?? "").trim();
    const equipo = String(row[equipoIndex] ?? "").trim();
    const ip = String(row[ipIndex] ?? "").trim();
    const status = String(row[statusIndex] ?? "").trim() || "activo";
    const groupName = String(row[groupIndex] ?? "").trim();
    const groupId = ensureGroupByName(groupName);
    const pcNotes = String(row[pcNotesIndex] ?? "").trim();
    const lastDate = String(row[lastDateIndex] ?? "").trim();
    const lastType = String(row[lastTypeIndex] ?? "").trim();
    const notes = String(row[notesIndex] ?? "").trim();
    const technician = String(row[technicianIndex] ?? "").trim();
    return {
      id: crypto.randomUUID(),
      usuario,
      equipo,
      ip,
      status,
      groupId,
      notes: pcNotes,
      lastMaintenance: lastDate
        ? {
            date: lastDate,
            type: lastType || "total",
            notes,
            technician,
            checklist: {},
          }
        : null,
      maintenanceHistory: lastDate
        ? [
            {
              id: crypto.randomUUID(),
              date: lastDate,
              type: lastType || "total",
              notes,
              technician,
              checklist: {},
              attachments: [],
              hidden: false,
            },
          ]
        : [],
    };
  });

  state.data.pcs = mapped.filter((pc) => pc.usuario || pc.equipo || pc.ip);
  saveData();
  renderAll();
}

function detectDelimiter(text) {
  const sample = text.split(/\r?\n/).slice(0, 5).join("\n");
  const counts = {
    ",": (sample.match(/,/g) || []).length,
    ";": (sample.match(/;/g) || []).length,
    "\t": (sample.match(/\t/g) || []).length,
  };
  if (counts["\t"] >= counts[";"] && counts["\t"] >= counts[","]) return "\t";
  if (counts[";"] >= counts[","]) return ";";
  return ",";
}

function parseDelimited(text) {
  let content = text || "";
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  const delimiter = detectDelimiter(content);
  return parseWithDelimiter(content, delimiter);
}

function parseWithDelimiter(text, delimiter) {
  const rows = [];
  let current = [];
  let value = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (insideQuotes) {
      if (char === '"' && next === '"') {
        value += '"';
        i += 1;
      } else if (char === '"') {
        insideQuotes = false;
      } else {
        value += char;
      }
      continue;
    }

    if (char === '"') {
      insideQuotes = true;
    } else if (char === delimiter) {
      current.push(value);
      value = "";
    } else if (char === "\n") {
      current.push(value.replace(/\r$/, ""));
      rows.push(current);
      current = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value || current.length) {
    current.push(value);
    rows.push(current);
  }

  return rows;
}

let notifiedThisSession = false;
let backupThisSession = false;

function maybeAutoBackup() {
  if (!settings.autoBackupEnabled) return;
  if (backupThisSession) return;
  const last = settings.lastBackupAt
    ? new Date(settings.lastBackupAt).getTime()
    : 0;
  const now = Date.now();
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  if (now - last < weekMs) return;
  backupThisSession = true;
  settings.lastBackupAt = new Date().toISOString();
  saveSettings();
  exportJson();
  showToast(t("backupDone"));
}

function maybeNotify(items = []) {
  if (!settings.notificationsEnabled) return;
  if (notifiedThisSession) return;
  const pending = items.filter((item) => item.status.className !== "ok");
  if (!pending.length) return;
  if (!window.systemNotifications) return;
  notifiedThisSession = true;
  window.systemNotifications.send({
    title: t("notificationTitle"),
    body: t("notificationBody", { count: pending.length }),
  });
  if (settings.notificationSound) playNotificationSound();
}

function renderAll() {
  const items = renderAlerts();
  renderSummary();
  renderGroups();
  renderGroupAssignments();
  renderGroupSelectOptions();
  renderPcSelect();
  renderUserSuggestions();
  renderTable();
  renderMaintenanceHistory();
  renderHiddenMaintenanceHistory();
  maybeNotify(items);
  maybeAutoBackup();
}

function setActiveTab(tabId) {
  if (!tabButtons.length || !tabPanels.length) return;
  tabButtons.forEach((btn) => {
    const isActive = btn.dataset.tab === tabId;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.tab === tabId);
  });
  if (titlebarSection) {
    const labelMap = {
      alertas: t("tabAlerts"),
      mantenimientos: t("tabMaintenance"),
      inventario: t("tabInventory"),
      grupos: t("tabGroups"),
      configuracion: t("tabConfig"),
      ocultos: t("tabHidden"),
    };
    titlebarSection.textContent = labelMap[tabId] || t("labelSection");
  }
}

let toastTimer = null;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

function resolveConfirm(result) {
  if (!confirmState.resolve) return;
  const resolve = confirmState.resolve;
  confirmState.resolve = null;
  resolve(result);
}

function openUpdateLoading() {
  if (!updateLoadingDialog) return;
  updateLoadingDialog.showModal();
}

function closeUpdateLoading() {
  if (!updateLoadingDialog) return;
  updateLoadingDialog.close();
}

function openSimpleDialog(dialog) {
  if (!dialog) return;
  dialog.showModal();
}

function closeSimpleDialog(dialog) {
  if (!dialog) return;
  dialog.close();
}

function triggerSpreadsheetImport(accept) {
  if (!importCsvInput) return;
  const previous = importCsvInput.accept;
  if (accept) importCsvInput.accept = accept;
  importCsvInput.click();
  importCsvInput.accept = previous;
}

addPcBtn.addEventListener("click", () => openPcDialog());
pcCancelBtn.addEventListener("click", closePcDialog);
if (pcDeleteBtn) {
  pcDeleteBtn.addEventListener("click", handlePcDelete);
}
pcForm.addEventListener("submit", handlePcSubmit);
pcTableBody.addEventListener("click", handleTableClick);
alertGrid.addEventListener("click", handleAlertClick);
maintenanceTableBody.addEventListener("click", handleMaintenanceHistoryClick);
hiddenMaintenanceTableBody.addEventListener(
  "click",
  handleMaintenanceHistoryClick
);
groupForm.addEventListener("submit", handleGroupSubmit);
groupCancelBtn.addEventListener("click", resetGroupForm);
groupTableBody.addEventListener("click", handleGroupTableClick);
groupAssignTableBody.addEventListener("change", handleGroupAssignChange);
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveTab(btn.dataset.tab);
  });
});

if (window.windowControls) {
  minBtn.addEventListener("click", () => window.windowControls.minimize());
  maxBtn.addEventListener("click", () => window.windowControls.toggleMaximize());
  closeBtn.addEventListener("click", () => window.windowControls.close());
}

if (confirmDialog) {
  confirmDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    confirmDialog.returnValue = "cancel";
    confirmDialog.close();
  });
}

if (confirmCancelBtn) {
  confirmCancelBtn.addEventListener("click", () => {
    if (!confirmDialog) return;
    confirmDialog.returnValue = "cancel";
    confirmDialog.close();
  });
}

if (confirmOkBtn) {
  confirmOkBtn.addEventListener("click", () => {
    if (!confirmDialog) return;
    confirmDialog.returnValue = "confirm";
    confirmDialog.close();
  });
}

if (confirmDialog) {
  confirmDialog.addEventListener("close", () => {
    resolveConfirm(confirmDialog.returnValue === "confirm");
  });
}

if (updateLoadingDialog) {
  updateLoadingDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    updateLoadingDialog.close();
  });
}

if (exportDialog) {
  exportDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    exportDialog.close();
  });
}

if (importDialog) {
  importDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    importDialog.close();
  });
}

function playNotificationSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = 880;
    gain.gain.value = 0.08;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      audioContext.close();
    }, 160);
  } catch {
    // ignore
  }
}

if (window.externalLinks && externalLinkElements.length) {
  externalLinkElements.forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = link.getAttribute("href");
      if (!url) return;
      event.preventDefault();
      window.externalLinks.open(url);
    });
  });
}

if (brandHomeBtn) {
  brandHomeBtn.addEventListener("click", () => {
    setActiveTab("alertas");
  });
}

if (startNextSwitch) {
  startNextSwitch.checked = settings.showNextLabel;
  startNextSwitch.addEventListener("change", () => {
    settings.showNextLabel = startNextSwitch.checked;
    saveSettings();
    renderAlerts();
    showToast(t("toastConfigSaved"));
  });
}

if (languageSelect) {
  languageSelect.value = settings.language || "es";
  languageSelect.addEventListener("change", () => {
    settings.language = languageSelect.value || "es";
    saveSettings();
    applyTranslations();
    renderAll();
    const activeTab = document.querySelector(".tab-btn.active")?.dataset.tab;
    if (activeTab) setActiveTab(activeTab);
    showToast(t("toastConfigSaved"));
  });
}

if (updateModeSelect) {
  updateModeSelect.value = settings.updateMode || "ask";
  updateModeSelect.addEventListener("change", () => {
    settings.updateMode = updateModeSelect.value || "ask";
    saveSettings();
    if (window.appUpdates) {
      window.appUpdates.setMode(settings.updateMode);
      window.appUpdates.checkNow();
    }
    showToast(t("toastConfigSaved"));
  });
}

if (notificationsSwitch) {
  notificationsSwitch.checked = settings.notificationsEnabled;
  notificationsSwitch.addEventListener("change", () => {
    settings.notificationsEnabled = notificationsSwitch.checked;
    saveSettings();
    showToast(t("toastConfigSaved"));
  });
}

if (notificationSoundSwitch) {
  notificationSoundSwitch.checked = settings.notificationSound;
  notificationSoundSwitch.addEventListener("change", () => {
    settings.notificationSound = notificationSoundSwitch.checked;
    saveSettings();
    showToast(t("toastConfigSaved"));
  });
}

if (dateFormatSelect) {
  dateFormatSelect.value = settings.dateFormat || "locale";
  dateFormatSelect.addEventListener("change", () => {
    settings.dateFormat = dateFormatSelect.value || "locale";
    saveSettings();
    renderAll();
    showToast(t("toastConfigSaved"));
  });
}

if (historyLimitInput) {
  historyLimitInput.value = String(settings.historyLimit || 4);
  historyLimitInput.addEventListener("change", () => {
    settings.historyLimit = Math.max(1, Number(historyLimitInput.value || 1));
    saveSettings();
    let changed = false;
    state.data.pcs.forEach((pc) => {
      if (trimMaintenanceHistory(pc)) changed = true;
    });
    if (changed) saveData();
    renderAll();
    showToast(t("toastConfigSaved"));
  });
}

if (autoBackupSwitch) {
  autoBackupSwitch.checked = settings.autoBackupEnabled;
  autoBackupSwitch.addEventListener("change", () => {
    settings.autoBackupEnabled = autoBackupSwitch.checked;
    saveSettings();
    maybeAutoBackup();
    showToast(t("toastConfigSaved"));
  });
}

if (window.appUpdates) {
  window.appUpdates.setMode(settings.updateMode || "ask");
  window.appUpdates.checkNow();

  window.appUpdates.onUpdateAvailable(async (info) => {
    if ((settings.updateMode || "ask") === "auto") {
      showToast(t("updateDownloading"));
      openUpdateLoading();
      return;
    }
    const confirmed = await openConfirmDialog({
      title: t("updateAvailableTitle"),
      message: t("updateAvailableMessage", {
        version: info?.version || "-",
      }),
      confirmLabel: t("updateDownloadBtn"),
      confirmStyle: "primary",
    });
    if (confirmed) {
      window.appUpdates.download();
      showToast(t("updateDownloading"));
      openUpdateLoading();
    }
  });

  window.appUpdates.onUpdateDownloaded(async () => {
    closeUpdateLoading();
    const confirmed = await openConfirmDialog({
      title: t("updateDownloadedTitle"),
      message: t("updateDownloadedMessage"),
      confirmLabel: t("updateInstallBtn"),
      confirmStyle: "primary",
    });
    if (confirmed) {
      window.appUpdates.install();
    }
  });

  window.appUpdates.onUpdateError(() => {
    closeUpdateLoading();
    showToast(t("updateError"));
  });
}

if (exportAllBtn) {
  exportAllBtn.addEventListener("click", () => {
    exportJson();
    exportCsv();
    exportExcel();
  });
}

if (darkModeSwitch) {
  darkModeSwitch.checked = settings.darkMode;
  darkModeSwitch.addEventListener("change", () => {
    settings.darkMode = darkModeSwitch.checked;
    saveSettings();
    applyTheme();
    showToast(t("toastConfigSaved"));
  });
}

if (largeTextSwitch) {
  largeTextSwitch.checked = settings.largeText;
  largeTextSwitch.addEventListener("change", () => {
    settings.largeText = largeTextSwitch.checked;
    saveSettings();
    applyTheme();
    showToast(t("toastConfigSaved"));
  });
}

if (highContrastSwitch) {
  highContrastSwitch.checked = settings.highContrast;
  highContrastSwitch.addEventListener("change", () => {
    settings.highContrast = highContrastSwitch.checked;
    saveSettings();
    applyTheme();
    showToast(t("toastConfigSaved"));
  });
}

maintenanceForm.addEventListener("submit", handleMaintenanceSubmit);
maintenanceTypeSelect.addEventListener("change", () => {
  const type = maintenanceTypeSelect.value;
  if (type === "total") {
    openChecklistBtn.disabled = false;
  } else {
    openChecklistBtn.disabled = true;
  }
});

openChecklistBtn.addEventListener("click", () => {
  const pcId = maintenancePcSelect.value;
  if (!pcId) return;
  if (maintenanceTypeSelect.value !== "total") {
    alert(t("alertChecklistOnlyTotal"));
    return;
  }
  openChecklist(pcId);
});

checklistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.checklistDraft = buildChecklistPayload();
  closeChecklist();
});

checklistCancelBtn.addEventListener("click", closeChecklist);
checklistViewCloseBtn.addEventListener("click", closeChecklistView);
attachmentsCloseBtn.addEventListener("click", closeAttachments);
checklistClearBtn.addEventListener("click", () => {
  state.checklistDraft = {};
  renderChecklist(state.checklistDraft);
});

searchInput.addEventListener("input", renderTable);
historyFromInput.addEventListener("change", renderMaintenanceHistory);
historyToInput.addEventListener("change", renderMaintenanceHistory);
historyTypeSelect.addEventListener("change", renderMaintenanceHistory);
maintenanceUserSelect.addEventListener("change", () => {
  renderPcSelect();
  renderUserSuggestions();
});
maintenancePcSelect.addEventListener("change", () => {
  renderUserSuggestions();
  renderPcSelect();
});
clearFiltersBtn.addEventListener("click", () => {
  maintenanceUserSelect.value = "";
  maintenancePcSelect.value = "";
  renderUserSuggestions();
  renderPcSelect();
});

clearHiddenBtn.addEventListener("click", async () => {
  const confirmed = await openConfirmDialog({
    title: t("confirmTitle"),
    message: t("confirmDeleteHidden"),
    confirmLabel: t("actionDelete"),
    confirmStyle: "danger",
  });
  if (!confirmed) return;
  let removed = 0;
  state.data.pcs.forEach((pc) => {
    const before = (pc.maintenanceHistory || []).length;
    pc.maintenanceHistory = (pc.maintenanceHistory || []).filter(
      (record) => !record.hidden
    );
    removed += before - pc.maintenanceHistory.length;
    syncLastMaintenance(pc);
  });
  saveData();
  renderAll();
  if (removed) {
    showToast(t("toastHiddenRemoved"));
  } else {
    showToast(t("toastHiddenNone"));
  }
});

importJsonInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) importJson(file);
});
importCsvInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) importSpreadsheet(file);
});
if (exportBtn) {
  exportBtn.addEventListener("click", () => openSimpleDialog(exportDialog));
}
if (importBtn) {
  importBtn.addEventListener("click", () => openSimpleDialog(importDialog));
}
if (exportJsonOption) {
  exportJsonOption.addEventListener("click", () => {
    exportJson();
    closeSimpleDialog(exportDialog);
  });
}
if (exportCsvOption) {
  exportCsvOption.addEventListener("click", () => {
    exportCsv();
    closeSimpleDialog(exportDialog);
  });
}
if (exportExcelOption) {
  exportExcelOption.addEventListener("click", () => {
    exportExcel();
    closeSimpleDialog(exportDialog);
  });
}
if (exportCloseBtn) {
  exportCloseBtn.addEventListener("click", () =>
    closeSimpleDialog(exportDialog)
  );
}
if (importJsonOption) {
  importJsonOption.addEventListener("click", () => {
    closeSimpleDialog(importDialog);
    if (importJsonInput) importJsonInput.click();
  });
}
if (importCsvOption) {
  importCsvOption.addEventListener("click", () => {
    closeSimpleDialog(importDialog);
    triggerSpreadsheetImport(".csv,.tsv,.txt");
  });
}
if (importExcelOption) {
  importExcelOption.addEventListener("click", () => {
    closeSimpleDialog(importDialog);
    triggerSpreadsheetImport(".xlsx,.xls");
  });
}
if (importCloseBtn) {
  importCloseBtn.addEventListener("click", () =>
    closeSimpleDialog(importDialog)
  );
}

maintenanceDateInput.value = toDateInputValue(new Date());
openChecklistBtn.disabled = false;
applyTranslations();
applyTheme();
setActiveTab("alertas");
renderAll();
