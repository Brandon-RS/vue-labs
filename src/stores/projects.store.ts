import type { projectType } from "@/types";
import { defineStore } from "pinia";

interface useProjectType {
  projects: projectType[];
}

const projectBaseUrl = "https://github.com/Brandon-RS/";

export const useProjectStore = defineStore("projects", {
  state: (): useProjectType => ({
    projects: [
      {
        id: "1",
        name: "brandon.rojas.pub",
        year: "2021",
        desc: "Personal portfolio. *This website",
        tags: ["Vue", "Pinia", "Router"],
        link: `${projectBaseUrl}brandon.rojas.pub`,
      },
      {
        id: "2",
        name: "Talking App",
        year: "2023",
        desc: "Real-time chatting app",
        tags: ["Flutter", "Node", "Socket.io"],
        link: `${projectBaseUrl}talking`,
      },
      {
        id: "3",
        name: "Geolocation",
        year: "2022",
        desc: "Geolocation using MapBox and Google Maps API",
        tags: ["Flutter", "MapBox"],
        link: `${projectBaseUrl}MapBox-GL-flutter`,
      },
      {
        id: "4",
        name: "News App",
        year: "2022",
        desc: "A mobile app to keep up with the latest news",
        tags: ["Flutter", "News api"],
        link: `${projectBaseUrl}News-Flutter`,
      },
      {
        id: "5",
        name: "Auth API",
        year: "2022",
        desc: "Api to handle users, authentication, roles, and more ...",
        tags: ["Node", "Express", "MongoDB"],
        link: `${projectBaseUrl}auth-api`,
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => {
      return state.projects;
    },
  },
});
