<template>
  <div class="swiperWidth">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="swiper-absolute">
          <div class="swiper-relative text-center">
            <h2 class="swiper-title bg-primary p-2">所有系列</h2>
            <router-link class="swiper-link bg-light text-center" to="/products/all">
            立即選購</router-link>
          </div>
        </div>
        <img class="swiperImg" src="../../assets/image/furniture1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-absolute">
          <div class="swiper-relative text-center">
            <h2 class="swiper-title bg-danger p-2">悠閒時光</h2>
            <router-link class="swiper-link bg-light text-center" to="/products/sofa">
            立即選購</router-link>
          </div>
        </div>
        <img class="swiperImg" src="../../assets/image/furniture2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-absolute">
          <div class="swiper-relative text-center">
            <h2 class="swiper-title bg-success p-2">愉快用餐</h2>
            <router-link class="swiper-link bg-light text-center" to="/products/diningtable">
            立即選購</router-link>
          </div>
        </div>
        <img class="swiperImg" src="../../assets/image/furniture3.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-absolute">
          <div class="swiper-relative text-center">
            <h2 class="swiper-title bg-warning p-2">寧靜休憩</h2>
            <router-link class="swiper-link bg-light text-center" to="/products/bed">
            立即選購</router-link>
          </div>
        </div>
        <img class="swiperImg" src="../../assets/image/furniture4.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-absolute">
          <div class="swiper-relative text-center">
            <h2 class="swiper-title bg-dark p-2">魔術空間</h2>
            <router-link class="swiper-link bg-light text-center" to="/products/wardrobe">
            立即選購</router-link>
          </div>
        </div>
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
  height: 800px;
  margin: 0 auto;
}
.swiperImg {
  width: 100%;
  height: 800px;
}
.swiper-absolute {
  position: absolute;
  right: 10%;
  bottom: 10%;
  width: 20%;
  height: 130px;
  .swiper-relative {
    position: relative;
    height: 100%;
  }
  .swiper-title {
    position: absolute;
    left: 20%;
    top: 0;
    font-size: 36px;
    font-weight: 700;
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
}
.swiper-link {
  position: absolute;
  padding: 5px 15px;
  right: 10%;
  bottom: 0;
  text-decoration: none;
  font-size: 32px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  transition: all 0.3s;
  overflow: hidden;
  font-weight: 500;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.5);
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
}
</style>
