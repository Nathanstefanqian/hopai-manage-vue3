import{d as U,N as V,u as q,r as f,A,aw as H,a as r,O as T,o as p,c as E,B as C,g as d,i as a,q as I,w as l,j as t,t as y,F as J,H as K,_ as W,n as Y,y as G,dN as Q,z as X,E as Z,L as $,__tla as aa}from"./index-03db6098.js";import{_ as la,__tla as ta}from"./ContentWrap.vue_vue_type_script_setup_true_lang-a0ae01cb.js";import{E as ea,a as ra,__tla as _a}from"./el-descriptions-item-22b6c8aa.js";import{_ as sa,__tla as ua}from"./DictTag.vue_vue_type_script_lang-708b6aad.js";import{u as ca,__tla as na}from"./tagsView-acf9b02c.js";import{_ as ma,g as oa,__tla as ia}from"./CustomerForm.vue_vue_type_script_setup_true_lang-f74333b6.js";import{_ as fa,__tla as pa}from"./CustomerBasicInfo.vue_vue_type_script_setup_true_lang-00f566ed.js";import{D as da,__tla as ya}from"./dict-9d6b3d0a.js";import{_ as ba,__tla as ha}from"./CustomerDetails.vue_vue_type_script_setup_true_lang-f83924bb.js";import{__tla as va}from"./el-card-cbdeb4d9.js";import"./color-a8b4eb58.js";import{__tla as xa}from"./Dialog.vue_vue_type_style_index_0_lang-0ea1a6f5.js";import{__tla as za}from"./el-tree-select-e4159617.js";import{__tla as wa}from"./index-28380650.js";import"./tree-ebab458e.js";import{__tla as Ea}from"./index-f4b39eba.js";import{__tla as Ca}from"./useMessage-3de53a8e.js";import{__tla as La}from"./el-collapse-item-b2684441.js";import{__tla as Na}from"./formatTime-c52167d0.js";let L,Ra=Promise.all([(()=>{try{return aa}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return na}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return wa}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return La}catch{}})(),(()=>{try{return Na}catch{}})()]).then(async()=>{let b;b={class:"flex items-start justify-between"},L=U({name:"CustomerDetail",__name:"index",setup(Sa){const{delView:N}=ca(),R=V(),{currentRoute:S}=q(),o=Number(R.params.id),i=f(!0),s=f({}),h=async x=>{i.value=!0;try{s.value=await oa(x)}finally{i.value=!1}},v=f();return A(()=>{if(!o)return H.warning("\u53C2\u6570\u9519\u8BEF\uFF0C\u5BA2\u6237\u4E0D\u80FD\u4E3A\u7A7A\uFF01"),void N(r(S));h(o)}),(x,n)=>{const _=K,u=W,g=Y,k=sa,c=ea,B=ra,O=la,e=G,m=Q,j=X,D=Z,F=T("hasPermi"),M=$;return p(),E(J,null,[C((p(),E("div",null,[d("div",b,[d("div",null,[a(fa,{customer:r(s)},null,8,["customer"])]),d("div",null,[C((p(),I(_,{onClick:n[0]||(n[0]=P=>{return z="update",w=r(s).id,void v.value.open(z,w);var z,w})},{default:l(()=>[t(" \u7F16\u8F91 ")]),_:1})),[[F,["crm:customer:update"]]]),a(_,null,{default:l(()=>[t("\u66F4\u6539\u6210\u4EA4\u72B6\u6001")]),_:1})])]),a(g,{class:"mt-10px"},{default:l(()=>[a(_,null,{default:l(()=>[a(u,{icon:"ph:calendar-fill",class:"mr-5px"}),t(" \u521B\u5EFA\u4EFB\u52A1 ")]),_:1}),a(_,null,{default:l(()=>[a(u,{icon:"carbon:email",class:"mr-5px"}),t(" \u53D1\u9001\u90AE\u4EF6 ")]),_:1}),a(_,null,{default:l(()=>[a(u,{icon:"system-uicons:contacts",class:"mr-5px"}),t(" \u521B\u5EFA\u8054\u7CFB\u4EBA ")]),_:1}),a(_,null,{default:l(()=>[a(u,{icon:"ep:opportunity",class:"mr-5px"}),t(" \u521B\u5EFA\u5546\u673A ")]),_:1}),a(_,null,{default:l(()=>[a(u,{icon:"clarity:contract-line",class:"mr-5px"}),t(" \u521B\u5EFA\u5408\u540C ")]),_:1}),a(_,null,{default:l(()=>[a(u,{icon:"icon-park:income-one",class:"mr-5px"}),t(" \u521B\u5EFA\u56DE\u6B3E ")]),_:1}),a(_,null,{default:l(()=>[a(u,{icon:"fluent:people-team-add-20-filled",class:"mr-5px"}),t(" \u6DFB\u52A0\u56E2\u961F\u6210\u5458 ")]),_:1})]),_:1})])),[[M,r(i)]]),a(O,{class:"mt-10px"},{default:l(()=>[a(B,{column:5,direction:"vertical"},{default:l(()=>[a(c,{label:"\u5BA2\u6237\u7EA7\u522B"},{default:l(()=>[a(k,{type:r(da).CRM_CUSTOMER_LEVEL,value:r(s).level},null,8,["type","value"])]),_:1}),a(c,{label:"\u6210\u4EA4\u72B6\u6001"},{default:l(()=>[t(y(r(s).dealStatus?"\u5DF2\u6210\u4EA4":"\u672A\u6210\u4EA4"),1)]),_:1}),a(c,{label:"\u8D1F\u8D23\u4EBA"},{default:l(()=>[t(y(r(s).ownerUserName),1)]),_:1}),a(c,{label:"\u9996\u8981\u8054\u7CFB\u4EBA"}),a(c,{label:"\u9996\u8981\u8054\u7CFB\u4EBA\u7535\u8BDD"},{default:l(()=>[t(y(r(s).mobile),1)]),_:1})]),_:1})]),_:1}),a(D,{span:18},{default:l(()=>[a(j,null,{default:l(()=>[a(e,{label:"\u8BE6\u7EC6\u8D44\u6599"},{default:l(()=>[a(ba,{class:"ml-2",customer:r(s)},null,8,["customer"])]),_:1}),a(e,{label:"\u6D3B\u52A8",lazy:""},{default:l(()=>[t(" \u6D3B\u52A8")]),_:1}),a(e,{label:"\u90AE\u4EF6",lazy:""},{default:l(()=>[t(" \u90AE\u4EF6")]),_:1}),a(e,{label:"\u5DE5\u5546\u4FE1\u606F",lazy:""},{default:l(()=>[t(" \u5DE5\u5546\u4FE1\u606F")]),_:1}),a(e,{label:"\u5BA2\u6237\u5173\u7CFB",lazy:""},{default:l(()=>[t(" \u5BA2\u6237\u5173\u7CFB")]),_:1}),a(e,{label:"\u8054\u7CFB\u4EBA",lazy:""},{label:l(()=>[t(" \u8054\u7CFB\u4EBA"),a(m,{value:12,class:"item",type:"primary"})]),default:l(()=>[t(" \u8054\u7CFB\u4EBA ")]),_:1}),a(e,{label:"\u56E2\u961F\u6210\u5458",lazy:""},{label:l(()=>[t(" \u56E2\u961F\u6210\u5458"),a(m,{value:2,class:"item",type:"primary"})]),default:l(()=>[t(" \u56E2\u961F\u6210\u5458 ")]),_:1}),a(e,{label:"\u5546\u673A",lazy:""},{default:l(()=>[t(" \u5546\u673A")]),_:1}),a(e,{label:"\u5408\u540C",lazy:""},{label:l(()=>[t(" \u5408\u540C"),a(m,{value:3,class:"item",type:"primary"})]),default:l(()=>[t(" \u5408\u540C ")]),_:1}),a(e,{label:"\u56DE\u6B3E",lazy:""},{label:l(()=>[t(" \u56DE\u6B3E"),a(m,{value:4,class:"item",type:"primary"})]),default:l(()=>[t(" \u56DE\u6B3E ")]),_:1}),a(e,{label:"\u56DE\u8BBF",lazy:""},{default:l(()=>[t(" \u56DE\u8BBF")]),_:1}),a(e,{label:"\u53D1\u7968",lazy:""},{default:l(()=>[t(" \u53D1\u7968")]),_:1})]),_:1})]),_:1}),a(ma,{ref_key:"formRef",ref:v,onSuccess:n[1]||(n[1]=P=>h(r(o)))},null,512)],64)}}})});export{Ra as __tla,L as default};
