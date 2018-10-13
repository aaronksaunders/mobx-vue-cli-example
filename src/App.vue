<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home";
import {Store} from './store'
import { Observer, observer } from "mobx-vue";

export default observer( {
  name: "App",
  components: {
    Home
  },
  mounted() {
    console.log(this.$store.products)
  }
});
</script>

<style>
#app {

}
</style>
