<template>
  <transition mode="out-in">
    <div>
      <kppa-img :style="styles" />
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from "vue";
import KppaImg from "@/assets/kappa.svg";
import { mapGetters } from "vuex";
import { TimelineMax, Linear, TweenMax, Expo } from "gsap";

export default Vue.extend({
  components: {
    KppaImg
  },
  props: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
    rotate: { type: Number, default: 0 },
    scaleX: { type: String, default: "1" },
    scaleY: { type: String, default: "1" }
  },
  data() {
    return {
      timeline: new TimelineMax()
    };
  },
  computed: {
    ...mapGetters({ hovered: "isHovered", clicked: "isClicked" }),
    styles(): Object {
      return {
        transform: `translate(${this.x}px, ${this.y}px) rotate(${this.rotate}deg) scale(${this.scaleX}, ${this.scaleY})`
      };
    }
  },
  watch: {
    async hovered(val) {
      if (val) {
        await this.disappearAnimation();
      } else {
        await this.appearAnimation();
        await this.cloudAnimation();
      }
    },
    async clicked(val) {
      if (val) {
        TweenMax.to(".kappa-head", 0.5, {
          transformOrigin: "center center",
          ease: Expo.easeOut,
          y: -300
        });
      } else {
        TweenMax.to(".kappa-head", 1, {
          transformOrigin: "center center",
          y: 0
        });
      }
    }
  },
  async mounted() {
    this.cloudAnimation();
  },
  methods: {
    async cloudAnimation() {
      this.timeline
        .set(
          [
            ".kappa-animation-group-1",
            ".kappa-animation-group-2",
            ".kappa-animation-group-3"
          ],
          { transformOrigin: "50% 50%" }
        )
        .fromTo(
          ".kappa-animation-group-1",
          0.7,
          {
            scale: 1
          },
          {
            repeatDelay: 0,
            scale: 1.1,
            ease: Linear.easeInOut,
            repeat: -1,
            yoyo: true
          }
        )
        .fromTo(
          ".kappa-animation-group-2",
          1.1,
          {
            scale: 1
          },
          {
            repeatDelay: 0.2,
            scale: 0.9,
            ease: Linear.easeInOut,
            repeat: -1,
            yoyo: true
          }
        )
        .fromTo(
          ".kappa-animation-group-3",
          0.8,
          {
            scale: 1
          },
          {
            repeatDelay: 0.3,
            scale: 1.2,
            ease: Linear.easeInOut,
            repeat: -1,
            yoyo: true
          }
        );
    },
    async disappearAnimation() {
      this.timeline.kill();
      this.timeline = new TimelineMax();
      this.timeline
        .set([".kappa-element-set", ".kappa-frame-set"], {
          transformOrigin: "50% 50%"
        })
        .to([".kappa-element-set", ".kappa-frame-set"], 0.2, {
          strokeOpacity: 0.7,
          ease: Linear.easeIn,
          opacity: 1,
          scale: 1.1
        })
        .to([".kappa-element-set", ".kappa-frame-set"], 0.1, {
          strokeOpacity: 0,
          opacity: 1,
          scale: 0.8
        })
        .to([".kappa-element-set", ".kappa-frame-set", "kappa-body"], 0.1, {
          strokeOpacity: 0,
          opacity: 0,
          scale: 0
        });
      TweenMax.fromTo(
        ".kappa-body",
        0.5,
        {
          transformOrigin: "center center",
          strokeOpacity: 0,
          opacity: 0,
          scale: 0.3
        },
        {
          strokeOpacity: 1,
          opacity: 1,
          scale: 1
        }
      );
    },
    async appearAnimation() {
      this.timeline
        .to([".kappa-element-set", ".kappa-frame-set"], 0.1, {
          strokeOpacity: 0,
          opacity: 0.5,
          ease: Linear.easeOut,
          scale: 0.25
        })
        .to([".kappa-element-set", ".kappa-frame-set"], 0.1, {
          strokeOpacity: 0,
          opacity: 1,
          scale: 0.5
        })
        .to([".kappa-element-set", ".kappa-frame-set"], 0.1, {
          strokeOpacity: 0.5,
          opacity: 1,
          scale: 0.75
        })
        .to([".kappa-element-set", ".kappa-frame-set"], 0.1, {
          strokeOpacity: 1,
          opacity: 1,
          scale: 1
        });
      TweenMax.fromTo(
        ".kappa-body",
        1,
        {
          transformOrigin: "center center",
          strokeOpacity: 1,
          opacity: 1,
          scale: 1
        },
        {
          strokeOpacity: 0,
          opacity: 0,
          scale: 0.3
        }
      );
    }
  }
});
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
.kappa-cloud {
}
</style>
