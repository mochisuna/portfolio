<template>
  <transition mode="out-in">
    <div>
      <KppaImg
        :style="styles"
        :ref="'kappa'"
        :fly="`${flyaway}`"
        :cohere="`${cohered}`"
        v-on:mouseover="cohered = true"
        v-on:mouseleave="cohered = false"
      />
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import KppaImg from "@/assets/kappa.svg";

@Component({
  name: "kappa",
  components: {
    KppaImg
  }
})
export default class Kappa extends Vue {
  @Prop({ default: 0 }) private x!: Number;
  @Prop({ default: 0 }) private y!: Number;
  @Prop({ default: 0 }) private rotate!: Number;
  @Prop({ default: 1 }) private scaleX!: Number;
  @Prop({ default: 1 }) private scaleY!: Number;
  @Prop({ default: false }) private flyaway!: boolean;
  private cohered: boolean = false;

  private get styles() {
    return {
      transform: `translate(${this.x}px, ${this.y}px) rotate(${this.rotate}deg) scale(${this.scaleX}, ${this.scaleY})`
    };
  }
}
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.kappa-cloud {
  // [info]この辺は力押しなので直したい
  &[fly="false"] {
    .kappa-head {
      transform-origin: center;
      transition-duration: 1s;
    }
  }
  &[fly="true"] {
    .kappa-head {
      transition-duration: 0.3s;
      transform: translateY(-300px);
    }
  }

  &[cohere="true"] {
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
  &[cohere="false"] {
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
@keyframes fly-away {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-30px);
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
  25% {
    stroke-opacity: 0;
    opacity: 20;
    transform: scale(0.8, 0.8);
  }
  80% {
    stroke-opacity: 100;
    opacity: 100;
    transform: scale(1.1, 1.1);
  }
  100% {
    stroke-opacity: 100;
    opacity: 100;
    transform: scale(1, 1);
  }
}

@keyframes disappear-animation {
  0% {
    stroke-opacity: 100;
    opacity: 100;
    transform: scale(1, 1);
  }
  40% {
    opacity: 40;
    stroke-opacity: 20;
    transform: scale(1.1, 1.1);
  }
  70% {
    stroke-opacity: 0;
    opacity: 50;
  }
  100% {
    stroke-opacity: 0;
    opacity: 0;
    transform: scale(0, 0);
  }
}
</style>
