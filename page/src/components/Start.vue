<template>
  <div>
    <p>keyword: {{ this.$store.getters.getKeyword }}</p>
    <button @click="skip()">Skip</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    skip(): void {
      this.$store.dispatch("setOpenedAction");
    }
  }
});
</script>
