<template>
  <div>
    <table class="table mt-4">
      <thead>
        <th width="120">購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th width="120">應付金額</th>
        <th width="100">是否付款</th>
      </thead>
      <tbody>
        <tr v-for="(item,key) in orders" :key="key">
          <td>{{ item.create_at | timeFormat }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <p
              v-for="product in item.products"
              :key="product.id"
            >{{ product.product.title }}:{{product.qty}}{{ product.product.unit }}</p>
          </td>

          <td class="text-right">{{ item.total |currency }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pagination="pagination" @getPagination="getOrders" />
  </div>
</template>
<script>
import Pagination from "./Pagination";
export default {
  data() {
    return {
      orders: [],
      pagination: {}
    };
  },
  components: {
    Pagination
  },
  created() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then(response => {
        vm.isLoading = false;
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    }
  }
};
</script>