(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{hyhX:function(t,e,n){"use strict";n.r(e),n.d(e,"IonToggle",function(){return s});var o=n("gDZG"),i=n("FEEj"),r=n("ybXd"),a=n("WDTR");class s{constructor(){this.inputId=`ion-tg-${d++}`,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.ionBlur.emit()})}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.gesture=(await n.e(0).then(n.bind(null,"02gw"))).createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}componentDidUnload(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}onClick(){this.lastDrag+300<Date.now()&&(this.checked=!this.checked)}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}onStart(){this.activated=!0,this.setFocus()}onMove(t){(function(t,e,n,o){const i="rtl"===t.dir;return e?!i&&-10>n||i&&10<n:!i&&10<n||i&&-10>n})(this.doc,this.checked,t.deltaX)&&(this.checked=!this.checked,Object(a.d)())}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.buttonEl&&this.buttonEl.focus()}hostData(){const{inputId:t,disabled:e,checked:n,activated:o,color:a,el:s}=this,d=t+"-lbl",g=Object(r.d)(s);return g&&(g.id=d),{role:"checkbox","aria-disabled":e?"true":null,"aria-checked":`${n}`,"aria-labelledby":d,class:Object.assign({},Object(i.c)(a),{[`${this.mode}`]:!0,"in-item":Object(i.d)("ion-item",s),"toggle-activated":o,"toggle-checked":n,"toggle-disabled":e,interactive:!0})}}render(){const t=this.getValue();return Object(r.e)(!0,this.el,this.name,this.checked?t:"",this.disabled),[Object(o.b)("div",{class:"toggle-icon"},Object(o.b)("div",{class:"toggle-inner"})),Object(o.b)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t})]}static get is(){return"ion-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"}]}static get style(){return".sc-ion-toggle-md-h{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}.ion-focused.sc-ion-toggle-md-h   input.sc-ion-toggle-md{border:2px solid #5e9ed6}.toggle-disabled.sc-ion-toggle-md-h{pointer-events:none}button.sc-ion-toggle-md{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl].sc-ion-toggle-md-h   button.sc-ion-toggle-md, [dir=rtl]   .sc-ion-toggle-md-h   button.sc-ion-toggle-md, [dir=rtl].sc-ion-toggle-md   button.sc-ion-toggle-md{left:unset;right:unset;right:0}button.sc-ion-toggle-md::-moz-focus-inner{border:0}.sc-ion-toggle-md-h{--background:var(--ion-color-medium-tint,#a2a4ab);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:var(--ion-background-color,#fff);--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:rgba(var(--ion-color-base-rgb),.5)}.ion-color.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{background:var(--ion-color-base)}.toggle-icon.sc-ion-toggle-md{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner.sc-ion-toggle-md{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}[dir=rtl].sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl]   .sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl].sc-ion-toggle-md   .toggle-inner.sc-ion-toggle-md{left:unset;right:unset;right:0}.toggle-checked.sc-ion-toggle-md-h   .toggle-icon.sc-ion-toggle-md{background:var(--background-checked)}.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}[dir=rtl].toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl]   .toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl].sc-ion-toggle-md-h -no-combinator.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md, [dir=rtl]   .sc-ion-toggle-md-h -no-combinator.toggle-checked.sc-ion-toggle-md-h   .toggle-inner.sc-ion-toggle-md{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}.toggle-disabled.sc-ion-toggle-md-h{opacity:.3}.in-item[slot].sc-ion-toggle-md-h{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot].sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}.in-item[slot=start].sc-ion-toggle-md-h{padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.in-item[slot=start].sc-ion-toggle-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"}static get styleMode(){return"md"}}let d=0}}]);