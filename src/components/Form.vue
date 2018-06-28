<template>
<div>
<form @submit.prevent="handleSubmit">
  <label>
      Username:
      <input type="username" v-model="searchTerm"/>
    </label>
  <button type="submit">Submit</button>
</form>
<div>
  <ul>
    <li v-for="item in imageURL" :key=item>
      {{item}}
    </li>
  </ul>
</div>
</div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      searchTerm: "",
      imageURL: []
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.searchTerm);
      axios
        .get(`http://localhost:3000/gif/${this.searchTerm}`)
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>
