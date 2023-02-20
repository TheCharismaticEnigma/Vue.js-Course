// Component that displays friend Details.

<template>
  <li>
    <h2>{{ fullName }} {{ status }}</h2>
    <button v-on:click="toggleFavorite">Toggle Status</button>
    <button v-on:click="toggleDetails">{{ buttonContent }}</button>

    <ul v-show="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>

      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>

    <button class="btn--remove" @click="$emit('remove-friend', id)">
      Delete This Friend!
    </button>
  </li>
</template>

<script>
export default {
  //config object for this component
  data() {
    return {
      detailsAreVisible: false,
      // personIsFavorite: this.isFavorite, // initialized value.
    };
  },

  // props: ['fullName', 'emailAddress', 'phoneNumber', 'isFavorite'],

  // Just like data properties, props are set on globally object.

  props: {
    id: { type: String, required: true },

    fullName: {
      type: String,
      required: true,
      validate: function (name) {
        return name.length > 0;
      },
    },

    emailAddress: {
      type: String,
      required: true,
      validate: function (email) {
        return email.length > 0 && email.indexOf('.com') > -1;
      },
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  emits: ['toggle-favorite', 'remove-friend'],

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavorite() {
      // Emit a custom event to be listened in parent component.
      // make these changes in parent. Parent automatically updates this component.
      // In parent component, find the friend and update its value .
      this.$emit('toggle-favorite', this.id);
    },
  },

  computed: {
    // computed properties for this component.
    buttonContent() {
      return `${this.detailsAreVisible ? 'Hide' : 'Show'} Details`;
    },

    status() {
      return this.isFavorite ? '(Fav)' : '';
    },
  },
};
</script>

<!-- Styles for the component template code -->

<style>
button {
  margin: 0 0.5rem;
}

button.button--remove {
  margin-top: 2rem;
}
</style>
