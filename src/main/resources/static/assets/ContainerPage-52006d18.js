import{b as ne,u as T,_ as X,w as ge,d as G,m as ee,i as xe,a as ye,c as Ze,e as Ee,f as Xe,g as Ye,h as L,j as de,r as Ce,k as et,T as tt,n as ce,o as ot,p as nt,q as Ae,s as st,t as at,v as ke,x as lt,y as rt,z as ut,A as it,B as dt,C as ct,E as pt}from"./el-button-e63b366d.js";import{E as mt,a as ft,b as vt,c as ht}from"./el-main-7a57110f.js";import{E as bt,f as gt}from"./el-overlay-6734a98a.js";import{t as me,E as yt,a as _t,b as Mt}from"./el-avatar-62dfa26a.js";import{E as Le}from"./el-scrollbar-ae1ad2ca.js";import{k as x,l as m,m as he,o as y,e as O,d as i,q as k,s as S,f as B,n as De,t as Se,v as ie,x as je,y as Te,z as wt,T as _e,r as $,A as te,b as c,B as He,a as j,C as Ct,c as D,D as We,E as Z,F as qe,G as It,H as Ne,w as fe,I as Me,J as Ue,K as w,L as oe,M as Pe,N as Oe,O as $t,P as Et,Q as kt,h as J,_ as St,R as Tt,S as Nt,p as Pt,i as Ot}from"./index-2bb71daf.js";import{_ as Bt,a as xt}from"./user-134da74d.js";import{u as At}from"./useUserinfoStore-724f2bf2.js";/* empty css                */import{t as be,i as Re}from"./event-0e1210c4.js";import{d as Rt,a as zt,u as Lt}from"./use-dialog-09e10884.js";import{E as Dt}from"./focus-trap-fc61f8de.js";import{E as jt}from"./request-d319ce4c.js";import"./scroll-87c3a443.js";import"./userinfo-441d26cd.js";const Ve=Symbol("rowContextKey"),Ht=["start","center","end","space-around","space-between","space-evenly"],Wt=["top","middle","bottom"],qt=ne({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:Ht,default:"start"},align:{type:String,values:Wt}}),Ut=x({name:"ElRow"}),Vt=x({...Ut,props:qt,setup(e){const o=e,n=T("row"),s=m(()=>o.gutter);he(Ve,{gutter:s});const t=m(()=>{const a={};return o.gutter&&(a.marginRight=a.marginLeft=`-${o.gutter/2}px`),a}),b=m(()=>[n.b(),n.is(`justify-${o.justify}`,o.justify!=="start"),n.is(`align-${o.align}`,!!o.align)]);return(a,v)=>(y(),O(Se(a.tag),{class:S(B(b)),style:De(B(t))},{default:i(()=>[k(a.$slots,"default")]),_:3},8,["class","style"]))}});var Ft=X(Vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const Kt=ge(Ft),Gt=ne({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:G([Number,Object]),default:()=>ee({})},sm:{type:G([Number,Object]),default:()=>ee({})},md:{type:G([Number,Object]),default:()=>ee({})},lg:{type:G([Number,Object]),default:()=>ee({})},xl:{type:G([Number,Object]),default:()=>ee({})}}),Jt=x({name:"ElCol"}),Qt=x({...Jt,props:Gt,setup(e){const o=e,{gutter:n}=ie(Ve,{gutter:m(()=>0)}),s=T("col"),t=m(()=>{const a={};return n.value&&(a.paddingLeft=a.paddingRight=`${n.value/2}px`),a}),b=m(()=>{const a=[];return["span","offset","pull","push"].forEach(d=>{const f=o[d];xe(f)&&(d==="span"?a.push(s.b(`${o[d]}`)):f>0&&a.push(s.b(`${d}-${o[d]}`)))}),["xs","sm","md","lg","xl"].forEach(d=>{xe(o[d])?a.push(s.b(`${d}-${o[d]}`)):je(o[d])&&Object.entries(o[d]).forEach(([f,g])=>{a.push(f!=="span"?s.b(`${d}-${f}-${g}`):s.b(`${d}-${g}`))})}),n.value&&a.push(s.is("guttered")),[s.b(),a]});return(a,v)=>(y(),O(Se(a.tag),{class:S(B(b)),style:De(B(t))},{default:i(()=>[k(a.$slots,"default")]),_:3},8,["class","style"]))}});var Zt=X(Qt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const Xt=ge(Zt),Yt=x({name:"ElCollapseTransition"}),eo=x({...Yt,setup(e){const o=T("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},s={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,b)=>(y(),O(_e,Te({name:B(o).b()},wt(s)),{default:i(()=>[k(t.$slots,"default")]),_:3},16,["name"]))}});var ve=X(eo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);ve.install=e=>{e.component(ve.name,ve)};const to=ve,oo=ne({...Rt,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}}),no=zt,so=x({name:"ElDrawer",components:{ElOverlay:bt,ElFocusTrap:Dt,ElIcon:ye,Close:Ze},inheritAttrs:!1,props:oo,emits:no,setup(e,{slots:o}){Ee({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},m(()=>!!o.title)),Ee({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},m(()=>!!e.customClass));const n=$(),s=$(),t=T("drawer"),{t:b}=Xe(),a=m(()=>e.direction==="rtl"||e.direction==="ltr"),v=m(()=>Ye(e.size));return{...Lt(e,n),drawerRef:n,focusStartRef:s,isHorizontal:a,drawerSize:v,ns:t,t:b}}}),ao=["aria-label","aria-labelledby","aria-describedby"],lo=["id"],ro=["aria-label"],uo=["id"];function io(e,o,n,s,t,b){const a=te("close"),v=te("el-icon"),r=te("el-focus-trap"),d=te("el-overlay");return y(),O(It,{to:"body",disabled:!e.appendToBody},[c(_e,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:i(()=>[He(c(d,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:i(()=>[c(r,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:i(()=>[j("div",Te({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:o[1]||(o[1]=Ct(()=>{},["stop"]))}),[j("span",{ref:"focusStartRef",class:S(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(y(),D("header",{key:0,class:S(e.ns.e("header"))},[e.$slots.title?k(e.$slots,"title",{key:1},()=>[Z(" DEPRECATED SLOT ")]):k(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?Z("v-if",!0):(y(),D("span",{key:0,id:e.titleId,role:"heading",class:S(e.ns.e("title"))},We(e.title),11,lo))]),e.showClose?(y(),D("button",{key:2,"aria-label":e.t("el.drawer.close"),class:S(e.ns.e("close-btn")),type:"button",onClick:o[0]||(o[0]=(...f)=>e.handleClose&&e.handleClose(...f))},[c(v,{class:S(e.ns.e("close"))},{default:i(()=>[c(a)]),_:1},8,["class"])],10,ro)):Z("v-if",!0)],2)):Z("v-if",!0),e.rendered?(y(),D("div",{key:1,id:e.bodyId,class:S(e.ns.e("body"))},[k(e.$slots,"default")],10,uo)):Z("v-if",!0),e.$slots.footer?(y(),D("div",{key:2,class:S(e.ns.e("footer"))},[k(e.$slots,"footer")],2)):Z("v-if",!0)],16,ao)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[qe,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var co=X(so,[["render",io],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const po=ge(co);let mo=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",s=>{let t=!1;switch(s.code){case L.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case L.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case L.tab:{me(o,"mouseleave");break}case L.enter:case L.space:{t=!0,s.currentTarget.click();break}}return t&&(s.preventDefault(),s.stopPropagation()),!1})})}},fo=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new mo(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case L.down:{me(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case L.up:{me(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case L.tab:{me(o.currentTarget,"mouseleave");break}case L.enter:case L.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},vo=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(s=>{s.nodeType===1&&new fo(s,o)})}};const ho=x({name:"ElMenuCollapseTransition",setup(){const e=T("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,s){de(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",s()},onAfterEnter(n){Ce(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),et(n,e.m("collapse"))?(Ce(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),de(n,e.m("collapse"))):(de(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),Ce(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){de(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function bo(e,o,n,s,t,b){return y(),O(_e,Te({mode:"out-in"},e.listeners),{default:i(()=>[k(e.$slots,"default")]),_:3},16)}var go=X(ho,[["render",bo],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Fe(e,o){const n=m(()=>{let t=e.parent;const b=[o.value];for(;t.type.name!=="ElMenu";)t.props.index&&b.unshift(t.props.index),t=t.parent;return b});return{parentMenu:m(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function yo(e){return m(()=>{const n=e.backgroundColor;return n?new tt(n).shade(20).toString():""})}const Ke=(e,o)=>{const n=T("menu");return m(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":yo(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},_o=ne({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:ce},expandOpenIcon:{type:ce},collapseCloseIcon:{type:ce},collapseOpenIcon:{type:ce}}),pe="ElSubMenu";var Be=x({name:pe,props:_o,setup(e,{slots:o,expose:n}){Ee({from:"popper-append-to-body",replacement:"teleported",scope:pe,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},m(()=>e.popperAppendToBody!==void 0));const s=Oe(),{indexPath:t,parentMenu:b}=Fe(s,m(()=>e.index)),a=T("menu"),v=T("sub-menu"),r=ie("rootMenu");r||be(pe,"can not inject root menu");const d=ie(`subMenu:${b.value.uid}`);d||be(pe,"can not inject sub menu");const f=$({}),g=$({});let C;const N=$(!1),se=$(),F=$(null),H=m(()=>l.value==="horizontal"&&q.value?"bottom-start":"right-start"),W=m(()=>l.value==="horizontal"&&q.value||l.value==="vertical"&&!r.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?P.value?e.expandOpenIcon:e.expandCloseIcon:ot:e.collapseCloseIcon&&e.collapseOpenIcon?P.value?e.collapseOpenIcon:e.collapseCloseIcon:nt),q=m(()=>d.level===0),Q=m(()=>{var h;const _=(h=e.teleported)!=null?h:e.popperAppendToBody;return _===void 0?q.value:_}),ae=m(()=>r.props.collapse?`${a.namespace.value}-zoom-in-left`:`${a.namespace.value}-zoom-in-top`),le=m(()=>l.value==="horizontal"&&q.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),P=m(()=>r.openedMenus.includes(e.index)),R=m(()=>{let h=!1;return Object.values(f.value).forEach(_=>{_.active&&(h=!0)}),Object.values(g.value).forEach(_=>{_.active&&(h=!0)}),h}),z=m(()=>r.props.backgroundColor||""),re=m(()=>r.props.activeTextColor||""),Y=m(()=>r.props.textColor||""),l=m(()=>r.props.mode),u=Ne({index:e.index,indexPath:t,active:R}),p=Ke(r.props,d.level+1),I=m(()=>l.value!=="horizontal"?{color:Y.value}:{borderBottomColor:R.value?r.props.activeTextColor?re.value:"":"transparent",color:R.value?re.value:Y.value}),M=()=>{var h,_,E;return(E=(_=(h=F.value)==null?void 0:h.popperRef)==null?void 0:_.popperInstanceRef)==null?void 0:E.destroy()},U=h=>{h||M()},K=()=>{r.props.menuTrigger==="hover"&&r.props.mode==="horizontal"||r.props.collapse&&r.props.mode==="vertical"||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:t.value,active:R.value})},V=(h,_=e.showTimeout)=>{var E;h.type!=="focus"&&(r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||e.disabled||(d.mouseInChild.value=!0,C==null||C(),{stop:C}=Ae(()=>{r.openMenu(e.index,t.value)},_),Q.value&&((E=b.value.vnode.el)==null||E.dispatchEvent(new MouseEvent("mouseenter")))))},A=(h=!1)=>{var _,E;r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||(C==null||C(),d.mouseInChild.value=!1,{stop:C}=Ae(()=>!N.value&&r.closeMenu(e.index,t.value),e.hideTimeout),Q.value&&h&&((_=s.parent)==null?void 0:_.type.name)==="ElSubMenu"&&((E=d.handleMouseleave)==null||E.call(d,!0)))};fe(()=>r.props.collapse,h=>U(!!h));{const h=E=>{g.value[E.index]=E},_=E=>{delete g.value[E.index]};he(`subMenu:${s.uid}`,{addSubMenu:h,removeSubMenu:_,handleMouseleave:A,mouseInChild:N,level:d.level+1})}return n({opened:P}),Me(()=>{r.addSubMenu(u),d.addSubMenu(u)}),Ue(()=>{d.removeSubMenu(u),r.removeSubMenu(u)}),()=>{var h;const _=[(h=o.title)==null?void 0:h.call(o),w(ye,{class:v.e("icon-arrow"),style:{transform:P.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&r.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>oe(W.value)?w(s.appContext.components[W.value]):w(W.value)})],E=r.isMenuPopup?w(Le,{ref:F,visible:P.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:H.value,teleported:Q.value,fallbackPlacements:le.value,transition:ae.value,gpuAcceleration:!1},{content:()=>{var ue;return w("div",{class:[a.m(l.value),a.m("popup-container"),e.popperClass],onMouseenter:we=>V(we,100),onMouseleave:()=>A(!0),onFocus:we=>V(we,100)},[w("ul",{class:[a.b(),a.m("popup"),a.m(`popup-${H.value}`)],style:p.value},[(ue=o.default)==null?void 0:ue.call(o)])])},default:()=>w("div",{class:v.e("title"),style:[I.value,{backgroundColor:z.value}],onClick:K},_)}):w(Pe,{},[w("div",{class:v.e("title"),style:[I.value,{backgroundColor:z.value}],ref:se,onClick:K},_),w(to,{},{default:()=>{var ue;return He(w("ul",{role:"menu",class:[a.b(),a.m("inline")],style:p.value},[(ue=o.default)==null?void 0:ue.call(o)]),[[qe,P.value]])}})]);return w("li",{class:[v.b(),v.is("active",R.value),v.is("opened",P.value),v.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:P.value,onMouseenter:V,onMouseleave:()=>A(!0),onFocus:V},[E])}}});const Mo=ne({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:G(Array),default:()=>ee([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),Ie=e=>Array.isArray(e)&&e.every(o=>oe(o)),wo={close:(e,o)=>oe(e)&&Ie(o),open:(e,o)=>oe(e)&&Ie(o),select:(e,o,n,s)=>oe(e)&&Ie(o)&&je(n)&&(s===void 0||s instanceof Promise)};var Co=x({name:"ElMenu",props:Mo,emits:wo,setup(e,{emit:o,slots:n,expose:s}){const t=Oe(),b=t.appContext.config.globalProperties.$router,a=$(),v=T("menu"),r=T("sub-menu"),d=$(-1),f=$(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),g=$(e.defaultActive),C=$({}),N=$({}),se=m(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),F=()=>{const l=g.value&&C.value[g.value];if(!l||e.mode==="horizontal"||e.collapse)return;l.indexPath.forEach(p=>{const I=N.value[p];I&&H(p,I.indexPath)})},H=(l,u)=>{f.value.includes(l)||(e.uniqueOpened&&(f.value=f.value.filter(p=>u.includes(p))),f.value.push(l),o("open",l,u))},W=l=>{const u=f.value.indexOf(l);u!==-1&&f.value.splice(u,1)},q=(l,u)=>{W(l),o("close",l,u)},Q=({index:l,indexPath:u})=>{f.value.includes(l)?q(l,u):H(l,u)},ae=l=>{(e.mode==="horizontal"||e.collapse)&&(f.value=[]);const{index:u,indexPath:p}=l;if(!(Re(u)||Re(p)))if(e.router&&b){const I=l.route||u,M=b.push(I).then(U=>(U||(g.value=u),U));o("select",u,p,{index:u,indexPath:p,route:I},M)}else g.value=u,o("select",u,p,{index:u,indexPath:p})},le=l=>{const u=C.value,p=u[l]||g.value&&u[g.value]||u[e.defaultActive];p?g.value=p.index:g.value=l},P=()=>{var l,u;if(!a.value)return-1;const p=Array.from((u=(l=a.value)==null?void 0:l.childNodes)!=null?u:[]).filter(h=>h.nodeName!=="#comment"&&(h.nodeName!=="#text"||h.nodeValue)),I=64,M=Number.parseInt(getComputedStyle(a.value).paddingLeft,10),U=Number.parseInt(getComputedStyle(a.value).paddingRight,10),K=a.value.clientWidth-M-U;let V=0,A=0;return p.forEach((h,_)=>{V+=h.offsetWidth||0,V<=K-I&&(A=_+1)}),A===p.length?-1:A},R=(l,u=33.34)=>{let p;return()=>{p&&clearTimeout(p),p=setTimeout(()=>{l()},u)}};let z=!0;const re=()=>{const l=()=>{d.value=-1,Et(()=>{d.value=P()})};z?l():R(l)(),z=!1};fe(()=>e.defaultActive,l=>{C.value[l]||(g.value=""),le(l)}),fe(()=>e.collapse,l=>{l&&(f.value=[])}),fe(C.value,F);let Y;$t(()=>{e.mode==="horizontal"&&e.ellipsis?Y=at(a,re).stop:Y==null||Y()});{const l=M=>{N.value[M.index]=M},u=M=>{delete N.value[M.index]};he("rootMenu",Ne({props:e,openedMenus:f,items:C,subMenus:N,activeIndex:g,isMenuPopup:se,addMenuItem:M=>{C.value[M.index]=M},removeMenuItem:M=>{delete C.value[M.index]},addSubMenu:l,removeSubMenu:u,openMenu:H,closeMenu:q,handleMenuItemClick:ae,handleSubMenuClick:Q})),he(`subMenu:${t.uid}`,{addSubMenu:l,removeSubMenu:u,mouseInChild:$(!1),level:0})}return Me(()=>{e.mode==="horizontal"&&new vo(t.vnode.el,v.namespace.value)}),s({open:u=>{const{indexPath:p}=N.value[u];p.forEach(I=>H(I,p))},close:W,handleResize:re}),()=>{var l,u;let p=(u=(l=n.default)==null?void 0:l.call(n))!=null?u:[];const I=[];if(e.mode==="horizontal"&&a.value){const K=gt(p),V=d.value===-1?K:K.slice(0,d.value),A=d.value===-1?[]:K.slice(d.value);A!=null&&A.length&&e.ellipsis&&(p=V,I.push(w(Be,{index:"sub-menu-more",class:r.e("hide-arrow")},{title:()=>w(ye,{class:r.e("icon-more")},{default:()=>w(st)}),default:()=>A})))}const M=Ke(e,0),U=w("ul",{key:String(e.collapse),role:"menubar",ref:a,style:M.value,class:{[v.b()]:!0,[v.m(e.mode)]:!0,[v.m("collapse")]:e.collapse}},[...p,...I]);return e.collapseTransition&&e.mode==="vertical"?w(go,()=>U):U}}});const Io=ne({index:{type:G([String,null]),default:null},route:{type:G([String,Object])},disabled:Boolean}),$o={click:e=>oe(e.index)&&Array.isArray(e.indexPath)},$e="ElMenuItem",Eo=x({name:$e,components:{ElTooltip:Le},props:Io,emits:$o,setup(e,{emit:o}){const n=Oe(),s=ie("rootMenu"),t=T("menu"),b=T("menu-item");s||be($e,"can not inject root menu");const{parentMenu:a,indexPath:v}=Fe(n,kt(e,"index")),r=ie(`subMenu:${a.value.uid}`);r||be($e,"can not inject sub menu");const d=m(()=>e.index===s.activeIndex),f=Ne({index:e.index,indexPath:v,active:d}),g=()=>{e.disabled||(s.handleMenuItemClick({index:e.index,indexPath:v.value,route:e.route}),o("click",f))};return Me(()=>{r.addSubMenu(f),s.addMenuItem(f)}),Ue(()=>{r.removeSubMenu(f),s.removeMenuItem(f)}),{parentMenu:a,rootMenu:s,active:d,nsMenu:t,nsMenuItem:b,handleClick:g}}});function ko(e,o,n,s,t,b){const a=te("el-tooltip");return y(),D("li",{class:S([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...v)=>e.handleClick&&e.handleClick(...v))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(y(),O(a,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:i(()=>[k(e.$slots,"title")]),default:i(()=>[j("div",{class:S(e.nsMenu.be("tooltip","trigger"))},[k(e.$slots,"default")],2)]),_:3},8,["effect"])):(y(),D(Pe,{key:1},[k(e.$slots,"default"),k(e.$slots,"title")],64))],2)}var Ge=X(Eo,[["render",ko],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const So={title:String},To="ElMenuItemGroup",No=x({name:To,props:So,setup(){return{ns:T("menu-item-group")}}});function Po(e,o,n,s,t,b){return y(),D("li",{class:S(e.ns.b())},[j("div",{class:S(e.ns.e("title"))},[e.$slots.title?k(e.$slots,"title",{key:1}):(y(),D(Pe,{key:0},[J(We(e.title),1)],64))],2),j("ul",null,[k(e.$slots,"default")])],2)}var Je=X(No,[["render",Po],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const Oo=ge(Co,{MenuItem:Ge,MenuItemGroup:Je,SubMenu:Be}),Bo=ke(Ge);ke(Je);ke(Be);const xo=j("div",{class:"aside_bar"},null,-1),ze={__name:"NavComp",props:{currentRoute:{type:String,required:!0}},setup(e){return(o,n)=>{const s=ye,t=Bo,b=Oo;return y(),O(b,{"default-active":e.currentRoute,"text-color":"#333","active-text-color":"#ffd04d",router:""},{default:i(()=>[xo,c(t,{index:"/home"},{title:i(()=>[J("回到首页")]),default:i(()=>[c(s,null,{default:i(()=>[c(B(lt))]),_:1})]),_:1}),c(t,{index:"/article"},{title:i(()=>[J("发现动态")]),default:i(()=>[c(s,null,{default:i(()=>[c(B(rt))]),_:1})]),_:1}),c(t,{index:"/chat"},{title:i(()=>[J("查看消息")]),default:i(()=>[c(s,null,{default:i(()=>[c(B(ut))]),_:1})]),_:1}),c(t,{index:"/userinfo"},{title:i(()=>[J("我的账户")]),default:i(()=>[c(s,null,{default:i(()=>[c(B(it))]),_:1})]),_:1})]),_:1},8,["default-active"])}}};const Qe=e=>(Pt("data-v-a06678e8"),e=e(),Ot(),e),Ao={class:"common-layout"},Ro={class:"header_left"},zo=Qe(()=>j("div",{class:"logo"},[j("img",{src:Bt,alt:""})],-1)),Lo=Qe(()=>j("div",{class:"title"},"ShareBuddy.com",-1)),Do={__name:"ContainerPage",setup(e){const o=Tt(),n=At(),s=m(()=>"/"+o.currentRoute.value.path.split("/")[1]);(async()=>{await n.refreshUserinfo()})();const b=async()=>{await xt(),jt.success("已退出登录"),o.push("/login")},a=f=>{f==="退出登录"?b():f=="个人信息"&&o.push("/userinfo")},v=$(!1),r=()=>{v.value=window.innerWidth<768};Me(()=>{r(),window.addEventListener("resize",r)});const d=$(!1);return(f,g)=>{const C=pt,N=Xt,se=yt,F=_t,H=Mt,W=Kt,q=ft,Q=po,ae=vt,le=te("router-view"),P=ht,R=mt;return y(),D("div",Ao,[c(R,{class:"main"},{default:i(()=>[c(q,{class:"header_b",height:"55px"},{default:i(()=>[c(W,{class:"header_bar",justify:"space-around"},{default:i(()=>[c(N,{span:5},{default:i(()=>[j("div",Ro,[v.value?(y(),O(C,{key:0,class:"button",onClick:g[0]||(g[0]=z=>d.value=!0),plain:"",circle:"",size:"large",icon:B(dt)},null,8,["icon"])):Z("",!0),zo,Lo])]),_:1}),c(N,{span:14},{default:i(()=>[c(W,{gutter:20,justify:"end",class:"header_right"},{default:i(()=>[c(N,{span:4},{default:i(()=>[c(H,{size:"large",onCommand:a},{dropdown:i(()=>[c(F,{command:"个人信息"},{default:i(()=>[J("个人信息")]),_:1}),c(F,{command:"退出登录"},{default:i(()=>[J("退出登录")]),_:1}),c(F,{command:"设置"},{default:i(()=>[J("设置")]),_:1})]),default:i(()=>[c(se,{icon:B(ct),src:B(n).imageUrl,size:40},null,8,["icon","src"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),c(R,null,{default:i(()=>[v.value?(y(),O(Q,{key:0,modelValue:d.value,"onUpdate:modelValue":g[1]||(g[1]=z=>d.value=z),size:"70%",direction:"ltr"},{default:i(()=>[c(ze,{currentRoute:s.value},null,8,["currentRoute"])]),_:1},8,["modelValue"])):(y(),O(ae,{key:1,class:"aside"},{default:i(()=>[c(ze,{currentRoute:s.value},null,8,["currentRoute"])]),_:1})),c(P,{class:"container_main"},{default:i(()=>[c(le,null,{default:i(({Component:z})=>[c(_e,{mode:"out-in"},{default:i(()=>[(y(),O(Nt,{include:"ArticlePage"},[(y(),O(Se(z)))],1024))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1})])}}},sn=St(Do,[["__scopeId","data-v-a06678e8"]]);export{sn as default};