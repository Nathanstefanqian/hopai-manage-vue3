import{d as q,u as H,N as z,r as s,A,B as G,a,o as D,q as I,w as l,i as c,x as v,j as S,a3 as L,l as O,ap as d,aq as y,ar as M,as as h,y as Q,z as W,H as X,D as Y,I as J,L as K,__tla as Z}from"./index-ad2885e5.js";import{_ as $,__tla as tt}from"./ContentWrap.vue_vue_type_script_setup_true_lang-22fef0d2.js";import{u as at,__tla as rt}from"./tagsView-1963684a.js";import{g as et,c as _t,u as ct,__tla as ot}from"./spu-e7e965e6.js";import{_ as lt,__tla as it}from"./BasicInfoForm.vue_vue_type_script_setup_true_lang-c88d6eec.js";import{_ as st,__tla as mt}from"./DescriptionForm.vue_vue_type_script_setup_true_lang-c4f61e50.js";import{_ as nt,__tla as ut}from"./OtherSettingsForm.vue_vue_type_script_setup_true_lang-37804f17.js";import{u as pt,__tla as ft}from"./useMessage-db992d55.js";import{__tla as dt}from"./el-card-5175ae0f.js";import{__tla as yt}from"./Descriptions-14b10cd3.js";import{__tla as ht}from"./Descriptions.vue_vue_type_style_index_0_scoped_59d56eec_lang-081a2ab5.js";import{__tla as Pt}from"./el-descriptions-item-ef495b80.js";import{__tla as vt}from"./DictTag.vue_vue_type_script_lang-7bba2a00.js";import"./color-a8b4eb58.js";import{__tla as kt}from"./dict-197e00ae.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as gt}from"./el-image-c4c86403.js";import{__tla as Bt}from"./el-image-viewer-3779b731.js";import{__tla as wt}from"./UploadImgs-e5a28e59.js";import{__tla as Nt}from"./UploadImgs.vue_vue_type_style_index_0_scoped_3658f35e_lang-4e135814.js";import{__tla as bt}from"./UploadImg-9ede56f4.js";import"./tree-ebab458e.js";import{__tla as Ut}from"./index-25ec65bf.js";import{__tla as Dt}from"./ImageViewer.vue_vue_type_script_setup_true_lang-cf41bc24.js";import{__tla as It}from"./index-8839fa37.js";import{__tla as St}from"./SkuList.vue_vue_type_script_setup_true_lang-f8d098e3.js";import{__tla as Ft}from"./UploadFile.vue_vue_type_style_index_0_scoped_113ae07d_lang-06866746.js";import{__tla as Ct}from"./ProductAttributes.vue_vue_type_script_setup_true_lang-e2168a2f.js";import{__tla as Vt}from"./el-text-45269c8c.js";import{__tla as Rt}from"./property-b0b8a9d8.js";import{__tla as xt}from"./ProductPropertyAddForm.vue_vue_type_script_setup_true_lang-89e4bcc7.js";import{__tla as Et}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import{__tla as Tt}from"./spu.data-59979448.js";import{__tla as jt}from"./category-32ab07e6.js";import{__tla as qt}from"./brand-61282f66.js";import{__tla as Ht}from"./index-2d02c7c4.js";import{__tla as zt}from"./useCrudSchemas-5c9297a9.js";import{__tla as At}from"./formRules-7e35ced6.js";import{__tla as Gt}from"./style.css_vue_type_style_index_0_src_true_lang-644b6304.js";import{__tla as Lt}from"./ActivityOrdersSort.vue_vue_type_script_setup_true_lang-2949cf20.js";let F,Ot=Promise.all([(()=>{try{return Z}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return Pt}catch{}})(),(()=>{try{return vt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return Bt}catch{}})(),(()=>{try{return wt}catch{}})(),(()=>{try{return Nt}catch{}})(),(()=>{try{return bt}catch{}})(),(()=>{try{return Ut}catch{}})(),(()=>{try{return Dt}catch{}})(),(()=>{try{return It}catch{}})(),(()=>{try{return St}catch{}})(),(()=>{try{return Ft}catch{}})(),(()=>{try{return Ct}catch{}})(),(()=>{try{return Vt}catch{}})(),(()=>{try{return Rt}catch{}})(),(()=>{try{return xt}catch{}})(),(()=>{try{return Et}catch{}})(),(()=>{try{return Tt}catch{}})(),(()=>{try{return jt}catch{}})(),(()=>{try{return qt}catch{}})(),(()=>{try{return Ht}catch{}})(),(()=>{try{return zt}catch{}})(),(()=>{try{return At}catch{}})(),(()=>{try{return Gt}catch{}})(),(()=>{try{return Lt}catch{}})()]).then(async()=>{F=q({name:"ProductSpuForm",__name:"index",setup(Mt){const{t:k}=O(),g=pt(),{push:C,currentRoute:V}=H(),{params:B,name:R}=z(),{delView:x}=at(),m=s(!1),_=s("basicInfo"),n=s(!1),w=s(),N=s(),b=s(),f=s({name:"",categoryId:void 0,keyword:"",unit:void 0,picUrl:"",sliderPicUrls:[],introduction:"",deliveryTemplateId:void 0,brandId:void 0,specType:!1,subCommissionType:!1,skus:[{price:0,marketPrice:0,costPrice:0,barCode:"",picUrl:"",stock:0,weight:0,volume:0,firstBrokeragePrice:0,secondBrokeragePrice:0}],description:"",sort:0,giveIntegral:0,virtualSalesCount:0,recommendHot:!1,recommendBenefit:!1,recommendBest:!1,recommendNew:!1,recommendGood:!1,activityOrders:[]}),E=async()=>{var u,e,o;m.value=!0;try{await((u=a(w))==null?void 0:u.validate()),await((e=a(N))==null?void 0:e.validate()),await((o=a(b))==null?void 0:o.validate());const t=M(a(f.value));t.skus.forEach(r=>{r.name=t.name,r.price=h(r.price),r.marketPrice=h(r.marketPrice),r.costPrice=h(r.costPrice),r.firstBrokeragePrice=h(r.firstBrokeragePrice),r.secondBrokeragePrice=h(r.secondBrokeragePrice)});const p=[];t.sliderPicUrls.forEach(r=>{typeof r=="object"?p.push(r.url):p.push(r)}),t.sliderPicUrls=p;const P=t;B.id?(await ct(P),g.success(k("common.updateSuccess"))):(await _t(P),g.success(k("common.createSuccess"))),U()}finally{m.value=!1}},U=()=>{x(a(V)),C({name:"ProductSpu"})};return A(async()=>{await(async()=>{var e;R==="ProductSpuDetail"&&(n.value=!0);const u=B.id;if(u){m.value=!0;try{const o=await et(u);(e=o.skus)==null||e.forEach(t=>{n.value?(t.price=d(t.price),t.marketPrice=d(t.marketPrice),t.costPrice=d(t.costPrice),t.firstBrokeragePrice=d(t.firstBrokeragePrice),t.secondBrokeragePrice=d(t.secondBrokeragePrice)):(t.price=y(t.price),t.marketPrice=y(t.marketPrice),t.costPrice=y(t.costPrice),t.firstBrokeragePrice=y(t.firstBrokeragePrice),t.secondBrokeragePrice=y(t.secondBrokeragePrice))}),f.value=o}finally{m.value=!1}}})()}),(u,e)=>{const o=Q,t=W,p=X,P=Y,r=J,T=$,j=K;return G((D(),I(T,null,{default:l(()=>[c(t,{modelValue:a(_),"onUpdate:modelValue":e[3]||(e[3]=i=>v(_)?_.value=i:null)},{default:l(()=>[c(o,{label:"\u5546\u54C1\u4FE1\u606F",name:"basicInfo"},{default:l(()=>[c(lt,{ref_key:"basicInfoRef",ref:w,activeName:a(_),"onUpdate:activeName":e[0]||(e[0]=i=>v(_)?_.value=i:null),"is-detail":a(n),propFormData:a(f)},null,8,["activeName","is-detail","propFormData"])]),_:1}),c(o,{label:"\u5546\u54C1\u8BE6\u60C5",name:"description"},{default:l(()=>[c(st,{ref_key:"descriptionRef",ref:N,activeName:a(_),"onUpdate:activeName":e[1]||(e[1]=i=>v(_)?_.value=i:null),"is-detail":a(n),propFormData:a(f)},null,8,["activeName","is-detail","propFormData"])]),_:1}),c(o,{label:"\u5176\u4ED6\u8BBE\u7F6E",name:"otherSettings"},{default:l(()=>[c(nt,{ref_key:"otherSettingsRef",ref:b,activeName:a(_),"onUpdate:activeName":e[2]||(e[2]=i=>v(_)?_.value=i:null),"is-detail":a(n),propFormData:a(f)},null,8,["activeName","is-detail","propFormData"])]),_:1})]),_:1},8,["modelValue"]),c(r,null,{default:l(()=>[c(P,{style:{float:"right"}},{default:l(()=>[a(n)?L("",!0):(D(),I(p,{key:0,loading:a(m),type:"primary",onClick:E},{default:l(()=>[S(" \u4FDD\u5B58 ")]),_:1},8,["loading"])),c(p,{onClick:U},{default:l(()=>[S("\u8FD4\u56DE")]),_:1})]),_:1})]),_:1})]),_:1})),[[j,a(m)]])}}})});export{Ot as __tla,F as default};
