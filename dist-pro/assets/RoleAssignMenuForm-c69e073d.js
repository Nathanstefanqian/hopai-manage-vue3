import{d as B,l as D,r as o,f as L,o as b,q as C,w as l,i as t,a as u,j as i,B as Y,t as V,x as h,aj as z,D as G,bY as P,dR as J,I as O,H as Q,L as T,__tla as W}from"./index-cc83619a.js";import{_ as X,__tla as Z}from"./Dialog.vue_vue_type_style_index_0_lang-4fd20e63.js";import{E as $,__tla as ee}from"./el-card-a16612ff.js";import{d as ae,h as le}from"./tree-ebab458e.js";import{g as te,__tla as se}from"./index-ca0258a6.js";import{g as ue,a as de,__tla as oe}from"./index-bbfbc2e1.js";import{u as re,__tla as ne}from"./useMessage-36d6be68.js";import{_ as me}from"./_plugin-vue_export-helper-1b428a4d.js";let g,ce=Promise.all([(()=>{try{return W}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return ne}catch{}})()]).then(async()=>{g=me(B({name:"SystemRoleAssignMenuForm",__name:"RoleAssignMenuForm",emits:["success"],setup(ie,{expose:I,emit:w}){const{t:R}=D(),M=re(),r=o(!1),n=o(!1),s=L({id:0,name:"",code:"",menuIds:[]}),v=o(),p=o([]),m=o(!1),d=o(),_=o(!1);I({open:async a=>{r.value=!0,U(),p.value=le(await te()),s.id=a.id,s.name=a.name,s.code=a.code,n.value=!0;try{s.value.menuIds=await ue(a.id),s.value.menuIds.forEach(e=>{d.value.setChecked(e,!0,!1)})}finally{n.value=!1}}});const F=w,H=async()=>{if(v&&await v.value.validate()){n.value=!0;try{const a={roleId:s.id,menuIds:[...d.value.getCheckedKeys(!1),...d.value.getHalfCheckedKeys()]};await de(a),M.success(R("common.updateSuccess")),r.value=!1,F("success")}finally{n.value=!1}}},U=()=>{var a,e;_.value=!1,m.value=!1,s.value={id:0,name:"",code:"",menuIds:[]},(a=d.value)==null||a.setCheckedNodes([]),(e=v.value)==null||e.resetFields()},j=()=>{d.value.setCheckedNodes(_.value?p.value:[])},A=()=>{var e;const a=(e=d.value)==null?void 0:e.store.nodesMap;for(let f in a)a[f].expanded!==m.value&&(a[f].expanded=m.value)};return(a,e)=>{const f=z,y=G,x=P,E=J,K=$,N=O,k=Q,S=X,q=T;return b(),C(S,{modelValue:u(r),"onUpdate:modelValue":e[3]||(e[3]=c=>h(r)?r.value=c:null),title:"\u83DC\u5355\u6743\u9650"},{footer:l(()=>[t(k,{disabled:u(n),type:"primary",onClick:H},{default:l(()=>[i("\u786E \u5B9A")]),_:1},8,["disabled"]),t(k,{onClick:e[2]||(e[2]=c=>r.value=!1)},{default:l(()=>[i("\u53D6 \u6D88")]),_:1})]),default:l(()=>[Y((b(),C(N,{ref_key:"formRef",ref:v,model:u(s),"label-width":"80px"},{default:l(()=>[t(y,{label:"\u89D2\u8272\u540D\u79F0"},{default:l(()=>[t(f,null,{default:l(()=>[i(V(u(s).name),1)]),_:1})]),_:1}),t(y,{label:"\u89D2\u8272\u6807\u8BC6"},{default:l(()=>[t(f,null,{default:l(()=>[i(V(u(s).code),1)]),_:1})]),_:1}),t(y,{label:"\u83DC\u5355\u6743\u9650"},{default:l(()=>[t(K,{class:"cardHeight"},{header:l(()=>[i(" \u5168\u9009/\u5168\u4E0D\u9009: "),t(x,{modelValue:u(_),"onUpdate:modelValue":e[0]||(e[0]=c=>h(_)?_.value=c:null),"active-text":"\u662F","inactive-text":"\u5426","inline-prompt":"",onChange:j},null,8,["modelValue"]),i(" \u5168\u90E8\u5C55\u5F00/\u6298\u53E0: "),t(x,{modelValue:u(m),"onUpdate:modelValue":e[1]||(e[1]=c=>h(m)?m.value=c:null),"active-text":"\u5C55\u5F00","inactive-text":"\u6298\u53E0","inline-prompt":"",onChange:A},null,8,["modelValue"])]),default:l(()=>[t(E,{ref_key:"treeRef",ref:d,data:u(p),props:u(ae),"empty-text":"\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u5019","node-key":"id","show-checkbox":""},null,8,["data","props"])]),_:1})]),_:1})]),_:1},8,["model"])),[[q,u(n)]])]),_:1},8,["modelValue"])}}}),[["__scopeId","data-v-8d5bea34"]])});export{ce as __tla,g as default};
