<script setup lang="ts">
const props = defineProps<{ name: string }>()

const userName = props.name ?? ''
</script>

<template>
  <div
    class="modal-background  fade-in"
    @click.self="$emit('on:close')">
    <div class="modal-container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main" :userName="userName"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/colors';

.modal-background {
  align-items: center;
  background-color: rgba($color: #000000, $alpha: .5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  cursor: pointer;
  padding: 23px;

  .modal-container {
    background-color: #252525;
    padding: 50px 80px 25px 80px;
    border-radius: 25px;
    box-shadow: 0 0 10px 3px #3d3d3d;
    letter-spacing: 2px;
    margin-top: 30px;
    font-size: 18px;
    cursor: default;

    header,
    footer {
      text-align: center;
    }
  }
}

.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
