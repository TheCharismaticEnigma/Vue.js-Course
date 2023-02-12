// Tourner Dans La Vide

const app = Vue.createApp({
  // configuration object.
  data: function () {
    return {
      initialName: 'Write Something....',
      name: 'Write Something....',
      age: 0,
    };
  },

  methods: {
    clearInput(event) {
      if (this.name === this.initialName) event.target.value = '';
    },

    incrementOne() {
      const prevAge = +this.age;
      this.age = prevAge + 1;
    },

    incrementFive() {
      const prevAge = +this.age;
      this.age = prevAge + 5;
    },
  },

  computed: {
    // computed properties ~ Methods but vue is aware of dependencies.
    // called like properties.
    updateName() {
      const currentName = this.name;

      if (currentName.trim() === '' || currentName === this.initialName)
        return `Write something ya twerp`;

      return `${currentName} AHAHAH`;
    },

    displayAge() {
      console.log(this.age);
      const age = +this.age;

      if (age === 37) return age;

      return age < 37 ? `Not Enough AHAHA` : `Too Much!`;
    },
  },

  watch: {
    // creating watchers for data properties.

    age(value) {
      if (value >= 37) {
        setTimeout(() => {
          this.age = 0;
        }, 3000);
      }
    },
  },
});

app.mount('#form-section');
