<template>
  <div>
    <app-header />
    <router-view />
    <app-bottom />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AppHeader from './components/AppHeader.vue';
import AppBottom from './components/AppBottom.vue';

@Options({
  components: {
    AppHeader,
    AppBottom,
  },
})
export default class App extends Vue {}
</script>

<style>
@import "./assets/css/common.css";
</style>
