<template>
  <div id="base">
    <div id="target">
      <KappaSVG id="kappa" />
      <div class="button" id="button1"></div>
      <div class="button" id="button2"></div>
      <div class="button" id="button3"></div>
      <div class="button" id="button4"></div>
    </div>
  </div>
</template>

<script setup>
import KappaSVG from "@/assets/kappa.svg"; // SVG を直接インポート
const isActive = ref(false);

const toggleAnimation = () => {
  isActive.value = !isActive.value;
};
</script>

<style>
#base {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff4cc;
}
#target {
  position: absolute;
  left: calc(50% - 400px);
  top: calc(50% - 400px);
  width: 800px;
  height: 800px;
}

#kappa {
  position: absolute;
  left: calc(50% - 250px);
  top: calc(50% - 250px);
  z-index: 2;
}
.kappa-animation-group-1 {
  transform-origin: center;
  animation: scale-animation-1 0.8s ease-in-out infinite alternate;
}
.kappa-animation-group-2 {
  transform-origin: center;
  animation: scale-animation-2 1s ease-in-out infinite alternate;
}
.kappa-animation-group-3 {
  transform-origin: center;
  animation: scale-animation-3 0.7s ease-in-out infinite alternate;
}
.eye {
  animation: blink 10s linear infinite;
  transform-origin: center bottom;
}
.kappa-frame-set,
.kappa-element-set {
  transform-origin: center;
  animation: appear-animation 0.8s ease-in forwards;
}
.kappa-body {
  transition-duration: 0.4s;
  transform-origin: center;
  transform: scale(0, 0);
}
.button {
  top: calc(50% - 60px);
  left: calc(50% - 70px);
  width: 120px;
  height: 120px;
  background-color: #91ffab;
  border-color: #707070;
  border-width: 7px;
  border-style: solid;
  border-radius: 100%;
  position: absolute;
  transition: transform 0.5s ease;
}

#target:hover {
  .kappa-frame-set,
  .kappa-element-set {
    transform-origin: center;
    animation: disappear-animation 0.7s ease-in forwards;
  }
  .kappa-body {
    transition-delay: 0.2s;
    transition-duration: 0.3s;
    transform-origin: center;
    transform: scale(1, 1);
  }
  .button {
    border-radius: 10%;
    transition: transform 0.5s ease;
    transition-delay: 0.5s;
  }

  #button1 {
    transform: translate(-250px, -250px);
    /* animation: button-animation 1s ease-in forwards; */
  }

  #button2 {
    transform: translate(-250px, 250px);
    /* animation: button-animation 1s ease-in forwards; */
  }

  #button3 {
    transform: translate(250px, -250px);
    /* animation: button-animation 1s ease-in forwards; */
  }

  #button4 {
    transform: translate(250px, 250px);
    /* animation: button-animation 1s ease-in forwards; */
  }
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
    transform-origin: center;
  }
  98% {
    transform: scaleY(0.1);
    transform-origin: center;
  }
}

@keyframes button-animation {
  0% {
    background-color: #91ffab;
    border-color: #707070;
  }
  30% {
  }
  50% {
    background-color: #91ffab;
  }
  90% {
    background-color: #ff6655;
  }
  100% {
    border-radius: 10%;
  }
}
</style>
