<template>
  <div
    class="layer"
    :active-style="`${active}`"
    :selected-style="`${selected}`"
    @mouseover="selected = true"
    @mouseleave="selected = false"
  >
    <hr v-show="selected" class="line-top" />
    <router-link class="circle" :to="{ path: `${path}` }">
      {{ msg }}
    </router-link>
    <hr v-show="selected" class="line-bottom" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FlatButton",
  props: {
    background: { type: String, default: "" },
    msg: { type: String, default: "", requiered: true },
    path: { type: String, default: "", requiered: true },
    active: { type: Boolean, default: false }
  },
  data() {
    return {
      selected: false
    };
  }
});
</script>

<style lang="scss" scoped>
.layer {
  position: absolute;
  transform-origin: center center;
  &[active-style="false"] {
    .circle {
      transition-duration: 1s;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      text-align: center;
      color: white;
      vertical-align: middle;
      display: table-cell;
      background: #91ffab;
      text-decoration: none;
    }
  }
  &[active-style="true"] {
    &[selected-style="false"] {
      .circle {
        transition-duration: 0.5s;
        width: 180px;
        height: 50px;
        border-radius: 50px;
        text-align: center;
        color: white;
        vertical-align: middle;
        display: table-cell;
        background: #61aa89;
        text-decoration: none;
      }
    }
    &[selected-style="true"] {
      hr {
        position: absolute;
        border: none;
        z-index: 2;
        border-top: 1px white solid;
      }
      .line-top {
        top: 0px;
        left: 5px;
        animation: appear-top-animation 0.5s ease-out 0.3s forwards;
      }
      .line-bottom {
        top: 37px;
        animation: appear-bottom-animation 0.5s ease-out 0.3s forwards;
      }
      .circle {
        transition-duration: 0.5s;
        height: 55px;
        border-radius: 5px;
        width: 185px;
        text-align: center;
        color: white;
        vertical-align: middle;
        display: table-cell;
        background: red;
        text-decoration: none;
      }
    }
  }
}

@keyframes appear-top-animation {
  0% {
    width: 0px;
    opacity: 0;
  }

  100% {
    width: 100px;
    opacity: 0.5;
  }
}
@keyframes appear-bottom-animation {
  0% {
    width: 0px;
    left: 180px;
    opacity: 0;
  }

  100% {
    width: 100px;
    left: 80px;
    opacity: 0.5;
  }
}
</style>
