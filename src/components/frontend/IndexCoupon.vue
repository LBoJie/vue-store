<template>
  <div class="anniversary">
    <ReservationAlert />
    <h2 class="text-center h1 p-2 anniversary-title text-danger">歡樂周年慶</h2>
    <div class="first mt-5">
      <h3 class="text-info">優惠第一重! 買越多 省越多</h3>
      <div class="coupons mt-md-5 d-flex flex-wrap">
        <div class="coupon">
          <div class="coupon-left text-center bg-danger">10% off</div>
          <div class="coupon-right text-center bg-warning">
            <P>單筆滿1000</P>
            <p>結帳輸入:10PercentOff</p>
          </div>
        </div>
        <div class="coupon">
          <div class="coupon-left text-center bg-danger">20% off</div>
          <div class="coupon-right text-center bg-warning">
            <P>單筆滿2000</P>
            <p>結帳輸入:20PercentOff</p>
          </div>
        </div>
        <div class="coupon">
          <div class="coupon-left text-center bg-danger">30% off</div>
          <div class="coupon-right text-center bg-warning">
            <P>單筆滿2500</P>
            <p>結帳輸入:30PercentOff</p>
          </div>
        </div>
      </div>
    </div>
    <div class="second">
      <h3 class="text-info">優惠第二重! 來店打卡就送精美小禮品</h3>
      <p class="h6">凡是來店打卡，並tag 廖氏木頭工房 ，就送精美木頭杯墊。</p>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#reservationModalCenter"
      >立即預約</button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="reservationModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">預約資訊</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body px-5">
              <label for="name" class="mt-2">
                <i class="fas mr-2 fa-user fa-2x"></i>姓名
              </label>
              <input class="form-control" type id="name" />
              <label for="email" class="mt-2">
                <i class="fas mr-2 fa-envelope fa-2x"></i>email
              </label>
              <input class="form-control" type="email" id="email" />
              <label for="phone" class="mt-2">
                <i class="fas mr-2 fa-mobile fa-2x"></i>電話
              </label>
              <input class="form-control" type="phone" id="phone" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button
                type="button"
                class="btn btn-primary"
                @click="reservation"
                data-dismiss="modal"
              >預約去</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="mt-5 text-center">主辦單位保有最終修改、變更、活動解釋及取消本活動之權利，若有相關異動將會公告於網站， 恕不另行通知。</p>
  </div>
</template>

<script>
import ReservationAlert from './ReservationAlert.vue';

export default {
  components: {
    ReservationAlert,
  },
  methods: {
    reservation() {
      this.$bus.$emit('reservationDone');
    },
  },
};


</script>
<style lang="scss" scoped>
.anniversary {
  margin: 0 auto;
  max-width: 80%;
  padding-top: 200px;
}

.anniversary-title {
  font-weight: 800;
  border-bottom: solid 2px #dc3545;
}
.coupons {
  margin-bottom: 100px;
}
.coupon {
  width: 25%;
  height: 120px;
  margin: 0 auto;
  border-radius: 5px;
  position: relative;
  display: flex;
  font-weight: 600;
}
.coupon:after,
.coupon:before {
  content: "";
  position: absolute;
  display: block;
  width: 10px;
  height: 10px;
  z-index: 2;
  left: 75px;
  background: #fff;
  border-radius: 5px;
}
.coupon:after {
  bottom: -5px;
}
.coupon:before {
  top: -5px;
}
.coupon-left {
  width: 80px;
  height: 120px;
  position: relative;
  line-height: 120px;
}
.coupon-left:after {
  content: "";
  position: absolute;
  top: 0;
  display: block;
  width: 4px;
  height: 100%;
  right: 0px;
  z-index: 1;
  background-position: 0px 0px;
  background-color: transparent;
  background-size: 4px 4px;
  background-image: radial-gradient(
    circle at right,
    #fff3ed 2px,
    transparent 0
  );
}
.coupon-right {
  flex: 1;
  height: 120px;
  line-height: 40px;
  padding-top: 10px;
}
@media (max-width: 768px) {
  .anniversary {
    max-width: 100%;
  }
  .coupon {
    width: 30%;
  }
  .coupon-left {
    height: 160px;
    line-height: 160px;
  }
  .coupon-right {
    height: 160px;
    line-height: 30px;
  }
}
@media (max-width: 375px) {
  .coupon {
    margin-top: 50px;
    width: 100%;
  }
}
</style>
