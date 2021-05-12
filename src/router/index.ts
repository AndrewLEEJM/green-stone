import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/home/Home.vue';
import Product from '../views/product/Product.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
];

export const router = createRouter({
  history: createWebHistory('/green-stone'),
  routes,
});
export default router;
