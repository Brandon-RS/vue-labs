<script setup lang="ts">
import HomeBanner from '@/features/home/components/HomeBanner.vue';
import HomeContact from '@/features/home/components/HomeContact.vue';
import HomeProjects from '@/features/home/components/HomeProjects.vue';
</script>

<template>
  <section class="pt-5 md:pt-20">
    <home-banner name="Brandom" />

    <home-contact />

    <home-projects />
  </section>
</template>

<style scoped></style>
