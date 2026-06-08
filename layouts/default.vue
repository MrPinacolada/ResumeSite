<template>
  <div class="shell">
    <header class="masthead">
      <div class="masthead__inner">
        <nuxt-link v-if="!isHome" to="/" class="masthead__back">
          <base-icon
            name="ArrowDown"
            rot="90deg"
            color="var(--c-accent-bright)"
            size="16px"
          />
          <span>Back</span>
        </nuxt-link>
        <nuxt-link v-else to="/" class="masthead__brand" aria-label="NinjaDev — home">
          <span class="masthead__mark" aria-hidden="true">◤</span>
          NINJA<span>DEV</span>
        </nuxt-link>

        <HeaderDinoRunner v-if="isHome" class="masthead__dino" aria-hidden="true" />

        <nav v-if="isHome" class="masthead__nav" aria-label="Sections">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a
            class="masthead__cv"
            href="/senior_dev.pdf"
            target="_blank"
            rel="noopener"
          >
            CV
            <base-icon name="ArrowDown" color="#fff" size="14px" />
          </a>
        </nav>
      </div>
    </header>

    <main class="stage">
      <NuxtPage />
    </main>

    <footer class="colophon">
      <span class="mono-label">© {{ year }} Vasilii Skovorodin</span>
      <div class="colophon__icons">
        <a
          v-for="icon in footerIcons"
          :key="icon.icon"
          :href="icon.link"
          target="_blank"
          rel="noopener"
          :aria-label="icon.label"
        >
          <base-icon :name="icon.icon" filled size="22px" />
        </a>
      </div>
      <span class="mono-label">Lead Frontend Engineer · Built with Nuxt</span>
    </footer>

    <Transition name="loader-fade">
      <base-loader v-if="loader" />
    </Transition>

    <client-only>
      <div class="spider-box" aria-hidden="true">
        <amazing-spider
          v-if="!$device.isMobile"
          background_color="transparent"
          dots_border_color="rgba(45, 110, 225, 0.32)"
        />
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import amazingSpider from "amazing__spider";
import HeaderDinoRunner from "~/components/base/HeaderDinoRunner.vue";

const route = useRoute();

const isHome = computed(() => route.name === "index");
const year = new Date().getFullYear();

const footerIcons = [
  { icon: "telegram", link: "https://t.me/Nkanka44", label: "Telegram" },
  { icon: "google", link: "mailto:vasiasko112@gmail.com", label: "Email" },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mr-pinacolada/",
    label: "LinkedIn",
  },
];

// Content is always rendered (SSR-friendly); the loader is just a brief
// brand curtain that fades out on the client.
const loader = ref(true);

onMounted(() => {
  setTimeout(() => {
    loader.value = false;
  }, 650);
});
</script>

<style lang="scss">
.shell {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

/* ── Masthead ─────────────────────────────────────────────── */
.masthead {
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  background: var(--c-ink);
  color: var(--c-paper);
  border-bottom: 1px solid var(--c-paper-line);

  &__inner {
    height: 64px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 4vw, 2.5rem);
    display: flex;
    align-items: center;
    gap: clamp(1rem, 3vw, 2rem);
  }

  &__brand {
    font-weight: 800;
    font-size: 1.05rem;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: var(--c-paper);
    display: inline-flex;
    align-items: center;
    gap: 0.5ch;
    white-space: nowrap;
    span {
      color: var(--c-accent-bright);
    }
  }

  &__mark {
    color: var(--c-accent-bright);
    font-size: 0.9em;
    transform: translateY(-1px);
  }

  &__back {
    @include drop-button-styles;
    display: inline-flex;
    align-items: center;
    gap: 0.5ch;
    color: var(--c-paper);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    &:hover {
      color: var(--c-accent-bright);
    }
  }

  &__dino {
    flex: 1;
    min-width: 0;
    max-width: 360px;
    height: 40px;
    margin-inline: auto;
    color: var(--c-paper-line-strong);
    @media (max-width: 56rem) {
      display: none;
    }
  }

  &__nav {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: clamp(0.9rem, 2vw, 1.6rem);
    font-family: "Roboto Mono", ui-monospace, monospace;
    font-size: 0.82rem;
    letter-spacing: 0.04em;

    a {
      text-decoration: none;
      color: var(--c-paper);
      opacity: 0.78;
      padding: 0.7rem 0.3rem;
      transition: opacity 0.2s var(--ease-out-quart);
      &:hover {
        opacity: 1;
      }
    }
    a:not(.masthead__cv) {
      @media (max-width: 40rem) {
        display: none;
      }
    }
  }

  &__cv {
    display: inline-flex;
    align-items: center;
    gap: 0.4ch;
    padding: 0.6rem 1rem;
    background: var(--c-accent);
    color: #fff !important;
    opacity: 1 !important;
    font-weight: 600;
    border-radius: 2px;
    &:hover {
      background: var(--c-accent-bright);
    }
  }
}

/* ── Stage / footer ───────────────────────────────────────── */
.stage {
  position: relative;
  z-index: var(--z-content);
  flex: 1;
}

.colophon {
  position: relative;
  z-index: var(--z-content);
  background: var(--c-ink);
  color: var(--c-paper);
  padding: clamp(1.5rem, 4vw, 2rem) clamp(1rem, 4vw, 2.5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  .mono-label {
    opacity: 0.6;
  }

  &__icons {
    display: flex;
    gap: 0.6rem;
    a {
      display: inline-flex;
      padding: 0.5rem;
      color: var(--c-paper);
      transition: color 0.25s var(--ease-out-quart), transform 0.25s var(--ease-out-quart);
      &:hover {
        color: var(--c-accent-bright);
        transform: translateY(-3px);
      }
    }
  }
}

/* ── Background particle web ──────────────────────────────── */
.spider-box {
  position: fixed;
  inset: 0;
  z-index: var(--z-bg);
  pointer-events: none;
  overflow: hidden;
  opacity: 0.5;
  /* isolate the constantly-repainting particle canvas on its own GPU layer
     so it can't trigger repaints of the scrolling content above it */
  transform: translateZ(0);
  contain: layout paint;
  canvas {
    width: 100vw;
    height: 100vh;
  }
}

/* Loader curtain lift */
.loader-fade-leave-active {
  transition: opacity 0.5s var(--ease-out-quart);
}
.loader-fade-leave-to {
  opacity: 0;
}
</style>
