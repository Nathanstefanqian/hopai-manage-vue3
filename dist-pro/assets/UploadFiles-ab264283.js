import{d as j,r as n,j as x,ae as C,o as P,c as U,e as _,f as i,w as $,br as A,__tla as F}from"./index-456ccb5c.js";import{u as O,__tla as S}from"./useSts-1199f4d2.js";import{m as T}from"./tool-2ec5870e.js";import{u as q,__tla as z}from"./useMessage-59021f66.js";import{_ as B}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as D}from"./aliyun-oss-sdk-a3e481f3.js";import"./_commonjs-dynamic-modules-3e972b61.js";let m,E=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return D}catch{}})()]).then(async()=>{m=B(j({__name:"UploadFiles",props:{modelValue:{},userId:{}},emits:["update:modelValue"],setup(c,{emit:p}){const{getStsToken:d,put:f,signatrueUrl:y}=O("user-portrait"),h=q(),l=c,g=p,o=n(null),v=()=>{var t;(t=o.value)==null||t.click()},b=async t=>{const r=t.target.files;if(!r)return;const s=Array.from(r),a=n([]);for(const w of s){const I=T(),u=`${l.userId}/${I}.jpg`;await f(u,w);let e=await y(u),V=e.indexOf("?");e=e.substring(0,V),a.value.push(e)}h.success("\u4E0A\u4F20\u6210\u529F");const k=[...a.value,...l.modelValue];g("update:modelValue",k)};return x(()=>{d()}),(t,r)=>{const s=C("Plus"),a=A;return P(),U("div",null,[_("div",{class:"photo-add mb-10 mr-10 h-60 w-40 rounded-lg",onClick:v},[i(a,null,{default:$(()=>[i(s)]),_:1})]),_("input",{type:"file",multiple:"",ref_key:"fileInput",ref:o,onChange:b,style:{display:"none"}},null,544)])}}}),[["__scopeId","data-v-f45b7246"]])});export{E as __tla,m as default};
