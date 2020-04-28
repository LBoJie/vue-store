<template>
  <div class="pt-5">
    <cartAlert />
    <loading :active.sync="isLoading"></loading>
    <div class="prodContent d-flex flex-wrap justify-content-center mt-5 py-5">
      <div class="prodImg mr-md-5">
        <img :src="product.imageUrl" alt />
      </div>
      <div class="prodIntro ml-md-5">
        <h1 class="border-bottom border-secondary pb-3 title">{{ product.title }}</h1>
        <del class="h5">原價:{{ product.origin_price }}</del>
        <span class="h5 ml-5">特價:{{ product.price }}</span>
        <h3 class="border-top border-secondary pt-3 mt-3">商品介紹</h3>
        <p class="mt-3 content-text">{{ product.content }}</p>
        <h3 class="border-top border-secondary pt-3 mt-3">材質</h3>
        <p class="border-bottom border-secondary py-3 content-text">{{ product.description }}</p>
        <div class="form-group d-flex align-items-center">
          <label class="qty-set" for="productQuantity">數量</label>
          <select class="form-control" id="productQuantity" v-model="product.qty">
            <option :value="qty" v-for="qty in 10" :key="qty">{{ qty }}{{ product.unit }}</option>
          </select>
        </div>
        <button class="btn btn-danger cart" @click="addtoCart(product.id,product.qty)">
          <i class="fas fa-spinner fa-spin mr-1" v-if="product.id==loadingItem"></i>CART
        </button>
        <button class="btn btn-primary cart mr-2" @click="goIndex">返回列表</button>
      </div>
    </div>

    <div class="mabylike">
      <div class="mabylike-title">
        <h3 class="text-center">您可能喜歡</h3>
      </div>
      <ProductSwiper @getproductid="goProduct" />
    </div>
  </div>
</template>
<script>
import cartAlert from "./CartAlert";
import ProductSwiper from "./ProductSwiper";
export default {
  data() {
    return {
      product: {},
      isLoading: false,
      loadingItem: ""
    };
  },
  components: {
    cartAlert,
    ProductSwiper
  },
  methods: {
    getProduct(ProductId) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${ProductId}`;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.product = response.data.product;
        vm.product.qty = 1;
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.loadingItem = id;
      const cart = {
        product_id: id,
        qty
      };
      vm.$http.post(api, { data: cart }).then(response => {
        vm.loadingItem = "";
        vm.$bus.$emit("refreshCart");
        vm.$bus.$emit("alertCart");
      });
    },
    goIndex() {
      this.$router.push(`/index/products/all/products`);
    },
    goProduct(id) {
      this.$router.push(`/index/product/${id}`);
      this.getProduct(id);
    }
  },
  created() {
    this.getProduct(this.$route.params.ProductId);
  }
};
</script>
<style lang="scss" scope>
.content-text {
  font-size: 16px;
}
.qty-set {
  width: 15%;
  height: 100%;
}
.cart {
  float: right;
}

.prodContent {
  width: 80%;
  margin: 0 auto;

  .prodImg {
    width: 30%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .title {
    font-weight: 700;
  }
}
.mabylike {
  width: 70%;
  margin: 0 auto;
  .mabylike-title {
    position: relative;
  }
  .mabylike-title::before {
    content: " ";
    position: absolute;
    top: 50%;
    right: 0;
    width: 40%;
    border: solid 1px #000;
  }
  .mabylike-title::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    width: 40%;
    border: solid 1px #000;
  }
}
@media (max-width: 768px) {
  .mebylike {
    width: 80%;
  }
  .mabylike-title::after {
    content: " ";
    width: 35% !important;
  }
  .mabylike-title::before {
    width: 35% !important;
  }
}
@media (max-width: 375px) {
  .mabylike {
    width: 100%;
  }
  .prodContent {
    width: 100%;
    display: block;
    margin: 0 auto;
    .prodIntro {
      margin-top: 20px;
    }
    .prodImg {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .mabylike-title::after {
    content: " ";
    width: 20% !important;
  }
  .mabylike-title::before {
    width: 20% !important;
  }
}
</style>