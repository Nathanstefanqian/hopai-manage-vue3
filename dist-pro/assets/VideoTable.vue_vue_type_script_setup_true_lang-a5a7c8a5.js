import{d as h,O as C,B as p,o as r,q as n,w as l,i as a,a as _,a3 as x,g as T,t as v,j as c,J as B,_ as j,H as P,K as q,L as H,__tla as I}from"./index-ad2885e5.js";import{_ as J,__tla as K}from"./main.vue_vue_type_script_setup_true_lang-3afeb989.js";import{d as L,__tla as O}from"./formatTime-7d212ed5.js";let m,V=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{m=h({__name:"VideoTable",props:{list:{},loading:{type:Boolean}},emits:["delete","download"],setup(u,{emit:f}){const o=u,g=f;return(z,A)=>{const e=B,i=j,s=P,w=q,y=C("hasPermi"),b=H;return p((r(),n(w,{data:o.list,stripe:"",border:"",style:{"margin-top":"10px"}},{default:l(()=>[a(e,{label:"\u7F16\u53F7",align:"center",prop:"mediaId"}),a(e,{label:"\u6587\u4EF6\u540D",align:"center",prop:"name"}),a(e,{label:"\u6807\u9898",align:"center",prop:"title"}),a(e,{label:"\u4ECB\u7ECD",align:"center",prop:"introduction"}),a(e,{label:"\u89C6\u9891",align:"center"},{default:l(t=>[t.row.url?(r(),n(_(J),{key:0,url:t.row.url},null,8,["url"])):x("",!0)]),_:1}),a(e,{label:"\u4E0A\u4F20\u65F6\u95F4",align:"center",formatter:_(L),prop:"createTime",width:"180"},{default:l(t=>[T("span",null,v(t.row.createTime),1)]),_:1},8,["formatter"]),a(e,{label:"\u64CD\u4F5C",align:"center",fixed:"right"},{default:l(t=>[a(s,{type:"primary",link:"",onClick:k=>{return d=t.row.url,void window.open(d,"_blank");var d}},{default:l(()=>[a(i,{icon:"ep:download"}),c("\u4E0B\u8F7D ")]),_:2},1032,["onClick"]),p((r(),n(s,{type:"primary",link:"",onClick:k=>g("delete",t.row.id)},{default:l(()=>[a(i,{icon:"ep:delete"}),c("\u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["mp:material:delete"]]])]),_:1})]),_:1},8,["data"])),[[b,o.loading]])}}})});export{m as _,V as __tla};
