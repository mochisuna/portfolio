import Vue from "vue";
export default Vue.extend({
  async mounted() {
    console.log(`A: ${this.$store.getters.isOpened}`);
    console.log(`B: ${this.$store.getters.getKeyword}`);
    await this.$store.dispatch("setKeywordAction", { keyword: "welcome!" });
    console.log(`B: ${this.$store.getters.isOpened}`);
    console.log(`B: ${this.$store.getters.getKeyword}`);
  }
});
