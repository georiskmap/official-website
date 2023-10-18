import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../pages/AboutUs.vue'
import Team from '../pages/Team.vue'
import Career from '../pages/Career.vue'
import CompletedProjects from '../pages/Projects/CompletedProjects.vue'
import NewsAndMedia from '../pages/NewsAndMedia.vue'
import EventsPage from "../pages/EventsPage.vue"
import Insights from '../pages/Insights.vue'
import ProposedProjects from '../pages/Projects/ProposedProjects.vue'
import OngoingProject from '../pages/Projects/OngoingProject.vue'
import Dashboard from '../pages/Dashboard.vue'
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
      path: "/ongoing-projects",
      name: "OngoingProjects",
      component: OngoingProject,
    },
    {
      path: "/proposed-projects",
      name: "ProposedProjects",
      component: ProposedProjects,
    },
    {
      path: "/news-and-media",
      name: "newsAndMedia",
      component: NewsAndMedia,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/career",
      name: "Careers",
      component: Career,
    },
    {
      path: "/insights",
      name: "Insights",
      component: Insights,
    },
    {
      path: "/events",
      name: "Events",
      component: EventsPage,
    },
  ]
})

export default router
