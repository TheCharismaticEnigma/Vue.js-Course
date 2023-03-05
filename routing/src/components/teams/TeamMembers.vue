<template>
  <section>
    <h2>{{ teamName }}</h2>

    <ul>
      <user-item
        v-for="member in members"
        :id="member.id"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>

    <router-link to="/teams/t2">Go to team 2 </router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],

  components: {
    UserItem,
  },

  props: ['teamId'],
  // value will be injected implicitly by vue.

  data() {
    return {
      teamName: '',
      members: [],

      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
    };
  },

  // in created() hook, app is initialized but not mounted.

  created() {
    this.loadTeamMembers(this.teamId);
  },

  methods: {
    loadTeamMembers: function (teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);

      if (!selectedTeam) {
        console.log('Bendeho Puto');
        return;
      }

      const members = selectedTeam.members; // array of ids.
      const selectedMembers = [];

      for (const memberId of members) {
        const member = this.users.find((user) => user.id === memberId);
        selectedMembers.push(member);
      }

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },

  watch: {
    // can watch for any data property. Custom or $vue-provided

    teamId(newId) {
      // this is a callback function which will be called when
      // the key property is updated in the SPA.

      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
