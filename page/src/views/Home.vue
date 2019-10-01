<template>
  <start v-if="!this.$store.getters.isOpened" />
  <top v-else />
</template>

<script lang="ts">
import Vue from "vue";
import Top from "@/components/Top.vue";
import Start from "@/components/Start.vue";

export default Vue.extend({
  components: {
    Top,
    Start
  }
});
</script>
