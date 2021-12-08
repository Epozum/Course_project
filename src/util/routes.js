import Overview from '../components/Overview.vue';
import Detail from '../components/Detail.vue';
import Menu from "../components/Menu.vue";

export default [
  { path: '/', component: Overview, name: 'home' },
  { path: '/menu', component: Menu, name: 'menu' },
  { path: '/movie/:id', component: Detail, name: 'movie' },
  { path: '*', redirect: { name: 'home' } }
];
