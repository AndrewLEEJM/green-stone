import { createApp } from 'vue';
import VueSplide from '@splidejs/vue-splide';
import App from './App.vue';
import { router } from './router';

const app = createApp(App);

app.use(VueSplide);
app.use(router);
app.mount('#app');
