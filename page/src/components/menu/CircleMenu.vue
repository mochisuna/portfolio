<template>
  <div class="menu" :hovered-style="hovered">
    <Button path="/" class="button-1" msg="Home" :active="hovered" />
    <Button path="/about" class="button-2" msg="About" :active="hovered" />
    <Button path="/help" class="button-3" msg="Help" :active="hovered" />
    <Button path="/" class="button-4" msg="Home" :active="hovered" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "@/components/button/FlatButton.vue";
export default Vue.extend({
  name: "CircleMenu",
  components: {
    Button
  },
  props: {
    hovered: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss" scoped>
.menu {
  &[hovered-style="true"] {
    animation: appear-animation 0.8s ease-in forwards;
    .button-1 {
      animation: button1-appear-animation 0.8s ease-in forwards;
    }
    .button-2 {
      animation: button2-appear-animation 0.8s ease-in forwards;
    }
    .button-3 {
      animation: button3-appear-animation 0.8s ease-in forwards;
    }
    .button-4 {
      animation: button4-appear-animation 0.8s ease-in forwards;
    }
  }
  &[hovered-style="false"] {
    .button-1 {
      animation: button1-appear-animation 1.8s ease-in reverse;
    }
    .button-2 {
      animation: button2-appear-animation 1.8s ease-in reverse;
    }
    .button-3 {
      animation: button3-appear-animation 1.8s ease-in reverse;
    }
    .button-4 {
      animation: button4-appear-animation 1.8s ease-in reverse;
    }
  }
}
@keyframes appear-animation {
  0% {
    opacity: 0;
  }
  99% {
    opacity: 0.7;
    z-index: 2;
  }
  100% {
    opacity: 100;
    z-index: 2;
  }
}

@keyframes button1-appear-animation {
  0% {
    transform: translate(0 0);
  }
  70% {
    transform: translateX(70%);
  }
  100% {
    transform: translateX(70%) translateY(-250%) rotate(-20deg);
  }
}
@keyframes button2-appear-animation {
  0% {
    transform: translate(0 0);
  }
  70% {
    transform: translateX(70%);
  }
  100% {
    transform: translateX(70%) translateY(150%) rotate(20deg);
  }
}
@keyframes button3-appear-animation {
  0% {
    transform: translate(0 0);
  }
  70% {
    transform: translateX(-170%);
  }
  100% {
    transform: translateX(-170%) translateY(150%) rotate(-20deg);
  }
}
@keyframes button4-appear-animation {
  0% {
    transform: translate(0 0);
  }
  70% {
    transform: translateX(-170%);
  }
  100% {
    transform: translateX(-170%) translateY(-250%) rotate(20deg);
  }
}
</style>
