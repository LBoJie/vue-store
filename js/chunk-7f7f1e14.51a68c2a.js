(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f7f1e14"],{"2dd9":function(t,e,r){},"9a03":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"container-w50"},[r("h1",{staticClass:"indexlogo bg-primary"},[r("router-link",{staticClass:"text-white h-100 d-block d-flex align-items-center justify-content-center logo",attrs:{to:"/"}},[t._v("Liao's Factory")])],1),r("form",{on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.order.products,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),r("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),r("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])})),0),r("tfoot",[r("tr",[r("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),r("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),r("table",{staticClass:"table"},[r("tbody",[r("tr",[r("th",{attrs:{width:"200"}},[t._v("Email")]),r("td",[t._v(t._s(t.order.user.email))])]),r("tr",[r("th",[t._v("姓名")]),r("td",[t._v(t._s(t.order.user.name))])]),r("tr",[r("th",[t._v("收件人電話")]),r("td",[t._v(t._s(t.order.user.tel))])]),r("tr",[r("th",[t._v("收件人地址")]),r("td",[t._v(t._s(t.order.user.address))])]),r("tr",[r("th",[t._v("付款狀態")]),r("td",[t.order.is_paid?r("span",{staticClass:"text-success"},[t._v("付款完成")]):r("span",[t._v("尚未付款")])])])])]),r("div",{staticClass:"text-right"},[r("router-link",{staticClass:"btn btn-outline-primary mr-2",attrs:{to:"/"}},[t._v("\n        回首頁")]),!1===t.order.is_paid?r("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")]):t._e()],1)])]),r("Footer")],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("th",[t._v("品名")]),r("th",[t._v("數量")]),r("th",[t._v("單價")])])}],i=r("acd4"),n={components:{Footer:i["a"]},data:function(){return{isLoading:!1,orderId:"",order:{user:{}}}},methods:{getOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/order/").concat(t.orderId);t.$http.get(e).then((function(e){t.order=e.data.order}))},payOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("bojie","/pay/").concat(t.orderId);t.isLoading=!0,t.$http.post(e).then((function(e){e.data.success&&(t.getOrder(),t.isLoading=!1,t.$router.push("/orderdone"))}))}},created:function(){this.orderId=this.$route.params.OrderId,this.getOrder()}},o=n,c=(r("d6ec"),r("2877")),d=Object(c["a"])(o,s,a,!1,null,"766759ce",null);e["default"]=d.exports},acd4:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-dark p-3 text-center"},[r("img",{attrs:{src:"https://img.icons8.com/dusk/64/000000/wood.png"}}),r("p",{staticClass:"pt-2 text-white"},[t._v("本網頁所載的所有資料、商標、標誌、圖像、僅供個人學習之用，非商業用途。")])])}],i={},n=i,o=r("2877"),c=Object(o["a"])(n,s,a,!1,null,null,null);e["a"]=c.exports},d6ec:function(t,e,r){"use strict";var s=r("2dd9"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-7f7f1e14.51a68c2a.js.map