import{_ as D,__tla as M}from"./Dialog.vue_vue_type_style_index_0_lang-dccb0a2a.js";import{d as P,g as R,r as s,o as S,l as W,w as r,f as p,a as e,m as _,i as F,e as d,c4 as q,c5 as E,aW as G,z as H,__tla as J}from"./index-e69fb82c.js";import{u as K,__tla as N}from"./useMessage-ac7e9ad3.js";let b,O=Promise.all([(()=>{try{return M}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return N}catch{}})()]).then(async()=>{let m,f,v;m=d("i",{class:"el-icon-upload"},null,-1),f=d("div",{class:"el-upload__text"},[_(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),d("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1),v=d("div",{class:"el-upload__tip",style:{color:"red"}}," \u63D0\u793A\uFF1A\u4EC5\u5141\u8BB8\u5BFC\u5165 jpg\u3001png\u3001gif \u683C\u5F0F\u6587\u4EF6\uFF01 ",-1),b=P({name:"InfraFileForm",__name:"FileForm",emits:["success"],setup(Q,{expose:x,emit:k}){const{t:V}=R(),i=K(),l=s(!1),o=s(!1),h=s(),u=s([]),g=s({path:""}),c=s();x({open:async()=>{l.value=!0,A()}});const j=a=>{g.value.path=a.name},z=()=>{var a;u.value.length!=0?(h.value={Authorization:"Bearer "+q(),"tenant-id":E()},(a=e(c))==null||a.submit()):i.error("\u8BF7\u4E0A\u4F20\u6587\u4EF6")},C=k,U=()=>{var a;l.value=!1,o.value=!1,(a=e(c))==null||a.clearFiles(),i.success(V("common.createSuccess")),C("success")},w=()=>{i.error("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u60A8\u91CD\u65B0\u4E0A\u4F20\uFF01"),o.value=!1},A=()=>{var a;o.value=!1,(a=c.value)==null||a.clearFiles()},B=()=>{i.error("\u6700\u591A\u53EA\u80FD\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\uFF01")};return(a,t)=>{const I=G,y=H,L=D;return S(),W(L,{modelValue:e(l),"onUpdate:modelValue":t[2]||(t[2]=n=>F(l)?l.value=n:null),title:"\u4E0A\u4F20\u6587\u4EF6"},{footer:r(()=>[p(y,{disabled:e(o),type:"primary",onClick:z},{default:r(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),p(y,{onClick:t[1]||(t[1]=n=>l.value=!1)},{default:r(()=>[_("\u53D6 \u6D88")]),_:1})]),default:r(()=>[p(I,{ref_key:"uploadRef",ref:c,"file-list":e(u),"onUpdate:fileList":t[0]||(t[0]=n=>F(u)?u.value=n:null),action:e("https://mp.api.hopai.cn/admin-api/infra/file/upload"),"auto-upload":!1,data:e(g),disabled:e(o),headers:e(h),limit:1,"on-change":j,"on-error":w,"on-exceed":B,"on-success":U,accept:".jpg, .png, .gif",drag:""},{tip:r(()=>[v]),default:r(()=>[m,f]),_:1},8,["file-list","action","data","disabled","headers"])]),_:1},8,["modelValue"])}}})});export{b as _,O as __tla};
