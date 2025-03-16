<template>
  <div id="target">
    <KappaSVG id = "kappa"/>
    <div class="button" id="button1"></div>
    <!-- <div class="button" id="button2"></div>
    <div class="button" id="button3"></div>
    <div class="button" id="button4"></div> -->
  </div>
</template>

<script setup>
import KappaSVG from "@/assets/kappa.svg"; // SVG を直接インポート
// import { ref, onMounted } from "vue";
// const svgContainer = ref(null);

// onMounted(() => {
//   if (svgContainer.value) {
//     svgContainer.value.innerHTML = svgContent;
//   }
// });

const isActive = ref(false);

const toggleAnimation = () => {
  isActive.value = !isActive.value;
};
</script>

<style>
/* #kappa { */
  .kappa-cloud{
    top: calc(50% - 100px);
    left: calc(50% - 100px);
  }
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
  .kappa-body {
    transition-duration: 0.4s;
    transform-origin: center center;
    transform: scale(0, 0);
  }
/* } */

#target {
  /* top: calc(50% - 100px);
  left: calc(50% - 100px);
  position: absolute;
  transform-origin: center center;
  background-color: #44435d; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFF4CC;
}


.button {
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: absolute;
  background-color: #91ffab;
  border-color : #707070;
  border-width : 7px;
  border-style : solid;
}

#target:hover {
  #kappa{
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
  }
  /* .button {
    
  } */
  #button1 {
    /* animation: button-animation 1s ease-in forwards; */
  }

  #button2 {
    /* transform: translate(-80px, -80px); */
    /* animation: button-animation 1s ease-in forwards; */
  }

  #button3 {
    /* transform: translate(80px, -80px); */
    /* animation: button-animation 1s ease-in forwards; */
  }

  #button4 {
    /* transform: translate(80px, 80px); */
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
    transform-origin: center center;
  }
  98% {
    transform: scaleY(0.1);
    transform-origin: center center;
  }
}

@keyframes button-animation {
  0% {
    /* transform: translate(0px, 0px); */
    background-color: #91ffab;
    stroke: #707070;
    stroke-width: 3;
    /* width: 0px;
    height: 0px;
    opacity: 0.5; */
    border-radius: 0%;
  }
  30% {
    opacity: 1;
  }
  50% {
    border-radius: 30%;
  }
  100% {
    width: 250px;
    height: 100px;
    background-color: #ff6655;
    stroke-width: 3;
    stroke: #ffffff;
    border-radius: 10%;
  }
}


</style>
