<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import NavbarComponent from "@/components/NavbarComponent.vue";
// import * as firebase from "firebase/app";
// import { version } from "../package.json";

export default {
  components: {
    // NavbarComponent
  }
  // metaInfo: {
  //   changed(metaInfo) {
  //     firebase.analytics().setCurrentScreen(metaInfo.title);
  //     firebase.analytics().logEvent({
  //       app_name: "web", //this.isPWA() ? "pwa" : "web",
  //       screen_name: metaInfo.title,
  //       app_version: version
  //     });
  //   }
  // }
};
</script>

<style lang="scss">
@import "~@/scss/style.scss";
</style>
