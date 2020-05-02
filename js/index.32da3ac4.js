(function(t){function e(e){for(var i,o,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={index:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("0e00")},"036a":function(t,e,n){"use strict";var i=n("97fd"),r=n.n(i);r.a},"0e00":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdui-text-center",attrs:{id:"app"}},[t._m(0),n("vue-flex-waterfall",{staticClass:"mdui-container mdui-m-b-4",attrs:{col:4,"col-spacing":15,"break-at":t.breakAt},on:{"order-update":t.onOrderUpdate}},[t._l(t.items,(function(e,i){return n("div",{key:e.i,staticClass:"item",style:{height:e.h+"px"}},[n("i",{staticClass:"mdui-icon material-icons close",on:{click:function(e){return t.deleteItem(i)}}},[t._v("close")]),n("div",{staticClass:"num"},[t._v(t._s(e.i))]),n("div",{staticClass:"width mdui-m-t-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.h,expression:"item.h"}],staticClass:"mdui-text-center mdui-text-color-white width-input",attrs:{type:"number",min:"100",placeholder:"Width (px)"},domProps:{value:e.h},on:{input:function(n){n.target.composing||t.$set(e,"h",n.target.value)}}}),t._v(" px ")])])})),n("div",{staticClass:"item new",on:{click:function(e){return t.items.push({i:t.nextI++,h:200})}}},[n("div",{staticClass:"num"},[t._v("+")])])],2)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mdui-m-y-4"},[n("div",{staticClass:"mdui-typo-display-2"},[t._v("Vue Flex Waterfall Demo")]),n("div",{staticClass:"mdui-typo mdui-m-t-1"},[t._v(" GitHub: "),n("a",{attrs:{href:"https://github.com/Tsuk1ko/vue-flex-waterfall",target:"_blank"}},[t._v("Tsuk1ko/vue-flex-waterfall")])]),n("p",{staticClass:"mdui-typo-subheading"},[t._v("Try to add, delete or modify some blocks, and resize the window!")])])}],o=(n("d81d"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"vue-flex-waterfall",style:{height:t.validContainerHeight}},[t._t("default"),t._l(t.validCol-1,(function(e){return n("div",{key:"split-"+e,staticClass:"vue-flex-waterfall-split",style:{order:e,width:t.validColSpacing}})}))],2)}),s=[],u=(n("cb29"),n("7db0"),n("4160"),n("c975"),n("a9e3"),n("4fad"),n("159b"),n("2909")),c=n("3835"),l={name:"VueFlexWaterfall",props:{col:{type:Number,default:1},colSpacing:{type:[Number,String],default:0},breakAt:{type:Object,default:function(){return{}}},breakByContainer:{type:Boolean,default:!1}},data:function(){return{containerHeight:0,orders:[],winWidth:0,observer:new MutationObserver(this.updateOrder)}},watch:{validCol:function(){this.updateOrder()},validSortedBreakAt:{handler:function(){this.updateOrder()},deep:!0}},computed:{validCol:function(){var t=this,e=this.col<1?1:this.col,n=this.validSortedBreakAt.find((function(e){var n=Object(c["a"])(e,1),i=n[0];return t.winWidth&&t.winWidth<=i}));return Math.floor(n?n[1]:e)},validColSpacing:function(){var t=this.colSpacing;return"number"===typeof t?"".concat(t,"px"):t},validContainerHeight:function(){return this.containerHeight>0?"".concat(this.containerHeight,"px"):""},validSortedBreakAt:function(){var t=[];return Object.entries(this.breakAt).forEach((function(e){var n=Object(c["a"])(e,2),i=n[0],r=n[1],a=[parseInt(i)||0,parseInt(r)||0];Math.min.apply(Math,a)>0&&t.push(a)})),t.sort((function(t,e){var n=Object(c["a"])(t,1),i=n[0],r=Object(c["a"])(e,1),a=r[0];return i-a}))}},methods:{items:function(){return(this.$slots.default||[]).map((function(t){var e=t.elm,n=window.getComputedStyle(e),i=n.marginTop,r=n.marginBottom,a=e.getBoundingClientRect().height+parseFloat(i)+parseFloat(r);return{elm:e,ph:a}}))},updateOrder:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.stopObserve(),this.containerHeight=0;var n=Array(this.validCol).fill(0),i=this.items();i.forEach((function(t){var e=t.elm,i=t.ph,r=n.indexOf(Math.min.apply(Math,Object(u["a"])(n)));e.style.order=r+1,n[r]+=i})),this.containerHeight=Math.max.apply(Math,Object(u["a"])(n)),this.$nextTick((function(){t.startObserve(),e&&t.$emit("order-update")}))},updateWidth:function(){this.winWidth=this.breakByContainer?this.$refs.container.clientWidth:window.innerWidth},startObserve:function(){this.observer.observe(this.$refs.container,{attributes:!0,childList:!0,subtree:!0})},stopObserve:function(){this.observer&&this.observer.disconnect()}},created:function(){window.addEventListener("resize",this.updateWidth)},mounted:function(){this.updateOrder(!1)},beforeDestroy:function(){this.stopObserve(),window.removeEventListener("resize",this.updateWidth)}},d=l,p=(n("3542"),n("2877")),f=Object(p["a"])(d,o,s,!1,null,"7013ccca",null),h=f.exports,v={name:"App",components:{VueFlexWaterfall:h},data:function(){return{items:[300,250,200,150,300,200,250,260,200,150,265,205,150,150].map((function(t,e){return{i:e+1,h:t}})),nextI:15,breakAt:{900:3,600:2,300:1}}},methods:{deleteItem:function(t){this.items.splice(t,1)},onOrderUpdate:function(){console.log("order updated")}}},m=v,b=(n("036a"),Object(p["a"])(m,r,a,!1,null,null,null)),y=b.exports;i["a"].config.productionTip=!1,i["a"].config.devtools=!0,new i["a"]({render:function(t){return t(y)}}).$mount("#app")},3542:function(t,e,n){"use strict";var i=n("73a4"),r=n.n(i);r.a},"73a4":function(t,e,n){},"97fd":function(t,e,n){}});
//# sourceMappingURL=index.32da3ac4.js.map