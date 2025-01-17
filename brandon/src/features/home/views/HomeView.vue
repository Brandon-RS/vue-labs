<script setup lang="ts">
import BannerHome from '@/features/home/components/BannerHome.vue';
import ContactHome from '@/features/home/components/ContactHome.vue';
import ProjectsHome from '@/features/home/components/ProjectsHome.vue';
</script>

<template>
  <section class="pt-5 md:pt-20">
    <banner-home name="Brandom" />

    <contact-home />

    <projects-home />
  </section>
</template>

<style scoped></style>
