<!-- Component for building form Input and display list -->

<template>
  <section class="form-container">
    <form class="form" v-on:submit.prevent="" autocomplete="off">
      <div class="form-group">
        <label class="form__label" for="name">Name: </label>

        <input
          ref="queryInput"
          spellcheck="false"
          type="text"
          class="form__input"
          name="name"
          id="name"
          placeholder="Enter Name..."
        />
      </div>

      <button v-on:click="addToList" type="submit" class="btn--submit">
        Add To List
      </button>
    </form>

    <ul v-show="queriesAreAvailable" class="query-list">
      <li v-for="input in inputs" class="query" v-bind:key="input">
        {{ input }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputs: ['Gracias A Todos'],
      inputValue: '',
    };
  },

  computed: {
    queriesAreAvailable() {
      return this.inputs.length > 0;
    },
  },

  methods: {
    addToList() {
      const inputElement = this.$refs.queryInput;
      const value = inputElement.value;

      if (!value) return;
      this.inputs.push(value);

      // After pushing clear the input
      inputElement.value = '';
    },
  },
};
</script>

<style>
.form-container {
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px burlywood;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  margin: 3rem auto;
  padding: 1.5rem 1rem;
  width: 90%;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-group {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
}

.form__label {
  font-size: 1.5rem;
}

.form__input {
  font-size: 1.2rem;
  padding: 0.5rem;
  min-width: 70%;
}

.form__input:focus {
  outline: none;
}

.form button.btn--submit {
  width: fit-content;
  margin: 1rem auto;
  font-size: 3rem;
}

.query-list {
  font-size: 1.5rem;
  color: rgb(149, 96, 28);
  font-family: cursive;
  font-style: italic;
  width: 100%;
}
</style>
