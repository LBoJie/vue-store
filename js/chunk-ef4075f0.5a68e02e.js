(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef4075f0"],{"30e0":function(t,e,s){"use strict";var i=s("8948"),a=s.n(i);a.a},8948:function(t,e,s){},"9a4e":function(t,e,s){"use strict";var i=s("afd2"),a=s.n(i);a.a},a58c:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("cartAlert"),s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("div",{staticClass:"prodContent d-flex flex-wrap justify-content-center pb-5"},[s("div",{staticClass:"prodImg mr-md-5"},[s("img",{attrs:{src:t.product.imageUrl,alt:""}})]),s("div",{staticClass:"prodIntro"},[s("h1",{staticClass:"border-bottom border-secondary pb-3 title"},[t._v(t._s(t.product.title))]),s("del",{staticClass:"h5"},[t._v("原價:"+t._s(t.product.origin_price))]),s("span",{staticClass:"h5 ml-5"},[t._v("特價:"+t._s(t.product.price))]),s("h3",{staticClass:"border-top border-secondary pt-3 mt-3"},[t._v("商品介紹")]),s("p",{staticClass:"mt-3 content-text"},[t._v(t._s(t.product.content))]),s("h3",{staticClass:"border-top border-secondary pt-3 mt-3"},[t._v("材質")]),s("p",{staticClass:"border-bottom border-secondary py-3 content-text"},[t._v(t._s(t.product.description))]),s("div",{staticClass:"form-group d-flex align-items-center"},[s("label",{staticClass:"qty-set",attrs:{for:"productQuantity"}},[t._v("數量")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.qty,expression:"product.qty"}],staticClass:"form-control",attrs:{id:"productQuantity"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.product,"qty",e.target.multiple?s:s[0])}}},t._l(10,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e)+t._s(t.product.unit))])})),0)]),s("button",{staticClass:"btn btn-danger cart",attrs:{disabled:t.isDisable},on:{click:function(e){return t.addtoCart(t.product.id,t.product.qty)}}},[t.product.id==t.loadingItem?s("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):t._e(),t._v("加入購物車\n      ")]),s("button",{staticClass:"btn btn-primary cart mr-2",on:{click:t.goIndex}},[t._v("返回列表")])])]),s("div",{staticClass:"mabylike"},[t._m(0),s("ProductSwiper",{on:{getproductid:t.goProduct}})],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mabylike-title"},[s("h3",{staticClass:"text-center"},[t._v("您可能喜歡")])])}],r=s("f2d2"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"swiperWidth mb-5"},[t.mabylike1.length>0?s("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[s("swiper-slide",[s("div",{staticClass:"d-flex flex-wrap"},t._l(t.mabylike1,(function(e){return s("div",{key:e.id,staticClass:"product",on:{click:function(s){return t.passProduct(e.id)}}},[s("div",{staticClass:"picture"},[s("img",{staticClass:"swiperImg",attrs:{src:e.imageUrl,alt:""}}),s("div",{staticClass:"showmore"},[s("span",{staticClass:"goproduct border p-2"},[t._v("前往商品")]),s("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(e.price)))])])]),s("h6",{staticClass:"text-center"},[t._v(t._s(e.title))])])})),0)]),s("swiper-slide",[s("div",{staticClass:"d-flex flex-wrap"},t._l(t.mabylike2,(function(e){return s("div",{key:e.id,staticClass:"product",on:{click:function(s){return t.passProduct(e.id)}}},[s("div",{staticClass:"picture"},[s("img",{staticClass:"swiperImg",attrs:{src:e.imageUrl,alt:""}}),s("div",{staticClass:"showmore"},[s("span",{staticClass:"goproduct border p-2"},[t._v("前往商品")]),s("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(e.price)))])])]),s("h6",{staticClass:"text-center"},[t._v(t._s(e.title))])])})),0)]),s("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),s("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],1):t._e()],1)},n=[],c=s("7212"),l={name:"carrousel",data:function(){return{swiperOption:{autoplay:{delay:1e4,disableOnInteraction:!1},direction:"horizontal",speed:1e3,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},products:[],mabylike1:[],mabylike2:[]}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"]},methods:{getProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/products/all");t.$http.get(e).then((function(e){t.products=e.data.products;for(var s=0;s<=7;s+=1){var i=Math.floor(Math.random()*t.products.length);s<=3?(t.mabylike1.push(t.products[i]),t.products.splice(i,1)):(t.mabylike2.push(t.products[i]),t.products.splice(i,1))}}))},passProduct:function(t){this.$emit("getproductid",t)}},created:function(){this.getProducts()}},u=l,d=(s("30e0"),s("2877")),p=Object(d["a"])(u,o,n,!1,null,"59d7254a",null),f=p.exports,m={data:function(){return{product:{},isLoading:!1,loadingItem:"",isDisable:!1}},components:{cartAlert:r["a"],ProductSwiper:f},methods:{getProduct:function(t){var e=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/product/").concat(t);e.isLoading=!0,e.$http.get(s).then((function(t){e.isLoading=!1,e.product=t.data.product,e.product.qty=1}))},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=this;s.isDisable=!0;var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/cart");s.loadingItem=t;var a={product_id:t,qty:e};s.$http.post(i,{data:a}).then((function(){s.loadingItem="",s.isDisable=!1,s.$bus.$emit("refreshCart"),s.$bus.$emit("alertCart")}))},goIndex:function(){this.$router.push("/products/all/products")},goProduct:function(t){this.$router.push("/product/".concat(t)),this.getProduct(t)}},created:function(){this.getProduct(this.$route.params.ProductId)}},v=m,h=(s("eb3b"),Object(d["a"])(v,i,a,!1,null,null,null));e["default"]=h.exports},ac6a:function(t,e,s){for(var i=s("cadf"),a=s("0d58"),r=s("2aba"),o=s("7726"),n=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),d=l("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(f),v=0;v<m.length;v++){var h,g=m[v],b=f[g],C=o[g],_=C&&C.prototype;if(_&&(_[u]||n(_,u,p),_[d]||n(_,d,g),c[g]=p,b))for(h in i)_[h]||r(_,h,i[h],!0)}},afd2:function(t,e,s){},dc83:function(t,e,s){},eb3b:function(t,e,s){"use strict";var i=s("dc83"),a=s.n(i);a.a},f2d2:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-alert bg-light rounded text-center"},t._l(t.messages,(function(e,i){return s("div",{key:i,staticClass:"alert alert-dismissible p-1 m-0"},[s("i",{staticClass:"fas fa-clipboard-check fa-5x mt-5 text-info"}),s("h4",{staticClass:"p-4"},[t._v("已加入購物車")]),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(i)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},a=[],r=(s("ac6a"),{data:function(){return{messages:[]}},methods:{updateMessage:function(){var t=Math.floor(new Date/1e3);this.messages.push({timestamp:t}),this.removeMessageWithTiming(t)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout((function(){e.messages.forEach((function(s,i){s.timestamp===t&&e.messages.splice(i,1)}))}),2500)}},created:function(){var t=this;t.$bus.$on("alertCart",(function(){t.updateMessage()}))}}),o=r,n=(s("9a4e"),s("2877")),c=Object(n["a"])(o,i,a,!1,null,"1fcdf6af",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-ef4075f0.5a68e02e.js.map