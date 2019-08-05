(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{mFMt:function(t,e,s){"use strict";s.r(e),s.d(e,"IonReorder",function(){return n}),s.d(e,"IonReorderGroup",function(){return i});var o=s("gDZG"),r=s("WDTR");class n{onClick(t){t.preventDefault(),t.stopImmediatePropagation()}hostData(){return{class:{[`${this.mode}`]:!0}}}render(){return Object(o.b)("slot",null,Object(o.b)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))}static get is(){return"ion-reorder"}static get encapsulation(){return"shadow"}static get listeners(){return[{name:"click",method:"onClick",capture:!0}]}static get style(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"}static get styleMode(){return"ios"}}class i{constructor(){this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async componentDidLoad(){const t=this.el.closest("ion-content");t&&(await t.componentOnReady(),this.scrollEl=await t.getScrollElement()),this.gesture=(await s.e(0).then(s.bind(null,"02gw"))).createGesture({el:this.el,queue:this.queue,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:t=>this.canStart(t),onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:()=>this.onEnd()}),this.disabledChanged()}componentDidUnload(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}complete(t){return Promise.resolve(this.completeSync(t))}canStart(t){if(this.selectedItemEl||0!==this.state)return!1;const e=t.event.target.closest("ion-reorder");if(!e)return!1;const s=function(t,e){let s;for(;t;){if((s=t.parentElement)===e)return t;t=s}}(e,this.el);return!!s&&(t.data=s,!0)}onStart(t){t.event.preventDefault();const e=this.selectedItemEl=t.data,s=this.cachedHeights;s.length=0;const o=this.el,n=o.children;if(!n||0===n.length)return;let i=0;for(let r=0;r<n.length;r++){const t=n[r];s.push(i+=t.offsetHeight),t.$ionIndex=r}const c=o.getBoundingClientRect();if(this.containerTop=c.top,this.containerBottom=c.bottom,this.scrollEl){const t=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=t.top+a,this.scrollElBottom=t.bottom-a}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(h),Object(r.b)()}onMove(t){const e=this.selectedItemEl;if(!e)return;const s=this.autoscroll(t.currentY),o=this.containerTop-s,n=Math.max(o,Math.min(t.currentY,this.containerBottom-s)),i=s+n-t.startY,a=this.itemIndexForTop(n-o);if(a!==this.lastToIndex){const t=l(e);this.lastToIndex=a,Object(r.a)(),this.reorderMove(t,a)}e.style.transform=`translateY(${i}px)`}onEnd(){const t=this.selectedItemEl;if(this.state=2,!t)return void(this.state=0);const e=this.lastToIndex,s=l(t);e===s?(t.style.transition="transform 200ms ease-in-out",setTimeout(()=>this.completeSync(),200)):this.ionItemReorder.emit({from:s,to:e,complete:this.completeSync.bind(this)}),Object(r.c)()}completeSync(t){const e=this.selectedItemEl;if(e&&2===this.state){const s=this.el.children,o=s.length,r=this.lastToIndex,n=l(e);t&&!0!==t||this.el.insertBefore(e,n<r?s[r+1]:s[r]),Array.isArray(t)&&(t=function(t,e,s){const o=t[n];return t.splice(n,1),t.splice(s,0,o),t.slice()}(t,0,r));for(let t=0;t<o;t++)s[t].style.transform="";e.style.transition="",e.classList.remove(h),this.selectedItemEl=void 0,this.state=0}return t}itemIndexForTop(t){const e=this.cachedHeights;let s=0;for(s=0;s<e.length&&!(e[s]>t);s++);return s}reorderMove(t,e){const s=this.selectedItemHeight,o=this.el.children;for(let r=0;r<o.length;r++){let n="";r>t&&r<=e?n=`translateY(${-s}px)`:r<t&&r>=e&&(n=`translateY(${s}px)`),o[r].style.transform=n}}autoscroll(t){if(!this.scrollEl)return 0;let e=0;return t<this.scrollElTop?e=-c:t>this.scrollElBottom&&(e=c),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}hostData(){return{class:{[`${this.mode}`]:!0,"reorder-enabled":!this.disabled,"reorder-list-active":0!==this.state}}}static get is(){return"ion-reorder-group"}static get properties(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"},state:{state:!0}}}static get events(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}}function l(t){return t.$ionIndex}const a=60,c=10,h="reorder-selected"}}]);