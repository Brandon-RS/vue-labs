<script setup lang="ts">
</script>

<template>
  <header class="flex justify-between items-end">
    <div>
      <router-link
        exact-active-class="font-semibold"
        class="flex items-end pb-2 text-xl"
        :to="{ name: 'home' }">
        <img
          class="h-10 me-4"
          src="@/assets/images/pet-head.webp"
          alt="App pet" />

        <span>Brandom</span>
      </router-link>
    </div>

    <div class="flex gap-6">
      <router-link
        exact-active-class="active"
        class="header-link"
        :to="{ name: 'about' }">
        About
      </router-link>

      <router-link
        exact-active-class="active"
        class="header-link"
        :to="{ name: 'projects' }">
        Projects
      </router-link>

      <router-link
        exact-active-class="active"
        class="header-link"
        :to="{ name: 'contact' }">
        Contact
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header-link {
  @apply block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-800 hover:text-white;
}

.header-link.active {
  @apply bg-gray-800 text-white;
}
</style>
