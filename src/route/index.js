import VueRouter from 'vue-router';
// ページコンポーネントを読み込み
import Top from '../pages/top';
import About from '../pages/about';

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  },
];

export default new VueRouter({
  routes,
});