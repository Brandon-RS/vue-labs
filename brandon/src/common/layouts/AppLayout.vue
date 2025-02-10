<script setup lang="ts">
import AppFooter from '@/common/components/AppFooter.vue';
import AppNavbar from '@/common/components/AppNavbar.vue';
</script>

<template>
  <app-navbar />

  <main class="pt-4 pb-10 md:pb-14">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>

  <app-footer />
</template>

<style scoped></style>
