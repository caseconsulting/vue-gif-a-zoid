<template>
<form @submit.prevent="handleSubmit">
  <button type="submit">Retrieve Ten Random Pokemon</button>
</form>

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      pokes: {}
    };
  },
  methods: {
    handleSubmit() {
      axios.get(`http://pokeapi.co/api/v2/pokemon/14/`).then(response => {
        this.loading = false;
        console.log(response);
      });
    }
  }
};
</script>
