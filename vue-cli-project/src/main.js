// Entry Point

import { createApp } from 'vue';

// Import the config objects in script tag from SINGLE FILE COMPONENTS.

import App from './App.vue';
import FriendContact from './components/FriendContact';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.mount('#app');

// Just like app = Vue.createApp({....});
// app.component('name', {... }) ;
// app.mount('#app')
