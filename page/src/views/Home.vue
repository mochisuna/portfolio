<template>
  <div v-if="!this.$store.getters.isOpened">
    <p>keyword: {{ this.$store.getters.getKeyword }}</p>
    <button v-on:click="skip">Skip</button>
  </div>
  <div v-else class="home" v-on:mousedown="flyaway = true" v-on:mouseup="flyaway = false">
    <div kappa-component>
      <Menu />
      <div kappa-component>
        <Kappa :flyaway="flyaway" />
      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->

    <Sample msg="Test" />

    <p v-if="cohered">nyao</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import Sample from "@/components/Sample.vue";
import Menu from "@/components/Menu.vue";
import Kappa from "@/components/Kappa.vue";

@Component({
  name: "home",
  components: {
    Menu,
    Kappa,
    HelloWorld,
    Sample
  }
})
export default class Home extends Vue {
  private cohered: boolean = false;
  private flyaway: boolean = false;
  public skip(): void {
    this.$store.dispatch("setOpenedAction");
  }
}
</script>
