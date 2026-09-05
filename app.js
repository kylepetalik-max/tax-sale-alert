(function () {
  var cfg = window.__TAX_SALE_ALERT__ || {};

  function wire(id, url, label) {
    var el = document.getElementById(id);
    if (!el) return;
    if (url && String(url).trim()) {
      el.href = url;
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("hidden");
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      if (label) el.textContent = label;
    } else if (label) {
      el.textContent = label;
    }
  }

  wire("cta-playbook", cfg.playbookUrl, cfg.playbookLabel);
  wire("cta-playbook-2", cfg.playbookUrl, cfg.playbookLabel);
  wire("cta-playbook-hero", cfg.playbookUrl, cfg.playbookLabel);
  wire("cta-scout", cfg.scoutUrl, cfg.scoutLabel);
  wire("cta-scout-2", cfg.scoutUrl, cfg.scoutLabel);
  wire("cta-dealdesk", cfg.dealDeskUrl, cfg.dealDeskLabel);
  wire("cta-dealdesk-2", cfg.dealDeskUrl, cfg.dealDeskLabel);
  wire("cta-store", cfg.storeUrl, cfg.storeLabel);
  wire("cta-store-2", cfg.storeUrl, cfg.storeLabel);
  wire("cta-store-foot", cfg.storeUrl, cfg.storeLabel);

  var pill = document.getElementById("sale-pill");
  if (pill && cfg.saleDateLabel) {
    pill.textContent = cfg.saleDateLabel.split("\u00b7")[0].trim();
  }

  var saleISO = cfg.saleDateISO || "2026-09-28";
  var saleMs = Date.parse(saleISO + "T10:00:00-07:00");
  var outEl = document.getElementById("countdown-value");

  function tick() {
    if (!outEl || !saleMs) return;
    var diff = saleMs - Date.now();
    if (diff <= 0) {
      outEl.textContent = "SALE DAY — be in chambers";
      return;
    }
    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var mins = Math.floor((diff % 3600000) / 60000);
    outEl.textContent = days + "d " + hours + "h " + mins + "m to gavel";
  }

  tick();
  setInterval(tick, 30000);
})();
