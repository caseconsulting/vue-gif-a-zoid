<template>
  <div id="gif-list">

      <ul>
        <li style="list-style: none;" v-for="url in filterGifList()" :key="url.number">
          <img  class="gif" :src="url.url"/>
          <p v-show="url.url">{{ url.number }}</p>
          <br/>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: ["numberOfGifs", "imageURL"],

  methods: {
    filterGifList() {
      let selectedArray = this.imageURL.slice(0, this.numberOfGifs);
      for (var i = 0; i < this.numberOfGifs; i++) {
        selectedArray[i] = {
          url: selectedArray[i],
          number: i + 1
        };
      }
      return selectedArray;
    }
  }
};
</script>
