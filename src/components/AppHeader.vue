<template>
  <div>
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
      <div class="mobile_btn" @click="openMobileMenu">
        <img src="@/assets/images/hamburger.png" alt="" />
      </div>
    </header>
    <header class="mobile_header" v-if="isMobileMenu">
      <nav class="mobile_menu">
        <ul>
          <li><a href="#" @click.prevent="movePage('/company')">회사소개</a></li>
          <li>
            <a href="#" @click.prevent="movePage('/product')">제품소개</a>
          </li>
          <li><a href="#" @click.prevent="movePage('/product')">납품사례</a></li>
          <li><a href="#" @click.prevent="movePage('/estimate')">견적문의</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class AppHeader extends Vue {
  private isMobileMenu = false;

  private openMobileMenu() {
    this.isMobileMenu = !this.isMobileMenu;
  }

  private movePage(page: string) {
    this.isMobileMenu = !this.isMobileMenu;
    this.$router.push(page);
  }

  private widthSize = document.body.clientWidth;

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.widthSize = document.body.clientWidth;
        if (this.widthSize > 800) {
          this.isMobileMenu = false;
        }
      });
    });
  }
}
</script>
