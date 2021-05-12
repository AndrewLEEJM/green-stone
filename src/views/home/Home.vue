<template>
  <div>
    <div class="mainContainer">
      <splide :options="options">
        <splide-slide>
          <img src="@/assets/images/factory1.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="@/assets/images/factory2.jpg" />
        </splide-slide>
        <splide-slide>
          <img src="@/assets/images/factory3.jpg" />
        </splide-slide>
      </splide>
    </div>
    <div class="businessSection">
      <h2 align="center">B U S I N E S S</h2>
      <section class="intro">
        <div class="company_intro">

        </div>
        <div class="other_intro">
          <div class="product_intro">

          </div>
          <div class="list_intro">
            <div class="mr_l">
            </div>
            <div class="mr_r">
            </div>
          </div>
        </div>
      </section>
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
    type: 'loop',
    perPage: 1,
    height: 530,
    margin: 'auto',
    arrows: false,
    autoplay: true,
    interval: 3000,
    speed: 1300,
  }
}
</script>

<style>
html {
  margin: 0;
  background-color: rgb(243, 243, 242);
}
body {
  margin: 0;
}
.mainContainer img{
  width: 100%;
}
.intro{
  display: flex;
  justify-content: center;
}
.company_intro{
  width: 585px;
  height: 529px;
  display: inline-block;
  background: url('~@/assets/images/company_int.jpg');
  background-size: cover;
  filter: brightness(0.7);
  margin-right: 10px;
}
.other_intro{
  width: 585px;
  float: right;
  margin-left: 10px;
}
.product_intro{
  width: 100%;
  height: 260px;
  margin-bottom: 24px;
  background: url('~@/assets/images/product_int.jpg');
  background-size: cover;
  filter: brightness(0.7);
}
.list_intro{
  width: 100%;
}
.mr_l{
  width: 50%;
  height: 245px;
  background-color: darksalmon;
  display: inline-block;
}
.mr_r{
  width: 50%;
  height: 245px;
  background-color: rgb(85, 30, 12);
  display: inline-block;
}
.businessSection h2 {
  margin-bottom: 50px;
  font-size: 1.875rem;
  padding-top: 50px;
  color: rgb(71, 56, 56);
}
</style>
