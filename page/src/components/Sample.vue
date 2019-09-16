<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Sample extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" module></style>
