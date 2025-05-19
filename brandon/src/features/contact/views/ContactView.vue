<script setup lang="ts">
import { useHomeProjectsStore } from '@home/stores/useHomeProjectsStore';
import { useRouter } from 'vue-router';
import ContactCard from '../components/ContactCard.vue';

const router = useRouter();
const projectsStore = useHomeProjectsStore();


</script>

<template>
  <div class="mt-10 md:mt-12">

    <h2 class="text-4xl text-center pb-8 max-w-sm mx-auto">
      Get in touch for more information
    </h2>

    <h3 class="text-lg text-center">
      If you need help or have any questions, let's have a chat!
    </h3>

    <div class="pt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <ContactCard
        title="LinkedIn"
        text="Feel free to connect with me on LinkedIn."
        contact="Brandon Rojas (brandon-rs)"
        link="https://www.linkedin.com/in/brandon-rs/"
        icon="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg" />

      <ContactCard
        title="GitHub"
        text="Check out my GitHub profile."
        contact="Brandon Rojas"
        link="https://github.com/Brandon-RS"
        icon="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" />

      <ContactCard
        title="Email"
        text="If you prefer, you can also reach out via email."
        contact="brandon.rsantillan@proton.me"
        link="mailto:brandon.rsantillan@proton.me"
        icon="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/protonmail.svg" />

    </div>
  </div>
</template>

<style scoped></style>
