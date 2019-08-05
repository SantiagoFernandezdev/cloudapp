(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{"3Ezv":function(t,e,i){"use strict";i.r(e),i.d(e,"IonTab",function(){return n}),i.d(e,"IonTabs",function(){return o});var s=i("gDZG"),a=i("mXPe");class n{constructor(){this.loaded=!1,this.active=!1}componentWillLoad(){}async setActive(){await this.prepareLazyLoaded(),this.active=!0}async prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(a.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}}hostData(){const{tab:t,active:e,component:i}=this;return{role:"tabpanel","aria-hidden":e?null:"true","aria-labelledby":`tab-button-${t}`,class:{"ion-page":void 0===i,"tab-hidden":!e}}}render(){return Object(s.b)("slot",null)}static get is(){return"ion-tab"}static get encapsulation(){return"shadow"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},setActive:{method:!0},tab:{type:String,attr:"tab"}}}static get style(){return".tab-hidden.sc-ion-tab-h{display:none!important}"}}class o{constructor(){this.transitioning=!1,this.tabs=[],this.useRouter=!1}async componentWillLoad(){this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.tabs=Array.from(this.el.querySelectorAll("ion-tab")),await this.initSelect(),this.ionNavWillLoad.emit(),this.componentWillUpdate()}componentDidUnload(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0}componentWillUpdate(){const t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}onTabClicked(t){const{href:e,tab:i}=t.detail,s=this.tabs.find(t=>t.tab===i);if(this.useRouter&&void 0!==e){const t=this.doc.querySelector("ion-router");t&&t.push(e)}else s&&this.select(s)}async select(t){const e=await this.getTab(t);return!!this.shouldSwitch(e)&&(await this.setActive(e),await this.notifyRouter(),this.tabSwitch(),!0)}async getTab(t){const e="string"==typeof t?this.tabs.find(e=>e.tab===t):t;return e||console.error(`tab with id: "${e}" does not exist`),e}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(t){const e=await this.getTab(t);return this.shouldSwitch(e)?(await this.setActive(e),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){const t=this.selectedTab&&this.selectedTab.tab;return void 0!==t?{id:t,element:this.selectedTab}:void 0}async initSelect(){this.useRouter||(await Promise.all(this.tabs.map(t=>t.componentOnReady())),await this.select(this.tabs[0]))}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.setActive())}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=this.doc.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}render(){return[Object(s.b)("slot",{name:"top"}),Object(s.b)("div",{class:"tabs-inner"},Object(s.b)("slot",null)),Object(s.b)("slot",{name:"bottom"})]}static get is(){return"ion-tabs"}static get encapsulation(){return"shadow"}static get properties(){return{config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabs:{state:!0},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}}static get events(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabsWillChange",method:"ionTabsWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionTabsDidChange",method:"ionTabsDidChange",bubbles:!1,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionTabButtonClick",method:"onTabClicked"}]}static get style(){return".sc-ion-tabs-h{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner.sc-ion-tabs, .sc-ion-tabs-h{contain:layout size style}.tabs-inner.sc-ion-tabs{position:relative;-ms-flex:1;flex:1}"}}}}]);