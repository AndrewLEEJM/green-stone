<template>
  <div>
    <div class="company_banner" />
    <section class="company_outline">
      <h1>그린석재</h1>
      <p class="bar"></p>
      <img src="@/assets/images/outline.jpg" alt="" />
      <p class="content">
        그린석재는 경기북부 지역 최대규모 석재가공장비를 운영하고 있어 연간
        6,700Ton 규모 처리가 가능합니다. 이러한 규모를 처리하기 위하여 7.300m2
        규모의 재고관리 시설과 자동화 장비 를 보유하고 있어 경쟁사 대비 우수한
        기술력을 확보하고 있습니다.
        <br />
        2007년 법인설립이후 석재관련 기술개발을 지속적으로 진행하였으며 특히
        석재를 재활용하는 분야에서 독보적인 위치에 있습니다
      </p>
    </section>
    <section class="company_process">
      <h1>공정과정</h1>
      <p class="bar"></p>
      <div class="process_container">
        <div class="process_box">
          <img src="@/assets/images/outline.jpg" alt="" />원석수입
        </div>
        <img src="@/assets/images/arrow.png" alt="" class="arrow" />
        <div class="process_box">
          <img src="@/assets/images/outline.jpg" alt="" />할석
        </div>
        <img src="@/assets/images/arrow.png" alt="" class="arrow" />
        <div class="process_box">
          <img src="@/assets/images/outline.jpg" alt="" />표면마감
        </div>
      </div>
      <div class="process_container">
        <div class="process_box">
          <img src="@/assets/images/outline.jpg" alt="" />재단
        </div>
        <img src="@/assets/images/arrow.png" alt="" class="arrow" />
        <div class="process_box">
          <img src="@/assets/images/outline.jpg" alt="" />포장
        </div>
        <img src="@/assets/images/arrow.png" alt="" class="arrow" />
        <div class="process_box">
          <img src="@/assets/images/outline.jpg" alt="" />검수
        </div>
      </div>
    </section>
    <section class="company_location">
      <h1>오시는 길</h1>
      <p class="bar"></p>
      <img src="@/assets/images/location.jpg" alt="" />
      <p class="content">
        ???
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Company extends Vue {}
</script>
