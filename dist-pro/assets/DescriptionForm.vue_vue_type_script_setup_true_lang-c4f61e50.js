import{_ as V,__tla as j}from"./Descriptions-14b10cd3.js";import{d as E,p as m,r as n,f as S,aQ as d,O as q,o,c as R,q as u,w as l,a as t,a3 as f,F as B,I,i as h,B as P,g as Q,dE as U,D as z,__tla as A}from"./index-ad2885e5.js";import{_ as C,__tla as G}from"./style.css_vue_type_style_index_0_src_true_lang-644b6304.js";import{d as H,__tla as J}from"./spu.data-59979448.js";import{u as K,__tla as L}from"./useMessage-db992d55.js";import{u as M,__tla as T}from"./useCrudSchemas-5c9297a9.js";import{r as W,__tla as X}from"./formRules-7e35ced6.js";let y,Y=Promise.all([(()=>{try{return j}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return L}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{let p;p={style:{width:"600px"}},y=E({name:"DescriptionForm",__name:"DescriptionForm",props:{propFormData:{type:Object,default:()=>{}},activeName:m.string.def(""),isDetail:m.bool.def(!1)},emits:["update:activeName"],setup(r,{expose:v,emit:D}){const w=K(),{allSchemas:F}=M(H),_=r,s=n(),a=n({description:""}),b=S({description:[W]});d(()=>a.value.description,e=>{e==="<p><br></p>"&&(a.value.description="")},{deep:!0,immediate:!0}),d(()=>_.propFormData,e=>{e&&U(a.value,e)},{immediate:!0});const g=D;return v({validate:async()=>{if(s)return await t(s).validate(e=>{if(!e)throw w.warning("\u5546\u54C1\u8BE6\u60C5\u4E3A\u5B8C\u5584!!"),g("update:activeName","description"),new Error("\u5546\u54C1\u8BE6\u60C5\u4E3A\u5B8C\u5584!!");Object.assign(_.propFormData,a.value)})}}),(e,c)=>{const x=z,k=I,N=V,O=q("dompurify-html");return o(),R(B,null,[r.isDetail?f("",!0):(o(),u(k,{key:0,ref_key:"descriptionFormRef",ref:s,model:t(a),rules:t(b),"label-width":"120px"},{default:l(()=>[h(x,{label:"\u5546\u54C1\u8BE6\u60C5",prop:"description"},{default:l(()=>[h(t(C),{modelValue:t(a).description,"onUpdate:modelValue":c[0]||(c[0]=i=>t(a).description=i)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),r.isDetail?(o(),u(N,{key:1,data:t(a),schema:t(F).detailSchema,class:"descriptionFormDescriptions"},{description:l(({row:i})=>[P(Q("div",p,null,512),[[O,i.description]])]),_:1},8,["data","schema"])):f("",!0)],64)}}})});export{y as _,Y as __tla};
