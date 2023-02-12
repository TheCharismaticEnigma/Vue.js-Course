const app = Vue.createApp({
  // Configuration object. Accessible in HTML template.

  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  methods: {
    boxSelected(box) {
      if (!box) return;

      const tag = box.toLowerCase();

      if (tag === 'a') this.boxASelected = !this.boxASelected;
      else if (tag === 'b') this.boxBSelected = !this.boxBSelected;
      else this.boxCSelected = !this.boxCSelected;
    },
  },

  computed: {},

  watch: {},
});

app.mount('#styling');
