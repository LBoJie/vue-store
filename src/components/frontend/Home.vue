<template>
  <div class="pt-5">
    <img class="logo" src="../../assets/image/IndexLogo.svg" alt />
    <Swiper class="mt-5" />
    <div class="content mt-5">
      <h2 class="text-center sec-title py-4">
        <span>FEATURE</span>
      </h2>

      <div class="aboutus">
        <h2 class="aboutus-title">廖氏木頭工房 &nbsp;&nbsp;&nbsp;一甲子的堅持</h2>
        <p class="aboutus-content jqshow">
          廖氏木頭工房創立於30年代末，已歷經五代，以批發木頭起家，隨著台灣社會經濟的成長，以本身的專業於1998年創立廖氏工廠，一路踏著堅實的步履，從進口木頭到製作家具出口，建立良好的工業製作基礎，
          擁有著五代的木工技術與歷鍊過國際大廠合作的洗禮，因應台灣生活形態的改變，滿足顧客對家居空間的需求不同而作的家具設計，真正融入日常生活。
        </p>
        <router-link class="noMore text-cyan h3" to="/index/products/all">
          了解更多
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
      <div>
        <div class="content-album">
          <h3 class="my-5 showAlbum text-center">[ 廖氏理念 ]</h3>
          <div class="text-center flip h3">
            <i class="fas fa-arrow-circle-down jump"></i>
          </div>

          <div class="d-flex">
            <div class="card border-secondary border-0 bg-light">
              <img src="../../assets/image/album1.jpg" class="card-img-top" />
              <div class="card-body card-bg d-flex justify-content-end">
                <h4 class="card-text">
                  嚴選木材
                  <a href="#" class="search" id="go-tree">
                    <img src="https://img.icons8.com/plasticine/50/000000/search-more.png" />
                  </a>
                </h4>
              </div>
            </div>
            <div class="card border-secondary border-0 bg-light">
              <img src="../../assets/image/album2.jpg" class="card-img-top" />
              <div class="card-body card-bg d-flex justify-content-end">
                <h4 class="card-text">
                  專業設計
                  <a href="#" class="search" id="go-pro">
                    <img src="https://img.icons8.com/plasticine/50/000000/search-more.png" />
                  </a>
                </h4>
              </div>
            </div>
            <div class="card border-secondary border-0 bg-light">
              <img src="../../assets/image/album3.jpg" class="card-img-top" />
              <div class="card-body card-bg d-flex justify-content-end">
                <h4 class="card-text">
                  職人打造
                  <a href="#" class="search go-maker-test">
                    <img src="https://img.icons8.com/plasticine/50/000000/search-more.png" />
                  </a>
                </h4>
              </div>
            </div>
            <div class="card border-secondary border-0 bg-light">
              <img src="../../assets/image/album4.jpg" class="card-img-top" />
              <div class="card-body card-bg d-flex justify-content-end">
                <h4 class="card-text">
                  耐久測試
                  <a href="#" class="search go-maker-test">
                    <img src="https://img.icons8.com/plasticine/50/000000/search-more.png" />
                  </a>
                </h4>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>

        <div class="select-tree mr-5">
          <img src="../../assets/image/album1.jpg" class="slidetree" />
          <div class="select-tree-content">
            <h3 class="text-center tree-title my-4">獨家選材</h3>
            <p class="tree-text">
              廖氏木頭工房採用經ＦＳＣ認證之再生林木材，如北美橡木、梣木、楊木、胡桃木及紐西蘭松木等。
              FSC(Forest Stewardship Council) 是一個國際間森林管理委員會所認證的森林永續發展機制。
              FSC商品的認證訴求在於有計畫的砍伐與回饋種植樹木，讓地球上的森林可以永續長存。
            </p>
          </div>
          <div class="clear"></div>
        </div>
        <div class="pro-design ml-md-5 mt-3">
          <img src="../../assets/image/album2.jpg" class="slidepro" />
          <div class="pro-design-content">
            <h3 class="text-center design-title my-4">專業設計</h3>
            <p
              class="design-text"
            >廖氏家具團隊，除了擁有著五代的木工技術、歷鍊過國際大廠合作的洗禮之外，將因應台灣生活形態的改變，為滿足顧客對家居空間的需求不同而作的家具設計，能真正融入生活。</p>
          </div>
        </div>
        <div class="clear"></div>

        <div class="maker-test d-flex justify-content-center flex-wrap mt-3">
          <div class="maker">
            <img src="../../assets/image/album3.jpg" class="slidemaker" />
            <div class="maker-content">
              <h3 class="text-center maker-title">職人打造</h3>
              <p
                class="maker-text"
              >我們的團隊裡有許多台灣一流的木工師傅，他們擁有的經驗與技術都是十分珍貴的資產，需要被保存與重視。廖氏木頭工房將這些技法的運用保留在家具的設計與製作裡頭，希望能延續傳承這樣的精神！</p>
            </div>
          </div>
          <div class="test">
            <img src="../../assets/image/album4.jpg" />
            <div class="test-content">
              <h3 class="text-center test-title">耐久測試</h3>
              <p class="test-text">我們所出品的家具，皆經過長時間的試用、嚴苛環境的測試，因應台灣生活得氣候，做出能夠傳承的家具。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swiper from "./Swiper";
import $ from "jquery";
$(document).ready(function() {
  function Jump() {
    $(".jump")
      .animate({ top: "-10px" }, 300)
      .animate({ top: "0px" }, 300);
    setTimeout(Jump, 600);
  }
  Jump();

  $(window).scroll(function() {
    $(".jqshow").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(".aboutus-title").animate({ opacity: "1" }, 2000);
        $(".aboutus-content").animate({ opacity: "1" }, 2000);
      }
    });

    $(".slidetree").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(".slidetree").animate({ left: "0" }, 2000);
      }
    });

    $(".slidepro").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(".slidepro").animate({ right: "0" }, 2000);
      }
    });
    $(".slidemaker").each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(".maker").animate({ left: "0" }, 1500);
        $(".test").animate({ right: "0" }, 1500);
      }
    });
  });

  $(function() {
    $("#go-tree").click(function(e) {
      e.preventDefault();
      $("html,body").animate({ scrollTop: $(".tree-text").offset().top }, 500);
    });
  });
  $(function() {
    $("#go-pro").click(function(e) {
      e.preventDefault();
      $("html,body").animate(
        { scrollTop: $(".design-text").offset().top },
        500
      );
    });
  });
  $(function() {
    $(".go-maker-test").click(function(e) {
      e.preventDefault();
      $("html,body").animate({ scrollTop: $(".maker").offset().top }, 500);
    });
  });
});
export default {
  components: {
    Swiper
  }
};
</script>
<style lang="scss" scoped>
.sec-title {
  color: #333;
  position: relative;
}
.logo {
  display: block;
  margin: 120px auto 0px auto;
  width: 25%;
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
.content-album {
  color: #333;

  h3 {
    font-weight: 800;
  }
  .card {
    width: 24%;
    margin: 1%;

    .card-text {
      font-weight: 800;
      border-bottom: solid 1px black;
      .search:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
  }
}
.aboutus {
  position: relative;
  width: 100%;
  padding: 8%;
  height: 700px;
  background: url(../../assets/image/aboutus.jpg) center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .noMore {
    position: absolute;
    width: 20%;
    bottom: 10%;
    right: 20%;
    font-weight: 900;
  }
  .aboutus-title {
    opacity: 0;
    margin-left: 10%;
    margin-bottom: 50px;
    font-weight: 700;
    font-size: 40px;
  }
  .aboutus-content {
    opacity: 0;
    font-weight: 700;
    margin-left: 10%;
    width: 35%;
    font-size: 24px;
  }
}
.card-bg {
  background-color: #f1faee;
}
.select-tree {
  float: right;
  width: 80%;
  padding: 30px;
  overflow: hidden;
  img {
    position: relative;
    left: -800px;
    float: left;
    max-width: 42%;
    height: auto;
  }
  .select-tree-content {
    float: right;
    max-width: 50%;
    color: #333;
    .tree-title {
      font-size: 40px;
      font-weight: 700;
    }
    .tree-text {
      font-size: 24px;
    }
  }
}
.pro-design {
  float: left;
  width: 80%;
  padding: 30px;
  overflow: hidden;
  img {
    float: right;
    position: relative;
    right: -800px;
    max-width: 42%;
    height: auto;
  }
  .pro-design-content {
    float: left;
    max-width: 50%;
    color: #333;
    .design-title {
      font-size: 40px;
      font-weight: 700;
    }
    .design-text {
      font-size: 24px;
    }
  }
}

.maker-test {
  overflow: hidden;
  .maker {
    position: relative;
    left: -1000px;
    width: 48%;
    padding: 30px;
    img {
      float: right;
      max-width: 35%;
      height: 250px;
    }
    .maker-content {
      float: left;
      max-width: 60%;
      color: #333;
      .maker-title {
        font-size: 40px;
        font-weight: 700;
      }
      .maker-text {
        font-size: 24px;
      }
    }
  }
  .test {
    width: 47%;
    padding: 30px;
    position: relative;
    right: -1000px;
    background-color: rgba($color: #33e6cc, $alpha: 0);
    img {
      float: left;
      max-width: 35%;
      height: 250px;
    }
    .test-content {
      float: right;
      max-width: 60%;
      color: #333;
      .test-title {
        font-size: 40px;
        font-weight: 700;
      }
      .test-text {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 768px) {
  .logo {
    width: 60%;
  }
  .aboutus-content {
    width: 70% !important;
  }
  .select-tree {
    img {
      float: none;
      max-width: 100%;
      // margin-bottom: 50px;
    }
    .select-tree-content {
      float: none;
      max-width: 100%;
    }
  }
  .pro-design {
    img {
      float: none;
      max-width: 100%;
    }
    .pro-design-content {
      float: none;
      max-width: 100%;
    }
  }
  .test {
    img {
      float: none !important;
      max-width: 100% !important;
    }
    .test-content {
      float: none !important;
      max-width: 100% !important;
    }
  }
  .maker {
    img {
      float: none !important;
      max-width: 100% !important;
    }
    .maker-content {
      float: none !important;
      max-width: 100% !important;
    }
  }
}
@media (max-width: 375px) {
   .logo {
    width: 70%;
  }
  .aboutus {
    padding: 1%;
    .noMore {
      bottom: 2%;
      right: 5%;
      width: 40%;
    }
    .aboutus-title {
      margin: 0 auto;
      width: 100%;
    }
    .aboutus-content {
      padding-top: 5%;
      margin: 0 auto;
      width: 80% !important;
    }
  }
  .content-album {
    margin: 0;
    width: 100%;
  }
  .content-album .card {
    width: 98%;
    float: none;
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
  }

  .test {
    width: 100% !important;
  }
}
</style>