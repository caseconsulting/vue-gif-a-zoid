<template>
<div>
  <vs-row>
    <form @submit.prevent="search">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <label>
            <vs-input vs-label-placeholder="Search GIFs" v-model="searchTerm" />
        </label>
        <vs-button vs-color="primary" vs-type="relief" :disabled="!searchTerm">Submit
        </vs-button>
      </vs-col>
    </form>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4" style="padding-top:14px">
      <div v-show="searched">
        <vs-input-number vs-color="#32cb00" vs-min="1" vs-max="20" v-model="numberOfGifs"/>
      </div>
    </vs-col>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4" style="padding-top:16px">
      <vs-button @click="random" vs-color="danger" vs-type="relief">Random</vs-button>
    </vs-col>
  </vs-row>
  <gif-list :numberOfGifs="numberOfGifs" :imageURL="imageURL"></gif-list>
</div>
</template>

<script>
import axios from "axios";
import GifList from "./GifList.vue";

export default {
  data() {
    return {
      searchTerm: "",
      imageURL: [],
      numberOfGifs: 5
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
  },
  computed: {
    searched() {
      return this.imageURL.length > 1;
    }
  },

  components: {
    GifList
  }
};
</script>
<style>
.gif {
  padding-top: 100px;
}
</style>
