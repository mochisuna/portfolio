<template>
  <div class="help">
    <div kappa-component>
      <top-menu />
      <kappa />
    </div>
    <p>hi!: {{ this.$store.getters.getKeyword }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TopMenu from "@/components/menu/CircleMenu.vue";
import Kappa from "@/components/Kappa.vue";

export default Vue.extend({
  components: {
    TopMenu,
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
