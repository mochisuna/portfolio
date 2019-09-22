<template>
  <div class="about">
    <Menu />
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Menu from "@/components/menu/CircleMenu.vue";

export default Vue.extend({
  components: {
    Menu
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
