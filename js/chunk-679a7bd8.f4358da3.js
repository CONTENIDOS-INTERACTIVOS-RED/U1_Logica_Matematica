(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-679a7bd8"],{"01f0":function(A,t,e){A.exports=e.p+"media/end-game-fail.8344f3d3.mp3"},"159b":function(A,t,e){var r=e("da84"),a=e("fdbc"),n=e("17c2"),s=e("9112");for(var q in a){var i=r[q],o=i&&i.prototype;if(o&&o.forEach!==n)try{s(o,"forEach",n)}catch(c){o.forEach=n}}},"17c2":function(A,t,e){"use strict";var r=e("b727").forEach,a=e("a640"),n=a("forEach");A.exports=n?[].forEach:function(A){return r(this,A,arguments.length>1?arguments[1]:void 0)}},4139:function(A,t,e){"use strict";e("7693")},"4d7d":function(A,t,e){"use strict";e("a0ba")},"51eb":function(A,t,e){"use strict";var r=e("825a"),a=e("c04e");A.exports=function(A){if("string"!==A&&"number"!==A&&"default"!==A)throw TypeError("Incorrect hint");return a(r(this),"number"!==A)}},5530:function(A,t,e){"use strict";e.d(t,"a",(function(){return i}));e("b64b"),e("a4d3"),e("4de4"),e("d3b7"),e("e439"),e("159b"),e("dbb4"),e("e01a"),e("d28b"),e("3ca3"),e("ddb0");function r(A){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},r(A)}e("8172"),e("efec"),e("a9e3");function a(A,t){if("object"!==r(A)||null===A)return A;var e=A[Symbol.toPrimitive];if(void 0!==e){var a=e.call(A,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(A)}function n(A){var t=a(A,"string");return"symbol"===r(t)?t:String(t)}function s(A,t,e){return t=n(t),t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function q(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,r)}return e}function i(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?q(Object(e),!0).forEach((function(t){s(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):q(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}},5899:function(A,t){A.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(A,t,e){var r=e("1d80"),a=e("5899"),n="["+a+"]",s=RegExp("^"+n+n+"*"),q=RegExp(n+n+"*$"),i=function(A){return function(t){var e=String(r(t));return 1&A&&(e=e.replace(s,"")),2&A&&(e=e.replace(q,"")),e}};A.exports={start:i(1),end:i(2),trim:i(3)}},7001:function(A,t,e){"use strict";e("c65f")},7156:function(A,t,e){var r=e("861d"),a=e("d2bb");A.exports=function(A,t,e){var n,s;return a&&"function"==typeof(n=t.constructor)&&n!==e&&r(s=n.prototype)&&s!==e.prototype&&a(A,s),A}},"71bb":function(A,t,e){"use strict";e("bd8b")},7693:function(A,t,e){},8172:function(A,t,e){var r=e("746f");r("toPrimitive")},"884b":function(A,t,e){A.exports=e.p+"media/success.7ee5a5c2.mp3"},"8cc8":function(A,t,e){A.exports=e.p+"media/fail.a3e9634d.mp3"},a0ba:function(A,t,e){},a46c:function(A,t,e){A.exports=e.p+"img/cuestionario-resultado.a5584db8.svg"},a9e3:function(A,t,e){"use strict";var r=e("83ab"),a=e("da84"),n=e("94ca"),s=e("6eeb"),q=e("5135"),i=e("c6b6"),o=e("7156"),c=e("c04e"),u=e("d039"),l=e("7c73"),p=e("241c").f,d=e("06cf").f,f=e("9bf2").f,b=e("58a8").trim,g="Number",h=a[g],m=h.prototype,v=i(l(m))==g,C=function(A){var t,e,r,a,n,s,q,i,o=c(A,!1);if("string"==typeof o&&o.length>2)if(o=b(o),t=o.charCodeAt(0),43===t||45===t){if(e=o.charCodeAt(2),88===e||120===e)return NaN}else if(48===t){switch(o.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+o}for(n=o.slice(2),s=n.length,q=0;q<s;q++)if(i=n.charCodeAt(q),i<48||i>a)return NaN;return parseInt(n,r)}return+o};if(n(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var y,E=function(A){var t=arguments.length<1?0:A,e=this;return e instanceof E&&(v?u((function(){m.valueOf.call(e)})):i(e)!=g)?o(new h(C(t)),e,E):C(t)},S=r?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;S.length>j;j++)q(h,y=S[j])&&!q(E,y)&&f(E,y,d(h,y));E.prototype=m,m.constructor=E,s(a,g,E)}},b64b:function(A,t,e){var r=e("23e7"),a=e("7b0b"),n=e("df75"),s=e("d039"),q=s((function(){n(1)}));r({target:"Object",stat:!0,forced:q},{keys:function(A){return n(a(A))}})},bd8b:function(A,t,e){},c65f:function(A,t,e){},c740:function(A,t,e){"use strict";var r=e("23e7"),a=e("b727").findIndex,n=e("44d2"),s="findIndex",q=!0;s in[]&&Array(1)[s]((function(){q=!1})),r({target:"Array",proto:!0,forced:q},{findIndex:function(A){return a(this,A,arguments.length>1?arguments[1]:void 0)}}),n(s)},d7b0:function(A,t){A.exports="data:audio/mpeg;base64,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"},dbb4:function(A,t,e){var r=e("23e7"),a=e("83ab"),n=e("56ef"),s=e("fc6a"),q=e("06cf"),i=e("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(A){var t,e,r=s(A),a=q.f,o=n(r),c={},u=0;while(o.length>u)e=a(r,t=o[u++]),void 0!==e&&i(c,t,e);return c}})},e439:function(A,t,e){var r=e("23e7"),a=e("d039"),n=e("fc6a"),s=e("06cf").f,q=e("83ab"),i=a((function(){s(1)})),o=!q||i;r({target:"Object",stat:!0,forced:o,sham:!q},{getOwnPropertyDescriptor:function(A,t){return s(n(A),t)}})},efec:function(A,t,e){var r=e("9112"),a=e("51eb"),n=e("b622"),s=n("toPrimitive"),q=Date.prototype;s in q||r(q,s,a)},f31f:function(A,t,e){"use strict";e.r(t);var r=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"tarjeta--blanca"},[e("div",{staticClass:"row align-items-center mb-4"},[e("div",{staticClass:"col "},[e("h2",{staticClass:"titulo-tercero mb-0"},[A._v(" "+A._s(A.cuestionario.titulo)+" ")])])]),e("div",{staticClass:"tarjeta tarjeta--lightest-gray px-4 pb-4 pt-4 px-md-5"},[A.respuestas.length!==A.preguntas.length?e("div",{staticClass:"d-flex justify-content-end mb-2"},[e("div",{staticClass:"form-check form-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:A.audioEnabled,expression:"audioEnabled"}],staticClass:"form-check-input",attrs:{id:"switchCheckAudio",type:"checkbox"},domProps:{checked:Array.isArray(A.audioEnabled)?A._i(A.audioEnabled,null)>-1:A.audioEnabled},on:{change:function(t){var e=A.audioEnabled,r=t.target,a=!!r.checked;if(Array.isArray(e)){var n=null,s=A._i(e,n);r.checked?s<0&&(A.audioEnabled=e.concat([n])):s>-1&&(A.audioEnabled=e.slice(0,s).concat(e.slice(s+1)))}else A.audioEnabled=a}}}),e("label",{staticClass:"form-check-label",attrs:{for:"switchCheckAudio"}},[A._v("¿Audio?")])])]):A._e(),A.respuestas.length===A.preguntas.length?e("ActividadResultados",{attrs:{respuestas:A.respuestas,"mensaje-aprobado":A.cuestionario.mensaje_final_aprobado,"mensaje-reprobado":A.cuestionario.mensaje_final_reprobado,"porcentaje-aprobadas":A.porcentajeAprobadas,"preguntas-count":A.preguntas.length,"total-preguntas-base":A.cuestionario.preguntas.length},on:{reiniciar:A.onReiniciar}}):e("ActividadPregunta",{attrs:{pregunta:A.preguntaSelected,"numero-pregunta":A.preguntaSelectedIdx+1},on:{respuestaSelected:A.onRrespuestaSelected}})],1),e("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":A.preguntaSelectedIdx,"preguntas-count":A.preguntas.length,"respuestas-length":A.respuestas.length,"continuar-disabled":A.continuarDisabled,respuestas:A.respuestas},on:{continuar:A.onContinuar,reiniciar:A.onReiniciar}})],1)},a=[],n=e("5530"),s=(e("fb6a"),e("d81d"),e("4de4"),e("d3b7"),e("c740"),e("d7b0")),q=e.n(s),i=e("884b"),o=e.n(i),c=e("8cc8"),u=e.n(c),l=e("fe00"),p=e.n(l),d=e("01f0"),f=e.n(d),b=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("h3",{staticClass:"mb-4 pb-4"},[e("strong",[A._v(A._s(A.numeroPregunta)+". "),e("span",{domProps:{innerHTML:A._s(A.pregunta.texto)}})])]),e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col"},A._l(A.opcionesComputed,(function(t,r){return e("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":r!==A.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(e){return A.onRespuestaSelected(t)}}},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"tarjeta-respuesta__icon",class:[A.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),e("div",{staticClass:"col",domProps:{innerHTML:A._s(t.texto)}})])])})),0)]),A.respuestaSelected.id?[e("hr"),A.respuestaSelected.esCorrecta?e("div",{staticClass:"pt-1"},[e("span",{staticClass:"text-success h3 ma-0"},[A._v("¡Correcto!")]),A._v(" "+A._s(A.pregunta.mensaje_correcto)+" ")]):e("div",{staticClass:"pt-1"},[e("span",{staticClass:"text-danger h3 ma-0"},[A._v("¡Incorrecto!")]),A._v(" "+A._s(A.pregunta.mensaje_incorrecto)+" ")])]:A._e()],2)},g=[],h=(e("a9e3"),{name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0},numeroPregunta:{type:Number,required:!0}},data:function(){return{respuestaSelected:{}}},computed:{opcionesComputed:function(){if(!this.pregunta.opciones.length)return[];var A=this.respuestaSelected.id;return this.pregunta.opciones.map((function(t){return Object(n["a"])(Object(n["a"])({},t),{},{correcta:A===t.id&&t.esCorrecta,incorrecta:A===t.id&&!t.esCorrecta,disabled:!!A})}))}},watch:{pregunta:function(){this.respuestaSelected={}}},methods:{onRespuestaSelected:function(A){this.respuestaSelected=A,this.$emit("respuestaSelected",A.esCorrecta)}}}),m=h,v=(e("71bb"),e("2877")),C=Object(v["a"])(m,b,g,!1,null,"c95b2a88",null),y=C.exports,E=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"tarjeta-avance"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"d-none d-md-block col"},[e("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[e("div",{staticClass:"tarjeta-avance__barra",style:{width:A.avanceWidth}})])]),e("div",{staticClass:"col col-md-auto text-center"},[e("span",{staticClass:"lh-1"},[A._v(" Pregunta "+A._s(A.preguntaIndex+1)+" de "+A._s(A.preguntasCount)+" ")])]),e("div",{staticClass:"col-auto"},[A.respuestasLength===A.preguntasCount?e("div",{staticClass:"py-4"}):9===A.respuestasLength?e("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":A.continuarDisabled},on:{click:function(t){return A.$emit("continuar")}}},[e("span",[A._v("Verificar")]),e("i",{staticClass:"fas fa-arrow-right"})]):e("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":A.continuarDisabled},on:{click:function(t){return A.$emit("continuar")}}},[e("span",[A._v("Continuar")]),e("i",{staticClass:"fas fa-arrow-right"})])])])])},S=[],j=(e("159b"),{name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0},respuestas:{type:Array,required:!0}},computed:{avanceWidth:function(){return"".concat((this.preguntaIndex+1)/this.preguntasCount*100,"%")},rtas:function(){var A={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach((function(t){t.esCorrecta?A.correctas++:A.incorrectas++})),A.porcentaje=A.correctas/A.total*100,A}}}),w=j,x=(e("7001"),Object(v["a"])(w,E,S,!1,null,"90d7c5a6",null)),I=x.exports,B=function(){var A=this,t=A.$createElement,r=A._self._c||t;return r("div",{staticClass:"row align-items-center justify-content-around"},[r("div",{staticClass:"col-lg-5"},[(A.aprobado,r("img",{staticClass:"mx-auto d-none d-lg-block",attrs:{src:e("a46c"),alt:""}}))]),r("div",{staticClass:"col-lg-4"},[r("div",{staticClass:"d-flex align-items-center flex-column"},[r("div",{staticClass:"circle-container mb-4"},[r("svg",{staticClass:"circle",attrs:{viewBox:"0 0 36 36"}},[r("defs",[r("linearGradient",{attrs:{id:"progressGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"}},[r("stop",{attrs:{offset:"0%","stop-color":"#00FF00"}}),r("stop",{attrs:{offset:"50%","stop-color":"#FFFF00"}}),r("stop",{attrs:{offset:"100%","stop-color":"#FF0000"}})],1)],1),r("path",{staticClass:"circle-bg",attrs:{d:"M18 2.0845\n              a 15.9155 15.9155 0 0 1 0 31.831\n              a 15.9155 15.9155 0 0 1 0 -31.831"}}),r("path",{staticClass:"circle-progress",attrs:{"stroke-dasharray":A.currentPercentage+", 100",d:"M18 2.0845\n              a 15.9155 15.9155 0 0 1 0 31.831\n              a 15.9155 15.9155 0 0 1 0 -31.831"}})]),r("div",{staticClass:"percentage-text"},[A._v(" "+A._s(Math.round(A.porcentajeAprobadas))+"% ")])]),A.aprobado?[r("h3",[A._v("¡BUEN TRABAJO!")]),r("p",{staticClass:"mb-0 text-center"},[A._v(" "+A._s(A.mensajeAprobado)+" ")])]:[r("h3",[A._v("VUELVE A INTENTARLO")]),r("p",{staticClass:"mb-0 text-center"},[A._v(" "+A._s(A.mensajeReprobado)+" ")])],r("hr",{staticClass:"w-100"}),r("p",{staticClass:"mb-0"},[A._v("Aciertos: "+A._s(A.rtas.correctas)+" / "+A._s(A.rtas.total))]),!A.aprobado||A.aprobado&&A.totalPreguntasBase>A.preguntasCount?r("button",{staticClass:"boton btn-lg boton--b py-3 px-5 mt-3",on:{click:function(t){return A.$emit("reiniciar")}}},[r("span",[A._v("Volver a intentarlo")])]):A._e()],2)])])},P=[],N={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0},mensajeAprobado:{type:String,default:"¡Excelente! Ha superado la actividad."},mensajeReprobado:{type:String,default:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."},porcentajeAprobadas:{type:Number,required:!0},totalPreguntasBase:{type:Number,required:!0},preguntasCount:{type:Number,required:!0}},data:function(){return{currentPercentage:0}},computed:{rtas:function(){var A={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach((function(t){t.esCorrecta?A.correctas++:A.incorrectas++})),A.porcentaje=A.correctas/A.total*100,A},aprobado:function(){return this.rtas.porcentaje>=70}},mounted:function(){this.animateProgress()},methods:{animateProgress:function(){var A=this,t=1500,e=performance.now(),r=function r(a){var n=(a-e)/t;n>1?A.currentPercentage=A.porcentajeAprobadas:(A.currentPercentage=n*A.porcentajeAprobadas,requestAnimationFrame(r))};requestAnimationFrame(r)}}},O=N,_=(e("4139"),Object(v["a"])(O,B,P,!1,null,"0e62e7a9",null)),k=_.exports,D={name:"Actividad",components:{ActividadPregunta:y,ActividadBarraAvance:I,ActividadResultados:k},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:function(){return{intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0,audioEnabled:!0,totalPreguntasOriginales:0}},computed:{preguntas:function(){var A=this,t=10,e=this.cuestionario.preguntas;if(!e)return[];var r=this.shuffle(e),a=r.length>=t?r.slice(0,t):r;return console.log("preguntasSeleccionadas",a,"preguntasBarajadas",r),a.map((function(t){return Object(n["a"])(Object(n["a"])({},t),{},{opciones:t.barajarRespuestas?A.shuffle(t.opciones):t.opciones,intentos:A.intentos})}))},preguntaSelected:function(){return this.preguntas[this.preguntaSelectedIdx]},porcentajeAprobadas:function(){if(0===this.respuestas.length)return 0;var A=this.respuestas.filter((function(A){return A.esCorrecta})).length;return Math.round(A/this.respuestas.length*100)}},methods:{shuffle:function(A){for(var t=A.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),r=[A[e],A[t]];A[t]=r[0],A[e]=r[1]}return A},onRrespuestaSelected:function(A){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:A},A?this.reproducirSonido(o.a):this.reproducirSonido(u.a)},onContinuar:function(){var A=this;if(this.continuarDisabled=!0,this.respuestaActual.id){var t=this.respuestas.findIndex((function(t){return t.id===A.preguntaSelected.id}));-1===t?this.respuestas.push(this.respuestaActual):this.respuestas[t]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1?(this.preguntaSelectedIdx+=1,this.reproducirSonido(q.a)):this.finalizarPrueba()},onReiniciar:function(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1,this.$emit("reiniciar")},reproducirSonido:function(A){if(this.audioEnabled){var t=new Audio(A);t.play()}},finalizarPrueba:function(){var A=this.preguntas.length,t=this.respuestas.filter((function(A){return A.esCorrecta})).length,e=t/A*100;e>=70?this.reproducirSonido(p.a):this.reproducirSonido(f.a)}}},F=D,M=(e("4d7d"),Object(v["a"])(F,r,a,!1,null,"6e283317",null));t["default"]=M.exports},fe00:function(A,t,e){A.exports=e.p+"media/end-game-success.3b2668a8.mp3"}}]);
//# sourceMappingURL=chunk-679a7bd8.f4358da3.js.map