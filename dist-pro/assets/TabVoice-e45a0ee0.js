import{d as B,cn as E,b as H,r as V,f as T,o as n,c as I,a as r,g as w,t as W,i as a,w as l,q as O,j as g,x as P,n as R,_ as D,H as F,ct as G,E as J,bl as K,$ as L,a0 as N,__tla as Q}from"./index-03db6098.js";import{W as X,__tla as Y}from"./main-1a9b9d3c.js";import Z,{__tla as aa}from"./main-8b2922f9.js";import{u as ta,U as ea,__tla as la}from"./useUpload-afd44646.js";import{u as ra,__tla as _a}from"./useMessage-3de53a8e.js";import{_ as sa}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ca}from"./index.vue_vue_type_script_setup_true_lang-ac924d97.js";import{__tla as oa}from"./index-f44a5e06.js";import{__tla as ua}from"./main-d84a90a0.js";import{__tla as ia}from"./el-image-54b9c8f4.js";import{__tla as na}from"./el-image-viewer-7e78a713.js";import{__tla as ma}from"./main.vue_vue_type_script_setup_true_lang-c1278dab.js";import{__tla as da}from"./index-763e6656.js";import{__tla as pa}from"./index-155caa2f.js";import{__tla as fa}from"./formatTime-c52167d0.js";let k,ya=Promise.all([(()=>{try{return Q}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return fa}catch{}})()]).then(async()=>{let m,d,p;m={key:0,class:"select-item2"},d={class:"item-name"},p=(_=>(L("data-v-4ce36eb4"),_=_(),N(),_))(()=>w("div",{class:"el-upload__tip"}," \u683C\u5F0F\u652F\u6301 mp3/wma/wav/amr\uFF0C\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 2M\uFF0C\u64AD\u653E\u957F\u5EA6\u4E0D\u8D85\u8FC7 60s ",-1)),k=sa(B({__name:"TabVoice",props:{modelValue:{}},emits:["update:modelValue"],setup(_,{emit:x}){const j=ra(),C={Authorization:"Bearer "+E()},M=_,S=x,e=H({get:()=>M.modelValue,set:t=>S("update:modelValue",t)}),s=V(!1),f=V([]),o=T({accountId:e.value.accountId,type:"voice",title:"",introduction:""}),U=t=>ta(ea.Voice,10)(t),$=t=>{if(t.code!==0)return j.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+t.msg),!1;f.value=[],o.title="",o.introduction="",y(t.data)},q=()=>{e.value.mediaId=null,e.value.url=null,e.value.name=null},y=t=>{s.value=!1,e.value.mediaId=t.mediaId,e.value.url=t.url,e.value.name=t.name};return(t,c)=>{const u=R,h=D,i=F,z=G,v=J,A=K;return n(),I("div",null,[r(e).url?(n(),I("div",m,[w("p",d,W(r(e).name),1),a(u,{class:"ope-row",justify:"center"},{default:l(()=>[a(r(Z),{url:r(e).url},null,8,["url"])]),_:1}),a(u,{class:"ope-row",justify:"center"},{default:l(()=>[a(i,{type:"danger",circle:"",onClick:q},{default:l(()=>[a(h,{icon:"ep:delete"})]),_:1})]),_:1})])):(n(),O(u,{key:1,style:{"text-align":"center"}},{default:l(()=>[a(v,{span:12,class:"col-select"},{default:l(()=>[a(i,{type:"success",onClick:c[0]||(c[0]=b=>s.value=!0)},{default:l(()=>[g(" \u7D20\u6750\u5E93\u9009\u62E9"),a(h,{icon:"ep:circle-check"})]),_:1}),a(z,{title:"\u9009\u62E9\u8BED\u97F3",modelValue:r(s),"onUpdate:modelValue":c[1]||(c[1]=b=>P(s)?s.value=b:null),width:"90%","append-to-body":"","destroy-on-close":""},{default:l(()=>[a(r(X),{type:"voice","account-id":r(e).accountId,onSelectMaterial:y},null,8,["account-id"])]),_:1},8,["modelValue"])]),_:1}),a(v,{span:12,class:"col-add"},{default:l(()=>[a(A,{action:"/admin-api/mp/material/upload-temporary",headers:C,multiple:"",limit:1,"file-list":r(f),data:r(o),"before-upload":U,"on-success":$},{tip:l(()=>[p]),default:l(()=>[a(i,{type:"primary"},{default:l(()=>[g("\u70B9\u51FB\u4E0A\u4F20")]),_:1})]),_:1},8,["file-list","data"])]),_:1})]),_:1}))])}}}),[["__scopeId","data-v-4ce36eb4"]])});export{ya as __tla,k as default};
