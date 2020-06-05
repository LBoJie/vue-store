<template>
  <div class="swiperWidth">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-relative">
        <div class="swiper-title">
          <h2>所有系列</h2>
          <h3>━━ 總有一款屬於你的家具</h3>
        </div>
        <router-link class="btn btn-light swiper-link text-center" to="/products/all">
        立即選購</router-link>
        <img class="swiperImg" src="../../assets/image/furniture1.jpg" alt />
      </swiper-slide>
      <swiper-slide class="swiper-relative">
        <div class="swiper-title">
          <h2>悠閒時光</h2>
          <h3>━━ 靜靜品味人生的韻味</h3>
        </div>
        <router-link class="btn btn-warning swiper-link text-center" to="/products/sofa">
        立即選購</router-link>
        <img class="swiperImg" src="../../assets/image/furniture2.jpg" alt />
      </swiper-slide>
      <swiper-slide class="swiper-relative">
        <div class="swiper-title">
          <h2>愉快用餐</h2>
          <h3>━━ 為佳餚增添幸福的滋味</h3>
        </div>
        <router-link class="btn btn-success swiper-link text-center" to="/products/diningtable">
        立即選購</router-link>
        <img class="swiperImg" src="../../assets/image/furniture3.jpg" alt />
      </swiper-slide>
      <swiper-slide class="swiper-relative">
        <div class="swiper-title">
          <h2>寧靜休憩</h2>
          <h3>━━ 為勞累的身軀充電</h3>
        </div>
        <router-link class="btn btn-info swiper-link text-center" to="/products/bed">
        立即選購</router-link>
        <img class="swiperImg" src="../../assets/image/furniture4.jpg" alt />
      </swiper-slide>
      <swiper-slide class="swiper-relative">
        <div class="swiper-title">
          <h2>魔術空間</h2>
          <h3>━━ 小巧的體積，魔術般的空間</h3>
        </div>
        <router-link class="btn btn-danger swiper-link text-center" to="/products/wardrobe">
        立即選購</router-link>
        <img class="swiperImg" src="../../assets/image/furniture5.jpg" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>
<style lang="scss" scoped>
.swiperWidth {
  max-width: 100%;
}
.swiperImg {
  width: 100%;
  height: auto;
}
.swiper-relative {
  position: relative;
  height: 100%;
}
.swiper-title {
  position: absolute;
  left: 10%;
  top: 10%;
  font-weight: 700;
  color: black;
}
.swiper-link {
  position: absolute;
  right: 10%;
  bottom: 10%;
  font-size: 32px;
  overflow: hidden;
  font-weight: 500;
  transition: all 0.3s;
  overflow: hidden;
}

.swiper-link:before,
.swiper-link:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
  transform: translate(-100%, 0);
  transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
}
.swiper-link:after {
  transition-delay: 0.2s;
}
.swiper-link:hover:before,
.swiper-link:hover::after {
  transform: translate(0, 0);
}

@media (max-width: 768px) {
  .swiper-absolute {
    width: 40%;
  }
}
@media (max-width: 375px) {
  .swiper-absolute {
    width: 80%;
  }
  .swiper-link {
    font-size: 12px;
  }
  .swiper-title {
    h3 {
      display: none;
    }
  }
}
</style>
