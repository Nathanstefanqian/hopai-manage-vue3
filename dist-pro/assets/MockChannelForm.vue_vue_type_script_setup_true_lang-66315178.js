import{d as R,l as T,r as d,o as m,c as h,i as u,w as o,a as t,j as _,B as j,q as g,F as q,k as A,t as B,x as D,ag as E,af as J,D as L,T as H,I as P,H as z,L as G,__tla as K}from"./index-ad2885e5.js";import{_ as Q,__tla as W}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import{C as X}from"./constants-3cc050b6.js";import{d as Y,D as Z,__tla as $}from"./dict-197e00ae.js";import{g as aa,c as ea,u as la,__tla as ta}from"./index-d21e4bc3.js";import{u as sa,__tla as ra}from"./useMessage-db992d55.js";let b,oa=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return ta}catch{}})(),(()=>{try{return ra}catch{}})()]).then(async()=>{b=R({name:"MockChannelForm",__name:"MockChannelForm",emits:["success"],setup(ua,{expose:w,emit:V}){const{t:f}=T(),p=sa(),c=d(!1),v=d(""),n=d(!1),e=d({appId:"",code:"",status:void 0,feeRate:0,remark:"",config:{name:"mock-conf"}}),C={status:[{required:!0,message:"\u6E20\u9053\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},i=d();w({open:async(l,a)=>{c.value=!0,n.value=!0,I(l,a);try{const r=await aa(l,a);r&&r.id&&(e.value=r,e.value.config=JSON.parse(r.config)),v.value=e.value.id?"\u7F16\u8F91\u652F\u4ED8\u6E20\u9053":"\u521B\u5EFA\u652F\u4ED8\u6E20\u9053"}finally{n.value=!1}}});const x=V,S=async()=>{if(i&&await i.value.validate()){n.value=!0;try{const l={...e.value};l.config=JSON.stringify(e.value.config),l.id?(await la(l),p.success(f("common.updateSuccess"))):(await ea(l),p.success(f("common.createSuccess"))),c.value=!1,x("success")}finally{n.value=!1}}},I=(l,a)=>{var r;e.value={appId:l,code:a,status:X.ENABLE,remark:"",feeRate:0,config:{name:"mock-conf"}},(r=i.value)==null||r.resetFields()};return(l,a)=>{const r=E,F=J,y=L,M=H,N=P,k=z,O=Q,U=G;return m(),h("div",null,[u(O,{modelValue:t(c),"onUpdate:modelValue":a[3]||(a[3]=s=>D(c)?c.value=s:null),title:t(v),onClosed:l.close,width:"800px"},{footer:o(()=>[u(k,{disabled:t(n),type:"primary",onClick:S},{default:o(()=>[_("\u786E \u5B9A")]),_:1},8,["disabled"]),u(k,{onClick:a[2]||(a[2]=s=>c.value=!1)},{default:o(()=>[_("\u53D6 \u6D88")]),_:1})]),default:o(()=>[j((m(),g(N,{ref_key:"formRef",ref:i,model:t(e),rules:C,"label-width":"100px"},{default:o(()=>[u(y,{"label-width":"180px",label:"\u6E20\u9053\u72B6\u6001",prop:"status"},{default:o(()=>[u(F,{modelValue:t(e).status,"onUpdate:modelValue":a[0]||(a[0]=s=>t(e).status=s)},{default:o(()=>[(m(!0),h(q,null,A(t(Y)(t(Z).COMMON_STATUS),s=>(m(),g(r,{key:parseInt(s.value),label:parseInt(s.value)},{default:o(()=>[_(B(s.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(y,{"label-width":"180px",label:"\u5907\u6CE8",prop:"remark"},{default:o(()=>[u(M,{modelValue:t(e).remark,"onUpdate:modelValue":a[1]||(a[1]=s=>t(e).remark=s),style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[U,t(n)]])]),_:1},8,["modelValue","title","onClosed"])])}}})});export{b as _,oa as __tla};
