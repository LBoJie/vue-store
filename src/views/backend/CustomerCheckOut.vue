<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="my-5 container">
       <h1 class="my-5">
        <router-link to="/">
          <img class="indexlogo" src="../../assets/image/IndexLogo.svg" alt />
        </router-link>
      </h1>
      <form  @submit.prevent="payOrder">
        <table class="table">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">總計</td>
              <td class="text-right">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="200">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right">
          <router-link class="btn btn-outline-primary mr-2" to="/">
          回首頁</router-link>
          <button class="btn btn-danger" v-if="order.is_paid === false">確認付款去</button>
        </div>
      </form>
    </div>
    <Footer class="footer" />
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
      isLoading: false,
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
      vm.$http.get(api).then((response) => {
        vm.order = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.getOrder();
          vm.isLoading = false;
          vm.$router.push('/orderdone');
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.OrderId;
    this.getOrder();
  },
};
</script>
<style lang="scss" scoped>
.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
