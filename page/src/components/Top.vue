<template>
  <div class="home" @mousedown="flyaway = true" @mouseup="flyaway = false">
    <div class="main" @mouseover="hovered = true" @mouseleave="hovered = false">
      <top-menu class="menu" :hovered="hovered" />
      <kappa :flyaway="flyaway" :hovered="hovered" />
      <sample msg="Test" />
    </div>
    <p v-if="hovered">nyao</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Sample from "@/components/Sample.vue";
import TopMenu from "@/components/menu/GraphMenu.vue";
import Kappa from "@/components/Kappa.vue";

export default Vue.extend({
  components: {
    TopMenu,
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
