<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>

      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>

      <p v-if="isLoading">Experiences are Loading.....</p>

      <p v-if="!errorMessage && !isLoading && results.length === 0">
        No stored experiences found! Start adding some survey results first.
      </p>

      <p v-if="!errorMessage && !isLoading && results.length > 0">
        {{ errorMessage }}
      </p>

      <ul v-if="!isLoading && resultsAreAvailable">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: null,
      errorMessage: null,
    };
  },

  computed: {
    resultsAreAvailable() {
      return !this.isLoading && this.results && this.results.length > 0;
    },
  },

  methods: {
    loadExperiences() {
      this.isLoading = true;

      const promise = fetch(
        'https://vue-demo-d4f0f-default-rtdb.firebaseio.com/surveys.json'
      );

      // () => {} means () => { return ..}
      // In JS => display spinner => clear text and display new data

      const experiences = [];

      promise
        .then((response) => {
          if (!response.ok)
            throw new Error(
              'AHHAHAHA Something went wrong you pin-headed crab.'
            );

          return response.json();
        })
        .then((data) => {
          this.isLoading = false;

          for (const key of Object.keys(data)) {
            experiences.push({
              id: key,
              name: data[key].name,
              rating: data[key].rating,
            });
          }

          this.results = experiences;
        })
        .catch((error) => {
          this.isLoading = false;
          this.errorMessage = ` As a result of server malfunction the data can't be processed at the moment.
          AHAHAAHAAH You little tick!
           Get the fook outta here. Get the fook outta here ya little sissy ass. You ain't getting nothing ya broke bitch. AAHHAHAHA `;
        });
    },

    // Life-cycle hook after the component is mounted.
  },

  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
