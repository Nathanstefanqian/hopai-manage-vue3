import{_ as F,__tla as H}from"./Dialog.vue_vue_type_style_index_0_lang-28b4751a.js";import{d as K,l as Q,r as c,A as $,O as G,o as S,c as M,i as a,w as e,g as f,j as d,a as r,t as P,B as q,a3 as W,x as X,F as Y,dc as Z,dQ as aa,aD as ea,H as ta,E as la,n as ra,ce as sa,__tla as oa}from"./index-12d626d1.js";import{_ as na,__tla as ua}from"./ContentWrap.vue_vue_type_script_setup_true_lang-6c4b8253.js";import{F as ia,__tla as ca}from"./index.es-3624ee11.js";import{H as g,j as _a,__tla as ma}from"./java-ec2ed4ed.js";import{u as pa,__tla as fa}from"./useMessage-86d9ff5e.js";import{__tla as da}from"./el-card-9cf947e7.js";let J,ya=Promise.all([(()=>{try{return H}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return da}catch{}})()]).then(async()=>{function b(o){const s=["true","false","null"],_={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},o.QUOTE_STRING_MODE,_,o.C_NUMBER_MODE,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}let h,v,O;h={class:"float-right mb-2"},v={key:0,ref:"editor"},O={class:"hljs"},J=K({name:"InfraBuild",__name:"index",setup(o){const{t:s}=Q(),_=pa(),n=c(),u=c(!1),C=c(""),m=c(-1),i=c(""),y=t=>{u.value=!0,C.value=t},k=()=>{y("\u751F\u6210 JSON"),m.value=0,i.value=n.value.getRule()},x=()=>{y("\u751F\u6210 Options"),m.value=1,i.value=n.value.getOption()},j=()=>{y("\u751F\u6210\u7EC4\u4EF6"),m.value=2,i.value=D()},D=()=>{const t=n.value.getRule(),l=n.value.getOption();return`<template>
    <form-create
      v-model="fapi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    ></form-create>
  </template>
  <script setup lang=ts>
    import formCreate from "@form-create/element-ui";
    const faps = ref(null)
    const rule = ref('')
    const option = ref('')
    const init = () => {
      rule.value = formCreate.parseJson('${Z.toJson(t).replaceAll("\\","\\\\")}')
      option.value = formCreate.parseJson('${JSON.stringify(l)}')
    }
    const onSubmit = (formData) => {
      //todo \u63D0\u4EA4\u8868\u5355
    }
    init()
  <\/script>`},L=t=>{let l="json";return m.value===2&&(l="xml"),ea(t)||(t=JSON.stringify(t)),g.highlight(l,t,!0).value||"&nbsp;"};return $(async()=>{g.registerLanguage("xml",_a),g.registerLanguage("json",b)}),(t,l)=>{const p=ta,N=la,w=ra,B=na,R=sa,T=F,z=G("dompurify-html");return S(),M(Y,null,[a(B,null,{default:e(()=>[a(w,null,{default:e(()=>[a(N,null,{default:e(()=>[f("div",h,[a(p,{size:"small",type:"primary",onClick:k},{default:e(()=>[d("\u751F\u6210 JSON")]),_:1}),a(p,{size:"small",type:"success",onClick:x},{default:e(()=>[d("\u751F\u6210 Options")]),_:1}),a(p,{size:"small",type:"danger",onClick:j},{default:e(()=>[d("\u751F\u6210\u7EC4\u4EF6")]),_:1})])]),_:1}),a(N,null,{default:e(()=>[a(r(ia),{ref_key:"designer",ref:n,height:"780px"},null,512)]),_:1})]),_:1})]),_:1}),a(T,{modelValue:r(u),"onUpdate:modelValue":l[1]||(l[1]=E=>X(u)?u.value=E:null),title:r(C),"max-height":"600"},{default:e(()=>[r(u)?(S(),M("div",v,[a(p,{style:{float:"right"},onClick:l[0]||(l[0]=E=>(async I=>{const{copy:U,copied:V,isSupported:A}=aa({source:I});A?(await U(),r(V)&&_.success(s("common.copySuccess"))):_.error(s("common.copyError"))})(r(i)))},{default:e(()=>[d(P(r(s)("common.copy")),1)]),_:1}),a(R,{height:"580"},{default:e(()=>[f("div",null,[f("pre",null,[q(f("code",O,null,512),[[z,L(r(i))]])])])]),_:1})],512)):W("",!0)]),_:1},8,["modelValue","title"])],64)}}})});export{ya as __tla,J as default};
