<script setup lang="ts">

defineProps<{
  title: string;
  description: string;
}>();

const emit = defineEmits<{
  (e: 'onTap'): void;
}>();

const onClick = () => emit('onTap');

</script>

<template>
  <div class="bg-gray-200 dark:bg-slate-800 rounded-xl p-5 cursor-pointer"
    @click="onClick">
    <h4 class="text-lg text-zinc-700 dark:text-zinc-200 font-semibold">
      {{ title }}
    </h4>
    <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
      {{ description }}
    </p>
  </div>
</template>

<style scoped></style>
