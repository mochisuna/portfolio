<template>
  <div id="base">
    <div id="target">
      <KappaSVG id="kappa" />
      <div class="circle" id="circle1"></div>
      <div class="circle" id="circle2"></div>
      <div class="circle" id="circle3"></div>
      <div class="circle" id="circle4"></div>
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

<style lang="scss">
// 色系の定義
$bgColor: #fff4cc;
$borderColor: #707070;
$kappaColor: #91ffab;
$buttonColor: #88aaff;
$buttonHoverColor: #cc66aa;

// サイズ系の定義
$targetSize: 800px;
$kappaSize: 500px;
$circleSize: 50px;
$borderSize: 7px;

$buttonDistance: 250px;
$buttonRadius: 10px;

// 繰り返しアニメーションの時間定義
$kappaAnime01Rate: 0.8s;
$kappaAnime02Rate: 1s;
$kappaAnime03Rate: 0.7s;
$kappaBlinkAnimeRate: 8s;

// アクション系アニメーションの時間定義
// マウスホバー時(0.1s単位)
// クラウド: *******--------- : 一瞬膨れたあと縮退
// 　河童　: ---*******------ : 少し大きなサイズから規定サイズに戻す（小さく変形して見える）
// 　移動　: -----*****------ : 4つの円が移動する
// 　変形　: ------*******--- : 4つの円がボタンに近い形に変形する
// ボタン　: ------********** :
$kappaDisappearCloudAnimeRate: 0.7s;
$kappaSeparateBodyDelayAnimeRate: 0.3s;
$kappaSeparateBodyAnimeRate: 0.7s;

$circleMoveDelayAnimeRate: 0.5s;
$circleMoveAnimeRate: 0.5s;
$circleChangeDelayAnimeRate: 0.6s;
$circleChangeAnimeRate: 0.7s;

$buttonAppearAnimeRate: 0.5s;
$buttonAppearDelayAnimeRate: 1s;

// マウス外し時(0.1s単位)
// cloud: ******** : 一気に規定サイズに拡大
// body : ***----- : 規定サイズからあえて少し大きく変形
$kappaAppearCloudAnimeRate: 0.8s;
$kappaBodyCombineAnimeRate: 0.3s;

#base {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $bgColor;
}

#target {
  position: absolute;
  left: calc(50% - $targetSize/2);
  top: calc(50% - $targetSize/2);
  width: $targetSize;
  height: $targetSize;
}

#kappa {
  position: absolute;
  left: calc(50% - $kappaSize/2);
  top: calc(50% - $kappaSize/2);
  z-index: 2;

  .kappa-animation-group-1 {
    transform-origin: center;
    animation: scale-animation-1 $kappaAnime01Rate ease-in-out infinite
      alternate;
  }
  .kappa-animation-group-2 {
    transform-origin: center;
    animation: scale-animation-2 $kappaAnime02Rate ease-in-out infinite
      alternate;
  }
  .kappa-animation-group-3 {
    transform-origin: center;
    animation: scale-animation-3 $kappaAnime03Rate ease-in-out infinite
      alternate;
  }
  .eye {
    animation: blink $kappaBlinkAnimeRate linear infinite;
    transform-origin: center bottom;
  }
  .kappa-frame-set,
  .kappa-element-set {
    transform-origin: center;
    animation: appear-animation $kappaAppearCloudAnimeRate ease-in forwards;
  }
  .kappa-body {
    transition-duration: $kappaBodyCombineAnimeRate;
    transform-origin: center;
    transform: scale(1.1, 1.1);
  }
  .kappa-head {
    transform: translate(0, 0);
    transition-duration: 1.5s;
  }
}
#kappa:active {
  .kappa-head {
    transform: translate(0, -100px);
    transition-duration: 0.3s;
  }
}
.circle {
  top: calc(50% - $circleSize/2);
  left: calc(50% - $circleSize/2);
  width: $circleSize;
  height: $circleSize;
  background-color: $kappaColor;
  border: $borderSize $borderColor;
  border-style: solid;
  border-radius: 100%;
  position: absolute;
  transition: transform $circleMoveAnimeRate ease;
}

.button {
  z-index: 3;
  opacity: 0;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  width: 300px;
  height: 200px;
  border-radius: $buttonRadius;
  background-color: $buttonColor;
  position: absolute;
}
.button::after {
  content: "";
  position: absolute;
  top: $buttonRadius + 2;
  left: $buttonRadius + 2;
  right: $buttonRadius + 2;
  bottom: $buttonRadius + 2;
  border: 3px solid white;
  border-radius: 0%;
  pointer-events: none;
}

.button:hover {
  transition-duration: 1s;
  background-color: $buttonHoverColor;
}

#button1 {
  transform: translate(-$buttonDistance, -$buttonDistance);
}

#button2 {
  transform: translate(-$buttonDistance, $buttonDistance);
}

#button3 {
  transform: translate($buttonDistance, -$buttonDistance);
}

#button4 {
  transform: translate($buttonDistance, $buttonDistance);
}

#target:hover {
  .kappa-frame-set,
  .kappa-element-set {
    animation: disappear-animation $kappaDisappearCloudAnimeRate ease-in
      forwards;
  }

  .kappa-body {
    transition-delay: $kappaSeparateBodyDelayAnimeRate;
    transition-duration: $kappaSeparateBodyAnimeRate;
    transform: scale(1, 1);
  }
  .circle {
    animation: circle-animation $circleChangeAnimeRate ease-in forwards;
    // animation-delay: $circleChangeDelayAnimeRate;
    // transition-delay: $circleMoveDelayAnimeRate;
  }

  #circle1 {
    transform: translate(-$buttonDistance, -$buttonDistance);
    transition-delay: $circleMoveDelayAnimeRate;
    animation-delay: $circleChangeDelayAnimeRate;
  }

  #circle2 {
    transform: translate(-$buttonDistance, $buttonDistance);
    transition-delay: $circleMoveDelayAnimeRate + 0.3s;
    animation-delay: $circleChangeDelayAnimeRate + 0.3s;
  }

  #circle3 {
    transform: translate($buttonDistance, -$buttonDistance);
    transition-delay: $circleMoveDelayAnimeRate + 0.6s;
    animation-delay: $circleChangeDelayAnimeRate + 0.6s;
  }

  #circle4 {
    transform: translate($buttonDistance, $buttonDistance);
    transition-delay: $circleMoveDelayAnimeRate + 0.9s;
    animation-delay: $circleChangeDelayAnimeRate + 0.9s;
  }

  .button {
    animation: button-animation $buttonAppearAnimeRate ease-in forwards;
    // animation-delay: $buttonAppearDelayAnimeRate;
  }

  #button1 {
    animation-delay: $buttonAppearDelayAnimeRate;
  }

  #button2 {
    animation-delay: $buttonAppearDelayAnimeRate + 0.3s;
  }

  #button3 {
    animation-delay: $buttonAppearDelayAnimeRate + 0.6s;
  }

  #button4 {
    animation-delay: $buttonAppearDelayAnimeRate + 0.9s;
  }
}

@keyframes scale-animation-1 {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes scale-animation-2 {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1) 0.05;
  }
}
@keyframes scale-animation-3 {
  from {
    transform: scale(1);
  }
  to {
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
    transform: scale(0.5, 0.5);
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

@keyframes circle-animation {
  0% {
  }
  50% {
    border-radius: $buttonRadius;
    background-color: $kappaColor;
    background-color: $buttonColor;
  }
  90% {
    opacity: 1;
    border-radius: $buttonRadius;
  }
  100% {
    opacity: 0;
    background-color: $buttonColor;
    border-radius: $buttonRadius;
  }
}

@keyframes button-animation {
  0% {
    opacity: 1;
    top: calc(50% - $circleSize/2);
    left: calc(50% - $circleSize/2);
    width: $circleSize + 20;
    height: $circleSize + 20;
  }
  100% {
    opacity: 1;
  }
}
</style>
