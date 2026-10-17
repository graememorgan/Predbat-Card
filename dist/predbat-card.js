/*!
 * Predbat Card for Home Assistant
 * https://github.com/mimikm/Predbat-Card
 * MIT License
 */
const CARD_VERSION = "0.3.2";
const CARD_TAG = "predbat-card";
const EDITOR_TAG = "predbat-card-editor";

/* ------------------------------------------------------------------ */
/*  Translations                                                       */
/* ------------------------------------------------------------------ */
const TRANSLATIONS = {
  en: {
    ed_auto_none: "not found, set the sensor from apps.yaml",
    ed_auto_found: "auto-detected",
    dq_no_source: "No load sensors found. Set load_today and load_power to the same sensors as in your Predbat apps.yaml.",
    dq_checked: "Checked: {e}",
    dq_all_filled: "all filled by Predbat",
    dq_recent: "{n} in the last 24 h",
    title: "Predbat",
    updated: "Updated {v}",
    just_now: "just now",
    min_ago: "{n} min ago",
    h_ago: "{n} h ago",
    battery: "Battery",
    hours_left: "{n} h left",
    now: "Now",
    import: "Import",
    export: "Export",
    cost_today: "Cost today",
    plan_total: "Plan total {v}",
    saved_yesterday: "Saved yesterday",
    vs_baseline: "vs. one cheap charge",
    next_charge: "Next charge",
    next_export: "Next export",
    none_planned: "None planned",
    target: "to {v}%",
    forecast: "Battery forecast",
    best: "Predbat plan",
    base: "Baseline",
    rate: "Import rate",
    reserve: "Reserve",
    plan: "Plan",
    upcoming: "Upcoming actions",
    no_actions: "No forced charge or export in the next {n} h",
    show_full: "Show full plan",
    hide_full: "Hide full plan",
    today: "Today",
    tomorrow: "Tomorrow",
    avg: "avg {v}",
    ends_at: "ends {v}%",
    st_charge: "Charge",
    st_hold_charge: "Hold",
    st_freeze_charge: "Freeze charge",
    st_export: "Export",
    st_freeze_export: "Freeze export",
    st_hold_export: "Hold export",
    st_demand: "Demand",
    col_time: "Time",
    col_state: "State",
    col_import: "Imp",
    col_export: "Exp",
    col_pv: "PV",
    col_load: "Load",
    col_soc: "SoC",
    col_cost: "Cost",
    error: "Predbat is reporting an error",
    no_plan: "No plan data yet. Check that {e} exists.",
    no_forecast: "No forecast data in {e}",
    missing: "Entity not found: {e}",
    manual: "Manual",
    // editor
    ed_style: "Style",
    style_modern: "Modern",
    style_glass: "Glass",
    style_neon: "Neon",
    style_minimal: "Minimal",
    style_native: "Home Assistant native",
    style_terminal: "Terminal (retro LCD)",
    ed_theme_mode: "Light / dark",
    mode_auto: "Follow Home Assistant theme",
    mode_light: "Always light",
    mode_dark: "Always dark",
    saving_today: "Saving today",
    predicted: "Predicted",
    yesterday_v: "yesterday {v}",
    forecast_today: "Forecast today {v}",
    e_base_metric: "Baseline plan cost",
    grid_chart: "Grid import & export",
    rates_chart: "Energy rates",
    tab_battery: "Battery",
    tab_grid: "Grid",
    tab_rates: "Rates",
    export_rate: "Export rate",
    ed_show_grid_chart: "Grid import/export chart",
    ed_show_rates_chart: "Energy rates chart",
    ed_chart_layout: "Charts layout",
    layout_tabs: "Tabs (one chart at a time)",
    layout_stacked: "Stacked (all charts)",
    ed_font_scale: "Text size",
    e_export_energy: "Predicted export energy",
    e_import_energy: "Predicted import energy",
    missing_n: "{n} Predbat entities not found",
    missing_hint: "Open the card editor to check the entity names or change the prefix.",
    no_raw: "{e} has no plan data (the “raw” attribute). Update Predbat to a newer version to see the plan.",
    tab_data: "Data",
    dq_summary_one: "1 zero-load period in the last {d} days",
    dq_title: "Load data quality",
    dq_chip: "Load data",
    dq_summary: "{n} zero-load periods in the last {d} days",
    dq_filled_n: "{n} filled by Predbat",
    dq_unfilled_n: "{n} not filled",
    dq_hint_filled: "Load total stayed flat while load power showed use. Predbat fills this from load power, so nothing needs doing.",
    dq_hint_unfilled: "Load total stayed flat and there was no load power data. Predbat fills it with average load, so the forecast may be off.",
    dq_more: "and {n} more",
    dq_view: "Show {d}-day view",
    dq_note: "Same check Predbat runs, using Home Assistant history.",
    dq_good: "{v}% good over {d} days",
    dq_l_ok: "Good",
    dq_l_filled: "Filled by Predbat",
    dq_l_unfilled: "Not filled",
    dq_l_nodata: "No history",
    dq_loading: "Loading load history…",
    dq_error: "Couldn’t load history: {v}",
    dq_no_history: "No history for {e}. Make sure these sensors are recorded.",
    dq_unsupported: "History isn’t available here.",
    ed_show_data_quality: "Zero-load alarm (load data quality)",
    ed_dq_days: "Data quality days",
    ed_dq_minutes: "Flag flat load after",
    e_load_today: "Load today (kWh), as in apps.yaml",
    e_load_power: "Load power, as in apps.yaml",
    ed_title: "Title",
    ed_prefix: "Predbat prefix",
    ed_language: "Language",
    ed_auto: "Auto (Home Assistant)",
    ed_show_header: "Header",
    ed_show_overview: "Overview tiles",
    ed_show_chart: "Battery forecast chart",
    ed_show_timeline: "Plan timeline",
    ed_show_actions: "Upcoming actions",
    ed_show_table: "Full plan table (toggle)",
    ed_show_base: "Baseline line on chart",
    ed_show_rates: "Import rate on chart",
    ed_hours: "Hours to show",
    ed_max_actions: "Max upcoming actions",
    ed_capacity: "Battery capacity override (kWh, optional)",
    ed_entities: "Predbat entities",
    ed_check: "Entity check",
    ed_found: "{n} of {t} entities found",
    ed_reset: "Reset entities to defaults",
    ed_sections: "Sections",
    e_status: "Status",
    e_plan: "Plan (plan_html)",
    e_mode: "Mode select",
    e_soc_now: "Battery SoC now (kWh)",
    e_soc_best: "SoC forecast — best plan",
    e_soc_base: "SoC forecast — baseline",
    e_inverter_config: "Inverter config (battery size)",
    e_hours_left: "Battery hours left",
    e_rates: "Import rates",
    e_rates_export: "Export rates",
    e_cost_today: "Cost today",
    e_best_metric: "Plan total cost",
    e_savings: "Savings yesterday",
    e_charge_start: "Next charge start",
    e_charge_end: "Next charge end",
    e_charge_limit: "Next charge target (%)",
    e_export_start: "Next export start",
    e_export_end: "Next export end",
    e_export_limit: "Next export target (%)",
  },
  pl: {
    ed_auto_none: "nie znaleziono, ustaw czujnik z apps.yaml",
    ed_auto_found: "wykryto automatycznie",
    dq_no_source: "Nie znaleziono czujników zużycia. Ustaw load_today i load_power na te same czujniki co w apps.yaml Predbat.",
    dq_checked: "Sprawdzono: {e}",
    dq_all_filled: "wszystkie uzupełnione przez Predbat",
    dq_recent: "{n} w ciągu 24 h",
    title: "Predbat",
    updated: "Aktualizacja {v}",
    just_now: "przed chwilą",
    min_ago: "{n} min temu",
    h_ago: "{n} godz. temu",
    battery: "Bateria",
    hours_left: "zostało {n} godz.",
    now: "Teraz",
    import: "Pobór",
    export: "Oddawanie",
    cost_today: "Koszt dziś",
    plan_total: "Plan łącznie {v}",
    saved_yesterday: "Oszczędność wczoraj",
    vs_baseline: "vs. jedno tanie ładowanie",
    next_charge: "Następne ładowanie",
    next_export: "Następne oddawanie",
    none_planned: "Brak w planie",
    target: "do {v}%",
    forecast: "Prognoza baterii",
    best: "Plan Predbat",
    base: "Bazowy",
    rate: "Cena poboru",
    reserve: "Rezerwa",
    plan: "Plan",
    upcoming: "Nadchodzące działania",
    no_actions: "Brak wymuszonego ładowania lub oddawania w ciągu {n} godz.",
    show_full: "Pokaż pełny plan",
    hide_full: "Ukryj pełny plan",
    today: "Dziś",
    tomorrow: "Jutro",
    avg: "śr. {v}",
    ends_at: "koniec {v}%",
    st_charge: "Ładowanie",
    st_hold_charge: "Wstrzymanie",
    st_freeze_charge: "Zamrożone ładowanie",
    st_export: "Oddawanie",
    st_freeze_export: "Zamrożone oddawanie",
    st_hold_export: "Wstrzymane oddawanie",
    st_demand: "Zużycie",
    col_time: "Czas",
    col_state: "Stan",
    col_import: "Pob.",
    col_export: "Odd.",
    col_pv: "PV",
    col_load: "Zuż.",
    col_soc: "SoC",
    col_cost: "Koszt",
    error: "Predbat zgłasza błąd",
    no_plan: "Brak danych planu. Sprawdź, czy istnieje {e}.",
    no_forecast: "Brak danych prognozy w {e}",
    missing: "Nie znaleziono encji: {e}",
    manual: "Ręcznie",
    ed_style: "Styl",
    style_modern: "Nowoczesny",
    style_glass: "Szkło",
    style_neon: "Neon",
    style_minimal: "Minimalistyczny",
    style_native: "Natywny Home Assistant",
    style_terminal: "Terminal (retro LCD)",
    ed_theme_mode: "Jasny / ciemny",
    mode_auto: "Zgodnie z motywem Home Assistant",
    mode_light: "Zawsze jasny",
    mode_dark: "Zawsze ciemny",
    saving_today: "Oszczędność dziś",
    predicted: "Prognoza",
    yesterday_v: "wczoraj {v}",
    forecast_today: "Prognoza dziś {v}",
    e_base_metric: "Koszt planu bazowego",
    grid_chart: "Pobór i oddawanie do sieci",
    rates_chart: "Ceny energii",
    tab_battery: "Bateria",
    tab_grid: "Sieć",
    tab_rates: "Ceny",
    export_rate: "Cena oddawania",
    ed_show_grid_chart: "Wykres poboru/oddawania",
    ed_show_rates_chart: "Wykres cen energii",
    ed_chart_layout: "Układ wykresów",
    layout_tabs: "Karty (jeden wykres naraz)",
    layout_stacked: "Jeden pod drugim (wszystkie)",
    ed_font_scale: "Rozmiar tekstu",
    e_export_energy: "Prognoza oddanej energii",
    e_import_energy: "Prognoza pobranej energii",
    missing_n: "Nie znaleziono {n} encji Predbat",
    missing_hint: "Otwórz edytor karty, aby sprawdzić nazwy encji lub zmienić prefiks.",
    no_raw: "{e} nie zawiera danych planu (atrybut „raw”). Zaktualizuj Predbat, aby zobaczyć plan.",
    tab_data: "Dane",
    dq_summary_one: "1 okres zerowego zużycia w ciągu {d} dni",
    dq_summary_few: "{n} okresy zerowego zużycia w ciągu {d} dni",
    dq_filled_n_one: "1 uzupełniony przez Predbat",
    dq_filled_n_few: "{n} uzupełnione przez Predbat",
    dq_unfilled_n_one: "1 nieuzupełniony",
    dq_unfilled_n_few: "{n} nieuzupełnione",
    dq_more_few: "i {n} więcej",
    dq_title: "Jakość danych zużycia",
    dq_chip: "Dane zużycia",
    dq_summary: "{n} okresów zerowego zużycia w ciągu {d} dni",
    dq_filled_n: "{n} uzupełnionych przez Predbat",
    dq_unfilled_n: "{n} nieuzupełnionych",
    dq_hint_filled: "Licznik zużycia stał w miejscu, choć moc zużycia pokazywała pobór. Predbat uzupełnia to z mocy zużycia, nic nie trzeba robić.",
    dq_hint_unfilled: "Licznik zużycia stał w miejscu i brak danych mocy zużycia. Predbat wstawia średnie zużycie, więc prognoza może być błędna.",
    dq_more: "i {n} więcej",
    dq_view: "Pokaż widok {d} dni",
    dq_note: "Ta sama kontrola, którą wykonuje Predbat, na podstawie historii Home Assistant.",
    dq_good: "{v}% poprawnych w ciągu {d} dni",
    dq_l_ok: "Poprawne",
    dq_l_filled: "Uzupełnione przez Predbat",
    dq_l_unfilled: "Nieuzupełnione",
    dq_l_nodata: "Brak historii",
    dq_loading: "Wczytywanie historii zużycia…",
    dq_error: "Nie udało się wczytać historii: {v}",
    dq_no_history: "Brak historii dla {e}. Upewnij się, że te czujniki są zapisywane.",
    dq_unsupported: "Historia nie jest tu dostępna.",
    ed_show_data_quality: "Alarm zerowego zużycia (jakość danych)",
    ed_dq_days: "Dni jakości danych",
    ed_dq_minutes: "Oznacz płaskie zużycie po",
    e_load_today: "Zużycie dziś (kWh), jak w apps.yaml",
    e_load_power: "Moc zużycia, jak w apps.yaml",
    ed_title: "Tytuł",
    ed_prefix: "Prefiks Predbat",
    ed_language: "Język",
    ed_auto: "Auto (Home Assistant)",
    ed_show_header: "Nagłówek",
    ed_show_overview: "Kafelki podsumowania",
    ed_show_chart: "Wykres prognozy baterii",
    ed_show_timeline: "Oś czasu planu",
    ed_show_actions: "Nadchodzące działania",
    ed_show_table: "Pełna tabela planu (przełącznik)",
    ed_show_base: "Linia bazowa na wykresie",
    ed_show_rates: "Cena poboru na wykresie",
    ed_hours: "Liczba godzin",
    ed_max_actions: "Maks. liczba działań",
    ed_capacity: "Pojemność baterii (kWh, opcjonalnie)",
    ed_entities: "Encje Predbat",
    ed_check: "Sprawdzenie encji",
    ed_found: "Znaleziono {n} z {t} encji",
    ed_reset: "Przywróć domyślne encje",
    ed_sections: "Sekcje",
    e_status: "Status",
    e_plan: "Plan (plan_html)",
    e_mode: "Wybór trybu",
    e_soc_now: "SoC baterii teraz (kWh)",
    e_soc_best: "Prognoza SoC — najlepszy plan",
    e_soc_base: "Prognoza SoC — bazowa",
    e_inverter_config: "Konfiguracja falownika (pojemność)",
    e_hours_left: "Godziny pracy baterii",
    e_rates: "Ceny poboru",
    e_rates_export: "Ceny oddawania",
    e_cost_today: "Koszt dziś",
    e_best_metric: "Łączny koszt planu",
    e_savings: "Oszczędność wczoraj",
    e_charge_start: "Początek ładowania",
    e_charge_end: "Koniec ładowania",
    e_charge_limit: "Cel ładowania (%)",
    e_export_start: "Początek oddawania",
    e_export_end: "Koniec oddawania",
    e_export_limit: "Cel oddawania (%)",
  },
  es: {
    ed_auto_none: "no encontrado, indica el sensor de apps.yaml",
    ed_auto_found: "detectado automáticamente",
    dq_no_source: "No se encontraron sensores de consumo. Usa en load_today y load_power los mismos sensores que en el apps.yaml de Predbat.",
    dq_checked: "Comprobado: {e}",
    dq_all_filled: "todos rellenados por Predbat",
    dq_recent: "{n} en las últimas 24 h",
    title: "Predbat",
    updated: "Actualizado {v}",
    just_now: "ahora mismo",
    min_ago: "hace {n} min",
    h_ago: "hace {n} h",
    battery: "Batería",
    hours_left: "quedan {n} h",
    now: "Ahora",
    import: "Importación",
    export: "Exportación",
    cost_today: "Coste hoy",
    plan_total: "Total del plan {v}",
    saved_yesterday: "Ahorro de ayer",
    vs_baseline: "vs. una carga barata",
    next_charge: "Próxima carga",
    next_export: "Próxima exportación",
    none_planned: "Nada previsto",
    target: "al {v}%",
    forecast: "Previsión de batería",
    best: "Plan de Predbat",
    base: "Base",
    rate: "Precio de importación",
    reserve: "Reserva",
    plan: "Plan",
    upcoming: "Próximas acciones",
    no_actions: "Sin carga ni exportación forzada en las próximas {n} h",
    show_full: "Ver plan completo",
    hide_full: "Ocultar plan completo",
    today: "Hoy",
    tomorrow: "Mañana",
    avg: "media {v}",
    ends_at: "termina {v}%",
    st_charge: "Carga",
    st_hold_charge: "Mantener",
    st_freeze_charge: "Carga congelada",
    st_export: "Exportar",
    st_freeze_export: "Exportación congelada",
    st_hold_export: "Mantener exportación",
    st_demand: "Demanda",
    col_time: "Hora",
    col_state: "Estado",
    col_import: "Imp",
    col_export: "Exp",
    col_pv: "FV",
    col_load: "Carga",
    col_soc: "SoC",
    col_cost: "Coste",
    error: "Predbat informa de un error",
    no_plan: "Aún no hay datos del plan. Comprueba que existe {e}.",
    no_forecast: "Sin datos de previsión en {e}",
    missing: "Entidad no encontrada: {e}",
    manual: "Manual",
    ed_style: "Estilo",
    style_modern: "Moderno",
    style_glass: "Cristal",
    style_neon: "Neón",
    style_minimal: "Minimalista",
    style_native: "Nativo de Home Assistant",
    style_terminal: "Terminal (LCD retro)",
    ed_theme_mode: "Claro / oscuro",
    mode_auto: "Seguir el tema de Home Assistant",
    mode_light: "Siempre claro",
    mode_dark: "Siempre oscuro",
    saving_today: "Ahorro hoy",
    predicted: "Previsto",
    yesterday_v: "ayer {v}",
    forecast_today: "Previsión hoy {v}",
    e_base_metric: "Coste del plan base",
    grid_chart: "Importación y exportación de red",
    rates_chart: "Precios de energía",
    tab_battery: "Batería",
    tab_grid: "Red",
    tab_rates: "Precios",
    export_rate: "Precio de exportación",
    ed_show_grid_chart: "Gráfico de importación/exportación",
    ed_show_rates_chart: "Gráfico de precios",
    ed_chart_layout: "Disposición de gráficos",
    layout_tabs: "Pestañas (uno a la vez)",
    layout_stacked: "Apilados (todos)",
    ed_font_scale: "Tamaño del texto",
    e_export_energy: "Energía exportada prevista",
    e_import_energy: "Energía importada prevista",
    missing_n: "No se encontraron {n} entidades de Predbat",
    missing_hint: "Abre el editor de la tarjeta para revisar los nombres o cambiar el prefijo.",
    no_raw: "{e} no tiene datos del plan (atributo «raw»). Actualiza Predbat para ver el plan.",
    tab_data: "Datos",
    dq_summary_one: "1 periodo de consumo cero en los últimos {d} días",
    dq_filled_n_one: "1 rellenado por Predbat",
    dq_title: "Calidad de datos de consumo",
    dq_chip: "Datos de consumo",
    dq_summary: "{n} periodos de consumo cero en los últimos {d} días",
    dq_filled_n: "{n} rellenados por Predbat",
    dq_unfilled_n: "{n} sin rellenar",
    dq_hint_filled: "El total de consumo no subió aunque la potencia mostraba uso. Predbat lo rellena con la potencia de consumo, no hay que hacer nada.",
    dq_hint_unfilled: "El total de consumo no subió y no había datos de potencia. Predbat usa el consumo medio, así que la previsión puede fallar.",
    dq_more: "y {n} más",
    dq_view: "Ver {d} días",
    dq_note: "La misma comprobación que hace Predbat, con el historial de Home Assistant.",
    dq_good: "{v}% correcto en {d} días",
    dq_l_ok: "Correcto",
    dq_l_filled: "Rellenado por Predbat",
    dq_l_unfilled: "Sin rellenar",
    dq_l_nodata: "Sin historial",
    dq_loading: "Cargando historial de consumo…",
    dq_error: "No se pudo cargar el historial: {v}",
    dq_no_history: "No hay historial para {e}. Comprueba que estos sensores se registran.",
    dq_unsupported: "El historial no está disponible aquí.",
    ed_show_data_quality: "Alarma de consumo cero (calidad de datos)",
    ed_dq_days: "Días de calidad de datos",
    ed_dq_minutes: "Marcar consumo plano tras",
    e_load_today: "Consumo de hoy (kWh), como en apps.yaml",
    e_load_power: "Potencia de consumo, como en apps.yaml",
    ed_title: "Título",
    ed_prefix: "Prefijo de Predbat",
    ed_language: "Idioma",
    ed_auto: "Auto (Home Assistant)",
    ed_show_header: "Cabecera",
    ed_show_overview: "Resumen",
    ed_show_chart: "Gráfico de previsión",
    ed_show_timeline: "Línea de tiempo del plan",
    ed_show_actions: "Próximas acciones",
    ed_show_table: "Tabla completa del plan (desplegable)",
    ed_show_base: "Línea base en el gráfico",
    ed_show_rates: "Precio de importación en el gráfico",
    ed_hours: "Horas a mostrar",
    ed_max_actions: "Máx. acciones próximas",
    ed_capacity: "Capacidad de batería (kWh, opcional)",
    ed_entities: "Entidades de Predbat",
    ed_check: "Comprobación de entidades",
    ed_found: "{n} de {t} entidades encontradas",
    ed_reset: "Restablecer entidades",
    ed_sections: "Secciones",
    e_status: "Estado",
    e_plan: "Plan (plan_html)",
    e_mode: "Selector de modo",
    e_soc_now: "SoC actual de la batería (kWh)",
    e_soc_best: "Previsión SoC — mejor plan",
    e_soc_base: "Previsión SoC — base",
    e_inverter_config: "Configuración del inversor (capacidad)",
    e_hours_left: "Horas de batería restantes",
    e_rates: "Precios de importación",
    e_rates_export: "Precios de exportación",
    e_cost_today: "Coste hoy",
    e_best_metric: "Coste total del plan",
    e_savings: "Ahorro de ayer",
    e_charge_start: "Inicio de la próxima carga",
    e_charge_end: "Fin de la próxima carga",
    e_charge_limit: "Objetivo de carga (%)",
    e_export_start: "Inicio de la próxima exportación",
    e_export_end: "Fin de la próxima exportación",
    e_export_limit: "Objetivo de exportación (%)",
  },
};

function pickLang(hass, config) {
  const want = (config && config.language && config.language !== "auto")
    ? config.language
    : ((hass && (hass.locale?.language || hass.language)) || "en");
  const base = String(want).toLowerCase().split(/[-_]/)[0];
  return TRANSLATIONS[base] ? base : "en";
}

function makeT(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const t = (key, vars) => {
    // plural forms: key_one / key_few (Polish 2–4) / key
    if (vars && typeof vars.n === "number") {
      const n = vars.n;
      let form = "";
      if (n === 1) form = "_one";
      else if (lang === "pl" && [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) form = "_few";
      if (form && (dict[key + form] !== undefined || TRANSLATIONS.en[key + form] !== undefined) &&
          (dict === TRANSLATIONS.en || dict[key + form] !== undefined)) key = key + form;
    }
    let s = dict[key] ?? TRANSLATIONS.en[key] ?? key;
    if (vars) for (const k of Object.keys(vars)) s = s.split(`{${k}}`).join(vars[k]);
    return s;
  };
  return t;
}

/* ------------------------------------------------------------------ */
/*  Defaults                                                           */
/* ------------------------------------------------------------------ */
const ENTITY_KEYS = [
  "status", "plan", "mode", "soc_now", "soc_best", "soc_base", "inverter_config",
  "hours_left", "rates", "rates_export", "cost_today", "best_metric", "base_metric", "savings",
  "charge_start", "charge_end", "charge_limit", "export_start", "export_end", "export_limit",
  "export_energy", "import_energy", "load_today", "load_power",
];

function defaultEntities(prefix) {
  const p = (prefix || "predbat").trim() || "predbat";
  return {
    status: `${p}.status`,
    plan: `${p}.plan_html`,
    mode: `select.${p}_mode`,
    soc_now: `${p}.soc_kw_h0`,
    soc_best: `${p}.soc_kw_best`,
    soc_base: `${p}.soc_kw`,
    inverter_config: `sensor.${p}_inverter_config`,
    hours_left: `${p}.best_battery_hours_left`,
    rates: `${p}.rates`,
    rates_export: `${p}.rates_export`,
    cost_today: `${p}.cost_today`,
    best_metric: `${p}.best_metric`,
    base_metric: `${p}.metric`,
    savings: `${p}.savings_yesterday_predbat`,
    charge_start: `${p}.best_charge_start`,
    charge_end: `${p}.best_charge_end`,
    charge_limit: `${p}.best_charge_limit`,
    export_start: `${p}.best_export_start`,
    export_end: `${p}.best_export_end`,
    export_limit: `${p}.best_export_limit`,
    export_energy: `${p}.best_export_energy`,
    import_energy: `${p}.best_import_energy`,
    load_today: "",  // auto: the GivTCP sensors, or set the ones from apps.yaml
    load_power: "",
  };
}

const STYLE_NAMES = ["modern", "glass", "neon", "minimal", "native", "terminal"];

const DEFAULT_CONFIG = {
  style: "modern",
  theme_mode: "auto",
  title: "",
  prefix: "predbat",
  language: "auto",
  show_header: true,
  show_overview: true,
  show_chart: true,
  show_grid_chart: true,
  show_rates_chart: true,
  chart_layout: "tabs",
  font_scale: 1,
  show_timeline: true,
  show_actions: true,
  show_table: true,
  show_base: true,
  show_rates: true,
  show_data_quality: true,
  data_quality_days: 7,
  data_quality_minutes: 30,
  hours: 24,
  max_actions: 4,
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const BAD = /^(unknown|unavailable|undefined|none|null|)$/i;

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function num(v) {
  if (v === null || v === undefined) return null;
  if (typeof v === "number") return isFinite(v) ? v : null;
  if (BAD.test(String(v).trim())) return null;
  const n = parseFloat(v);
  return isFinite(n) ? n : null;
}

function parseTime(s) {
  if (s === null || s === undefined) return null;
  if (s instanceof Date) return isNaN(s) ? null : s;
  let t = String(s).trim();
  if (BAD.test(t)) return null;
  // Bare clock time, e.g. "23:30:00" → next occurrence
  if (/^\d{1,2}:\d{2}(:\d{2})?$/.test(t)) {
    const [h, m] = t.split(":").map(Number);
    const d = new Date();
    d.setHours(h, m, 0, 0);
    if (d.getTime() < Date.now() - 12 * 3600e3) d.setDate(d.getDate() + 1);
    return d;
  }
  t = t.replace(" ", "T").replace(/([+-]\d{2})(\d{2})$/, "$1:$2");
  const d = new Date(t);
  return isNaN(d) ? null : d;
}

function seriesFrom(results) {
  if (!results || typeof results !== "object") return [];
  const out = [];
  for (const [k, v] of Object.entries(results)) {
    const d = parseTime(k);
    const n = num(v);
    if (d && n !== null) out.push([d.getTime(), n]);
  }
  out.sort((a, b) => a[0] - b[0]);
  return out;
}

function nearest(series, t) {
  if (!series.length) return null;
  let lo = 0, hi = series.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (series[mid][0] <= t) lo = mid; else hi = mid;
  }
  return Math.abs(series[lo][0] - t) <= Math.abs(series[hi][0] - t) ? series[lo] : series[hi];
}

function stepAt(series, t) {
  // value of a step series at time t (last point at or before t)
  if (!series.length) return null;
  let v = null;
  for (const p of series) { if (p[0] <= t) v = p[1]; else break; }
  return v;
}

/** Hours between axis labels so they never collide: at least `minPx` apart. */
function tickStep(hours, widthPx, minPx) {
  const pxPerHour = widthPx / Math.max(1, hours);
  for (const st of [1, 2, 3, 4, 6, 8, 12, 24]) if (st * pxPerHour >= minPx) return st;
  return 24;
}

function categorise(state) {
  switch (state) {
    case "Chrg": return "charge";
    case "HoldChrg": return "hold_charge";
    case "FrzChrg": return "freeze_charge";
    case "Exp": return "export";
    case "FrzExp": return "freeze_export";
    case "HoldExp": return "hold_export";
    default: return "demand";
  }
}

function categoriseStatus(text) {
  const s = String(text || "");
  if (/error/i.test(s)) return "error";
  if (/freeze.?charg/i.test(s)) return "freeze_charge";
  if (/hold.?charg/i.test(s)) return "hold_charge";
  if (/charg/i.test(s)) return "charge";
  if (/freeze.?(export|discharg)/i.test(s)) return "freeze_export";
  if (/hold.?(export|discharg)/i.test(s)) return "hold_export";
  if (/export|discharg/i.test(s)) return "export";
  if (/demand/i.test(s)) return "demand";
  return "neutral";
}

const STATE_ICON = {
  charge: "mdi:battery-charging-high",
  hold_charge: "mdi:battery-lock",
  freeze_charge: "mdi:snowflake",
  export: "mdi:transmission-tower-export",
  freeze_export: "mdi:snowflake-alert",
  hold_export: "mdi:battery-lock-open",
  demand: "mdi:home-lightning-bolt-outline",
  error: "mdi:alert-circle",
  neutral: "mdi:information-outline",
};

/* ------------------------------------------------------------------ */
/*  Load data quality (zero-load detection)                           */
/* ------------------------------------------------------------------ */
/* Predbat logs "Found N periods of zero load with power data" when its
 * load_today history (the sensor(s) in apps.yaml) stays flat for 30+
 * minutes while load_power shows use. That warning is only in Predbat's
 * log, so the card repeats Predbat's own steps on Home Assistant history
 * of the same sensors:
 *   1. skip unavailable/unknown readings, round times down to the minute
 *   2. join readings with straight lines; a small drop is held flat,
 *      a reset (near midnight or a drop of 1 kWh+) restarts the count
 *   3. any run of identical minute values of 30+ minutes is a period;
 *      with load power above 0 somewhere in it Predbat fills it from
 *      power ("filled"), otherwise it has to use averages ("not filled"). */

/** Turn one entity's history (full or compressed websocket format) into
 *  a sorted list of [ms, number|null]. null = unknown/unavailable. */
function historySeries(rows) {
  const out = [];
  if (!Array.isArray(rows)) return out;
  for (const r of rows) {
    if (!r) continue;
    const raw = r.s !== undefined ? r.s : r.state;
    let tm = r.lu ?? r.lc ?? r.last_updated ?? r.last_changed;
    if (tm === undefined || tm === null) continue;
    tm = typeof tm === "number" ? tm * 1000 : Date.parse(tm);
    if (!isFinite(tm)) continue;
    out.push([tm, num(raw)]);
  }
  out.sort((a, b) => a[0] - b[0]);
  return out;
}

/** Minute-by-minute values from `start` to `end` the way Predbat builds them.
 *  Returns Float64Array (NaN = no data yet). cumulative=true applies
 *  Predbat's handling of drops and resets for kWh totals. */
function minuteValues(series, start, end, cumulative) {
  const n = Math.max(0, Math.ceil((end - start) / 60000));
  const out = new Float64Array(n).fill(NaN);
  let prevM = null, prevV = null;
  for (const [tm, v0] of series) {
    if (v0 === null) continue; // Predbat skips unavailable/unknown
    let v = v0;
    const m = Math.floor((Math.floor(tm / 60000) * 60000 - start) / 60000);
    if (prevM !== null && m > prevM) {
      const a = Math.max(0, prevM), b = Math.min(n, m);
      if (cumulative && v < prevV) {
        const d = new Date(tm);
        const hm = d.getHours() * 60 + d.getMinutes();
        const nearMidnight = hm < 6 || hm > 23 * 60 + 58;
        if (nearMidnight || prevV - v >= 1) {
          for (let i = a; i < b; i++) out[i] = v; // reset: new value back to the last reading
        } else {
          v = prevV; // small dip: held flat
          for (let i = a; i < b; i++) out[i] = prevV;
        }
      } else {
        const span = m - prevM;
        for (let i = a; i < b; i++) out[i] = prevV + ((v - prevV) * (i - prevM)) / span;
      }
    }
    if (m >= 0 && m < n) out[m] = v;
    prevM = m; prevV = v;
  }
  // hold the newest reading until now
  if (prevM !== null) for (let i = Math.max(0, prevM + 1); i < n; i++) out[i] = prevV;
  return out;
}

/** Sum several minute arrays (Predbat adds up multiple load sensors). */
function sumMinutes(arrays, n) {
  if (arrays.length === 1) return arrays[0];
  const out = new Float64Array(n).fill(NaN);
  for (let i = 0; i < n; i++) {
    let s = 0, any = false;
    for (const a of arrays) if (!isNaN(a[i])) { s += a[i]; any = true; }
    if (any) out[i] = s;
  }
  return out;
}

/**
 * loads: array of step series (kWh, daily totals); powers: array of step series
 * powerScale: multiply power values to get W (1000 for kW sensors)
 * Returns { periods: [{s, e, kind, kwh}], cells, start, end, slot }
 */
function detectZeroLoad(loads, powers, opts) {
  const { start, end } = opts;
  const gap = Math.max(5, Math.round(opts.minutes || 30));
  const n = Math.max(0, Math.ceil((end - start) / 60000));
  const load = sumMinutes(loads.map((s) => minuteValues(s, start, end, true)), n);
  const powerArrs = powers.map((s) => minuteValues(s, start, end, false));
  const power = powerArrs.length ? sumMinutes(powerArrs, n) : null;
  const scale = opts.powerScale || 1;

  // Predbat looks at a running total that only goes up, so a reset or a dip counts as flat
  const flat = new Uint8Array(n);
  for (let i = 1; i < n; i++) {
    const a = load[i - 1], b = load[i];
    if (isNaN(a) || isNaN(b)) continue;
    flat[i] = b - a <= 1e-9 ? 1 : 0;
  }

  const periods = [];
  let i = 1;
  while (i < n) {
    if (!flat[i]) { i++; continue; }
    let j = i;
    while (j + 1 < n && flat[j + 1]) j++;
    // minutes i-1 .. j all share one value: (j - i + 1) minutes long
    const len = j - i + 1;
    if (len - 1 >= gap) {
      let used = false, kwh = 0;
      if (power) {
        for (let k = i - 1; k <= j; k++) {
          const p = power[k];
          if (!isNaN(p) && p > 0) { used = true; kwh += (p * scale) / 60 / 1000; }
        }
      }
      periods.push({ s: start + (i - 1) * 60000, e: start + (j + 1) * 60000, kind: used ? "filled" : "unfilled", kwh });
    }
    i = j + 1;
  }

  // 30-minute cells for the heatmap: 0 ok, 1 filled, 2 not filled, -1 no history
  const slot = 30 * 60e3;
  let firstData = end;
  for (let k = 0; k < n; k++) if (!isNaN(load[k])) { firstData = start + k * 60000; break; }
  const cells = [];
  for (let t = start; t < end; t += slot) {
    let v = t + slot <= firstData ? -1 : 0;
    for (const p of periods) {
      if (p.s < t + slot && p.e > t) v = Math.max(v, p.kind === "unfilled" ? 2 : 1);
    }
    cells.push(v);
  }
  return { periods, cells, start, end, slot, hasPower: !!power };
}

/** Accept YAML typed by hand: "false"/"true" strings, numbers as strings,
 *  a missing or list-shaped `entities:`. Never throws. */
function normaliseConfig(config) {
  const src = config && typeof config === "object" ? config : {};
  const out = { ...DEFAULT_CONFIG };
  for (const [k, v] of Object.entries(src)) {
    if (k === "entities") continue;
    if (v === null || v === undefined) continue;
    const def = DEFAULT_CONFIG[k];
    if (typeof def === "boolean" && typeof v === "string") out[k] = !/^(false|off|no|0)$/i.test(v.trim());
    else if (typeof def === "number" && typeof v === "string") { const n = parseFloat(v); out[k] = isFinite(n) ? n : def; }
    else out[k] = v;
  }
  const ents = src.entities;
  out.entities = {};
  if (ents && typeof ents === "object" && !Array.isArray(ents)) {
    for (const [k, v] of Object.entries(ents)) {
      if (typeof v === "string" && v.trim()) out.entities[k] = v.trim();
      else if (Array.isArray(v)) {
        const list = v.filter((x) => typeof x === "string" && x.trim()).map((x) => x.trim());
        if (list.length) out.entities[k] = list;
      }
    }
  }
  if (typeof out.prefix !== "string" || !out.prefix.trim()) out.prefix = "predbat";
  return out;
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */
const THEME_STYLES = `

/* ===================== LIGHT / DARK OVERRIDE ===================== */
ha-card.m-light {
  --card-background-color: #ffffff;
  --ha-card-background: #ffffff;
  --primary-text-color: #1c1c1e;
  --secondary-text-color: #6b6f76;
  --divider-color: rgba(0, 0, 0, .12);
  --pb-muted: #6b6f76;
  background: #ffffff;
  color: #1c1c1e;
  color-scheme: light;
}
ha-card.m-dark {
  --card-background-color: #1c1e23;
  --ha-card-background: #1c1e23;
  --primary-text-color: #e8eaed;
  --secondary-text-color: #9aa0a6;
  --divider-color: rgba(255, 255, 255, .12);
  --pb-muted: #9aa0a6;
  background: #1c1e23;
  color: #e8eaed;
  color-scheme: dark;
}
/* ===================== STYLE: GLASS ===================== */
ha-card.s-glass {
  --pb-accent: #9775fa;
  --pb-glass: color-mix(in srgb, var(--card-background-color, #fff) 55%, transparent);
  --pb-tile: var(--pb-glass);
  --pb-line: color-mix(in srgb, var(--primary-text-color, #000) 12%, transparent);
  --pb-radius: 18px;
  background:
    radial-gradient(120% 80% at 0% 0%, color-mix(in srgb, #7950f2 32%, transparent), transparent 60%),
    radial-gradient(90% 70% at 100% 10%, color-mix(in srgb, #12b886 24%, transparent), transparent 60%),
    radial-gradient(90% 90% at 60% 100%, color-mix(in srgb, #f76707 18%, transparent), transparent 60%),
    var(--card-background-color, #fff);
  border-radius: 22px;
}
.s-glass .tile, .s-glass .action, .s-glass .ribbon, .s-glass .table-wrap, .s-glass .warn {
  backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%);
  border: 1px solid color-mix(in srgb, #fff 28%, transparent);
  box-shadow: 0 4px 18px rgba(0,0,0,.08), inset 0 1px 0 color-mix(in srgb, #fff 30%, transparent);
}
.s-glass .tile .accent-bar { top: auto; bottom: 0; left: 12px; right: 12px; width: auto; height: 3px; }
.s-glass .logo { border-radius: 50%; background: linear-gradient(135deg, #b197fc, #7950f2 50%, #12b886); }
.s-glass .ribbon { height: 18px; border-radius: 999px; padding: 2px; gap: 2px; }
.s-glass .ribbon > div { border-radius: 999px; box-shadow: none !important; }
.s-glass .pill { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
.s-glass th { background: var(--pb-glass); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }

/* ===================== STYLE: NEON ===================== */
ha-card.s-neon {
  --card-background-color: #07070f;
  --primary-text-color: #ecebff;
  --secondary-text-color: #8a88b8;
  --pb-accent: #00e5ff;
  --pb-rate: #ffe600;
  --pb-charge: #39ff88;
  --pb-hold_charge: #4d7cff;
  --pb-import: #4d7cff;
  --pb-freeze_charge: #7cfff0;
  --pb-export: #ff2bd6;
  --pb-freeze_export: #c77dff;
  --pb-hold_export: #ff8de8;
  --pb-error: #ff3860;
  --pb-demand: #1d1c34;
  --pb-tile: #0e0d1d;
  --pb-line: #26244a;
  --pb-muted: #8a88b8;
  --pb-radius: 6px;
  background:
    linear-gradient(transparent 95%, rgba(0,229,255,.06) 95%) 0 0 / 100% 22px,
    linear-gradient(90deg, transparent 95%, rgba(0,229,255,.06) 95%) 0 0 / 22px 100%,
    #07070f;
  color: var(--primary-text-color);
  border: 1px solid #26244a;
  box-shadow: 0 0 0 1px rgba(0,229,255,.12), 0 0 30px rgba(121,80,242,.18);
  border-radius: 10px;
}
.s-neon .tile, .s-neon .action { border: 1px solid var(--pb-line); }
.s-neon .tile-value, .s-neon .head-title, .s-neon .action .meta b {
  font-family: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: -.02em;
}
.s-neon .tile-value { text-shadow: 0 0 12px color-mix(in srgb, var(--pb-accent) 55%, transparent); }
.s-neon .tile .accent-bar { box-shadow: 0 0 10px var(--c); }
.s-neon .logo { border-radius: 6px; background: var(--card-background-color); border: 1px solid var(--pb-accent); color: var(--pb-accent); box-shadow: 0 0 12px rgba(0,229,255,.5), inset 0 0 8px rgba(0,229,255,.3); }
.s-neon .pill { border-radius: 4px; text-transform: uppercase; letter-spacing: .06em; font-size: calc(.78 * var(--u)); box-shadow: 0 0 12px color-mix(in srgb, var(--c) 40%, transparent); }
.s-neon .section-title { color: var(--pb-accent); letter-spacing: .14em; }
.s-neon .section-title::before { content: "// "; opacity: .6; }
.s-neon .l-best { filter: drop-shadow(0 0 4px var(--pb-accent)) drop-shadow(0 0 10px var(--pb-accent)); }
.s-neon .l-rate { filter: drop-shadow(0 0 3px var(--pb-rate)); opacity: .9; }
.s-neon .l-area { opacity: .55; }
.s-neon .ribbon { border-radius: 3px; height: 14px; border: 1px solid var(--pb-line); }
.s-neon .ribbon > div:not([style*="demand"]) { box-shadow: 0 0 10px var(--c) !important; }
.s-neon .action .ico { border-radius: 4px; box-shadow: 0 0 10px color-mix(in srgb, var(--c) 45%, transparent); }
.s-neon .toggle { border-radius: 4px; border-color: var(--pb-accent); color: var(--pb-accent); text-transform: uppercase; letter-spacing: .08em; font-size: calc(.78 * var(--u)); }
.s-neon .ring circle:nth-child(2) { filter: drop-shadow(0 0 4px currentColor); }

/* ===================== STYLE: MINIMAL ===================== */
ha-card.s-minimal {
  --pb-accent: var(--primary-text-color, #222);
  --pb-rate: var(--secondary-text-color, #888);
  --pb-tile: transparent;
  --pb-radius: 0;
}
.s-minimal .wrap { gap: 18px; padding: 18px 20px 20px; }
.s-minimal .logo { display: none; }
.s-minimal .head-title { font-size: calc(1.25 * var(--u)); font-weight: 300; letter-spacing: -.01em; }
.s-minimal .pill { background: none; border: none; padding: 0; font-weight: 500; }
.s-minimal .overview { gap: 0; border-top: 1px solid var(--pb-line); border-bottom: 1px solid var(--pb-line); }
.s-minimal .tile { padding: 12px 14px; border-right: 1px solid var(--pb-line); border-bottom: 1px solid var(--pb-line); margin: 0 -1px -1px 0; }
.s-minimal .tile .accent-bar { display: none; }
.s-minimal .tile-label { text-transform: none; letter-spacing: 0; font-size: calc(.82 * var(--u)); }
.s-minimal .tile-label ha-icon { display: none; }
.s-minimal .tile-value { font-weight: 300; font-size: calc(1.55 * var(--u)); }
.s-minimal .tile.battery .ring { width: 40px; height: 40px; }
.s-minimal .section-title { text-transform: none; letter-spacing: 0; font-weight: 500; color: var(--primary-text-color); font-size: calc(.9 * var(--u)); }
.s-minimal .l-area { display: none; }
.s-minimal .l-best { stroke-width: 1.6; }
.s-minimal .chart rect[opacity=".16"] { opacity: .08; }
.s-minimal .ribbon { height: 6px; border-radius: 0; background: var(--pb-line); }
.s-minimal .ribbon > div { box-shadow: none !important; }
.s-minimal .action { background: none; border-bottom: 1px solid var(--pb-line); border-radius: 0; padding: 8px 0; }
.s-minimal .actions { gap: 0; }
.s-minimal .action .ico { background: none; width: 20px; }
.s-minimal .toggle { border: none; padding: 0; text-decoration: underline; text-underline-offset: 3px; }
.s-minimal .legend i { border-radius: 50%; }

/* ===================== STYLE: NATIVE (Home Assistant) ===================== */
ha-card.s-native {
  --pb-accent: var(--primary-color, #03a9f4);
  --pb-charge: var(--success-color, #43a047);
  --pb-export: var(--warning-color, #ffa600);
  --pb-freeze_export: var(--amber-color, #ffc107);
  --pb-error: var(--error-color, #db4437);
  --pb-rate: var(--accent-color, #ff9800);
  --pb-tile: transparent;
  --pb-line: var(--divider-color, rgba(0,0,0,.12));
  --pb-radius: var(--ha-card-border-radius, 12px);
}
.s-native .wrap { padding: 16px; gap: 16px; }
.s-native .logo { background: color-mix(in srgb, var(--primary-color, #03a9f4) 20%, transparent); color: var(--primary-color, #03a9f4); box-shadow: none; border-radius: 50%; width: 40px; height: 40px; }
.s-native .head-title { font-size: var(--ha-card-header-font-size, calc(1.25 * var(--u))); font-weight: 400; }
.s-native .tile { border: 1px solid var(--pb-line); }
.s-native .tile-label { text-transform: none; letter-spacing: 0; font-size: calc(.86 * var(--u)); }
.s-native .tile-value { font-weight: 500; }
.s-native .section-title { text-transform: none; letter-spacing: 0; font-size: calc(1 * var(--u)); font-weight: 500; color: var(--primary-text-color); }
.s-native .pill { border-radius: 8px; font-weight: 500; }
.s-native .action { background: none; border: 1px solid var(--pb-line); }
.s-native .action .ico { border-radius: 50%; }
.s-native .ribbon { border-radius: 4px; height: 16px; }
.s-native .toggle { border-radius: 4px; color: var(--primary-color, #03a9f4); border-color: transparent; text-transform: uppercase; font-weight: 500; letter-spacing: .05em; padding-left: 0; }
.s-native .table-wrap { border-radius: 8px; }

/* ===================== STYLE: TERMINAL (retro LCD) ===================== */
ha-card.s-terminal {
  --card-background-color: #0a140a;
  --primary-text-color: #a8ff9a;
  --secondary-text-color: #4f8f47;
  --pb-accent: #a8ff9a;
  --pb-rate: #ffb000;
  --pb-charge: #5cff5c;
  --pb-hold_charge: #2fbf71;
  --pb-import: #2fbf71;
  --pb-freeze_charge: #9dffb0;
  --pb-export: #ffb000;
  --pb-freeze_export: #ffd166;
  --pb-hold_export: #e09f3e;
  --pb-error: #ff5f56;
  --pb-demand: #183018;
  --pb-tile: transparent;
  --pb-line: #1f3d1f;
  --pb-muted: #4f8f47;
  --pb-radius: 0;
  background:
    repeating-linear-gradient(0deg, rgba(0,0,0,.22) 0 1px, transparent 1px 3px),
    radial-gradient(120% 100% at 50% 0%, #112211, #070d07);
  color: var(--primary-text-color);
  border: 2px solid #1f3d1f;
  border-radius: 6px;
  font-family: "VT323", "IBM Plex Mono", "JetBrains Mono", ui-monospace, Menlo, monospace;
  text-shadow: 0 0 6px rgba(168,255,154,.35);
}
.s-terminal * { font-family: inherit; }
.s-terminal .logo { background: none; border: 1px solid var(--pb-accent); border-radius: 0; box-shadow: none; color: var(--pb-accent); }
.s-terminal .head-title { text-transform: uppercase; letter-spacing: .12em; }
.s-terminal .head-title::after { content: "_"; animation: pbblink 1.1s steps(1) infinite; }
@keyframes pbblink { 50% { opacity: 0; } }
.s-terminal .pill { border-radius: 0; background: none; text-transform: uppercase; }
.s-terminal .pill::before { content: "["; } .s-terminal .pill::after { content: "]"; }
.s-terminal .tile, .s-terminal .action { border: 1px dashed var(--pb-line); }
.s-terminal .tile .accent-bar { width: 0; border-left: 3px dotted var(--c); background: none; }
.s-terminal .tile-label, .s-terminal .section-title { letter-spacing: .12em; }
.s-terminal .section-title::before { content: "> "; }
.s-terminal .tile-value { letter-spacing: .02em; }
.s-terminal .ring text { fill: var(--pb-accent); }
.s-terminal .ring circle:nth-child(2) { stroke-linecap: butt; stroke-dasharray: 3 2; }
.s-terminal .l-area { opacity: .25; }
.s-terminal .l-best { stroke-linejoin: miter; }
.s-terminal .ribbon { border-radius: 0; height: 14px; border: 1px solid var(--pb-line); background: repeating-linear-gradient(90deg, transparent 0 3px, var(--pb-demand) 3px 4px); }
.s-terminal .ribbon > div { background: repeating-linear-gradient(90deg, var(--c) 0 3px, transparent 3px 4px); box-shadow: none !important; }
.s-terminal .action .ico { border-radius: 0; background: none; border: 1px solid var(--c); }
.s-terminal .toggle { border-radius: 0; text-transform: uppercase; }
.s-terminal .toggle::before { content: "> "; }
.s-terminal .tip { border-radius: 0; background: var(--card-background-color); border-color: var(--pb-accent); }
.s-terminal .table-wrap { border-radius: 0; }
.s-terminal .legend i { border-radius: 0; }

/* ---- light variants of the always-dark styles ---- */
ha-card.m-light.s-neon {
  --card-background-color: #f6f6ff;
  --primary-text-color: #15142c;
  --secondary-text-color: #5d5b85;
  --pb-muted: #5d5b85;
  --pb-accent: #0089b0;
  --pb-rate: #a87f00;
  --pb-charge: #00a35a;
  --pb-hold_charge: #2f5bd9;
  --pb-freeze_charge: #00a99a;
  --pb-export: #cc0099;
  --pb-freeze_export: #8a3fd1;
  --pb-hold_export: #e0559f;
  --pb-demand: #e4e3f5;
  --pb-tile: #ffffff;
  --pb-line: #d9d7f2;
  background:
    linear-gradient(transparent 95%, rgba(0,137,176,.07) 95%) 0 0 / 100% 22px,
    linear-gradient(90deg, transparent 95%, rgba(0,137,176,.07) 95%) 0 0 / 22px 100%,
    #f6f6ff;
  color: #15142c;
  border-color: #d9d7f2;
  box-shadow: 0 0 0 1px rgba(0,137,176,.12), 0 6px 24px rgba(121,80,242,.12);
}
.m-light.s-neon .tile-value { text-shadow: none; }
.m-light.s-neon .l-best { filter: drop-shadow(0 0 3px color-mix(in srgb, var(--pb-accent) 60%, transparent)); }
ha-card.m-light.s-terminal {
  --card-background-color: #c9d3b2;
  --primary-text-color: #1b2610;
  --secondary-text-color: #4c5c37;
  --pb-muted: #4c5c37;
  --pb-accent: #1b2610;
  --pb-rate: #7a4300;
  --pb-charge: #2e5c17;
  --pb-hold_charge: #3d6b4a;
  --pb-freeze_charge: #4f7a2a;
  --pb-export: #8a4b00;
  --pb-freeze_export: #a3651a;
  --pb-hold_export: #7a5a2a;
  --pb-error: #9c1c12;
  --pb-demand: #b3bd99;
  --pb-line: #98a47f;
  background:
    repeating-linear-gradient(0deg, rgba(0,0,0,.04) 0 1px, transparent 1px 3px),
    radial-gradient(120% 100% at 50% 0%, #d3dcbd, #bcc7a3);
  color: #1b2610;
  border-color: #98a47f;
  text-shadow: none;
}
`;

const STYLES = `
:host { display: block; }
ha-card {
  --u: calc(16px * var(--pb-scale, 1));
  --pb-charge: #12b886;
  --pb-import: #4c6ef5;
  --pb-hold_charge: #4dabf7;
  --pb-freeze_charge: #63e6be;
  --pb-export: #f76707;
  --pb-freeze_export: #fab005;
  --pb-hold_export: #ffa94d;
  --pb-demand: color-mix(in srgb, var(--secondary-text-color, #888) 28%, transparent);
  --pb-error: #fa5252;
  --pb-neutral: var(--secondary-text-color, #888);
  --pb-accent: #7950f2;
  --pb-rate: #e64980;
  --pb-tile: color-mix(in srgb, var(--primary-text-color, #000) 4.5%, transparent);
  --pb-line: color-mix(in srgb, var(--primary-text-color, #000) 10%, transparent);
  --pb-muted: var(--secondary-text-color, #727272);
  --pb-radius: 14px;
  display: block; overflow: hidden; color: var(--primary-text-color);
}
.cq { container-type: inline-size; }
.wrap { padding: 14px 16px 16px; display: flex; flex-direction: column; gap: 14px; }
.muted { color: var(--pb-muted); }
.clickable { cursor: pointer; }

/* header */
.head { display: flex; align-items: center; gap: 10px; }
.logo {
  width: 36px; height: 36px; border-radius: 11px; flex: none;
  display: grid; place-items: center; color: #fff;
  background: linear-gradient(135deg, #5f3dc4, #7950f2 60%, #9775fa);
  box-shadow: 0 2px 8px color-mix(in srgb, #7950f2 40%, transparent);
}
.logo ha-icon { --mdc-icon-size: 22px; }
.head-text { min-width: 0; flex: 1; }
.head-title { font-size: calc(1.12 * var(--u)); font-weight: 600; line-height: 1.2; }
.head-sub { font-size: calc(.84 * var(--u)); line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pill {
  display: inline-flex; align-items: center; gap: 6px; max-width: 55%;
  padding: 5px 11px 5px 9px; border-radius: 999px; font-size: calc(.86 * var(--u)); font-weight: 600;
  background: color-mix(in srgb, var(--c) 16%, transparent); color: var(--c);
  border: 1px solid color-mix(in srgb, var(--c) 35%, transparent);
}
.pill span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pill ha-icon { --mdc-icon-size: 16px; flex: none; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--c); flex: none; }
.pill.live .dot { animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: .35 } }

.banner {
  display: flex; gap: 8px; align-items: center; padding: 8px 12px; border-radius: 10px; font-size: calc(.85 * var(--u));
  background: color-mix(in srgb, var(--pb-error) 14%, transparent); color: var(--pb-error);
}
.banner ha-icon { --mdc-icon-size: 18px; }
.warn { font-size: calc(.8 * var(--u)); padding: 8px 12px; border-radius: 10px; background: var(--pb-tile); }

/* overview */
.overview { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
@container (min-width: 540px) { .overview { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@container (min-width: 1080px) { .overview { grid-template-columns: repeat(6, minmax(0, 1fr)); } }
@container (max-width: 400px) { .ring { width: 44px; height: 44px; } .tile.battery { gap: 8px; } }
.tile {
  background: var(--pb-tile); border-radius: var(--pb-radius); padding: 10px 12px;
  display: flex; flex-direction: column; gap: 2px; min-width: 0; position: relative;
}
.tile.battery { flex-direction: row; align-items: center; gap: 10px; }
.tile-label { font-size: calc(.78 * var(--u)); text-transform: uppercase; letter-spacing: .05em; color: var(--pb-muted); display: flex; align-items: center; gap: 5px; }
.tile-label ha-icon { --mdc-icon-size: 14px; }
.tile-value { font-size: calc(1.38 * var(--u)); font-weight: 650; line-height: 1.25; font-variant-numeric: tabular-nums; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tile-value.tv-md { font-size: calc(1.1 * var(--u)); }
.tile-value.tv-sm { font-size: calc(1.06 * var(--u)); }
.tile-value.tv-lg { font-size: calc(1.14 * var(--u)); }
.tile-value small { font-size: calc(.8 * var(--u)); font-weight: 500; color: var(--pb-muted); margin-left: 2px; }
.tile-sub { font-size: calc(.84 * var(--u)); color: var(--pb-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums; }
.tile .accent-bar { position: absolute; left: 0; top: 10px; bottom: 10px; width: 3px; border-radius: 3px; background: var(--c, transparent); }
.ring { width: calc(54px * var(--pb-scale, 1)); height: calc(54px * var(--pb-scale, 1)); flex: none; }
.ring text { font-size: 14px; font-weight: 700; fill: var(--primary-text-color); font-variant-numeric: tabular-nums; }
.pos { color: var(--pb-charge); }
.neg { color: var(--pb-error); }

/* section */
.section { display: flex; flex-direction: column; gap: 8px; }
.section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.section-title { font-size: calc(.88 * var(--u)); font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--pb-muted); }
.legend { display: flex; flex-wrap: wrap; gap: 4px 14px; font-size: calc(.82 * var(--u)); color: var(--pb-muted); }
.legend i { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 5px; vertical-align: -1px; background: var(--c); }
.legend i.line { height: 3px; vertical-align: 2px; border-radius: 2px; }
.legend i.dash { height: 0; border-top: 2px dashed var(--c); background: none; vertical-align: 3px; }

/* sections are layout-transparent so empty ones add no gap */
.pb-sec { display: contents; }
.pb-sec:empty { display: none; }
.missing summary { cursor: pointer; }
.missing code { font-size: .9em; padding: 1px 5px; border-radius: 4px; background: var(--pb-tile); word-break: break-all; }

/* phones */
@container (max-width: 420px) {
  .wrap { padding: 12px 12px 14px; gap: 12px; }
  .overview { gap: 6px; }
  .tile { padding: 8px 10px; }
  .tile-value { font-size: calc(1.2 * var(--u)); }
  .tile-value.tv-md, .tile-value.tv-lg, .tile-value.tv-sm { font-size: calc(1.02 * var(--u)); }
  .ring { width: calc(44px * var(--pb-scale, 1)); height: calc(44px * var(--pb-scale, 1)); }
  .head { gap: 8px; }
  .logo { width: calc(32px * var(--pb-scale, 1)); height: calc(32px * var(--pb-scale, 1)); }
  .pill { max-width: 46%; padding: 4px 9px 4px 8px; }
  .action { padding: 7px 8px; gap: 8px; }
  .action .ico { width: 26px; height: 26px; }
  .tabs button { padding: 4px 9px; }
  .legend { gap: 3px 10px; }
}
@container (max-width: 360px) {
  .tile-label { letter-spacing: .02em; }
  .head-sub { white-space: normal; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
}

/* older browsers (iOS < 16.2, old Android WebView) without color-mix() */
@supports not (color: color-mix(in srgb, red 50%, blue)) {
  ha-card {
    --pb-tile: rgba(127, 127, 127, .09);
    --pb-line: rgba(127, 127, 127, .22);
    --pb-demand: rgba(127, 127, 127, .32);
  }
  .pill { background: rgba(127, 127, 127, .14); border-color: rgba(127, 127, 127, .3); }
  .action .ico { background: rgba(127, 127, 127, .14); }
  .banner { background: rgba(250, 82, 82, .14); }
}

/* load data quality */
ha-card {
  --pb-dq-ok: color-mix(in srgb, var(--pb-muted) 22%, transparent);
  --pb-dq-filled: #f59f00;
  --pb-dq-unfilled: var(--pb-error);
}
@supports not (color: color-mix(in srgb, red 50%, blue)) { ha-card { --pb-dq-ok: rgba(127, 127, 127, .22); } }
.s-neon { --pb-dq-filled: #ffe600; }
.s-terminal { --pb-dq-ok: #183018; --pb-dq-filled: #ffb000; }
.m-light.s-terminal { --pb-dq-ok: #b3bd99; --pb-dq-filled: #8a4b00; }
.dq-chip {
  display: inline-flex; align-items: center; gap: 4px; flex: none; cursor: pointer; font: inherit;
  font-size: calc(.8 * var(--u)); font-weight: 600; padding: 4px 9px 4px 7px; border-radius: 999px;
  color: var(--pb-dq-filled); background: color-mix(in srgb, var(--pb-dq-filled) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--pb-dq-filled) 40%, transparent);
}
.dq-chip.bad { color: var(--pb-dq-unfilled); background: color-mix(in srgb, var(--pb-dq-unfilled) 14%, transparent); border-color: color-mix(in srgb, var(--pb-dq-unfilled) 40%, transparent); }
.dq-chip ha-icon { --mdc-icon-size: 15px; }
.dq-chip b { font-variant-numeric: tabular-nums; }
@container (max-width: 520px) { .dq-chip-text { display: none; } .dq-chip { padding: 4px 7px; } }
.s-neon .dq-chip, .s-terminal .dq-chip, .s-native .dq-chip { border-radius: 4px; }
.s-terminal .dq-chip { border-radius: 0; }
details.dq { border-left: 3px solid var(--pb-dq-filled); }
details.dq.bad { border-left-color: var(--pb-dq-unfilled); }
details.dq summary { cursor: pointer; display: flex; align-items: center; gap: 6px; list-style: none; }
details.dq summary::-webkit-details-marker { display: none; }
details.dq summary ha-icon { --mdc-icon-size: 16px; color: var(--pb-dq-filled); flex: none; }
details.dq.bad summary ha-icon { color: var(--pb-dq-unfilled); }
details.dq summary::after { content: "▾"; margin-left: auto; opacity: .6; transition: transform .2s; }
details.dq[open] summary::after { transform: rotate(180deg); }
.dq-list { list-style: none; margin: 8px 0 4px; padding: 0; display: flex; flex-direction: column; gap: 3px; }
.dq-list li { display: flex; gap: 8px; align-items: flex-start; line-height: 1.35; }
.dq-list li > i { width: 9px; height: 9px; border-radius: 3px; background: var(--c); margin-top: 4px; flex: none; }
.dq-hint { margin: 6px 0 0; display: flex; gap: 8px; align-items: flex-start; line-height: 1.35; color: var(--pb-muted); }
.dq-hint > i { width: 9px; height: 9px; border-radius: 3px; background: var(--c); margin-top: 4px; flex: none; }
.dq-foot { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; margin-top: 6px; font-size: .92em; }

/* tabs */
.tabs { display: inline-flex; gap: 2px; padding: 3px; border-radius: 999px; background: var(--pb-tile); border: 1px solid var(--pb-line); }
.tabs button {
  border: none; background: none; color: var(--pb-muted); font: inherit; font-size: calc(.82 * var(--u)); font-weight: 600;
  padding: 4px 12px; border-radius: 999px; cursor: pointer;
}
.tabs button.on { background: var(--card-background-color, #fff); color: var(--primary-text-color); box-shadow: 0 1px 3px rgba(0,0,0,.15); }
.section-head { flex-wrap: wrap; align-items: center; }
.s-neon .tabs, .s-terminal .tabs { border-radius: 4px; }
.s-neon .tabs button, .s-terminal .tabs button { border-radius: 3px; text-transform: uppercase; letter-spacing: .06em; font-size: calc(.74 * var(--u)); }
.s-neon .tabs button.on { color: var(--pb-accent); box-shadow: 0 0 10px color-mix(in srgb, var(--pb-accent) 40%, transparent); }
.s-terminal .tabs { border-style: dashed; border-radius: 0; background: none; }
.s-terminal .tabs button { border-radius: 0; }
.s-terminal .tabs button.on { background: var(--pb-accent); color: var(--card-background-color); text-shadow: none; box-shadow: none; }
.s-minimal .tabs { background: none; border: none; padding: 0; gap: 12px; }
.s-minimal .tabs button { padding: 2px 0; border-radius: 0; }
.s-minimal .tabs button.on { background: none; box-shadow: none; border-bottom: 2px solid var(--primary-text-color); }
.s-native .tabs button.on { color: var(--primary-color, #03a9f4); }
.legend b { color: var(--primary-text-color); font-weight: 600; }

/* chart */
.chart { position: relative; width: 100%; touch-action: pan-y; }
.chart svg { display: block; width: 100%; overflow: visible; }
.chart .axis { font-size: calc(11px * var(--pb-scale, 1)); fill: var(--pb-muted); font-variant-numeric: tabular-nums; }
.chart .grid { stroke: var(--pb-line); stroke-width: 1; }
.tip {
  position: absolute; top: 4px; pointer-events: none; z-index: 2; display: none;
  background: var(--card-background-color, #fff); color: var(--primary-text-color);
  border: 1px solid var(--pb-line); border-radius: 10px; padding: 8px 11px; font-size: calc(.84 * var(--u));
  box-shadow: 0 4px 16px rgba(0,0,0,.15); white-space: nowrap; font-variant-numeric: tabular-nums;
}
.tip b { font-weight: 650; }
.tip .row { display: flex; justify-content: space-between; gap: 14px; }

/* timeline */
.ribbon { display: flex; height: 22px; border-radius: 8px; overflow: hidden; background: var(--pb-tile); }
.ribbon > div { height: 100%; background: var(--c); min-width: 1px; }
.ribbon > div + div { box-shadow: inset 1px 0 0 color-mix(in srgb, var(--card-background-color, #fff) 35%, transparent); }
.ticks { position: relative; height: calc(16px * var(--pb-scale, 1)); font-size: calc(11px * var(--pb-scale, 1)); color: var(--pb-muted); font-variant-numeric: tabular-nums; }
.ticks span { position: absolute; transform: translateX(-50%); white-space: nowrap; }
.ticks span:first-child { transform: none; }

/* actions */
.actions { display: flex; flex-direction: column; gap: 6px; }
.action {
  display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 12px; background: var(--pb-tile);
}
.action .ico {
  width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center;
  background: color-mix(in srgb, var(--c) 18%, transparent); color: var(--c);
}
.action .ico ha-icon { --mdc-icon-size: 18px; }
.action .what { font-weight: 600; font-size: calc(.96 * var(--u)); }
.action .when { font-size: calc(.84 * var(--u)); color: var(--pb-muted); font-variant-numeric: tabular-nums; }
.action .meta { text-align: right; font-size: calc(.84 * var(--u)); color: var(--pb-muted); font-variant-numeric: tabular-nums; }
.action .meta b { color: var(--primary-text-color); font-weight: 600; font-size: calc(.92 * var(--u)); }
.empty { font-size: calc(.88 * var(--u)); color: var(--pb-muted); padding: 6px 2px; }

/* table */
.toggle {
  align-self: flex-start; background: none; border: 1px solid var(--pb-line); color: var(--primary-text-color);
  border-radius: 999px; padding: 6px 13px; font: inherit; font-size: calc(.84 * var(--u)); cursor: pointer;
}
.toggle:hover { background: var(--pb-tile); }
.table-wrap { overflow-x: auto; max-height: 360px; overflow-y: auto; border-radius: 10px; border: 1px solid var(--pb-line); }
table { width: 100%; border-collapse: collapse; font-size: calc(.84 * var(--u)); font-variant-numeric: tabular-nums; }
th { position: sticky; top: 0; background: var(--card-background-color, #fff); text-align: right; font-weight: 600; color: var(--pb-muted); padding: 6px 8px; border-bottom: 1px solid var(--pb-line); }
td { text-align: right; padding: 5px 8px; border-bottom: 1px solid var(--pb-line); white-space: nowrap; }
th:first-child, td:first-child, th:nth-child(2), td:nth-child(2) { text-align: left; }
tr:last-child td { border-bottom: none; }
.tag { display: inline-flex; align-items: center; gap: 5px; }
.tag i { width: 8px; height: 8px; border-radius: 2px; background: var(--c); display: inline-block; }
.foot { font-size: calc(.7 * var(--u)); color: var(--pb-muted); text-align: right; margin-top: -6px; }
${THEME_STYLES}
`;

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */
class PredbatCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = null;
    this._hass = null;
    this._sig = "";
    this._showTable = false;
    this._chartWidth = 0;
    this._chartData = null;
    this._ro = null;
  }

  static getConfigElement() { return document.createElement(EDITOR_TAG); }
  static getStubConfig() { return { type: `custom:${CARD_TAG}` }; }

  setConfig(config) {
    this._config = normaliseConfig(config);
    this._sig = "";
    this._shell = "";
    if (this._hass) this._safeRender();
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    let sig = "";
    try { sig = this._signature(); } catch (e) { sig = String(Math.random()); }
    if (sig !== this._sig) { this._sig = sig; this._safeRender(); }
  }

  _safeRender() {
    try {
      this._render();
    } catch (err) {
      this._renderError(err);
    }
  }

  _renderError(err) {
    // Never let an exception escape into Home Assistant: show it inside the card instead.
    console.error("Predbat Card error", err);
    this._shell = "";
    const msg = esc((err && err.message) || String(err));
    const stack = esc(((err && err.stack) || "").split("\n").slice(0, 6).join("\n"));
    this.shadowRoot.innerHTML = `<style>${STYLES}</style><ha-card><div class="wrap">
      <div class="banner"><ha-icon icon="mdi:alert-circle"></ha-icon><span>Predbat Card v${CARD_VERSION}: ${msg}</span></div>
      <details class="warn"><summary>Details for a bug report</summary><pre style="white-space:pre-wrap;font-size:11px;margin:6px 0 0">${stack}
${esc(navigator.userAgent)}</pre></details>
      </div></ha-card>`;
  }

  getCardSize() { return 9; }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: "auto" }; }

  connectedCallback() {
    if (!this._ro && "ResizeObserver" in window) {
      this._ro = new ResizeObserver(() => {
        const el = this.shadowRoot.querySelector(".chart");
        const w = el ? Math.round(el.clientWidth) : 0;
        if (w && Math.abs(w - this._chartWidth) > 2) {
          this._chartWidth = w;
          // run outside the observer callback to avoid "ResizeObserver loop" warnings
          requestAnimationFrame(() => { try { this._drawCharts(true); } catch (e) { this._renderError(e); } });
        }
        // the timeline tick spacing depends on the card width too
        const hw = Math.round(this.clientWidth || 0);
        if (hw && Math.abs(hw - (this._hostW || 0)) > 24) {
          const first = !this._hostW;
          this._hostW = hw;
          if (!first || this._secHtml?.timeline) requestAnimationFrame(() => this._safeRender());
        }
      });
    }
    this._observe();
    clearInterval(this._tick);
    this._tick = setInterval(() => { this._sig = ""; if (this._hass) this.hass = this._hass; }, 60000);
  }

  disconnectedCallback() {
    if (this._ro) this._ro.disconnect();
    clearInterval(this._tick);
  }

  _observe() {
    if (!this._ro) return;
    this._ro.disconnect();
    const el = this.shadowRoot.querySelector(".chart");
    if (el) this._ro.observe(el);
  }

  _mode() {
    const m = String(this._config.theme_mode || "auto").toLowerCase();
    return ["light", "dark"].includes(m) ? m : "auto";
  }

  _style() {
    const s = String(this._config.style || "modern").toLowerCase();
    return STYLE_NAMES.includes(s) ? s : "modern";
  }

  _eid(key) {
    return (this._config.entities && this._config.entities[key]) || defaultEntities(this._config.prefix)[key];
  }
  _st(key) { return this._hass ? this._hass.states[this._eid(key)] : undefined; }

  _signature() {
    const parts = [];
    for (const k of ENTITY_KEYS) {
      const s = this._st(k);
      parts.push(s ? s.last_updated + "|" + s.state : "-");
    }
    parts.push(this._hass.locale?.language || this._hass.language || "");
    parts.push(this._hass.themes?.darkMode ? "d" : "l");
    parts.push("dq" + (this._dqVer || 0));
    return parts.join(";");
  }

  /* ---------- data ---------- */
  _plan() {
    const st = this._st("plan");
    let raw = st && st.attributes ? st.attributes.raw : null;
    if (typeof raw === "string") { try { raw = JSON.parse(raw); } catch (e) { raw = null; } }
    if (!raw || !Array.isArray(raw.rows)) return { raw: raw || null, rows: [] };
    const rows = [];
    for (const r of raw.rows) {
      const d = parseTime(r.time);
      if (!d) continue;
      rows.push({
        t: d.getTime(),
        state: r.state || "Demand",
        cat: categorise(r.state),
        target: num(r.state_target),
        override: r.state_override || "",
        imp: num(r.import_rate),
        exp: num(r.export_rate),
        soc: num(r.soc_percent),
        pv: num(r.pv_forecast),
        load: num(r.load_forecast),
        cost: num(r.cost_change),
        total: num(r.total_cost),
      });
    }
    rows.sort((a, b) => a.t - b.t);
    // slot length
    let slot = 30 * 60e3;
    if (rows.length > 1) {
      const diffs = [];
      for (let i = 1; i < Math.min(rows.length, 10); i++) diffs.push(rows[i].t - rows[i - 1].t);
      diffs.sort((a, b) => a - b);
      if (diffs[0] > 0) slot = diffs[0];
    }
    rows.forEach((r, i) => { r.end = rows[i + 1] ? Math.min(rows[i + 1].t, r.t + slot * 4) : r.t + slot; });
    return { raw, rows, slot };
  }

  _currency(raw) {
    let major = "£", minor = "p";
    const cs = raw && raw.currency_symbols;
    if (Array.isArray(cs)) { if (cs[0]) major = cs[0]; if (cs[1]) minor = cs[1]; }
    else if (cs && typeof cs === "object") { major = cs.major || cs[0] || major; minor = cs.minor || cs[1] || minor; }
    if (this._config.currency) major = this._config.currency;
    if (this._config.currency_minor) minor = this._config.currency_minor;
    return { major, minor };
  }

  _socMax(raw) {
    const o = num(this._config.battery_capacity);
    if (o) return o;
    const r = raw && num(raw.soc_max);
    if (r) return r;
    const inv = this._st("inverter_config");
    const a = inv && inv.attributes && num(inv.attributes.soc_max);
    if (a) return a;
    const best = this._st("soc_best");
    const b = best && best.attributes && num(best.attributes.soc_max);
    return b || null;
  }

  /* ---------- formatting ---------- */
  _timeFmt(opts) {
    // weekday names follow the card language when it is set explicitly
    const cl = this._config.language;
    const lang = cl && cl !== "auto" ? cl : (this._hass.locale?.language || this._hass.language || "en");
    const tf = this._hass.locale?.time_format;
    const o = { ...opts };
    if (tf === "24") o.hourCycle = "h23";
    else if (tf === "12") o.hour12 = true;
    try { return new Intl.DateTimeFormat(lang, o); } catch (e) { return new Intl.DateTimeFormat("en", o); }
  }
  _hm(t) { return this._timeFmt({ hour: "2-digit", minute: "2-digit" }).format(new Date(t)); }
  _h(t) { return this._timeFmt({ hour: "2-digit", minute: "2-digit" }).format(new Date(t)); }
  _dayWord(t) {
    const d = new Date(t), n = new Date();
    const dd = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const nn = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
    const diff = Math.round((dd - nn) / 86400e3);
    if (diff === 0) return this.t("today");
    if (diff === 1) return this.t("tomorrow");
    return this._timeFmt({ weekday: "short" }).format(d);
  }
  _money(pence, cur) {
    if (pence === null) return "–";
    const v = pence / 100;
    const sign = v < 0 ? "-" : "";
    return `${sign}${cur.major}${Math.abs(v).toFixed(2)}`;
  }
  _rate(p, cur) { return p === null ? "–" : `${p.toFixed(p >= 10 || p <= -10 ? 1 : 2)}${cur.minor}`; }
  _ago(d) {
    if (!d) return "";
    const m = Math.round((Date.now() - d.getTime()) / 60000);
    if (m < 1) return this.t("just_now");
    if (m < 90) return this.t("min_ago", { n: m });
    return this.t("h_ago", { n: Math.round(m / 60) });
  }

  _moreInfo(entityId) {
    if (!entityId) return;
    const ev = new Event("hass-more-info", { bubbles: true, composed: true });
    ev.detail = { entityId };
    this.dispatchEvent(ev);
  }

  /* ---------- render ---------- */
  _render() {
    const c = this._config;
    const hass = this._hass;
    if (!hass) return;
    this.t = makeT(pickLang(hass, c));
    const t = this.t;
    this._dqMaybeFetch();

    const plan = this._plan();
    const cur = this._currency(plan.raw);
    const socMax = this._socMax(plan.raw);
    // whole minutes, so unchanged sections produce identical markup and are not redrawn
    const now = Math.floor(Date.now() / 60000) * 60000;
    const horizon = now + Math.max(1, num(c.hours) || 24) * 3600e3;
    const rows = plan.rows.filter((r) => r.end > now && r.t < horizon);
    this._ctx = { plan, cur, socMax, now, horizon, rows };

    const status = this._st("status");
    let alerts = "";
    if (status && (status.attributes?.error === true || /error/i.test(status.state))) {
      alerts += `<div class="banner"><ha-icon icon="mdi:alert-circle"></ha-icon><span>${esc(t("error"))}${status.state ? ": " + esc(status.state) : ""}</span></div>`;
    }
    alerts += this._renderMissing(plan);
    alerts += this._renderDQNotice();

    const sections = [
      ["header", c.show_header !== false ? this._renderHeader(status) : ""],
      ["alerts", alerts],
      ["overview", c.show_overview !== false ? this._renderOverview() : ""],
      ["charts", this._renderCharts()],
      ["timeline", c.show_timeline !== false ? this._renderTimeline() : ""],
      ["actions", c.show_actions !== false ? this._renderActions() : ""],
      ["table", c.show_table !== false && rows.length ? this._renderTable() : ""],
    ];

    // Rebuild the whole card only when its frame changes (style, mode, text size).
    const shell = `${this._style()}|${this._mode()}|${this._scale()}`;
    if (shell !== this._shell || !this.shadowRoot.querySelector(".wrap")) {
      this._shell = shell;
      this._secHtml = {};
      this._chartSig = "";
      this.shadowRoot.innerHTML = `<style>${STYLES}</style><ha-card class="s-${esc(this._style())} m-${esc(this._mode())}" style="--pb-scale:${this._scale()}"><div class="cq"><div class="wrap">${
        sections.map(([k]) => `<div class="pb-sec" data-sec="${k}"></div>`).join("")}</div></div></ha-card>`;
    }
    // Then only touch the sections whose content actually changed.
    let chartsChanged = false;
    for (const [k, html] of sections) {
      if (this._secHtml[k] === html) continue;
      this._secHtml[k] = html;
      const el = this.shadowRoot.querySelector(`.pb-sec[data-sec="${k}"]`);
      if (!el) continue;
      el.innerHTML = html;
      this._wire(el);
      if (k === "charts") chartsChanged = true;
    }
    if (chartsChanged) this._observe();
    const ch = this.shadowRoot.querySelector(".chart");
    if (ch) { this._chartWidth = Math.round(ch.clientWidth) || this._chartWidth || 600; this._drawCharts(chartsChanged); }
  }

  /** One short notice listing Predbat entities that the enabled sections need but can't find. */
  _renderMissing(plan) {
    const c = this._config;
    const need = new Set();
    if (c.show_header !== false) need.add("status");
    if (c.show_overview !== false) ["soc_now", "cost_today"].forEach((k) => need.add(k));
    if (c.show_timeline !== false || c.show_actions !== false || c.show_table !== false) need.add("plan");
    if (c.show_chart !== false) need.add("soc_best");
    if (c.show_grid_chart !== false) ["export_energy", "import_energy"].forEach((k) => need.add(k));
    if (c.show_rates_chart !== false) need.add("rates");
    const missing = [...need].filter((k) => !this._st(k)).map((k) => this._eid(k));
    const t = this.t;
    let html = "";
    if (missing.length) {
      html += `<details class="warn missing"><summary>${esc(t("missing_n", { n: missing.length }))}</summary>
        <div class="muted" style="margin-top:4px">${missing.map((m) => `<code>${esc(m)}</code>`).join(" ")}</div>
        <div class="muted" style="margin-top:4px">${esc(t("missing_hint"))}</div></details>`;
    }
    const planSt = this._st("plan");
    if (planSt && !plan.raw && need.has("plan")) {
      html += `<div class="warn">${esc(t("no_raw", { e: this._eid("plan") }))}</div>`;
    }
    return html;
  }

  _renderHeader(status) {
    const t = this.t;
    const title = this._config.title || t("title");
    const txt = status ? status.state : "–";
    const cat = categoriseStatus(txt);
    const color = `var(--pb-${cat === "demand" ? "hold_charge" : cat})`;
    const mode = this._st("mode");
    const updated = status ? parseTime(status.attributes?.last_updated) || new Date(status.last_updated) : null;
    const ver = status?.attributes?.version;
    const subBits = [];
    if (mode && !BAD.test(mode.state)) subBits.push(`<span>${esc(mode.state)}</span>`);
    if (updated) subBits.push(esc(t("updated", { v: this._ago(updated) })));
    if (ver) subBits.push(esc(ver));
    const live = ["charge", "export", "freeze_charge", "freeze_export"].includes(cat);
    return `
      <div class="head">
        <div class="logo"><ha-icon icon="mdi:bat"></ha-icon></div>
        <div class="head-text">
          <div class="head-title">${esc(title)}</div>
          <div class="head-sub muted">${subBits.join(" · ")}</div>
        </div>
        ${this._renderDQChip()}
        <div class="pill clickable ${live ? "live" : ""}" style="--c:${color}" data-more="${esc(this._eid("status"))}" title="${esc(txt)}">
          <span class="dot"></span><span>${esc(txt)}</span>
        </div>
      </div>`;
  }

  _windowFromEntities(prefix) {
    const s = parseTime(this._st(`${prefix}_start`)?.state);
    const e = parseTime(this._st(`${prefix}_end`)?.state);
    const lim = num(this._st(`${prefix}_limit`)?.state);
    if (!s || !e || e.getTime() < Date.now()) return null;
    return { s: s.getTime(), e: e.getTime(), target: lim };
  }

  _windowFromRows(kind) {
    const rows = this._ctx.plan.rows.filter((r) => r.end > this._ctx.now);
    const match = kind === "charge" ? (r) => r.cat === "charge" : (r) => r.cat === "export";
    const i = rows.findIndex(match);
    if (i < 0) return null;
    let j = i;
    while (j + 1 < rows.length && match(rows[j + 1]) && rows[j + 1].t <= rows[j].end) j++;
    return { s: rows[i].t, e: rows[j].end, target: rows[j].target ?? rows[i].target };
  }

  _renderOverview() {
    const t = this.t;
    const { plan, cur, socMax, rows } = this._ctx;

    // Battery
    let socKwh = num(this._st("soc_now")?.state);
    if (socKwh === null && plan.raw) socKwh = num(plan.raw.soc);
    const pct = socKwh !== null && socMax ? Math.max(0, Math.min(100, (socKwh / socMax) * 100)) : null;
    const hoursLeft = num(this._st("hours_left")?.state);
    const ringColor = pct === null ? "var(--pb-muted)" : pct < 20 ? "var(--pb-error)" : pct < 40 ? "var(--pb-freeze_export)" : "var(--pb-accent)";
    const R = 21, C = 2 * Math.PI * R;
    const dash = pct === null ? 0 : (pct / 100) * C;
    let trend = "";
    if (rows.length > 1 && rows[0].soc !== null && rows[1].soc !== null) {
      trend = rows[1].soc > rows[0].soc ? "mdi:arrow-up" : rows[1].soc < rows[0].soc ? "mdi:arrow-down" : "mdi:arrow-right";
    }
    const battery = `
      <div class="tile battery clickable" data-more="${esc(this._eid("soc_now"))}">
        <svg class="ring" viewBox="0 0 52 52">
          <circle cx="26" cy="26" r="${R}" fill="none" stroke="var(--pb-line)" stroke-width="5"/>
          <circle cx="26" cy="26" r="${R}" fill="none" stroke="${ringColor}" stroke-width="5" stroke-linecap="round"
            stroke-dasharray="${dash.toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 26 26)"/>
          <text x="26" y="30.5" text-anchor="middle">${pct === null ? "–" : Math.round(pct)}</text>
        </svg>
        <div style="min-width:0">
          <div class="tile-label">${esc(t("battery"))}${trend ? `<ha-icon icon="${trend}"></ha-icon>` : ""}</div>
          <div class="tile-value" title="${socMax ? esc(socMax.toFixed(1) + " kWh") : ""}">${socKwh === null ? "–" : socKwh.toFixed(1)}<small>kWh</small></div>
          <div class="tile-sub">${hoursLeft !== null ? esc(t("hours_left", { n: hoursLeft.toFixed(1) })) : "&nbsp;"}</div>
        </div>
      </div>`;

    // Now
    const r0 = rows[0];
    const impNow = r0?.imp ?? num(this._st("rates")?.state);
    const expNow = r0?.exp ?? num(this._st("rates_export")?.state);
    const nowCat = r0 ? r0.cat : "demand";
    const nowLabel = r0 ? t(`st_${nowCat}`) + (r0.target !== null && nowCat !== "demand" ? ` ${t("target", { v: Math.round(r0.target) })}` : "") : "–";
    const nowTile = `
      <div class="tile" style="--c:var(--pb-${nowCat === "demand" ? "neutral" : nowCat})">
        <span class="accent-bar"></span>
        <div class="tile-label"><ha-icon icon="${STATE_ICON[nowCat]}"></ha-icon>${esc(t("now"))}${r0?.override ? ` · ${esc(t("manual"))}` : ""}</div>
        <div class="tile-value tv-md">${esc(nowLabel)}</div>
        <div class="tile-sub">↓ ${esc(this._rate(impNow, cur))} · ↑ ${esc(this._rate(expNow, cur))}</div>
      </div>`;

    // Cost
    const costToday = num(this._st("cost_today")?.state);
    const bestMetric = num(this._st("best_metric")?.state);
    const pred = this._todayForecast();
    const costSub = pred.best !== null
      ? t("forecast_today", { v: this._money(pred.best, cur) })
      : bestMetric !== null ? t("plan_total", { v: this._money(bestMetric, cur) }) : "";
    const costTile = `
      <div class="tile clickable" data-more="${esc(this._eid("cost_today"))}">
        <div class="tile-label"><ha-icon icon="mdi:cash"></ha-icon>${esc(t("cost_today"))}</div>
        <div class="tile-value">${esc(this._money(costToday, cur))}</div>
        <div class="tile-sub">${costSub ? esc(costSub) : "&nbsp;"}</div>
      </div>`;

    // Savings: predicted today (baseline vs Predbat plan), with yesterday's actual
    const sav = num(this._st("savings")?.state);
    let savTile;
    if (pred.saving !== null) {
      savTile = `
      <div class="tile clickable" data-more="${esc(this._eid("best_metric"))}">
        <div class="tile-label"><ha-icon icon="mdi:piggy-bank-outline"></ha-icon>${esc(t("saving_today"))}</div>
        <div class="tile-value ${pred.saving >= 0 ? "pos" : "neg"}">${esc(this._money(pred.saving, cur))}</div>
        <div class="tile-sub">${esc(t("predicted"))}${sav !== null ? " · " + esc(t("yesterday_v", { v: this._money(sav, cur) })) : ""}</div>
      </div>`;
    } else {
      savTile = `
      <div class="tile clickable" data-more="${esc(this._eid("savings"))}">
        <div class="tile-label"><ha-icon icon="mdi:piggy-bank-outline"></ha-icon>${esc(t("saved_yesterday"))}</div>
        <div class="tile-value ${sav !== null ? (sav >= 0 ? "pos" : "neg") : ""}">${esc(this._money(sav, cur))}</div>
        <div class="tile-sub">${esc(t("vs_baseline"))}</div>
      </div>`;
    }

    const winTile = (kind) => {
      const w = this._windowFromEntities(kind) || this._windowFromRows(kind);
      const label = kind === "charge" ? t("next_charge") : t("next_export");
      const icon = kind === "charge" ? "mdi:battery-arrow-up" : "mdi:battery-arrow-down";
      if (!w) {
        return `<div class="tile"><div class="tile-label"><ha-icon icon="${icon}"></ha-icon>${esc(label)}</div>
          <div class="tile-value tv-sm muted">${esc(t("none_planned"))}</div><div class="tile-sub">&nbsp;</div></div>`;
      }
      const active = w.s <= Date.now();
      return `<div class="tile" style="--c:var(--pb-${kind})">
          <span class="accent-bar"></span>
          <div class="tile-label"><ha-icon icon="${icon}"></ha-icon>${esc(label)}</div>
          <div class="tile-value tv-lg">${esc(this._hm(w.s))}–${esc(this._hm(w.e))}</div>
          <div class="tile-sub">${esc(active ? t("now") : this._dayWord(w.s))}${w.target !== null ? " · " + esc(t("target", { v: Math.round(w.target) })) : ""}</div>
        </div>`;
    };

    return `<div class="overview">${battery}${nowTile}${costTile}${savTile}${winTile("charge")}${winTile("export")}</div>`;
  }

  /** Predicted cost at the end of today for the Predbat plan and the baseline,
   *  read from the 5-minute `results` of best_metric and metric (pence). */
  _todayForecast() {
    const out = { best: null, base: null, saving: null };
    const mid = new Date(); mid.setHours(24, 0, 0, 0);
    const end = mid.getTime();
    const at = (key) => {
      const ser = seriesFrom(this._st(key)?.attributes?.results);
      if (!ser.length || ser[ser.length - 1][0] < end - 10 * 60e3) return null;
      let v = null;
      for (const p of ser) { if (p[0] <= end) v = p[1]; else break; }
      return v;
    };
    out.best = at("best_metric");
    out.base = at("base_metric");
    if (out.best !== null && out.base !== null) out.saving = out.base - out.best;
    return out;
  }

  /* ---------- load data quality ---------- */
  _dqEnabled() { return this._config.show_data_quality !== false; }

  /** Sensors to check: the ones set in the config (string, list or comma
   *  separated), otherwise every GivTCP load sensor found. */
  _dqSources() {
    const ents = this._config.entities || {};
    const list = (v) => (Array.isArray(v) ? v : typeof v === "string" ? v.split(",") : [])
      .map((x) => String(x).trim()).filter(Boolean);
    const ids = Object.keys(this._hass.states || {});
    let load = list(ents.load_today), power = list(ents.load_power), auto = false;
    if (!load.length) {
      load = ids.filter((e) => /^sensor\.givtcp\d*_[^.]+_load_energy_today_kwh$/i.test(e)).sort();
      auto = load.length > 0;
    }
    if (!power.length) power = ids.filter((e) => /^sensor\.givtcp\d*_[^.]+_load_power$/i.test(e)).sort();
    return { load, power, auto };
  }

  _dqMaybeFetch() {
    if (!this._dqEnabled() || !this._hass || typeof this._hass.callWS !== "function") return;
    const c = this._config;
    const days = Math.max(1, Math.min(14, Math.round(num(c.data_quality_days) || 7)));
    const minutes = Math.max(5, Math.min(240, num(c.data_quality_minutes) || 30));
    const src = this._dqSources();
    const key = [src.load.join(","), src.power.join(","), days, minutes].join("|");
    const fresh = this._dq && this._dq.key === key && Date.now() - this._dq.at < 30 * 60e3;
    if (fresh || this._dqBusy) return;
    const base = { key, days, load: src.load, power: src.power, auto: src.auto };
    if (!src.load.length) {
      this._dq = { ...base, at: Date.now(), nosource: true };
      this._dqVer = (this._dqVer || 0) + 1;
      return;
    }
    this._dqBusy = true;
    const end = Date.now();
    const d0 = new Date(end); d0.setHours(0, 0, 0, 0); d0.setDate(d0.getDate() - (days - 1));
    const start = d0.getTime();
    // Predbat wants load power in W; scale kW sensors using their unit
    const scaleOf = (id) => {
      const u = String(this._hass.states[id]?.attributes?.unit_of_measurement || "W").toLowerCase();
      return u === "kw" ? 1000 : u === "mw" ? 1e6 : 1;
    };
    Promise.resolve()
      .then(() => this._hass.callWS({
        type: "history/history_during_period",
        start_time: new Date(start).toISOString(),
        end_time: new Date(end).toISOString(),
        entity_ids: [...src.load, ...src.power],
        minimal_response: true,
        no_attributes: true,
        // same as Predbat's history request: real state changes only
        significant_changes_only: true,
        include_start_time_state: true,
      }))
      .then((res) => {
        const loads = src.load.map((id) => historySeries(res && res[id])).filter((x) => x.length);
        const powers = src.power.map((id) => {
          const k = scaleOf(id);
          return historySeries(res && res[id]).map(([tm, v]) => [tm, v === null ? null : v * k]);
        }).filter((x) => x.length);
        this._dq = loads.length
          ? { ...base, at: Date.now(), ...detectZeroLoad(loads, powers, { start, end, minutes }) }
          : { ...base, at: Date.now(), empty: true };
      })
      .catch((err) => {
        // try again in 5 minutes rather than 30
        this._dq = { ...base, at: Date.now() - 25 * 60e3, error: (err && (err.message || err.code)) || String(err) };
      })
      .finally(() => {
        this._dqBusy = false;
        this._dqVer = (this._dqVer || 0) + 1;
        this._sig = "";
        this._safeRender();
      });
  }

  _dqRecent() {
    const dq = this._dq;
    if (!dq || !dq.periods) return null;
    const since = Date.now() - 24 * 3600e3;
    const list = dq.periods.slice().sort((a, b) => b.s - a.s);
    return {
      list,
      day: list.filter((p) => p.e > since).length,
      filled: list.filter((p) => p.kind === "filled").length,
      unfilled: list.filter((p) => p.kind === "unfilled").length,
    };
  }

  _dur(ms) {
    const m = Math.round(ms / 60000);
    if (m < 60) return `${m} min`;
    const h = Math.floor(m / 60), r = m % 60;
    return r ? `${h} h ${r} min` : `${h} h`;
  }

  _renderDQChip() {
    if (!this._dqEnabled()) return "";
    const r = this._dqRecent();
    if (!r || !r.list.length) return "";
    const t = this.t;
    const cls = r.unfilled ? "bad" : "";
    const title = t("dq_summary", { n: r.list.length, d: this._dq.days });
    return `<button class="dq-chip ${cls}" data-action="dq" title="${esc(title)}" aria-label="${esc(title)}">
        <ha-icon icon="mdi:alert-outline"></ha-icon><span class="dq-chip-text">${esc(t("dq_chip"))}</span><b>${r.list.length}</b>
      </button>`;
  }

  _renderDQNotice() {
    if (!this._dqEnabled()) return "";
    const r = this._dqRecent();
    if (!r || !r.list.length) return "";
    const t = this.t;
    const bits = [];
    bits.push(t("dq_recent", { n: r.day }));
    if (r.filled) bits.push(r.unfilled ? t("dq_filled_n", { n: r.filled }) : t("dq_all_filled"));
    if (r.unfilled) bits.push(t("dq_unfilled_n", { n: r.unfilled }));
    const items = r.list.slice(0, 8).map((p) => {
      const k = p.kind === "unfilled" ? "unfilled" : "filled";
      const extra = k === "filled" && p.kwh > 0 ? ` · ≈${p.kwh.toFixed(2)} kWh` : "";
      const tag = r.filled && r.unfilled ? ` · ${t("dq_l_" + k)}` : "";
      return `<li><i style="--c:var(--pb-dq-${k})"></i><span>
          <b>${esc(this._dayWord(p.s))} ${esc(this._hm(p.s))}–${esc(this._hm(p.e))}</b> · ${esc(this._dur(p.e - p.s))}${esc(extra)}${esc(tag)}</span></li>`;
    }).join("");
    const hints = ["filled", "unfilled"].filter((k) => r[k])
      .map((k) => `<p class="dq-hint"><i style="--c:var(--pb-dq-${k})"></i>${esc(t("dq_hint_" + k))}</p>`).join("");
    const more = r.list.length > 8 ? `<div class="muted">${esc(t("dq_more", { n: r.list.length - 8 }))}</div>` : "";
    const canTab = this._enabledCharts().length > 1 && this._config.chart_layout !== "stacked";
    const view = canTab ? `<button class="toggle" data-tab="data">${esc(t("dq_view", { d: this._dq.days }))}</button>` : "";
    return `<details class="warn dq ${r.unfilled ? "bad" : ""}" ${this._dqOpen ? "open" : ""}>
        <summary><ha-icon icon="mdi:alert-outline"></ha-icon><span><b>${esc(t("dq_summary", { n: r.list.length, d: this._dq.days }))}</b>${bits.length ? " · " + esc(bits.join(" · ")) : ""}</span></summary>
        <ul class="dq-list">${items}</ul>${more}${hints}
        <div class="dq-foot">${view}<span class="muted">${esc(t("dq_note"))} ${esc(t("dq_checked", { e: this._dq.load.join(" + ") }))}</span></div>
      </details>`;
  }

  /* 7-day heatmap of load data quality */
  _chartDQ(W) {
    const t = this.t;
    const dq = this._dq;
    if (typeof this._hass.callWS !== "function") return { empty: t("dq_unsupported") };
    if (!dq) return { empty: t("dq_loading") };
    if (dq.error) return { empty: t("dq_error", { v: dq.error }) };
    if (dq.nosource) return { empty: t("dq_no_source") };
    if (dq.empty) return { empty: t("dq_no_history", { e: dq.load.join(", ") }) };
    const S = this._scale();
    const padL = Math.round(36 * S), padR = 4, padT = 4;
    const rowH = Math.round(15 * S), gap = 3;
    const days = dq.days;
    const iw = W - padL - padR;
    const cw = iw / 48;
    const H = padT + days * (rowH + gap) + Math.round(18 * S);
    const d0 = new Date(dq.start);
    const dayIdx = (tm) => {
      const d = new Date(tm);
      const a = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
      const b = Date.UTC(d0.getFullYear(), d0.getMonth(), d0.getDate());
      return Math.round((a - b) / 86400e3);
    };
    const rowY = (di) => padT + (days - 1 - di) * (rowH + gap); // newest day on top
    const fills = { "-1": "none", 0: "var(--pb-dq-ok)", 1: "var(--pb-dq-filled)", 2: "var(--pb-dq-unfilled)" };
    const parts = [];
    let good = 0, total = 0;
    const cellAt = {};
    dq.cells.forEach((v, k) => {
      const tm = dq.start + k * dq.slot;
      if (tm > Date.now()) return;
      const d = new Date(tm);
      const di = dayIdx(tm);
      if (di < 0 || di >= days) return;
      const col = d.getHours() * 2 + (d.getMinutes() >= 30 ? 1 : 0);
      const x = padL + col * cw, y = rowY(di);
      cellAt[di + ":" + col] = { tm, v };
      if (v >= 0) { total++; if (v === 0) good++; }
      if (v === -1) {
        parts.push(`<rect x="${(x + 0.5).toFixed(1)}" y="${y + 0.5}" width="${Math.max(1, cw - 1.5).toFixed(1)}" height="${rowH - 1}" rx="2" fill="none" stroke="var(--pb-line)"/>`);
      } else {
        parts.push(`<rect class="dq-cell" x="${(x + 0.5).toFixed(1)}" y="${y}" width="${Math.max(1, cw - 1).toFixed(1)}" height="${rowH}" rx="2" fill="${fills[v]}"/>`);
      }
    });
    for (let di = 0; di < days; di++) {
      const tm = dq.start + di * 86400e3 + 12 * 3600e3;
      const label = di === dayIdx(Date.now()) ? t("today") : this._timeFmt({ weekday: "short" }).format(new Date(tm));
      parts.push(`<text class="axis" x="${padL - 6}" y="${(rowY(di) + rowH / 2 + 4).toFixed(1)}" text-anchor="end">${esc(label)}</text>`);
    }
    const yAx = padT + days * (rowH + gap) + Math.round(12 * S);
    for (const hr of [0, 6, 12, 18, 24]) {
      const x = padL + hr * 2 * cw;
      const anchor = hr === 0 ? "start" : hr === 24 ? "end" : "middle";
      parts.push(`<text class="axis" x="${x.toFixed(1)}" y="${yAx}" text-anchor="${anchor}">${String(hr).padStart(2, "0")}:00</text>`);
    }
    parts.push(`<rect class="dq-hl" x="0" y="0" width="0" height="0" rx="3" fill="none" stroke="var(--primary-text-color)" stroke-width="1.5" opacity="0"/>`);
    const pct = total ? Math.round((good / total) * 1000) / 10 : 100;
    const legend = [
      `<span><b>${esc(t("dq_good", { v: pct, d: days }))}</b></span>`,
      `<span><i style="--c:var(--pb-dq-ok)"></i>${esc(t("dq_l_ok"))}</span>`,
      `<span><i style="--c:var(--pb-dq-filled)"></i>${esc(t("dq_l_filled"))}</span>`,
      `<span><i style="--c:var(--pb-dq-unfilled)"></i>${esc(t("dq_l_unfilled"))}</span>`,
      `<span class="muted">${esc(t("dq_checked", { e: dq.load.join(" + ") }))}</span>`,
    ].join("");
    const wire = (chart) => {
      const svg = chart.querySelector("svg");
      const tip = chart.querySelector(".tip");
      const hl = svg && svg.querySelector(".dq-hl");
      if (!svg) return;
      let timer = null;
      const hide = () => { tip.style.display = "none"; if (hl) hl.setAttribute("opacity", "0"); };
      const show = (ev) => {
        const rect = svg.getBoundingClientRect();
        const x = ev.clientX - rect.left, y = ev.clientY - rect.top;
        const col = Math.floor((x - padL) / cw);
        const di = days - 1 - Math.floor((y - padT) / (rowH + gap));
        const cell = cellAt[di + ":" + col];
        if (!cell || col < 0 || col > 47) { hide(); return; }
        const p = (dq.periods || []).find((q) => q.s < cell.tm + dq.slot && q.e > cell.tm);
        const status = cell.v === -1 ? t("dq_l_nodata") : cell.v === 2 ? t("dq_l_unfilled") : cell.v === 1 ? t("dq_l_filled") : t("dq_l_ok");
        const lines = [
          `<div><b>${esc(this._dayWord(cell.tm))} ${esc(this._hm(cell.tm))}–${esc(this._hm(cell.tm + dq.slot))}</b></div>`,
          `<div class="row"><span class="tag"><i style="--c:${cell.v >= 0 ? fills[cell.v] : "var(--pb-line)"}"></i>${esc(status)}</span></div>`,
        ];
        if (p) lines.push(`<div class="row muted"><span>${esc(this._hm(p.s))}–${esc(this._hm(p.e))} · ${esc(this._dur(p.e - p.s))}</span></div>`);
        tip.innerHTML = lines.join("");
        tip.style.display = "block";
        const cx = padL + col * cw;
        if (hl) {
          hl.setAttribute("x", cx); hl.setAttribute("y", rowY(di) - 1);
          hl.setAttribute("width", Math.max(2, cw)); hl.setAttribute("height", rowH + 2); hl.setAttribute("opacity", ".7");
        }
        const tw = tip.offsetWidth;
        let left = cx + cw + 8;
        if (left + tw > rect.width) left = cx - tw - 8;
        tip.style.left = Math.max(0, left) + "px";
        tip.style.top = Math.max(0, rowY(di) - 8) + "px";
      };
      svg.addEventListener("pointermove", (ev) => { if (ev.pointerType === "mouse") show(ev); else { show(ev); clearTimeout(timer); timer = setTimeout(hide, 5000); } });
      svg.addEventListener("pointerdown", (ev) => { show(ev); if (ev.pointerType !== "mouse") { clearTimeout(timer); timer = setTimeout(hide, 5000); } });
      svg.addEventListener("pointerleave", (ev) => { if (ev.pointerType === "mouse") hide(); });
    };
    return { H, svg: parts.join(""), legend, wire };
  }

  /* ---------- charts ---------- */
  _scale() {
    const s = num(this._config.font_scale);
    return s ? Math.max(0.8, Math.min(1.6, s)) : 1;
  }

  _enabledCharts() {
    const c = this._config;
    const out = [];
    if (c.show_chart !== false) out.push("battery");
    if (c.show_grid_chart !== false) out.push("grid");
    if (c.show_rates_chart !== false) out.push("rates");
    if (this._dqEnabled()) out.push("data");
    return out;
  }

  _chartTitle(k) {
    return { battery: this.t("forecast"), grid: this.t("grid_chart"), rates: this.t("rates_chart"), data: this.t("dq_title") }[k];
  }

  _chartBox(k) {
    return `<div class="chart" data-chart="${k}"><div class="tip"></div><div class="svg-host"></div></div>
      <div class="legend" data-legend="${k}"></div>`;
  }

  _renderCharts() {
    const keys = this._enabledCharts();
    if (!keys.length) return "";
    if (this._config.chart_layout === "stacked") {
      return keys.map((k) => `<div class="section">
          <div class="section-head"><div class="section-title">${esc(this._chartTitle(k))}</div></div>
          ${this._chartBox(k)}</div>`).join("");
    }
    if (!this._tab) { try { this._tab = localStorage.getItem("predbat-card-tab") || ""; } catch (e) { /* ignore */ } }
    if (!keys.includes(this._tab)) this._tab = keys[0];
    const tabs = keys.length > 1
      ? `<div class="tabs" role="tablist">${keys.map((k) =>
          `<button role="tab" data-tab="${k}" class="${k === this._tab ? "on" : ""}" aria-selected="${k === this._tab}">${esc(this.t("tab_" + k))}</button>`).join("")}</div>`
      : "";
    return `<div class="section">
        <div class="section-head"><div class="section-title">${esc(this._chartTitle(this._tab))}</div>${tabs}</div>
        ${this._chartBox(this._tab)}
      </div>`;
  }

  _drawCharts(force) {
    if (!this._ctx) return;
    const keys = ["soc_best", "soc_base", "rates", "rates_export", "export_energy", "import_energy", "plan"];
    const sig = keys.map((k) => this._st(k)?.last_updated || "-").join("|") +
      `|${this._chartWidth}|${Math.floor(Date.now() / 60000)}|${this._tab}|${this._scale()}|dq${this._dqVer || 0}`;
    if (!force && sig === this._chartSig) return;
    this._chartSig = sig;
    this.shadowRoot.querySelectorAll(".chart[data-chart]").forEach((el) => {
      const key = el.getAttribute("data-chart");
      const W = Math.max(220, Math.round(el.clientWidth) || this._chartWidth || 600);
      const host = el.querySelector(".svg-host");
      const legendEl = this.shadowRoot.querySelector(`.legend[data-legend="${key}"]`);
      const fn = { battery: this._chartBattery, grid: this._chartGrid, rates: this._chartRates, data: this._chartDQ }[key];
      if (!fn) return;
      const res = fn.call(this, W);
      if (res.empty) {
        host.innerHTML = `<div class="empty">${esc(res.empty)}</div>`;
        if (legendEl) legendEl.innerHTML = "";
        return;
      }
      host.innerHTML = `<svg width="${W}" height="${res.H}" viewBox="0 0 ${W} ${res.H}">${res.svg}</svg>`;
      if (legendEl) legendEl.innerHTML = res.legend || "";
      if (res.wire) res.wire(el); else this._wireHover(el, res.hover);
    });
  }

  _frame(W, H, opts = {}) {
    const S = this._scale();
    const padL = Math.round((opts.padL ?? 34) * S);
    const padR = Math.round((opts.padR ?? 10) * S);
    const padT = 8, padB = Math.round(22 * S);
    const { now, horizon } = this._ctx;
    const iw = W - padL - padR, ih = H - padT - padB;
    const X = (tm) => padL + ((Math.max(now, Math.min(horizon, tm)) - now) / (horizon - now)) * iw;
    return { S, padL, padR, padT, padB, iw, ih, X, now, horizon, W, H };
  }

  _xAxis(f, parts) {
    const { now, horizon, X, padL, padT, iw, ih, H } = f;
    const hours = (horizon - now) / 3600e3;
    const step = tickStep(hours, iw, 46 * f.S);
    const first = new Date(now); first.setMinutes(0, 0, 0); first.setHours(first.getHours() + 1);
    for (let tm = first.getTime(); tm < horizon; tm += 3600e3) {
      const d = new Date(tm);
      const isMid = d.getHours() === 0;
      if (!isMid && d.getHours() % step !== 0) continue;
      const x = X(tm);
      if (x < padL + 16 * f.S || x > padL + iw - 16 * f.S) continue;
      parts.push(`<line class="grid" x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${padT}" y2="${padT + ih}" ${isMid ? "" : 'stroke-dasharray="2 4"'}/>`);
      const label = isMid ? this._timeFmt({ weekday: "short" }).format(d) : this._h(tm);
      parts.push(`<text class="axis" x="${x.toFixed(1)}" y="${H - 6}" text-anchor="middle" ${isMid ? 'style="font-weight:600"' : ""}>${esc(label)}</text>`);
    }
  }

  _planBands(f, parts, opacity = 0.16) {
    for (const r of this._ctx.rows) {
      if (r.cat === "demand") continue;
      const x1 = f.X(r.t), x2 = f.X(r.end);
      if (x2 - x1 < 0.5) continue;
      const col = `var(--pb-${r.cat})`;
      parts.push(`<rect class="band" x="${x1.toFixed(1)}" y="${f.padT}" width="${(x2 - x1).toFixed(1)}" height="${f.ih}" fill="${col}" opacity="${opacity}"/>`);
      parts.push(`<rect x="${x1.toFixed(1)}" y="${f.padT + f.ih - 3}" width="${(x2 - x1).toFixed(1)}" height="3" fill="${col}" opacity=".9"/>`);
    }
  }

  _hoverParts(f, color = "var(--pb-accent)") {
    return `<line class="guide" x1="0" x2="0" y1="${f.padT}" y2="${f.padT + f.ih}" stroke="var(--primary-text-color)" stroke-width="1" opacity="0"/>
      <circle class="gdot" r="4" fill="${color}" stroke="var(--card-background-color,#fff)" stroke-width="2" opacity="0"/>
      <rect class="hit" x="${f.padL}" y="${f.padT}" width="${f.iw}" height="${f.ih}" fill="transparent"/>`;
  }

  _windowSeries(series) {
    const { now, horizon } = this._ctx;
    const out = [];
    for (let i = 0; i < series.length; i++) {
      const p = series[i], nxt = series[i + 1];
      if (p[0] > horizon) break;
      if (nxt && nxt[0] <= now) continue;
      out.push(p);
    }
    return out;
  }

  _stepPath(f, series, Y) {
    let d = "";
    series.forEach((p, i) => {
      const x = f.X(Math.max(p[0], f.now)), y = Y(p[1]);
      d += i === 0 ? `M${x.toFixed(1)},${y.toFixed(1)}` : `H${x.toFixed(1)}V${y.toFixed(1)}`;
    });
    if (d) d += `H${(f.padL + f.iw).toFixed(1)}`;
    return d;
  }

  _rowAt(tm) { return this._ctx.rows.find((r) => r.t <= tm && r.end > tm) || null; }

  _tipHead(tm) { return `<div><b>${esc(this._dayWord(tm))} ${esc(this._hm(tm))}</b></div>`; }

  _tipState(row) {
    if (!row) return "";
    const t = this.t;
    return `<div class="row"><span class="tag"><i style="--c:var(--pb-${row.cat === "demand" ? "neutral" : row.cat})"></i>${esc(t("st_" + row.cat))}</span><span>${row.target !== null && row.cat !== "demand" ? Math.round(row.target) + "%" : ""}</span></div>`;
  }

  /* Battery SoC forecast */
  _chartBattery(W) {
    const t = this.t;
    const c = this._config;
    const { socMax, now, horizon, cur } = this._ctx;
    const showRates = c.show_rates !== false;
    const H = Math.round(190 + (this._scale() - 1) * 50);
    const f = this._frame(W, H, { padL: 34, padR: showRates ? 40 : 10 });
    const { X, padL, padT, iw, ih } = f;

    const inWin = (s) => s.filter((p) => p[0] >= now - 10 * 60e3 && p[0] <= horizon);
    const best = inWin(seriesFrom(this._st("soc_best")?.attributes?.results));
    const base = c.show_base !== false ? inWin(seriesFrom(this._st("soc_base")?.attributes?.results)) : [];
    const rates = showRates ? this._windowSeries(seriesFrom(this._st("rates")?.attributes?.results)) : [];
    if (!best.length) return { empty: t("no_forecast", { e: this._eid("soc_best") }) };

    const maxK = socMax || Math.max(...best.map((p) => p[1]), ...base.map((p) => p[1]), 1);
    const toPct = (k) => Math.max(0, Math.min(100, (k / maxK) * 100));
    const Y = (p) => padT + (1 - p / 100) * ih;
    let rMin = 0, rMax = 1;
    if (rates.length) {
      rMin = Math.min(0, ...rates.map((p) => p[1]));
      rMax = Math.max(...rates.map((p) => p[1])) * 1.1 || 1;
    }
    const YR = (r) => padT + (1 - (r - rMin) / (rMax - rMin)) * ih;

    const parts = [];
    this._planBands(f, parts);
    for (const g of [0, 25, 50, 75, 100]) {
      parts.push(`<line class="grid" x1="${padL}" x2="${padL + iw}" y1="${Y(g).toFixed(1)}" y2="${Y(g).toFixed(1)}" ${g === 0 || g === 100 ? "" : 'stroke-dasharray="2 4"'}/>`);
      if (g % 50 === 0) parts.push(`<text class="axis" x="${padL - 6}" y="${(Y(g) + 4).toFixed(1)}" text-anchor="end">${g}%</text>`);
    }
    const reserve = num(this._ctx.plan.raw?.reserve);
    if (reserve && maxK) {
      const yr = Y(toPct(reserve));
      parts.push(`<line x1="${padL}" x2="${padL + iw}" y1="${yr.toFixed(1)}" y2="${yr.toFixed(1)}" stroke="var(--pb-error)" stroke-width="1" stroke-dasharray="4 3" opacity=".6"/>`);
      parts.push(`<text class="axis" x="${padL + 4}" y="${(yr - 4).toFixed(1)}" style="fill:var(--pb-error);opacity:.8">${esc(t("reserve"))}</text>`);
    }
    this._xAxis(f, parts);
    if (rates.length) {
      parts.push(`<path d="${this._stepPath(f, rates, YR)}" fill="none" stroke="var(--pb-rate)" stroke-width="1.4" opacity=".75" class="l-rate"/>`);
      for (const r of [rMax / 1.1, (rMax / 1.1 + rMin) / 2, rMin]) {
        parts.push(`<text class="axis" x="${padL + iw + 5}" y="${(YR(r) + 4).toFixed(1)}" style="fill:var(--pb-rate)">${esc(Math.round(r) + cur.minor)}</text>`);
      }
    }
    if (base.length > 1) {
      const d = base.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(toPct(p[1])).toFixed(1)}`).join("");
      parts.push(`<path d="${d}" fill="none" stroke="var(--pb-muted)" stroke-width="1.4" stroke-dasharray="5 4" opacity=".8" class="l-base"/>`);
    }
    const line = best.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(toPct(p[1])).toFixed(1)}`).join("");
    const area = `${line}L${X(best[best.length - 1][0]).toFixed(1)},${Y(0)}L${X(best[0][0]).toFixed(1)},${Y(0)}Z`;
    parts.push(`<defs><linearGradient id="pbg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="var(--pb-accent)" stop-opacity=".35"/>
        <stop offset="1" stop-color="var(--pb-accent)" stop-opacity="0"/></linearGradient></defs>`);
    parts.push(`<path d="${area}" fill="url(#pbg)" class="l-area"/>`);
    parts.push(`<path d="${line}" fill="none" stroke="var(--pb-accent)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" class="l-best"/>`);
    let minP = best[0];
    for (const p of best) if (p[1] < minP[1]) minP = p;
    parts.push(`<circle cx="${X(minP[0]).toFixed(1)}" cy="${Y(toPct(minP[1])).toFixed(1)}" r="3" fill="var(--card-background-color,#fff)" stroke="var(--pb-accent)" stroke-width="1.6"/>`);
    parts.push(`<circle cx="${X(best[0][0]).toFixed(1)}" cy="${Y(toPct(best[0][1])).toFixed(1)}" r="4" fill="var(--pb-accent)"/>`);
    parts.push(this._hoverParts(f));

    const legend = [
      `<span><i class="line" style="--c:var(--pb-accent)"></i>${esc(t("best"))}</span>`,
      base.length ? `<span><i class="dash" style="--c:var(--pb-muted)"></i>${esc(t("base"))}</span>` : "",
      rates.length ? `<span><i class="line" style="--c:var(--pb-rate)"></i>${esc(t("rate"))}</span>` : "",
      `<span><i style="--c:color-mix(in srgb, var(--pb-charge) 45%, transparent)"></i>${esc(t("st_charge"))}</span>`,
      `<span><i style="--c:color-mix(in srgb, var(--pb-export) 45%, transparent)"></i>${esc(t("st_export"))}</span>`,
    ].join("");

    const hover = {
      f,
      pick: (tm) => {
        const b = nearest(best, tm);
        if (!b) return null;
        const bs = nearest(base, b[0]);
        const rate = stepAt(rates, b[0]);
        const lines = [
          this._tipHead(b[0]),
          `<div class="row"><span>${esc(t("best"))}</span><b>${Math.round(toPct(b[1]))}% · ${b[1].toFixed(1)} kWh</b></div>`,
        ];
        if (bs) lines.push(`<div class="row muted"><span>${esc(t("base"))}</span><span>${Math.round(toPct(bs[1]))}%</span></div>`);
        if (rate !== null) lines.push(`<div class="row"><span>${esc(t("import"))}</span><span>${esc(this._rate(rate, cur))}</span></div>`);
        lines.push(this._tipState(this._rowAt(b[0])));
        return { x: X(b[0]), y: Y(toPct(b[1])), html: lines.join(""), color: "var(--pb-accent)" };
      },
    };
    return { H, svg: parts.join(""), legend, hover };
  }

  /* Grid import / export energy per slot */
  _chartGrid(W) {
    const t = this.t;
    const { now, horizon, rows, cur } = this._ctx;
    const exp = seriesFrom(this._st("export_energy")?.attributes?.results);
    const imp = seriesFrom(this._st("import_energy")?.attributes?.results);
    if (!exp.length && !imp.length) return { empty: t("no_forecast", { e: this._eid("export_energy") }) };
    const H = Math.round(170 + (this._scale() - 1) * 40);
    const f = this._frame(W, H, { padL: 40, padR: 10 });
    const { X, padL, padT, iw, ih } = f;

    // slots: plan slots if present, otherwise 30-minute steps
    let slots = rows.map((r) => [Math.max(r.t, now), Math.min(r.end, horizon), r]).filter((s) => s[1] > s[0]);
    if (!slots.length) {
      const step = 30 * 60e3;
      for (let s = Math.floor(now / step) * step; s < horizon; s += step) slots.push([Math.max(s, now), Math.min(s + step, horizon), null]);
    }
    const at = (ser, tm) => {
      if (!ser.length) return 0;
      if (tm <= ser[0][0]) return ser[0][1];
      return stepAt(ser, tm) ?? 0;
    };
    const data = slots.map(([s, e, r]) => ({
      s, e, r,
      exp: Math.max(0, at(exp, e) - at(exp, s)),
      imp: Math.max(0, at(imp, e) - at(imp, s)),
    }));
    const maxV = Math.max(0.1, ...data.map((d) => Math.max(d.exp, d.imp))) * 1.1;
    const mid = padT + ih / 2;
    const k = (ih / 2) / maxV;
    const parts = [];
    parts.push(`<line class="grid" x1="${padL}" x2="${padL + iw}" y1="${padT}" y2="${padT}"/>`);
    parts.push(`<line class="grid" x1="${padL}" x2="${padL + iw}" y1="${padT + ih}" y2="${padT + ih}"/>`);
    this._xAxis(f, parts);
    const lab = (v) => (v >= 10 ? v.toFixed(0) : v.toFixed(1));
    parts.push(`<text class="axis" x="${padL - 6}" y="${padT + 10}" text-anchor="end" style="fill:var(--pb-export)">↑${lab(maxV / 1.1)}</text>`);
    parts.push(`<text class="axis" x="${padL - 6}" y="${(mid + 4).toFixed(1)}" text-anchor="end">kWh</text>`);
    parts.push(`<text class="axis" x="${padL - 6}" y="${padT + ih - 2}" text-anchor="end" style="fill:var(--pb-import)">↓${lab(maxV / 1.1)}</text>`);
    let te = 0, ti = 0;
    for (const d of data) {
      te += d.exp; ti += d.imp;
      const x1 = X(d.s) + 0.5, x2 = X(d.e) - 0.5;
      const w = Math.max(1, x2 - x1);
      if (d.exp > 0.005) parts.push(`<rect class="bar-exp" x="${x1.toFixed(1)}" y="${(mid - d.exp * k).toFixed(1)}" width="${w.toFixed(1)}" height="${(d.exp * k).toFixed(1)}" rx="1.5" fill="var(--pb-export)"/>`);
      if (d.imp > 0.005) parts.push(`<rect class="bar-imp" x="${x1.toFixed(1)}" y="${mid.toFixed(1)}" width="${w.toFixed(1)}" height="${(d.imp * k).toFixed(1)}" rx="1.5" fill="var(--pb-import)"/>`);
    }
    parts.push(`<line x1="${padL}" x2="${padL + iw}" y1="${mid.toFixed(1)}" y2="${mid.toFixed(1)}" stroke="var(--pb-muted)" stroke-width="1" opacity=".6"/>`);
    parts.push(this._hoverParts(f));
    const legend = [
      `<span><i style="--c:var(--pb-export)"></i>${esc(t("export"))} <b>${te.toFixed(1)} kWh</b></span>`,
      `<span><i style="--c:var(--pb-import)"></i>${esc(t("import"))} <b>${ti.toFixed(1)} kWh</b></span>`,
    ].join("");
    const hover = {
      f,
      pick: (tm) => {
        const d = data.find((x) => x.s <= tm && x.e > tm) || data[data.length - 1];
        if (!d) return null;
        const lines = [
          `<div><b>${esc(this._dayWord(d.s))} ${esc(this._hm(d.s))}–${esc(this._hm(d.e))}</b></div>`,
          `<div class="row"><span>${esc(t("export"))}</span><b>${d.exp.toFixed(2)} kWh</b></div>`,
          `<div class="row"><span>${esc(t("import"))}</span><b>${d.imp.toFixed(2)} kWh</b></div>`,
        ];
        if (d.r) {
          lines.push(`<div class="row muted"><span>${esc(t("rate"))}</span><span>${esc(this._rate(d.r.imp, cur))}</span></div>`);
          lines.push(`<div class="row muted"><span>${esc(t("export_rate"))}</span><span>${esc(this._rate(d.r.exp, cur))}</span></div>`);
          lines.push(this._tipState(d.r));
        }
        return { x: (X(d.s) + X(d.e)) / 2, y: null, html: lines.join("") };
      },
    };
    return { H, svg: parts.join(""), legend, hover };
  }

  /* Import / export rates */
  _chartRates(W) {
    const t = this.t;
    const { cur } = this._ctx;
    const imp = this._windowSeries(seriesFrom(this._st("rates")?.attributes?.results));
    const exp = this._windowSeries(seriesFrom(this._st("rates_export")?.attributes?.results));
    if (!imp.length && !exp.length) return { empty: t("no_forecast", { e: this._eid("rates") }) };
    const H = Math.round(170 + (this._scale() - 1) * 40);
    const f = this._frame(W, H, { padL: 40, padR: 10 });
    const { padL, padT, iw, ih } = f;
    const all = [...imp, ...exp].map((p) => p[1]);
    const rMin = Math.min(0, ...all);
    const rMax = Math.max(1, ...all) * 1.12;
    const Y = (r) => padT + (1 - (r - rMin) / (rMax - rMin)) * ih;
    const parts = [];
    this._planBands(f, parts, 0.1);
    const ticks = 4;
    for (let i = 0; i <= ticks; i++) {
      const v = rMin + ((rMax / 1.12 - rMin) * i) / ticks;
      parts.push(`<line class="grid" x1="${padL}" x2="${padL + iw}" y1="${Y(v).toFixed(1)}" y2="${Y(v).toFixed(1)}" ${i === 0 ? "" : 'stroke-dasharray="2 4"'}/>`);
      parts.push(`<text class="axis" x="${padL - 6}" y="${(Y(v) + 4).toFixed(1)}" text-anchor="end">${esc(Math.round(v) + cur.minor)}</text>`);
    }
    if (rMin < 0) parts.push(`<line x1="${padL}" x2="${padL + iw}" y1="${Y(0).toFixed(1)}" y2="${Y(0).toFixed(1)}" stroke="var(--pb-muted)" stroke-width="1"/>`);
    this._xAxis(f, parts);
    if (imp.length) {
      const d = this._stepPath(f, imp, Y);
      parts.push(`<path d="${d}V${Y(rMin).toFixed(1)}H${f.X(Math.max(imp[0][0], f.now)).toFixed(1)}Z" fill="var(--pb-rate)" opacity=".1"/>`);
      parts.push(`<path d="${d}" fill="none" stroke="var(--pb-rate)" stroke-width="2" class="l-rate"/>`);
    }
    if (exp.length) parts.push(`<path d="${this._stepPath(f, exp, Y)}" fill="none" stroke="var(--pb-export)" stroke-width="2" class="l-exp"/>`);
    parts.push(this._hoverParts(f, "var(--pb-rate)"));
    const legend = [
      imp.length ? `<span><i class="line" style="--c:var(--pb-rate)"></i>${esc(t("rate"))}</span>` : "",
      exp.length ? `<span><i class="line" style="--c:var(--pb-export)"></i>${esc(t("export_rate"))}</span>` : "",
      `<span><i style="--c:color-mix(in srgb, var(--pb-charge) 45%, transparent)"></i>${esc(t("st_charge"))}</span>`,
      `<span><i style="--c:color-mix(in srgb, var(--pb-export) 45%, transparent)"></i>${esc(t("st_export"))}</span>`,
    ].join("");
    const hover = {
      f,
      pick: (tm) => {
        const ri = stepAt(imp, tm), re = stepAt(exp, tm);
        const lines = [this._tipHead(tm)];
        if (ri !== null) lines.push(`<div class="row"><span>${esc(t("rate"))}</span><b>${esc(this._rate(ri, cur))}</b></div>`);
        if (re !== null) lines.push(`<div class="row"><span>${esc(t("export_rate"))}</span><b>${esc(this._rate(re, cur))}</b></div>`);
        lines.push(this._tipState(this._rowAt(tm)));
        return { x: f.X(tm), y: ri !== null ? Y(ri) : null, html: lines.join(""), color: "var(--pb-rate)" };
      },
    };
    return { H, svg: parts.join(""), legend, hover };
  }

  _wireHover(chart, h) {
    const svg = chart.querySelector("svg");
    if (!svg || !h) return;
    const tip = chart.querySelector(".tip");
    const guide = svg.querySelector(".guide");
    const gdot = svg.querySelector(".gdot");
    const f = h.f;
    const hide = () => {
      tip.style.display = "none";
      guide.setAttribute("opacity", "0");
      gdot.setAttribute("opacity", "0");
    };
    const move = (ev) => {
      const rect = svg.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      if (x < f.padL || x > f.padL + f.iw) { hide(); return; }
      const tm = f.now + ((x - f.padL) / f.iw) * (f.horizon - f.now);
      const r = h.pick(tm);
      if (!r) { hide(); return; }
      guide.setAttribute("x1", r.x); guide.setAttribute("x2", r.x); guide.setAttribute("opacity", ".25");
      if (r.y !== null && r.y !== undefined) {
        gdot.setAttribute("cx", r.x); gdot.setAttribute("cy", r.y); gdot.setAttribute("opacity", "1");
        if (r.color) gdot.setAttribute("fill", r.color);
      } else gdot.setAttribute("opacity", "0");
      tip.innerHTML = r.html;
      tip.style.display = "block";
      const tw = tip.offsetWidth;
      let left = r.x + 12;
      if (left + tw > rect.width) left = r.x - tw - 12;
      tip.style.left = Math.max(0, left) + "px";
    };
    // Mouse: follow the pointer, hide on leave.
    // Touch: a tap or drag shows the tooltip and it stays until tapped again or 5 s pass,
    // because touch fires pointerleave straight after the finger lifts.
    let timer = null;
    const touchShow = (ev) => {
      move(ev);
      clearTimeout(timer);
      timer = setTimeout(hide, 5000);
    };
    svg.addEventListener("pointermove", (ev) => (ev.pointerType === "mouse" ? move(ev) : touchShow(ev)));
    svg.addEventListener("pointerdown", (ev) => (ev.pointerType === "mouse" ? move(ev) : touchShow(ev)));
    svg.addEventListener("pointerleave", (ev) => { if (ev.pointerType === "mouse") hide(); });
  }

  _renderTimeline() {
    const t = this.t;
    const { rows, now, horizon } = this._ctx;
    if (!rows.length) {
      return `<div class="section"><div class="section-head"><div class="section-title">${esc(t("plan"))}</div></div>
        <div class="warn">${esc(t("no_plan", { e: this._eid("plan") }))}</div></div>`;
    }
    const span = horizon - now;
    const cells = [];
    // merge identical neighbours to keep the DOM small
    let cur = null;
    for (const r of rows) {
      const s = Math.max(r.t, now), e = Math.min(r.end, horizon);
      if (e <= s) continue;
      const key = r.cat + "|" + (r.target ?? "");
      if (cur && cur.key === key && Math.abs(cur.e - s) < 1000) { cur.e = e; continue; }
      if (cur) cells.push(cur);
      cur = { key, cat: r.cat, target: r.target, s, e };
    }
    if (cur) cells.push(cur);
    const used = cells.reduce((a, c) => a + (c.e - c.s), 0);
    const html = cells.map((c) => {
      const w = ((c.e - c.s) / span) * 100;
      const title = `${this._hm(c.s)}–${this._hm(c.e)} · ${t("st_" + c.cat)}${c.target !== null && c.cat !== "demand" ? " " + Math.round(c.target) + "%" : ""}`;
      return `<div style="width:${w.toFixed(3)}%;--c:var(--pb-${c.cat})" title="${esc(title)}"></div>`;
    }).join("") + (used < span ? `<div style="flex:1;--c:transparent"></div>` : "");

    const ticks = [];
    const hours = span / 3600e3;
    const widthPx = Math.max(200, (this.clientWidth || this._chartWidth || 480) - 32);
    const step = tickStep(hours, widthPx, 52 * this._scale());
    const minPct = (40 * this._scale() / widthPx) * 100;
    ticks.push(`<span style="left:0">${esc(t("now"))}</span>`);
    const first = new Date(now); first.setMinutes(0, 0, 0); first.setHours(first.getHours() + 1);
    for (let tm = first.getTime(); tm < horizon; tm += 3600e3) {
      const d = new Date(tm);
      if (d.getHours() % step !== 0 && d.getHours() !== 0) continue;
      const pct = ((tm - now) / span) * 100;
      if (pct < Math.max(8, minPct) || pct > 100 - minPct / 2) continue;
      const label = d.getHours() === 0 ? this._timeFmt({ weekday: "short" }).format(d) : this._h(tm);
      ticks.push(`<span style="left:${pct.toFixed(2)}%">${esc(label)}</span>`);
    }

    const present = [...new Set(cells.map((c) => c.cat))];
    const order = ["charge", "hold_charge", "freeze_charge", "export", "freeze_export", "hold_export", "demand"];
    const legend = order.filter((k) => present.includes(k))
      .map((k) => `<span><i style="--c:var(--pb-${k})"></i>${esc(t("st_" + k))}</span>`).join("");

    return `<div class="section">
        <div class="section-head"><div class="section-title">${esc(t("plan"))}</div></div>
        <div class="ribbon">${html}</div>
        <div class="ticks">${ticks.join("")}</div>
        <div class="legend">${legend}</div>
      </div>`;
  }

  _groups() {
    const { rows } = this._ctx;
    const groups = [];
    let g = null;
    for (const r of rows) {
      if (r.cat === "demand") { if (g) { groups.push(g); g = null; } continue; }
      const key = r.cat;
      if (g && g.cat === key && Math.abs(g.e - r.t) < 1000) {
        g.e = r.end; g.rows.push(r);
        if (r.target !== null) g.target = r.target;
        continue;
      }
      if (g) groups.push(g);
      g = { cat: key, s: r.t, e: r.end, target: r.target, rows: [r], override: !!r.override };
    }
    if (g) groups.push(g);
    return groups;
  }

  _renderActions() {
    const t = this.t;
    const { rows, cur } = this._ctx;
    if (!rows.length) return "";
    const max = Math.max(1, num(this._config.max_actions) || 4);
    const groups = this._groups().slice(0, max);
    const hours = Math.round((this._ctx.horizon - this._ctx.now) / 3600e3);
    let body;
    if (!groups.length) {
      body = `<div class="empty">${esc(t("no_actions", { n: hours }))}</div>`;
    } else {
      body = groups.map((g) => {
        const isExp = /export/.test(g.cat);
        const rates = g.rows.map((r) => (isExp ? r.exp : r.imp)).filter((v) => v !== null);
        const avg = rates.length ? rates.reduce((a, b) => a + b, 0) / rates.length : null;
        const last = g.rows[g.rows.length - 1];
        const endSoc = (() => {
          const idx = rows.indexOf(last);
          const nxt = rows[idx + 1];
          return nxt && nxt.soc !== null ? nxt.soc : last.soc;
        })();
        const what = t("st_" + g.cat) + (g.target !== null && !/hold/.test(g.cat) ? " " + t("target", { v: Math.round(g.target) }) : "");
        const dur = Math.round((g.e - g.s) / 60000);
        const durTxt = dur >= 60 ? `${Math.floor(dur / 60)}h${dur % 60 ? " " + (dur % 60) + "m" : ""}` : `${dur}m`;
        return `<div class="action" style="--c:var(--pb-${g.cat})">
            <div class="ico"><ha-icon icon="${STATE_ICON[g.cat]}"></ha-icon></div>
            <div style="min-width:0">
              <div class="what">${esc(what)}${g.override ? ` <span class="muted" style="font-weight:500">· ${esc(t("manual"))}</span>` : ""}</div>
              <div class="when">${esc(g.s <= Date.now() ? t("now") : this._dayWord(g.s))} ${esc(this._hm(g.s))}–${esc(this._hm(g.e))} · ${esc(durTxt)}</div>
            </div>
            <div class="meta">${avg !== null ? `<b>${esc(this._rate(avg, cur))}</b><br>` : ""}${endSoc !== null ? esc(t("ends_at", { v: Math.round(endSoc) })) : ""}</div>
          </div>`;
      }).join("");
    }
    return `<div class="section">
        <div class="section-head"><div class="section-title">${esc(t("upcoming"))}</div></div>
        <div class="actions">${body}</div>
      </div>`;
  }

  _renderTable() {
    const t = this.t;
    const { rows, cur } = this._ctx;
    const btn = `<button class="toggle" data-action="toggle-table">${esc(this._showTable ? t("hide_full") : t("show_full"))}</button>`;
    if (!this._showTable) return `<div class="section">${btn}</div>`;
    const f = (v, d = 2) => (v === null ? "–" : v.toFixed(d));
    const body = rows.map((r) => `<tr>
        <td>${esc(this._hm(r.t))}</td>
        <td><span class="tag"><i style="--c:var(--pb-${r.cat === "demand" ? "neutral" : r.cat})"></i>${esc(t("st_" + r.cat))}${r.target !== null && r.cat !== "demand" ? " " + Math.round(r.target) + "%" : ""}</span></td>
        <td>${esc(this._rate(r.imp, cur))}</td>
        <td>${esc(this._rate(r.exp, cur))}</td>
        <td>${f(r.pv)}</td>
        <td>${f(r.load)}</td>
        <td>${r.soc === null ? "–" : Math.round(r.soc) + "%"}</td>
        <td>${r.cost === null ? "–" : cur.major + r.cost.toFixed(2)}</td>
      </tr>`).join("");
    return `<div class="section">${btn}
        <div class="table-wrap"><table>
          <thead><tr><th>${esc(t("col_time"))}</th><th>${esc(t("col_state"))}</th><th>${esc(t("col_import"))}</th><th>${esc(t("col_export"))}</th>
          <th>${esc(t("col_pv"))}</th><th>${esc(t("col_load"))}</th><th>${esc(t("col_soc"))}</th><th>${esc(t("col_cost"))}</th></tr></thead>
          <tbody>${body}</tbody></table></div>
      </div>`;
  }

  _wire(scope) {
    const root = scope || this.shadowRoot;
    root.querySelectorAll("[data-more]").forEach((el) => {
      el.addEventListener("click", (e) => { e.stopPropagation(); this._moreInfo(el.getAttribute("data-more")); });
    });
    root.querySelectorAll("[data-tab]").forEach((el) => {
      el.addEventListener("click", () => {
        this._tab = el.getAttribute("data-tab");
        try { localStorage.setItem("predbat-card-tab", this._tab); } catch (e) { /* ignore */ }
        this._safeRender();
      });
    });
    root.querySelectorAll('[data-action="dq"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        this._dqOpen = !this._dqOpen;
        const d = this.shadowRoot.querySelector("details.dq");
        if (d) { d.open = this._dqOpen; if (this._dqOpen) d.scrollIntoView({ block: "nearest", behavior: "smooth" }); }
      });
    });
    root.querySelectorAll("details.dq").forEach((d) => {
      d.addEventListener("toggle", () => { this._dqOpen = d.open; });
    });
    const tg = root.querySelector('[data-action="toggle-table"]');
    if (tg) tg.addEventListener("click", () => { this._showTable = !this._showTable; this._safeRender(); });
  }
}

/* ------------------------------------------------------------------ */
/*  Editor                                                             */
/* ------------------------------------------------------------------ */
class PredbatCardEditor extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = null;
    this._form = null;
  }

  setConfig(config) {
    this._config = config && typeof config === "object" ? { ...config } : {};
    try { this._update(); } catch (e) { console.error("Predbat Card editor error", e); }
  }

  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first) this._ensureForm().then(() => this._update());
    else this._update(true);
  }

  async _ensureForm() {
    if (customElements.get("ha-form")) return;
    try {
      const helpers = await window.loadCardHelpers?.();
      if (helpers) {
        const c = await helpers.createCardElement({ type: "entities", entities: [] });
        if (c?.constructor?.getConfigElement) await c.constructor.getConfigElement();
      }
    } catch (e) { /* ignore */ }
    // On slower devices (phones, wall tablets) ha-form can register a moment later.
    if (!customElements.get("ha-form")) {
      await Promise.race([customElements.whenDefined("ha-form"), new Promise((r) => setTimeout(r, 4000))]);
    }
  }

  _t() { return makeT(pickLang(this._hass, this._config)); }

  _data() {
    const c = { ...DEFAULT_CONFIG, ...this._config };
    c.entities = { ...defaultEntities(c.prefix), ...(this._config.entities || {}) };
    for (const k of ["load_today", "load_power"]) {
      const v = c.entities[k];
      c.entities[k] = Array.isArray(v) ? v : typeof v === "string" && v ? v.split(",").map((x) => x.trim()).filter(Boolean) : [];
    }
    return c;
  }

  _schema(t) {
    const bool = (name) => ({ name, selector: { boolean: {} } });
    return [
      {
        name: "style",
        selector: {
          select: {
            mode: "dropdown",
            options: STYLE_NAMES.map((v) => ({ value: v, label: t("style_" + v) })),
          },
        },
      },
      {
        name: "theme_mode",
        selector: {
          select: {
            mode: "dropdown",
            options: ["auto", "light", "dark"].map((v) => ({ value: v, label: t("mode_" + v) })),
          },
        },
      },
      {
        type: "grid", name: "", schema: [
          { name: "title", selector: { text: {} } },
          { name: "prefix", selector: { text: {} } },
        ],
      },
      {
        name: "language",
        selector: {
          select: {
            mode: "dropdown",
            options: [
              { value: "auto", label: t("ed_auto") },
              { value: "en", label: "English" },
              { value: "pl", label: "Polski" },
              { value: "es", label: "Español" },
            ],
          },
        },
      },
      {
        type: "grid", name: "", schema: [
          bool("show_header"), bool("show_overview"), bool("show_chart"), bool("show_grid_chart"),
          bool("show_rates_chart"), bool("show_timeline"), bool("show_actions"), bool("show_table"),
          bool("show_base"), bool("show_rates"), bool("show_data_quality"),
        ],
      },
      {
        type: "grid", name: "", schema: [
          { name: "hours", selector: { number: { min: 4, max: 48, step: 1, mode: "box", unit_of_measurement: "h" } } },
          { name: "max_actions", selector: { number: { min: 1, max: 12, step: 1, mode: "box" } } },
        ],
      },
      {
        name: "chart_layout",
        selector: {
          select: {
            mode: "dropdown",
            options: ["tabs", "stacked"].map((v) => ({ value: v, label: t("layout_" + v) })),
          },
        },
      },
      {
        type: "grid", name: "", schema: [
          { name: "data_quality_days", selector: { number: { min: 1, max: 14, step: 1, mode: "box", unit_of_measurement: "d" } } },
          { name: "data_quality_minutes", selector: { number: { min: 10, max: 240, step: 5, mode: "box", unit_of_measurement: "min" } } },
        ],
      },
      { name: "font_scale", selector: { number: { min: 0.8, max: 1.6, step: 0.05, mode: "slider" } } },
      { name: "battery_capacity", selector: { number: { min: 0, max: 200, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
      {
        type: "expandable", name: "entities", title: t("ed_entities"), icon: "mdi:bat",
        schema: ENTITY_KEYS.map((k) => (k === "load_today" || k === "load_power"
          ? { name: k, selector: { entity: { multiple: true, filter: { domain: "sensor" } } } }
          : { name: k, selector: { entity: {} } })),
      },
    ];
  }

  _label(t) {
    const map = {
      style: "ed_style", theme_mode: "ed_theme_mode", title: "ed_title", prefix: "ed_prefix", language: "ed_language",
      show_header: "ed_show_header", show_overview: "ed_show_overview", show_chart: "ed_show_chart", show_grid_chart: "ed_show_grid_chart", show_rates_chart: "ed_show_rates_chart", chart_layout: "ed_chart_layout", show_data_quality: "ed_show_data_quality", data_quality_days: "ed_dq_days", data_quality_minutes: "ed_dq_minutes", font_scale: "ed_font_scale",
      show_timeline: "ed_show_timeline", show_actions: "ed_show_actions", show_table: "ed_show_table",
      show_base: "ed_show_base", show_rates: "ed_show_rates", hours: "ed_hours", max_actions: "ed_max_actions",
      battery_capacity: "ed_capacity",
      status: "e_status", plan: "e_plan", mode: "e_mode", soc_now: "e_soc_now", soc_best: "e_soc_best",
      soc_base: "e_soc_base", inverter_config: "e_inverter_config", hours_left: "e_hours_left", rates: "e_rates",
      rates_export: "e_rates_export", cost_today: "e_cost_today", best_metric: "e_best_metric", base_metric: "e_base_metric", savings: "e_savings",
      charge_start: "e_charge_start", charge_end: "e_charge_end", charge_limit: "e_charge_limit",
      export_start: "e_export_start", export_end: "e_export_end", export_limit: "e_export_limit", export_energy: "e_export_energy", load_today: "e_load_today", load_power: "e_load_power", import_energy: "e_import_energy",
    };
    return (s) => t(map[s.name] || s.name);
  }

  _update(hassOnly) {
    if (!this._hass) return;
    const t = this._t();
    if (!this._root) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>
          .check { margin-top: 16px; padding: 12px 14px; border-radius: 12px;
            background: color-mix(in srgb, var(--primary-text-color) 5%, transparent); font-size: .85rem; }
          .check h4 { margin: 0 0 6px; font-size: .9rem; display:flex; justify-content:space-between; align-items:center; gap:8px; }
          .check ul { list-style: none; margin: 0; padding: 0; columns: 2; column-gap: 16px; }
          .check li { padding: 2px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: var(--code-font-family, monospace); font-size: .76rem; }
          .ok { color: var(--success-color, #2e7d32); } .bad { color: var(--error-color, #c62828); }
          button { background: none; border: 1px solid var(--divider-color); color: var(--primary-text-color); border-radius: 999px; padding: 4px 10px; cursor: pointer; font: inherit; font-size: .75rem; }
          .ver { margin-top: 8px; font-size: .72rem; color: var(--secondary-text-color); text-align: right; } .ver a { color: inherit; }
          @media (max-width: 500px) { .check ul { columns: 1; } }
        </style>
        <div class="form"></div>
        <div class="check"></div>
        <div class="ver">Predbat Card v${CARD_VERSION} · data by <a href="https://github.com/springfall2008/batpred" target="_blank" rel="noreferrer">Predbat</a> by Trefor Southwell</div>`;
      this._root = this.shadowRoot;
      this._root.querySelector(".check").addEventListener("click", (e) => {
        if (e.target.closest("[data-reset]")) {
          const cfg = { ...this._config };
          delete cfg.entities;
          this._emit(cfg);
        }
      });
    }
    if (!customElements.get("ha-form")) {
      this._root.querySelector(".form").textContent = "Loading…";
      return;
    }
    if (!this._form) {
      this._form = document.createElement("ha-form");
      this._form.addEventListener("value-changed", (ev) => this._changed(ev.detail.value));
      const holder = this._root.querySelector(".form");
      holder.textContent = "";
      holder.appendChild(this._form);
    }
    this._form.hass = this._hass;
    if (!hassOnly || !this._form.schema) {
      this._form.schema = this._schema(t);
      this._form.computeLabel = this._label(t);
      this._form.data = this._data();
    }
    this._renderCheck(t);
  }

  _renderCheck(t) {
    const data = this._data();
    const items = [];
    const ids = Object.keys(this._hass.states || {});
    for (const k of ENTITY_KEYS) {
      let v = data.entities[k];
      if (k === "load_today" || k === "load_power") {
        let list = Array.isArray(v) ? v : v ? [v] : [];
        let auto = false;
        if (!list.length) {
          const re = k === "load_today" ? /^sensor\.givtcp\d*_[^.]+_load_energy_today_kwh$/i : /^sensor\.givtcp\d*_[^.]+_load_power$/i;
          list = ids.filter((e) => re.test(e)).sort();
          auto = true;
        }
        if (!list.length) { items.push({ id: `${k}: ${t("ed_auto_none")}`, ok: false }); continue; }
        for (const id of list) items.push({ id: auto ? `${id} (${t("ed_auto_found")})` : id, ok: !!this._hass.states[id] });
        continue;
      }
      items.push({ id: v, ok: !!(v && this._hass.states[v]) });
    }
    const found = items.filter((i) => i.ok).length;
    const html = `
      <h4><span>${t("ed_check")} · ${esc(t("ed_found", { n: found, t: items.length }))}</span>
      <button data-reset>${esc(t("ed_reset"))}</button></h4>
      <ul>${items.map((i) => `<li class="${i.ok ? "ok" : "bad"}" title="${esc(i.id)}">${i.ok ? "✓" : "✗"} ${esc(i.id)}</li>`).join("")}</ul>`;
    const box = this._root.querySelector(".check");
    if (box.innerHTML !== html) box.innerHTML = html;
  }

  _changed(value) {
    const cfg = { type: this._config.type || `custom:${CARD_TAG}` };
    const defs = defaultEntities(value.prefix);
    for (const [k, v] of Object.entries(value)) {
      if (k === "type" || k === "entities") continue;
      if (v === undefined || v === null || v === "") continue;
      if (k in DEFAULT_CONFIG && DEFAULT_CONFIG[k] === v) continue;
      cfg[k] = v;
    }
    // keep only entities that differ from the defaults for the current prefix
    const ents = {};
    for (const [k, v] of Object.entries(value.entities || {})) {
      if (Array.isArray(v)) { if (v.length) ents[k] = v; continue; }
      if (v && v !== defs[k]) ents[k] = v;
    }
    if (Object.keys(ents).length) cfg.entities = ents;
    this._emit(cfg);
  }

  _emit(cfg) {
    this._config = cfg;
    if (this._form) this._form.data = this._data();
    this._renderCheck(this._t());
    const ev = new Event("config-changed", { bubbles: true, composed: true });
    ev.detail = { config: cfg };
    this.dispatchEvent(ev);
  }
}

/* ------------------------------------------------------------------ */
/*  Register                                                           */
/* ------------------------------------------------------------------ */
if (!customElements.get(CARD_TAG)) customElements.define(CARD_TAG, PredbatCard);
if (!customElements.get(EDITOR_TAG)) customElements.define(EDITOR_TAG, PredbatCardEditor);

window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === CARD_TAG)) {
  window.customCards.push({
    type: CARD_TAG,
    name: "Predbat Card",
    description: "Predbat plan, battery forecast, costs and upcoming actions at a glance.",
    preview: true,
    documentationURL: "https://github.com/mimikm/Predbat-Card",
  });
}

console.info(
  `%c PREDBAT-CARD %c v${CARD_VERSION} `,
  "color:#fff;background:#7950f2;font-weight:700;border-radius:4px 0 0 4px;padding:2px 4px",
  "color:#7950f2;background:#f3f0ff;font-weight:700;border-radius:0 4px 4px 0;padding:2px 4px"
);
