<template>
  <div class="header">
    <h1 class="indexlogo">
      <router-link to="/index/home">
        <img src="../../assets/image/IndexLogo.svg" alt />
      </router-link>
    </h1>
    <button class="btn btn-cart cart" type="button" @click="showCart" v-if="cart.carts">
      <i class="fas fa-shopping-cart text-dark fa-2x mt-1"></i>
      <span class="badge badge-pill badge-danger">{{ mergeCart.length }}</span>
    </button>
    <ul class="menu">
      <li>
        <router-link class="nav-link" to="/index/products/all">Products</router-link>
      </li>
      <li>
        <router-link class="nav-link" to="/index/coupons">Coupons</router-link>
      </li>
      <li>
        <router-link class="nav-link" to="/login">
          <i class="fas fa-cog mr-1"></i>
        </router-link>
      </li>
    </ul>

    <div class="dropdown">
      <div class="dropdown-menu" id="cart">
        <div class="px-4 py-3">
          <h6 class="text-center">
            <span v-if="cart.final_total!=0">已選擇商品</span>
            <span v-else>
              還沒有商品哦 趕緊去
              <router-link to="/index/products/all">逛逛</router-link>!
            </span>
            <button type="button" class="close" @click="hideCart">
              <span>&times;</span>
            </button>
          </h6>

          <table class="table table-sm">
            <tbody>
              <tr v-for="item in mergeCart" :key="item.title">
                <td class="align-middle text-center">
                  <button class="btn btn-outline-danger" @click="removeCartItem(item.allId)">
                    <i class="fas fa-spinner fa-spin mr-1" v-if="item.allId==loadingItem"></i>
                    <i v-else class="far fa-trash-alt"></i>
                  </button>
                </td>
                <td class="align-middle">{{ item.title }}</td>
                <td class="align-middle">{{ item.qty }}{{ item.unit }}</td>
                <td class="align-middle text-right">{{ item.price|currency }}</td>
              </tr>
              <tr class="text-right">
                <td colspan="4" v-if="cart.final_total!=0">總共:{{ cart.final_total|currency }}</td>
              </tr>
            </tbody>
          </table>
          <button
            class="btn btn-block btn-primary btn-sm text-white"
            v-if="cart.final_total!=0"
            @click="goOrder"
          >確認結帳</button>
        </div>
      </div>
    </div>

    <button href="#" class="showmenu btn btn-outline-danger" @click="showMenu">
      <i class="fas fa-sliders-h"></i>
    </button>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      mergeCart: [],
      cart: {},
      loadingItem: ""
    };
  },

  methods: {
    showMenu() {
      $("body").toggleClass("menu-show");
    },
    showCart() {
      $("#cart").toggleClass("show");
    },
    hideCart() {
      $("#cart").toggleClass("show");
    },
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http.get(api).then(response => {
        vm.cart = response.data.data;
        vm.mergeCart = [];
        vm.cart.carts.forEach(function(mergeProduct) {
          if (!this[mergeProduct.product.title]) {
            this[mergeProduct.product.title] = {
              title: mergeProduct.product.title,
              qty: 0,
              price: 0,
              allId: [],
              unit: mergeProduct.product.unit
            };
            vm.mergeCart.push(this[mergeProduct.product.title]);
          }
          this[mergeProduct.product.title].qty += mergeProduct.qty;
          this[mergeProduct.product.title].price += mergeProduct.total;
          this[mergeProduct.product.title].allId.push(mergeProduct.id);
        }, Object.create(null));
      });
    },
    removeCartItem(allId) {
      const vm = this;
      allId.forEach(id => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
        vm.loadingItem = allId;
        vm.$http.delete(api).then(() => {
          vm.loadingItem = "";
          vm.getCart();
        });
      });
    },
    goOrder() {
      this.$router.push("/customerorder");
      $("#cart").toggleClass("show");
    }
  },
  created() {
    const vm = this;
    vm.getCart();
    vm.$bus.$on("refreshCart", () => {
      vm.getCart();
    });
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  padding: 0 3em 0 3em;
  top: 55px;
  width: 100%;
  transition: all 0.4s;
  opacity: 1;
  background: rgba(0%, 0%, 0%, 0);
  z-index: 9999;
  height: 89px;
  .nav-link:hover {
    transition: all 0.3s;
    transform: scale(1.2);
  }
}
.indexlogo {
  float: left;
}
li {
  list-style: none;
}
ul {
  padding: 0;
}
ul li a {
  font-size: 24px;
}
h1 img {
  width: 200px;
}
.dropdown-menu {
  width: 300px;
}
.dropdown {
  position: absolute;
  top: 65px;
  right: 320px;
}
.btn-cart {
  position: relative;
  float: right;
}
.showmenu {
  display: none;
}

.menu li {
  float: left;
}
.menu li a {
  color: #343a40;
}
.menu {
  float: right;
}
.btn-cart .badge {
  position: absolute;
  top: 0px;
  right: 0;
}
@media (max-width: 375px) {
  .header {
    padding: 0;
    background-color: rgba($color: #f1faee, $alpha: 0.9);
    .nav-link:hover {
      transform: scale(1);
    }
  }
  .showmenu {
    display: block;
    float: right;
    margin-top: 30px;
  }
  .menu {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 1s;
    margin-top: 1px;
    position: absolute;
    z-index: 100;
    top: 88px;
    left: 0;
    right: 0;
    background-color: rgba($color: #f1faee, $alpha: 0.9);
    padding: 0;
  }
  .menu li {
    float: none;
  }
  .menu-show .menu {
    max-height: 500px;
  }
  .btn-cart {
    float: none;
    margin-top: 20px;
    margin-left: 60px;
  }
  .dropdown {
    top: 90px;
    right: 320px;
  }
}
</style>