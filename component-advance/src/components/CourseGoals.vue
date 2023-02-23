<!-- Component for rendering Course Goals -->

<template>
  <section>
    <ul>
      <li v-for="goal in courseGoals" v-bind:key="goal.toUpperCase()">
        <!-- Like props, data can be passed from here to the component
       which provides markup for this slot.  -->

        <slot v-bind:currentGoal="goal" name="listContent"> </slot>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      courseGoals: ['Complete Vue', 'Get the fuck outta here.'],
    };
  },
};
</script>

style
