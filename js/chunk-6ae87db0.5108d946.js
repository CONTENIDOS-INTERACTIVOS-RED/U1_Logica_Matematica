(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae87db0"],{"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var u=n[c],f=u&&u.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(s){f.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"51eb":function(t,e,r){"use strict";var n=r("825a"),o=r("c04e");t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return o(n(this),"number"!==t)}},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0");function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r("8172"),r("efec"),r("a9e3");function o(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function i(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)}function a(t,e,r){return e=i(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(a,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},8172:function(t,e,r){var n=r("746f");n("toPrimitive")},a0e0:function(t,e,r){"use strict";var n=r("5530");r("d81d"),r("7db0"),r("d3b7"),r("4de4"),r("ac1f"),r("5319");e["a"]={data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10))}},methods:{dialogoMerge:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.dialogo?t.dialogo.map((function(o,i){return Object(n["a"])(Object(n["a"])({},o),{},{id:e.uid+i+1,textoIng:r?e.splitPhrase(o.textoIng):o.textoIng,textoEsp:r?e.splitPhrase(o.textoEsp):o.textoEsp,personaje:t.personajes&&t.personajes.find((function(t){return t.nombre===o.personaje}))})})):[]},splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},a9e3:function(t,e,r){"use strict";var n=r("83ab"),o=r("da84"),i=r("94ca"),a=r("6eeb"),c=r("5135"),u=r("c6b6"),f=r("7156"),s=r("c04e"),p=r("d039"),l=r("7c73"),b=r("241c").f,d=r("06cf").f,g=r("9bf2").f,h=r("58a8").trim,v="Number",y=o[v],m=y.prototype,O=u(l(m))==v,E=function(t){var e,r,n,o,i,a,c,u,f=s(t,!1);if("string"==typeof f&&f.length>2)if(f=h(f),e=f.charCodeAt(0),43===e||45===e){if(r=f.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(i=f.slice(2),a=i.length,c=0;c<a;c++)if(u=i.charCodeAt(c),u<48||u>o)return NaN;return parseInt(i,n)}return+f};if(i(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var j,I=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof I&&(O?p((function(){m.valueOf.call(r)})):u(r)!=v)?f(new y(E(e)),r,I):E(e)},_=n?b(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;_.length>w;w++)c(y,j=_[w])&&!c(I,j)&&g(I,j,d(y,j));I.prototype=m,m.constructor=I,a(o,v,I)}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),c=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=c.f,f=i(n),s={},p=0;while(f.length>p)r=o(n,e=f[p++]),void 0!==r&&u(s,e,r);return s}})},e15e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dialogo__chat dialogo__chat--no-scroll p-4 me-0"},t._l(t.dialogoComputed,(function(t){return r("DialogoBurbuja",{key:"dialogo-item-"+t.id,staticClass:"mb-3",attrs:{dialogoItem:t}})})),1)},o=[],i=r("a0e0"),a={name:"Dialogo",mixins:[i["a"]],props:{dialogo:{type:Object,default:function(){return{}}}},computed:{dialogoComputed:function(){return this.dialogoMerge(this.dialogo)}}},c=a,u=r("2877"),f=Object(u["a"])(c,n,o,!1,null,null,null);e["default"]=f.exports},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,c=r("83ab"),u=o((function(){a(1)})),f=!c||u;n({target:"Object",stat:!0,forced:f,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},efec:function(t,e,r){var n=r("9112"),o=r("51eb"),i=r("b622"),a=i("toPrimitive"),c=Date.prototype;a in c||n(c,a,o)}}]);
//# sourceMappingURL=chunk-6ae87db0.5108d946.js.map