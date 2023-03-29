<template>
  <div class="sample">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: { type: String, default: "", required: true },
    description: { type: String, default: "" }
  }
});
</script>

<style lang="scss" module></style>
