(function(e){function n(n){for(var o,u,i=n[0],a=n[1],l=n[2],f=0,p=[];f<i.length;f++)u=i[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(n);while(p.length)p.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,i=1;i<t.length;i++){var a=t[i];0!==r[a]&&(o=!1)}o&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={app:0},c=[];function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/quiz/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var s=a;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23"),r={id:"nav"},c=Object(o["f"])("Home"),u=Object(o["f"])(" | "),i=Object(o["f"])("About");function a(e,n){var t=Object(o["t"])("router-link"),a=Object(o["t"])("router-view");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",r,[Object(o["g"])(t,{to:"/"},{default:Object(o["x"])((function(){return[c]})),_:1}),u,Object(o["g"])(t,{to:"/about"},{default:Object(o["x"])((function(){return[i]})),_:1})]),Object(o["g"])(a)],64)}t("d400");var l=t("6b0d"),s=t.n(l);const f={},p=s()(f,[["render",a]]);var b=p,d=t("9483");Object(d["a"])("".concat("/quiz/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g=t("6c02"),v=t("cf05"),O=t.n(v),j={class:"home"},h=Object(o["e"])("img",{alt:"Vue logo",src:O.a},null,-1),m=Object(o["e"])("h1",null,"Home page",-1),y=[h,m];function w(e,n,t,r,c,u){return Object(o["p"])(),Object(o["d"])("div",j,y)}var k={name:"Home",components:{}};const x=s()(k,[["render",w]]);var _=x,P={class:"about"},S=Object(o["e"])("h1",null,"This is an about page",-1),A=[S];function q(e,n){return Object(o["p"])(),Object(o["d"])("div",P,A)}const H={},M=s()(H,[["render",q]]);var z=M,N=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:z}],T=Object(g["a"])({history:Object(g["b"])("/quiz/"),routes:N}),F=T;Object(o["c"])(b).use(F).mount("#app")},c810:function(e,n,t){},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"},d400:function(e,n,t){"use strict";t("c810")}});
//# sourceMappingURL=app.105993d3.js.map