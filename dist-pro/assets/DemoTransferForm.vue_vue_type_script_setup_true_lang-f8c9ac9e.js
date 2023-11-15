import{ao as x,d as S,l as j,r as u,f as B,o as c,q as _,w as t,i as r,a as e,j as v,B as f,c as H,F as X,k as M,t as z,a2 as L,x as G,dY as J,ag as K,af as O,D as Q,bX as W,T as Z,I as $,H as ee,L as ae,__tla as le}from"./index-ad2885e5.js";import{_ as oe,__tla as te}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import{a as re,D as de,__tla as se}from"./dict-197e00ae.js";import{u as ue,__tla as ie}from"./useMessage-db992d55.js";let N,U,pe=Promise.all([(()=>{try{return le}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ie}catch{}})()]).then(async()=>{U=function(y){return x.get({url:"/pay/demo-transfer/page",params:y})},N=S({__name:"DemoTransferForm",emits:["success"],setup(y,{expose:k,emit:F}){const{t:V}=j(),I=ue(),s=u(!1),g=u(""),p=u(!1),b=u(""),o=u({id:void 0,price:void 0,type:void 0,userName:void 0,alipayLogonId:void 0,openid:void 0}),T=B({price:[{required:!0,message:"\u8F6C\u8D26\u91D1\u989D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],type:[{required:!0,message:"\u8F6C\u8D26\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),n=u();k({open:async d=>{s.value=!0,g.value=V("action."+d),b.value=d,h()},close:async()=>{s.value=!1,h()}});const q=F,D=async()=>{if(n&&await n.value.validate()){p.value=!0;try{const d={...o.value};d.price=J(d.price),b.value==="create"&&(await function(l){return x.post({url:"/pay/demo-transfer/create",data:l})}(d),I.success(V("common.createSuccess"))),s.value=!1,q("success")}finally{p.value=!1}}},h=()=>{var d;o.value={id:void 0,price:void 0,userName:void 0,alipayLogonId:void 0,openid:void 0},(d=n.value)==null||d.resetFields()};return(d,l)=>{const R=K,P=O,i=Q,Y=W,m=Z,A=$,w=ee,C=oe,E=ae;return c(),_(C,{title:e(g),modelValue:e(s),"onUpdate:modelValue":l[6]||(l[6]=a=>G(s)?s.value=a:null),width:"800px"},{footer:t(()=>[r(w,{onClick:D,type:"primary",disabled:e(p)},{default:t(()=>[v("\u786E \u5B9A")]),_:1},8,["disabled"]),r(w,{onClick:l[5]||(l[5]=a=>s.value=!1)},{default:t(()=>[v("\u53D6 \u6D88")]),_:1})]),default:t(()=>[f((c(),_(A,{ref_key:"formRef",ref:n,model:e(o),rules:e(T),"label-width":"120px"},{default:t(()=>[r(i,{label:"\u8F6C\u8D26\u7C7B\u578B",prop:"type"},{default:t(()=>[r(P,{modelValue:e(o).type,"onUpdate:modelValue":l[0]||(l[0]=a=>e(o).type=a)},{default:t(()=>[(c(!0),H(X,null,M(e(re)(e(de).PAY_TRANSFER_TYPE),a=>(c(),_(R,{key:a.value,label:a.value,disabled:a.value===2||a.value===3||a.value===4},{default:t(()=>[v(z(a.label),1)]),_:2},1032,["label","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(i,{label:"\u8F6C\u8D26\u91D1\u989D(\u5143)",prop:"price"},{default:t(()=>[r(Y,{modelValue:e(o).price,"onUpdate:modelValue":l[1]||(l[1]=a=>e(o).price=a),min:0,precision:2,step:.01,placeholder:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),r(i,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",prop:"userName"},{default:t(()=>[r(m,{modelValue:e(o).userName,"onUpdate:modelValue":l[2]||(l[2]=a=>e(o).userName=a),placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"},null,8,["modelValue"])]),_:1}),f(r(i,{label:"\u652F\u4ED8\u5B9D\u767B\u5F55\u8D26\u53F7",prop:"alipayLogonId"},{default:t(()=>[r(m,{modelValue:e(o).alipayLogonId,"onUpdate:modelValue":l[3]||(l[3]=a=>e(o).alipayLogonId=a),placeholder:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u767B\u5F55\u8D26\u53F7"},null,8,["modelValue"])]),_:1},512),[[L,e(o).type===1]]),f(r(i,{label:"\u5FAE\u4FE1 openid",prop:"openid"},{default:t(()=>[r(m,{modelValue:e(o).openid,"onUpdate:modelValue":l[4]||(l[4]=a=>e(o).openid=a),placeholder:"\u8BF7\u8F93\u5165\u5FAE\u4FE1 openid"},null,8,["modelValue"])]),_:1},512),[[L,e(o).type===2]])]),_:1},8,["model","rules"])),[[E,e(p)]])]),_:1},8,["title","modelValue"])}}})});export{N as _,pe as __tla,U as g};
