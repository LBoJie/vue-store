<template>
  <div>
    <div class="imgTitle">
      <img :src="titleImgUrl" alt />
    </div>
    <ul class="text-center border-secondary categoryMargin py-3">
      <router-link @click.native="changeImg('all')" class="p-3 link" to="/products/all">
        <span>全部家具</span>
      </router-link>
      <router-link @click.native="changeImg('sofa')" class="p-3 link" to="/products/sofa">
        <span>沙發</span>
      </router-link>
      <router-link
        @click.native="changeImg('diningtable')"
        class="p-3 link"
        to="/products/diningtable"
      >
        <span>餐桌</span>
      </router-link>
      <router-link @click.native="changeImg('bed')" class="p-3 link" to="/products/bed">
        <span>床組</span>
      </router-link>
      <router-link @click.native="changeImg('wardrobe')" class="p-3 link" to="/products/wardrobe">
        <span>衣櫃</span>
      </router-link>
    </ul>

    <router-view @changeImg="changeImg"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titleImgUrl: '',
    };
  },
  methods: {
    changeImg(category) {
      const vm = this;
      switch (category) {
        case 'all':
          vm.titleImgUrl = require('../../assets/image/allproducttitle.jpg');
          break;
        case 'sofa':
          vm.titleImgUrl = require('../../assets/image/sofatitle.jpg');
          break;
        case 'diningtable':
          vm.titleImgUrl = require('../../assets/image/desktitle.jpg');
          break;
        case 'bed':
          vm.titleImgUrl = require('../../assets/image/bedtitle.jpg');
          break;
        case 'wardrobe':
          vm.titleImgUrl = require('../../assets/image/wardrobetitle.jpg');
          break;
        default:
          vm.titleImgUrl = require('../../assets/image/allproducttitle.jpg');
          break;
      }
    },
  },
  created() {
    this.changeImg('all');
  },
};

</script>
<style lang="scss" scoped>
.imgTitle {
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}

.link {
  text-decoration: none;
  span {
    position: relative;
    color: #333;
  }
}

.link span::after {
  position: absolute;
  content: " ";
  display: block;
  background: #333;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  transition: all 0.3s ease;
}
.link span:hover:after {
  width: 100%;
  left: 0%;
}
.link.active span::after {
  width: 100%;
  left: 0%;
}

.categoryMargin {
  padding: 0;
  border-top: solid 1px #e5e5e5;
  border-bottom: solid 1px #e5e5e5;
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 48px;
  width: 50%;
}
@media (max-width: 375px) {
  .imgTitle {
    display: none;
  }
  .categoryMargin {
    width: 100%;
  }
}
</style>
