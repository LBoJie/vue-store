import Vue from "vue";
import Router from "vue-router";
//backend
import Login from "./views/backend/Login";
import Dashboard from "./views/backend/Dashboard";
import Products from "./components/backend/Products";
import Order from "./components/backend/Order";
import Coupon from "./components/backend/Coupon";
import CustomerOrders from "./views/backend/CustomerOrders";
import CustomerCheckout from "./views/backend/CustomerCheckOut";
//frontend
import Index from "./views/frontend/Index";
import Home from "./components/frontend/Home";
import IndexProducts from "./components/frontend/IndexProducts";
import CategoryProduct from "./components/frontend/CategoryProduct";
import ProductInfo from "./components/frontend/ProductInfo";
import IndexOrder from "./views/frontend/IndexOrder";
import IndexCoupon from "./components/frontend/IndexCoupon";
Vue.use(Router);

export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: "*",
      redirect: "index/home"
    },

    {
      path: "/index",
      name: "Index",
      component: Index,
      children: [
        {
          path: "product/:ProductId",
          name: "ProductInfo",
          component: ProductInfo
        },
        {
          path: "coupons",
          name: "IndexCoupon",
          component: IndexCoupon
        },
        {
          path: "home",
          name: "Home",
          component: Home
        },
        {
          path: "products",
          name: "IndexProducts",
          component: IndexProducts,
          children: [
            {
              path: ":Category",
              name: "category",
              component: CategoryProduct
            }
          ]
        }
      ]
    },
    {
      path: "/customerorder",
      name: "IndexOrder",
      component: IndexOrder
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/admin",
      name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "products",
          name: "Products",
          component: Products,
          meta: { requiresAuth: true }
        },
        {
          path: "order",
          name: "Order",
          component: Order,
          meta: { requiresAuth: true }
        },
        {
          path: "coupon",
          name: "Coupon",
          component: Coupon,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: "/customer_order",
      name: "CustomerOrders",
      component: CustomerOrders
    },
    {
      path: "/customercheckout/:OrderId",
      name: "CustomerCheckout",
      component: CustomerCheckout
    }
  ]
});
