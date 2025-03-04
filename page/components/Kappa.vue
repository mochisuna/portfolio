<template>
  <div id="target">
    <KappaSVG />
    <div class="button1"></div>
    <div class="button2"></div>
    <div class="button3"></div>
    <div class="button4"></div>
  </div>
</template>

<script setup>
import KappaSVG from "@/assets/kappa.svg"; // SVG を直接インポート
import { ref, onMounted } from "vue";
import svgContent from "@/assets/kappa.svg?raw";
const svgContainer = ref(null);

onMounted(() => {
  if (svgContainer.value) {
    svgContainer.value.innerHTML = svgContent;
  }
});

const isActive = ref(false);

const toggleAnimation = () => {
  isActive.value = !isActive.value;
};
</script>

<style>
.kappa-animation-group-1 {
  transform-origin: center center;
  animation: scale-animation-1 0.8s ease-in-out infinite alternate;
}
.kappa-animation-group-2 {
  transform-origin: center center;
  animation: scale-animation-2 1s ease-in-out infinite alternate;
}
.kappa-animation-group-3 {
  transform-origin: center center;
  animation: scale-animation-3 0.7s ease-in-out infinite alternate;
}

.eye {
  animation: blink 10s linear infinite;
  transform-origin: center bottom;
}

.kappa-frame-set,
.kappa-element-set {
  transform-origin: center center;
  animation: appear-animation 0.8s ease-in forwards;
}
/* #root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff5e2;
} */
#target {
  position: absolute;
  background-color: #44435d;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
}
.kappa-cloud {
  top: calc(50% - 100px);
  left: calc(50% - 100px);
}
.button1,
.button2,
.button3,
.button4 {
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  width: 0;
  height: 0;
  background-color: #e74c3c;
  position: absolute;
  transition: transform 1s ease, width 0.3s ease, height 0.3s ease;
  border-radius: 8px;
  opacity: 0;
}

#target:hover {
  .kappa-frame-set,
  .kappa-element-set {
    transform-origin: center center;
    animation: disappear-animation 0.5s ease-in forwards;
  }
  .kappa-body {
    transition-delay: 0.2s;
    transition-duration: 0.3s;
    transform-origin: center center;
    transform: scale(1, 1);
  }

  .button1 {
    width: 40px;
    height: 40px;
    opacity: 1;
    transform: translate(-80px, 80px);
  }

  .button2 {
    width: 40px;
    height: 40px;
    opacity: 1;
    transform: translate(-80px, -80px);
  }

  .button3 {
    width: 40px;
    height: 40px;
    opacity: 1;
    transform: translate(80px, -80px);
  }

  .button4 {
    width: 40px;
    height: 40px;
    opacity: 1;
    transform: translate(80px, 80px);
  }
}

.kappa-body {
  transition-duration: 0.4s;
  transform-origin: center center;
  transform: scale(0, 0);
}

@keyframes scale-animation-1 {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale-animation-2 {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1) 0.05;
  }
}
@keyframes scale-animation-3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.95);
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
@keyframes blink {
  0%,
  94%,
  100% {
    transform: scaleY(1);
    transform-origin: center center;
  }
  98% {
    transform: scaleY(0.1);
    transform-origin: center center;
  }
}
</style>
