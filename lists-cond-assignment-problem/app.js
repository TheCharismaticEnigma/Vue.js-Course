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
      const task = this.taskInput.trim();
      if (task === '') return;

      this.tasks.push(task);
      console.log();
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
