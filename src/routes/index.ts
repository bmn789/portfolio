
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/routes/Home.vue";
import About from "./About.vue";
import Work from "./Work.vue";
import Blogs from "./Blogs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/work", component: Work },
    { path: "/blogs", component: Blogs }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router