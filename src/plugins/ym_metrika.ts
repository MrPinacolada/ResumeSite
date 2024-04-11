export default function yandexMetrika() {
  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) {
        return;
      }
    }
    (k = e.createElement(t)),
      (a = e.getElementsByTagName(t)[0]),
      (k.async = 1),
      (k.src = r),
      a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(97004677, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  });

  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.src = "https://mc.yandex.ru/watch/96428273";
  img.style.position = "absolute";
  img.style.left = "-9999px";
  img.alt = "";
  noscript.appendChild(img);
  document.body.appendChild(noscript);
}
yandexMetrika();
