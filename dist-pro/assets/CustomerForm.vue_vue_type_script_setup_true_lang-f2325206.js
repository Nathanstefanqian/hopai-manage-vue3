import{ao as V,d as W,r as p,f as X,o as n,q as _,w as d,i as e,j as N,a as l,B as Z,c as U,k as I,F as k,a3 as $,x as ee,l as ae,dP as le,dQ as de,T as te,D as oe,E as ue,C as re,n as se,G as ne,I as ie,H as me,L as pe,M as ce,__tla as _e}from"./index-ad2885e5.js";import{_ as ve,__tla as fe}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import{E as Ve,__tla as be}from"./el-tree-select-27ee869a.js";import{e as q,D as x,__tla as he}from"./dict-197e00ae.js";import{g as ye,__tla as we}from"./index-b128bf05.js";import{d as Ue}from"./tree-ebab458e.js";import{g as Ie,__tla as ke}from"./index-600d2f7f.js";import{u as ge,__tla as qe}from"./useMessage-db992d55.js";let A,O,Q,D,C,xe=Promise.all([(()=>{try{return _e}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return be}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return we}catch{}})(),(()=>{try{return ke}catch{}})(),(()=>{try{return qe}catch{}})()]).then(async()=>{O=async m=>await V.get({url:"/crm/customer/page",params:m}),C=async m=>await V.get({url:"/crm/customer/get?id="+m}),Q=async m=>await V.delete({url:"/crm/customer/delete?id="+m}),D=async m=>await V.download({url:"/crm/customer/export-excel",params:m}),A=W({__name:"CustomerForm",emits:["success"],setup(m,{expose:F,emit:L}){const{t:g}=ae(),R=ge(),v=p(!1),T=p(""),f=p(!1),b=p(""),E=p([]),M=p([]),o=p({id:void 0,name:void 0,mobile:void 0,industryId:void 0,level:void 0,source:void 0,telephone:void 0,website:void 0,qq:void 0,wechat:void 0,email:void 0,description:void 0,remark:void 0,areaId:void 0,detailAddress:void 0,contactNextTime:void 0,ownerUserId:void 0}),P=X({name:[{required:!0,message:"\u5BA2\u6237\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],ownerUserId:[{required:!0,message:"\u8D1F\u8D23\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),h=p();F({open:async(i,t)=>{if(v.value=!0,T.value=g("action."+i),b.value=i,G(),t){f.value=!0;try{o.value=await C(t)}finally{f.value=!1}}if(E.value=await ye(),M.value=await Ie(),b.value==="create"){const{wsCache:s}=le(),u=s.get(de.USER).user;o.value.ownerUserId=u.id}}});const j=L,B=async()=>{if(h&&await h.value.validate()){f.value=!0;try{const i=o.value;b.value==="create"?(await(async t=>await V.post({url:"/crm/customer/create",data:t}))(i),R.success(g("common.createSuccess"))):(await(async t=>await V.put({url:"/crm/customer/update",data:t}))(i),R.success(g("common.updateSuccess"))),v.value=!1,j("success")}finally{f.value=!1}}},G=()=>{var i;o.value={id:void 0,name:void 0,mobile:void 0,industryId:void 0,level:void 0,source:void 0,telephone:void 0,website:void 0,qq:void 0,wechat:void 0,email:void 0,description:void 0,remark:void 0,areaId:void 0,detailAddress:void 0,contactNextTime:void 0,ownerUserId:void 0},(i=h.value)==null||i.resetFields()};return(i,t)=>{const s=te,u=oe,r=ue,y=ce,w=re,c=se,H=Ve,Y=ne,z=ie,S=me,J=ve,K=pe;return n(),_(J,{title:l(T),modelValue:l(v),"onUpdate:modelValue":t[17]||(t[17]=a=>ee(v)?v.value=a:null)},{footer:d(()=>[e(S,{onClick:B,type:"primary",disabled:l(f)},{default:d(()=>[N("\u786E \u5B9A")]),_:1},8,["disabled"]),e(S,{onClick:t[16]||(t[16]=a=>v.value=!1)},{default:d(()=>[N("\u53D6 \u6D88")]),_:1})]),default:d(()=>[Z((n(),_(z,{ref_key:"formRef",ref:h,model:l(o),rules:l(P),"label-width":"100px"},{default:d(()=>[e(c,null,{default:d(()=>[e(r,{span:12},{default:d(()=>[e(u,{label:"\u5BA2\u6237\u540D\u79F0",prop:"name"},{default:d(()=>[e(s,{modelValue:l(o).name,"onUpdate:modelValue":t[0]||(t[0]=a=>l(o).name=a),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:d(()=>[e(u,{label:"\u6240\u5C5E\u884C\u4E1A",prop:"industryId"},{default:d(()=>[e(w,{modelValue:l(o).industryId,"onUpdate:modelValue":t[1]||(t[1]=a=>l(o).industryId=a),placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u884C\u4E1A"},{default:d(()=>[(n(!0),U(k,null,I(l(q)(l(x).CRM_CUSTOMER_INDUSTRY),a=>(n(),_(y,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:d(()=>[e(r,{span:12},{default:d(()=>[e(u,{label:"\u5BA2\u6237\u6765\u6E90",prop:"source"},{default:d(()=>[e(w,{modelValue:l(o).source,"onUpdate:modelValue":t[2]||(t[2]=a=>l(o).source=a),placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237\u6765\u6E90"},{default:d(()=>[(n(!0),U(k,null,I(l(q)(l(x).CRM_CUSTOMER_SOURCE),a=>(n(),_(y,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:d(()=>[e(u,{label:"\u5BA2\u6237\u7B49\u7EA7",prop:"level"},{default:d(()=>[e(w,{modelValue:l(o).level,"onUpdate:modelValue":t[3]||(t[3]=a=>l(o).level=a),placeholder:"\u8BF7\u9009\u62E9\u5BA2\u6237\u7B49\u7EA7"},{default:d(()=>[(n(!0),U(k,null,I(l(q)(l(x).CRM_CUSTOMER_LEVEL),a=>(n(),_(y,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:d(()=>[e(r,{span:12},{default:d(()=>[e(u,{label:"\u624B\u673A",prop:"mobile"},{default:d(()=>[e(s,{modelValue:l(o).mobile,"onUpdate:modelValue":t[4]||(t[4]=a=>l(o).mobile=a),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:d(()=>[e(u,{label:"\u7535\u8BDD",prop:"telephone"},{default:d(()=>[e(s,{modelValue:l(o).telephone,"onUpdate:modelValue":t[5]||(t[5]=a=>l(o).telephone=a),placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:d(()=>[e(r,{span:12},{default:d(()=>[e(u,{label:"\u90AE\u7BB1",prop:"email"},{default:d(()=>[e(s,{modelValue:l(o).email,"onUpdate:modelValue":t[6]||(t[6]=a=>l(o).email=a),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:d(()=>[e(u,{label:"QQ",prop:"qq"},{default:d(()=>[e(s,{modelValue:l(o).qq,"onUpdate:modelValue":t[7]||(t[7]=a=>l(o).qq=a),placeholder:"\u8BF7\u8F93\u5165QQ"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:d(()=>[e(r,{span:12},{default:d(()=>[e(u,{label:"\u5FAE\u4FE1",prop:"wechat"},{default:d(()=>[e(s,{modelValue:l(o).wechat,"onUpdate:modelValue":t[8]||(t[8]=a=>l(o).wechat=a),placeholder:"\u8BF7\u8F93\u5165\u5FAE\u4FE1"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:12},{default:d(()=>[e(u,{label:"\u7F51\u5740",prop:"website"},{default:d(()=>[e(s,{modelValue:l(o).website,"onUpdate:modelValue":t[9]||(t[9]=a=>l(o).website=a),placeholder:"\u8BF7\u8F93\u5165\u7F51\u5740"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:d(()=>[e(r,{span:12},{default:d(()=>[e(u,{label:"\u6240\u5728\u5730",prop:"areaId"},{default:d(()=>[e(H,{modelValue:l(o).areaId,"onUpdate:modelValue":t[10]||(t[10]=a=>l(o).areaId=a),data:l(E),props:l(Ue),"render-after-expand":!0},null,8,["modelValue","data","props"])]),_:1})]),_:1}),e(r,{span:12},{default:d(()=>[e(u,{label:"\u8BE6\u7EC6\u5730\u5740",prop:"detailAddress"},{default:d(()=>[e(s,{modelValue:l(o).detailAddress,"onUpdate:modelValue":t[11]||(t[11]=a=>l(o).detailAddress=a),placeholder:"\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(b)==="create"?(n(),_(u,{key:0,label:"\u8D1F\u8D23\u4EBA",prop:"userIds",span:"24"},{default:d(()=>[e(w,{modelValue:l(o).ownerUserId,"onUpdate:modelValue":t[12]||(t[12]=a=>l(o).ownerUserId=a)},{default:d(()=>[(n(!0),U(k,null,I(l(M),a=>(n(),_(y,{key:parseInt(a.id),label:a.nickname,value:parseInt(a.id)},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):$("",!0),e(c,null,{default:d(()=>[e(r,{span:12},{default:d(()=>[e(u,{label:"\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4",prop:"contactNextTime"},{default:d(()=>[e(Y,{modelValue:l(o).contactNextTime,"onUpdate:modelValue":t[13]||(t[13]=a=>l(o).contactNextTime=a),type:"date","value-format":"x",placeholder:"\u9009\u62E9\u4E0B\u6B21\u8054\u7CFB\u65F6\u95F4"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,{span:24},{default:d(()=>[e(u,{label:"\u5BA2\u6237\u63CF\u8FF0",prop:"description"},{default:d(()=>[e(s,{modelValue:l(o).description,"onUpdate:modelValue":t[14]||(t[14]=a=>l(o).description=a),placeholder:"\u8BF7\u8F93\u5165\u5BA2\u6237\u63CF\u8FF0"},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{span:24},{default:d(()=>[e(u,{label:"\u5907\u6CE8",prop:"remark"},{default:d(()=>[e(s,{modelValue:l(o).remark,"onUpdate:modelValue":t[15]||(t[15]=a=>l(o).remark=a),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[K,l(f)]])]),_:1},8,["title","modelValue"])}}})});export{A as _,xe as __tla,O as a,Q as d,D as e,C as g};
