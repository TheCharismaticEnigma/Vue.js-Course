// Tourner Dans La Vide.

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
