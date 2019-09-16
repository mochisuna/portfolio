<template>
  <div class="menu">
    <router-link to="/">Home</router-link>|
    <router-link to="/help">Help</router-link>|
    <router-link to="/about">About</router-link>
  </div>
</template>

<style lang="scss" module>
#menu {
  width: 100px;
  height: 100px;
}

#start {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Menu extends Vue {}
</script>
