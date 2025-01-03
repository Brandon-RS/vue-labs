<script setup lang="ts">
import ModalContact from '@/components/Contact/ModalContact.vue'
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const form = ref('')
const inputReset = ref('')
const name = ref('')
const sending = ref(false)
const isOpen = ref(false)

const sendEmail = () => {
  sending.value = true
  emailjs.sendForm(
    import.meta.env.VITE_EMAIL_SERVICE,
    import.meta.env.VITE_EMAIL_TEMPLATE,
    form.value,
    import.meta.env.VITE_EMAIL_PUBLIC_KEY,
  )
    .then(() => {
      inputReset.value = ''
      sending.value = false
      isOpen.value = true
      setTimeout(() => name.value = '', 100)
    })
}

</script>

<template>
  <div class="contact-container">

    <h2 class="contact-title second-title">Contact Me</h2>
    <p class="desc-title">Any question or remarks? Just write a message!</p>

    <div class="form-banner">

      <div class="form-info">
        <h3>Contact Information</h3>
        <p>Fill up the form and I will get back to you.</p>

        <div class="contact-bn-info">
          <div class="info-item">
            <i class="fa-solid fa-phone"></i>
            <span>+51 970 092 350</span>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-envelope"></i>
            <span>brandon.rsantillan@proton.me</span>
          </div>
          <div class="info-item">
            <i class="fa-solid fa-briefcase"></i>
            <span>Full Stack Developer</span>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <form class="form-section" ref="form" @submit.prevent="sendEmail">
          <div class="form-field">
            <label for="user_name">Name</label>
            <input
              id="user_name"
              type="text"
              placeholder="Write your name"
              name="user_name"
              v-model="name"
              required>
          </div>

          <div class="form-field">
            <label for="user_email">Email</label>
            <input
              id="user_email"
              type="email"
              placeholder="sample@sample.com"
              name="user_email"
              :value="inputReset"
              required>
          </div>
          <div class="form-field">
            <label for="message">Message</label>
            <textarea
              id="message"
              placeholder="What do you need?"
              name="message"
              :value="inputReset"
              required>
            </textarea>
          </div>
          <input
            class="form-submit"
            type="submit"
            :disabled="sending"
            :value="!sending ? 'Send message' : 'Sending ...'">
        </form>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <modal-contact
    :name="name ?? 'None'"
    v-if="isOpen"
    @on:close="() => isOpen = false">
    <template v-slot:header>
      <img class="modal-image" src="@/assets/images/mail.png" alt="email sent">
    </template>
    <template v-slot:main="{ userName }">
      <span class="modal-main">Thanks {{ userName }}, talk to you soon!</span>
    </template>
    <template v-slot:footer>
      <button @click="() => isOpen = false" class="close-modal">Close</button>
    </template>
  </modal-contact>

</template>

<style lang="scss" scoped>
@import '@/assets/styles/colors';

.contact-container {

  .contact-title,
  .desc-title {
    text-align: center;
  }

  .desc-title {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
  }

  .form-banner {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    border-radius: 20px;
    background-color: #1f1f1f;
    box-shadow: 0 0 0 2px #262626;

    .form-info {
      background-color: #3b1a93;
      border-radius: 20px;
      padding: 30px;

      h3,
      p {
        text-align: center;
      }

      h3 {
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 1px;
      }

      p {
        margin-top: 20px;
        font-size: 14px;
      }

      .contact-bn-info {
        margin-top: 20px;
        display: grid;
        margin-top: 50px;
        padding-left: 20px;
        font-size: 14px;

        .info-item {
          padding: 20px;

          i {
            padding-right: 20px;
          }
        }
      }
    }

    .contact-form {
      padding: 40px;

      .form-section {
        .form-field {
          border-bottom: 2px solid rgb(159, 159, 159);
          margin-bottom: 20px;

          label {
            font-size: 12px;
            letter-spacing: 1.6px;

            &::after {
              content: ':';
            }
          }

          input,
          textarea {
            width: 100%;
            outline: none;
            padding: 15px 0;
            border: none;
            background-color: inherit;
            caret-color: $font-color;
            color: $font-color;
            font-size: 14px;
          }

          textarea {
            resize: vertical;
            min-height: 120px;
          }
        }

        .form-submit {
          display: inline-block;
          margin-top: 30px;
          padding: 15px 0;
          background-color: #252525;
          color: #5eddac;
          border: none;
          border-radius: 16px;
          box-shadow: 0 0 0 1px #3d3d3d;
          font-size: 16px;
          letter-spacing: 2px;
          cursor: pointer;
          text-decoration: none;
          width: 100%;

          &:hover {
            box-shadow: 0 0 0 1px #5eddac;
          }

          &:disabled {
            background-color: $background-color;
            color: #386f5a;
          }

          &:hover:disabled {
            box-shadow: 0 0 0 1px #283b25;
          }
        }
      }
    }
  }
}

.close-modal {
  box-shadow: 0 0 0 1px #3d3d3d;
  background-color: $background-color;
  border-radius: 16px;
  border: none;
  color: #5eddac;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 6px 40px;
}

.modal-image {
  width: 120px;
}

.modal-main {
  display: block;
  margin-bottom: 30px;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: center;
}
</style>
