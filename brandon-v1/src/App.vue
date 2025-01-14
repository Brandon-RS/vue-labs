<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const NavbarComponent = defineAsyncComponent(() => import('./components/NavbarComponent.vue'))
const LogoComponent = defineAsyncComponent(() => import('./components/LogoComponent.vue'))
const HomeFooter = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="main">
    <div class="app-container">
      <div class="header">
        <div class="header-nav">
          <LogoComponent />
          <NavbarComponent />
        </div>
        <span class="theme-button">
          <i class="fa-solid fa-moon"></i>
        </span>
      </div>

      <div class="main-container">
        <RouterView />
        <HomeFooter />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/styles/index';
@import './assets/styles/sizes';

.header {
  margin: 30px 0 80px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: $custom-max-width;

  .theme-button {
    color: rgb(255, 221, 0);
    background-color: #252525;
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
  }
}

@media screen and (max-width: 600px) {
  .header {
    .theme-button {
      position: absolute;
      right: calc(100vw / 2.2);
      top: 10px;
    }
  }
}
</style>
