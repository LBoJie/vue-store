<template>
  <div class="header">
    <h1 class="indexlogo bg-primary h-100">
      <router-link
        to="/"
        class="text-white h-100 d-block d-flex align-items-center justify-content-center logo"
      >Liao's Factory</router-link>
    </h1>
    <div class="headerInfo d-flex flex-row-reverse align-items-center">
      <button href="#" class="showmenu btn btn-outline-danger align-items-center" @click="showMenu">
        <i class="fas fa-bars"></i>
      </button>
      <button class="btn btn-cart cart" type="button" @click="showCart" v-if="cart.carts">
        <i class="fas fa-shopping-cart text-dark fa-2x"></i>
        <span
          class="badge badge-pill badge-danger"
          v-if="cart.final_total!=0"
        >{{ mergeCart.length }}</span>
      </button>
      <ul class="menu m-0 align-items-center" @click="closeMenu">
        <li>
          <router-link class="nav-link font-weight-bold link" to="/products/all">商品列表</router-link>
        </li>
        <li>
          <router-link class="nav-link font-weight-bold link" to="/coupons">優惠卷</router-link>
        </li>
        <li>
          <router-link class="nav-link link" to="/login">
            <i class="fas fa-cog mr-1"></i>
          </router-link>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="dropdown">
      <div class="dropdown-menu" id="cart">
        <div class="px-4 py-3">
          <button type="button" class="close" @click="hideCart">
            <span>&times;</span>
          </button>
          <h6 class="text-center">
            <span v-if="cart.final_total!=0">已選擇商品</span>
            <span v-else class="text-center">
              <p class="pt-2">購物車內還沒有商品</p>
              <router-link class="btn btn-danger btn-md mt-3" to="/products/all">趕緊去逛逛</router-link>
            </span>
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
                <td class="align-middle text-right">{{ item.price | currency }}</td>
              </tr>
              <tr class="text-right">
                <td colspan="4" v-if="cart.final_total!=0">總共:{{ cart.final_total | currency }}</td>
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
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  data() {
    return {
      mergeCart: [],
      cart: {},
      loadingItem: '',
    };
  },

  methods: {
    showMenu() {
      $('body').toggleClass('menu-show');
    },
    showCart() {
      $('#cart').toggleClass('show');
    },
    hideCart() {
      $('#cart').toggleClass('show');
    },
    closeMenu() {
      $('body').removeClass('menu-show');
    },
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.mergeCart = [];
        vm.cart.carts.forEach(function mergeRepeat(mergeProduct) {
          const mergeVm = this;
          if (!mergeVm[mergeProduct.product.title]) {
            mergeVm[mergeProduct.product.title] = {
              title: mergeProduct.product.title,
              qty: 0,
              price: 0,
              allId: [],
              unit: mergeProduct.product.unit,
            };
            vm.mergeCart.push(mergeVm[mergeProduct.product.title]);
          }
          mergeVm[mergeProduct.product.title].qty += mergeProduct.qty;
          mergeVm[mergeProduct.product.title].price += mergeProduct.total;
          mergeVm[mergeProduct.product.title].allId.push(mergeProduct.id);
        }, Object.create(null));
      });
    },
    removeCartItem(allId) {
      const vm = this;
      allId.forEach((id) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
        vm.loadingItem = allId;
        vm.$http.delete(api).then(() => {
          vm.loadingItem = '';
          vm.getCart();
        });
      });
    },
    goOrder() {
      this.$router.push('/customerorder');
      $('#cart').toggleClass('show');
    },
  },
  created() {
    const vm = this;
    vm.getCart();
    vm.$bus.$on('refreshCart', () => {
      vm.getCart();
    });
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  padding: 0 3em 0 0;
  top: 48px;
  width: 100%;
  z-index: 99;
  transition: all 0.4s;
  opacity: 1;
  background: rgba(0%, 0%, 0%, 0);
  height: 83px;
  .nav-link:hover {
    transition: all 0.3s;
    transform: scale(1.2);
  }
  .headerInfo {
    height: 100%;
  }
}
.indexlogo {
  float: left;
  width: 200px;
  .logo {
    text-decoration: none;
    font-size: 24px;
  }
}
li {
  list-style: none;
}
ul {
  padding: 0;
}
.link {
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

.btn-cart .badge {
  position: absolute;
  top: 0px;
  right: 0;
}
@media (max-width: 375px) {
  .header {
    padding: 0;
    background-color: #ffffff;
    .nav-link:hover {
      transform: scale(1);
    }
  }
  .showmenu {
    display: block;
    float: right;
  }
  .menu {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 1s;
    margin-top: 1px;
    position: absolute;
    z-index: 100;
    top: 83px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 0;
  }
  .menu li {
    float: none;
  }
  .menu-show .menu {
    max-height: 500px;
  }
  .dropdown {
    top: 90px;
    right: 320px;
  }
}
</style>
