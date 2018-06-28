<template>
  <div class="about">
    <h2>This is a Pokemon page</h2>
    <PokeForm></PokeForm>

  </div>
</template>
<script>
import PokeForm from "@/components/PokeForm.vue";

export default {
  name: "about",
  components: {
    PokeForm
    //PokeList
  }
};
</script>
