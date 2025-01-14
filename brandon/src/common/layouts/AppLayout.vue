<script setup lang="ts">
</script>

<template>
  <header>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/contact">Contact</router-link>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped></style>
