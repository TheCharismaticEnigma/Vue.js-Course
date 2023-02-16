const app = Vue.createApp({
  // configuration Object.
  // data(){}, methods:{}, computed:{}, watch:{}

  data: function () {
    return {
      isVisible: true,
      taskInput: '',
      tasks: [],
    };
  },

  computed: {
    buttonText() {
      return (this.isVisible ? 'Hide' : 'Show') + 'List';
    },
  },

  methods: {
    addTask(event) {
      const inputElement = this.$refs.taskInput;
      const task = inputElement.value.trim();
      if (task === '') return;

      this.tasks.push(task);
      inputElement.value = ''; // reset the value
    },

    removeTask(index) {
      this.tasks.splice(index, 1); // remove 1 and change tasks.
    },

    toggleList() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
