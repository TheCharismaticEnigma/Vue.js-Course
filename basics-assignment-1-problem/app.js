// Tourner Dans La Vide.

const formApp = Vue.createApp({
  data: function () {
    return {
      inputScreen: 'Saturday night',
      ageScreen: '10',
      countryScreen: 'Maldives',
    };
  },

  methods: {
    displayInput(event) {
      this.inputScreen = event.target.value;
    },

    displayAge(event) {
      this.ageScreen = event.target.value;
    },

    displayCountry(event) {
      this.countryScreen = event.target.value;
    },
  },
});

formApp.mount('#form-section'); // establish a connection.

const inputApp = Vue.createApp({
  data: function () {
    // below object contains data that's accessible in HTML

    return {
      inputValue: '',
    };
  },

  methods: {
    updateName(event, extraValue = '') {
      this.inputValue = `${event.target.value} ${extraValue}`;
    },
  },
});

inputApp.mount('#input-section');

const counterApp = Vue.createApp({
  // Using this object, we use VUE features to interact
  // with VUE controlling HTML

  data: function () {
    // returns an object which contains data that is accessible in HTML
    return {
      counter: 0,
    };
  },

  methods: {
    increaseCounter(value) {
      this.counter = this.counter + value; // BHS vue takes all data and stores in GLOBAL INSTANCE OBJECT/VUEAPP Object.
      return;
    },

    decreaseCounter: function (value) {
      const prevValue = this.counter;
      this.counter = Math.max(0, prevValue - value);
      return;
    },
  },
});

counterApp.mount('#counter-section');

const vueApp = Vue.createApp({
  // Object is passed to use VUE attributes in order to
  //   configure HTML controlled by VUE

  data() {
    return {
      // can be accessed in VUE controlling HTML
      myName: `The God`,
      myAge: 99,
      myImage: `https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
    };
  },

  methods: {
    getMyNumber() {
      // : function()
      // const random = Math.random();
      return Number(Math.random().toFixed(2));
    },

    getFutureAge: function () {
      return this.myAge + 5;
    },
  },
});

vueApp.mount('#assignment');
