<template>
  <div class="contact-container">
    <h2 class="second-title">Talk to me!</h2>
    <p>If you are interested in creating technological products and need help, text me:</p>
    <router-link class="contact-button" :to="{ name: 'contact' }">Send a Message</router-link>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  margin-top: 50px;

  p {
    margin-top: 20px;
    font-size: 16px;
  }

  .contact-button {
    display: inline-block;
    margin-top: 30px;
    padding: 15px 50px;
    background-color: #252525;
    color: #5eddac;
    border-radius: 22px;
    box-shadow: 0 0 0 1px #3d3d3d;
    font-size: 16px;
    letter-spacing: 2px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      box-shadow: 0 0 0 1px #5eddac;
    }
  }

}

@media screen and (max-width: 600px) {
  .contact-container {
    .contact-button {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
