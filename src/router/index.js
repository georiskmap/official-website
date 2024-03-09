import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
      component: () => import('../pages/AboutUs.vue'),
    },
    {
      path: "/team",
      name: "Team",
      component: () => import('../pages/Team.vue'),
    },
    {
      path: "/completed-projects",
      name: "completedProjects",
      component: () => import('../pages/Projects/CompletedProjects.vue'),
    },
    {
      path: "/ongoing-projects",
      name: "OngoingProjects",
      component: () => import('../pages/Projects/OngoingProject.vue'),
    },
    {
      path: "/proposed-projects",
      name: "ProposedProjects",
      component: () => import('../pages/Projects/ProposedProjects.vue'),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('../pages/Dashboard.vue'),
    },
    {
      path: "/career",
      name: "Careers",
      component: () => import('../pages/Career.vue'),
    },
    {
      path: "/insights",
      name: "Insights",
      component: Insights,
    },
    {
      path: "/events",
      name: "Events",
      component: () => import('../pages/EventsPage.vue'),
    },
    {
      path: "/research",
      name: "Research",
      component: () => import('../pages/Research.vue'),
    },
    {
      path: "/floodevent",
      name: "floodEvent",
      component: () => import('../pages/FloodEvent.vue'),
    },
    {
      path: "/awards",
      name: "awards",
      component: () => import('../pages/Awards.vue'),
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import('../pages/Reports.vue'),
    },
  ]
})

export default router
