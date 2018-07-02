<template>
  <div class="home">
    <h1>"Gif-O-Zoid Logo Here"</h1>
    <br>
    <h2>Try to Request Some Gifs...</h2>
    <br>
    <Form/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Form from "@/components/Form.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Form
  }
};
</script>
