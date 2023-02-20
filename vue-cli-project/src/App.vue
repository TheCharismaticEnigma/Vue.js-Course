<!-- Configuration for the main VUE app. -->

<template>
  <section>
    <header>
      <h1>Component Communication and Reusability</h1>
    </header>

    <form-input></form-input>

    <new-friend v-on:new-friend-event="addFriend($event)"></new-friend>

    <ul>
      <!-- Custom data using props. -->

      <!-- <friend-contact
        full-name="Baburao Apte"
        phone-number="4136 5142 8291"
        email-address="baburao.apte@gmail.com"
        is-favorite="false"
      ></friend-contact> -->

      <friend-contact
        v-for="friend in friends"
        v-bind:key="friend.id"
        v-bind:id="friend.id"
        v-bind:full-name="friend.name"
        v-bind:phone-number="friend.phone"
        v-bind:email-address="friend.email"
        v-bind:is-favorite="friend.isFavorite"
        v-on:toggle-favorite="toggleFavoriteStatus"
        v-on:remove-friend="deleteFriend"
      >
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import FormInput from './components/FormInput.vue';

export default {
  components: { FormInput },

  data() {
    return {
      friends: [
        {
          id: 'max',
          name: 'Max Payne',
          phone: '9921 3422 1112',
          email: 'fuckYouStreet@gmail.com',
          isFavorite: true,
        },

        {
          id: 'tourner',
          name: 'Torner Payne',
          phone: '9231 3422 1112',
          email: 'mexicocabrones@gmail.com',
          isFavorite: false,
        },

        {
          id: 'john',
          name: 'John Wayne',
          phone: '9931 3422 1112',
          email: 'wayneKissmeAss@gmail.com',
          isFavorite: true,
        },
      ],
    };
  },

  methods: {
    toggleFavoriteStatus(targetId) {
      const friend = this.friends.find((friend) => friend.id === targetId);
      friend.isFavorite = !friend.isFavorite;
    },

    addFriend(friend) {
      if (!friend) return;
      this.friends.push(friend);
    },

    deleteFriend(targetId) {
      this.friends = this.friends.filter((friend) => friend.id !== targetId);
      // filter includes only if condition is true.
      // the id with the targetId is deleted.
    },
  },
};
</script>

// General Styles for the entire app .// Each component will hold the styles for
its own template.

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>

<!--
   Props: parent=>child component
   Emits: Child => prent component 
 -->
