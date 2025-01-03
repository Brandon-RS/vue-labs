<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useSkillsStore } from '@/stores/skills.store'
import { useProjectStore } from '@/stores/projects.store'

const HomeBanner = defineAsyncComponent(() => import('@/components/home/BannerHome.vue'))
const HomeSkills = defineAsyncComponent(() => import('@/components/home/SkillsHome.vue'))
const HomeProjects = defineAsyncComponent(() => import('@/components/home/ProjectsHome.vue'))
const HomeContact = defineAsyncComponent(() => import('@/components/home/ContactHome.vue'))

const projectsStore = useProjectStore()
const skillStore = useSkillsStore()

const projects = computed(() => projectsStore.getAllProjects)
const skills = computed(() => skillStore.getAllSkills)

</script>

<template>
  <div class="main-home">
    <HomeBanner name="Brandon" />
    <HomeProjects :projects="projects" />
    <br>
    <HomeSkills :skills="skills" />
    <HomeContact />
  </div>
</template>

<style lang="scss" scoped></style>
