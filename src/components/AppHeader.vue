<template>
  <header class="header">
    <h1 @click="$router.push('/')">그린석재</h1>
    <nav class="menu">
      <ul>
        <li><a href="#" @click.prevent="$router.push('/company')">회사소개</a></li>
        <li>
          <a href="#" @click.prevent="$router.push('/product')">제품소개</a>
        </li>
        <li><a href="#" @click.prevent="$router.push('/product')">납품사례</a></li>
        <li><a href="#" @click.prevent="$router.push('/estimate')">견적문의</a></li>
      </ul>
    </nav>
    <div class="mobile_btn">
      <img src="@/assets/images/hamburger.png" alt="" />
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class AppHeader extends Vue {}
</script>
