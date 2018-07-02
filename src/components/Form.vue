<template>
<div>
  <form @submit.prevent="search">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
      <label>
          <vs-input vs-label-placeholder="Search GIFs" v-model="searchTerm" />
      </label>
      <vs-button vs-color="primary" vs-type="relief" :disabled="!searchTerm">Submit
      </vs-button>
    </vs-col>
  </form>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" style="padding-top:16px">
    <vs-button @click="random" vs-color="danger" vs-type="relief">Random</vs-button>
  </vs-col>
  <vs-col vs-type="flex" vs-justify="center" vs-w="12">
    <ul>
      <li style="list-style: none;" v-for="url in imageURL" :key=url>
        <img  class="gif" :src="url"/>
      </li>
    </ul>

  </vs-col>
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
