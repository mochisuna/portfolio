<template>
  <div class="home" @mousedown="mouseClick(true)" @mouseup="mouseClick(false)">
    <start v-if="!this.$store.getters.isOpened" />
    <top v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Top from "@/components/Top.vue";
import Start from "@/components/Start.vue";

export default Vue.extend({
  components: {
    Top,
    Start
  },
  methods: {
    mouseClick(flg: boolean): void {
      if (flg) {
        this.$store.dispatch("setClickedAction");
      } else {
        this.$store.dispatch("unsetClickedAction");
      }
    }
  }
});
</script>
