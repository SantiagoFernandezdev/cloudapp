(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"02gw":function(t,e,n){"use strict";n.r(e),n.d(e,"createGesture",function(){return d}),n.d(e,"GESTURE_CONTROLLER",function(){return o}),n("gDZG");class i{constructor(t,e,n,i,r){this.id=e,this.name=n,this.disableScroll=r,this.priority=1e6*i+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class r{constructor(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const o=new class{constructor(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new i(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new r(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)}capture(t,e,n){if(!this.start(t,e,n))return!1;const i=this.requestedStart;let r=-1e4;if(i.forEach(t=>{r=Math.max(r,t)}),r===n){this.capturedId=e,i.clear();const n=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(n),!0}return i.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)}enableGesture(t,e){const n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add("backdrop-no-scroll")}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove("backdrop-no-scroll")}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}(document);function s(t,e,n,i){const r=function(t){if(void 0===a)try{const n=Object.defineProperty({},"passive",{get:()=>{a=!0}});t.addEventListener("optsTest",()=>{},n)}catch(e){a=!1}return!!a}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;let o,s;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",s="__zone_symbol__removeEventListener"):(o="addEventListener",s="removeEventListener"),t[o](e,n,r),()=>{t[s](e,n,r)}}let a;const c=2e3;function u(t){return t instanceof Document?t:t.ownerDocument}function d(t){const e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,i=e.onWillStart,r=e.onStart,a=e.onEnd,d=e.notCaptured,m=e.onMove,p=e.threshold,v=e.queue,b={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},g=function(t,e,n,i,r){let o,a,d,l,f,h,m,p=0;function v(i){p=Date.now()+c,e(i)&&(!a&&n&&(a=s(t,"touchmove",n,r)),d||(d=s(t,"touchend",g,r)),l||(l=s(t,"touchcancel",g,r)))}function b(i){p>Date.now()||e(i)&&(!h&&n&&(h=s(u(t),"mousemove",n,r)),m||(m=s(u(t),"mouseup",y,r)))}function g(t){w(),i&&i(t)}function y(t){S(),i&&i(t)}function w(){a&&a(),d&&d(),l&&l(),a=d=l=void 0}function S(){h&&h(),m&&m(),h=m=void 0}function E(){w(),S()}function D(e){e?(o&&o(),f&&f(),o=f=void 0,E()):(o||(o=s(t,"touchstart",v,r)),f||(f=s(t,"mousedown",b,r)))}return{setDisabled:D,stop:E,destroy:function(){D(!0),i=n=e=void 0}}}(e.el,function(t){const e=h(t);return!(E||!D)&&(f(t,b),b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp=e,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=t,(!n||!1!==n(b))&&(w.release(),!!w.start()&&(E=!0,0===p?I():(y.start(b.startX,b.startY),!0))))},function(t){S?!L&&D&&(L=!0,l(b,t),v.write(k)):(l(b,t),y.detect(b.currentX,b.currentY)&&(y.isGesture()&&I()||(C(),g.stop(),d&&d(b))))},X,{capture:!1}),y=function(t,n,i){const r=e.maxAngle*(Math.PI/180),o="x"===e.direction,s=Math.cos(r),a=n*n;let c=0,u=0,d=!1,l=0;return{start(t,e){c=t,u=e,l=0,d=!0},detect(t,e){if(!d)return!1;const n=t-c,i=e-u,r=n*n+i*i;if(r<a)return!1;const f=Math.sqrt(r),h=(o?n:i)/f;return l=h>s?1:h<-s?-1:0,d=!1,!0},isGesture:()=>0!==l,getDirection:()=>l}}(0,e.threshold),w=o.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll});let S=!1,E=!1,D=!0,L=!1;function k(){S&&(L=!1,m&&m(b))}function I(){return!(w&&!w.capture()||(S=!0,D=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp,i?i(b).then(G):G(),0))}function G(){r&&r(b),D=!0}function C(){S=!1,E=!1,L=!1,D=!0,w.release()}function X(t){const e=S,n=D;C(),n&&(l(b,t),e?a&&a(b):d&&d(b))}return{setDisabled(t){t&&S&&X(void 0),g.setDisabled(t)},destroy(){w.destroy(),g.destroy()}}}function l(t,e){if(!e)return;const n=t.currentX,i=t.currentY,r=t.timeStamp;f(e,t);const o=t.currentX,s=t.currentY,a=(t.timeStamp=h(e))-r;if(a>0&&a<100){const e=(s-i)/a;t.velocityX=(o-n)/a*.7+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=s-t.startY,t.event=e}function f(t,e){let n=0,i=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];n=t.clientX,i=t.clientY}else void 0!==t.pageX&&(n=t.pageX,i=t.pageY)}e.currentX=n,e.currentY=i}function h(t){return t.timeStamp||Date.now()}},"09OT":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("gDZG");const i=t=>{try{if("string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),i=document.createElement("div");n.appendChild(i),i.innerHTML=t,a.forEach(t=>{const e=n.querySelectorAll(t);for(let i=e.length-1;i>=0;i--){const t=e[i];t.parentNode?t.parentNode.removeChild(t):n.removeChild(t);const s=o(t);for(let e=0;e<s.length;e++)r(s[e])}});const s=o(n);for(let t=0;t<s.length;t++)r(s[t]);const c=document.createElement("div");c.appendChild(n);const u=c.querySelector("div");return null!==u?u.innerHTML:c.innerHTML}catch(e){return console.error(e),""}},r=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes[n],i=e.name;if(!s.includes(i.toLowerCase())){t.removeAttribute(i);continue}const r=e.value;null!=r&&r.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=o(t);for(let n=0;n<e.length;n++)r(e[n])},o=t=>null!=t.children?t.children:t.childNodes,s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},"4+L7":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("AytR"),r=n("2Vo4"),o=n("8Y7J"),s=n("IheW");class a{constructor(t){this.http=t,this.data=[],this.networkObservable=new r.a(!0)}restAuth(t,e,n){let r=i.a.cloudEndPoint+e+"/"+t+"?";return this.http.get(r=r+"login="+n.user+"&password="+n.password+"&lan=es")}restModule(t,e,n){let r=i.a.cloudEndPoint+e+"/"+t+"?";return this.http.get(r=r+"tkn="+n.token+"&key=FORMS&id="+n.id+"&f1="+n.f1+"&f2="+n.f2+"&f3="+n.f3+"&lan=es")}}a.ngInjectableDef=o.Q({factory:function(){return new a(o.U(s.c))},token:a,providedIn:"root"})},FEEj:function(t,e,n){"use strict";function i(t,e){return null!==e.closest(t)}function r(t){return"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0}function o(t){const e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[]}(t).forEach(t=>e[t]=!0),e}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return i}),n("gDZG");const s=/^[a-z][a-z0-9+\-.]*:/;async function a(t,e,n,i){if(null!=e&&"#"!==e[0]&&!s.test(e)){const r=t.document.querySelector("ion-router");if(r)return null!=n&&n.preventDefault(),await r.componentOnReady(),r.push(e,i)}return!1}},GPVI:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("gDZG");const i=(t,e)=>(t=>r(t))(t).includes(e),r=t=>{t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=o(t)).forEach(e=>t.document.documentElement.classList.add(`plt-${e}`)),e},o=t=>Object.keys(m).filter(e=>m[e](t)),s=t=>f(t,/iPad/i),a=t=>f(t,/android|sink/i),c=t=>h(t,"(any-pointer:coarse)"),u=t=>d(t)||l(t),d=t=>!!(t.cordova||t.phonegap||t.PhoneGap),l=t=>{const e=t.Capacitor;return!(!e||!e.isNative)},f=(t,e)=>!(!t.navigator||!t.navigator.userAgent)&&e.test(t.navigator.userAgent),h=(t,e)=>!!t.matchMedia&&t.matchMedia(e).matches,m={ipad:s,iphone:t=>f(t,/iPhone/i),ios:t=>f(t,/iPad|iPhone|iPod/i),android:a,phablet:t=>{const e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),r=Math.max(e,n);return i>390&&i<520&&r>620&&r<800},tablet:t=>{const e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),r=Math.max(e,n);return s(t)||(t=>a(t)&&!f(t,/mobile/i))(t)||i>460&&i<820&&r>780&&r<1400},cordova:d,capacitor:l,electron:t=>f(t,/electron/),pwa:t=>!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone),mobile:c,mobileweb:t=>c(t)&&!u(t),desktop:t=>!c(t),hybrid:u}},WDTR:function(t,e,n){"use strict";function i(){const t=window.TapticEngine;t&&t.selection()}function r(){const t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){const t=window.TapticEngine;t&&t.gestureSelectionChanged()}function s(){const t=window.TapticEngine;t&&t.gestureSelectionEnd()}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return i}),n("gDZG")},fSi6:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return f}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return l}),n.d(e,"f",function(){return r}),n.d(e,"g",function(){return o}),n.d(e,"h",function(){return s}),n("gDZG");let i=0;function r(t,e){const n=t.ownerDocument;!function(t){0===i&&(i=1,t.addEventListener("focusin",e=>{const n=s(t);if(n&&n.backdropDismiss&&!function(t,e){for(;e;){if(e===t)return!0;e=e.parentElement}return!1}(n,e.target)){const t=n.querySelector("input,button");t&&t.focus()}}),t.addEventListener("ionBackButton",e=>{const n=s(t);n&&n.backdropDismiss&&e.detail.register(100,()=>n.dismiss(void 0,h))}),t.addEventListener("keyup",e=>{if("Escape"===e.key){const e=s(t);e&&e.backdropDismiss&&e.dismiss(void 0,h)}}))}(n),Object.assign(t,e),t.classList.add("overlay-hidden");const r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id=`ion-overlay-${r}`),u(n).appendChild(t),t.componentOnReady()}function o(t,e,n,i,r){const o=s(t,i,r);return o?o.dismiss(e,n):Promise.reject("overlay does not exist")}function s(t,e,n){const i=function(t,e){const n=Array.from(u(t).children).filter(t=>t.overlayIndex>0);return void 0===e?n:(e=e.toUpperCase(),n.filter(t=>t.tagName===e))}(t,e);return void 0===n?i[i.length-1]:i.find(t=>t.id===n)}async function a(t,e,n,i,r){if(t.presented)return;t.presented=!0,t.willPresent.emit();const o=t.enterAnimation?t.enterAnimation:t.config.get(e,"ios"===t.mode?n:i);await d(t,o,t.el,r)&&t.didPresent.emit()}async function c(t,e,n,i,r,o,s){if(!t.presented)return!1;t.presented=!1;try{t.willDismiss.emit({data:e,role:n});const c=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?r:o);await d(t,c,t.el,s),t.didDismiss.emit({data:e,role:n})}catch(a){console.error(a)}return t.el.remove(),!0}function u(t){return t.querySelector("ion-app")||t.body}async function d(t,e,i,r){if(t.animation)return t.animation.destroy(),t.animation=void 0,!1;i.classList.remove("overlay-hidden");const o=i.shadowRoot||t.el,s=t.animation=await n.e(2).then(n.bind(null,"He+h")).then(t=>t.create(e,o,r));t.animation=s,t.animated&&t.config.getBoolean("animated",!0)||s.duration(0),t.keyboardClose&&s.beforeAddWrite(()=>{const t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),await s.playAsync();const a=s.hasCompleted;return s.destroy(),t.animation=void 0,a}function l(t,e){let n;const i=new Promise(t=>n=t);return function(t,e,i){const r=i=>{t.removeEventListener(e,r),(t=>{n(i.detail)})()};t.addEventListener(e,r)}(t,e),i}function f(t){return"cancel"===t||t===h}const h="backdrop"},mXPe:function(t,e,n){"use strict";async function i(t,e,n,i,r){if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o}function r(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n("gDZG")},pEuU:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("4+L7"),r=n("XNiG"),o=n("BsJ3"),s=n("8Y7J");class a{constructor(t,e){this.restful=t,this.SQLiteservice=e,this.forms=new r.a,this.formData=new r.a}Form_Load(t){return this.SQLiteservice.comprobarForm(t.Login).then(e=>{console.log(e),this.restful.restModule("GetModuleInfo","Mobile",t).subscribe(n=>{const i=JSON.parse(n.toString()),r=[];for(const o of i)if("False"===o.isDeleted||!1===o.isDeleted){const n={ID:o.ID,Name:o.Name,Guid:o.GUID,hasAsset:o.hasAsset,JSONQuestions:o.JSONQuestions,Login:t.Login,Description:o.Description};e?this.SQLiteservice.updateDataFrom(n):this.SQLiteservice.saveDataFrom(n),r.push(o)}this.forms.next(r)})}),this.forms}getForm(t){return this.SQLiteservice.getFormData(t).then(t=>{this.formData.next(t)}).catch(t=>{console.log(t)}),this.formData}}a.ngInjectableDef=s.Q({factory:function(){return new a(s.U(i.a),s.U(o.a))},token:a,providedIn:"root"})},pIOj:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return a}),n("gDZG");const i="ionViewWillEnter",r="ionViewDidEnter",o="ionViewWillLeave",s="ionViewDidLeave",a="ionViewWillUnload"},pyLi:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return l}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return m}),n("gDZG");var i=n("pIOj");const r=()=>n.e(55).then(n.bind(null,"Jy7L")),o=()=>n.e(56).then(n.bind(null,"frvz"));function s(t){return new Promise((e,i)=>{t.queue.write(()=>{!function(t){const e=t.enteringEl,n=t.leavingEl;(function(e,n,i){void 0!==e&&(e.style.zIndex="back"===t.direction?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(e,n),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),m(e,!1),n&&m(n,!1)}(t),async function(t){const e=await async function(t){if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await r()).iosTransitionAnimation:(await o()).mdTransitionAnimation}(t);return e?async function(t,e){await c(e,!0);const i=await n.e(2).then(n.bind(null,"He+h")).then(n=>n.create(t,e.baseEl,e));return u(e.enteringEl,e.leavingEl),await function(t,e){const n=e.progressCallback,i=new Promise(e=>t.onFinish(e));return n?(t.progressStart(),n(t)):t.play(),i}(i,e),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&d(e.enteringEl,e.leavingEl),{hasCompleted:i.hasCompleted,animation:i}}(e,t):async function(t){const e=t.enteringEl,n=t.leavingEl;return await c(t,!1),u(e,n),d(e,n),{hasCompleted:!0}}(t)}(t).then(n=>{n.animation&&n.animation.destroy(),a(t),e(n)},e=>{a(t),i(e)})})})}function a(t){const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}async function c(t,e){const n=(void 0!==t.deepWait?t.deepWait:e)?[h(t.enteringEl),h(t.leavingEl)]:[f(t.enteringEl),f(t.leavingEl)];await Promise.all(n),await async function(t,e){t&&await t(e)}(t.viewIsReady,t.enteringEl)}function u(t,e){l(e,i.a),l(t,i.b)}function d(t,e){l(t,i.c),l(e,i.d)}function l(t,e){if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function f(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}async function h(t){const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(h))}}function m(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},ybXd:function(t,e,n){"use strict";function i(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function r(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function s(t,e,n,i,o){if(t||r(e)){let t=e.querySelector("input.aux-input");t||((t=e.ownerDocument.createElement("input")).type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=o,t.name=n,t.value=i||""}}function a(t,e,n){return Math.max(t,Math.min(e,n))}function c(t,e){if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}}function u(t){return t.timeStamp||Date.now()}function d(t){if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){const n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}}function f(t,e){const n=t._original||t;return{_original:t,emit:h(n.emit.bind(n),e)}}function h(t,e=0){let n;return(...i)=>{clearTimeout(n),n=setTimeout(t,e,...i)}}n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return f}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return c}),n.d(e,"i",function(){return a}),n.d(e,"j",function(){return h}),n.d(e,"k",function(){return d}),n("gDZG")}}]);