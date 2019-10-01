<template>
  <div class="menu" :hovered-style="hovered">
    <btn path="/" class="button-1" msg="Home" :active="hovered" />
    <btn path="/about" class="button-2" msg="About" :active="hovered" />
    <btn path="/help" class="button-3" msg="Help" :active="hovered" />
    <btn path="/" class="button-4" msg="Home" :active="hovered" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Btn from "@/components/button/CircleButton.vue";
export default Vue.extend({
  components: {
    Btn
  },
  props: {
    hovered: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss" scoped>
.menu {
  transform-origin: center center;
  transform: translate(-50px, -75px);

  &[hovered-style="true"] {
    animation: appear-animation 1.1s ease-in forwards;
    .button-1 {
      animation: button1-appear-animation 0.7s ease-in forwards;
    }
    .button-2 {
      animation: button2-appear-animation 1.1s ease-in forwards;
    }
    .button-3 {
      animation: button3-appear-animation 0.5s ease-in forwards;
    }
    .button-4 {
      animation: button4-appear-animation 0.9s ease-in forwards;
    }
  }
}
@keyframes appear-animation {
  0% {
    opacity: 0;
  }
  90% {
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
    transform: translateX(220%);
  }
  100% {
    transform: translateX(220%) translateY(-170%);
  }
}
@keyframes button1-disappear-animation {
  0% {
    transform: translateX(220%) translateY(-170%);
  }
  30% {
    transform: translateX(220%);
  }
  100% {
    transform: translate(0 0);
  }
}

@keyframes button2-appear-animation {
  0% {
    transform: translate(0 0);
  }
  70% {
    transform: translateX(190%);
  }
  100% {
    transform: translateX(190%) translateY(150%);
  }
}
@keyframes button3-appear-animation {
  0% {
    transform: translate(0 0);
  }
  80% {
    transform: translateX(-190%);
  }
  100% {
    transform: translateX(-190%) translateY(100%);
  }
}
@keyframes button4-appear-animation {
  0% {
    transform: translate(0 0);
  }
  80% {
    transform: translateX(-230%);
  }
  100% {
    transform: translateX(-230%) translateY(-190%);
  }
}
</style>
