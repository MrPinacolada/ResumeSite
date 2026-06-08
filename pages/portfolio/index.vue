<template>
  <p style="padding: 6rem 2rem">
    Redirecting to <NuxtLink to="/#experience">the experience section</NuxtLink>…
  </p>
</template>

<script setup lang="ts">
// The site is now a single immersive page; this route folds into /#experience.
definePageMeta({
  redirect: { path: "/", hash: "#experience" },
});
</script>
