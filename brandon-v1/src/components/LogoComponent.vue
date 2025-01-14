<script lang="ts" setup>
</script>

<template>
  <div class="logo-container">
    <img src="@/assets/images/icon-head.webp" alt="Brandon Rojas">
    <router-link class="home-link" :to="{ name: 'home' }">
      <span class="logo-title">Brandon Rojas</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

.logo-container {
  display: flex;
  justify-content: left;
  align-items: center;

  img {
    width: 60px;
    margin-right: 10px;
  }

  .logo-title {
    font-size: 18px;
    font-weight: 600;
    padding-top: 10px;
  }

  .home-link {
    color: $font-color;
    text-decoration: none;
  }
}

@media screen and (max-width: 600px) {
  .logo-container {
    display: none;
  }
}
</style>
