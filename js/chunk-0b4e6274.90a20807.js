(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b4e6274"],{3258:function(t,e,a){"use strict";var s=a("c9db"),r=a.n(s);r.a},"6d23":function(t,e,a){},"8e15":function(t,e,a){t.exports=a.p+"img/IndexLogo.f3862ce4.svg"},a9e9:function(t,e,a){"use strict";var s=a("6d23"),r=a.n(s);r.a},ac6a:function(t,e,a){for(var s=a("cadf"),r=a("0d58"),i=a("2aba"),o=a("7726"),n=a("32e9"),c=a("84f2"),l=a("2b4c"),u=l("iterator"),d=l("toStringTag"),m=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(p),v=0;v<f.length;v++){var g,h=f[v],C=p[h],_=o[h],b=_&&_.prototype;if(b&&(b[u]||n(b,u,m),b[d]||n(b,d,h),c[h]=m,C))for(g in s)b[g]||i(b,g,s[g],!0)}},acd4:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark p-3 text-center"},[a("img",{attrs:{src:"https://img.icons8.com/dusk/64/000000/wood.png"}}),a("p",{staticClass:"pt-2"},[t._v("本網頁所載的所有資料、商標、標誌、圖像、僅供個人學習之用，非商業用途。")])])}],i={},o=i,n=(a("3258"),a("2877")),c=Object(n["a"])(o,s,r,!1,null,"027ba4ee",null);e["a"]=c.exports},c9db:function(t,e,a){},fcd9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("div",{staticClass:"container "},[s("h1",{staticClass:"my-5"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"indexlogo",attrs:{src:a("8e15"),alt:""}})])],1),s("table",{staticClass:"table"},[s("thead",[s("th"),s("th",[t._v("品名")]),s("th",[t._v("\n        數量\n        "),s("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(e){t.showEdit=!0}}},[t._v("\n          修改\n          ")]),t.showEdit?s("button",{staticClass:"btn btn-sm btn-outline-success ml-1",attrs:{type:"button"},on:{click:function(e){t.addtoCart(),t.showEdit=!1}}},[t._v("確認")]):t._e()]),s("th",[t._v("單價")])]),s("tbody",t._l(t.mergeCart,(function(e){return s("tr",{key:e.id},[s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeSingalCart(e.allId)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),s("td",{staticClass:"align-middle"},[t._v("\n          "+t._s(e.title)+"\n          "),e.coupon?s("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e()]),s("td",{staticClass:"align-middle"},[t._v("\n          "+t._s(e.qty)+"/"+t._s(e.unit)+"\n          "),t.showEdit?s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return t.changeQty(e,1)}}},[t._v("+")]),s("button",{staticClass:"btn btn-sm btn-outline-primary",attrs:{type:"button"},on:{click:function(a){return t.changeQty(e)}}},[t._v("-")])]):t._e()]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.price)))])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t.cart.final_total!=t.cart.total?s("tr",[s("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),s("td",{staticClass:"text-right text-success"},[t._v(t._s(t.cart.final_total))])]):t._e()])]),t.noCoupon?s("p",{staticClass:"text-danger text-center h3"},[t._v("無此優惠卷!")]):t._e(),s("div",{staticClass:"input-group mb-3 input-group-sm coupon-size"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.addCouponCode()}}},[t._v("\n        套用優惠碼\n        ")])])]),s("div",{staticClass:"my-5"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.creatOrder(e)}}},[s("div",{staticClass:"form-group"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?s("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),s("div",{staticClass:"form-group"},[t._m(1),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?s("span",{staticClass:"text-danger"},[t._v("姓名不得為空")]):t._e()]),s("div",{staticClass:"form-group"},[t._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{name:"phone",type:"tel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("phone")?s("span",{staticClass:"text-danger"},[t._v("電話不得為空")]):t._e()]),s("div",{staticClass:"form-group"},[t._m(3),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?s("span",{staticClass:"text-danger"},[t._v("地址不得為空")]):t._e()]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"comment"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(4)])]),s("Footer")],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"useremail"}},[a("i",{staticClass:"fas fa-asterisk text-danger"}),t._v("Email\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"username"}},[a("i",{staticClass:"fas fa-asterisk text-danger"}),t._v("收件人姓名\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"usertel"}},[a("i",{staticClass:"fas fa-asterisk text-danger"}),t._v("收件人電話\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"useraddress"}},[a("i",{staticClass:"fas fa-asterisk text-danger"}),t._v("收件人地址\n        ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])}],i=(a("ac6a"),a("acd4")),o={components:{Footer:i["a"]},data:function(){return{showEdit:!1,cart:{},mergeCart:[],coupon_code:"",noCoupon:!1,isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{changeQty:function(t,e){var a=t;if(e)a.qty+=1;else{if(t.qty<=0)return;a.qty-=1}},addtoCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/cart");t.mergeCart.forEach((function(a){if(a.qty!==a.originQty)if(0!==a.qty){var s={product_id:a.productId,qty:a.qty};t.removeCartItem(a),t.$http.post(e,{data:s})}else t.removeCartItem(a)}))},removeCartItem:function(t){var e=this;e.isLoading=!0,t.allId.forEach((function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/cart/").concat(t);e.$http.delete(a).then((function(){e.getCart(),e.isLoading=!1}))}))},removeSingalCart:function(t){var e=this;e.isLoading=!0,t.forEach((function(a){var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/cart/").concat(a);e.loadingItem=t,e.$http.delete(s).then((function(){e.isLoading=!1,e.getCart()}))}))},getCart:function(){var t=this;t.isLoading=!0;var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/cart");t.$http.get(e).then((function(e){t.cart=e.data.data,t.mergeCart=[],t.cart.carts.forEach((function(e){this[e.product.title]||(this[e.product.title]={title:e.product.title,qty:0,originQty:0,price:0,allId:[],unit:e.product.unit,productId:e.product.id},t.mergeCart.push(this[e.product.title])),this[e.product.title].qty+=e.qty,this[e.product.title].originQty=this[e.product.title].qty,this[e.product.title].price+=e.total,this[e.product.title].allId.push(e.id)}),Object.create(null)),t.isLoading=!1}))},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/coupon"),a={code:t.coupon_code};t.isLoading=!0,t.$http.post(e,{data:a}).then((function(e){t.noCoupon=!1,e.data.success||(t.noCoupon=!0),t.isLoading=!1,t.getCart()}))},creatOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/order"),a=t.form;t.isLoading=!0,t.$validator.validate().then((function(s){s?t.$http.post(e,{data:a}).then((function(e){e.data.success&&t.$router.push("/CustomerCheckout/".concat(e.data.orderId)),t.isLoading=!1})):t.isLoading=!1}))}},created:function(){this.getCart()}},n=o,c=(a("a9e9"),a("2877")),l=Object(c["a"])(n,s,r,!1,null,"655333b4",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-0b4e6274.90a20807.js.map