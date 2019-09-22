<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    msg: { type: String, default: "", required: true }
  }
});
</script>

<style lang="scss" module></style>
