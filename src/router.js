import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/frontend/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('./components/frontend/Home.vue'),
        },
        {
          path: 'coupons',
          name: 'IndexCoupon',
          component: () => import('./components/frontend/IndexCoupon.vue'),
        },
        {
          path: 'products',
          name: 'IndexProducts',
          component: () => import('./components/frontend/IndexProducts.vue'),
          children: [
            {
              path: ':Category',
              name: 'category',
              component: () => import('./components/frontend/CategoryProduct.vue'),
            },
          ],
        },
        {
          path: 'product/:ProductId',
          name: 'ProductInfo',
          component: () => import('./components/frontend/ProductInfo.vue'),
        },
        {
          path: 'orderdone',
          name: 'orderDone',
          component: () => import('./components/frontend/OrderDone.vue'),
        },
      ],
    },
    {
      path: '/customerorder',
      name: 'IndexOrder',
      component: () => import('./views/frontend/IndexOrder.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/backend/Login.vue'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./views/backend/Dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'Products',
          component: () => import('./components/backend/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'order',
          name: 'Order',
          component: () => import('./components/backend/Order.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('./components/backend/Coupon.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/customer_order',
      name: 'CustomerOrders',
      component: () => import('./views/backend/CustomerOrders.vue'),
    },
    {
      path: '/customercheckout/:OrderId',
      name: 'CustomerCheckout',
      component: () => import('./views/backend/CustomerCheckOut.vue'),
    },
  ],
});
