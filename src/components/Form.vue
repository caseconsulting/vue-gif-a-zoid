<template>
<div>
<form @submit.prevent="search">
  <label>
      Username:
      <input type="username" v-model="searchTerm"/>
    </label>
  <button type="submit">Submit</button>
</form>
<button @click="random" type="button">Random</button>
<div>
  <li style="list-style: none;" v-for="url in imageURL" :key=url>
    <img  class="gif" :src="url"/>
  </li>
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
    random() {
      axios.get(`http://localhost:3000/gif/`).then(response => {
        this.imageURL = [];
        console.log(response);
        this.imageURL.push(response.data);
      });
    },
    search() {
      axios
        .get(`http://localhost:3000/gif/${this.searchTerm}`)
        .then(response => {
          console.log(response);
          this.imageURL = response.data;
        });
    }
  }
};
</script>
<style>
.gif {
  padding-top: 100px;
}
</style>
