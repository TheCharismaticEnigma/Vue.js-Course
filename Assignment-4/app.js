// Hidden visible user1 user2

const app = Vue.createApp({
  // configuration object.

  data() {
    return {
      availableClasses: ['user2', 'user1'],
      visibilityClasses: ['visible', 'hidden'],
      visibilityClass: 'visible',
      userInput: '',
    };
  },

  methods: {
    updateClassname(event) {
      const value = event.target.value.trim();
      this.userInput = value;
    },

    toggleVisibilityClass(event) {
      const index = this.visibilityClasses.indexOf(this.visibilityClass);

      const newIndex = index === 1 ? 0 : 1;
      this.visibilityClass = this.visibilityClasses[newIndex];
    },
  },

  computed: {
    paragraphClasses() {
      const input = this.userInput;
      const isAvailableClass = this.availableClasses.includes(input);
      return !isAvailableClass ? '' : input;
    },
  },

  watch: {},
});

app.mount('#assignment');
