<script setup lang="ts">

</script>

<template>
  <div class="navbar-container">
    <nav class="navbar">
      <router-link class="nav-link only-mobile" :to="{ name: 'home' }">
        <img src="@/assets/images/icon-head.webp" alt="home">
      </router-link>
      <router-link class="nav-link" :to="{ name: 'about' }"><span>About</span></router-link>
      <router-link class="nav-link" :to="{ name: 'projects' }"><span>Projects</span></router-link>
      <router-link class="nav-link" :to="{ name: 'contact' }"><span>Contact</span></router-link>
      <a
        class="nav-link"
        href="https://github.com/Brandon-RS"
        target="_blank"
        rel="noreferrer">
        <span>GitHub</span>
        <i class="fa-solid fa-up-right-from-square"></i>
      </a>
    </nav>
  </div>

</template>

<style lang="scss" scoped>
@import '../assets/styles/colors.scss';

.navbar-container {
  margin-top: 20px;

  .only-mobile {
    display: none;

    img {
      width: 30px;
    }
  }

  .nav-link {
    color: rgb(181, 181, 181);
    margin-right: 40px;
    font-size: 16px;
    text-decoration: none;

    &:hover {
      color: $font-color;
      border-bottom: 3px solid rgb(37, 255, 63);
    }

    i {
      font-size: 11px;
      padding-left: 5px;
    }
  }
}

@media screen and (max-width: 600px) {
  .navbar-container {
    text-align: center;
    padding: 30px 0 20px 0;
    border-bottom: 1px solid black;

    .navbar {
      display: flex;
      align-items: center;
      justify-content: center;

      .only-mobile {
        display: inline;

        img {
          width: 30px;
        }
      }

      .nav-link {
        display: inline;
        margin-right: 0;
        padding: 0 10px;
      }
    }
  }
}
</style>
