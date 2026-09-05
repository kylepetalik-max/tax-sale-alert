/**
 * TaxSaleAlert — payment & CTA config
 * Edit URLs here; no rebuild needed for plain static hosting.
 * Optional: set window.__TAX_SALE_ALERT__ before this script loads (merged in).
 */
window.__TAX_SALE_ALERT__ = Object.assign(
  {
    saleDateISO: "2026-09-28",
    saleDateLabel: "Mon Sep 28, 2026 · 10:00 a.m.",

    playbookUrl: "https://whop.com/checkout/plan_iAXEC2zlTtU7I",
    playbookLabel: "Get Playbook — $47",

    scoutUrl: "https://whop.com/checkout/plan_ibS6a18RbaJ65",
    scoutLabel: "Get Scout — $29",

    dealDeskUrl: "https://whop.com/checkout/plan_H0wXOBVSESjmb",
    dealDeskLabel: "Get Deal Desk — $67",

    storeUrl: "https://whop.com/boltorium-deals",
    storeLabel: "Browse Boltorium store",
  },
  window.__TAX_SALE_ALERT__ || {}
);
