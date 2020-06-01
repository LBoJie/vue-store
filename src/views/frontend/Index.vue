<template>
  <div class="bg-index wrap">
    <div class="alert-dismissible fade show text-center bg-cyan" role="alert">
      廖氏木頭工房已經30歲囉! 周年慶活動開跑中
      <strong>
        <router-link to="/coupons">了解更多折扣</router-link>
      </strong>
      <button type="button" class="close" @click="moveNavbar">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <IndexNavbar class="header" />
    <router-view class="main"></router-view>
    <div class="btn-group message">
      <button
        type="button"
        class="btn btn-lg btn-primary"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-comment-alt"></i>
      </button>
      <div class="dropdown-menu p-3">
        <button type="button" class="closebtn">
          <span>&times;</span>
        </button>
        <h5 class="text-center">線上客服</h5>
        <p class="text-center pb">我們會在24小時內回覆</p>

        <div class="d-flex">
          <input type="text" />
          <button class="btn btn-info">
            <i class="fab fa-telegram-plane"></i>
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import $ from 'jquery';
import IndexNavbar from '../../components/frontend/IndexNavbar.vue';
import Footer from '../../components/frontend/Footer.vue';

export default {

  components: {
    IndexNavbar,
    Footer,
  },
  created() {
    let lastScrollY = 0;
    $(window).scroll(function showNavbar() {
      const scrollTop = this.scrollY;
      if (scrollTop < lastScrollY) {
        $('.header').removeClass('hideUp');
      } else {
        $('.header').addClass('hideUp');
      }
      lastScrollY = scrollTop;
    });
  },
  methods: {
    moveNavbar() {
      $('.header').css('top', '0px');
      $('.alert-dismissible').css('display', 'none');
    },
  },
};

</script>
<style lang="scss" scoped>
.bg-index {
  background-color: #fff;
}
.bg-cyan {
  background: #dfe9fc;
  z-index: 50;
  width: 100%;
  padding: 0.75rem 1.25rem;
}
.main {
  margin-top: 83px;
}
.btn {
  border-radius: 10px !important;
}
.hideUp {
  opacity: 0;
}
.pb {
  padding-bottom: 200px;
}
.message {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
}
.closebtn {
  background-color: rgba(255, 255, 255, 0);
  float: right;
  border: 0;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
</style>
