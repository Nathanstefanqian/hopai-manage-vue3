import{d as P,o as _,q as d,w as o,i as l,a,j as u,g as c,a3 as g,D as B,_ as E,T as F,H,I as N,__tla as T}from"./index-ad2885e5.js";import{E as Y,__tla as A}from"./el-text-45269c8c.js";import{_ as G,__tla as J}from"./index-093bff4a.js";import{_ as K,__tla as L}from"./UploadImg-9ede56f4.js";import{u as M,__tla as O}from"./util-cf2c2633.js";import{d as Q,__tla as R}from"./vuedraggable.umd-791a8cf9.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as S}from"./el-image-viewer-3779b731.js";import{__tla as W}from"./useMessage-db992d55.js";import{__tla as X}from"./el-card-5175ae0f.js";import{__tla as Z}from"./el-collapse-item-15f02243.js";let V,$=Promise.all([(()=>{try{return T}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return R}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{let m,p,i;m={class:"mb-4px flex flex-row gap-4px rounded bg-gray-100 p-8px"},p={class:"flex flex-col items-start justify-between"},i={class:"w-full flex flex-col gap-8px"},V=P({name:"NoticeBarProperty",__name:"property",props:{modelValue:{}},emits:["update:modelValue"],setup(b,{emit:U}){const k={content:[{required:!0,message:"\u8BF7\u8F93\u5165\u516C\u544A",trigger:"blur"}]},C=b,v=U,{formData:e}=M(C.modelValue,v),w=()=>{e.value.contents.push({})};return(ll,r)=>{const j=K,n=B,f=G,x=Y,y=E,h=F,q=H,D=N;return _(),d(D,{"label-width":"80px",model:a(e),rules:k},{default:o(()=>[l(n,{label:"\u516C\u544A\u56FE\u6807",prop:"iconUrl"},{default:o(()=>[l(j,{modelValue:a(e).iconUrl,"onUpdate:modelValue":r[0]||(r[0]=t=>a(e).iconUrl=t),height:"48px"},{tip:o(()=>[u("\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A24 * 24")]),_:1},8,["modelValue"])]),_:1}),l(n,{label:"\u80CC\u666F\u989C\u8272",prop:"backgroundColor"},{default:o(()=>[l(f,{modelValue:a(e).backgroundColor,"onUpdate:modelValue":r[1]||(r[1]=t=>a(e).backgroundColor=t)},null,8,["modelValue"])]),_:1}),l(n,{label:"\u6587\u5B57\u989C\u8272",prop:"\u6587\u5B57\u989C\u8272"},{default:o(()=>[l(f,{modelValue:a(e).textColor,"onUpdate:modelValue":r[2]||(r[2]=t=>a(e).textColor=t)},null,8,["modelValue"])]),_:1}),l(x,{tag:"p"},{default:o(()=>[u(" \u516C\u544A\u5185\u5BB9 ")]),_:1}),l(x,{type:"info",size:"small"},{default:o(()=>[u(" \u62D6\u52A8\u5DE6\u4E0A\u89D2\u7684\u5C0F\u5706\u70B9\u53EF\u4EE5\u8C03\u6574\u70ED\u8BCD\u987A\u5E8F ")]),_:1}),a(e).contents.length?(_(),d(a(Q),{key:0,list:a(e).contents,"item-key":"index",handle:".drag-icon",forceFallback:!0,animation:200,class:"m-t-8px"},{item:o(({element:t,index:z})=>[c("div",m,[c("div",p,[l(y,{icon:"ic:round-drag-indicator",class:"drag-icon cursor-move"}),a(e).contents.length>1?(_(),d(y,{key:0,icon:"ep:delete",class:"cursor-pointer text-red-5",onClick:s=>(I=>{e.value.contents.splice(I,1)})(z)},null,8,["onClick"])):g("",!0)]),c("div",i,[l(h,{modelValue:t.text,"onUpdate:modelValue":s=>t.text=s,placeholder:"\u8BF7\u8F93\u5165\u516C\u544A"},null,8,["modelValue","onUpdate:modelValue"]),l(h,{modelValue:t.url,"onUpdate:modelValue":s=>t.url=s,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5"},null,8,["modelValue","onUpdate:modelValue"])])])]),_:1},8,["list"])):g("",!0),l(n,{"label-width":"0"},{default:o(()=>[l(q,{onClick:w,type:"primary",plain:"",class:"m-t-8px w-full"},{default:o(()=>[u(" \u6DFB\u52A0\u5185\u5BB9 ")]),_:1})]),_:1})]),_:1},8,["model"])}}})});export{$ as __tla,V as default};
