(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{y2o1:function(t,e,n){"use strict";n.r(e),n.d(e,"startInputShims",function(){return p}),n("gDZG");var o=n("ybXd");const r=new WeakMap;function i(t,e,n,o=0){r.has(t)!==n&&(n?function(t,e,n){const o=e.parentNode,i=e.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,o.appendChild(i),r.set(t,i);const s="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`}(t,e,o):function(t,e){const n=r.get(t);n&&(r.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""}(t,e))}function s(t){return t===t.getRootNode().activeElement}const c="input, textarea, [no-blur]",a=.3;const u="$ionPaddingTimer";function l(t,e){if("INPUT"!==t.tagName)return;if(t.parentElement&&"ION-INPUT"===t.parentElement.tagName)return;const n=t.closest("ion-content");if(null===n)return;const o=n[u];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",`${e}px`):n[u]=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)}const d=!0,f=!0;function p(t,e){const n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),p=e.getBoolean("inputBlurring",!0),m=e.getBoolean("scrollPadding",!0),v=new WeakMap,g=new WeakMap;function h(t){const e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),c=t.closest("ion-content");if(e){if(c&&u&&!v.has(t)){const n=function(t,e,n){if(!n||!e)return()=>{};const o=n=>{s(e)&&i(t,e,n)},r=()=>i(t,e,!1),c=()=>o(!0),a=()=>o(!1);return n.addEventListener("ionScrollStart",c),n.addEventListener("ionScrollEnd",a),e.addEventListener("blur",r),()=>{n.removeEventListener("ionScrollStart",c),n.removeEventListener("ionScrollEnd",a),e.addEventListener("ionBlur",r)}}(t,e,c);v.set(t,n)}if(c&&r&&!g.has(t)){const r=function(t,e,n,r){let c;const u=t=>{c=Object(o.k)(t)},l=u=>{c&&(function(t,e,n){if(c&&n){const t=c.x-n.x,e=c.y-n.y;return t*t+e*e>36}return!1}(0,0,Object(o.k)(u))||s(e)||(u.preventDefault(),u.stopPropagation(),function(t,e,n,o){const r=function(t,e,n){return function(e,n,o,r){const i=e.top,s=e.bottom,c=n.top,u=c+15,l=.5*Math.min(n.bottom,t.ownerDocument.defaultView.innerHeight-o)-s,d=u-i,f=Math.round(l<0?-l:d>0?-d:0),p=Math.min(f,i-c),m=Math.abs(p);return{scrollAmount:p,scrollDuration:Math.min(400,Math.max(150,m/a)),scrollPadding:o,inputSafeY:4-(i-u)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n)}(t,n,o);Math.abs(r.scrollAmount)<4?e.focus():(i(t,e,!0,r.inputSafeY),e.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(()=>{i(t,e,!1,r.inputSafeY),e.focus()}))}(t,e,n,r)))};return t.addEventListener("touchstart",u,!0),t.addEventListener("touchend",l,!0),()=>{t.removeEventListener("touchstart",u,!0),t.removeEventListener("touchend",l,!0)}}(t,e,c,n);g.set(t,r)}}}p&&d&&function(t){let e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)return void(n=!1);const r=t.activeElement;if(!r)return;if(r.matches(c))return;const i=o.target;i!==r&&(i.matches(c)||i.closest(c)||(e=!1,setTimeout(()=>{e||r.blur()},50)))},!1)}(t),m&&f&&function(t,e){t.addEventListener("focusin",function(t){l(t.target,e)}),t.addEventListener("focusout",function(t){l(t.target,0)})}(t,n);const E=Array.from(t.querySelectorAll("ion-input, ion-textarea"));for(const o of E)h(o);t.body.addEventListener("ionInputDidLoad",t=>{h(t.target)}),t.body.addEventListener("ionInputDidUnload",t=>{!function(t){if(u){const e=v.get(t);e&&e(),v.delete(t)}if(r){const e=g.get(t);e&&e(),g.delete(t)}}(t.target)})}}}]);