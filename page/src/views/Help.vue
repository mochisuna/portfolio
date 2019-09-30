<template>
  <div class="help">
    <div
      kappa-component
      @mouseover="cohered = true"
      @mouseleave="cohered = false"
    >
      <Menu />
      <Kappa />
    </div>
    <p>hi!: {{ this.$store.getters.getKeyword }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Menu from "@/components/menu/CircleMenu.vue";
import Kappa from "@/components/Kappa.vue";

export default Vue.extend({
  name: "Help",
  components: {
    Menu,
    Kappa
  },
  async mounted() {
    await this.redirect();
  },
  methods: {
    redirect(): void {
      if (!this.$store.getters.isOpened) {
        this.$router.push("/");
      }
    }
  }
});
</script>
