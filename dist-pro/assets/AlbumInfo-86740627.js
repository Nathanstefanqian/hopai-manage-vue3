import{d as H,r,G as J,b as K,au as U,Q as L,j as M,ae as T,o as p,c as d,e,n as X,a,f as o,w as V,F as E,k as W,V as Y,t as y,m as Z,i as $,bO as aa,br as ta,cb as la,__tla as ea}from"./index-c0a26e5e.js";import{E as sa,__tla as ra}from"./el-image-bc627c23.js";import{__tla as oa}from"./el-image-viewer-5eb59d31.js";import{d as ua,g as ca,a as ia,__tla as na}from"./index-7ea53bbc.js";import _a,{__tla as pa}from"./PhotoDialog-5ca5bcaa.js";import{u as da,__tla as ma}from"./useMessage-3978ad3b.js";import{E as va,__tla as ga}from"./index-e28dd7ca.js";import{_ as ya}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as fa}from"./useSts-1a9e3f27.js";import{__tla as ha}from"./aliyun-oss-sdk-b1d31391.js";import"./_commonjs-dynamic-modules-3e972b61.js";import"./tool-2ec5870e.js";let F,ba=Promise.all([(()=>{try{return ea}catch{}})(),(()=>{try{return ra}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return ha}catch{}})()]).then(async()=>{let f,h,b,I,k,w,z;f={class:"album"},h={class:"album-layout-scrollbar"},b=["onClick"],I={class:"album-layout-card-image"},k=["onClick"],w={class:"album-layout-card-title"},z={class:"album-footer"},F=ya(H({__name:"AlbumInfo",props:{user:{},photoRef:{type:Boolean},updateFlag:{type:Boolean}},setup(N){const R=da(),x=N,u=r(!1),C=r(0),B=J().params.id,m=r(1),P=r(""),v=r(!1),c=K({pageNo:1,pageSize:7,userId:B});U(()=>x.updateFlag,()=>s()),U(v,()=>{s()});const n=r([]),j=L(()=>({"album-layout":!0,"space-between":n.value.length>4})),s=async()=>{const i=await ca(c);n.value=i.list,n.value.map(async t=>{if(t.coverPhotoId){const g=await ia(t.coverPhotoId);return t.coverPhotoIdUrl=g.url}}),C.value=i.total};return M(()=>s()),(i,t)=>{const g=sa,A=T("Delete"),D=ta,G=la,O=va;return p(),d(E,null,[e("div",f,[e("div",{class:X(a(j))},[o(G,null,{default:V(()=>[e("div",h,[(p(!0),d(E,null,W(a(n),(l,Q)=>(p(),d("div",{class:"album-layout-card",key:Q,onClick:q=>{return i.photoRef?null:(_=l.id,S=l.title,m.value=_,P.value=S,void(u.value=!0));var _,S}},[e("div",I,[o(g,{class:"h-60 w-40 rounded-lg",fit:"cover",src:l.coverPhotoIdUrl},null,8,["src"]),i.photoRef?(p(),d("div",{key:0,class:"album-layout-card-image-delete",onClick:q=>(async _=>{aa.confirm("\u786E\u8BA4\u5220\u9664\u5417?","\u8B66\u544A").then(async()=>{await ua(_),R.success("\u5220\u9664\u6210\u529F"),await s()})})(l.id)},[o(D,null,{default:V(()=>[o(A,{class:"c-#ba2636"})]),_:1})],8,k)):Y("",!0)]),e("div",w,[e("span",null,y(l.title),1)])],8,b))),128))])]),_:1})],2),Z(" "+y(a(u))+" "+y(a(m))+" ",1),e("div",z,[o(O,{onSizeChange:s,onCurrentChange:s,"current-page":a(c).pageNo,"onUpdate:currentPage":t[0]||(t[0]=l=>a(c).pageNo=l),"page-size":a(c).pageSize,"onUpdate:pageSize":t[1]||(t[1]=l=>a(c).pageSize=l),layout:"total, prev, pager, next",total:a(C)},null,8,["current-page","page-size","total"])])]),o(_a,{dialogVisible:a(u),"onUpdate:dialogVisible":t[2]||(t[2]=l=>$(u)?u.value=l:null),albumId:a(m),title:a(P),onSuccess:t[3]||(t[3]=l=>v.value=!a(v))},null,8,["dialogVisible","albumId","title"])],64)}}}),[["__scopeId","data-v-2768d192"]])});export{ba as __tla,F as default};
