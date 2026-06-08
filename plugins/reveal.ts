/**
 * v-reveal — reveals an already-visible element on scroll-in.
 *
 * Registered universally so SSR can resolve the directive, but all browser
 * work happens in `mounted` (client only). The base [data-reveal] hidden
 * state is added here at runtime, so server HTML / no-JS / headless renderers
 * still show content. Binding value = stagger delay in ms, e.g. v-reveal="120".
 */
export default defineNuxtPlugin((nuxtApp) => {
  const isClient = typeof window !== "undefined";

  const reduced =
    isClient && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const io =
    isClient && typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver(
          (entries, obs) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-in");
                obs.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        )
      : null;

  nuxtApp.vueApp.directive("reveal", {
    // no-op on the server; presence prevents the SSR resolve crash
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding) {
      if (typeof binding.value === "number") {
        el.style.setProperty("--reveal-delay", `${binding.value}ms`);
      }
      if (reduced || !io) {
        el.classList.add("is-in");
        return;
      }
      // Already in view on first paint (above the fold): show it without the
      // hidden state so there's no flash. Only animate what scrolls in.
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh * 0.92 && rect.bottom > 0) {
        el.classList.add("is-in");
        return;
      }
      el.setAttribute("data-reveal", "");
      io.observe(el);
    },
    unmounted(el: HTMLElement) {
      io?.unobserve(el);
    },
  });
});
