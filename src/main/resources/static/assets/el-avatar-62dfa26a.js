import{b as W,O as Ke,i as ge,n as be,d as P,u as Z,g as we,a as te,_ as K,w as Ee,h as g,P as Me,J as Ie,E as _e,o as De,f as Ge,F as ze,v as he}from"./el-button-e63b366d.js";import{k as A,r as y,l as C,L as Ue,w as re,o as S,c as H,n as ee,f as I,e as D,d as E,t as ye,q as R,s as X,m as V,v as $,I as Ye,J as Ce,a1 as Je,Q as J,A as h,b as N,a2 as He,a3 as Ve,P as je,a4 as qe,y as q,E as oe,N as Te,a5 as We,a as Qe,C as ne,M as Xe}from"./index-2bb71daf.js";import{c as B,u as Ze,a as pe,b as xe,E as eo,O as oo,w as fe}from"./el-scrollbar-ae1ad2ca.js";import{c as $e}from"./el-overlay-6734a98a.js";import{F as no}from"./focus-trap-fc61f8de.js";const to='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',ro=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,pn=e=>Array.from(e.querySelectorAll(to)).filter(o=>lo(o)&&ro(o)),lo=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},fn=function(e,o,...s){let n;o.includes("mouse")||o.includes("click")?n="MouseEvents":o.includes("key")?n="KeyboardEvent":n="HTMLEvents";const u=document.createEvent(n);return u.initEvent(o,...s),e.dispatchEvent(u),e},so=W({size:{type:[Number,String],values:Ke,default:"",validator:e=>ge(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:be},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:P(String),default:"cover"}}),ao={error:e=>e instanceof Event},io=["src","alt","srcset"],uo=A({name:"ElAvatar"}),co=A({...uo,props:so,emits:ao,setup(e,{emit:o}){const s=e,n=Z("avatar"),u=y(!1),d=C(()=>{const{size:l,icon:v,shape:f}=s,b=[n.b()];return Ue(l)&&b.push(n.m(l)),v&&b.push(n.m("icon")),f&&b.push(n.m(f)),b}),a=C(()=>{const{size:l}=s;return ge(l)?n.cssVarBlock({size:we(l)||""}):void 0}),r=C(()=>({objectFit:s.fit}));re(()=>s.src,()=>u.value=!1);function p(l){u.value=!0,o("error",l)}return(l,v)=>(S(),H("span",{class:X(I(d)),style:ee(I(a))},[(l.src||l.srcSet)&&!u.value?(S(),H("img",{key:0,src:l.src,alt:l.alt,srcset:l.srcSet,style:ee(I(r)),onError:p},null,44,io)):l.icon?(S(),D(I(te),{key:1},{default:E(()=>[(S(),D(ye(l.icon)))]),_:1})):R(l.$slots,"default",{key:2})],6))}});var po=K(co,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const mn=Ee(po),fo=A({inheritAttrs:!1});function mo(e,o,s,n,u,d){return R(e.$slots,"default")}var vo=K(fo,[["render",mo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const go=A({name:"ElCollectionItem",inheritAttrs:!1});function bo(e,o,s,n,u,d){return R(e.$slots,"default")}var wo=K(go,[["render",bo],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const Se="data-el-collection-item",ke=e=>{const o=`El${e}Collection`,s=`${o}Item`,n=Symbol(o),u=Symbol(s),d={...vo,name:o,setup(){const r=y(null),p=new Map;V(n,{itemMap:p,getItems:()=>{const v=I(r);if(!v)return[];const f=Array.from(v.querySelectorAll(`[${Se}]`));return[...p.values()].sort((t,m)=>f.indexOf(t.ref)-f.indexOf(m.ref))},collectionRef:r})}},a={...wo,name:s,setup(r,{attrs:p}){const l=y(null),v=$(n,void 0);V(u,{collectionItemRef:l}),Ye(()=>{const f=I(l);f&&v.itemMap.set(f,{ref:f,...p})}),Ce(()=>{const f=I(l);v.itemMap.delete(f)})}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:u,ElCollection:d,ElCollectionItem:a}},Eo=W({style:{type:P([String,Array,Object])},currentTabId:{type:P(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:P(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:Io,ElCollectionItem:_o,COLLECTION_INJECTION_KEY:le,COLLECTION_ITEM_INJECTION_KEY:ho}=ke("RovingFocusGroup"),se=Symbol("elRovingFocusGroup"),Oe=Symbol("elRovingFocusGroupItem"),yo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},Co=(e,o)=>{if(o!=="rtl")return e;switch(e){case g.right:return g.left;case g.left:return g.right;default:return e}},To=(e,o,s)=>{const n=Co(e.key,s);if(!(o==="vertical"&&[g.left,g.right].includes(n))&&!(o==="horizontal"&&[g.up,g.down].includes(n)))return yo[n]},$o=(e,o)=>e.map((s,n)=>e[(n+o)%e.length]),ae=e=>{const{activeElement:o}=document;for(const s of e)if(s===o||(s.focus(),o!==document.activeElement))return},me="currentTabIdChange",ve="rovingFocusGroup.entryFocus",So={bubbles:!1,cancelable:!0},ko=A({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:Eo,emits:[me,"entryFocus"],setup(e,{emit:o}){var s;const n=y((s=e.currentTabId||e.defaultCurrentTabId)!=null?s:null),u=y(!1),d=y(!1),a=y(null),{getItems:r}=$(le,void 0),p=C(()=>[{outline:"none"},e.style]),l=c=>{o(me,c)},v=()=>{u.value=!0},f=B(c=>{var w;(w=e.onMousedown)==null||w.call(e,c)},()=>{d.value=!0}),b=B(c=>{var w;(w=e.onFocus)==null||w.call(e,c)},c=>{const w=!I(d),{target:M,currentTarget:O}=c;if(M===O&&w&&!I(u)){const G=new Event(ve,So);if(O==null||O.dispatchEvent(G),!G.defaultPrevented){const _=r().filter(F=>F.focusable),L=_.find(F=>F.active),T=_.find(F=>F.id===I(n)),U=[L,T,..._].filter(Boolean).map(F=>F.ref);ae(U)}}d.value=!1}),t=B(c=>{var w;(w=e.onBlur)==null||w.call(e,c)},()=>{u.value=!1}),m=(...c)=>{o("entryFocus",...c)};V(se,{currentTabbedId:Je(n),loop:J(e,"loop"),tabIndex:C(()=>I(u)?-1:0),rovingFocusGroupRef:a,rovingFocusGroupRootStyle:p,orientation:J(e,"orientation"),dir:J(e,"dir"),onItemFocus:l,onItemShiftTab:v,onBlur:t,onFocus:b,onMousedown:f}),re(()=>e.currentTabId,c=>{n.value=c??null}),Me(a,ve,m)}});function Oo(e,o,s,n,u,d){return R(e.$slots,"default")}var Fo=K(ko,[["render",Oo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const No=A({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:Io,ElRovingFocusGroupImpl:Fo}});function Ro(e,o,s,n,u,d){const a=h("el-roving-focus-group-impl"),r=h("el-focus-group-collection");return S(),D(r,null,{default:E(()=>[N(a,He(Ve(e.$attrs)),{default:E(()=>[R(e.$slots,"default")]),_:3},16)]),_:3})}var Lo=K(No,[["render",Ro],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);const Po=A({components:{ElRovingFocusCollectionItem:_o},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:o}){const{currentTabbedId:s,loop:n,onItemFocus:u,onItemShiftTab:d}=$(se,void 0),{getItems:a}=$(le,void 0),r=Ie(),p=y(null),l=B(t=>{o("mousedown",t)},t=>{e.focusable?u(I(r)):t.preventDefault()}),v=B(t=>{o("focus",t)},()=>{u(I(r))}),f=B(t=>{o("keydown",t)},t=>{const{key:m,shiftKey:c,target:w,currentTarget:M}=t;if(m===g.tab&&c){d();return}if(w!==M)return;const O=To(t);if(O){t.preventDefault();let _=a().filter(L=>L.focusable).map(L=>L.ref);switch(O){case"last":{_.reverse();break}case"prev":case"next":{O==="prev"&&_.reverse();const L=_.indexOf(M);_=n.value?$o(_,L+1):_.slice(L+1);break}}je(()=>{ae(_)})}}),b=C(()=>s.value===I(r));return V(Oe,{rovingFocusGroupItemRef:p,tabIndex:C(()=>I(b)?0:-1),handleMousedown:l,handleFocus:v,handleKeydown:f}),{id:r,handleKeydown:f,handleFocus:v,handleMousedown:l}}});function Bo(e,o,s,n,u,d){const a=h("el-roving-focus-collection-item");return S(),D(a,{id:e.id,focusable:e.focusable,active:e.active},{default:E(()=>[R(e.$slots,"default")]),_:3},8,["id","focusable","active"])}var Ao=K(Po,[["render",Bo],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Ko=W({trigger:Ze.trigger,effect:{...pe.effect,default:"light"},type:{type:P(String)},placement:{type:P(String),default:"bottom"},popperOptions:{type:P(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:P([Number,String]),default:0},maxHeight:{type:P([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:P(Object)},teleported:pe.teleported}),Fe=W({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:be}}),Mo=W({onKeydown:{type:P(Function)}}),Do=[g.down,g.pageDown,g.home],Ne=[g.up,g.pageUp,g.end],Go=[...Do,...Ne],{ElCollection:zo,ElCollectionItem:Uo,COLLECTION_INJECTION_KEY:Yo,COLLECTION_ITEM_INJECTION_KEY:Jo}=ke("Dropdown"),x=Symbol("elDropdown"),{ButtonGroup:Ho}=_e,Vo=A({name:"ElDropdown",components:{ElButton:_e,ElButtonGroup:Ho,ElScrollbar:xe,ElDropdownCollection:zo,ElTooltip:eo,ElRovingFocusGroup:Lo,ElOnlyChild:oo,ElIcon:te,ArrowDown:De},props:Ko,emits:["visible-change","click","command"],setup(e,{emit:o}){const s=Te(),n=Z("dropdown"),{t:u}=Ge(),d=y(),a=y(),r=y(null),p=y(null),l=y(null),v=y(null),f=y(!1),b=[g.enter,g.space,g.down],t=C(()=>({maxHeight:we(e.maxHeight)})),m=C(()=>[n.m(_.value)]),c=Ie().value,w=C(()=>e.id||c);re([d,J(e,"trigger")],([i,k],[Y])=>{var ue,de,ce;const Ae=We(k)?k:[k];(ue=Y==null?void 0:Y.$el)!=null&&ue.removeEventListener&&Y.$el.removeEventListener("pointerenter",T),(de=i==null?void 0:i.$el)!=null&&de.removeEventListener&&i.$el.removeEventListener("pointerenter",T),(ce=i==null?void 0:i.$el)!=null&&ce.addEventListener&&Ae.includes("hover")&&i.$el.addEventListener("pointerenter",T)},{immediate:!0}),Ce(()=>{var i,k;(k=(i=d.value)==null?void 0:i.$el)!=null&&k.removeEventListener&&d.value.$el.removeEventListener("pointerenter",T)});function M(){O()}function O(){var i;(i=r.value)==null||i.onClose()}function G(){var i;(i=r.value)==null||i.onOpen()}const _=ze();function L(...i){o("command",...i)}function T(){var i,k;(k=(i=d.value)==null?void 0:i.$el)==null||k.focus()}function z(){}function U(){const i=I(p);i==null||i.focus(),v.value=null}function F(i){v.value=i}function ie(i){f.value||(i.preventDefault(),i.stopImmediatePropagation())}function Q(){o("visible-change",!0)}function j(i){(i==null?void 0:i.type)==="keydown"&&p.value.focus()}function Be(){o("visible-change",!1)}return V(x,{contentRef:p,role:C(()=>e.role),triggerId:w,isUsingKeyboard:f,onItemEnter:z,onItemLeave:U}),V("elDropdown",{instance:s,dropdownSize:_,handleClick:M,commandHandler:L,trigger:J(e,"trigger"),hideOnClick:J(e,"hideOnClick")}),{t:u,ns:n,scrollbar:l,wrapStyle:t,dropdownTriggerKls:m,dropdownSize:_,triggerId:w,triggerKeys:b,currentTabId:v,handleCurrentTabIdChange:F,handlerMainButtonClick:i=>{o("click",i)},handleEntryFocus:ie,handleClose:O,handleOpen:G,handleBeforeShowTooltip:Q,handleShowTooltip:j,handleBeforeHideTooltip:Be,onFocusAfterTrapped:i=>{var k,Y;i.preventDefault(),(Y=(k=p.value)==null?void 0:k.focus)==null||Y.call(k,{preventScroll:!0})},popperRef:r,contentRef:p,triggeringElementRef:d,referenceElementRef:a}}});function jo(e,o,s,n,u,d){var a;const r=h("el-dropdown-collection"),p=h("el-roving-focus-group"),l=h("el-scrollbar"),v=h("el-only-child"),f=h("el-tooltip"),b=h("el-button"),t=h("arrow-down"),m=h("el-icon"),c=h("el-button-group");return S(),H("div",{class:X([e.ns.b(),e.ns.is("disabled",e.disabled)])},[N(f,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":e.trigger==="hover"?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":(a=e.referenceElementRef)==null?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":e.trigger==="hover"?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},qe({content:E(()=>[N(l,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:E(()=>[N(p,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:E(()=>[N(r,null,{default:E(()=>[R(e.$slots,"dropdown")]),_:3})]),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]),_:3},8,["wrap-style","view-class"])]),_:2},[e.splitButton?void 0:{name:"default",fn:E(()=>[N(v,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:E(()=>[R(e.$slots,"default")]),_:3},8,["id","tabindex"])])}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(S(),D(c,{key:0},{default:E(()=>[N(b,q({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:E(()=>[R(e.$slots,"default")]),_:3},16,["size","type","disabled","tabindex","onClick"]),N(b,q({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:E(()=>[N(m,{class:X(e.ns.e("icon"))},{default:E(()=>[N(t)]),_:1},8,["class"])]),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]),_:3})):oe("v-if",!0)],2)}var qo=K(Vo,[["render",jo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Wo=A({name:"DropdownItemImpl",components:{ElIcon:te},props:Fe,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:o}){const s=Z("dropdown"),{role:n}=$(x,void 0),{collectionItemRef:u}=$(Jo,void 0),{collectionItemRef:d}=$(ho,void 0),{rovingFocusGroupItemRef:a,tabIndex:r,handleFocus:p,handleKeydown:l,handleMousedown:v}=$(Oe,void 0),f=$e(u,d,a),b=C(()=>n.value==="menu"?"menuitem":n.value==="navigation"?"link":"button"),t=B(m=>{const{code:c}=m;if(c===g.enter||c===g.space)return m.preventDefault(),m.stopImmediatePropagation(),o("clickimpl",m),!0},l);return{ns:s,itemRef:f,dataset:{[Se]:""},role:b,tabIndex:r,handleFocus:p,handleKeydown:t,handleMousedown:v}}}),Qo=["aria-disabled","tabindex","role"];function Xo(e,o,s,n,u,d){const a=h("el-icon");return S(),H(Xe,null,[e.divided?(S(),H("li",q({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):oe("v-if",!0),Qe("li",q({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=r=>e.$emit("clickimpl",r)),onFocus:o[1]||(o[1]=(...r)=>e.handleFocus&&e.handleFocus(...r)),onKeydown:o[2]||(o[2]=ne((...r)=>e.handleKeydown&&e.handleKeydown(...r),["self"])),onMousedown:o[3]||(o[3]=(...r)=>e.handleMousedown&&e.handleMousedown(...r)),onPointermove:o[4]||(o[4]=r=>e.$emit("pointermove",r)),onPointerleave:o[5]||(o[5]=r=>e.$emit("pointerleave",r))}),[e.icon?(S(),D(a,{key:0},{default:E(()=>[(S(),D(ye(e.icon)))]),_:1})):oe("v-if",!0),R(e.$slots,"default")],16,Qo)],64)}var Zo=K(Wo,[["render",Xo],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const Re=()=>{const e=$("elDropdown",{}),o=C(()=>e==null?void 0:e.dropdownSize);return{elDropdown:e,_elDropdownSize:o}},xo=A({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Uo,ElRovingFocusItem:Ao,ElDropdownItemImpl:Zo},inheritAttrs:!1,props:Fe,emits:["pointermove","pointerleave","click"],setup(e,{emit:o,attrs:s}){const{elDropdown:n}=Re(),u=Te(),d=y(null),a=C(()=>{var t,m;return(m=(t=I(d))==null?void 0:t.textContent)!=null?m:""}),{onItemEnter:r,onItemLeave:p}=$(x,void 0),l=B(t=>(o("pointermove",t),t.defaultPrevented),fe(t=>{if(e.disabled){p(t);return}const m=t.currentTarget;m===document.activeElement||m.contains(document.activeElement)||(r(t),t.defaultPrevented||m==null||m.focus())})),v=B(t=>(o("pointerleave",t),t.defaultPrevented),fe(t=>{p(t)})),f=B(t=>{if(!e.disabled)return o("click",t),t.type!=="keydown"&&t.defaultPrevented},t=>{var m,c,w;if(e.disabled){t.stopImmediatePropagation();return}(m=n==null?void 0:n.hideOnClick)!=null&&m.value&&((c=n.handleClick)==null||c.call(n)),(w=n.commandHandler)==null||w.call(n,e.command,u,t)}),b=C(()=>({...e,...s}));return{handleClick:f,handlePointerMove:l,handlePointerLeave:v,textContent:a,propsAndAttrs:b}}});function en(e,o,s,n,u,d){var a;const r=h("el-dropdown-item-impl"),p=h("el-roving-focus-item"),l=h("el-dropdown-collection-item");return S(),D(l,{disabled:e.disabled,"text-value":(a=e.textValue)!=null?a:e.textContent},{default:E(()=>[N(p,{focusable:!e.disabled},{default:E(()=>[N(r,q(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:E(()=>[R(e.$slots,"default")]),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]),_:3},8,["focusable"])]),_:3},8,["disabled","text-value"])}var Le=K(xo,[["render",en],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const on=A({name:"ElDropdownMenu",props:Mo,setup(e){const o=Z("dropdown"),{_elDropdownSize:s}=Re(),n=s.value,{focusTrapRef:u,onKeydown:d}=$(no,void 0),{contentRef:a,role:r,triggerId:p}=$(x,void 0),{collectionRef:l,getItems:v}=$(Yo,void 0),{rovingFocusGroupRef:f,rovingFocusGroupRootStyle:b,tabIndex:t,onBlur:m,onFocus:c,onMousedown:w}=$(se,void 0),{collectionRef:M}=$(le,void 0),O=C(()=>[o.b("menu"),o.bm("menu",n==null?void 0:n.value)]),G=$e(a,l,u,f,M),_=B(T=>{var z;(z=e.onKeydown)==null||z.call(e,T)},T=>{const{currentTarget:z,code:U,target:F}=T;if(z.contains(F),g.tab===U&&T.stopImmediatePropagation(),T.preventDefault(),F!==I(a)||!Go.includes(U))return;const Q=v().filter(j=>!j.disabled).map(j=>j.ref);Ne.includes(U)&&Q.reverse(),ae(Q)});return{size:n,rovingFocusGroupRootStyle:b,tabIndex:t,dropdownKls:O,role:r,triggerId:p,dropdownListWrapperRef:G,handleKeydown:T=>{_(T),d(T)},onBlur:m,onFocus:c,onMousedown:w}}}),nn=["role","aria-labelledby"];function tn(e,o,s,n,u,d){return S(),H("ul",{ref:e.dropdownListWrapperRef,class:X(e.dropdownKls),style:ee(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:o[0]||(o[0]=(...a)=>e.onBlur&&e.onBlur(...a)),onFocus:o[1]||(o[1]=(...a)=>e.onFocus&&e.onFocus(...a)),onKeydown:o[2]||(o[2]=ne((...a)=>e.handleKeydown&&e.handleKeydown(...a),["self"])),onMousedown:o[3]||(o[3]=ne((...a)=>e.onMousedown&&e.onMousedown(...a),["self"]))},[R(e.$slots,"default")],46,nn)}var Pe=K(on,[["render",tn],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const vn=Ee(qo,{DropdownItem:Le,DropdownMenu:Pe}),gn=he(Le),bn=he(Pe);export{mn as E,gn as a,vn as b,bn as c,pn as o,fn as t};