import{al as _,d as L,g as N,r as m,b as B,o as r,l as p,w as s,f as u,a as l,m as y,p as G,c as T,F as S,k as I,t as h,V as H,i as J,M as Q,x as W,ab as X,ac as Z,A as $,z as ee,D as le,__tla as ae}from"./index-e69fb82c.js";import{_ as te,__tla as se}from"./Dialog.vue_vue_type_style_index_0_lang-dccb0a2a.js";import{a as w,D as U,__tla as ue}from"./dict-9c294b1e.js";import{u as de,__tla as re}from"./useMessage-ac7e9ad3.js";let x,E,A,oe=Promise.all([(()=>{try{return ae}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return re}catch{}})()]).then(async()=>{A=async v=>await _.get({url:"/system/social-client/page",params:v}),E=async v=>await _.delete({url:"/system/social-client/delete?id="+v}),x=L({__name:"SocialClientForm",emits:["success"],setup(v,{expose:D,emit:F}){const{t:g}=N(),k=de(),i=m(!1),q=m(""),c=m(!1),C=m(""),t=m({id:void 0,name:void 0,socialType:void 0,userType:void 0,clientId:void 0,clientSecret:void 0,agentId:void 0,status:0}),O=B({name:[{required:!0,message:"\u5E94\u7528\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],socialType:[{required:!0,message:"\u793E\u4EA4\u5E73\u53F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],userType:[{required:!0,message:"\u7528\u6237\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],clientId:[{required:!0,message:"\u5BA2\u6237\u7AEF\u7F16\u53F7\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],clientSecret:[{required:!0,message:"\u5BA2\u6237\u7AEF\u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],status:[{required:!0,message:"\u72B6\u6001\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),f=m();D({open:async(d,a)=>{if(i.value=!0,q.value=g("action."+d),C.value=d,R(),a){c.value=!0;try{t.value=await(async n=>await _.get({url:"/system/social-client/get?id="+n}))(a)}finally{c.value=!1}}}});const P=F,Y=async()=>{if(f&&await f.value.validate()){c.value=!0;try{const d=t.value;C.value==="create"?(await(async a=>await _.post({url:"/system/social-client/create",data:a}))(d),k.success(g("common.createSuccess"))):(await(async a=>await _.put({url:"/system/social-client/update",data:a}))(d),k.success(g("common.updateSuccess"))),i.value=!1,P("success")}finally{c.value=!1}}},R=()=>{var d;t.value={id:void 0,name:void 0,socialType:void 0,userType:void 0,clientId:void 0,clientSecret:void 0,agentId:void 0,status:0},(d=f.value)==null||d.resetFields()};return(d,a)=>{const n=Q,o=W,b=X,V=Z,j=$,M=ee,z=te,K=le;return r(),p(z,{modelValue:l(i),"onUpdate:modelValue":a[8]||(a[8]=e=>J(i)?i.value=e:null),title:l(q)},{footer:s(()=>[u(M,{disabled:l(c),type:"primary",onClick:Y},{default:s(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),u(M,{onClick:a[7]||(a[7]=e=>i.value=!1)},{default:s(()=>[y("\u53D6 \u6D88")]),_:1})]),default:s(()=>[G((r(),p(j,{ref_key:"formRef",ref:f,model:l(t),rules:l(O),"label-width":"120px"},{default:s(()=>[u(o,{label:"\u5E94\u7528\u540D",prop:"name"},{default:s(()=>[u(n,{modelValue:l(t).name,"onUpdate:modelValue":a[0]||(a[0]=e=>l(t).name=e),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D"},null,8,["modelValue"])]),_:1}),u(o,{label:"\u793E\u4EA4\u5E73\u53F0",prop:"socialType"},{default:s(()=>[u(V,{modelValue:l(t).socialType,"onUpdate:modelValue":a[1]||(a[1]=e=>l(t).socialType=e)},{default:s(()=>[(r(!0),T(S,null,I(l(w)(l(U).SYSTEM_SOCIAL_TYPE),e=>(r(),p(b,{key:e.value,label:e.value},{default:s(()=>[y(h(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(o,{label:"\u7528\u6237\u7C7B\u578B",prop:"userType"},{default:s(()=>[u(V,{modelValue:l(t).userType,"onUpdate:modelValue":a[2]||(a[2]=e=>l(t).userType=e)},{default:s(()=>[(r(!0),T(S,null,I(l(w)(l(U).USER_TYPE),e=>(r(),p(b,{key:e.value,label:e.value},{default:s(()=>[y(h(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(o,{label:"\u5BA2\u6237\u7AEF\u7F16\u53F7",prop:"clientId"},{default:s(()=>[u(n,{modelValue:l(t).clientId,"onUpdate:modelValue":a[3]||(a[3]=e=>l(t).clientId=e),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u7AEF\u7F16\u53F7,\u5BF9\u5E94\u5404\u5E73\u53F0\u7684appKey"},null,8,["modelValue"])]),_:1}),u(o,{label:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",prop:"clientSecret"},{default:s(()=>[u(n,{modelValue:l(t).clientSecret,"onUpdate:modelValue":a[4]||(a[4]=e=>l(t).clientSecret=e),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u7AEF\u5BC6\u94A5,\u5BF9\u5E94\u5404\u5E73\u53F0\u7684appSecret"},null,8,["modelValue"])]),_:1}),l(t).socialType===30?(r(),p(o,{key:0,label:"agentId",prop:"agentId"},{default:s(()=>[u(n,{modelValue:l(t).agentId,"onUpdate:modelValue":a[5]||(a[5]=e=>l(t).agentId=e),placeholder:"\u6388\u6743\u65B9\u7684\u7F51\u9875\u5E94\u7528 ID\uFF0C\u6709\u5219\u586B"},null,8,["modelValue"])]),_:1})):H("",!0),u(o,{label:"\u72B6\u6001",prop:"status"},{default:s(()=>[u(V,{modelValue:l(t).status,"onUpdate:modelValue":a[6]||(a[6]=e=>l(t).status=e)},{default:s(()=>[(r(!0),T(S,null,I(l(w)(l(U).COMMON_STATUS),e=>(r(),p(b,{key:e.value,label:e.value},{default:s(()=>[y(h(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[K,l(c)]])]),_:1},8,["modelValue","title"])}}})});export{x as _,oe as __tla,E as d,A as g};
