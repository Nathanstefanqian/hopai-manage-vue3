import{d as g,r as f,o as a,c as r,i as e,w as i,F as v,k as b,q as k,t as n,a as w,a3 as j,_ as C,__tla as E}from"./index-ad2885e5.js";import{E as q,a as F,__tla as P}from"./el-carousel-item-dee5f3db.js";import{E as U,__tla as z}from"./el-image-c4c86403.js";import{__tla as A}from"./el-image-viewer-3779b731.js";let c,B=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return P}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return A}catch{}})()]).then(async()=>{let s,l,p;s={key:0,class:"h-250px flex items-center justify-center bg-gray-3"},l={key:1,class:"relative"},p={key:0,class:"absolute p-y-2px bottom-10px right-10px rounded-xl bg-black p-x-8px text-10px text-white opacity-40"},c=g({name:"Carousel",__name:"index",props:{property:{}},setup(D){const o=f(0),y=t=>{o.value=t+1};return(t,G)=>{const _=C,u=U,m=q,d=F;return t.property.items.length===0?(a(),r("div",s,[e(_,{icon:"tdesign:image",class:"text-gray-8 text-120px!"})])):(a(),r("div",l,[e(d,{height:"174px",type:t.property.type==="card"?"card":"",autoplay:t.property.autoplay,interval:1e3*t.property.interval,"indicator-position":t.property.indicator==="number"?"none":void 0,onChange:y},{default:i(()=>[(a(!0),r(v,null,b(t.property.items,(x,h)=>(a(),k(m,{key:h},{default:i(()=>[e(u,{class:"h-full w-full",src:x.imgUrl},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["type","autoplay","interval","indicator-position"]),t.property.indicator==="number"?(a(),r("div",p,n(w(o))+" / "+n(t.property.items.length),1)):j("",!0)]))}}})});export{B as __tla,c as default};
