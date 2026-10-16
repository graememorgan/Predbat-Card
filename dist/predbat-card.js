/*!
 * Predbat Card for Home Assistant
 * https://github.com/mimikm/Predbat-Card
 * MIT License
 */
const CARD_VERSION = "0.2.0";
const CARD_TAG = "predbat-card";
const EDITOR_TAG = "predbat-card-editor";

/* ------------------------------------------------------------------ */
/*  Translations                                                       */
/* ------------------------------------------------------------------ */
const TRANSLATIONS = {
  en: {
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
  return (key, vars) => {
    let s = dict[key] ?? TRANSLATIONS.en[key] ?? key;
    if (vars) for (const k of Object.keys(vars)) s = s.split(`{${k}}`).join(vars[k]);
    return s;
  };
}

/* ------------------------------------------------------------------ */
/*  Defaults                                                           */
/* ------------------------------------------------------------------ */
const ENTITY_KEYS = [
  "status", "plan", "mode", "soc_now", "soc_best", "soc_base", "inverter_config",
  "hours_left", "rates", "rates_export", "cost_today", "best_metric", "savings",
  "charge_start", "charge_end", "charge_limit", "export_start", "export_end", "export_limit",
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
    savings: `${p}.savings_yesterday_predbat`,
    charge_start: `${p}.best_charge_start`,
    charge_end: `${p}.best_charge_end`,
    charge_limit: `${p}.best_charge_limit`,
    export_start: `${p}.best_export_start`,
    export_end: `${p}.best_export_end`,
    export_limit: `${p}.best_export_limit`,
  };
}

const STYLE_NAMES = ["modern", "glass", "neon", "minimal", "native", "terminal"];

const DEFAULT_CONFIG = {
  style: "modern",
  title: "",
  prefix: "predbat",
  language: "auto",
  show_header: true,
  show_overview: true,
  show_chart: true,
  show_timeline: true,
  show_actions: true,
  show_table: true,
  show_base: true,
  show_rates: true,
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
/*  Styles                                                             */
/* ------------------------------------------------------------------ */
const THEME_STYLES = `
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
.s-glass .pill { backdrop-filter: blur(10px); }
.s-glass th { background: var(--pb-glass); backdrop-filter: blur(14px); }

/* ===================== STYLE: NEON ===================== */
ha-card.s-neon {
  --card-background-color: #07070f;
  --primary-text-color: #ecebff;
  --secondary-text-color: #8a88b8;
  --pb-accent: #00e5ff;
  --pb-rate: #ffe600;
  --pb-charge: #39ff88;
  --pb-hold_charge: #4d7cff;
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
.s-neon .tile, .s-neon .action { border: 1px solid #26244a; }
.s-neon .tile-value, .s-neon .head-title, .s-neon .action .meta b {
  font-family: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: -.02em;
}
.s-neon .tile-value { text-shadow: 0 0 12px color-mix(in srgb, var(--pb-accent) 55%, transparent); }
.s-neon .tile .accent-bar { box-shadow: 0 0 10px var(--c); }
.s-neon .logo { border-radius: 6px; background: #07070f; border: 1px solid var(--pb-accent); color: var(--pb-accent); box-shadow: 0 0 12px rgba(0,229,255,.5), inset 0 0 8px rgba(0,229,255,.3); }
.s-neon .pill { border-radius: 4px; text-transform: uppercase; letter-spacing: .06em; font-size: .72rem; box-shadow: 0 0 12px color-mix(in srgb, var(--c) 40%, transparent); }
.s-neon .section-title { color: var(--pb-accent); letter-spacing: .14em; }
.s-neon .section-title::before { content: "// "; opacity: .6; }
.s-neon .l-best { filter: drop-shadow(0 0 4px var(--pb-accent)) drop-shadow(0 0 10px var(--pb-accent)); }
.s-neon .l-rate { filter: drop-shadow(0 0 3px var(--pb-rate)); opacity: .9; }
.s-neon .l-area { opacity: .55; }
.s-neon .ribbon { border-radius: 3px; height: 14px; border: 1px solid #26244a; }
.s-neon .ribbon > div:not([style*="demand"]) { box-shadow: 0 0 10px var(--c) !important; }
.s-neon .action .ico { border-radius: 4px; box-shadow: 0 0 10px color-mix(in srgb, var(--c) 45%, transparent); }
.s-neon .toggle { border-radius: 4px; border-color: var(--pb-accent); color: var(--pb-accent); text-transform: uppercase; letter-spacing: .08em; font-size: .7rem; }
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
.s-minimal .head-title { font-size: 1.25rem; font-weight: 300; letter-spacing: -.01em; }
.s-minimal .pill { background: none; border: none; padding: 0; font-weight: 500; }
.s-minimal .overview { gap: 0; border-top: 1px solid var(--pb-line); border-bottom: 1px solid var(--pb-line); }
.s-minimal .tile { padding: 12px 14px; border-right: 1px solid var(--pb-line); border-bottom: 1px solid var(--pb-line); margin: 0 -1px -1px 0; }
.s-minimal .tile .accent-bar { display: none; }
.s-minimal .tile-label { text-transform: none; letter-spacing: 0; font-size: .74rem; }
.s-minimal .tile-label ha-icon { display: none; }
.s-minimal .tile-value { font-weight: 300; font-size: 1.45rem; }
.s-minimal .tile.battery .ring { width: 40px; height: 40px; }
.s-minimal .section-title { text-transform: none; letter-spacing: 0; font-weight: 500; color: var(--primary-text-color); font-size: .9rem; }
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
.s-native .head-title { font-size: var(--ha-card-header-font-size, 1.25rem); font-weight: 400; }
.s-native .tile { border: 1px solid var(--pb-line); }
.s-native .tile-label { text-transform: none; letter-spacing: 0; font-size: .8rem; }
.s-native .tile-value { font-weight: 500; }
.s-native .section-title { text-transform: none; letter-spacing: 0; font-size: 1rem; font-weight: 500; color: var(--primary-text-color); }
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
.s-terminal .ribbon { border-radius: 0; height: 14px; border: 1px solid var(--pb-line); background: repeating-linear-gradient(90deg, transparent 0 3px, #102010 3px 4px); }
.s-terminal .ribbon > div { background: repeating-linear-gradient(90deg, var(--c) 0 3px, transparent 3px 4px); box-shadow: none !important; }
.s-terminal .action .ico { border-radius: 0; background: none; border: 1px solid var(--c); }
.s-terminal .toggle { border-radius: 0; text-transform: uppercase; }
.s-terminal .toggle::before { content: "> "; }
.s-terminal .tip { border-radius: 0; background: #0a140a; border-color: var(--pb-accent); }
.s-terminal .table-wrap { border-radius: 0; }
.s-terminal .legend i { border-radius: 0; }
`;

const STYLES = `
:host {
  --pb-charge: #12b886;
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
  display: block;
}
ha-card { display: block; overflow: hidden; color: var(--primary-text-color); }
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
.head-title { font-size: 1.05rem; font-weight: 600; line-height: 1.2; }
.head-sub { font-size: .78rem; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pill {
  display: inline-flex; align-items: center; gap: 6px; max-width: 55%;
  padding: 5px 11px 5px 9px; border-radius: 999px; font-size: .8rem; font-weight: 600;
  background: color-mix(in srgb, var(--c) 16%, transparent); color: var(--c);
  border: 1px solid color-mix(in srgb, var(--c) 35%, transparent);
}
.pill span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.pill ha-icon { --mdc-icon-size: 16px; flex: none; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--c); flex: none; }
.pill.live .dot { animation: pulse 2s infinite; }
@keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: .35 } }

.banner {
  display: flex; gap: 8px; align-items: center; padding: 8px 12px; border-radius: 10px; font-size: .85rem;
  background: color-mix(in srgb, var(--pb-error) 14%, transparent); color: var(--pb-error);
}
.banner ha-icon { --mdc-icon-size: 18px; }
.warn { font-size: .8rem; padding: 8px 12px; border-radius: 10px; background: var(--pb-tile); }

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
.tile-label { font-size: .72rem; text-transform: uppercase; letter-spacing: .05em; color: var(--pb-muted); display: flex; align-items: center; gap: 5px; }
.tile-label ha-icon { --mdc-icon-size: 14px; }
.tile-value { font-size: 1.25rem; font-weight: 650; line-height: 1.25; font-variant-numeric: tabular-nums; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tile-value small { font-size: .72rem; font-weight: 500; color: var(--pb-muted); margin-left: 2px; }
.tile-sub { font-size: .76rem; color: var(--pb-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-variant-numeric: tabular-nums; }
.tile .accent-bar { position: absolute; left: 0; top: 10px; bottom: 10px; width: 3px; border-radius: 3px; background: var(--c, transparent); }
.ring { width: 52px; height: 52px; flex: none; }
.ring text { font-size: 13px; font-weight: 700; fill: var(--primary-text-color); font-variant-numeric: tabular-nums; }
.pos { color: var(--pb-charge); }
.neg { color: var(--pb-error); }

/* section */
.section { display: flex; flex-direction: column; gap: 8px; }
.section-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.section-title { font-size: .82rem; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; color: var(--pb-muted); }
.legend { display: flex; flex-wrap: wrap; gap: 4px 12px; font-size: .74rem; color: var(--pb-muted); }
.legend i { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 5px; vertical-align: -1px; background: var(--c); }
.legend i.line { height: 3px; vertical-align: 2px; border-radius: 2px; }
.legend i.dash { height: 0; border-top: 2px dashed var(--c); background: none; vertical-align: 3px; }

/* chart */
.chart { position: relative; width: 100%; touch-action: pan-y; }
.chart svg { display: block; width: 100%; overflow: visible; }
.chart .axis { font-size: 10px; fill: var(--pb-muted); font-variant-numeric: tabular-nums; }
.chart .grid { stroke: var(--pb-line); stroke-width: 1; }
.tip {
  position: absolute; top: 4px; pointer-events: none; z-index: 2; display: none;
  background: var(--card-background-color, #fff); color: var(--primary-text-color);
  border: 1px solid var(--pb-line); border-radius: 10px; padding: 7px 10px; font-size: .76rem;
  box-shadow: 0 4px 16px rgba(0,0,0,.15); white-space: nowrap; font-variant-numeric: tabular-nums;
}
.tip b { font-weight: 650; }
.tip .row { display: flex; justify-content: space-between; gap: 14px; }

/* timeline */
.ribbon { display: flex; height: 22px; border-radius: 8px; overflow: hidden; background: var(--pb-tile); }
.ribbon > div { height: 100%; background: var(--c); min-width: 1px; }
.ribbon > div + div { box-shadow: inset 1px 0 0 color-mix(in srgb, var(--card-background-color, #fff) 35%, transparent); }
.ticks { position: relative; height: 14px; font-size: 10px; color: var(--pb-muted); font-variant-numeric: tabular-nums; }
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
.action .what { font-weight: 600; font-size: .88rem; }
.action .when { font-size: .76rem; color: var(--pb-muted); font-variant-numeric: tabular-nums; }
.action .meta { text-align: right; font-size: .76rem; color: var(--pb-muted); font-variant-numeric: tabular-nums; }
.action .meta b { color: var(--primary-text-color); font-weight: 600; font-size: .85rem; }
.empty { font-size: .82rem; color: var(--pb-muted); padding: 6px 2px; }

/* table */
.toggle {
  align-self: flex-start; background: none; border: 1px solid var(--pb-line); color: var(--primary-text-color);
  border-radius: 999px; padding: 5px 12px; font: inherit; font-size: .78rem; cursor: pointer;
}
.toggle:hover { background: var(--pb-tile); }
.table-wrap { overflow-x: auto; max-height: 360px; overflow-y: auto; border-radius: 10px; border: 1px solid var(--pb-line); }
table { width: 100%; border-collapse: collapse; font-size: .76rem; font-variant-numeric: tabular-nums; }
th { position: sticky; top: 0; background: var(--card-background-color, #fff); text-align: right; font-weight: 600; color: var(--pb-muted); padding: 6px 8px; border-bottom: 1px solid var(--pb-line); }
td { text-align: right; padding: 5px 8px; border-bottom: 1px solid var(--pb-line); white-space: nowrap; }
th:first-child, td:first-child, th:nth-child(2), td:nth-child(2) { text-align: left; }
tr:last-child td { border-bottom: none; }
.tag { display: inline-flex; align-items: center; gap: 5px; }
.tag i { width: 8px; height: 8px; border-radius: 2px; background: var(--c); display: inline-block; }
.foot { font-size: .7rem; color: var(--pb-muted); text-align: right; margin-top: -6px; }
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
    if (!config) throw new Error("Invalid configuration");
    this._config = { ...DEFAULT_CONFIG, ...config, entities: { ...(config.entities || {}) } };
    this._sig = "";
    if (this._hass) this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    const sig = this._signature();
    if (sig !== this._sig) { this._sig = sig; this._render(); }
  }

  getCardSize() { return 9; }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: "auto" }; }

  connectedCallback() {
    if (!this._ro && "ResizeObserver" in window) {
      this._ro = new ResizeObserver(() => {
        const el = this.shadowRoot.querySelector(".chart");
        const w = el ? Math.round(el.clientWidth) : 0;
        if (w && Math.abs(w - this._chartWidth) > 2) { this._chartWidth = w; this._drawChart(); }
      });
    }
    this._observe();
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
    const lang = this._hass.locale?.language || this._hass.language || "en";
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

    const plan = this._plan();
    const cur = this._currency(plan.raw);
    const socMax = this._socMax(plan.raw);
    const now = Date.now();
    const horizon = now + Math.max(1, num(c.hours) || 24) * 3600e3;
    const rows = plan.rows.filter((r) => r.end > now && r.t < horizon);
    this._ctx = { plan, cur, socMax, now, horizon, rows };

    const status = this._st("status");
    const parts = [];

    if (c.show_header !== false) parts.push(this._renderHeader(status));
    if (status && (status.attributes?.error === true || /error/i.test(status.state))) {
      parts.push(`<div class="banner"><ha-icon icon="mdi:alert-circle"></ha-icon><span>${esc(t("error"))}${status.state ? ": " + esc(status.state) : ""}</span></div>`);
    }
    if (!status && !plan.raw) {
      parts.push(`<div class="warn">${esc(t("missing", { e: this._eid("status") }))}</div>`);
    }
    if (c.show_overview !== false) parts.push(this._renderOverview());
    if (c.show_chart !== false) parts.push(this._renderChartShell());
    if (c.show_timeline !== false) parts.push(this._renderTimeline());
    if (c.show_actions !== false) parts.push(this._renderActions());
    if (c.show_table !== false && rows.length) parts.push(this._renderTable());

    this.shadowRoot.innerHTML = `<style>${STYLES}</style><ha-card class="s-${esc(this._style())}"><div class="cq"><div class="wrap">${parts.join("")}</div></div></ha-card>`;
    this._wire();
    this._observe();
    const ch = this.shadowRoot.querySelector(".chart");
    if (ch) { this._chartWidth = Math.round(ch.clientWidth) || this._chartWidth || 600; this._drawChart(); }
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
    if (mode && !BAD.test(mode.state)) subBits.push(`<span class="clickable" data-more="${esc(this._eid("mode"))}">${esc(mode.state)}</span>`);
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
        <div class="tile-value" style="font-size:1.02rem">${esc(nowLabel)}</div>
        <div class="tile-sub">↓ ${esc(this._rate(impNow, cur))} · ↑ ${esc(this._rate(expNow, cur))}</div>
      </div>`;

    // Cost
    const costToday = num(this._st("cost_today")?.state);
    const bestMetric = num(this._st("best_metric")?.state);
    const costTile = `
      <div class="tile clickable" data-more="${esc(this._eid("cost_today"))}">
        <div class="tile-label"><ha-icon icon="mdi:cash"></ha-icon>${esc(t("cost_today"))}</div>
        <div class="tile-value">${esc(this._money(costToday, cur))}</div>
        <div class="tile-sub">${bestMetric !== null ? esc(t("plan_total", { v: this._money(bestMetric, cur) })) : "&nbsp;"}</div>
      </div>`;

    // Savings
    const sav = num(this._st("savings")?.state);
    const savTile = `
      <div class="tile clickable" data-more="${esc(this._eid("savings"))}">
        <div class="tile-label"><ha-icon icon="mdi:piggy-bank-outline"></ha-icon>${esc(t("saved_yesterday"))}</div>
        <div class="tile-value ${sav !== null ? (sav >= 0 ? "pos" : "neg") : ""}">${esc(this._money(sav, cur))}</div>
        <div class="tile-sub">${esc(t("vs_baseline"))}</div>
      </div>`;

    const winTile = (kind) => {
      const w = this._windowFromEntities(kind) || this._windowFromRows(kind);
      const label = kind === "charge" ? t("next_charge") : t("next_export");
      const icon = kind === "charge" ? "mdi:battery-arrow-up" : "mdi:battery-arrow-down";
      if (!w) {
        return `<div class="tile"><div class="tile-label"><ha-icon icon="${icon}"></ha-icon>${esc(label)}</div>
          <div class="tile-value muted" style="font-size:1rem">${esc(t("none_planned"))}</div><div class="tile-sub">&nbsp;</div></div>`;
      }
      const active = w.s <= Date.now();
      return `<div class="tile" style="--c:var(--pb-${kind})">
          <span class="accent-bar"></span>
          <div class="tile-label"><ha-icon icon="${icon}"></ha-icon>${esc(label)}</div>
          <div class="tile-value" style="font-size:1.05rem">${esc(this._hm(w.s))}–${esc(this._hm(w.e))}</div>
          <div class="tile-sub">${esc(active ? t("now") : this._dayWord(w.s))}${w.target !== null ? " · " + esc(t("target", { v: Math.round(w.target) })) : ""}</div>
        </div>`;
    };

    return `<div class="overview">${battery}${nowTile}${costTile}${savTile}${winTile("charge")}${winTile("export")}</div>`;
  }

  _renderChartShell() {
    const t = this.t;
    const c = this._config;
    const legend = [
      `<span><i class="line" style="--c:var(--pb-accent)"></i>${esc(t("best"))}</span>`,
      c.show_base !== false ? `<span><i class="dash" style="--c:var(--pb-muted)"></i>${esc(t("base"))}</span>` : "",
      c.show_rates !== false ? `<span><i class="line" style="--c:var(--pb-rate)"></i>${esc(t("rate"))}</span>` : "",
      `<span><i style="--c:color-mix(in srgb, var(--pb-charge) 45%, transparent)"></i>${esc(t("st_charge"))}</span>`,
      `<span><i style="--c:color-mix(in srgb, var(--pb-export) 45%, transparent)"></i>${esc(t("st_export"))}</span>`,
    ].join("");
    return `
      <div class="section">
        <div class="section-head"><div class="section-title">${esc(t("forecast"))}</div></div>
        <div class="chart"><div class="tip"></div><div class="svg-host"></div></div>
        <div class="legend">${legend}</div>
      </div>`;
  }

  _drawChart() {
    const host = this.shadowRoot.querySelector(".chart .svg-host");
    if (!host || !this._ctx) return;
    const t = this.t;
    const c = this._config;
    const { socMax, now, horizon, rows, cur } = this._ctx;
    const W = Math.max(260, this._chartWidth || 600);
    const H = 190;
    const showRates = c.show_rates !== false;
    const padL = 34, padR = showRates ? 38 : 10, padT = 8, padB = 22;
    const iw = W - padL - padR, ih = H - padT - padB;

    const bestSt = this._st("soc_best");
    let best = seriesFrom(bestSt?.attributes?.results);
    let base = c.show_base !== false ? seriesFrom(this._st("soc_base")?.attributes?.results) : [];
    let rates = showRates ? seriesFrom(this._st("rates")?.attributes?.results) : [];

    const inWin = (s) => {
      const out = s.filter((p) => p[0] >= now - 10 * 60e3 && p[0] <= horizon);
      return out;
    };
    best = inWin(best); base = inWin(base);
    // rates: keep the step that is active at "now"
    const ratesWin = [];
    for (let i = 0; i < rates.length; i++) {
      const p = rates[i], nxt = rates[i + 1];
      if (p[0] > horizon) break;
      if (nxt && nxt[0] <= now) continue;
      ratesWin.push(p);
    }
    rates = ratesWin;

    if (!best.length) {
      host.innerHTML = `<div class="empty">${esc(t("no_forecast", { e: this._eid("soc_best") }))}</div>`;
      this._chartData = null;
      return;
    }

    const maxK = socMax || Math.max(...best.map((p) => p[1]), ...base.map((p) => p[1]), 1);
    const toPct = (k) => Math.max(0, Math.min(100, (k / maxK) * 100));
    const X = (tm) => padL + ((Math.max(now, Math.min(horizon, tm)) - now) / (horizon - now)) * iw;
    const Y = (p) => padT + (1 - p / 100) * ih;

    let rMin = 0, rMax = 1;
    if (rates.length) {
      rMin = Math.min(0, ...rates.map((p) => p[1]));
      rMax = Math.max(...rates.map((p) => p[1])) * 1.1 || 1;
    }
    const YR = (r) => padT + (1 - (r - rMin) / (rMax - rMin)) * ih;

    const parts = [];
    // plan bands
    for (const r of rows) {
      if (r.cat === "demand") continue;
      const x1 = X(r.t), x2 = X(r.end);
      if (x2 - x1 < 0.5) continue;
      const col = `var(--pb-${r.cat})`;
      parts.push(`<rect x="${x1.toFixed(1)}" y="${padT}" width="${(x2 - x1).toFixed(1)}" height="${ih}" fill="${col}" opacity=".16"/>`);
      parts.push(`<rect x="${x1.toFixed(1)}" y="${padT + ih - 3}" width="${(x2 - x1).toFixed(1)}" height="3" fill="${col}" opacity=".9"/>`);
    }
    // grid
    for (const g of [0, 25, 50, 75, 100]) {
      parts.push(`<line class="grid" x1="${padL}" x2="${padL + iw}" y1="${Y(g).toFixed(1)}" y2="${Y(g).toFixed(1)}" ${g === 0 || g === 100 ? "" : 'stroke-dasharray="2 4"'}/>`);
      if (g % 50 === 0) parts.push(`<text class="axis" x="${padL - 6}" y="${(Y(g) + 3).toFixed(1)}" text-anchor="end">${g}%</text>`);
    }
    // reserve
    const reserve = num(this._ctx.plan.raw?.reserve);
    if (reserve && maxK) {
      const yr = Y(toPct(reserve));
      parts.push(`<line x1="${padL}" x2="${padL + iw}" y1="${yr.toFixed(1)}" y2="${yr.toFixed(1)}" stroke="var(--pb-error)" stroke-width="1" stroke-dasharray="4 3" opacity=".6"/>`);
      parts.push(`<text class="axis" x="${padL + 4}" y="${(yr - 3).toFixed(1)}" style="fill:var(--pb-error);opacity:.8">${esc(t("reserve"))}</text>`);
    }
    // x ticks
    const hours = (horizon - now) / 3600e3;
    const step = hours <= 12 ? 2 : hours <= 30 ? 4 : 8;
    const first = new Date(now); first.setMinutes(0, 0, 0); first.setHours(first.getHours() + 1);
    for (let tm = first.getTime(); tm < horizon; tm += 3600e3) {
      const d = new Date(tm);
      const isMid = d.getHours() === 0;
      if (!isMid && d.getHours() % step !== 0) continue;
      const x = X(tm);
      if (x < padL + 14 || x > padL + iw - 14) continue;
      parts.push(`<line class="grid" x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${padT}" y2="${padT + ih}" ${isMid ? "" : 'stroke-dasharray="2 4"'}/>`);
      const label = isMid ? this._timeFmt({ weekday: "short" }).format(d) : this._h(tm);
      parts.push(`<text class="axis" x="${x.toFixed(1)}" y="${H - 6}" text-anchor="middle" ${isMid ? 'style="font-weight:600"' : ""}>${esc(label)}</text>`);
    }
    // rates step line
    if (rates.length) {
      let d = "";
      rates.forEach((p, i) => {
        const x = X(Math.max(p[0], now)), y = YR(p[1]);
        d += i === 0 ? `M${x.toFixed(1)},${y.toFixed(1)}` : `H${x.toFixed(1)}V${y.toFixed(1)}`;
      });
      d += `H${(padL + iw).toFixed(1)}`;
      parts.push(`<path d="${d}" fill="none" stroke="var(--pb-rate)" stroke-width="1.4" opacity=".75" class="l-rate"/>`);
      for (const r of [rMax / 1.1, (rMax / 1.1 + rMin) / 2, rMin]) {
        parts.push(`<text class="axis" x="${padL + iw + 5}" y="${(YR(r) + 3).toFixed(1)}" style="fill:var(--pb-rate)">${esc(Math.round(r) + cur.minor)}</text>`);
      }
    }
    // base
    if (base.length > 1) {
      const d = base.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(toPct(p[1])).toFixed(1)}`).join("");
      parts.push(`<path d="${d}" fill="none" stroke="var(--pb-muted)" stroke-width="1.4" stroke-dasharray="5 4" opacity=".8" class="l-base"/>`);
    }
    // best area + line
    const line = best.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(toPct(p[1])).toFixed(1)}`).join("");
    const area = `${line}L${X(best[best.length - 1][0]).toFixed(1)},${Y(0)}L${X(best[0][0]).toFixed(1)},${Y(0)}Z`;
    parts.push(`<defs><linearGradient id="pbg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="var(--pb-accent)" stop-opacity=".35"/>
        <stop offset="1" stop-color="var(--pb-accent)" stop-opacity="0"/></linearGradient></defs>`);
    parts.push(`<path d="${area}" fill="url(#pbg)" class="l-area"/>`);
    parts.push(`<path d="${line}" fill="none" stroke="var(--pb-accent)" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" class="l-best"/>`);
    // min marker
    let minP = best[0];
    for (const p of best) if (p[1] < minP[1]) minP = p;
    parts.push(`<circle cx="${X(minP[0]).toFixed(1)}" cy="${Y(toPct(minP[1])).toFixed(1)}" r="3" fill="var(--card-background-color,#fff)" stroke="var(--pb-accent)" stroke-width="1.6"/>`);
    // now marker
    parts.push(`<circle cx="${X(best[0][0]).toFixed(1)}" cy="${Y(toPct(best[0][1])).toFixed(1)}" r="4" fill="var(--pb-accent)"/>`);
    // hover guide
    parts.push(`<line class="guide" x1="0" x2="0" y1="${padT}" y2="${padT + ih}" stroke="var(--primary-text-color)" stroke-width="1" opacity="0"/>`);
    parts.push(`<circle class="gdot" r="4" fill="var(--pb-accent)" stroke="var(--card-background-color,#fff)" stroke-width="2" opacity="0"/>`);
    parts.push(`<rect class="hit" x="${padL}" y="${padT}" width="${iw}" height="${ih}" fill="transparent"/>`);

    host.innerHTML = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${parts.join("")}</svg>`;
    this._chartData = { best, base, rates, rows, X, Y, toPct, padL, iw, now, horizon, maxK, cur };
    this._wireChart();
  }

  _wireChart() {
    const chart = this.shadowRoot.querySelector(".chart");
    const svg = chart && chart.querySelector("svg");
    if (!svg || !this._chartData) return;
    const tip = chart.querySelector(".tip");
    const guide = svg.querySelector(".guide");
    const gdot = svg.querySelector(".gdot");
    const t = this.t;
    const move = (ev) => {
      const d = this._chartData;
      const rect = svg.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      if (x < d.padL || x > d.padL + d.iw) { hide(); return; }
      const tm = d.now + ((x - d.padL) / d.iw) * (d.horizon - d.now);
      const b = nearest(d.best, tm);
      if (!b) return;
      const bx = d.X(b[0]), by = d.Y(d.toPct(b[1]));
      guide.setAttribute("x1", bx); guide.setAttribute("x2", bx); guide.setAttribute("opacity", ".25");
      gdot.setAttribute("cx", bx); gdot.setAttribute("cy", by); gdot.setAttribute("opacity", "1");
      const base = nearest(d.base, b[0]);
      const rate = stepAt(d.rates, b[0]);
      const row = d.rows.find((r) => r.t <= b[0] && r.end > b[0]);
      const lines = [
        `<div><b>${esc(this._dayWord(b[0]))} ${esc(this._hm(b[0]))}</b></div>`,
        `<div class="row"><span>${esc(t("best"))}</span><b>${Math.round(d.toPct(b[1]))}% · ${b[1].toFixed(1)} kWh</b></div>`,
      ];
      if (base) lines.push(`<div class="row muted"><span>${esc(t("base"))}</span><span>${Math.round(d.toPct(base[1]))}%</span></div>`);
      if (rate !== null) lines.push(`<div class="row"><span>${esc(t("import"))}</span><span>${esc(this._rate(rate, d.cur))}</span></div>`);
      if (row) lines.push(`<div class="row"><span class="tag"><i style="--c:var(--pb-${row.cat === "demand" ? "neutral" : row.cat})"></i>${esc(t("st_" + row.cat))}</span><span>${row.target !== null && row.cat !== "demand" ? Math.round(row.target) + "%" : ""}</span></div>`);
      tip.innerHTML = lines.join("");
      tip.style.display = "block";
      const tw = tip.offsetWidth;
      let left = bx + 12;
      if (left + tw > rect.width) left = bx - tw - 12;
      tip.style.left = Math.max(0, left) + "px";
    };
    const hide = () => {
      tip.style.display = "none";
      guide.setAttribute("opacity", "0");
      gdot.setAttribute("opacity", "0");
    };
    svg.addEventListener("pointermove", move);
    svg.addEventListener("pointerdown", move);
    svg.addEventListener("pointerleave", hide);
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
    const step = hours <= 12 ? 2 : hours <= 30 ? 4 : 8;
    ticks.push(`<span style="left:0">${esc(t("now"))}</span>`);
    const first = new Date(now); first.setMinutes(0, 0, 0); first.setHours(first.getHours() + 1);
    for (let tm = first.getTime(); tm < horizon; tm += 3600e3) {
      const d = new Date(tm);
      if (d.getHours() % step !== 0 && d.getHours() !== 0) continue;
      const pct = ((tm - now) / span) * 100;
      if (pct < 12 || pct > 94) continue;
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

  _wire() {
    const root = this.shadowRoot;
    root.querySelectorAll("[data-more]").forEach((el) => {
      el.addEventListener("click", (e) => { e.stopPropagation(); this._moreInfo(el.getAttribute("data-more")); });
    });
    const tg = root.querySelector('[data-action="toggle-table"]');
    if (tg) tg.addEventListener("click", () => { this._showTable = !this._showTable; this._render(); });
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
    this._config = { ...config };
    this._update();
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
  }

  _t() { return makeT(pickLang(this._hass, this._config)); }

  _data() {
    const c = { ...DEFAULT_CONFIG, ...this._config };
    c.entities = { ...defaultEntities(c.prefix), ...(this._config.entities || {}) };
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
          bool("show_header"), bool("show_overview"), bool("show_chart"), bool("show_timeline"),
          bool("show_actions"), bool("show_table"), bool("show_base"), bool("show_rates"),
        ],
      },
      {
        type: "grid", name: "", schema: [
          { name: "hours", selector: { number: { min: 4, max: 48, step: 1, mode: "box", unit_of_measurement: "h" } } },
          { name: "max_actions", selector: { number: { min: 1, max: 12, step: 1, mode: "box" } } },
        ],
      },
      { name: "battery_capacity", selector: { number: { min: 0, max: 200, step: 0.1, mode: "box", unit_of_measurement: "kWh" } } },
      {
        type: "expandable", name: "entities", title: t("ed_entities"), icon: "mdi:bat",
        schema: ENTITY_KEYS.map((k) => ({ name: k, selector: { entity: {} } })),
      },
    ];
  }

  _label(t) {
    const map = {
      style: "ed_style", title: "ed_title", prefix: "ed_prefix", language: "ed_language",
      show_header: "ed_show_header", show_overview: "ed_show_overview", show_chart: "ed_show_chart",
      show_timeline: "ed_show_timeline", show_actions: "ed_show_actions", show_table: "ed_show_table",
      show_base: "ed_show_base", show_rates: "ed_show_rates", hours: "ed_hours", max_actions: "ed_max_actions",
      battery_capacity: "ed_capacity",
      status: "e_status", plan: "e_plan", mode: "e_mode", soc_now: "e_soc_now", soc_best: "e_soc_best",
      soc_base: "e_soc_base", inverter_config: "e_inverter_config", hours_left: "e_hours_left", rates: "e_rates",
      rates_export: "e_rates_export", cost_today: "e_cost_today", best_metric: "e_best_metric", savings: "e_savings",
      charge_start: "e_charge_start", charge_end: "e_charge_end", charge_limit: "e_charge_limit",
      export_start: "e_export_start", export_end: "e_export_end", export_limit: "e_export_limit",
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
    const items = ENTITY_KEYS.map((k) => {
      const id = data.entities[k];
      const ok = !!(id && this._hass.states[id]);
      return { id, ok };
    });
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
