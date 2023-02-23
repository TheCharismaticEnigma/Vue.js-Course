<template>
  <h2>
    I'm the Second Component which was rendered Dynamically. AHAHAHHHA! Uncouth
    and Foul-mouthed hoodlum.
  </h2>

  <input
    type="text"
    spellcheck="false"
    autocomplete="off"
    ref="goal"
    placeholder="Write a goal you vexatious and obnoxious bitch!"
  />

  <button @click="setGoal">Set Goal</button>

  <error-alert v-if="!validInput">
    <template v-slot:errorContent>
      <h3>Motherfuckers disrespect me. MOICANO WANTS MONEY. AHAHAHAHAHA !!!</h3>
      <button @click="resetInput">Try Again</button>
    </template>
  </error-alert>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  data() {
    return {
      validInput: true,
    };
  },

  components: {
    ErrorAlert,
  },

  methods: {
    setGoal() {
      const goal = this.$refs.goal.value;

      this.validInput = goal !== '';
    },

    resetInput() {
      this.$refs.goal.value = '';
      this.validInput = true;
    },
  },
};
</script>
