import{d as W,l as X,r as _,f as Z,A as $,O as ee,o as s,c as K,i as e,w as l,a as t,P as O,F as R,k as ae,q as p,j as i,B as d,T as te,D as le,M as re,C as oe,G as se,_ as ne,H as ce,I as _e,J as pe,K as ie,L as ue,__tla as me}from"./index-ad2885e5.js";import{_ as de,__tla as fe}from"./index.vue_vue_type_script_setup_true_lang-8fc12eb8.js";import{_ as ye,__tla as he}from"./DictTag.vue_vue_type_script_lang-7bba2a00.js";import{_ as ge,__tla as be}from"./ContentWrap.vue_vue_type_script_setup_true_lang-22fef0d2.js";import{_ as ke,__tla as we}from"./index-bdf1e881.js";import{a as ve,D as H,__tla as Ce}from"./dict-197e00ae.js";import{d as xe,__tla as Se}from"./formatTime-7d212ed5.js";import{d as Ve}from"./download-20922b56.js";import{b as Te,d as Me,e as Ue,__tla as Ne}from"./index-b0127fdc.js";import{_ as De,__tla as Pe}from"./RoleForm.vue_vue_type_script_setup_true_lang-a1f1fd6d.js";import Fe,{__tla as Ke}from"./RoleAssignMenuForm-79fbe565.js";import{_ as Oe,__tla as Re}from"./RoleDataPermissionForm.vue_vue_type_script_setup_true_lang-5eb2d522.js";import{u as He,__tla as Ie}from"./useMessage-db992d55.js";import{__tla as Ye}from"./index-d8b2d492.js";import"./color-a8b4eb58.js";import{__tla as qe}from"./el-card-5175ae0f.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ze}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import"./constants-3cc050b6.js";import"./tree-ebab458e.js";import{__tla as Ae}from"./index-822e0569.js";import{__tla as je}from"./index-b5bb3fb8.js";import{__tla as Be}from"./index-a3778cf9.js";let I,Ge=Promise.all([(()=>{try{return me}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return Ce}catch{}})(),(()=>{try{return Se}catch{}})(),(()=>{try{return Ne}catch{}})(),(()=>{try{return Pe}catch{}})(),(()=>{try{return Ke}catch{}})(),(()=>{try{return Re}catch{}})(),(()=>{try{return Ie}catch{}})(),(()=>{try{return Ye}catch{}})(),(()=>{try{return qe}catch{}})(),(()=>{try{return ze}catch{}})(),(()=>{try{return Ae}catch{}})(),(()=>{try{return je}catch{}})(),(()=>{try{return Be}catch{}})()]).then(async()=>{I=W({name:"SystemRole",__name:"index",setup(Je){const k=He(),{t:Y}=X(),w=_(!0),x=_(0),S=_([]),r=Z({pageNo:1,pageSize:10,code:"",name:"",status:void 0,createTime:[]}),V=_(),v=_(!1),u=async()=>{w.value=!0;try{const m=await Te(r);S.value=m.list,x.value=m.total}finally{w.value=!1}},g=()=>{r.pageNo=1,u()},q=()=>{V.value.resetFields(),g()},T=_(),M=(m,o)=>{T.value.open(m,o)},U=_(),N=_(),z=async()=>{try{await k.exportConfirm(),v.value=!0;const m=await Ue(r);Ve.excel(m,"\u89D2\u8272\u5217\u8868.xls")}catch{}finally{v.value=!1}};return $(()=>{u()}),(m,o)=>{const D=ke,P=te,y=le,A=re,j=oe,B=se,b=ne,c=ce,G=_e,F=ge,n=pe,J=ye,L=ie,E=de,f=ee("hasPermi"),Q=ue;return s(),K(R,null,[e(D,{title:"\u529F\u80FD\u6743\u9650",url:"https://doc.iocoder.cn/resource-permission"}),e(D,{title:"\u6570\u636E\u6743\u9650",url:"https://doc.iocoder.cn/data-permission"}),e(F,null,{default:l(()=>[e(G,{ref_key:"queryFormRef",ref:V,inline:!0,model:t(r),class:"-mb-15px","label-width":"68px"},{default:l(()=>[e(y,{label:"\u89D2\u8272\u540D\u79F0",prop:"name"},{default:l(()=>[e(P,{modelValue:t(r).name,"onUpdate:modelValue":o[0]||(o[0]=a=>t(r).name=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",onKeyup:O(g,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(y,{label:"\u89D2\u8272\u6807\u8BC6",prop:"code"},{default:l(()=>[e(P,{modelValue:t(r).code,"onUpdate:modelValue":o[1]||(o[1]=a=>t(r).code=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",onKeyup:O(g,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(y,{label:"\u72B6\u6001",prop:"status"},{default:l(()=>[e(j,{modelValue:t(r).status,"onUpdate:modelValue":o[2]||(o[2]=a=>t(r).status=a),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},{default:l(()=>[(s(!0),K(R,null,ae(t(ve)(t(H).COMMON_STATUS),a=>(s(),p(A,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(y,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},{default:l(()=>[e(B,{modelValue:t(r).createTime,"onUpdate:modelValue":o[3]||(o[3]=a=>t(r).createTime=a),"default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px","end-placeholder":"\u7ED3\u675F\u65E5\u671F","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange","value-format":"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","default-time"])]),_:1}),e(y,null,{default:l(()=>[e(c,{onClick:g},{default:l(()=>[e(b,{class:"mr-5px",icon:"ep:search"}),i(" \u641C\u7D22 ")]),_:1}),e(c,{onClick:q},{default:l(()=>[e(b,{class:"mr-5px",icon:"ep:refresh"}),i(" \u91CD\u7F6E ")]),_:1}),d((s(),p(c,{plain:"",type:"primary",onClick:o[4]||(o[4]=a=>M("create"))},{default:l(()=>[e(b,{class:"mr-5px",icon:"ep:plus"}),i(" \u65B0\u589E ")]),_:1})),[[f,["system:role:create"]]]),d((s(),p(c,{loading:t(v),plain:"",type:"success",onClick:z},{default:l(()=>[e(b,{class:"mr-5px",icon:"ep:download"}),i(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[f,["system:role:export"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(F,null,{default:l(()=>[d((s(),p(L,{data:t(S)},{default:l(()=>[e(n,{align:"center",label:"\u89D2\u8272\u7F16\u53F7",prop:"id"}),e(n,{align:"center",label:"\u89D2\u8272\u540D\u79F0",prop:"name"}),e(n,{align:"center",label:"\u89D2\u8272\u7C7B\u578B",prop:"type"}),e(n,{align:"center",label:"\u89D2\u8272\u6807\u8BC6",prop:"code"}),e(n,{align:"center",label:"\u663E\u793A\u987A\u5E8F",prop:"sort"}),e(n,{align:"center",label:"\u5907\u6CE8",prop:"remark"}),e(n,{align:"center",label:"\u72B6\u6001",prop:"status"},{default:l(a=>[e(J,{type:t(H).COMMON_STATUS,value:a.row.status},null,8,["type","value"])]),_:1}),e(n,{formatter:t(xe),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:"180"},null,8,["formatter"]),e(n,{width:300,align:"center",label:"\u64CD\u4F5C"},{default:l(a=>[d((s(),p(c,{link:"",type:"primary",onClick:C=>M("update",a.row.id)},{default:l(()=>[i(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[f,["system:role:update"]]]),d((s(),p(c,{link:"",preIcon:"ep:basketball",title:"\u83DC\u5355\u6743\u9650",type:"primary",onClick:C=>(async h=>{N.value.open(h)})(a.row)},{default:l(()=>[i(" \u83DC\u5355\u6743\u9650 ")]),_:2},1032,["onClick"])),[[f,["system:permission:assign-role-menu"]]]),d((s(),p(c,{link:"",preIcon:"ep:coin",title:"\u6570\u636E\u6743\u9650",type:"primary",onClick:C=>(async h=>{U.value.open(h)})(a.row)},{default:l(()=>[i(" \u6570\u636E\u6743\u9650 ")]),_:2},1032,["onClick"])),[[f,["system:permission:assign-role-data-scope"]]]),d((s(),p(c,{link:"",type:"danger",onClick:C=>(async h=>{try{await k.delConfirm(),await Me(h),k.success(Y("common.delSuccess")),await u()}catch{}})(a.row.id)},{default:l(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[f,["system:role:delete"]]])]),_:1})]),_:1},8,["data"])),[[Q,t(w)]]),e(E,{limit:t(r).pageSize,"onUpdate:limit":o[5]||(o[5]=a=>t(r).pageSize=a),page:t(r).pageNo,"onUpdate:page":o[6]||(o[6]=a=>t(r).pageNo=a),total:t(x),onPagination:u},null,8,["limit","page","total"])]),_:1}),e(De,{ref_key:"formRef",ref:T,onSuccess:u},null,512),e(Fe,{ref_key:"assignMenuFormRef",ref:N,onSuccess:u},null,512),e(Oe,{ref_key:"dataPermissionFormRef",ref:U,onSuccess:u},null,512)],64)}}})});export{Ge as __tla,I as default};
