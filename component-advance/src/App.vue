<!-- <template>
  <div>
    <the-header></the-header>

    <badge-list></badge-list>

    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <course-goals>
      <template v-slot:listContent="content">
        <h2>{{ content.currentGoal }}</h2>
      </template>
    </course-goals>
  </div>
</template> -->

<template>
  <div>
    <the-header></the-header>

    <button @click="setActiveComponent('first-component')">
      First Component
    </button>

    <button @click="setActiveComponent('second-component')">
      Second Component
    </button>

    <!-- is should have the name  -->

    <keep-alive>
      <component v-bind:is="activeComponent"></component>
    </keep-alive>

    <!-- <first-component
      v-if="activeComponent === 'first-component'"
    ></first-component>
    <second-component
      v-if="activeComponent === 'second-component'"
    ></second-component> -->
  </div>
</template>

<!--  -->

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';

export default {
  components: {
    TheHeader, // TheHeader: TheHeader
    FirstComponent,
    SecondComponent,
  },

  data() {
    return {
      activeComponent: 'second-component',

      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    setActiveComponent(component) {
      this.activeComponent = component;
    },
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
