import{d as y,b as V,r as x,A as h,o as l,q as m,w as o,c as g,F as w,k as M,a as _,g as k,i as j,j as L,t as S,x as q,M as z,C as A,__tla as C}from"./index-ad2885e5.js";import{E,__tla as F}from"./el-avatar-dd0c8598.js";import{a as N,__tla as P}from"./index-be5039bc.js";let c,U=Promise.all([(()=>{try{return C}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return P}catch{}})()]).then(async()=>{let t;t={class:"flex items-center gap-x-8px"},c=y({name:"MemberLevelSelect",__name:"MemberLevelSelect",props:{modelValue:{type:Number,default:void 0}},emits:["update:modelValue"],setup(n,{emit:d}){const p=n,i=d,e=V({get:()=>p.modelValue,set(r){i("update:modelValue",r)}}),s=x([]);return h(()=>{(async()=>s.value=await N())()}),(r,u)=>{const b=E,f=z,v=A;return l(),m(v,{modelValue:_(e),"onUpdate:modelValue":u[0]||(u[0]=a=>q(e)?e.value=a:null),placeholder:"\u8BF7\u9009\u62E9\u7528\u6237\u7B49\u7EA7",clearable:"",class:"!w-240px"},{default:o(()=>[(l(!0),g(w,null,M(_(s),a=>(l(),m(f,{key:a.id,label:a.name,value:a.id},{default:o(()=>[k("span",t,[j(b,{src:a.icon,size:"small"},null,8,["src"]),L(" "+S(a.name),1)])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue"])}}})});export{c as _,U as __tla};
