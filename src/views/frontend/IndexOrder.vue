<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <h1 class="my-5">
        <router-link to="/">
          <img class="indexlogo" src="../../assets/image/IndexLogo.svg" alt />
        </router-link>
      </h1>
      <table class="table">
        <thead>
          <th></th>
          <th>品名</th>
          <th>
            數量
            <button type="button" class="btn btn-sm btn-outline-danger" @click="showEdit=true">
              修改</button>
            <button
              type="button"
              class="btn btn-sm btn-outline-success ml-1"
              v-if="showEdit"
              @click="addtoCart() ;showEdit=false"
            >確認</button>
          </th>
          <th>單價</th>
        </thead>
        <tbody>
          <tr v-for="item in mergeCart" :key="item.id">
            <td class="align-middle">
              <button
                type="button"
                @click="removeSingalCart(item.allId)"
                class="btn btn-outline-danger btn-sm"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
            <td class="align-middle">
              {{ item.title }}
              <div class="text-success" v-if="item.coupon">已套用優惠券</div>
            </td>
            <td class="align-middle">
              {{ item.qty }}/{{ item.unit }}
              <div class="btn-group" v-if="showEdit">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary"
                  @click="changeQty(item,1)"
                >+</button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary"
                  @click="changeQty(item)"
                >-</button>
              </div>
            </td>
            <td class="align-middle text-right">{{ item.price | currency }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-right">總計</td>
            <td class="text-right">{{ cart.total | currency }}</td>
          </tr>
          <tr v-if="cart.final_total!=cart.total">
            <td colspan="3" class="text-right text-success">折扣價</td>
            <td class="text-right text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
      <p class="text-danger text-center h3" v-if="noCoupon">無此優惠卷!</p>
      <div class="input-group mb-3 input-group-sm coupon-size">
        <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="addCouponCode()">
            套用優惠碼</button>
        </div>
      </div>
      <div class="my-5">
        <form class @submit.prevent="creatOrder">
          <div class="form-group">
            <label for="useremail">
              <i class="fas fa-asterisk text-danger"></i>Email
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="useremail"
              v-model="form.user.email"
              placeholder="請輸入 Email"
              v-validate="'required|email'"
            />
            <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
          </div>

          <div class="form-group">
            <label for="username">
              <i class="fas fa-asterisk text-danger"></i>收件人姓名
            </label>
            <input
              type="text"
              class="form-control"
              :class="{'is-invalid':errors.has('name')}"
              name="name"
              id="username"
              v-model="form.user.name"
              v-validate="'required'"
              placeholder="輸入姓名"
            />
            <span class="text-danger" v-if="errors.has('name')">姓名不得為空</span>
          </div>

          <div class="form-group">
            <label for="usertel">
              <i class="fas fa-asterisk text-danger"></i>收件人電話
            </label>
            <input
              name="phone"
              type="tel"
              class="form-control"
              id="usertel"
              v-model="form.user.tel"
              v-validate="'required'"
              placeholder="請輸入電話"
            />
            <span class="text-danger" v-if="errors.has('phone')">電話不得為空</span>
          </div>

          <div class="form-group">
            <label for="useraddress">
              <i class="fas fa-asterisk text-danger"></i>收件人地址
            </label>
            <input
              type="text"
              class="form-control"
              name="address"
              id="useraddress"
              v-model="form.user.address"
              placeholder="請輸入地址"
              v-validate="'required'"
            />
            <span class="text-danger" v-if="errors.has('address')">地址不得為空</span>
          </div>

          <div class="form-group">
            <label for="comment">留言</label>
            <textarea
              name
              id="comment"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-danger">送出訂單</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '../../components/frontend/Footer.vue';

export default {
  components: {
    Footer,
  },
  data() {
    return {
      showEdit: false,
      cart: {},
      mergeCart: [],
      coupon_code: '',
      noCoupon: false,
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    changeQty(item, plus) {
      const product = item;
      if (plus) {
        product.qty += 1;
      } else {
        if (item.qty <= 0) {
          return;
        }
        product.qty -= 1;
      }
    },
    addtoCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.mergeCart.forEach((item) => {
        if (item.qty === item.originQty) {
          return;
        }
        if (item.qty === 0) {
          vm.removeCartItem(item);
          return;
        }
        const cart = {
          product_id: item.productId,
          qty: item.qty,
        };
        vm.removeCartItem(item);
        vm.$http.post(api, { data: cart });
      });
    },
    removeCartItem(item) {
      const vm = this;
      vm.isLoading = true;
      item.allId.forEach((id) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
        vm.$http.delete(api).then(() => {
          vm.getCart();
          vm.isLoading = false;
        });
      });
    },
    removeSingalCart(allId) {
      const vm = this;
      vm.isLoading = true;
      allId.forEach((id) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
        vm.loadingItem = allId;
        vm.$http.delete(api).then(() => {
          vm.isLoading = false;
          vm.getCart();
        });
      });
    },
    getCart() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      vm.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.mergeCart = [];
        vm.cart.carts.forEach(function mergerepeat(mergeProduct) {
          const mergeVm = this;
          if (!mergeVm[mergeProduct.product.title]) {
            mergeVm[mergeProduct.product.title] = {
              title: mergeProduct.product.title,
              qty: 0,
              originQty: 0,
              price: 0,
              allId: [],
              unit: mergeProduct.product.unit,
              productId: mergeProduct.product.id,
            };
            vm.mergeCart.push(mergeVm[mergeProduct.product.title]);
          }
          mergeVm[mergeProduct.product.title].qty += mergeProduct.qty;
          mergeVm[mergeProduct.product.title].originQty = this[
            mergeProduct.product.title
          ].qty;
          mergeVm[mergeProduct.product.title].price += mergeProduct.total;
          mergeVm[mergeProduct.product.title].allId.push(mergeProduct.id);
        }, Object.create(null));
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      const coupon = { code: vm.coupon_code };
      vm.isLoading = true;
      vm.$http.post(api, { data: coupon }).then((response) => {
        vm.noCoupon = false;
        if (!response.data.success) {
          vm.noCoupon = true;
        }
        vm.isLoading = false;
        vm.getCart();
      });
    },
    creatOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      vm.isLoading = true;
      vm.$validator.validate().then((valid) => {
        if (valid) {
          vm.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$router.push(`/CustomerCheckout/${response.data.orderId}`);
            }
            vm.isLoading = false;
          });
        } else {
          vm.isLoading = false;
        }
      });
    },
  },
  created() {
    this.getCart();
  },
};

</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}

.coupon-size {
  width: 500px;
  margin: 0 auto;
}

@media (max-width: 375px) {
  .coupon-size {
    width: 100%;
  }
}
</style>
