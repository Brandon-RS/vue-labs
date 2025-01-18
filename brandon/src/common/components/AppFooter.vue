<script setup lang="ts">

const date = new Date();

</script>

<template>
  <footer>
    <hr class="border-gray-700 border-2 rounded-full" />

    <div class="flex justify-center items-center py-6 gap-5">
      <span>
        <a
          class="footer__link"
          href="https://github.com/Brandon-RS"
          target="_blank"
          rel="noreferrer">
          GitHub <i class="fa-brands fa-github-alt"></i>
        </a>
      </span>

      <span>
        <a
          class="footer__link"
          href="https://www.linkedin.com/in/brandon-rs/"
          target="_blank"
          rel="noreferrer">
          LinkedIn <i class="fa-brands fa-linkedin"></i>
        </a>
      </span>

      <span>
        <a
          class="footer__link"
          href="https://api.whatsapp.com/send?phone=51970092350&text=Hi Brandom,"
          target="_blank"
          rel="noreferrer">
          WhatsApp <i class="fa-brands fa-whatsapp"></i>
        </a>
      </span>
    </div>

    <span class="block text-center text-sm text-gray-500">
      &copy; {{ date.getUTCFullYear() }} Brandom Rojas
    </span>
  </footer>
</template>

<style scoped>
.footer__link {
  @apply font-semibold hover:text-blue-900 dark:hover:text-slate-500;
}
</style>
