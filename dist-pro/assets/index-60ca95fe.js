import{d as na,l as sa,u as ia,r as g,f as ca,A as _a,O as ua,o as s,c as I,i as a,w as e,a as l,P as K,F as B,k as pa,q as i,j as c,B as m,t as ma,a3 as R,T as da,D as fa,M as ya,C as ha,_ as ba,H as ga,I as wa,J as ka,K as va,L as ja,__tla as xa}from"./index-cc83619a.js";import{_ as Ca,__tla as Na}from"./index.vue_vue_type_script_setup_true_lang-6a34f388.js";import{E as Sa,a as Oa,b as Ra,__tla as Pa}from"./el-dropdown-item-f6168e8e.js";import{_ as Ta,__tla as Va}from"./DictTag.vue_vue_type_script_lang-cb3b80f7.js";import{_ as Aa,__tla as qa}from"./ContentWrap.vue_vue_type_script_setup_true_lang-21865cbe.js";import{_ as Ua,__tla as Ja}from"./index-b7329df8.js";import{a as La,D,__tla as za}from"./dict-a02a16d0.js";import{c as P,__tla as Fa}from"./permission-8b5b4148.js";import{_ as Ia,__tla as Ka}from"./JobForm.vue_vue_type_script_setup_true_lang-35f1ee0e.js";import{_ as Ba,__tla as Da}from"./JobDetail.vue_vue_type_script_setup_true_lang-8b2516d2.js";import{d as Ma}from"./download-20922b56.js";import{b as Ea,e as Ga,d as Ha,f as Qa,r as Xa,__tla as Za}from"./index-0450f022.js";import{c as d}from"./constants-3cc050b6.js";import{u as Wa,__tla as Ya}from"./useMessage-36d6be68.js";import{__tla as $a}from"./index-e43f39f4.js";import"./color-a8b4eb58.js";import{__tla as ae}from"./el-card-a16612ff.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as ee}from"./Dialog.vue_vue_type_style_index_0_lang-4fd20e63.js";import{__tla as te}from"./el-descriptions-item-46f2ed6b.js";import{__tla as le}from"./el-timeline-item-d4212990.js";import{__tla as re}from"./formatTime-b3879261.js";let M,oe=Promise.all([(()=>{try{return xa}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return Ja}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Za}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return $a}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return re}catch{}})()]).then(async()=>{M=na({name:"InfraJob",__name:"index",setup(ne){const{t:x}=sa(),f=Wa(),{push:E}=ia(),C=g(!0),T=g(0),V=g([]),o=ca({pageNo:1,pageSize:10,name:void 0,status:void 0,handlerName:void 0}),A=g(),N=g(!1),y=async()=>{C.value=!0;try{const r=await Ea(o);V.value=r.list,T.value=r.total}finally{C.value=!1}},k=()=>{o.pageNo=1,y()},G=()=>{A.value.resetFields(),k()},H=async()=>{try{await f.exportConfirm(),N.value=!0;const r=await Ga(o);Ma.excel(r,"\u5B9A\u65F6\u4EFB\u52A1.xls")}catch{}finally{N.value=!1}},q=g(),U=(r,n)=>{q.value.open(r,n)},Q=async r=>{try{await f.confirm("\u786E\u8BA4\u8981\u7ACB\u5373\u6267\u884C\u4E00\u6B21"+r.name+"?",x("common.reminder")),await Xa(r.id),f.success("\u6267\u884C\u6210\u529F"),await y()}catch{}},J=g(),X=r=>{J.value.open(r)},L=r=>{E(r>0?"/job/job-log?id="+r:"/job/job-log")};return _a(()=>{y()}),(r,n)=>{const S=Ua,z=da,v=fa,Z=ya,W=ha,w=ba,u=ga,Y=wa,F=Aa,h=ka,$=Ta,O=Sa,aa=Oa,ea=Ra,ta=va,la=Ca,b=ua("hasPermi"),ra=ja;return s(),I(B,null,[a(S,{title:"\u5B9A\u65F6\u4EFB\u52A1",url:"https://doc.iocoder.cn/job/"}),a(S,{title:"\u5F02\u6B65\u4EFB\u52A1",url:"https://doc.iocoder.cn/async-task/"}),a(S,{title:"\u6D88\u606F\u961F\u5217",url:"https://doc.iocoder.cn/message-queue/"}),a(F,null,{default:e(()=>[a(Y,{class:"-mb-15px",model:l(o),ref_key:"queryFormRef",ref:A,inline:!0,"label-width":"100px"},{default:e(()=>[a(v,{label:"\u4EFB\u52A1\u540D\u79F0",prop:"name"},{default:e(()=>[a(z,{modelValue:l(o).name,"onUpdate:modelValue":n[0]||(n[0]=t=>l(o).name=t),placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0",clearable:"",onKeyup:K(k,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),a(v,{label:"\u4EFB\u52A1\u72B6\u6001",prop:"status"},{default:e(()=>[a(W,{modelValue:l(o).status,"onUpdate:modelValue":n[1]||(n[1]=t=>l(o).status=t),placeholder:"\u8BF7\u9009\u62E9\u4EFB\u52A1\u72B6\u6001",clearable:"",class:"!w-240px"},{default:e(()=>[(s(!0),I(B,null,pa(l(La)(l(D).INFRA_JOB_STATUS),t=>(s(),i(Z,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(v,{label:"\u5904\u7406\u5668\u7684\u540D\u5B57",prop:"handlerName"},{default:e(()=>[a(z,{modelValue:l(o).handlerName,"onUpdate:modelValue":n[2]||(n[2]=t=>l(o).handlerName=t),placeholder:"\u8BF7\u8F93\u5165\u5904\u7406\u5668\u7684\u540D\u5B57",clearable:"",onKeyup:K(k,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),a(v,null,{default:e(()=>[a(u,{onClick:k},{default:e(()=>[a(w,{icon:"ep:search",class:"mr-5px"}),c(" \u641C\u7D22")]),_:1}),a(u,{onClick:G},{default:e(()=>[a(w,{icon:"ep:refresh",class:"mr-5px"}),c(" \u91CD\u7F6E")]),_:1}),m((s(),i(u,{type:"primary",plain:"",onClick:n[3]||(n[3]=t=>U("create"))},{default:e(()=>[a(w,{icon:"ep:plus",class:"mr-5px"}),c(" \u65B0\u589E ")]),_:1})),[[b,["infra:job:create"]]]),m((s(),i(u,{type:"success",plain:"",onClick:H,loading:l(N)},{default:e(()=>[a(w,{icon:"ep:download",class:"mr-5px"}),c(" \u5BFC\u51FA ")]),_:1},8,["loading"])),[[b,["infra:job:export"]]]),m((s(),i(u,{type:"info",plain:"",onClick:L},{default:e(()=>[a(w,{icon:"ep:zoom-in",class:"mr-5px"}),c(" \u6267\u884C\u65E5\u5FD7 ")]),_:1})),[[b,["infra:job:query"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(F,null,{default:e(()=>[m((s(),i(ta,{data:l(V)},{default:e(()=>[a(h,{label:"\u4EFB\u52A1\u7F16\u53F7",align:"center",prop:"id"}),a(h,{label:"\u4EFB\u52A1\u540D\u79F0",align:"center",prop:"name"}),a(h,{label:"\u4EFB\u52A1\u72B6\u6001",align:"center",prop:"status"},{default:e(t=>[a($,{type:l(D).INFRA_JOB_STATUS,value:t.row.status},null,8,["type","value"])]),_:1}),a(h,{label:"\u5904\u7406\u5668\u7684\u540D\u5B57",align:"center",prop:"handlerName"}),a(h,{label:"\u5904\u7406\u5668\u7684\u53C2\u6570",align:"center",prop:"handlerParam"}),a(h,{label:"CRON \u8868\u8FBE\u5F0F",align:"center",prop:"cronExpression"}),a(h,{label:"\u64CD\u4F5C",align:"center",width:"200"},{default:e(t=>[m((s(),i(u,{type:"primary",link:"",onClick:j=>U("update",t.row.id)},{default:e(()=>[c(" \u4FEE\u6539 ")]),_:2},1032,["onClick"])),[[b,["infra:job:update"]]]),m((s(),i(u,{type:"primary",link:"",onClick:j=>(async _=>{try{const p=_.status===d.STOP?"\u5F00\u542F":"\u5173\u95ED";await f.confirm("\u786E\u8BA4\u8981"+p+'\u5B9A\u65F6\u4EFB\u52A1\u7F16\u53F7\u4E3A"'+_.id+'"\u7684\u6570\u636E\u9879?',x("common.reminder"));const oa=_.status===d.STOP?d.NORMAL:d.STOP;await Ha(_.id,oa),f.success(p+"\u6210\u529F"),await y()}catch{_.status=_.status===d.NORMAL?d.STOP:d.NORMAL}})(t.row)},{default:e(()=>[c(ma(t.row.status===l(d).STOP?"\u5F00\u542F":"\u6682\u505C"),1)]),_:2},1032,["onClick"])),[[b,["infra:job:update"]]]),m((s(),i(u,{type:"danger",link:"",onClick:j=>(async _=>{try{await f.delConfirm(),await Qa(_),f.success(x("common.delSuccess")),await y()}catch{}})(t.row.id)},{default:e(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[b,["infra:job:delete"]]]),m((s(),i(ea,{onCommand:j=>((_,p)=>{switch(_){case"handleRun":Q(p);break;case"openDetail":X(p.id);break;case"handleJobLog":L(p==null?void 0:p.id)}})(j,t.row)},{dropdown:e(()=>[a(aa,null,{default:e(()=>[l(P)(["infra:job:trigger"])?(s(),i(O,{key:0,command:"handleRun"},{default:e(()=>[c(" \u6267\u884C\u4E00\u6B21 ")]),_:1})):R("",!0),l(P)(["infra:job:query"])?(s(),i(O,{key:1,command:"openDetail"},{default:e(()=>[c(" \u4EFB\u52A1\u8BE6\u7EC6 ")]),_:1})):R("",!0),l(P)(["infra:job:query"])?(s(),i(O,{key:2,command:"handleJobLog"},{default:e(()=>[c(" \u8C03\u5EA6\u65E5\u5FD7 ")]),_:1})):R("",!0)]),_:1})]),default:e(()=>[a(u,{type:"primary",link:""},{default:e(()=>[a(w,{icon:"ep:d-arrow-right"}),c(" \u66F4\u591A")]),_:1})]),_:2},1032,["onCommand"])),[[b,["infra:job:trigger","infra:job:query"]]])]),_:1})]),_:1},8,["data"])),[[ra,l(C)]]),a(la,{total:l(T),page:l(o).pageNo,"onUpdate:page":n[4]||(n[4]=t=>l(o).pageNo=t),limit:l(o).pageSize,"onUpdate:limit":n[5]||(n[5]=t=>l(o).pageSize=t),onPagination:y},null,8,["total","page","limit"])]),_:1}),a(Ia,{ref_key:"formRef",ref:q,onSuccess:y},null,512),a(Ba,{ref_key:"detailRef",ref:J},null,512)],64)}}})});export{oe as __tla,M as default};
