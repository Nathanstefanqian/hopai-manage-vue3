import{aB as te,aC as N,bV as se,aK as ne,d as O,bf as oe,aD as ie,aR as re,dn as ce,r as c,Q as u,a_ as f,au as ue,j as de,o as i,c as d,aE as x,e as T,t as ve,a,n as g,F as $,ad as pe,V as m,l as fe,w as me,ar as ye,aF as ge,ai as we,dp as he,aM as _e,dq as ke,cr as F,dr as Se,ds as be,aG as xe,__tla as ze}from"./index-e69fb82c.js";import{E as Ee,__tla as Be}from"./el-image-viewer-3b74f14e.js";let M,Ce=Promise.all([(()=>{try{return ze}catch{}})(),(()=>{try{return Be}catch{}})()]).then(async()=>{const j=te({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:N([String,Object])},previewSrcList:{type:N(Array),default:()=>se([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7}}),D={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>ne(n),close:()=>!0,show:()=>!0},P=["src","loading"],R={key:0},q=O({name:"ElImage",inheritAttrs:!1});M=xe(ge(O({...q,props:j,emits:D,setup(n,{emit:v}){const l=n;let z="";const{t:H}=oe(),o=ie("image"),K=re(),V=ce(),w=c(),p=c(!1),r=c(!0),h=c(!1),y=c(),s=c(),Y=f&&"loading"in HTMLImageElement.prototype;let _,k;const G=u(()=>[o.e("inner"),S.value&&o.e("preview"),r.value&&o.is("loading")]),Q=u(()=>K.style),J=u(()=>{const{fit:e}=l;return f&&e?{objectFit:e}:{}}),S=u(()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0}),U=u(()=>{const{previewSrcList:e,initialIndex:t}=l;let A=t;return t>e.length-1&&(A=0),A}),E=u(()=>l.loading!=="eager"&&(!Y&&l.loading==="lazy"||l.lazy)),b=()=>{f&&(r.value=!0,p.value=!1,w.value=l.src)};function W(e){r.value=!1,p.value=!1,v("load",e)}function X(e){r.value=!1,p.value=!0,v("error",e)}function B(){Se(y.value,s.value)&&(b(),L())}const C=be(B,200,!0);async function I(){var e;if(!f)return;await we();const{scrollContainer:t}=l;he(t)?s.value=t:_e(t)&&t!==""?s.value=(e=document.querySelector(t))!=null?e:void 0:y.value&&(s.value=ke(y.value)),s.value&&(_=F(s,"scroll",C),setTimeout(()=>B(),100))}function L(){f&&s.value&&C&&(_==null||_(),s.value=void 0)}function Z(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function ee(){S.value&&(k=F("wheel",Z,{passive:!1}),z=document.body.style.overflow,document.body.style.overflow="hidden",h.value=!0,v("show"))}function ae(){k==null||k(),document.body.style.overflow=z,h.value=!1,v("close")}function le(e){v("switch",e)}return ue(()=>l.src,()=>{E.value?(r.value=!0,p.value=!1,L(),I()):b()}),de(()=>{E.value?I():b()}),(e,t)=>(i(),d("div",{ref_key:"container",ref:y,class:g([a(o).b(),e.$attrs.class]),style:ye(a(Q))},[p.value?x(e.$slots,"error",{key:0},()=>[T("div",{class:g(a(o).e("error"))},ve(a(H)("el.image.error")),3)]):(i(),d($,{key:1},[w.value!==void 0?(i(),d("img",pe({key:0},a(V),{src:w.value,loading:e.loading,style:a(J),class:a(G),onClick:ee,onLoad:W,onError:X}),null,16,P)):m("v-if",!0),r.value?(i(),d("div",{key:1,class:g(a(o).e("wrapper"))},[x(e.$slots,"placeholder",{},()=>[T("div",{class:g(a(o).e("placeholder"))},null,2)])],2)):m("v-if",!0)],64)),a(S)?(i(),d($,{key:2},[h.value?(i(),fe(a(Ee),{key:0,"z-index":e.zIndex,"initial-index":a(U),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:ae,onSwitch:le},{default:me(()=>[e.$slots.viewer?(i(),d("div",R,[x(e.$slots,"viewer")])):m("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):m("v-if",!0)],64)):m("v-if",!0)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]))});export{M as E,Ce as __tla};
