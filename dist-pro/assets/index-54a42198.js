import{_ as H,__tla as K}from"./Dialog.vue_vue_type_style_index_0_lang-dccb0a2a.js";import{d as Q,g as $,r as c,j as q,H as A,o as E,c as b,f as a,w as e,e as f,m as d,a as r,t as G,p as P,V as W,i as X,F as Y,da as Z,dQ as aa,ay as ea,z as ta,a3 as la,a5 as ra,cb as sa,__tla as oa}from"./index-e69fb82c.js";import{_ as na,__tla as ua}from"./ContentWrap.vue_vue_type_script_setup_true_lang-8a84026f.js";import{F as ia,__tla as ca}from"./index.es-0909377b.js";import{H as g,j as _a,__tla as ma}from"./java-4a257bfc.js";import{u as pa,__tla as fa}from"./useMessage-ac7e9ad3.js";import{__tla as da}from"./el-card-7cf32362.js";let J,ya=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ua}catch{}})(),(()=>{try{return ca}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return da}catch{}})()]).then(async()=>{function M(o){const s=["true","false","null"],_={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},o.QUOTE_STRING_MODE,_,o.C_NUMBER_MODE,o.C_LINE_COMMENT_MODE,o.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}let h,v,O;h={class:"float-right mb-2"},v={key:0,ref:"editor"},O={class:"hljs"},J=Q({name:"InfraBuild",__name:"index",setup(o){const{t:s}=$(),_=pa(),n=c(),u=c(!1),C=c(""),m=c(-1),i=c(""),y=t=>{u.value=!0,C.value=t},k=()=>{y("\u751F\u6210 JSON"),m.value=0,i.value=n.value.getRule()},x=()=>{y("\u751F\u6210 Options"),m.value=1,i.value=n.value.getOption()},j=()=>{y("\u751F\u6210\u7EC4\u4EF6"),m.value=2,i.value=z()},z=()=>{const t=n.value.getRule(),l=n.value.getOption();return`<template>
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
  <\/script>`},D=t=>{let l="json";return m.value===2&&(l="xml"),ea(t)||(t=JSON.stringify(t)),g.highlight(l,t,!0).value||"&nbsp;"};return q(async()=>{g.registerLanguage("xml",_a),g.registerLanguage("json",M)}),(t,l)=>{const p=ta,N=la,w=ra,L=na,R=sa,T=H,V=A("dompurify-html");return E(),b(Y,null,[a(L,null,{default:e(()=>[a(w,null,{default:e(()=>[a(N,null,{default:e(()=>[f("div",h,[a(p,{size:"small",type:"primary",onClick:k},{default:e(()=>[d("\u751F\u6210 JSON")]),_:1}),a(p,{size:"small",type:"success",onClick:x},{default:e(()=>[d("\u751F\u6210 Options")]),_:1}),a(p,{size:"small",type:"danger",onClick:j},{default:e(()=>[d("\u751F\u6210\u7EC4\u4EF6")]),_:1})])]),_:1}),a(N,null,{default:e(()=>[a(r(ia),{ref_key:"designer",ref:n,height:"780px"},null,512)]),_:1})]),_:1})]),_:1}),a(T,{modelValue:r(u),"onUpdate:modelValue":l[1]||(l[1]=S=>X(u)?u.value=S:null),title:r(C),"max-height":"600"},{default:e(()=>[r(u)?(E(),b("div",v,[a(p,{style:{float:"right"},onClick:l[0]||(l[0]=S=>(async B=>{const{copy:I,copied:U,isSupported:F}=aa({source:B});F?(await I(),r(U)&&_.success(s("common.copySuccess"))):_.error(s("common.copyError"))})(r(i)))},{default:e(()=>[d(G(r(s)("common.copy")),1)]),_:1}),a(R,{height:"580"},{default:e(()=>[f("div",null,[f("pre",null,[P(f("code",O,null,512),[[V,D(r(i))]])])])]),_:1})],512)):W("",!0)]),_:1},8,["modelValue","title"])],64)}}})});export{ya as __tla,J as default};
