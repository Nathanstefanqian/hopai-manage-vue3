import{d as R,b as j,r as n,f as D,o as F,q as I,w as a,i as r,j as m,a as e,x as P,g as $,H as S,bm as T,m as z,T as A,D as E,I as G,cu as J,__tla as K}from"./index-ad2885e5.js";import{U as L,H as N,c as O,__tla as Q}from"./upload-cf2e531d.js";import{u as W,__tla as X}from"./useMessage-db992d55.js";import{U as Y,__tla as Z}from"./useUpload-d7b0b89e.js";let h,ee=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})()]).then(async()=>{let p;p=$("span",{class:"el-upload__tip",style:{"margin-left":"10px"}},"\u683C\u5F0F\u652F\u6301 MP4\uFF0C\u6587\u4EF6\u5927\u5C0F\u4E0D\u8D85\u8FC7 10MB",-1),h=R({__name:"UploadVideo",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue","uploaded"],setup(b,{emit:v}){const i=W(),k={title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"}],introduction:[{required:!0,message:"\u8BF7\u8F93\u5165\u63CF\u8FF0",trigger:"blur"}]},x=b,_=v,d=j({get:()=>x.modelValue,set(l){_("update:modelValue",l)}}),c=n([]),o=D({type:Y.Video,title:"",introduction:""}),f=n(null),y=n(null),U=()=>{var l;(l=f.value)==null||l.validate(t=>{var u;if(!t)return!1;(u=y.value)==null||u.submit()})},w=l=>{if(l.code!==0)return i.error("\u4E0A\u4F20\u51FA\u9519\uFF1A"+l.msg),!1;c.value=[],o.title="",o.introduction="",d.value=!1,i.notifySuccess("\u4E0A\u4F20\u6210\u529F"),_("uploaded")},q=l=>i.error(`\u4E0A\u4F20\u5931\u8D25: ${l.message}`);return(l,t)=>{const u=S,B=T,C=z,V=A,g=E,H=G,M=J;return F(),I(M,{title:"\u65B0\u5EFA\u89C6\u9891",modelValue:e(d),"onUpdate:modelValue":t[3]||(t[3]=s=>P(d)?d.value=s:null),width:"600px"},{footer:a(()=>[r(u,{onClick:t[2]||(t[2]=s=>d.value=!1)},{default:a(()=>[m("\u53D6 \u6D88")]),_:1}),r(u,{type:"primary",onClick:U},{default:a(()=>[m("\u63D0 \u4EA4")]),_:1})]),default:a(()=>[r(B,{action:e(L),headers:e(N),multiple:"",limit:1,"file-list":e(c),data:e(o),"before-upload":e(O),"on-error":q,"on-success":w,ref_key:"uploadVideoRef",ref:y,"auto-upload":!1,class:"mb-5"},{trigger:a(()=>[r(u,{type:"primary",plain:""},{default:a(()=>[m("\u9009\u62E9\u89C6\u9891")]),_:1})]),tip:a(()=>[p]),_:1},8,["action","headers","file-list","data","before-upload"]),r(C),r(H,{model:e(o),rules:k,ref_key:"uploadFormRef",ref:f},{default:a(()=>[r(g,{label:"\u6807\u9898",prop:"title"},{default:a(()=>[r(V,{modelValue:e(o).title,"onUpdate:modelValue":t[0]||(t[0]=s=>e(o).title=s),placeholder:"\u6807\u9898\u5C06\u5C55\u793A\u5728\u76F8\u5173\u64AD\u653E\u9875\u9762\uFF0C\u5EFA\u8BAE\u586B\u5199\u6E05\u6670\u3001\u51C6\u786E\u3001\u751F\u52A8\u7684\u6807\u9898"},null,8,["modelValue"])]),_:1}),r(g,{label:"\u63CF\u8FF0",prop:"introduction"},{default:a(()=>[r(V,{rows:3,type:"textarea",modelValue:e(o).introduction,"onUpdate:modelValue":t[1]||(t[1]=s=>e(o).introduction=s),placeholder:"\u4ECB\u7ECD\u8BED\u5C06\u5C55\u793A\u5728\u76F8\u5173\u64AD\u653E\u9875\u9762\uFF0C\u5EFA\u8BAE\u586B\u5199\u7B80\u6D01\u660E\u786E\u3001\u6709\u4FE1\u606F\u91CF\u7684\u5185\u5BB9"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}})});export{h as _,ee as __tla};
