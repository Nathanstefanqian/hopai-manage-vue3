import{d as S,r as c,f as j,o as V,q as b,w as u,i as o,j as k,a,B,x as D,l as H,T as L,D as R,I as T,H as z,L as A,__tla as E}from"./index-ad2885e5.js";import{_ as G,__tla as J}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import{f as K,c as M,u as N,__tla as O}from"./property-b0b8a9d8.js";import{u as Q,__tla as W}from"./useMessage-db992d55.js";let g,X=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return J}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return W}catch{}})()]).then(async()=>{g=S({name:"ProductPropertyValueForm",__name:"ValueForm",emits:["success"],setup(Y,{expose:h,emit:w}){const{t:n}=H(),_=Q(),s=c(!1),f=c(""),d=c(!1),y=c(""),l=c({id:void 0,propertyId:void 0,name:"",remark:""}),I=j({propertyId:[{required:!0,message:"\u5C5E\u6027\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=c();h({open:async(r,e,m)=>{if(s.value=!0,f.value=n("action."+r),y.value=r,q(),l.value.propertyId=e,m){d.value=!0;try{l.value=await K(m)}finally{d.value=!1}}}});const x=w,U=async()=>{if(i&&await i.value.validate()){d.value=!0;try{const r=l.value;y.value==="create"?(await M(r),_.success(n("common.createSuccess"))):(await N(r),_.success(n("common.updateSuccess"))),s.value=!1,x("success")}finally{d.value=!1}}},q=()=>{var r;l.value={id:void 0,propertyId:void 0,name:"",remark:""},(r=i.value)==null||r.resetFields()};return(r,e)=>{const m=L,p=R,F=T,v=z,P=G,C=A;return V(),b(P,{modelValue:a(s),"onUpdate:modelValue":e[4]||(e[4]=t=>D(s)?s.value=t:null),title:a(f)},{footer:u(()=>[o(v,{disabled:a(d),type:"primary",onClick:U},{default:u(()=>[k("\u786E \u5B9A")]),_:1},8,["disabled"]),o(v,{onClick:e[3]||(e[3]=t=>s.value=!1)},{default:u(()=>[k("\u53D6 \u6D88")]),_:1})]),default:u(()=>[B((V(),b(F,{ref_key:"formRef",ref:i,model:a(l),rules:a(I),"label-width":"80px"},{default:u(()=>[o(p,{label:"\u5C5E\u6027\u7F16\u53F7",prop:"category"},{default:u(()=>[o(m,{modelValue:a(l).propertyId,"onUpdate:modelValue":e[0]||(e[0]=t=>a(l).propertyId=t),disabled:""},null,8,["modelValue"])]),_:1}),o(p,{label:"\u540D\u79F0",prop:"name"},{default:u(()=>[o(m,{modelValue:a(l).name,"onUpdate:modelValue":e[1]||(e[1]=t=>a(l).name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u5907\u6CE8",prop:"remark"},{default:u(()=>[o(m,{modelValue:a(l).remark,"onUpdate:modelValue":e[2]||(e[2]=t=>a(l).remark=t),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[C,a(d)]])]),_:1},8,["modelValue","title"])}}})});export{g as _,X as __tla};
