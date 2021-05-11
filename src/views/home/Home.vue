<template>
  <div>
    <div class="mainContainer">
      <splide :options="options">
        <splide-slide>
          <img src="@/assets/images/factory.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="@/assets/images/factory.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="@/assets/images/factory.jpg" />
        </splide-slide>
      </splide>
    </div>
    <div class="businessSection">
      <h2 align="center">B U S I N E S S</h2>
      <ul>
        <li>
          <i class="far fa-building fa-5x"></i>
          <p>회사소개</p>
        </li>
        <li>
          <i class="fas fa-cubes fa-5x"></i>
          <p>제품소개</p>
        </li>
        <li>
          <i class="fas fa-file-invoice-dollar fa-5x"></i>
          <p>견적문의</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Splide from '@splidejs/vue-splide/src/js/components/Splide.vue';
import SplideSlide from '@splidejs/vue-splide/src/js/components/SplideSlide.vue';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

@Options({
  components: {
    Splide,
    SplideSlide,
  },
})
export default class Home extends Vue {
  private options = {
    perPage: 1,
    height: 500,
  }
}
</script>

<style>
html {
  margin: 0;
}
body {
  margin: 0;
}
.mainContainer {
  width: 100%;
  height: 500px;
  background-color: antiquewhite;
}
.businessSection {
  width: 100%;
  height: 400px;
  background-color: rgb(218, 157, 78);
  background-image: url("../../assets/images/stone.jpg");
}
.businessSection h2 {
  margin: 0;
  margin-left: 35px;
  font-size: 1.875rem;
  padding-top: 70px;
  color: rgb(240, 240, 240);
}
.businessSection ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  height: 290px;
  align-items: center;
}
.businessSection ul li {
  color: rgb(240, 240, 240);
}
.businessSection ul li:hover {
  color: rgb(151, 35, 35);
  cursor: pointer;
}
.businessSection ul li p {
  font-weight: bold;
}
</style>
