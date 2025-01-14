import type { skillType } from "@/types";
import { defineStore } from "pinia";

interface useSkillType {
  skills: skillType[];
}

export const useSkillsStore = defineStore("skills", {
  state: (): useSkillType => ({
    skills: [
      {
        id: "1",
        name: "Flutter, Cross-platform Framework",
        icon: "flutter-logo_p88svm",
        date: "February, 2021",
      },
      {
        id: "2",
        name: "Vue, Progressive TS Framework",
        icon: "vue-logo_oasbpi",
        date: "March, 2022",
      },
      {
        id: "3",
        name: "Angular, The web development framework for building the future",
        icon: "angular-logo_pduf2e",
        date: "March, 2023",
      },
      {
        id: "4",
        name: "Node.js, an open-source, cross-platform JS runtime environment",
        icon: "node-js-logo_d5ruo4",
        date: "July, 2022",
      },
      {
        id: "6",
        name: "Spring, makes Java quicker, easier, and safer for everybody",
        icon: "spring-boot-logo_gfrqj9",
        date: "March, 2023",
      },
      {
        id: "7",
        name: "Express.js, Fast, unopinionated, minimalist web framework",
        icon: "express-logo_kttppj",
        date: "July, 2022",
      },
      {
        id: "8",
        name: "Sql and NoSql, Language to create DBs",
        icon: "sql-logo_jpcfzd",
        date: "March, 2022",
      },
      {
        id: "9",
        name: "Linux, Free and open-source OS",
        icon: "linux-logo_elhj1q",
        date: "December, 2020",
      },
      {
        id: "10",
        name: "TS, SASS, PHP, JAVA,...",
        icon: "others-logo_z2gx0u",
        date: "Other technologies that I use",
      },
    ],
  }),
  getters: {
    getAllSkills: (state) => {
      return state.skills;
    },
  },
});
