import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', redirect: '/users' },

    {
      path: '/teams',
      component: TeamsList,
      children: [{ path: ':teamId', component: TeamMembers, props: true }],
    }, // teams/something => TeamsList

    { path: '/users', component: UsersList }, // ourdomain/users => UsersList

    // For incorrect paths,
    { path: '/:incorrectPath(.*)', redirect: '/teams' },
  ],

  // linkActiveClasss: 'className' ,

  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);

    if (savedPosition) return savedPosition;

    return { left: 0, top: 0 };
  },
});

const app = createApp(App);

app.use(router);

app.mount('#app');
