// Component that displays friend Details.

<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button v-on:click="toggleDetails">{{ buttonContent }}</button>

    <ul v-show="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>

      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  //config object for this component
  data() {
    return {
      friend: {
        id: 'brandon',
        name: 'Brandon Moreno',
        email: 'gracias@todos.com',
        phone: '9890 12332 122',
      },

      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },

  computed: {
    // computed properties for this component.
    buttonContent() {
      return `${this.detailsAreVisible ? 'Hide' : 'Show'} Details`;
    },
  },
};
</script>

<style></style>
