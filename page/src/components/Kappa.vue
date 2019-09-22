<template>
  <transition mode="out-in">
    <div>
      <KppaImg
        :style="styles"
        :flyaway-style="`${flyaway}`"
        :cohered-style="`${cohered || hovered}`"
        @mouseover="cohered = true"
        @mouseleave="cohered = false"
      />
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from "vue";
import KppaImg from "@/assets/kappa.svg";

export default Vue.extend({
  name: "Kappa",
  components: {
    KppaImg
  },
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    rotate: { type: Number, default: 0 },
    scaleX: { type: Number, default: 1 },
    scaleY: { type: Number, default: 1 },
    flyaway: { type: Boolean, default: false },
    hovered: { type: Boolean, default: false }
  },
  data() {
    return {
      cohered: this.hovered
    };
  },
  computed: {
    styles(): Object {
      return {
        transform: `translate(${this.x}px, ${this.y}px) rotate(${this.rotate}deg) scale(${this.scaleX}, ${this.scaleY})`
      };
    }
  }
});
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.kappa-cloud {
  // [info]この辺は力押しなので直したい
  &[flyaway-style="false"] {
    .kappa-head {
      transform-origin: center;
      transition-duration: 1s;
    }
  }
  &[flyaway-style="true"] {
    .kappa-head {
      transition-duration: 0.3s;
      transform: translateY(-300px);
    }
  }

  &[cohered-style="true"] {
    .kappa-element,
    .kappa-frame {
      transform-origin: center;
      animation: disappear-animation 0.5s ease-in forwards;
    }
    .kappa-body {
      transition-duration: 0.8s;
      transform-origin: center;
      transform: scale(1, 1);
    }
  }
  &[cohered-style="false"] {
    .kappa-element:nth-of-type(2n),
    .kappa-frame:nth-of-type(2n) {
      transform-origin: center;
      animation: appear-animation 0.5s ease-in forwards,
        cloud-animation 1.4s ease-in-out 0.5s infinite alternate;
    }
    .kappa-element:nth-of-type(2n + 1),
    .kappa-frame:nth-of-type(2n + 1) {
      transform-origin: center;
      animation: appear-animation 0.5s ease-in forwards,
        cloud-animation 1.9s ease-in-out 0.5s infinite alternate-reverse;
    }
    .kappa-body {
      transition-duration: 0.8s;
      transform-origin: center;
      transform: scale(0, 0);
    }
  }
}
@keyframes cloud-animation {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.1, 1.1);
  }
}

@keyframes appear-animation {
  0% {
    stroke-opacity: 0;
    opacity: 0;
    transform: scale(0.6, 0.6);
  }
  10% {
    stroke-opacity: 0;
    opacity: 1;
    transform: scale(0.7, 0.7);
  }
  25% {
    stroke-opacity: 0.3;
    opacity: 1;
    transform: scale(0.8, 0.8);
  }
  40% {
    stroke-opacity: 1;
    opacity: 1;
    transform: scale(1.1, 1.1);
  }
  100% {
    stroke-opacity: 1;
    opacity: 1;
    transform: scale(1, 1);
  }
}

@keyframes disappear-animation {
  0% {
    stroke-opacity: 1;
    opacity: 1;
    transform: scale(1, 1);
  }
  40% {
    opacity: 1;
    stroke-opacity: 0.7;
    transform: scale(1.1, 1.1);
  }
  70% {
    stroke-opacity: 0;
    opacity: 1;
  }
  100% {
    stroke-opacity: 0;
    opacity: 0;
    transform: scale(0, 0);
  }
}
</style>
