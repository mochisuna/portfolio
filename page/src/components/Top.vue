<template>
  <div class="main">
    <div @mouseover="isHovered = mouseHover(true)" @mouseleave="isHovered = mouseHover(false)">
      <top-menu class="menu" />
      <kappa />
    </div>
    <!-- <p v-if="isHovered">nyao</p> -->
    <sample title="タイトル" description="説明文" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Sample from "@/components/Sample.vue";
import TopMenu from "@/components/menu/CircleMenu.vue";
import Kappa from "@/components/Kappa.vue";

export default Vue.extend({
  components: {
    TopMenu,
    Kappa,
    Sample
  },
  methods: {
    mouseHover(flg: boolean): void {
      console.log(`nyan${flg}`);
      if (flg) {
        this.$store.dispatch("setHoveredAction");
      } else {
        this.$store.dispatch("unsetHoveredAction");
      }
    }
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
