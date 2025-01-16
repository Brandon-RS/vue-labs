<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const theme = ref<string>(localStorage.theme ?? 'light');
const isDark = computed(() => theme.value === 'dark');

const toggleTheme = () => {
  theme.value = isDark.value ? 'light' : 'dark';
  setTheme();
};

const setTheme = () => {
  document.documentElement.classList.toggle('dark', isDark.value);
  localStorage.theme = theme.value;
}

onMounted(() => {
  if (!localStorage.theme) {
    theme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  setTheme();
});
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

    <div class="flex gap-4">
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

      <button @click="toggleTheme">
        <div
          class="flex items-center gap-2 p-1 rounded-full border-2 bg-slate-200 dark:bg-slate-800 hover:border-cyan-900 dark:hover:border-amber-400 border-slate-300 dark:border-gray-400">
          <i class="fa-solid fa-moon" :class="isDark ? 'text-gray-400' : 'opacity-0'"></i>
          <i class="fa-solid fa-sun" :class="isDark ? 'opacity-0' : 'text-yellow-400'"></i>
        </div>
      </button>
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
