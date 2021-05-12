<template>
  <div>
    <div class="product_container" v-for="(product, idx) in products" :key="idx">
      <div class="product_img">
        <img :src="require(`@/assets/images/products/${product.img}`)" alt="">
      </div>
      <div class="product_info">
        <h3>{{product.name}}</h3>
        <p>{{product.info}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Product extends Vue {
  private products = [
    { img: 'product1.jpg', info: '주로 건물 내. 외벽 마감으로 사용되며, 표면이 광택이 나도록 매끈하고 반짝반짝한 것이 특징이다.', name: '연마 마감' },
    { img: 'product2.jpg', info: '미끄럼방지효과와 강한 흡수력을 지니고 있으며, 반영구적인 것이 특징이다.', name: '혼드 마감' },
    { img: 'product3.jpg', info: '자귀형의 날망치로 정다듬 또는 도드락 다듬면 위를 일정방향, 평행선 등으로 나란히 찍어 다듬어 평탄하게 하는 돌 표면 마무리법이며, 반영구적인 것이 특징이다.', name: '잔다듬 마감' },
  ]
}
</script>

<style>
.product_container{
  display: flex;
  margin: 80px auto;
  width: 80%;
  justify-content: space-evenly;
  padding: 10px;
}
.product_info{
  text-align: left;
  width: 50%;
}
.product_img{
  width: fit-content;
  box-shadow: 5px 5px 15px;
}
.product_img img{
  height: 100%;
}
@media screen and (max-width: 800px) {
  .product_container{
  display: block;
}
.product_info{
  text-align: center;
  margin: 0 auto;
  width: 90%;
}
.product_img{
  width: fit-content;
  margin: 0 auto;
  box-shadow: 5px 5px 15px;
}
}
</style>
