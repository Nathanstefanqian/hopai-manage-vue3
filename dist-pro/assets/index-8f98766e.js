import{d as Q,l as W,r as m,f as X,A as Y,O as Z,o as n,c as S,i as a,w as t,a as l,P as $,F as x,k as M,q as c,j as _,B as f,g as aa,t as v,T as ea,D as ta,M as la,C as ra,_ as sa,H as oa,I as na,J as _a,aj as ca,K as ia,L as ua,__tla as pa}from"./index-cc83619a.js";import{_ as ma,__tla as da}from"./index.vue_vue_type_script_setup_true_lang-6a34f388.js";import{_ as fa,__tla as ya}from"./DictTag.vue_vue_type_script_lang-cb3b80f7.js";import{_ as ha,__tla as ga}from"./ContentWrap.vue_vue_type_script_setup_true_lang-21865cbe.js";import{_ as ba,__tla as ka}from"./index-b7329df8.js";import{a as wa,D as K,__tla as Sa}from"./dict-a02a16d0.js";import{d as xa,__tla as va}from"./formatTime-b3879261.js";import{_ as Ca,g as Ta,d as Va,__tla as Oa}from"./ClientForm.vue_vue_type_script_setup_true_lang-07f49c82.js";import{u as Na,__tla as Ua}from"./useMessage-36d6be68.js";import{__tla as za}from"./index-e43f39f4.js";import"./color-a8b4eb58.js";import{__tla as Aa}from"./el-card-a16612ff.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Ma}from"./Dialog.vue_vue_type_style_index_0_lang-4fd20e63.js";import{__tla as Ka}from"./UploadImg-62aa78ae.js";import{__tla as Pa}from"./el-image-viewer-8378089e.js";import"./constants-3cc050b6.js";let P,qa=Promise.all([(()=>{try{return pa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return Oa}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return Pa}catch{}})()]).then(async()=>{let C;C=["src"],P=Q({name:"SystemOAuth2Client",__name:"index",setup(Fa){const T=Na(),{t:q}=W(),y=m(!0),V=m(0),O=m([]),s=X({pageNo:1,pageSize:10,name:null,status:null}),N=m(),i=async()=>{y.value=!0;try{const u=await Ta(s);O.value=u.list,V.value=u.total}finally{y.value=!1}},h=()=>{s.pageNo=1,i()},F=()=>{N.value.resetFields(),h()},U=m(),z=(u,r)=>{U.value.open(u,r)};return Y(()=>{i()}),(u,r)=>{const R=ba,j=ea,g=ta,G=la,I=ra,b=sa,p=oa,B=na,A=ha,o=_a,D=fa,H=ca,J=ia,L=ma,k=Z("hasPermi"),E=ua;return n(),S(x,null,[a(R,{title:"OAuth 2.0\uFF08SSO \u5355\u70B9\u767B\u5F55)",url:"https://doc.iocoder.cn/oauth2/"}),a(A,null,{default:t(()=>[a(B,{class:"-mb-15px",model:l(s),ref_key:"queryFormRef",ref:N,inline:!0,"label-width":"68px"},{default:t(()=>[a(g,{label:"\u5E94\u7528\u540D",prop:"name"},{default:t(()=>[a(j,{modelValue:l(s).name,"onUpdate:modelValue":r[0]||(r[0]=e=>l(s).name=e),placeholder:"\u8BF7\u8F93\u5165\u5E94\u7528\u540D",clearable:"",onKeyup:$(h,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),a(g,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[a(I,{modelValue:l(s).status,"onUpdate:modelValue":r[1]||(r[1]=e=>l(s).status=e),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:"",class:"!w-240px"},{default:t(()=>[(n(!0),S(x,null,M(l(wa)(l(K).COMMON_STATUS),e=>(n(),c(G,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(g,null,{default:t(()=>[a(p,{onClick:h},{default:t(()=>[a(b,{icon:"ep:search",class:"mr-5px"}),_(" \u641C\u7D22")]),_:1}),a(p,{onClick:F},{default:t(()=>[a(b,{icon:"ep:refresh",class:"mr-5px"}),_(" \u91CD\u7F6E")]),_:1}),f((n(),c(p,{plain:"",type:"primary",onClick:r[2]||(r[2]=e=>z("create"))},{default:t(()=>[a(b,{icon:"ep:plus",class:"mr-5px"}),_(" \u65B0\u589E ")]),_:1})),[[k,["system:oauth2-client:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(A,null,{default:t(()=>[f((n(),c(J,{data:l(O)},{default:t(()=>[a(o,{label:"\u5BA2\u6237\u7AEF\u7F16\u53F7",align:"center",prop:"clientId"}),a(o,{label:"\u5BA2\u6237\u7AEF\u5BC6\u94A5",align:"center",prop:"secret"}),a(o,{label:"\u5E94\u7528\u540D",align:"center",prop:"name"}),a(o,{label:"\u5E94\u7528\u56FE\u6807",align:"center",prop:"logo"},{default:t(e=>[aa("img",{width:"40px",height:"40px",src:e.row.logo},null,8,C)]),_:1}),a(o,{label:"\u72B6\u6001",align:"center",prop:"status"},{default:t(e=>[a(D,{type:l(K).COMMON_STATUS,value:e.row.status},null,8,["type","value"])]),_:1}),a(o,{label:"\u8BBF\u95EE\u4EE4\u724C\u7684\u6709\u6548\u671F",align:"center",prop:"accessTokenValiditySeconds"},{default:t(e=>[_(v(e.row.accessTokenValiditySeconds)+" \u79D2",1)]),_:1}),a(o,{label:"\u5237\u65B0\u4EE4\u724C\u7684\u6709\u6548\u671F",align:"center",prop:"refreshTokenValiditySeconds"},{default:t(e=>[_(v(e.row.refreshTokenValiditySeconds)+" \u79D2",1)]),_:1}),a(o,{label:"\u6388\u6743\u7C7B\u578B",align:"center",prop:"authorizedGrantTypes"},{default:t(e=>[(n(!0),S(x,null,M(e.row.authorizedGrantTypes,(w,d)=>(n(),c(H,{"disable-transitions":!0,key:d,index:d,class:"mr-5px"},{default:t(()=>[_(v(w),1)]),_:2},1032,["index"]))),128))]),_:1}),a(o,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:l(xa)},null,8,["formatter"]),a(o,{label:"\u64CD\u4F5C",align:"center"},{default:t(e=>[f((n(),c(p,{link:"",type:"primary",onClick:w=>z("update",e.row.id)},{default:t(()=>[_(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[k,["system:oauth2-client:update"]]]),f((n(),c(p,{link:"",type:"danger",onClick:w=>(async d=>{try{await T.delConfirm(),await Va(d),T.success(q("common.delSuccess")),await i()}catch{}})(e.row.id)},{default:t(()=>[_(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[k,["system:oauth2-client:delete"]]])]),_:1})]),_:1},8,["data"])),[[E,l(y)]]),a(L,{total:l(V),page:l(s).pageNo,"onUpdate:page":r[3]||(r[3]=e=>l(s).pageNo=e),limit:l(s).pageSize,"onUpdate:limit":r[4]||(r[4]=e=>l(s).pageSize=e),onPagination:i},null,8,["total","page","limit"])]),_:1}),a(Ca,{ref_key:"formRef",ref:U,onSuccess:i},null,512)],64)}}})});export{qa as __tla,P as default};
