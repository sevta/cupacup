parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"E7QG":[function(require,module,exports) {
"use strict";function e(){return require("_bundle_loader")(require.resolve("./Index.scss")).then(function(){return Vue.component("button-p",{render:function(e){return e("button",{class:"bg-teal text-white rounded py-2 px-4"},["hellow im button"])}})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{"_bundle_loader":"9Jz3","./Index.scss":[["Index.64c0d98b.css","WOFE"],"WOFE"]}],"vy/G":[function(require,module,exports) {

},{}],"t7SN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=n;var e=o(require("../../components/Navbar")),t=o(require("../../components/Button"));function o(e){return e&&e.__esModule?e:{default:e}}function n(){console.log("About is about"),new Vue({el:"#about",components:{"navbar-a":e.default,"button-a":t.default},methods:{open:function(){alert("open")}},data:function(){return{title:"about"}}})}require("./Index.scss");
},{"../../components/Navbar":"FyoV","../../components/Button":"E7QG","./Index.scss":"vy/G"}],"7tNZ":[function(require,module,exports) {
var t=null;function r(){return t||(t=e()),t}function e(){try{throw new Error}catch(r){var t=(""+r.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return n(t[0])}return"/"}function n(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^\/]+$/,"$1")+"/"}exports.getBundleURL=r,exports.getBaseURL=n;
},{}],"9Jz3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"7tNZ"}],"K80p":[function(require,module,exports) {
module.exports=function(e){return new Promise(function(n,o){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onerror=function(e){r.onerror=r.onload=null,o(e)},r.onload=function(){r.onerror=r.onload=null,n()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("9Jz3");b.register("css",require("K80p"));b.load([]).then(function(){require("t7SN");});
},{}]},{},[0], null)
//# sourceMappingURL=js/About.f1759c73.map