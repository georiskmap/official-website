import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../pages/AboutUs.vue'
import Team from '../pages/Team.vue'
import CompletedProjects from '../pages/Projects/CompletedProjects.vue'
import NewsAndMedia from '../pages/NewsAndMedia.vue'
import Insights from '../pages/Insights.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/team",
      name: "Team",
      component: Team,
    },
    {
      path: "/completed-projects",
      name: "completedProjects",
      component: CompletedProjects,
    },
    {
      path: "/news-and-media",
      name: "newsAndMedia",
      component: NewsAndMedia,
    },
    {
      path: "/insights",
      name: "Insights",
      component: Insights,
    },
  ]
})

export default router
