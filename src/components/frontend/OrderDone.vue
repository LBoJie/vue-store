<template>
  <div class="orderDone">
    <div class="orderDoneInfo">
      <div class="transport d-flex">
        <div class="position">
          <i class="fas fa-warehouse icon-size"></i>
        </div>
        <div class="ground">
          <i class="fas fa-truck-moving icon-size"></i>
        </div>
        <div class="position">
          <i class="fas fa-home icon-size"></i>
        </div>
      </div>
      <div class="text-center mt-5 order-bg">
        <h2 class="mt-4 h1">
          <strong>訂購完成</strong>
        </h2>
        <p class="h2 pt-2">感謝您的訂購！</p>
        <p class="h2 py-2">商品將會在3~5個工作天內送達！</p>
        <router-link class="btn btn-primary btn-lg" to="/products/all">繼續購物</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    $('.fa-truck-moving').animate({ left: '80%' }, 3000);
  },
};
</script>
<style lang="scss" scoped>
.orderDone {
  margin-top: 200px;
  .orderDoneInfo {
    height: 600px;
    .order-bg {
      height: 50%;
    }
  }
}
.transport {
  margin: 0 auto;
  width: 50%;
  border-bottom: solid 10px black;
  padding-left: 2%;
  padding-right: 2%;
  .position {
    position: relative;
    width: 10%;
  }
  .fa-warehouse {
    position: absolute;
    bottom: 5px;
  }
  .fa-home {
    position: absolute;
    bottom: 0;
  }
  .ground {
    position: relative;
    height: 100px;
    width: 80%;
    .fa-truck-moving {
      position: absolute;
      left: 10%;
      bottom: 0;
    }
  }
}
.icon-size {
  font-size: 5em;
}
@media (max-width: 768px) {
  .icon-size {
    font-size: 2.8em;
  }
}
@media (max-width: 375px) {
  .transport {
    width: 100%;
    .icon-size {
      font-size: 2.5em;
    }
    .fa-home {
      right: -5px;
    }
  }
}
</style>
