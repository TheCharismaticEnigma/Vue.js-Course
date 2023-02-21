<template>
  <section>
    <base-card>
      <!-- Below content will be inserted in the slot named header -->
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"> </base-badge>
      </template>

      <template v-slot:content>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>
