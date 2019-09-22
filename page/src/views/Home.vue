<template>
  <Top v-if="!this.$store.getters.isOpened" />
  <Main v-else />
</template>

<script lang="ts">
import Vue from "vue";
import Main from "@/components/Main.vue";
import Top from "@/components/Top.vue";

export default Vue.extend({
  components: {
    Top,
    Main
  }
});
</script>
