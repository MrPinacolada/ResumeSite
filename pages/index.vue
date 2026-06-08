<template>
  <div class="home">
    <!-- ─────────────────────────────  HERO  ───────────────────────────── -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="wrap hero__wrap">
        <p class="hero__eyebrow mono-label">
          <span class="hero__mark">◤</span> Lead Frontend Engineer · 5+ years · FinTech &amp; Web3
        </p>

        <h1 id="hero-title" class="hero__title">
          <span class="hero__line">VASILII</span>
          <span class="hero__line hero__line--accent">SKOVORODIN</span>
        </h1>

        <p class="hero__lead">
          I build and scale SaaS products with Vue, Nuxt, React, and Next.
          I own the frontend end to end: architecture, performance, SSR/SEO,
          CI/CD, and the quality bar, and I mentor the team that ships it.
        </p>

        <div class="hero__cta">
          <a href="#experience" class="btn btn--solid">
            See experience
            <base-icon name="ArrowDown" color="#fff" size="16px" />
          </a>
          <a
            href="/senior_dev.pdf"
            target="_blank"
            rel="noopener"
            class="btn btn--ghost"
          >
            Download CV
          </a>
        </div>

        <ul class="hero__meta mono-label" aria-label="At a glance">
          <li>5+ years</li>
          <li>Team lead &amp; mentor</li>
          <li>Vue · Nuxt · React · Next</li>
          <li>Owns CI/CD &amp; DevOps</li>
        </ul>
      </div>

      <a href="#impact" class="hero__scroll mono-label" aria-label="Scroll down">
        <span>Scroll</span>
        <span class="hero__scroll-line" aria-hidden="true"></span>
      </a>
    </section>

    <!-- ────────────────────────────  IMPACT  ──────────────────────────── -->
    <section id="impact" class="impact" aria-labelledby="impact-title">
      <div class="wrap">
        <h2 id="impact-title" class="impact__title" v-reveal>
          Measurable results, not just commits.
        </h2>
        <div class="impact__grid">
          <div
            v-for="(m, i) in impact"
            :key="m.label"
            class="stat"
            v-reveal="i * 60"
          >
            <span class="stat__fig">{{ m.fig }}</span>
            <span class="stat__label">{{ m.label }}</span>
            <span class="stat__sub mono-label">{{ m.sub }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────  ABOUT  ──────────────────────────── -->
    <section id="about" class="about" aria-labelledby="about-title">
      <div class="wrap about__wrap">
        <div class="about__head">
          <p class="section-tag" v-reveal>
            <span class="section-tag__num">01</span>
            <span>About</span>
          </p>
          <h2 id="about-title" class="section-title about__title" v-reveal="80">
            I lead frontend teams and own delivery end to end.
          </h2>
        </div>

        <div class="about__body">
          <div class="about__prose">
            <p v-reveal="60">
              I am a lead frontend engineer with 5+ years building and scaling
              SaaS products, mostly in FinTech and Web3. I own the frontend end
              to end: architecture, performance, SSR and SEO, CI/CD, and the
              quality standards the team works to.
            </p>
            <p v-reveal="140">
              Most recently I lead frontend at SwitchCase, where I built a
              platform from scratch on Nuxt 3 and TypeScript, took it to 90+
              Lighthouse in production, and cut the release cycle from 20 minutes
              to 3 with a GitHub Actions and Coolify pipeline. Before that I ran
              a Vue 2 to Vue 3 migration with zero downtime and a legacy refactor
              that dropped the bundle 40% and lifted engagement 22%.
            </p>
            <p v-reveal="220">
              I care about the things that keep a team fast: a real component
              library, 50+ code reviews, regression coverage that went from 15%
              to 70%, and mentoring engineers so the bar holds without me. I
              treat security-minded UX as a feature, not a chore: payments,
              wallets, TonConnect. Off the clock, snowboarding, climbing, and a
              couple of snakes.
            </p>
          </div>

          <aside class="dossier" v-reveal="120" aria-label="Quick facts">
            <dl>
              <div v-for="fact in factoids" :key="fact.k" class="dossier__row">
                <dt class="mono-label">{{ fact.k }}</dt>
                <dd>{{ fact.v }}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────  STACK  ──────────────────────────── -->
    <section id="stack" class="stack" aria-labelledby="stack-title">
      <div class="marquee" aria-hidden="true">
        <div class="marquee__track">
          <span v-for="(w, i) in [...marquee, ...marquee]" :key="i">
            {{ w }} <i>✦</i>
          </span>
        </div>
      </div>

      <div class="wrap stack__wrap">
        <div class="stack__head">
          <p class="section-tag" v-reveal>
            <span class="section-tag__num">02</span>
            <span>Stack</span>
          </p>
          <h2 id="stack-title" class="section-title" v-reveal="80">
            Vue and Nuxt, React and Next, shipped with DevOps.
          </h2>
        </div>

        <div class="stack__grid" v-reveal="60">
          <div
            v-for="(t, i) in stackIcons"
            :key="t.label"
            class="chip"
            :style="{ '--reveal-delay': i * 28 + 'ms' }"
          >
            <base-icon :name="t.icon" filled size="32px" />
            <span>{{ t.label }}</span>
          </div>
        </div>

        <dl class="stack__groups">
          <div
            v-for="(g, i) in skillGroups"
            :key="g.k"
            class="stack__group"
            v-reveal="i * 70"
          >
            <dt class="mono-label">{{ g.k }}</dt>
            <dd>{{ g.v }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ──────────────────────────  EXPERIENCE  ─────────────────────────── -->
    <section id="experience" class="exp" aria-labelledby="exp-title">
      <div class="wrap exp__wrap">
        <div class="exp__head">
          <p class="section-tag section-tag--invert" v-reveal>
            <span class="section-tag__num">03</span>
            <span>Experience</span>
          </p>
          <h2 id="exp-title" class="section-title exp__title" v-reveal="80">
            Where I have led and shipped.
          </h2>
        </div>

        <ol class="exp__list">
          <li
            v-for="(role, i) in experience"
            :key="role.company"
            class="exp-row"
            v-reveal="i * 60"
          >
            <span class="exp-row__num mono-label">{{ pad(i + 1) }}</span>

            <div class="exp-row__body">
              <h3 class="exp-row__role">{{ role.title }}</h3>
              <p class="exp-row__meta mono-label">
                <span class="exp-row__company">{{ role.company }}</span>
                <span>{{ role.place }}</span>
                <span>{{ role.dates }}</span>
              </p>
              <ul class="exp-row__points">
                <li v-for="pt in role.points" :key="pt">{{ pt }}</li>
              </ul>
              <span class="exp-row__tags">
                <span v-for="tag in role.tags" :key="tag" class="tag">{{
                  tag
                }}</span>
              </span>
            </div>

            <span class="exp-row__thumb">
              <img
                v-if="role.img"
                :src="role.img"
                :alt="role.alt"
                loading="lazy"
                decoding="async"
              />
              <span v-else class="exp-row__monogram" aria-hidden="true">{{
                role.initial
              }}</span>
            </span>
          </li>
        </ol>
        <p class="exp__note mono-label">
          Some contracts overlapped (parallel part-time). Full history in the CV.
        </p>
      </div>
    </section>

    <!-- ────────────────────────────  PROJECTS  ────────────────────────── -->
    <section id="projects" class="proj" aria-labelledby="proj-title">
      <div class="wrap proj__wrap">
        <div class="proj__head">
          <p class="section-tag section-tag--invert" v-reveal>
            <span class="section-tag__num">04</span>
            <span>Projects</span>
          </p>
          <h2 id="proj-title" class="section-title proj__title" v-reveal="80">
            Products I build on my own.
          </h2>
        </div>

        <ol class="proj__list">
          <li
            v-for="(p, i) in projects"
            :key="p.title"
            class="proj-row"
            v-reveal="i * 70"
          >
            <a
              :href="p.link"
              target="_blank"
              rel="noopener"
              class="proj-row__link"
            >
              <span class="proj-row__num mono-label">{{ pad(i + 1) }}</span>

              <span class="proj-row__body">
                <span class="proj-row__title">{{ p.title }}</span>
                <span class="proj-row__desc">{{ p.desc }}</span>
                <span class="proj-row__tags">
                  <span v-for="tag in p.tags" :key="tag" class="tag">{{
                    tag
                  }}</span>
                </span>
              </span>

              <span class="proj-row__thumb">
                <img
                  :src="p.img"
                  :alt="p.alt"
                  loading="lazy"
                  decoding="async"
                />
              </span>

              <span class="proj-row__cta mono-label">
                Visit
                <base-icon
                  name="ArrowDown"
                  rot="-90deg"
                  color="var(--c-accent-bright)"
                  size="20px"
                />
              </span>
            </a>
          </li>
        </ol>
      </div>
    </section>

    <!-- ────────────────────────────  CONTACT  ─────────────────────────── -->
    <section id="contact" class="contact" aria-labelledby="contact-title">
      <div class="wrap contact__wrap">
        <p class="section-tag section-tag--invert" v-reveal>
          <span class="section-tag__num">05</span>
          <span>Contact</span>
        </p>
        <h2 id="contact-title" class="contact__title" v-reveal="60">
          Hiring a frontend lead? Let's talk.
        </h2>
        <p class="contact__lead" v-reveal="140">
          Open to lead and senior frontend roles, especially in FinTech, Web3,
          and data-heavy SaaS. The fastest way to reach me is Telegram.
        </p>

        <ul class="contact__links">
          <li v-for="(c, i) in channels" :key="c.label" v-reveal="i * 70">
            <a :href="c.href" target="_blank" rel="noopener">
              <span class="mono-label">{{ c.label }}</span>
              <span class="contact__handle">{{ c.handle }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import switchcaseImg from "~/assets/img/tokenizer.png";
import gentlyxImg from "~/assets/img/gentlyx-og-width-new.png";
import uitImg from "~/assets/img/2uit.png";
import buzzImg from "~/assets/img/buzz.png";
import vpiskaImg from "~/assets/img/vpiska.webp";
import koychImg from "~/assets/img/koych.png";

definePageMeta({ layout: "default" });

const pad = (n: number) => String(n).padStart(2, "0");

const impact = [
  { fig: "90+", label: "Lighthouse in production", sub: "SSR/SEO + performance" },
  { fig: "20→3 min", label: "Release cycle", sub: "GitHub Actions + Coolify" },
  { fig: "−40%", label: "Bundle size", sub: "legacy refactor" },
  { fig: "+22%", label: "Engagement on key flows", sub: "after refactor" },
  { fig: "15→70%", label: "Test coverage", sub: "Cypress regression" },
  { fig: "+60%", label: "Load performance", sub: "data-heavy UI" },
];

const factoids = [
  { k: "Role", v: "Lead / Senior Frontend Engineer" },
  { k: "Experience", v: "5+ years, FinTech · Web3 · SaaS" },
  { k: "Owns", v: "Architecture · Performance · CI/CD · Quality" },
  { k: "Core stack", v: "Vue · Nuxt · React · Next · TypeScript" },
  { k: "Work", v: "Remote, distributed global teams" },
  { k: "Education", v: "BSc Microprocessor Electronics, Kostroma" },
  { k: "Languages", v: "EN (professional) · RU (native) · ES (basic)" },
];

const marquee = [
  "VUE",
  "NUXT",
  "REACT",
  "NEXT",
  "TYPESCRIPT",
  "SSR / SEO",
  "CI/CD",
  "DOCKER",
  "PERFORMANCE",
  "DESIGN SYSTEMS",
];

const stackIcons = [
  { icon: "vue-vuejs", label: "Vue 2/3" },
  { icon: "nuxt", label: "Nuxt 3/4" },
  { icon: "reactts", label: "React" },
  { icon: "next", label: "Next.js" },
  { icon: "typescript", label: "TypeScript" },
  { icon: "tailwind", label: "Tailwind" },
  { icon: "sass", label: "SCSS" },
  { icon: "node", label: "Node.js" },
  { icon: "vite", label: "Vite" },
  { icon: "webpack", label: "Webpack" },
  { icon: "docker", label: "Docker" },
  { icon: "pineapple", label: "Pinia" },
  { icon: "jest", label: "Jest" },
  { icon: "sentry", label: "Sentry" },
  { icon: "sonarqube", label: "SonarQube" },
  { icon: "firebase", label: "Firebase" },
  { icon: "rest", label: "REST / WS" },
];

const skillGroups = [
  { k: "Frontend", v: "TypeScript, JavaScript, Vue 2/3, Nuxt 3/4, React, Next.js, TailwindCSS, SCSS" },
  { k: "Architecture", v: "Design systems, component libraries, migration planning, refactoring strategy" },
  { k: "Performance & SEO", v: "SSR, 90+ Lighthouse, bundle optimization, lazy loading" },
  { k: "Delivery & DevOps", v: "CI/CD (GitHub Actions, GitLab CI), Docker, Cloudflare, Nginx, Coolify" },
  { k: "Quality", v: "Code reviews, mentoring, Jest, Cypress, Sentry, SonarQube" },
  { k: "Integrations", v: "REST, WebSockets, Stripe, Firebase, TonConnect" },
];

type Role = {
  title: string;
  company: string;
  place: string;
  dates: string;
  points: string[];
  tags: string[];
  img?: string;
  alt?: string;
  initial: string;
};

const experience: Role[] = [
  {
    title: "Lead Frontend Developer",
    company: "SwitchCase",
    place: "Singapore · Remote",
    dates: "May 2024 — Present",
    points: [
      "Built a SaaS platform from scratch on Nuxt 3 + TypeScript; SSR/SEO and performance work to 90+ Lighthouse in production.",
      "Automated delivery with GitHub Actions + Coolify, cutting releases from 20 minutes to 3.",
      "Set the quality bar: 50+ code reviews, mentored 2 engineers, built an internal component library (~30% faster UI).",
      "Shipped TonConnect wallet flows and security-minded onboarding.",
    ],
    tags: ["Nuxt 3", "TypeScript", "SSR/SEO", "CI/CD", "TonConnect", "Design system"],
    img: switchcaseImg,
    alt: "Web3 platform built at SwitchCase",
    initial: "S",
  },
  {
    title: "Frontend Team Lead",
    company: "Gentlyx",
    place: "Remote · Part-time",
    dates: "Oct 2024 — Jan 2025",
    points: [
      "Led legacy modernization: refactor dropped the bundle 40% and lifted engagement 22% on key flows.",
      "Drove a React + Vite move with lazy loading for heavy modules and performance-first standards.",
      "Integrated Stripe payment flows and tightened checkout UX and reliability.",
    ],
    tags: ["React", "Vite", "Stripe", "Refactoring", "Performance"],
    img: gentlyxImg,
    alt: "Creator platform at Gentlyx",
    initial: "G",
  },
  {
    title: "Frontend Developer",
    company: "2UIT",
    place: "Uzbekistan · Remote",
    dates: "Feb 2022 — May 2024",
    points: [
      "Delivered data-heavy analytics dashboards (100K+ records) with virtual scrolling and lazy loading.",
      "Led a Vue 2 + Vuex → Vue 3 + Pinia migration with zero downtime.",
      "Shipped real-time charts (Chart.js / D3) for 2K+ daily users and improved load performance 60%.",
    ],
    tags: ["Vue 3", "Pinia", "Chart.js", "D3", "Virtual scroll"],
    img: uitImg,
    alt: "Analytics dashboards at 2UIT",
    initial: "2",
  },
  {
    title: "Frontend Developer",
    company: "Itransition Group",
    place: "Remote",
    dates: "Oct 2020 — Feb 2022",
    points: [
      "Raised test coverage from 15% to 70% and stabilized legacy Vue components through refactoring.",
      "Built responsive UI components and shipped i18n for 5 locales.",
    ],
    tags: ["Vue", "Jest", "i18n", "Refactoring"],
    initial: "I",
  },
  {
    title: "Frontend Web Developer",
    company: "Buzz.ai",
    place: "Remote",
    dates: "Mar 2019 — Oct 2020",
    points: [
      "Built and maintained marketing and chatbot UI surfaces (50K+ monthly traffic).",
      "Migrated jQuery → Vue, cutting frontend bugs ~70%, and added Cypress regression testing.",
    ],
    tags: ["Vue", "jQuery → Vue", "Cypress", "Marketing UI"],
    img: buzzImg,
    alt: "Sales engagement platform at Buzz.ai",
    initial: "B",
  },
];

const projects = [
  {
    title: "Vpiska",
    desc: "A Telegram Mini App for throwing parties: spin up an event, invite friends, and track who is in, all inside Telegram instead of ten scattered group chats.",
    tags: ["Nuxt 3", "Vue 3", "Telegram Mini App", "Pinia", "i18n", "Tailwind"],
    link: "https://vpiska-landing.vercel.app/",
    img: vpiskaImg,
    alt: "Vpiska — Telegram Mini App for events",
  },
  {
    title: "koych.me",
    desc: "A marketplace for vetted coaches (pre-MVP), built solo and full-stack: Nuxt 4 frontend, NestJS + Fastify + Prisma API, realtime chat, YooKassa payments, and object storage.",
    tags: ["Nuxt 4", "NestJS", "Fastify", "Prisma", "Postgres", "Socket.IO", "YooKassa"],
    link: "https://koych.me/",
    img: koychImg,
    alt: "koych.me — marketplace for vetted coaches",
  },
];

const channels = [
  { label: "Telegram", handle: "@Nkanka44", href: "https://t.me/Nkanka44" },
  { label: "Email", handle: "vasiasko112@gmail.com", href: "mailto:vasiasko112@gmail.com" },
  { label: "LinkedIn", handle: "in/mr-pinacolada", href: "https://www.linkedin.com/in/mr-pinacolada/" },
  { label: "GitHub", handle: "MrPinacolada", href: "https://github.com/MrPinacolada" },
];
</script>

<style scoped lang="scss">
.home {
  position: relative;
}

.wrap {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-inline: clamp(1.25rem, 5vw, 4rem);
}

/* ── Shared section furniture ─────────────────────────────── */
.section-tag {
  display: inline-flex;
  align-items: baseline;
  gap: 0.7ch;
  font-family: "Roboto Mono", ui-monospace, monospace;
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-ink-3);
  &__num {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--c-accent);
  }
  &--invert {
    color: var(--c-paper-line-strong);
    .section-tag__num {
      color: var(--c-accent-bright);
    }
  }
}

.section-title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.025em;
  text-wrap: balance;
  margin-top: 1rem;
  max-width: 18ch;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6ch;
  padding: 0.95rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 3px;
  border: 2px solid var(--c-ink);
  transition:
    transform 0.25s var(--ease-out-expo),
    background-color 0.25s var(--ease-out-quart),
    color 0.25s var(--ease-out-quart);
  &:hover {
    transform: translateY(-3px);
  }
  &--solid {
    background: var(--c-accent);
    border-color: var(--c-accent);
    color: #fff;
    &:hover {
      background: var(--c-ink);
      border-color: var(--c-ink);
    }
  }
  &--ghost {
    background: transparent;
    color: var(--c-ink);
    &:hover {
      background: var(--c-ink);
      color: var(--c-paper);
    }
  }
}

.tag {
  font-family: "Roboto Mono", ui-monospace, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.02em;
  padding: 0.28rem 0.6rem;
  border: 1px solid var(--c-paper-line-strong);
  border-radius: 999px;
  color: var(--c-paper);
  opacity: 0.85;
  white-space: nowrap;
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
.hero {
  position: relative;
  min-height: calc(100dvh - 64px);
  display: flex;
  align-items: center;
  padding-block: clamp(3rem, 9vh, 7rem);

  &__eyebrow {
    color: var(--c-ink-3);
    margin-bottom: clamp(1.5rem, 4vh, 2.5rem);
  }
  &__mark {
    color: var(--c-accent);
  }

  &__title {
    font-size: clamp(2.4rem, 11vw, 6rem);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.035em;
    margin: 0;
  }
  &__line {
    display: block;
    &--accent {
      color: var(--c-accent);
      margin-left: clamp(0.25rem, 5vw, 4rem);
    }
  }

  &__lead {
    margin-top: clamp(1.75rem, 4vh, 2.5rem);
    max-width: 58ch;
    font-size: clamp(1.1rem, 1.6vw, 1.4rem);
    line-height: 1.5;
    color: var(--c-ink-2);
  }

  &__cta {
    margin-top: clamp(1.75rem, 4vh, 2.5rem);
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
  }

  &__meta {
    margin-top: clamp(2rem, 5vh, 3rem);
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1.4rem;
    color: var(--c-ink-3);
    li {
      position: relative;
      padding-left: 1.3ch;
      &::before {
        content: "✦";
        position: absolute;
        left: 0;
        color: var(--c-accent);
      }
    }
  }

  &__scroll {
    position: absolute;
    right: clamp(1.25rem, 5vw, 4rem);
    bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 0.8ch;
    color: var(--c-ink-3);
    text-decoration: none;
    @media (max-width: 48rem) {
      display: none;
    }
  }
  &__scroll-line {
    width: 56px;
    height: 2px;
    background: var(--c-ink-3);
    transform-origin: right;
    animation: scroll-pulse 2.4s var(--ease-out-expo) infinite;
  }
}

/* hero load choreography */
.hero__eyebrow,
.hero__line,
.hero__lead,
.hero__cta,
.hero__meta {
  animation: rise-in 0.9s var(--ease-out-expo) both;
}
.hero__eyebrow { animation-delay: 0.05s; }
.hero__line:nth-child(1) { animation-delay: 0.14s; }
.hero__line:nth-child(2) { animation-delay: 0.24s; }
.hero__lead { animation-delay: 0.4s; }
.hero__cta { animation-delay: 0.52s; }
.hero__meta { animation-delay: 0.62s; }

@keyframes rise-in {
  from { opacity: 0; transform: translateY(26px); }
  to { opacity: 1; transform: none; }
}
@keyframes scroll-pulse {
  0%, 100% { transform: scaleX(0.4); opacity: 0.4; }
  50% { transform: scaleX(1); opacity: 1; }
}

/* ────────────────────────────  IMPACT  ──────────────────────────── */
.impact {
  padding-block: clamp(3.5rem, 8vh, 6rem);
  border-top: 1px solid var(--c-line);

  &__title {
    font-size: clamp(1.5rem, 3.2vw, 2.4rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    max-width: 20ch;
    margin-bottom: clamp(2rem, 5vh, 3rem);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 0;
    border: 1px solid var(--c-line);
    border-radius: 4px;
    overflow: hidden;
  }
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: clamp(1.4rem, 2.5vw, 2rem);
  border-right: 1px solid var(--c-line);
  border-bottom: 1px solid var(--c-line);
  background: var(--c-paper-2);

  &__fig {
    font-size: clamp(2.2rem, 4.5vw, 3.4rem);
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.03em;
    color: var(--c-ink);
    font-variant-numeric: tabular-nums;
  }
  &__label {
    font-weight: 600;
    font-size: 1.02rem;
    color: var(--c-ink);
  }
  &__sub {
    color: var(--c-accent);
  }
}

/* ─────────────────────────────  ABOUT  ──────────────────────────── */
.about {
  padding-block: clamp(5rem, 12vh, 9rem);
  border-top: 1px solid var(--c-line);

  &__title {
    max-width: 16ch;
  }

  &__body {
    margin-top: clamp(2.5rem, 6vh, 4rem);
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: start;
    @media (max-width: 56rem) {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  &__prose {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    font-size: clamp(1.05rem, 1.3vw, 1.2rem);
    line-height: 1.65;
    color: var(--c-ink-2);
    max-width: 62ch;
  }
}

.dossier {
  border: 2px solid var(--c-ink);
  background: var(--c-paper-2);
  padding: clamp(1.25rem, 2.5vw, 1.75rem);
  dl {
    margin: 0;
  }
  &__row {
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--c-line);
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      border-bottom: 0;
      padding-bottom: 0;
    }
    dt {
      color: var(--c-ink-3);
      margin-bottom: 0.3rem;
    }
    dd {
      margin: 0;
      font-weight: 600;
      font-size: 1.02rem;
      color: var(--c-ink);
    }
  }
}

/* ─────────────────────────────  STACK  ──────────────────────────── */
.stack {
  padding-bottom: clamp(5rem, 12vh, 9rem);
}

.marquee {
  overflow: hidden;
  border-block: 2px solid var(--c-ink);
  background: var(--c-ink);
  color: var(--c-paper);
  padding-block: 0.7rem;
  margin-bottom: clamp(4rem, 10vh, 7rem);
  &__track {
    display: inline-flex;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 26s linear infinite;
    span {
      display: inline-flex;
      align-items: center;
      gap: 1.5rem;
      padding-inline: 1.5rem;
      font-weight: 800;
      font-size: clamp(1.4rem, 3vw, 2.2rem);
      letter-spacing: -0.01em;
      i {
        color: var(--c-accent-bright);
        font-style: normal;
        font-size: 0.7em;
      }
    }
  }
  &:hover .marquee__track {
    animation-play-state: paused;
  }
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.stack__grid {
  margin-top: clamp(2rem, 5vh, 3rem);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0;
  border: 1px solid var(--c-line);
  border-radius: 4px;
  overflow: hidden;
}
.chip {
  display: flex;
  align-items: center;
  gap: 0.8ch;
  padding: 1.1rem 1.2rem;
  border-right: 1px solid var(--c-line);
  border-bottom: 1px solid var(--c-line);
  background: var(--c-paper-2);
  font-weight: 600;
  font-size: 0.95rem;
  transition:
    background-color 0.25s var(--ease-out-quart),
    color 0.25s var(--ease-out-quart),
    transform 0.25s var(--ease-out-expo);
  .base-icon {
    flex-shrink: 0;
  }
  &:hover {
    background: var(--c-accent);
    color: #fff;
    transform: translateY(-2px);
    position: relative;
    z-index: 1;
  }
}

.stack__groups {
  margin-top: clamp(3rem, 7vh, 4.5rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0;
  border-top: 2px solid var(--c-ink);
}
.stack__group {
  padding: 1.5rem clamp(1rem, 2vw, 1.75rem) 1.5rem 0;
  dt {
    color: var(--c-accent);
    margin-bottom: 0.6rem;
  }
  dd {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.55;
    color: var(--c-ink-2);
    max-width: 34ch;
  }
}

/* ──────────────────────────  EXPERIENCE  ─────────────────────────── */
.exp {
  background: var(--c-ink);
  color: var(--c-paper);
  padding-block: clamp(5rem, 13vh, 9.5rem);

  &__title {
    color: var(--c-paper);
  }

  &__list {
    list-style: none;
    margin: clamp(2.5rem, 6vh, 4rem) 0 0;
    padding: 0;
    border-top: 1px solid var(--c-paper-line);
  }

  &__note {
    margin-top: 1.5rem;
    color: var(--c-paper);
    opacity: 0.5;
  }
}

.exp-row {
  display: grid;
  grid-template-columns: 4ch minmax(0, 1fr) 220px;
  align-items: start;
  gap: clamp(1rem, 3vw, 2.5rem);
  padding: clamp(1.8rem, 4vh, 2.8rem) 0;
  border-bottom: 1px solid var(--c-paper-line);

  @media (max-width: 60rem) {
    grid-template-columns: 3ch 1fr;
    grid-template-areas:
      "num body"
      "thumb thumb";
  }

  &__num {
    color: var(--c-accent-bright);
    padding-top: 0.5rem;
    @media (max-width: 60rem) {
      grid-area: num;
    }
  }

  &__body {
    min-width: 0;
    @media (max-width: 60rem) {
      grid-area: body;
    }
  }
  &__role {
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 800;
    line-height: 1.02;
    letter-spacing: -0.02em;
  }
  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1.2rem;
    margin-top: 0.6rem;
    color: var(--c-paper);
    opacity: 0.62;
  }
  &__company {
    color: var(--c-accent-bright);
    opacity: 1;
  }
  &__points {
    margin: 1.1rem 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    max-width: 64ch;
    li {
      position: relative;
      padding-left: 1.5ch;
      font-size: 1rem;
      line-height: 1.5;
      color: var(--c-paper);
      opacity: 0.82;
      &::before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--c-accent-bright);
        opacity: 1;
      }
    }
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 1.1rem;
  }

  &__thumb {
    width: 220px;
    height: 136px;
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid var(--c-paper-line);
    background: var(--c-ink-2);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 60rem) {
      grid-area: thumb;
      width: 100%;
      height: clamp(150px, 38vw, 220px);
    }
  }
  &__monogram {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--c-paper-line-strong);
  }
}

/* ────────────────────────────  PROJECTS  ────────────────────────── */
.proj {
  position: relative;
  overflow: hidden; /* clip the full-bleed accent row sweep */
  background: var(--c-ink);
  color: var(--c-paper);
  padding-block: clamp(5rem, 13vh, 9.5rem);
  border-top: 1px solid var(--c-paper-line);

  &__title {
    color: var(--c-paper);
  }

  &__list {
    list-style: none;
    margin: clamp(2.5rem, 6vh, 4rem) 0 0;
    padding: 0;
    border-top: 1px solid var(--c-paper-line);
  }
}

.proj-row {
  border-bottom: 1px solid var(--c-paper-line);

  &__link {
    display: grid;
    grid-template-columns: 4ch minmax(0, 1fr) 220px auto;
    align-items: center;
    gap: clamp(1rem, 3vw, 2.5rem);
    padding: clamp(1.8rem, 4vh, 2.8rem) 0;
    text-decoration: none;
    color: var(--c-paper);
    position: relative;
    transition: transform 0.4s var(--ease-out-expo);

    &::before {
      content: "";
      position: absolute;
      inset: 0 -100vw;
      background: var(--c-accent);
      transform: scaleY(0);
      transform-origin: bottom;
      z-index: 0;
      transition: transform 0.4s var(--ease-out-expo);
    }
    > * {
      position: relative;
      z-index: 1;
    }

    @media (hover: hover) {
      &:hover {
        transform: translateX(clamp(0.4rem, 1.2vw, 0.9rem));
        &::before {
          transform: scaleY(1);
        }
        .proj-row__thumb img {
          transform: scale(1.06);
        }
        .proj-row__cta .base-icon {
          transform: translateX(4px) rotate(-90deg);
        }
      }
    }

    @media (max-width: 60rem) {
      grid-template-columns: 3ch 1fr;
      grid-template-areas:
        "num body"
        "thumb thumb"
        "cta cta";
    }
  }

  &__num {
    color: var(--c-accent-bright);
    align-self: start;
    padding-top: 0.4rem;
    @media (max-width: 60rem) {
      grid-area: num;
    }
  }

  &__body {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    @media (max-width: 60rem) {
      grid-area: body;
    }
  }
  &__title {
    font-size: clamp(1.6rem, 3.4vw, 2.6rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.02em;
  }
  &__desc {
    color: var(--c-paper);
    opacity: 0.66;
    font-size: 1rem;
    line-height: 1.55;
    max-width: 60ch;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.2rem;
  }

  &__thumb {
    width: 220px;
    height: 136px;
    overflow: hidden;
    border-radius: 4px;
    border: 1px solid var(--c-paper-line);
    background: var(--c-ink-2);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s var(--ease-out-expo);
    }
    @media (max-width: 60rem) {
      grid-area: thumb;
      width: 100%;
      height: clamp(160px, 42vw, 260px);
    }
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5ch;
    color: var(--c-accent-bright);
    white-space: nowrap;
    .base-icon {
      transition: transform 0.3s var(--ease-out-expo);
    }
    @media (max-width: 60rem) {
      grid-area: cta;
    }
  }
}

/* ────────────────────────────  CONTACT  ─────────────────────────── */
.contact {
  background: var(--c-accent);
  color: #fff;
  padding-block: clamp(5rem, 14vh, 10rem);

  .section-tag--invert {
    color: rgba(255, 255, 255, 0.9);
    .section-tag__num {
      color: #fff;
    }
  }

  &__title {
    margin-top: 1.2rem;
    font-size: clamp(2.4rem, 7vw, 5rem);
    font-weight: 800;
    line-height: 0.97;
    letter-spacing: -0.03em;
    text-wrap: balance;
    max-width: 16ch;
  }

  &__lead {
    margin-top: 1.5rem;
    max-width: 54ch;
    font-size: clamp(1.1rem, 1.6vw, 1.35rem);
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.92);
  }

  &__links {
    list-style: none;
    margin: clamp(2.5rem, 6vh, 4rem) 0 0;
    padding: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.28);
    li {
      border-bottom: 1px solid rgba(255, 255, 255, 0.28);
    }
    a {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 1rem;
      padding: clamp(1rem, 2.5vh, 1.6rem) 0;
      text-decoration: none;
      color: #fff;
      transition: transform 0.35s var(--ease-out-expo);
      .mono-label {
        color: rgba(255, 255, 255, 0.9);
      }
      &:hover {
        transform: translateX(0.75rem);
        .mono-label {
          color: #fff;
        }
      }
    }
  }
  &__handle {
    font-size: clamp(1.3rem, 3.5vw, 2.4rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    text-align: right;
  }
}
</style>
