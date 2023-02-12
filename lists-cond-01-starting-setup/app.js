// If goals is empty => show paragraph.
// If goals contains => show list and list items.
// If list is hidden -> paragraph must be visible and vice-versa.

const app = Vue.createApp({
  data() {
    return {
      inputGoalValue: '',
      goals: [],
    };
  },

  methods: {
    addGoal() {
      this.goals.push(this.inputGoalValue);
    },

    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },

  computed: {},

  watch: {},
});

app.mount('#user-goals');
