<template>
  <div>
    <Swiper />
    <div class="pt-5 container">
      <div class="content">
        <h2 class="text-center sec-title pb-4">
          <span>Liao's Factory</span>
        </h2>
        <div class="aboutus d-flex justify-content-center align-items-center mb-4">
          <div class="aboutus-content px-5">
            <h3
              class="aboutus-title font-weight-bold text-center my-4"
            >廖氏木頭工房 &nbsp;&nbsp;&nbsp;一甲子的堅持</h3>
            <p class="aboutus-text jqshow font-weight-bold">
              廖氏木頭工房創立於30年代末，已歷經五代，以批發木頭起家，隨著台灣社會經濟的成長，以本身的專業於1998年創立廖氏工廠，
              一路踏著堅實的步履，從進口木頭到製作家具出口，
              建立良好的工業製作基礎，
              擁有著五代的木工技術與歷鍊過國際大廠合作的洗禮，因應台灣生活形態的改變，滿足顧客對家居空間的需求不同而作的家具設計，真正融入日常生活。
            </p>
          </div>
          <div class="text-center flip h3">
            <i class="fas fa-angle-double-down jump"></i>
          </div>
        </div>
        <div class="category d-flex flex-wrap justify-content-between">
          <router-link class="categoryAll" to="/products/all">
            <img src="../../assets/image/allproducttitle.jpg" alt />
            <h5 class="p-3 categoryTitle text-center">熱門產品&nbsp;&nbsp; HOT PRODUCTS</h5>
          </router-link>
          <router-link class="categoryProducts" to="/products/sofa">
            <img src="../../assets/image/sofatitle.jpg" alt />
            <h5 class="p-3 categoryTitle text-center">客廳家具&nbsp;&nbsp; LIVING ROOM</h5>
          </router-link>
          <router-link class="categoryProducts" to="/products/diningtable">
            <img src="../../assets/image/desktitle.jpg" alt />
            <h5 class="p-3 categoryTitle text-center">餐廳家具&nbsp; &nbsp;DINING ROOM</h5>
          </router-link>
          <router-link class="categoryProducts" to="/products/bed">
            <img src="../../assets/image/bedtitle.jpg" alt />
            <h5 class="p-3 categoryTitle text-center">臥室家具&nbsp;&nbsp; BEDROOM</h5>
          </router-link>
          <router-link class="categoryProducts" to="/products/wardrobe">
            <img src="../../assets/image/wardrobetitle.jpg" alt />
            <h5 class="p-3 categoryTitle text-center">收納家具&nbsp;&nbsp; STORAGE ROOM</h5>
          </router-link>
        </div>
      </div>
    </div>
    <div class="principle mt-4" style="background:#f5f5f3;">
      <h2 class="py-5 showAlbum text-center font-weight-bold">[ 廖氏理念 ]</h2>
      <div class="guidelines container">
        <div class="select-tree mb-5 p-2">
          <img src="../../assets/image/album1.jpg" class="slidetree" />
          <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
            <div class="select-tree-content">
              <h3 class="text-center tree-title py-2 font-weight-bold">獨家選材</h3>
              <p class="tree-text">
                廖氏木頭工房採用經ＦＳＣ認證之再生林木材，如北美橡木、梣木、楊木、胡桃木及紐西蘭松木等。
                FSC(Forest Stewardship Council) 是一個國際間森林管理委員會所認證的森林永續發展機制。
                FSC商品的認證訴求在於有計畫的砍伐與回饋種植樹木，讓地球上的森林可以永續長存。
              </p>
            </div>
          </div>

          <div class="clear"></div>
        </div>
        <div class="pro-design mb-5 p-2">
          <img src="../../assets/image/album2.jpg" class="slidepro" />
          <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
            <div class="pro-design-content">
              <h3 class="text-center design-title py-2 font-weight-bold">專業設計</h3>
              <p
                class="design-text"
              >廖氏家具團隊，除了擁有著五代的木工技術、歷鍊過國際大廠合作的洗禮之外，為滿足顧客對家居空間的需求不同而作的家具設計，能真正融入生活。</p>
            </div>
          </div>
        </div>
        <div class="maker mb-5 p-2">
          <img src="../../assets/image/album3.jpg" class="slidemaker" />
          <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
            <div class="maker-content">
              <h3 class="text-center maker-title py-2 font-weight-bold">職人打造</h3>
              <p class="maker-text">
                我們的團隊裡有許多台灣一流的木工師傅，他們擁有的經驗與技術都是十分珍貴的資產，需要被保存與重視。
                因應台灣生活形態的改變，挑選最適合製作的木種、材料表面的塗裝、色彩與保護方式、
                廖氏木頭工房將這些技法的運用保留在家具的設計與製作裡頭，希望能延續傳承這樣的精神！
              </p>
            </div>
          </div>
        </div>
        <div class="test mb-5 p-2">
          <img src="../../assets/image/album4.jpg" class="slidetest" />
          <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
            <div class="test-content">
              <h3 class="text-center test-title py-2 font-weight-bold">耐久測試</h3>
              <p class="test-text">我們所出品的家具，皆經過長時間的試用、嚴苛環境的測試，因應台灣生活得氣候，做出能夠傳承的家具。</p>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <div class="store d-flex flex-wrap justify-content-between my-5 container">
      <div class="map">
        <iframe
          class="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6424740185307!2d121.5729609153792!3d25.080104242594835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac645b0ac4e3%3A0x2f64363daf929290!2z5o236YGL5riv5aKY56uZ!5e0!3m2!1szh-TW!2stw!4v1588684231265!5m2!1szh-TW!2stw"
          allowfullscreen
          aria-hidden="false"
          tabindex="0"
          frameborder="0"
        ></iframe>
      </div>
      <div class="card" style="width: 48%;">
        <img src="../../assets/image/store.jpg" class="card-img-top" alt />
        <div class="card-body">
          <h5 class="card-title text-center">Liao's Factory</h5>
          <p class="card-text"></p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">T: (02) 28576937</li>
            <li class="list-group-item">平日 10:00 -19:00 &nbsp; 假日 11:00 -20:00</li>
            <li class="list-group-item">台北市內湖區幸福里幸運街33號</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from 'jquery';
import Swiper from './Swiper.vue';

export default {
  components: {
    Swiper,
  },
  created() {
    (function Jump() {
      $('.jump')
        .animate({ top: '-10px' }, 300)
        .animate({ top: '0px' }, 300);
      setTimeout(Jump, 600);
    }());

    $(window).scroll(() => {
      $('.jqshow').each(function show() {
        const bottomOfObject = $(this).offset().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > bottomOfObject) {
          $('.aboutus-title').animate({ opacity: '1' }, 2000);
          $('.aboutus-text').animate({ opacity: '1' }, 2000);
        }
      });

      $('.slidetree').each(function show() {
        const bottomOfObject = $(this).offset().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > bottomOfObject) {
          $('.slidetree').animate({ left: '0' }, 1500);
        }
      });

      $('.slidepro').each(function show() {
        const bottomOfObject = $(this).offset().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > bottomOfObject) {
          $('.slidepro').animate({ right: '10px' }, 1500);
        }
      });
      $('.slidemaker').each(function show() {
        const bottomOfObject = $(this).offset().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > bottomOfObject) {
          $('.slidemaker').animate({ left: '0' }, 1500);
        }
      });
      $('.slidetest').each(function show() {
        const bottomOfObject = $(this).offset().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();
        if (bottomOfWindow > bottomOfObject) {
          $('.slidetest').animate({ right: '10px' }, 1500);
        }
      });
    });
  },
};


</script>
<style lang="scss" scoped>
.sec-title {
  color: #333;
  position: relative;
}
.category {
  .categoryAll {
    transition: all 0.4s;
    position: relative;
    width: 100%;
    margin-bottom: 2%;
  }
  .categoryProducts {
    transition: all 0.4s;
    position: relative;
    width: 49%;
    margin-bottom: 2%;
  }
  .categoryTitle {
    position: absolute;
    margin-bottom: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  img {
    width: 100%;
    height: 300px;
  }
}
.categoryProducts:hover,
.categoryAll:hover {
  -webkit-filter: opacity(30%); /* Safari */
  filter: opacity(70%);
}

.mt-5 {
  margin-top: 100px !important;
}
.sec-title::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 50%;
  margin: 0px 0 0 -20px;
  width: 40px;
  display: block;
  height: 1px;
  background: #333;
}
.clear {
  clear: both;
}
.jump {
  position: relative;
}
.aboutus {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 600px;
  background: url(../../assets/image/aboutus.jpg) center center;
  background-attachment: fixed;
  .aboutus-content {
    color: #fff;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    .aboutus-title {
      opacity: 0;
    }
    .aboutus-text {
      opacity: 0;
    }
  }
  .flip {
    color: #fff;
    position: absolute;
    bottom: 5px;
  }
}
.select-tree {
  float: right;
  width: 100%;
  overflow: hidden;
  img {
    position: relative;
    left: -800px;
    float: left;
    width: 40%;
    height: 97%;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.2);
  }
  .select-tree-content {
    float: right;
    width: 50%;
    color: #333;
  }
}
.pro-design {
  float: left;
  width: 100%;
  overflow: hidden;
  img {
    float: right;
    position: relative;
    right: -800px;
    width: 40%;
    height: 97%;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.2);
  }
  .pro-design-content {
    float: left;
    width: 50%;
    color: #333;
  }
}
.maker {
  float: right;
  width: 100%;
  overflow: hidden;
  img {
    float: left;
    position: relative;
    left: -800px;
    width: 40%;
    height: 97%;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.2);
  }
  .maker-content {
    float: right;
    width: 50%;
    color: #333;
  }
}
.test {
  float: left;
  width: 100%;
  overflow: hidden;
  img {
    float: right;
    position: relative;
    right: -800px;
    width: 40%;
    height: 97%;
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.2);
  }
  .test-content {
    float: left;
    width: 50%;
    color: #333;
  }
}
.store {
  .map {
    width: 48%;
    .googleMap {
      height: 100%;
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .aboutus-content {
    width: 100% !important;
  }
  .select-tree {
    img {
      float: none;
      width: 100%;
    }
    .select-tree-content {
      float: none;
      width: 100%;
    }
  }
  .pro-design {
    img {
      float: none;
      width: 100%;
    }
    .pro-design-content {
      float: none;
      width: 100%;
    }
  }
  .test {
    img {
      float: none !important;
      width: 100% !important;
    }
    .test-content {
      float: none !important;
      width: 100% !important;
    }
  }
  .maker {
    img {
      float: none !important;
      width: 100% !important;
    }
    .maker-content {
      float: none !important;
      width: 100% !important;
    }
  }
}
@media (max-width: 375px) {
  .categoryProducts {
    width: 100% !important;
  }
  .aboutus {
    .aboutus-content {
      width: 100%;
      .aboutus-title {
        margin: 0 auto;
        width: 100%;
      }
      .aboutus-text {
        width: 100% !important;
      }
    }
  }
  .select-tree {
    width: 100%;
    float: none;
  }
  .pro-design {
    width: 100%;
    float: none;
  }
  .maker {
    width: 100% !important;
    float: none;
  }

  .test {
    width: 100% !important;
    float: none;
  }
  .store {
    .map {
      width: 100% !important;
    }
    .card {
      width: 100% !important;
    }
  }
}
</style>
