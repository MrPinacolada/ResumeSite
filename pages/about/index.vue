<template>
  <p style="padding: 6rem 2rem">
    Redirecting to <NuxtLink to="/#about">the about section</NuxtLink>…
  </p>
</template>

<script setup lang="ts">
// The site is now a single immersive page; this route folds into /#about.
definePageMeta({
  redirect: { path: "/", hash: "#about" },
});
</script>
