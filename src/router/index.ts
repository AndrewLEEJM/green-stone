import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/home/Home.vue';
import Product from '../views/product/Product.vue';
import Company from '../views/company/Company.vue';
import Estimate from '../views/estimate/Estimate.vue';

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
  {
    path: '/company',
    name: 'Company',
    component: Company,
  },
  {
    path: '/estimate',
    name: 'Estimate',
    component: Estimate,
  },
];

export const router = createRouter({
  history: createWebHistory('/green-stone'),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});
export default router;
