import{d as A,r as i,o,l as m,w as l,f as _,m as p,a,p as C,c as D,k as T,F as j,i as z,q as B,v as P,x as R,A as E,z as G,D as H,__tla as J}from"./index-e69fb82c.js";import{_ as K,__tla as L}from"./Dialog.vue_vue_type_style_index_0_lang-dccb0a2a.js";import{u as M,__tla as N}from"./index-d91b8d25.js";import{g as O,__tla as Q}from"./index-2ee2fce7.js";let v,S=Promise.all([(()=>{try{return J}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return Q}catch{}})()]).then(async()=>{v=A({name:"BpmTaskUpdateAssigneeForm",__name:"TaskUpdateAssigneeForm",emits:["success"],setup(W,{expose:y,emit:g}){const s=i(!1),d=i(!1),t=i({id:"",assigneeUserId:void 0}),U=i({assigneeUserId:[{required:!0,message:"\u65B0\u5BA1\u6279\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),n=i(),c=i([]);y({open:async u=>{s.value=!0,b(),t.value.id=u,c.value=await O()}});const h=g,k=async()=>{if(n&&await n.value.validate()){d.value=!0;try{await M(t.value),s.value=!1,h("success")}finally{d.value=!1}}},b=()=>{var u;t.value={id:"",assigneeUserId:void 0},(u=n.value)==null||u.resetFields()};return(u,r)=>{const w=B,I=P,V=R,x=E,f=G,F=K,q=H;return o(),m(F,{modelValue:a(s),"onUpdate:modelValue":r[2]||(r[2]=e=>z(s)?s.value=e:null),title:"\u8F6C\u6D3E\u5BA1\u6279\u4EBA",width:"500"},{footer:l(()=>[_(f,{disabled:a(d),type:"primary",onClick:k},{default:l(()=>[p("\u786E \u5B9A")]),_:1},8,["disabled"]),_(f,{onClick:r[1]||(r[1]=e=>s.value=!1)},{default:l(()=>[p("\u53D6 \u6D88")]),_:1})]),default:l(()=>[C((o(),m(x,{ref_key:"formRef",ref:n,model:a(t),rules:a(U),"label-width":"110px"},{default:l(()=>[_(V,{label:"\u65B0\u5BA1\u6279\u4EBA",prop:"assigneeUserId"},{default:l(()=>[_(I,{modelValue:a(t).assigneeUserId,"onUpdate:modelValue":r[0]||(r[0]=e=>a(t).assigneeUserId=e),clearable:"",style:{width:"100%"}},{default:l(()=>[(o(!0),D(j,null,T(a(c),e=>(o(),m(w,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[q,a(d)]])]),_:1},8,["modelValue"])}}})});export{v as _,S as __tla};
