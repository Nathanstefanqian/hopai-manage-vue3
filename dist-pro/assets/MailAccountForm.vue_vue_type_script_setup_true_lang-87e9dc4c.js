import{d as M,l as V,r as c,o as b,q as g,w as u,i as m,a as l,j as p,B as A,x as C,H as R,L as j,__tla as q}from"./index-8d332a1f.js";import{_ as B,__tla as E}from"./Dialog.vue_vue_type_style_index_0_lang-b616aa11.js";import{_ as H,__tla as L}from"./Form-b77247b6.js";import{g as P,c as U,u as z,__tla as D}from"./index-4199448e.js";import{r as G,a as I,__tla as J}from"./account.data-1a0170db.js";import{u as K,__tla as N}from"./useMessage-f7e3e404.js";let v,O=Promise.all([(()=>{try{return q}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return D}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return N}catch{}})()]).then(async()=>{v=M({name:"SystemMailAccountForm",__name:"MailAccountForm",emits:["success"],setup(Q,{expose:h,emit:w}){const{t:o}=V(),n=K(),t=c(!1),i=c(""),e=c(!1),f=c(""),r=c();h({open:async(s,a)=>{if(t.value=!0,i.value=o("action."+s),f.value=s,a){e.value=!0;try{const _=await P(a);r.value.setValues(_)}finally{e.value=!1}}}});const S=w,k=async()=>{if(r&&await r.value.getElFormRef().validate()){e.value=!0;try{const s=r.value.formModel;f.value==="create"?(await U(s),n.success(o("common.createSuccess"))):(await z(s),n.success(o("common.updateSuccess"))),t.value=!1,S("success")}finally{e.value=!1}}};return(s,a)=>{const _=H,y=R,x=B,F=j;return b(),g(x,{modelValue:l(t),"onUpdate:modelValue":a[1]||(a[1]=d=>C(t)?t.value=d:null),title:l(i)},{footer:u(()=>[m(y,{disabled:l(e),type:"primary",onClick:k},{default:u(()=>[p("\u786E \u5B9A")]),_:1},8,["disabled"]),m(y,{onClick:a[0]||(a[0]=d=>t.value=!1)},{default:u(()=>[p("\u53D6 \u6D88")]),_:1})]),default:u(()=>[A(m(_,{ref_key:"formRef",ref:r,rules:l(G),schema:l(I).formSchema},null,8,["rules","schema"]),[[F,l(e)]])]),_:1},8,["modelValue","title"])}}})});export{v as _,O as __tla};
