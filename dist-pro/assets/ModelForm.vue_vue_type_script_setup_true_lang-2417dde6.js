import{d as Q,g as W,r as m,b as X,o as s,l as u,w as o,f as r,a as e,m as g,p as Z,c as v,F as V,k as h,V as f,t as $,i as ee,e as b,bO as ae,M as le,aV as te,x as oe,q as re,v as se,ab as ue,ac as de,A as ie,z as me,D as ne,__tla as ce}from"./index-e69fb82c.js";import{_ as pe,__tla as fe}from"./Dialog.vue_vue_type_style_index_0_lang-dccb0a2a.js";import{a as D,D as E,__tla as _e}from"./dict-9c294b1e.js";import{g as ye,c as ve,u as be,__tla as ge}from"./index-c806102a.js";import{b as Ve,__tla as he}from"./index-f33ddbfb.js";import{u as we,__tla as ke}from"./useMessage-ac7e9ad3.js";let L,Ce=Promise.all([(()=>{try{return ce}catch{}})(),(()=>{try{return fe}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return he}catch{}})(),(()=>{try{return ke}catch{}})()]).then(async()=>{let w,k,C,P,x;w=b("i",{class:"el-icon-question",style:{"padding-left":"5px"}},null,-1),k=b("i",{class:"el-icon-question",style:{"padding-left":"5px"}},null,-1),C={key:1},P=b("i",{class:"el-icon-question",style:{"padding-left":"5px"}},null,-1),x=b("i",{class:"el-icon-question",style:{"padding-left":"5px"}},null,-1),L=Q({name:"ModelForm",__name:"ModelForm",emits:["success"],setup(Pe,{expose:R,emit:Y}){const{t:T}=W(),z=we(),n=m(!1),q=m(""),c=m(!1),U=m(""),l=m({formType:10,name:"",category:void 0,description:"",formId:"",formCustomCreatePath:"",formCustomViewPath:""}),A=X({category:[{required:!0,message:"\u53C2\u6570\u5206\u7C7B\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u53C2\u6570\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],key:[{required:!0,message:"\u53C2\u6570\u952E\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],value:[{required:!0,message:"\u53C2\u6570\u952E\u503C\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],visible:[{required:!0,message:"\u662F\u5426\u53EF\u89C1\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),_=m(),M=m([]);R({open:async(d,t)=>{if(n.value=!0,q.value=T("action."+d),U.value=d,G(),t){c.value=!0;try{l.value=await ye(t)}finally{c.value=!1}}M.value=await Ve()}});const B=Y,S=async()=>{if(_&&await _.value.validate()){c.value=!0;try{const d=l.value;U.value==="create"?(await ve(d),await ae.alert("<strong>\u65B0\u5EFA\u6A21\u578B\u6210\u529F\uFF01</strong>\u540E\u7EED\u9700\u8981\u6267\u884C\u5982\u4E0B 4 \u4E2A\u6B65\u9AA4\uFF1A<div>1. \u70B9\u51FB\u3010\u4FEE\u6539\u6D41\u7A0B\u3011\u6309\u94AE\uFF0C\u914D\u7F6E\u6D41\u7A0B\u7684\u5206\u7C7B\u3001\u8868\u5355\u4FE1\u606F</div><div>2. \u70B9\u51FB\u3010\u8BBE\u8BA1\u6D41\u7A0B\u3011\u6309\u94AE\uFF0C\u7ED8\u5236\u6D41\u7A0B\u56FE</div><div>3. \u70B9\u51FB\u3010\u5206\u914D\u89C4\u5219\u3011\u6309\u94AE\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u7528\u6237\u4EFB\u52A1\u7684\u5BA1\u6279\u4EBA</div><div>4. \u70B9\u51FB\u3010\u53D1\u5E03\u6D41\u7A0B\u3011\u6309\u94AE\uFF0C\u5B8C\u6210\u6D41\u7A0B\u7684\u6700\u7EC8\u53D1\u5E03</div>\u53E6\u5916\uFF0C\u6BCF\u6B21\u6D41\u7A0B\u4FEE\u6539\u540E\uFF0C\u90FD\u9700\u8981\u70B9\u51FB\u3010\u53D1\u5E03\u6D41\u7A0B\u3011\u6309\u94AE\uFF0C\u624D\u80FD\u6B63\u5F0F\u751F\u6548\uFF01\uFF01\uFF01","\u91CD\u8981\u63D0\u793A",{dangerouslyUseHTMLString:!0,type:"success"})):(await be(d),z.success(T("common.updateSuccess"))),n.value=!1,B("success")}finally{c.value=!1}}},G=()=>{var d;l.value={formType:10,name:"",category:void 0,description:"",formId:"",formCustomCreatePath:"",formCustomViewPath:""},(d=_.value)==null||d.resetFields()};return(d,t)=>{const p=le,y=te,i=oe,F=re,I=se,H=ue,j=de,J=ie,O=me,K=pe,N=ne;return s(),u(K,{modelValue:e(n),"onUpdate:modelValue":t[9]||(t[9]=a=>ee(n)?n.value=a:null),title:e(q),width:"600"},{footer:o(()=>[r(O,{disabled:e(c),type:"primary",onClick:S},{default:o(()=>[g("\u786E \u5B9A")]),_:1},8,["disabled"]),r(O,{onClick:t[8]||(t[8]=a=>n.value=!1)},{default:o(()=>[g("\u53D6 \u6D88")]),_:1})]),default:o(()=>[Z((s(),u(J,{ref_key:"formRef",ref:_,model:e(l),rules:e(A),"label-width":"110px"},{default:o(()=>[r(i,{label:"\u6D41\u7A0B\u6807\u8BC6",prop:"key"},{default:o(()=>[r(p,{modelValue:e(l).key,"onUpdate:modelValue":t[0]||(t[0]=a=>e(l).key=a),disabled:!!e(l).id,placeholder:"\u8BF7\u8F93\u5165\u6D41\u6807\u6807\u8BC6",style:{width:"330px"}},null,8,["modelValue","disabled"]),e(l).id?(s(),u(y,{key:1,class:"item",content:"\u6D41\u7A0B\u6807\u8BC6\u4E0D\u53EF\u4FEE\u6539\uFF01",effect:"light",placement:"top"},{default:o(()=>[k]),_:1})):(s(),u(y,{key:0,class:"item",content:"\u65B0\u5EFA\u540E\uFF0C\u6D41\u7A0B\u6807\u8BC6\u4E0D\u53EF\u4FEE\u6539\uFF01",effect:"light",placement:"top"},{default:o(()=>[w]),_:1}))]),_:1}),r(i,{label:"\u6D41\u7A0B\u540D\u79F0",prop:"name"},{default:o(()=>[r(p,{modelValue:e(l).name,"onUpdate:modelValue":t[1]||(t[1]=a=>e(l).name=a),disabled:!!e(l).id,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0"},null,8,["modelValue","disabled"])]),_:1}),e(l).id?(s(),u(i,{key:0,label:"\u6D41\u7A0B\u5206\u7C7B",prop:"category"},{default:o(()=>[r(I,{modelValue:e(l).category,"onUpdate:modelValue":t[2]||(t[2]=a=>e(l).category=a),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6D41\u7A0B\u5206\u7C7B",style:{width:"100%"}},{default:o(()=>[(s(!0),v(V,null,h(e(D)(e(E).BPM_MODEL_CATEGORY),a=>(s(),u(F,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):f("",!0),r(i,{label:"\u6D41\u7A0B\u63CF\u8FF0",prop:"description"},{default:o(()=>[r(p,{modelValue:e(l).description,"onUpdate:modelValue":t[3]||(t[3]=a=>e(l).description=a),clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1}),e(l).id?(s(),v("div",C,[r(i,{label:"\u8868\u5355\u7C7B\u578B",prop:"formType"},{default:o(()=>[r(j,{modelValue:e(l).formType,"onUpdate:modelValue":t[4]||(t[4]=a=>e(l).formType=a)},{default:o(()=>[(s(!0),v(V,null,h(e(D)(e(E).BPM_MODEL_FORM_TYPE),a=>(s(),u(H,{key:a.value,label:a.value},{default:o(()=>[g($(a.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(l).formType===10?(s(),u(i,{key:0,label:"\u6D41\u7A0B\u8868\u5355",prop:"formId"},{default:o(()=>[r(I,{modelValue:e(l).formId,"onUpdate:modelValue":t[5]||(t[5]=a=>e(l).formId=a),clearable:"",style:{width:"100%"}},{default:o(()=>[(s(!0),v(V,null,h(e(M),a=>(s(),u(F,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):f("",!0),e(l).formType===20?(s(),u(i,{key:1,label:"\u8868\u5355\u63D0\u4EA4\u8DEF\u7531",prop:"formCustomCreatePath"},{default:o(()=>[r(p,{modelValue:e(l).formCustomCreatePath,"onUpdate:modelValue":t[6]||(t[6]=a=>e(l).formCustomCreatePath=a),placeholder:"\u8BF7\u8F93\u5165\u8868\u5355\u63D0\u4EA4\u8DEF\u7531",style:{width:"330px"}},null,8,["modelValue"]),r(y,{class:"item",content:"\u81EA\u5B9A\u4E49\u8868\u5355\u7684\u63D0\u4EA4\u8DEF\u5F84\uFF0C\u4F7F\u7528 Vue \u7684\u8DEF\u7531\u5730\u5740\uFF0C\u4F8B\u5982\u8BF4\uFF1Abpm/oa/leave/create",effect:"light",placement:"top"},{default:o(()=>[P]),_:1})]),_:1})):f("",!0),e(l).formType===20?(s(),u(i,{key:2,label:"\u8868\u5355\u67E5\u770B\u8DEF\u7531",prop:"formCustomViewPath"},{default:o(()=>[r(p,{modelValue:e(l).formCustomViewPath,"onUpdate:modelValue":t[7]||(t[7]=a=>e(l).formCustomViewPath=a),placeholder:"\u8BF7\u8F93\u5165\u8868\u5355\u67E5\u770B\u8DEF\u7531",style:{width:"330px"}},null,8,["modelValue"]),r(y,{class:"item",content:"\u81EA\u5B9A\u4E49\u8868\u5355\u7684\u67E5\u770B\u8DEF\u5F84\uFF0C\u4F7F\u7528 Vue \u7684\u8DEF\u7531\u5730\u5740\uFF0C\u4F8B\u5982\u8BF4\uFF1Abpm/oa/leave/view",effect:"light",placement:"top"},{default:o(()=>[x]),_:1})]),_:1})):f("",!0)])):f("",!0)]),_:1},8,["model","rules"])),[[N,e(c)]])]),_:1},8,["modelValue","title"])}}})});export{L as _,Ce as __tla};
