<template>
  <div class="swiperWidth">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../../assets/image/furniture1.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/furniture2.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/furniture3.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/furniture4.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/furniture5.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/image/furniture6.jpg" alt />
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
img {
  width: 100%;
  height: 800px;
}
@media (max-width: 768px) {
  .swiperWidth {
    width: 70%;
  }
}
@media (max-width: 375px) {
  .swiperWidth {
    width: 100%;
    margin: 0px;
  }
}
</style>
