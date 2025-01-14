<script lang="ts" setup>
import { computed } from 'vue'
import type { skillType } from '@/types'

const props = defineProps<{ skills: skillType[] }>()

const baseImageUrl = 'https://res.cloudinary.com/test-service/image/upload/v1680821999/brandon.dev/'

const allSkills = computed(() => {
  return props.skills.map(s => {
    return { id: s.id, name: s.name, icon: `${baseImageUrl}${s.icon}.webp`, date: s.date }
  })
})
</script>

<template>
  <div class="skills-container">
    <h2 class="second-title">Skills</h2>
    <div class="skills-cards generic-card-grid">

      <div class="card" v-for="skill in allSkills" :key="skill.id">
        <img :src="skill.icon" :alt="skill.name">
        <div>
          <p class="from" v-if="skill.date.search('Other')">Since {{ skill.date }}</p>
          <p class="from" v-else>{{ skill.date }}</p>
          <p class="name">{{ skill.name }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills-container {
  .skills-cards {
    .card {
      display: flex;
      align-items: center;
      border: 2px solid rgb(50, 50, 50);
      border-radius: 10px;
      box-shadow: 0px 0px 4px rgb(64, 64, 64);
      padding: 20px 10px 20px 20px;

      img {
        width: 48px;
        object-fit: cover;
        margin-right: 10px;
      }

      div {
        .from {
          color: rgb(170, 170, 170);
          font-size: 14px;
          margin-bottom: 10px;
          font-weight: 400;
        }

        .name {
          font-weight: 600;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
