const app = Vue.createApp({
  // config object. Properties accessible in Template.

  components: {},

  data() {
    return {
      friends: [
        {
          id: 'geronta',
          name: 'Geronta Davis',
          phone: '122233 323232',
          email: 'graciasatodos@gmail.com',
        },

        {
          id: 'julia',
          name: 'Julia Michaels',
          phone: '992233 32323',
          email: 'zalakdedhias@gmail.com',
        },
      ],
    };
  },
});

// Creating a new component liked to this app.

app.component('friend-Details', {
  // config-object.

  template: `
       <li>
        <h2>{{friend.name}}</h2>
        <button v-on:click="toggleDisplay">{{showDetails ?? 'Hide': 'Show'}} Details</button>
        <ul v-show="showDetails">
            <li><strong>Phone:</strong> {{friend.Phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
       </li>
   `,

  data() {
    return {
      showDetails: false,

      friend: {
        id: 'julia',
        name: 'Julia Michaels',
        phone: '992233 32323',
        email: 'zalakdedhias@gmail.com',
      },
    };
  },

  methods: {
    toggleDisplay() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount('#app');
