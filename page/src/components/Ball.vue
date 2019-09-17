<template>
  <div class="ball">
    <h1 class="circle">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Ball extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: skyblue; /*背景色*/
}
</style>
