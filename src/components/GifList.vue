<template>
  <div id="gif-list">

      <ul>
        <li style="list-style: none;" v-for="url in filteredResults()" :key="url">
          <img  class="gif" :src="url"/>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: ["numberOfGifs", "imageURL"],
  methods: {
    filteredResults() {
      return this.imageURL.slice(0, this.numberOfGifs);
    }
  }
};
</script>
