(function(e){function t(t){for(var a,r,c=t[0],i=t[1],d=t[2],s=0,l=[];s<c.length;s++)r=c[s],u[r]&&l.push(u[r][0]),u[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==u[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},u={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b2366":"9587816e","chunk-2d0b617a":"4dfdd425","chunk-2d2080b6":"9bd12cba","chunk-2d20825d":"c0c18549","chunk-2d217a99":"81832221","chunk-2d2370fa":"0f993664","chunk-5145996e":"cb7613bb"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5145996e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0b2366":"31d6cfe0","chunk-2d0b617a":"31d6cfe0","chunk-2d2080b6":"31d6cfe0","chunk-2d20825d":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-2d2370fa":"31d6cfe0","chunk-5145996e":"261bbaec"}[e]+".css",u=i.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var d=o[c],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===u))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],s=d.getAttribute("data-href");if(s===a||s===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var a=u[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=u[e]=[t,n]});t.push(a[2]=o);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e),d=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=u[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}u[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"51d1":function(e,t,n){"use strict";var a=n("e086"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("96cf");var a=n("3b8d"),r=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c={name:"app",components:{}},i=c,d=n("2877"),s=Object(d["a"])(i,u,o,!1,null,null,null),l=s.exports,f=n("2427"),h=n.n(f),p=n("8c4f"),b=n("591a");r["a"].use(b["a"]);var m=new b["a"].Store({state:{author:"jin",name:"ming",age:24},mutations:{setAuthor:function(e){e.author="chen"}},getters:{getdata:function(e){return e.author}}}),v=m,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("keep-alive",{attrs:{max:10}},[n("router-view")],1),n("van-tabbar",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabbarItem,function(t,a){return n("van-tabbar-item",{key:a,attrs:{route:!0,icon:"home-o"},domProps:{textContent:e._s(t.title)},on:{click:function(n){return e.add(t.url)}}})}),1)],1)},k=[],y={data:function(){return{active:0,tabbarItem:[{title:"首页",url:"home"},{title:"发现",url:"order"},{title:"订单",url:"dingdan"},{title:"我的",url:"mine"}]}},methods:{add:function(e){this.$router.push(e)}}},w=y,x=(n("51d1"),Object(d["a"])(w,g,k,!1,null,null,null)),_=x.exports,j=(n("6894"),n("e11d")),O=(n("615f"),n("92e2")),E=(n("5246"),n("6b41")),P=(n("2994"),n("2bdd")),S=(n("c194"),n("7744")),T=(n("0653"),n("34e9")),A=(n("be7f"),n("565f")),C=(n("9cb7"),n("66fd")),N=(n("7844"),n("5596")),$=(n("4b0a"),n("2bb1")),L=(n("537a"),n("ac28")),M=(n("a52c"),n("2ed4")),q=(n("09d3"),n("2d6d")),B=(n("61ae"),n("d314")),I=(n("5852"),n("d961")),D=(n("3df5"),n("2830")),J=(n("0ec5"),n("21ab")),R=(n("2b28"),n("9ed2")),F=function(){r["a"].use(R["a"]),r["a"].use(D["a"]).use(J["a"]),r["a"].use(I["a"]),r["a"].use(q["a"]).use(B["a"]),r["a"].use(L["a"]).use(M["a"]),r["a"].use(N["a"]).use($["a"]),r["a"].use(C["a"]),r["a"].use(A["a"]),r["a"].use(S["a"]).use(T["a"]),r["a"].use(P["a"]),r["a"].use(E["a"]),r["a"].use(j["a"]).use(O["a"])};r["a"].use(p["a"]);var H=function(){return n.e("chunk-2d217a99").then(n.bind(null,"c84b"))},K=function(){return n.e("chunk-5145996e").then(n.bind(null,"7a44"))},U=function(){return n.e("chunk-2d2080b6").then(n.bind(null,"a2b1"))},z=function(){return n.e("chunk-2d20825d").then(n.bind(null,"a40d"))},G=function(){return n.e("chunk-2d2370fa").then(n.bind(null,"fa09"))},Q=function(){return n.e("chunk-2d0b617a").then(n.bind(null,"1c4f"))},V=function(){return n.e("chunk-2d0b2366").then(n.bind(null,"22c3"))},W=[{name:"detail",path:"/detail",component:H},{name:"adr",path:"/adr",component:V},{name:"sign",path:"/sign",component:Q},{name:"tabbar",path:"/tabbar",component:_,children:[{name:"home",path:"/tabbar/home",component:K},{name:"order",path:"/tabbar/order",component:U},{name:"dingdan",path:"/tabbar/dingdan",component:z},{name:"mine",path:"/tabbar/mine",component:G}]},{name:"home",path:"/",redirect:"/tabbar/home"}],X=new p["a"]({routes:W});X.beforeEach(function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,n,a){var r,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/login",{params:{token:"qwe123"}});case 2:r=e.sent,u=r.data.data.status,u||"/sign"===t.path||"/tabbar/home"===t.path||"/detail"===t.path||"/adr"===t.path||"/tabbar/order"===t.path?a():X.push({name:"sign"});case 5:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}()),r["a"].prototype.$axios=h.a,F(),r["a"].config.productionTip=!1,new r["a"]({store:v,router:X,render:function(e){return e(l)}}).$mount("#app")},e086:function(e,t,n){}});
//# sourceMappingURL=app.eebadc46.js.map