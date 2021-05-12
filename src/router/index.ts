import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

export const router = createRouter({
  history: createWebHistory('/green-stone'),
  routes,
});
export default router;
