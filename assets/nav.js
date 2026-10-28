(function () {
  function inject() {
    var btn = document.createElement("a");
    btn.href = "/menu.html";
    btn.textContent = "🏠 Menú principal";
    btn.style.cssText =
      "position:fixed;top:16px;left:16px;z-index:99999;background:rgba(0,0,0,.65);" +
      "color:#fff;padding:10px 16px;border-radius:999px;font:600 14px system-ui,sans-serif;" +
      "text-decoration:none;backdrop-filter:blur(6px);box-shadow:0 4px 14px rgba(0,0,0,.35);" +
      "transition:transform .2s ease,background .2s ease;";
    btn.addEventListener("mouseenter", function () {
      btn.style.background = "rgba(240,110,196,.85)";
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.background = "rgba(0,0,0,.65)";
      btn.style.transform = "scale(1)";
    });
    document.body.appendChild(btn);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
