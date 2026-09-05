# TaxSaleAlert

Sellable static landing for BC municipal tax-sale buyers ahead of **Mon Sep 28, 2026**.

Dark, mobile-first, zero-backend. Honest educational marketing for principal buyers.

## Preview

```bash
cd /workspace/bag/apps/tax-sale-alert
python3 -m http.server 4191
```

Open http://127.0.0.1:4191/ and http://127.0.0.1:4191/checklist.html

## Deploy

Any static host: upload this folder (no build).

- **Vercel / Netlify / Cloudflare Pages:** root = this folder, Framework Preset Other, empty build, output `.`
- **GitHub Pages:** push repo, enable Pages on `/` or `/docs`

## Config

Edit `config.js`:

- `playbookUrl` / `scoutUrl` / `dealDeskUrl` / `storeUrl`
- `saleDateISO` / `saleDateLabel` for countdown

## Product constraints

- Urgency around Mon Sep 28, 2026 (last Monday of September, 10:00 a.m. chambers)
- Upset = arrears + fees; 1-year redemption; buy as principal
- Not legal advice; no wholesaling coaching; do not invent parcel lists

See `STATUS.md` for live checkout URLs and ship status.
