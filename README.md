# Predbat Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz/docs/faq/custom_repositories)
[![GitHub release](https://img.shields.io/github/v/release/mimikm/Predbat-Card)](https://github.com/mimikm/Predbat-Card/releases)
[![Validate](https://github.com/mimikm/Predbat-Card/actions/workflows/validate.yaml/badge.svg)](https://github.com/mimikm/Predbat-Card/actions/workflows/validate.yaml)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-FFDD00?logo=buymeacoffee&logoColor=000)](https://buymeacoffee.com/mimikm)

A Home Assistant Lovelace card that shows what [Predbat](https://github.com/springfall2008/batpred) is doing and what it plans to do next, at a glance.

<table>
  <tr>
    <th>Dark theme</th>
    <th>Light theme</th>
  </tr>
  <tr>
    <td><img src="https://github.com/mimikm/Predbat-Card/raw/main/images/preview-dark.png" alt="Predbat Card in a dark theme" width="100%"></td>
    <td><img src="https://github.com/mimikm/Predbat-Card/raw/main/images/preview-light.png" alt="Predbat Card in a light theme" width="100%"></td>
  </tr>
</table>

## Features

- **Status header** – current Predbat status, mode, last update and version. Tap to open more-info.
- **Overview tiles** – battery SoC ring, what the battery is doing now with current import/export rates, cost today with a forecast for the rest of the day, predicted saving today (with yesterday's actual saving), next charge and next export windows.
- **Battery forecast chart** – the best-plan SoC over the next hours, the baseline for comparison, the import rate as a step line, reserve level and shaded charge/export windows. Hover or tap for details.
- **Grid import & export chart** – predicted export (up) and import (down) for every plan slot, with totals for the period.
- **Energy rates chart** – import and export rates as step lines with charge/export windows shaded.
- **Zero-load alarm** – spots the "zero load" problems Predbat warns about in its log (your daily load total stops rising while the house is using power), with a header chip, a list of recent periods and a 7-day data-quality view. See [Zero-load alarm](#zero-load-alarm).
- **Charts your way** – turn each chart on or off, and show them as tabs (one at a time) or stacked.
- **Text size** – scale all the card's text from 80% to 160%.
- **Plan timeline** – a colour-coded ribbon of every plan slot (charge, hold, freeze, export, demand).
- **Upcoming actions** – the next forced charge/export windows merged into readable blocks with average rate and the SoC they end at.
- **Full plan table** – one tap to expand the slot-by-slot plan.
- **Six visual styles** – Modern, Glass, Neon, Minimal, Home Assistant native and Terminal, picked from a dropdown in the editor.
- **Visual editor** with every Predbat entity prefilled and a live entity check that shows which ones were found.
- No dependencies – no ApexCharts or other cards needed.
- Follows your Home Assistant theme (light and dark) and time format.
- Translations: English, Polski, Español.

## Requirements

- Home Assistant 2024.8 or newer.
- Predbat running and publishing its entities (default prefix `predbat`).
- The plan timeline, upcoming actions and table read the JSON plan in the `raw` attribute of `predbat.plan_html`. Use a recent Predbat release that publishes it.

Excluding Predbat entities from the recorder does not affect this card; it only reads their current state.

## Installation

### HACS (custom repository)

1. Open HACS → three dots (top right) → **Custom repositories**.
2. Add `https://github.com/mimikm/Predbat-Card` with type **Dashboard**.
3. Search for **Predbat Card**, download it, and reload the browser when asked.

### Manual

1. Download `predbat-card.js` from the [latest release](https://github.com/mimikm/Predbat-Card/releases/latest), or from the [`dist` folder](https://github.com/mimikm/Predbat-Card/tree/main/dist).
2. Copy it to `/config/www/predbat-card.js`.
3. Settings → Dashboards → three dots → **Resources** → add `/local/predbat-card.js` as a **JavaScript module**.

## Adding the card

Edit a dashboard → **Add card** → search for **Predbat Card**. With a standard Predbat install no configuration is needed:

```yaml
type: custom:predbat-card
```

Everything can be set in the visual editor. Open **Predbat entities** to see or change the entity used for each value; the entity check underneath lists anything that was not found.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `style` | `modern` | Visual style: `modern`, `glass`, `neon`, `minimal`, `native` or `terminal`. See [Styles](#styles). |
| `theme_mode` | `auto` | `auto` follows your Home Assistant theme, `light` or `dark` forces that look on this card whatever the theme. |
| `title` | `Predbat` | Card title. |
| `prefix` | `predbat` | Predbat entity prefix. Change it if you run more than one Predbat instance or changed `prefix` in `apps.yaml`. All default entities follow it. |
| `language` | `auto` | `auto` (follows Home Assistant), `en`, `pl` or `es`. |
| `show_header` | `true` | Status header. |
| `show_overview` | `true` | Overview tiles. |
| `show_chart` | `true` | Battery forecast chart. |
| `show_grid_chart` | `true` | Grid import & export chart. |
| `show_rates_chart` | `true` | Energy rates chart. |
| `show_data_quality` | `true` | Zero-load alarm: header chip, notice and the Data chart tab. |
| `data_quality_days` | `7` | Days of history to check, 1–7. |
| `data_quality_minutes` | `30` | How long the load total must stay flat before it's flagged (Predbat's default is 30). |
| `chart_layout` | `tabs` | `tabs` shows one chart at a time with a switcher; `stacked` shows all enabled charts one under another. |
| `font_scale` | `1` | Text size, from `0.8` to `1.6`. Charts grow a little with it. |
| `show_timeline` | `true` | Plan timeline ribbon. |
| `show_actions` | `true` | Upcoming actions list. |
| `show_table` | `true` | “Show full plan” button and table. |
| `show_base` | `true` | Baseline SoC line on the chart. |
| `show_rates` | `true` | Import rate line on the chart. |
| `hours` | `24` | How many hours ahead the chart, timeline and actions cover (4–48). |
| `max_actions` | `4` | Maximum number of upcoming actions. |
| `battery_capacity` | – | Battery size in kWh. Only needed if the card cannot read it from Predbat. |
| `currency` / `currency_minor` | from Predbat | Override the currency symbols, e.g. `€` and `c`. |
| `entities` | see below | Override any individual entity. |

### Entities

Defaults for the `predbat` prefix. Only add the ones you want to change.

| Key | Default entity | Used for |
| --- | --- | --- |
| `status` | `predbat.status` | Header status, last update, version, error banner |
| `plan` | `predbat.plan_html` | Timeline, upcoming actions, table, current rates |
| `mode` | `select.predbat_mode` | Mode shown in header |
| `soc_now` | `predbat.soc_kw_h0` | Current battery kWh |
| `soc_best` | `predbat.soc_kw_best` | Best-plan SoC forecast |
| `soc_base` | `predbat.soc_kw` | Baseline SoC forecast |
| `inverter_config` | `sensor.predbat_inverter_config` | Battery capacity |
| `hours_left` | `predbat.best_battery_hours_left` | Hours of battery left |
| `rates` | `predbat.rates` | Import rate line on chart |
| `rates_export` | `predbat.rates_export` | Fallback export rate |
| `cost_today` | `predbat.cost_today` | Cost today |
| `best_metric` | `predbat.best_metric` | Predicted cost with the Predbat plan |
| `base_metric` | `predbat.metric` | Predicted cost with the baseline plan (for saving today) |
| `savings` | `predbat.savings_yesterday_predbat` | Savings yesterday |
| `charge_start` / `charge_end` / `charge_limit` | `predbat.best_charge_*` | Next charge tile |
| `export_start` / `export_end` / `export_limit` | `predbat.best_export_*` | Next export tile |
| `export_energy` | `predbat.best_export_energy` | Grid chart – predicted export |
| `import_energy` | `predbat.best_import_energy` | Grid chart – predicted import |
| `load_today` | `predbat.load_energy_h0` | Zero-load alarm – daily load total (Predbat's copy of `load_today`) |
| `load_power` | `predbat.load_power` | Zero-load alarm – load power |

### Example

```yaml
type: custom:predbat-card
title: Battery plan
hours: 36
max_actions: 6
show_base: false
chart_layout: stacked
show_rates_chart: false
font_scale: 1.15
entities:
  savings: predbat.savings_yesterday_pvbat
```

### Full YAML with every option

If you'd rather not use the visual editor, paste this into a **Manual** card. These are the defaults, so the card looks exactly the same as `type: custom:predbat-card` on its own. Change what you need and delete the rest.

```yaml
type: custom:predbat-card

# Look
style: modern            # modern | glass | neon | minimal | native | terminal
theme_mode: auto         # auto | light | dark
font_scale: 1            # text size, 0.8 – 1.6
title: Predbat
language: auto           # auto | en | pl | es

# Sections
show_header: true
show_overview: true
show_timeline: true
show_actions: true
show_table: true

# Charts
show_chart: true         # battery forecast
show_grid_chart: true    # grid import & export
show_rates_chart: true   # energy rates
chart_layout: tabs       # tabs | stacked
show_base: true          # baseline line on the battery chart
show_rates: true         # import rate line on the battery chart

# Zero-load alarm
show_data_quality: true
data_quality_days: 7     # days of history to check, 1 – 7
data_quality_minutes: 30 # flag the load total when flat this long

# Time and limits
hours: 24                # hours ahead to show, 4 – 48
max_actions: 4           # upcoming actions to list, 1 – 12

# Optional – only if the card can't work these out
# battery_capacity: 19.0   # usable battery size in kWh
# currency: "£"
# currency_minor: "p"

# Predbat entity prefix (change if you renamed it in apps.yaml)
prefix: predbat

# Entities – defaults for the "predbat" prefix.
# You only need the ones you want to change; delete the rest.
entities:
  status: predbat.status
  plan: predbat.plan_html
  mode: select.predbat_mode
  soc_now: predbat.soc_kw_h0
  soc_best: predbat.soc_kw_best
  soc_base: predbat.soc_kw
  inverter_config: sensor.predbat_inverter_config
  hours_left: predbat.best_battery_hours_left
  rates: predbat.rates
  rates_export: predbat.rates_export
  cost_today: predbat.cost_today
  best_metric: predbat.best_metric
  base_metric: predbat.metric
  savings: predbat.savings_yesterday_predbat
  charge_start: predbat.best_charge_start
  charge_end: predbat.best_charge_end
  charge_limit: predbat.best_charge_limit
  export_start: predbat.best_export_start
  export_end: predbat.best_export_end
  export_limit: predbat.best_export_limit
  export_energy: predbat.best_export_energy
  import_energy: predbat.best_import_energy
  load_today: predbat.load_energy_h0
  load_power: predbat.load_power
```

## Styles

Pick a style in the visual editor, or set `style:` in YAML.

| Style | Look |
| --- | --- |
| `modern` | Default. Soft tiles, purple accent, follows your theme. |
| `glass` | Frosted translucent tiles over a soft colour gradient, rounded pill timeline. |
| `neon` | Always dark. Glowing cyan, magenta and lime lines on a grid background, monospace numbers. |
| `minimal` | No tile backgrounds, hairline dividers, light typography, thin timeline. |
| `native` | Matches built-in Home Assistant cards and uses your theme's primary, success and warning colours. |
| `terminal` | Always dark. Green phosphor retro LCD with scanlines, monospace text and dotted bars. |

```yaml
type: custom:predbat-card
style: glass
```

<details open>
<summary><b>All six styles – dark theme</b></summary>

![All six styles in a dark theme](https://github.com/mimikm/Predbat-Card/raw/main/images/styles-dark.png)

</details>

<details>
<summary><b>All six styles – light theme</b></summary>

![All six styles in a light theme](https://github.com/mimikm/Predbat-Card/raw/main/images/styles-light.png)

</details>

Top row: `modern`, `glass`, `neon`. Bottom row: `minimal`, `native`, `terminal`.

Every style follows your theme by default, except `neon` and `terminal`, which are dark unless you choose otherwise. Set `theme_mode: light` or `theme_mode: dark` (or **Light / dark** in the editor) to force either look on any style. `neon` and `terminal` each have their own light version: a pale grid, and a classic grey-green LCD.

## Zero-load alarm

![Zero-load alarm](https://github.com/mimikm/Predbat-Card/raw/main/images/data-quality.png)

Predbat builds its load forecast from your daily load total (`load_today`). If that total stops rising for a while even though the house was using power, usually because the inverter integration dropped out, Predbat logs *"Found N periods of zero load with power data"*. That warning only appears in Predbat's log, so the card runs the same check itself on Home Assistant history.

- **Header chip** – shows only when something was found in the last 24 hours: amber if Predbat could repair it, red if it couldn't. Tap it to open the details.
- **Notice** – lists each period with its time and length. **Filled by Predbat** means power data existed, so Predbat repaired the gap and nothing needs doing. **Not filled** means there was no power data either, so Predbat had to guess and your load forecast may be off.
- **Data tab** – one row per day, one square per half hour: grey is fine, amber was filled, red wasn't. Repeating patterns (the same time every night, say) usually point to something restarting.

By default the card reads Predbat's own copies of the two sensors, `predbat.load_energy_h0` and `predbat.load_power`. If you've excluded `predbat.*` from the recorder, point `load_today` and `load_power` at your inverter's sensors instead, which are also more accurate:

```yaml
entities:
  load_today: sensor.givtcp_XXXX_load_energy_today_kwh
  load_power: sensor.givtcp_XXXX_load_power
```

History is read once every 30 minutes. Short dips are ignored when the load was genuinely low, and the counts can differ slightly from Predbat's log because Predbat checks minute by minute. Turn it all off with `show_data_quality: false`.

## Saving today

The **Saving today** tile is a prediction. Predbat publishes two cost forecasts from midnight onwards: one for its own plan (`predbat.best_metric`) and one for the baseline, where the battery is left to run with no changes (`predbat.metric`). The card reads both at midnight tonight; the difference is what Predbat expects to save you today. The tile also shows yesterday's actual saving from `predbat.savings_yesterday_predbat`.

Yesterday's figure uses a different baseline (one cheap charge per night), so the two numbers aren't directly comparable. If the forecast isn't available, the tile shows yesterday's saving instead, as before.

## Plan states

| Colour | State | Predbat plan state |
| --- | --- | --- |
| Green | Charge | `Chrg` |
| Blue | Hold | `HoldChrg` |
| Mint | Freeze charge | `FrzChrg` |
| Orange | Export | `Exp` |
| Yellow | Freeze export | `FrzExp` |
| Light orange | Hold export | `HoldExp` |
| Grey | Demand | `Demand` |

## Troubleshooting

- **“No plan data yet”** – check that `predbat.plan_html` exists and has a `raw` attribute in Developer tools → States. Update Predbat if it doesn’t.
- **Battery % shows “–”** – set `battery_capacity` to your usable capacity in kWh.
- **Wrong entity names** – open the visual editor; the entity check lists every entity it could not find. Set `prefix` or override the entity.
- **Card not found after installing** – clear the browser cache or reload the app.
- **“Configuration error” or “Custom element doesn't exist” in the Companion app** – the app is still using an old copy of the card. In the app go to **Settings → Companion app** and use **Reset frontend cache** (on iOS it's under **Debugging**), then close and reopen the app.
- **The card shows a red “Predbat Card v… :” message** – something unexpected happened while drawing the card. Open **Details for a bug report** under the message and paste it into a [GitHub issue](https://github.com/mimikm/Predbat-Card/issues).
- **Data tab says “No history for …”** – the load sensors aren't recorded. Set `load_today` and `load_power` to your inverter's sensors (see [Zero-load alarm](#zero-load-alarm)).
- **“N Predbat entities not found”** – tap the notice to see which ones. Check the names in the editor's entity check, or set `prefix` if you changed it in Predbat.

## Roadmap

Predbat Card is **view-only**: it shows what Predbat is doing and planning, and never changes Predbat's settings or plan. That won't change.

This is the plan for Predbat Card up to v1.0. It will change as people try the card and ask for things, so treat versions and order as a guide, not a promise.

Want something added or moved up? [Open an issue](https://github.com/mimikm/Predbat-Card/issues) or 👍 an existing one.

### ✅ Done

| Version | Highlights |
| --- | --- |
| 0.1.0 | First release: status header, overview tiles, battery forecast chart, plan timeline, upcoming actions, plan table, visual editor with prefilled entities, EN/PL/ES |
| 0.2.0 | Six styles: Modern, Glass, Neon, Minimal, Native, Terminal |
| 0.2.1 | Force light or dark mode, light versions of Neon and Terminal, predicted saving today, forecast cost today |
| 0.2.2 | Grid import & export chart, energy rates chart, charts as tabs or stacked, text size slider |
| 0.3.0 | Mobile and reliability: errors shown inside the card instead of breaking it, tolerant YAML, missing-entity notice, phone and tablet layout, tap-to-inspect charts on touch screens, only changed parts redraw, fully view-only header, fallbacks for older iOS and Android |
| 0.3.1 | Zero-load alarm: header chip, notice with recent periods and a 7-day data-quality view |

### 🔜 0.4 – More of Predbat's data

- [ ] Solar forecast chart (today, tomorrow, 10% and 90% range)
- [ ] House load forecast on the grid chart
- [ ] Car charging schedule: Predbat's planned car charging slots, times and cost
- [ ] Car battery SoC: current level and predicted level at the end of the plan
- [ ] iBoost / solar diverter slots
- [ ] Carbon intensity (optional)
- [ ] Per-inverter breakdown for multi-inverter setups

### 0.5 – Savings and history

- [ ] Savings history chart (daily and running total)
- [ ] Cost today vs yesterday
- [ ] Week and month summaries

### 0.6 – Customisation

- [ ] Choose which overview tiles to show, and in what order
- [ ] Reorder sections
- [ ] Custom accent colour
- [ ] Compact mode: a small card with battery, now, next action and saving
- [ ] More translations (German, French, Dutch – volunteers welcome)

### 🎯 1.0 – Stable release

- [ ] Configuration options locked in (no breaking changes after 1.0)
- [ ] Automated tests for plan parsing and the editor
- [ ] Full documentation with screenshots for every style
- [ ] Link in the Predbat documentation
- [ ] Submitted to the HACS default store

### 💡 Ideas we're considering

Not planned yet. Comment on an issue if you'd use one of these.

- Weather alongside the plan
- Notifications or a banner when Predbat's plan changes a lot
- A separate small "badge" card for the dashboard header
- Tariff comparison view

## Contributing

Issues and pull requests are welcome, including new translations. Translations live in the `TRANSLATIONS` object at the top of `dist/predbat-card.js`; copy the `en` block, translate it and open a PR.

## Credits

<table>
<tr>
<td>🦇</td>
<td>

**This card exists because of [Predbat](https://github.com/springfall2008/batpred), created and maintained by Trefor Southwell ([@springfall2008](https://github.com/springfall2008)).**

Predbat does all the clever work: it predicts your house load, solar and tariff rates, then plans when to charge, hold and export your battery to save money. This card only shows what Predbat has already worked out. Thank you, Trefor, and everyone who contributes to Predbat and its documentation.

- 📖 [Predbat documentation](https://springfall2008.github.io/batpred/)
- 💬 [Predbat on GitHub](https://github.com/springfall2008/batpred)
- 🍺 Support Predbat: [GitHub Sponsors](https://github.com/sponsors/springfall2008) · [PayPal](https://paypal.me/predbat)

</td>
</tr>
</table>

Predbat Card is an independent community project. It is not part of Predbat and is not endorsed by its author. Please report card problems here, not on the Predbat repository.

Card made by [@mimikm](https://github.com/mimikm). If you find it useful you can [buy me a coffee](https://buymeacoffee.com/mimikm) ☕

## License

[MIT](LICENSE)
