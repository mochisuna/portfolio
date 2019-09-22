<template>
  <div class="home" @mousedown="flyaway = true" @mouseup="flyaway = false">
    <div class="main" @mouseover="hovered = true" @mouseleave="hovered = false">
      <Menu :hovered="hovered" />
      <Kappa :flyaway="flyaway" :hovered="hovered" />
      <Sample msg="Test" />
    </div>
    <p v-if="hovered">nyao</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Sample from "@/components/Sample.vue";
import Menu from "@/components/menu/GraphMenu.vue";
import Kappa from "@/components/Kappa.vue";

export default Vue.extend({
  components: {
    Menu,
    Kappa,
    Sample
  },
  data() {
    return {
      flyaway: false,
      hovered: false
    };
  }
});
</script>

<style lang="scss" scoped>
.main {
  position: relative;

  .kappa {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
  }

  .menu {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(50% 50%);
  }
}
</style>
