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
        <div class="company_intro" @click.prevent="$router.push('/company')">
          <p class="intro_title">회사소개</p>
          <p class="intro_content">2021년<br/><br/>그린석재가 더욱 품격있게 도약합니다.</p>
        </div>
        <div class="other_intro">
          <div class="product_intro" @click="$router.push('/product')">
            <p class="intro_title">제품소개</p>
            <p class="intro_content">그린석재는 최고의 품질을 보장합니다.</p>
          </div>
          <div class="list_intro">
            <div class="mr_l" @click="toNaverMap"><i class="fa fa-map-marked-alt fa-5x"></i><br/>오시는 길</div>
            <div class="mr_r"><i class="fas fa-download fa-5x"></i><br/>카탈로그 다운로드</div>
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
  };

  private toNaverMap() {
    window.open('https://map.naver.com/v5/search/%EA%B7%B8%EB%A6%B0%EC%84%9D%EC%9E%AC/place/1968912385?c=14172590.7087530,4574674.9285252,14,0,0,0,dh');
  }
}
</script>

<style>

</style>
