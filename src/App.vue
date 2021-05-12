<template>
  <div>
    <header class="header">
      <h1 @click="$router.push('/')">그린석재</h1>
      <nav class="menu">
        <ul>
          <li><a href="#">회사소개</a></li>
          <li>
            <a href="#" @click.prevent="$router.push('/product')">제품안내</a>
          </li>
          <li><a href="#">납품사례</a></li>
          <li><a href="#">견적문의</a></li>
        </ul>
      </nav>
      <div class="mobile_btn">
        <img src="@/assets/images/hamburger.png" alt="" />
      </div>
    </header>
    <router-view />
    <footer class="footer">
      <div class="footer_info">
        <p>
          <span>(주)그린석재</span>
          <span class="right_side">사업자등록번호: 127-86-02350</span>
          <span class="right_side">대표: 임만혁</span>
        </p>
        <span>경기 포천시 일동면 청지로 45 (우)11118</span>
        <p>
          <span>대표전화: 031) 536-9330~1</span>
          <span class="right_side">팩스: 031) 536-9332</span>
        </p>
        <br />
        COPYRIGHT(C) 2021 GREEN STONE. ALL RIGHT RESERVED
      </div>
      <div class="footer_logo">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

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
}
.header {
  width: 100%;
  height: 90px;
  top: 0;
  left: 0;
  background-color: #202020b0;
  position: absolute;
  display: flex;
  z-index: 10;
}
.header h1 {
  color: rgb(243, 243, 242);
  cursor: pointer;
  margin-left: 10%;
}
.menu{
  width: 60%;
}
.menu ul {
  color: rgb(243, 243, 242);
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 50px;
  justify-content: space-around;
}
.menu ul li:hover {
  filter: brightness(0.4);
}
.menu ul li {
  font-size: 17px;
  font-weight: 600;
}
.footer {
  height: 200px;
  display: flex;
  background-color: #252525;
  color: rgb(243, 243, 242);
  justify-content: space-around;
}
.footer_info {
  width: 500px;
}
.footer_logo {
  width: 300px;
  align-self: center;
}
.footer_logo img {
  width: 150px;
}
.right_side {
  margin-left: 20px;
}
a {
  text-decoration: none;
  color: rgb(243, 243, 242);
}
.product_banner {
  width: 100%;
  height: 420px;
  background-image: url("~@/assets/images/product_banner.jpg");
  background-size: auto;
}
.mobile_btn {
  width: 25px;
  height: 25px;
  align-self: center;
  float: right;
  margin-right: 10%;
  display: none;
  cursor: pointer;
}
.mobile_btn:hover {
  filter: brightness(0.4);
}
.mobile_btn img {
  width: 100%;
}
@media screen and (max-width: 800px) {
  .menu {
    display: none;
  }
  .footer_logo {
    display: none;
  }
  .footer_info {
    width: 100%;
  }
  .product_banner {
    background-position-x: center;
  }
  .header {
    height: 70px;
    justify-content: space-between;
  }
  .header h1 {
    font-size: 25px;
  }
  .mobile_btn {
    display: block;
  }
}
</style>
