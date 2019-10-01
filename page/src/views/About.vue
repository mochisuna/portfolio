<template>
  <div class="about">
    <top-menu />
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import TopMenu from "@/components/menu/CircleMenu.vue";

export default Vue.extend({
  components: {
    TopMenu
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
