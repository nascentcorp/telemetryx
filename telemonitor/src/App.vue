<template>
  <ion-app id="app">
  `<ion-tabs>
    <ion-tab tab="home">
      <index></index>
    </ion-tab>
    <ion-tab tab="settings">
      <settings></settings>
    </ion-tab>

    <ion-tab-bar slot="bottom">

      <ion-tab-button tab="home"> 
        <ion-icon name="home"></ion-icon>
      </ion-tab-button>

      <ion-tab-button tab="settings">
        <ion-icon name="settings"></ion-icon>
      </ion-tab-button>

    </ion-tab-bar>
    </ion-tabs>
  </ion-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IonicVueRouter } from '@modus/ionic-vue';

@Component({
  components: {
    IonicVueRouter
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
ion-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
