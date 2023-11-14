import { createApp } from 'vue';
import App from './App.vue';
import { createWebHistory, createRouter } from 'vue-router';
import nosotros from './components/nosotros.vue';
import stream from './components/stream.vue';
import contacto from './components/contacto.vue';
import carrusel from './components/carrusel.vue';

const routes = [
  { path: '/', component: stream },
  { path: '/nosotros', component: nosotros },
  { path: '/stream', component: stream },
  { path: '/contacto', component: contacto },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Inicializa Firebase con la configuración

const app = createApp(App);

app.use(router);

app.component('carrusel', carrusel);
app.mount('#app');
