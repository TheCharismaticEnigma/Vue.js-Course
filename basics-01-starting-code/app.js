const app = Vue.createApp({
  data() {
    return {
      courseGoal: `He umm, tried to bully me once. And he's kinda big so he makes me nervous without his gloves and his shorts on. So, if he ever tries to intimidate me again, Imma implant a bullet in his motherfucking skull.`,
      humilityMessage: `I want his heart and I wanna eat his children. PRAISE BE TO ALLAH! .`,
      messageToGod: `Bismillah hir rahman nur raheem`,
      vueJobLink: `https://germantechjobs.de/en/jobs/OfferZen-Frontend-Engineer`,
      vueGoogleLink: `https://www.google.com`,
      message: `<p>Tourner Dans La Vide</p>`,
    };
  },

  methods: {
    getLink: function () {
      return Math.random() <= 0.5 ? this.vueGoogleLink : this.vueJobLink;
    },
  },
});

app.mount('#user-goal');
