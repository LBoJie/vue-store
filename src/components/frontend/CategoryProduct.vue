<template>
  <div>
    <cartAlert />
    <loading :active.sync="isLoading"></loading>
    <ul class="d-flex flex-wrap">
      <li class="product" v-for="item in filterproducts" :key="item.id" @click="goProduct(item.id)">
        <img :src="item.imageUrl" alt />
        <div class="product-content">
          <h2>{{ item.title }}</h2>
          <p class="product-text">{{ item.content }}</p>
          <div class="price d-flex justify-content-between">
            <div class="d-flex">
              <p class="h4">{{ item.price | currency }}</p>
              <button
                class="btn btn-danger btn-md ml-3 p-2"
                :disabled="isDisable"
                @click.stop="addtoCart(item.id)"
              >
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
            <span class="pt-2">
              detail
              <i class="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <div class="mobile px-3 pt-2">
          <h3>{{ item.title }}</h3>
          <div class="mobile-margin">
            <h3>{{ item.price }}</h3>
            <button class="btn btn-danger btn-md ml-3 p-2" @click.stop="addtoCart(item.id)">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import cartAlert from './CartAlert.vue';

export default {
  data() {
    return {
      ty: true,
      category: '',
      products: [],
      filterproducts: [],
      isLoading: false,
      titleImgUrl: '',
      isDisable: false,
    };
  },
  components: {
    cartAlert,
  },
  methods: {
    filterProducts() {
      const vm = this;
      vm.filterproducts = [];
      vm.products.forEach((item) => {
        if (vm.category === '全部家具') {
          vm.filterproducts.push(item);
        }
        if (item.category === vm.category) {
          vm.filterproducts.push(item);
        }
      });
    },

    getProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.filterProducts();
      });
    },
    goProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      this.isDisable = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      vm.$http.post(api, { data: cart }).then(() => {
        vm.loadingItem = '';
        this.$bus.$emit('refreshCart');
        this.$bus.$emit('alertCart');
        this.isDisable = false;
      });
    },
  },
  watch: {
    $route() {
      switch (this.$route.params.Category) {
        case 'all':
          this.category = '全部家具';
          break;
        case 'sofa':
          this.category = '沙發';
          break;
        case 'diningtable':
          this.category = '餐桌';
          break;
        case 'bed':
          this.category = '床組';
          break;
        case 'wardrobe':
          this.category = '衣櫃';
          break;
        default:
          this.category = '全部家具';
          break;
      }
      this.filterProducts();
    },
  },
  created() {
    this.getProducts();
    switch (this.$route.params.Category) {
      case 'all':
        this.category = '全部家具';
        break;
      case 'sofa':
        this.category = '沙發';
        break;
      case 'diningtable':
        this.category = '餐桌';
        break;
      case 'bed':
        this.category = '床組';
        break;
      case 'wardrobe':
        this.category = '衣櫃';
        break;
      default:
        this.category = '全部家具';
        break;
    }
    this.$emit('changeImg', this.$route.params.Category);
  },
};
</script>
<style lang="scss" scoped>
.imgTitle {
  margin: 0 auto;
  max-width: 35%;
  img {
    width: 100%;
    height: auto;
  }
}
li {
  list-style: none;
}
ul {
  padding: 0;
}
.mobile {
  position: absolute;
  bottom: -50px;
  display: none !important;
  h3 {
    float: left;
  }
  .mobile-margin {
    float: right;
    margin-left: 90px;
  }
}
.product {
  transition: all 0.5s;
  position: relative;
  width: 30%;
  margin: 1.5%;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
  }
  span {
    cursor: pointer;
  }
  .product-content {
    transition: all 0.5s;
    opacity: 0;
    padding: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.6);
    top: 0;
    left: 0;
  }
  .price {
    position: absolute;
    width: 90%;
    bottom: 10px;
  }
}
.product:hover {
  transform: scale(1.05);
  .product-content {
    opacity: 1;
  }
}
@media (max-width: 768px) {
  .product {
    width: 48%;
    margin: 0% 1% 16% 1%;
    .mobile {
      display: block !important;
    }
  }

  .product:hover {
    transform: scale(1);
    .product-content {
      opacity: 0;
    }
  }
}
@media (max-width: 375px) {
  .product {
    width: 100%;
    margin: 8% 0 8% 0;
  }
  .imgTitle {
    max-width: 80%;
  }
}
</style>
