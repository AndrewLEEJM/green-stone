<template>
  <div>
    <div class="estimate_banner"></div>
    <section class="company_outline">
      <h1>견적문의</h1>
      <p class="bar"></p>
      <div class="estimate_container">
        <input type="text" class="input_text" placeholder="제목">
        <textarea placeholder="문의 내용" id="" cols="30" rows="10" class="input_textarea"></textarea>
        <button>문의하기</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class Estimate extends Vue {}
</script>
