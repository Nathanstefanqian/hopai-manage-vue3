import{u as M,_ as w,a as A,__tla as F}from"./useTable-78e3a441.js";import{_ as U,__tla as j}from"./ContentWrap.vue_vue_type_script_setup_true_lang-73045fca.js";import{d as O,r as P,A as T,O as q,o as c,c as B,i as _,w as e,a as t,B as i,q as n,j as p,F as H,_ as D,H as E,__tla as G}from"./index-0d81347e.js";import{_ as I,__tla as J}from"./index-5e6b88c6.js";import{a as b,_ as K,__tla as N}from"./MailTemplateForm.vue_vue_type_script_setup_true_lang-5a8c494f.js";import{a as Q,d as V,__tla as W}from"./index-d6648c09.js";import{_ as X,__tla as Y}from"./MailTemplateSendForm.vue_vue_type_script_setup_true_lang-5bd030c1.js";import{__tla as Z}from"./Form-b7197232.js";import{__tla as $}from"./el-virtual-list-3be00d55.js";import{__tla as tt}from"./el-tree-select-f0321f9b.js";import{__tla as at}from"./el-time-select-31fffcb1.js";import{__tla as rt}from"./InputPassword-80bdf34a.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as _t}from"./style.css_vue_type_style_index_0_src_true_lang-6520cd5b.js";import{__tla as et}from"./UploadImg-8f1eb75b.js";import{__tla as lt}from"./el-image-viewer-4844959b.js";import{__tla as ot}from"./index-0046d8ac.js";import"./_commonjs-dynamic-modules-3e972b61.js";import{__tla as ct}from"./useMessage-da459548.js";import{__tla as mt}from"./UploadImgs-9ed1274f.js";import{__tla as st}from"./UploadImgs.vue_vue_type_style_index_0_scoped_985c6000_lang-68b97aca.js";import{__tla as it}from"./UploadFile-c46c4ea0.js";import{__tla as nt}from"./UploadFile.vue_vue_type_style_index_0_scoped_113ae07d_lang-fb7274cf.js";import{__tla as pt}from"./index-f37b1cc6.js";import{__tla as ut}from"./useForm-ddea7b66.js";import"./download-20922b56.js";import{__tla as yt}from"./el-card-3076e2b9.js";import{__tla as ft}from"./Dialog.vue_vue_type_style_index_0_lang-9d93c798.js";import{__tla as ht}from"./formatTime-c18eac7a.js";import{__tla as dt}from"./index-c80ff995.js";import{__tla as gt}from"./formRules-ad0bc375.js";import{__tla as kt}from"./dict-d9e0d1ac.js";import{__tla as St}from"./useCrudSchemas-911286a8.js";import"./tree-ebab458e.js";import{__tla as Ct}from"./DictTag.vue_vue_type_script_lang-7ba127bd.js";import"./color-a8b4eb58.js";let v,Pt=Promise.all([(()=>{try{return F}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return Ct}catch{}})()]).then(async()=>{v=O({name:"SystemMailTemplate",__name:"index",setup(bt){const{tableObject:l,tableMethods:u}=M({getListApi:Q,delListApi:V}),{getList:y,setSearchParams:f}=u,h=P(),d=(k,a)=>{h.value.open(k,a)},g=P();return T(()=>{y()}),(k,a)=>{const z=I,L=D,m=E,R=w,S=U,x=A,s=q("hasPermi");return c(),B(H,null,[_(z,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://doc.iocoder.cn/mail"}),_(S,null,{default:e(()=>[_(R,{schema:t(b).searchSchema,onSearch:t(f),onReset:t(f)},{actionMore:e(()=>[i((c(),n(m,{type:"primary",plain:"",onClick:a[0]||(a[0]=r=>d("create"))},{default:e(()=>[_(L,{icon:"ep:plus",class:"mr-5px"}),p(" \u65B0\u589E ")]),_:1})),[[s,["system:mail-account:create"]]])]),_:1},8,["schema","onSearch","onReset"])]),_:1}),_(S,null,{default:e(()=>[_(x,{columns:t(b).tableColumns,data:t(l).tableList,loading:t(l).loading,pagination:{total:t(l).total},pageSize:t(l).pageSize,"onUpdate:pageSize":a[1]||(a[1]=r=>t(l).pageSize=r),currentPage:t(l).currentPage,"onUpdate:currentPage":a[2]||(a[2]=r=>t(l).currentPage=r)},{action:e(({row:r})=>[i((c(),n(m,{link:"",type:"primary",onClick:C=>{return o=r.id,void g.value.open(o);var o}},{default:e(()=>[p(" \u6D4B\u8BD5 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:send-mail"]]]),i((c(),n(m,{link:"",type:"primary",onClick:C=>d("update",r.id)},{default:e(()=>[p(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:update"]]]),i((c(),n(m,{link:"",type:"danger",onClick:C=>{return o=r.id,void u.delList(o,!1);var o}},{default:e(()=>[p(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[s,["system:mail-template:delete"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),_(K,{ref_key:"formRef",ref:h,onSuccess:t(y)},null,8,["onSuccess"]),_(X,{ref_key:"sendFormRef",ref:g},null,512)],64)}}})});export{Pt as __tla,v as default};
