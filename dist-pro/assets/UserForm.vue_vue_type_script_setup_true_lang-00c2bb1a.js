import{d as B,l as D,r as m,f as H,o as i,q as c,w as s,i as r,a as e,j as y,B as L,c as R,F as S,k as T,x as z,T as P,D as A,M as E,C as G,I as J,H as K,L as N,__tla as O}from"./index-ad2885e5.js";import{_ as Q,__tla as W}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import{b as X,__tla as Y}from"./index-94858767.js";import{g as Z,u as $,__tla as aa}from"./index-053896d9.js";import{u as ea,__tla as la}from"./useMessage-db992d55.js";let k,ta=Promise.all([(()=>{try{return O}catch{}})(),(()=>{try{return W}catch{}})(),(()=>{try{return Y}catch{}})(),(()=>{try{return aa}catch{}})(),(()=>{try{return la}catch{}})()]).then(async()=>{k=B({name:"MpUserForm",__name:"UserForm",emits:["success"],setup(sa,{expose:V,emit:h}){const{t:b}=D(),I=ea(),u=m(!1),o=m(!1),l=m({id:void 0,nickname:void 0,remark:void 0,tagIds:[]}),g=H({}),n=m(),p=m([]);V({open:async d=>{if(u.value=!0,x(),d){o.value=!0;try{l.value=await Z(d)}finally{o.value=!1}}p.value=await X()}});const w=h,U=async()=>{if(n&&await n.value.validate()){o.value=!0;try{await $(l.value),I.success(b("common.updateSuccess")),u.value=!1,w("success")}finally{o.value=!1}}},x=()=>{var d;l.value={id:void 0,nickname:void 0,remark:void 0,tagIds:[]},(d=n.value)==null||d.resetFields()};return(d,t)=>{const f=P,_=A,F=E,C=G,j=J,v=K,M=Q,q=N;return i(),c(M,{modelValue:e(u),"onUpdate:modelValue":t[4]||(t[4]=a=>z(u)?u.value=a:null),title:"\u4FEE\u6539"},{footer:s(()=>[r(v,{disabled:e(o),type:"primary",onClick:U},{default:s(()=>[y("\u786E \u5B9A")]),_:1},8,["disabled"]),r(v,{onClick:t[3]||(t[3]=a=>u.value=!1)},{default:s(()=>[y("\u53D6 \u6D88")]),_:1})]),default:s(()=>[L((i(),c(j,{ref_key:"formRef",ref:n,model:e(l),rules:e(g),"label-width":"80px"},{default:s(()=>[r(_,{label:"\u6635\u79F0",prop:"nickname"},{default:s(()=>[r(f,{modelValue:e(l).nickname,"onUpdate:modelValue":t[0]||(t[0]=a=>e(l).nickname=a),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0"},null,8,["modelValue"])]),_:1}),r(_,{label:"\u5907\u6CE8",prop:"remark"},{default:s(()=>[r(f,{modelValue:e(l).remark,"onUpdate:modelValue":t[1]||(t[1]=a=>e(l).remark=a),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),r(_,{label:"\u6807\u7B7E",prop:"tagIds"},{default:s(()=>[r(C,{modelValue:e(l).tagIds,"onUpdate:modelValue":t[2]||(t[2]=a=>e(l).tagIds=a),clearable:"",multiple:"",placeholder:"\u8BF7\u9009\u62E9\u6807\u7B7E"},{default:s(()=>[(i(!0),R(S,null,T(e(p),a=>(i(),c(F,{key:a.tagId,label:a.name,value:a.tagId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[q,e(o)]])]),_:1},8,["modelValue"])}}})});export{k as _,ta as __tla};
