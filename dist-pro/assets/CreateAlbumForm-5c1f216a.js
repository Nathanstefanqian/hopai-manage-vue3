import{d as j,G as B,r as u,b as v,ae as J,o as i,l as b,w as l,f as a,m as L,p as P,a as e,e as V,c as x,k as S,F as K,i as N,M as Q,x as T,br as W,cb as X,A as Z,z as $,ca as tt,D as et,__tla as at}from"./index-c0a26e5e.js";import{E as lt,__tla as rt}from"./el-image-bc627c23.js";import{__tla as st}from"./el-image-viewer-5eb59d31.js";import ot,{__tla as ut}from"./UploadFiles-54e087c6.js";import{c as it,__tla as _t}from"./index-7ea53bbc.js";import{u as ct,__tla as mt}from"./useMessage-3978ad3b.js";import{_ as dt}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as pt}from"./useSts-1a9e3f27.js";import{__tla as nt}from"./aliyun-oss-sdk-b1d31391.js";import"./_commonjs-dynamic-modules-3e972b61.js";import"./tool-2ec5870e.js";let g,ft=Promise.all([(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return nt}catch{}})()]).then(async()=>{let m,d;m={class:"photo-scrollbar"},d=["onClick"],g=dt(j({__name:"CreateAlbumForm",emits:["success"],setup(ht,{expose:k,emit:C}){const w=ct(),p=B().params.id,o=u(!1),n=u(""),_=u(!1),t=v({title:"",photoList:[]}),A=v({title:[{required:!0,message:"\u4F5C\u54C1\u96C6\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],photoList:[{required:!0,message:"\u4F5C\u54C1\u96C6\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),c=u();k({open:async D=>{o.value=!0,n.value="\u65B0\u589E\u4F5C\u54C1\u96C6",q()}});const I=C,U=async()=>{if(c&&await c.value.validate()){_.value=!0;try{await it({userId:p,title:t.title,sortOrder:1,urlList:t.photoList}),w.success("\u521B\u5EFA\u6210\u529F"),o.value=!1,I("success")}finally{_.value=!1}}},q=()=>{t.title="",t.photoList=[]};return(D,r)=>{const F=Q,f=T,z=lt,E=J("Delete"),G=W,H=X,M=Z,h=$,O=tt,R=et;return i(),b(O,{title:e(n),modelValue:e(o),"onUpdate:modelValue":r[3]||(r[3]=s=>N(o)?o.value=s:null)},{footer:l(()=>[a(h,{type:"primary",text:"",onClick:U},{default:l(()=>[L("\u63D0\u4EA4")]),_:1}),a(h,{text:"",onClick:r[2]||(r[2]=s=>o.value=!1)},{default:l(()=>[L("\u53D6\u6D88")]),_:1})]),default:l(()=>[P((i(),b(M,{ref_key:"createAlbumFormRef",ref:c,model:e(t),rules:e(A),"label-width":"100px"},{default:l(()=>[a(f,{label:"\u4F5C\u54C1\u96C6\u540D\u79F0",prop:"title"},{default:l(()=>[a(F,{modelValue:e(t).title,"onUpdate:modelValue":r[0]||(r[0]=s=>e(t).title=s),placeholder:"\u8BF7\u8F93\u5165\u4F5C\u54C1\u96C6\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(f,{label:"\u4F5C\u54C1\u96C6",prop:"photoList"},{default:l(()=>[a(H,null,{default:l(()=>[V("div",m,[a(ot,{modelValue:e(t).photoList,"onUpdate:modelValue":r[1]||(r[1]=s=>e(t).photoList=s),userId:e(p)},null,8,["modelValue","userId"]),(i(!0),x(K,null,S(e(t).photoList,(s,y)=>(i(),x("div",{class:"photo-scrollbar-item",key:y},[a(z,{class:"mr-10 h-240px w-160px rounded-lg",fit:"cover",src:s},null,8,["src"]),V("div",{class:"photo-delete",onClick:yt=>(Y=>{t.photoList.splice(Y,1)})(y)},[a(G,null,{default:l(()=>[a(E,{class:"c-#ba2636"})]),_:1})],8,d)]))),128))])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[R,e(_)]])]),_:1},8,["title","modelValue"])}}}),[["__scopeId","data-v-85aeedf9"]])});export{ft as __tla,g as default};
