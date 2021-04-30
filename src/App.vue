<template>
  <header class="header">
    <h1>그린석재</h1>
    <nav class="menu">
      <ul>
        <li>그린석재</li>
      </ul>
    </nav>
  </header>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
}
.header h1 {
  align-items: center;
  align-self: center;
  color: white;
  width: 200px;
}
.menu ul {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style: none;
}
</style>
