import{d as D,Q as F,o,c as u,f as m,w as E,e as k,n as w,m as L,t as U,a as p,V as h,i as Q,F as S,_ as q,__tla as z}from"./index-e69fb82c.js";import{d as $,__tla as B}from"./vuedraggable.umd-9141518a.js";import{_ as G}from"./_plugin-vue_export-helper-1b428a4d.js";let M,H=Promise.all([(()=>{try{return z}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let I,x,g,y,b,V;I={class:"menu_bottom"},x=["onClick"],g={key:0,class:"submenu"},y={class:"menu_bottom subtitle"},b=["onClick"],V=["onClick"],M=G(D({__name:"MenuPreviewer",props:{modelValue:{},activeIndex:{},parentIndex:{},accountId:{}},emits:["update:modelValue","menu-clicked","submenu-clicked"],setup(N,{emit:O}){const d=N,i=O,s=F({get:()=>d.modelValue,set:n=>i("update:modelValue",n)}),P=()=>{const n=s.value.length,l={name:"\u83DC\u5355\u540D\u79F0",children:[],reply:{type:"text",accountId:d.accountId}};s.value[n]=l,f(l,n-1)},f=(n,l)=>{i("menu-clicked",n,l)},C=(n,l,a)=>{i("submenu-clicked",n,l,a)},T=({oldIndex:n,newIndex:l})=>{if(d.activeIndex==="__MENU_NOT_SELECTED__")return;let a=new Array(s.value.length).fill(!1);a[d.parentIndex]=!0;const[e]=a.splice(n,1);a.splice(l,0,e);const t=a.indexOf(!0),c=s.value[t];i("menu-clicked",c,t)},j=({newIndex:n})=>{var t;const l=d.parentIndex,a=n,e=(t=s.value[l])==null?void 0:t.children;if(e&&(e==null?void 0:e.length)>0){const c=e[a];i("submenu-clicked",c,l,a)}};return(n,l)=>{const a=q;return o(),u(S,null,[m(p($),{modelValue:p(s),"onUpdate:modelValue":l[0]||(l[0]=e=>Q(s)?s.value=e:null),"item-key":"id","ghost-class":"draggable-ghost",animation:400,onEnd:T},{item:E(({element:e,index:t})=>[k("div",I,[k("div",{onClick:c=>f(e,t),class:w(["menu_item",{active:d.activeIndex===`${t}`}])},[m(a,{icon:"ep:fold",color:"black"}),L(U(e.name),1)],10,x),d.parentIndex===t&&e.children?(o(),u("div",g,[m(p($),{modelValue:e.children,"onUpdate:modelValue":c=>e.children=c,"item-key":"id","ghost-class":"draggable-ghost",animation:400,onEnd:j},{item:E(({element:c,index:r})=>[k("div",y,[e.children?(o(),u("div",{key:0,class:w(["menu_subItem",{active:d.activeIndex===`${t}-${r}`}]),onClick:_=>C(c,t,r)},U(c.name),11,b)):h("",!0)])]),_:2},1032,["modelValue","onUpdate:modelValue"]),!e.children||e.children.length<5?(o(),u("div",{key:0,class:"menu_bottom menu_addicon",onClick:c=>((r,_)=>{const v=_.children.length,A={name:"\u5B50\u83DC\u5355\u540D\u79F0",reply:{type:"text",accountId:d.accountId}};_.children[v]=A,C(_.children[v],r,v)})(t,e)},[m(a,{icon:"ep:plus",class:"plus"})],8,V)):h("",!0)])):h("",!0)])]),_:1},8,["modelValue"]),p(s).length<3?(o(),u("div",{key:0,class:"menu_bottom menu_addicon",onClick:P},[m(a,{icon:"ep:plus",class:"plus"})])):h("",!0)],64)}}}),[["__scopeId","data-v-7c5212d5"]])});export{H as __tla,M as default};
