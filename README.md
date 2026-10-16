# Predbat Card

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz/docs/faq/custom_repositories)
[![GitHub release](https://img.shields.io/github/v/release/mimikm/Predbat-Card)](https://github.com/mimikm/Predbat-Card/releases)
[![Validate](https://github.com/mimikm/Predbat-Card/actions/workflows/validate.yaml/badge.svg)](https://github.com/mimikm/Predbat-Card/actions/workflows/validate.yaml)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-FFDD00?logo=buymeacoffee&logoColor=000)](https://buymeacoffee.com/mimikm)

A Home Assistant Lovelace card that shows what [Predbat](https://github.com/springfall2008/batpred) is doing and what it plans to do next, at a glance.

![Predbat Card preview](https://github.com/mimikm/Predbat-Card/raw/main/images/preview-dark.png)

## Features

- **Status header** – current Predbat status, mode, last update and version. Tap to open more-info.
- **Overview tiles** – battery SoC ring, what the battery is doing now with current import/export rates, cost today and plan total, savings yesterday, next charge and next export windows.
- **Battery forecast chart** – the best-plan SoC over the next hours, the baseline for comparison, the import rate as a step line, reserve level and shaded charge/export windows. Hover or tap for details.
- **Plan timeline** – a colour-coded ribbon of every plan slot (charge, hold, freeze, export, demand).
- **Upcoming actions** – the next forced charge/export windows merged into readable blocks with average rate and the SoC they end at.
- **Full plan table** – one tap to expand the slot-by-slot plan.
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

1. Download `predbat-card.js` from the [latest release](https://github.com/mimikm/Predbat-Card/releases).
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
| `title` | `Predbat` | Card title. |
| `prefix` | `predbat` | Predbat entity prefix. Change it if you run more than one Predbat instance or changed `prefix` in `apps.yaml`. All default entities follow it. |
| `language` | `auto` | `auto` (follows Home Assistant), `en`, `pl` or `es`. |
| `show_header` | `true` | Status header. |
| `show_overview` | `true` | Overview tiles. |
| `show_chart` | `true` | Battery forecast chart. |
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
| `mode` | `select.predbat_mode` | Mode shown in header (tap to change) |
| `soc_now` | `predbat.soc_kw_h0` | Current battery kWh |
| `soc_best` | `predbat.soc_kw_best` | Best-plan SoC forecast |
| `soc_base` | `predbat.soc_kw` | Baseline SoC forecast |
| `inverter_config` | `sensor.predbat_inverter_config` | Battery capacity |
| `hours_left` | `predbat.best_battery_hours_left` | Hours of battery left |
| `rates` | `predbat.rates` | Import rate line on chart |
| `rates_export` | `predbat.rates_export` | Fallback export rate |
| `cost_today` | `predbat.cost_today` | Cost today |
| `best_metric` | `predbat.best_metric` | Predicted plan total |
| `savings` | `predbat.savings_yesterday_predbat` | Savings yesterday |
| `charge_start` / `charge_end` / `charge_limit` | `predbat.best_charge_*` | Next charge tile |
| `export_start` / `export_end` / `export_limit` | `predbat.best_export_*` | Next export tile |

### Example

```yaml
type: custom:predbat-card
title: Battery plan
hours: 36
max_actions: 6
show_base: false
entities:
  savings: predbat.savings_yesterday_pvbat
```

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

## Contributing

Issues and pull requests are welcome, including new translations. Translations live in the `TRANSLATIONS` object at the top of `dist/predbat-card.js`; copy the `en` block, translate it and open a PR.

## Credits

Built for the [Predbat](https://github.com/springfall2008/batpred) community. Predbat is created by @springfall2008. This card is an independent project and is not affiliated with Predbat.

If this card is useful to you, you can [buy me a coffee](https://buymeacoffee.com/mimikm).

## License

[MIT](LICENSE)
