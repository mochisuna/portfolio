import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  async mounted() {
    console.log(`A: ${this.$store.getters.isOpened}`);
    await this.$store.dispatch("setKeywordAction", { keyword: "walcome!" });
    console.log(`B: ${this.$store.getters.isOpened}`);
  }
}
