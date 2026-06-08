<template>
  <p style="padding: 6rem 2rem">
    Redirecting to <NuxtLink to="/#stack">the stack section</NuxtLink>…
  </p>
</template>

<script setup lang="ts">
// The site is now a single immersive page; this route folds into /#stack.
definePageMeta({
  redirect: { path: "/", hash: "#stack" },
});
</script>
