import{ao as d,d as N,r as c,f as O,o as x,q as h,w as s,i as r,j as k,a,B as Q,x as W,g as L,l as X,T as Y,D as Z,bl as $,I as ee,H as le,L as ae,__tla as te}from"./index-cc83619a.js";import{_ as re,__tla as se}from"./Dialog.vue_vue_type_style_index_0_lang-4fd20e63.js";import{u as oe,__tla as ue}from"./useMessage-36d6be68.js";let R,q,C,j,ie=Promise.all([(()=>{try{return te}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return ue}catch{}})()]).then(async()=>{let _,y,g;j=async u=>await d.get({url:"/product/carousel/page",params:u}),q=async u=>await d.delete({url:"/product/carousel/delete?id="+u}),C=async u=>await d.download({url:"/product/carousel/export-excel",params:u}),_=u=>d.upload({url:"/system/user/profile/update-avatar",data:u}),y=L("i",{class:"el-icon-plus"},null,-1),g=L("div",{class:"el-upload__text"},"Upload",-1),R=N({__name:"CarouselForm",emits:["success"],setup(u,{expose:F,emit:I}){const{t:f}=X(),U=oe(),p=c(!1),w=c(""),n=c(!1),V=c(""),t=c({id:void 0,title:void 0,imageUrl:void 0,description:void 0,linkUrl:void 0,sort:void 0}),S=O({title:[{required:!0,message:"\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],imageUrl:[{required:!0,message:"\u56FE\u7247URL\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],sort:[{required:!0,message:"\u663E\u793A\u987A\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),v=c();F({open:async(l,e)=>{if(p.value=!0,w.value=f("action."+l),V.value=l,H(),e){n.value=!0;try{t.value=await(async i=>await d.get({url:"/product/carousel/get?id="+i}))(e)}finally{n.value=!1}}}});const B=I,D=async()=>{if(v&&await v.value.validate()){n.value=!0;try{const l=t.value;V.value==="create"?(await(async e=>await d.post({url:"/product/carousel/create",data:e}))(l),U.success(f("common.createSuccess"))):(await(async e=>await d.put({url:"/product/carousel/update",data:e}))(l),U.success(f("common.updateSuccess"))),p.value=!1,B("success")}finally{n.value=!1}}},H=()=>{var l;t.value={id:void 0,title:void 0,imageUrl:void 0,description:void 0,linkUrl:void 0,sort:void 0},(l=v.value)==null||l.resetFields()},T=c([]),z=async({file:l})=>{await _(l)},A=(l,e,i)=>{},E=async l=>{await _(l.url),previewImageUrl.value=l.url,previewVisible.value=!0},G=(l,e)=>{};return(l,e)=>{const i=Y,m=Z,M=$,P=ee,b=le,J=re,K=ae;return x(),h(J,{title:a(w),modelValue:a(p),"onUpdate:modelValue":e[5]||(e[5]=o=>W(p)?p.value=o:null)},{footer:s(()=>[r(b,{onClick:D,type:"primary",disabled:a(n)},{default:s(()=>[k("\u786E \u5B9A")]),_:1},8,["disabled"]),r(b,{onClick:e[4]||(e[4]=o=>p.value=!1)},{default:s(()=>[k("\u53D6 \u6D88")]),_:1})]),default:s(()=>[Q((x(),h(P,{ref_key:"formRef",ref:v,model:a(t),rules:a(S),"label-width":"100px"},{default:s(()=>[r(m,{label:"\u6807\u9898",prop:"title"},{default:s(()=>[r(i,{modelValue:a(t).title,"onUpdate:modelValue":e[0]||(e[0]=o=>a(t).title=o),placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u56FE\u7247URL",prop:"imageUrl"},{default:s(()=>[r(M,{class:"upload-demo","on-success":A,"before-upload":z,"on-preview":E,"on-remove":G,"file-list":a(T),"auto-upload":!1,limit:3,"list-type":"picture-card"},{default:s(()=>[y,g]),_:1},8,["file-list"])]),_:1}),r(m,{label:"\u63CF\u8FF0"},{default:s(()=>[r(i,{type:"textarea",rows:2,placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",modelValue:a(t).description,"onUpdate:modelValue":e[1]||(e[1]=o=>a(t).description=o)},null,8,["modelValue"])]),_:1}),r(m,{label:"\u6D3B\u52A8\u94FE\u63A5URL",prop:"linkUrl"},{default:s(()=>[r(i,{modelValue:a(t).linkUrl,"onUpdate:modelValue":e[2]||(e[2]=o=>a(t).linkUrl=o),placeholder:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u94FE\u63A5URL"},null,8,["modelValue"])]),_:1}),r(m,{label:"\u663E\u793A\u987A\u5E8F",prop:"sort"},{default:s(()=>[r(i,{modelValue:a(t).sort,"onUpdate:modelValue":e[3]||(e[3]=o=>a(t).sort=o),placeholder:"\u8BF7\u8F93\u5165\u663E\u793A\u987A\u5E8F"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[K,a(n)]])]),_:1},8,["title","modelValue"])}}})});export{R as _,ie as __tla,q as d,C as e,j as g};
