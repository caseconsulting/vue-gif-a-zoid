<template>
  <div class="home">
    <img src="../assets/logo-banner.gif"/>
    <HelloWorld msg="Case Consulting TSheets Portal"/>
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
