<!-- Component for Adding New friend.-->
<!-- Create a new friend here. Emit a new event. listen to it in 
root app and add it to the data property. 
Emits -> from child to parent component. 
 -->

<template>
  <section class="form-wrapper">
    <form
      ref="friendDetailForm"
      class="new-friend-form"
      @submit.prevent="onsubmit"
      autocomplete="false"
    >
      <div class="form__group">
        <label class="form__label" for="name">Name: </label>
        <input
          v-model="name"
          class="form__input"
          type="text"
          id="name"
          name="name"
          autocomplete="off"
        />
      </div>

      <div class="form__group">
        <label for="id" class="form__label">Id:</label>
        <input type="text" v-model="id" id="id" name="id" class="form__input" />
      </div>

      <!-- Name, Phone, Email, isFavorite, Id  -->

      <div class="form__group">
        <label for="phone" class="form__label">Phone: </label>
        <input
          type="text"
          v-model="phone"
          id="phone"
          name="phone"
          class="form__input"
        />
      </div>

      <div class="form__group">
        <label for="email" class="form__label">Email: </label>
        <input
          type="email"
          v-model="email"
          id="email"
          name="email"
          class="form__input"
        />
      </div>

      <div class="form__group checkbox__group">
        <label for="isFavorite" class="form__label">Is Favorite: </label>
        <input
          type="checkbox"
          v-model="isFavorite"
          ref="isFavoriteCheckbox"
          id="isFavorite"
          name="isFavorite"
          class="form__input checkbox__input"
        />
      </div>

      <button @click="addNewFriend" class="btn--submit" type="submit">
        Add Friend
      </button>
    </form>
  </section>
</template>

<script>
export default {
  // Create a new friend object using form inputs.
  // Then send it to the parent. parent will update for child too.
  // Could also use hrefs here.

  data() {
    return {
      name: '',
      id: '',
      phone: '',
      email: '',
      isFavorite: false,
    };
  },

  emits: ['new-friend-event'],

  methods: {
    addNewFriend() {
      // Object.keys() => returns properties of object.
      // Object.getOwnPropertyNames() => returns its own property names(key)
      const dataObject = this.$data;
      const newFriend = {};

      for (const key of Object.keys(dataObject)) {
        const value = dataObject[key];

        if (value === '') {
          alert(
            `Please Fill out the ${key.toUpperCase()} input correctly! Ya dotlish cunt!`
          );

          return;
        } else {
          // add to the newly created object.
          // key must be same as in other friend objects.
          newFriend[key] = value;
        }
      }

      // const newFriend = {
      //   name: this.name,
      //   id: this.id,
      //   phone: this.phone,
      //   email: this.email,
      //   isFavorite: this.isFavorite,
      // };

      // Emit a new custom-event and listen to it in the
      // bleeding
      // The handler function will get this data as argument.

      this.$emit('new-friend-event', newFriend);

      // reset the form
      const form = this.$refs.friendDetailForm;
      form.reset();
    },
  },
};
</script>

<style lang="css">
.form-wrapper {
  text-align: center;
}

.new-friend-form {
  padding: 1.5rem 0;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 sandybrown;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 90%;
  margin: 3rem auto;
}

.form__group {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form__group.checkbox__group {
  width: 50%;
}

.checkbox__input {
  cursor: pointer;
  transform: scale(2);
}

.checkbox__group label {
  white-space: nowrap;
}
</style>
