<template>
  <div class="help">
    <div
      kappa-component
      v-on:mouseover="cohered = true"
      v-on:mouseleave="cohered = false"
    >
      <Menu />
      <Kappa />
    </div>
    <p>hi!: {{ this.$store.getters.getKeyword }}</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "@/components/Menu.vue";
import Kappa from "@/components/Kappa.vue";
@Component({
  name: "help",
  components: {
    Menu,
    Kappa
  }
})
export default class Home extends Vue {
  private redirect(): void {
    if (!this.$store.getters.isOpened) {
      this.$router.push("/");
    }
  }
  async mounted() {
    await this.redirect();
  }
}
</script>
