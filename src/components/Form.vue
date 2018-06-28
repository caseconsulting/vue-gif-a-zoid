<template>
<form @submit.prevent="handleSubmit">
  <label>
      Username:
      <input type="username" v-model="user.username"/>
    </label>
  <button type="submit">Submit</button>
</form>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        username: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.user.username);
      axios
        .get(`http://localhost:3000/users/${this.user.username}`)
        .then(response => {
          this.loading = false;
          console.log(response);
        });
    }
  }
};
</script>
