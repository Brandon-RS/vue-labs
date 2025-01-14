<template>
  <div class="footer-container">
    <span>Made by <a class="external-link hover-link" href="#top">Brandon Rojas!</a> </span>

    <span>
      <a
        class="external-link hover-link"
        href="https://github.com/Brandon-RS"
        target="_blank"
        rel="noreferrer">
        GitHub <i class="gen-icon fa-brands fa-github-alt"></i>
      </a>
    </span>

    <span>
      <a
        class="external-link hover-link"
        href="https://www.linkedin.com/in/brandon-rs/"
        target="_blank"
        rel="noreferrer">
        LinkedIn <i class="gen-icon fa-brands fa-linkedin"></i>
      </a>
    </span>

    <span>
      <a
        class="external-link hover-link"
        href="https://api.whatsapp.com/send?phone=51970092350&text=Hi Brandon, I'm looking for a developer."
        target="_blank"
        rel="noreferrer">
        WhatsApp <i class="gen-icon fa-brands fa-whatsapp"></i>
      </a>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.footer-container {
  margin-top: 60px;
  font-size: 14px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-bottom: 30px;
  letter-spacing: 1px;

  span {
    padding: 10px 0;
    text-align: center;
  }


  .external-link {
    text-decoration: none;
    color: $font-color;
    font-weight: 600;

    .gen-icon {
      font-size: 17px;
      margin-left: 5px;
    }

  }

  .hover-link {
    &:hover {
      border-bottom: 3px solid $font-color;
    }
  }

}
</style>
