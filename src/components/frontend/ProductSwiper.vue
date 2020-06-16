<template>
  <div class="swiperWidth mb-5">
    <swiper v-if="mabylike1.length>0" :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <div class="d-flex flex-wrap">
          <div
            class="product"
            v-for="item in mabylike1"
            :key="item.id"
            @click="passProduct(item.id)"
          >
            <div class="picture">
              <div class="swiperImg" :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
              <div class="showmore">
                <span class="goproduct border p-2">前往商品</span>
                <span class="price">{{ item.price | currency }}</span>
              </div>
            </div>
            <h6 class="text-center">{{ item.title }}</h6>
            <h6 class="text-center mobil-price">{{ item.price | currency }}</h6>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="d-flex flex-wrap">
          <div
            class="product"
            v-for="item in mabylike2"
            :key="item.id"
            @click="passProduct(item.id)"
          >
            <div class="picture">
              <div class="swiperImg" :style="{ backgroundImage: `url(${item.imageUrl})` }"></div>
              <div class="showmore">
                <span class="goproduct border p-2">前往商品</span>
                <span class="price">{{ item.price | currency }}</span>
              </div>
            </div>
            <h6 class="text-center">{{ item.title }}</h6>
            <h6 class="text-center mobil-price">{{ item.price | currency }}</h6>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
        },
        direction: 'horizontal',

        speed: 1000,
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      products: [],
      mabylike1: [],
      mabylike2: [],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  components: {
    swiper,
    swiperSlide,
  },

  methods: {
    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products;
        for (let i = 0; i <= 7; i += 1) {
          const randomNum = Math.floor(Math.random() * vm.products.length);
          if (i <= 3) {
            vm.mabylike1.push(vm.products[randomNum]);
            vm.products.splice(randomNum, 1);
          } else {
            vm.mabylike2.push(vm.products[randomNum]);
            vm.products.splice(randomNum, 1);
          }
        }
      });
    },
    passProduct(id) {
      this.$emit('getproductid', id);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}
.swiperWidth {
  width: 100%;
  height: auto;
  margin: 0 auto;
}
.product {
  width: 23%;
  margin: 2% 1% 5% 1%;
  height: 150px;
  color: #000;
}
.mobil-price {
  opacity: 0;
  margin-top: -10px;
}
.swiperImg {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.picture {
  height: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.goproduct {
  position: absolute;
  top: 42%;
  right: 29%;
}
.showmore {
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  right: 0;
  height: 0%;
  bottom: 0;
  transition: height 0.5s;
}
.picture:hover .showmore {
  height: 100%;
}
.picture:hover .price {
  opacity: 1;
}
.price {
  position: absolute;
  opacity: 0;
  bottom: 5px;
  right: 5px;
}
@media (max-width: 768px) {
  .product {
    margin: 2% 1% 10% 1%;
  }
  .picture:hover .showmore {
    height: 0%;
  }
  .picture:hover .price {
    opacity: 0;
  }
  .mobil-price {
    opacity: 1;
  }
  .goproduct {
    display: none;
  }
}
</style>
