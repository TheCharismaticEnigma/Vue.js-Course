// Entry Point

import { createApp } from 'vue';

// Import the config objects in script tag from SINGLE FILE COMPONENTS.

import App from './App.vue';
import FriendContact from './components/FriendContact';
import FormInput from './components/FormInput';
import NewFriend from './components/NewFriend';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('form-input', FormInput);
app.component('new-friend', NewFriend);

app.mount('#app');

// Just like app = Vue.createApp({....});
// app.component('name', {... }) ;
// app.mount('#app')
