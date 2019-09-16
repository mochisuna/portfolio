<template>
  <div class="about">
    <Menu />
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Menu from "@/components/Menu.vue";

@Component({
  name: "about",
  components: {
    Menu
  }
})
export default class About extends Vue {
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
