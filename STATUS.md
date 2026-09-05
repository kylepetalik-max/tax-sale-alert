# TaxSaleAlert — STATUS

**Updated:** Fri Sep 4, 2026 (PT)  
**Path:** `/workspace/bag/apps/tax-sale-alert/`  
**State:** Complete static sales landing — ready to host 24/7.

## What shipped

- Dark, mobile-first landing (`index.html`) + free checklist (`checklist.html` / `public/checklist.md`)
- Honest copy: educational, principal buyers only, 1-year redemption, upset = arrears+fees, no wholesaling promises, no invented parcel lists
- Clear Whop CTAs for all SKUs (wired via `config.js` + `app.js`)
- Countdown to Mon Sep 28, 2026 · 10:00 a.m. PT

## Checkout URLs (live in config)

| Product | Price | Checkout |
|---------|-------|----------|
| Playbook | $47 | https://whop.com/checkout/plan_iAXEC2zlTtU7I |
| Scout | $29 | https://whop.com/checkout/plan_ibS6a18RbaJ65 |
| Deal Desk | $67 | https://whop.com/checkout/plan_H0wXOBVSESjmb |
| Store | — | https://whop.com/boltorium-deals |

## Hosting

Static files only — no backend.

**Published (if this line was filled by deploy):** see bottom of this file / README.

**Manual options (no Kyle credentials needed beyond a free account):**

1. **Cloudflare Pages / Netlify / Vercel** — drag-drop this folder, or connect a Git repo; Framework = Other / static; output = `.`
2. **GitHub Pages** — push folder to a public repo `docs/` or `/` and enable Pages
3. **Local preview:** `cd /workspace/bag/apps/tax-sale-alert && python3 -m http.server 4191` → http://127.0.0.1:4191/

## Files

- `index.html` — landing + product grid CTAs
- `checklist.html` — HTML checklist + upsell CTAs
- `styles.css` — dark theme, mobile
- `config.js` — all payment / store URLs (edit here)
- `app.js` — countdown + CTA wiring
- `public/checklist.md` — downloadable checklist
- `STATUS.md` — this file

## Intent

Drive Playbook / Scout / Deal Desk sales 24/7 ahead of the Sep 28, 2026 BC municipal tax-sale window.
