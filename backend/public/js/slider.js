!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLocale=t.register=void 0;var n="second_minute_hour_day_week_month_year".split("_"),i="秒_分钟_小时_天_周_个月_年".split("_"),o=function(e,t){if(0===t)return["just now","right now"];var r=n[parseInt(t/2)];return e>1&&(r+="s"),["".concat(e," ").concat(r," ago"),"in ".concat(e," ").concat(r)]},a={en_US:o,zh_CN:function(e,t){if(0===t)return["刚刚","片刻后"];var r=i[parseInt(t/2)];return["".concat(e," ").concat(r,"前"),"".concat(e," ").concat(r,"后")]}};t.register=function(e,t){a[e]=t};t.getLocale=function(e){return a[e]||o}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nextInterval=t.diffSec=t.formatDiff=t.toDate=t.toInt=void 0;var n=[60,60,24,7,365/7/12,12],i=function(e){return parseInt(e)};t.toInt=i;var o=function(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(i(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e))};t.toDate=o;t.formatDiff=function(e,t){for(var r=0,o=e<0?1:0,a=e=Math.abs(e);e>=n[r]&&r<n.length;r++)e/=n[r];return(e=i(e))>(0===(r*=2)?9:1)&&(r+=1),t(e,r,a)[o].replace("%s",e)};t.diffSec=function(e,t){return((t=t?o(t):new Date)-o(e))/1e3};t.nextInterval=function(e){for(var t=1,r=0,i=Math.abs(e);e>=n[r]&&r<n.length;r++)e/=n[r],t*=n[r];return i=(i%=t)?t-i:t,Math.ceil(i)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"format",{enumerable:!0,get:function(){return n.format}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return i.render}}),Object.defineProperty(t,"cancel",{enumerable:!0,get:function(){return i.cancel}}),Object.defineProperty(t,"register",{enumerable:!0,get:function(){return o.register}}),t.version=void 0;var n=r(4),i=r(5),o=r(0);t.version="4.0.0-beta.2"},function(e,t,r){},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=void 0;var n=r(1),i=r(0);t.format=function(e,t,r){var o=(0,n.diffSec)(e,r);return(0,n.formatDiff)(o,(0,i.getLocale)(t))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.cancel=void 0;var n=r(6),i=r(1),o=r(0),a={},c=function(e){clearTimeout(e),delete a[e]},d=function e(t,r,o,d){c((0,n.getTimerId)(t));var s=(0,i.diffSec)(r,d);t.innerHTML=(0,i.formatDiff)(s,o);var l=setTimeout((function(){e(t,r,o,d)}),1e3*(0,i.nextInterval)(s),2147483647);a[l]=0,(0,n.saveTimerId)(t,l)};t.cancel=function(e){if(e)c((0,n.getTimerId)(e));else for(var t in a)c(t)};t.render=function(e,t,r){var i;void 0===e.length&&(e=[e]);for(var a=0;a<e.length;a++){i=e[a];var c=(0,n.getDateAttribute)(i),s=(0,o.getLocale)(t);d(i,c,s,r)}return e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimerId=t.saveTimerId=t.getDateAttribute=void 0;var n=function(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0};t.getDateAttribute=function(e){return n(e,"datetime")};t.saveTimerId=function(e,t){return e.setAttribute?e.setAttribute("timeago-tid",t):e.attr?e.attr("timeago-tid",t):void 0};t.getTimerId=function(e){return n(e,"timeago-tid")}},,function(e,t,r){"use strict";r.r(t);r(3);var n=class{constructor(e,t){this.nombre=e,this.descripcion=t}};var i=class{constructor(){this.URI="http://localhost:4000/api/v2/slider"}async getSliders(){const e=await fetch(this.URI);return await e.json()}async postSlider(e){const t=await fetch(this.URI,{method:"POST",body:e});await t.json()}async deleteSlider(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"Delete"}),r=await t.json();console.log(r)}},o=r(2);const a=new i;var c=class{async renderSliders(){const e=await a.getSliders(),t=document.getElementById("sliders-cards");t.innerHTML="",e.forEach(e=>{const r=document.createElement("div");r.className="animated fadeInRight",r.innerHTML=`\n      <div class="card m-2">\n        <div class="row no-gutters">\n            <div class="col-md-4">\n                <img src="http://localhost:4000${e.image}" class="img-fluid" alt="">\n            </div>\n            <div class="col-md-8">\n                <div class="card-block px-2">\n                    <h4 class="card-title">${e.nombre}</h4>\n                    <p class="card-text">${e.descripcion}</p>\n                    <a href="#" class="btn btn-danger delete" _id="${e._id}">X</a>\n                </div>\n            </div>\n        </div>\n        <div class="card-footer w-100 text-muted">\n          ${Object(o.format)(e.created_at)}\n        </div>\n      </div>\n      `,t.appendChild(r)})}async addANewSlider(e){await a.postSlider(e),this.renderSliders(),this.clearSliderForm()}clearSliderForm(){document.getElementById("slider-form").reset(),document.getElementById("nombre").focus()}renderMessage(e,t,r){const n=document.createElement("div");n.className="message "+t,n.appendChild(document.createTextNode(e));const i=document.querySelector(".col-md-4"),o=document.querySelector("#slider-form");i.insertBefore(n,o),setTimeout(()=>{document.querySelector(".message").remove()},r)}async deleteSlider(e){await a.deleteSlider(e),this.renderSliders()}};document.addEventListener("DOMContentLoaded",()=>{(new c).renderSliders()}),document.getElementById("slider-form").addEventListener("submit",(function(e){const t=document.getElementById("nombre").value,r=document.getElementById("descripcion").value,i=document.getElementById("image").files,o=new FormData;o.append("image",i[0]),o.append("nombre",t),o.append("descripcion",r);const a=new c;new n(t,r);""===t||""===r?a.renderMessage("Please fill all the fields","error",3e3):(a.addANewSlider(o),a.renderMessage("New slider Added Successfully","success",2e3)),e.preventDefault()})),document.getElementById("sliders-cards").addEventListener("click",e=>{const t=new c;e.target.classList.contains("delete")&&(t.deleteSlider(e.target.getAttribute("_id")),t.renderMessage("slider Deleted Successfully","success",3e3)),e.preventDefault()})}]);
//# sourceMappingURL=slider.js.map