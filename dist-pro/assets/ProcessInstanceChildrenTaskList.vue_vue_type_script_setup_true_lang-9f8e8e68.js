import{d as x,r as c,o as u,l as p,w as l,e as I,t as k,a as r,f as e,m as g,V as w,i as V,ak as m,_ as D,z as L,B as N,C as z,__tla as B}from"./index-e69fb82c.js";import{E as R,__tla as j}from"./el-drawer-b213ec1b.js";import{_ as A,__tla as F}from"./DictTag.vue_vue_type_script_lang-9321406d.js";import{D as M,__tla as O}from"./dict-9c294b1e.js";import{d as C,__tla as q}from"./formatTime-d17a0e16.js";import{_ as G,__tla as H}from"./TaskSubSignDialogForm.vue_vue_type_script_name_TaskRollbackDialogForm_setup_true_lang-bb68cc4e.js";import{u as J,__tla as K}from"./useMessage-ac7e9ad3.js";let b,Q=Promise.all([(()=>{try{return B}catch{}})(),(()=>{try{return j}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return O}catch{}})(),(()=>{try{return q}catch{}})(),(()=>{try{return H}catch{}})(),(()=>{try{return K}catch{}})()]).then(async()=>{b=x({name:"ProcessInstanceChildrenTaskList",__name:"ProcessInstanceChildrenTaskList",setup(W,{expose:v}){const T=J(),i=c(!1),n=c({});v({open:async a=>{m(a.children)?T.warning("\u8BE5\u4EFB\u52A1\u6CA1\u6709\u5B50\u4EFB\u52A1"):(n.value=a,i.value=!0)}});const d=c(),f=a=>{d.value.open(a.id)},h=a=>{if(a&&a.children&&!m(a.children)){const s=a.children.find(_=>_.result===1||_.result===9);return!m(s)}return!1};return(a,s)=>{const _=D,y=L,o=N,S=A,U=z,E=R;return u(),p(E,{modelValue:r(i),"onUpdate:modelValue":s[1]||(s[1]=t=>V(i)?i.value=t:null),title:"\u5B50\u4EFB\u52A1",size:"70%"},{header:l(()=>{var t;return[I("h4",null,"\u3010"+k(r(n).name)+" \u3011\u5BA1\u6279\u4EBA\uFF1A"+k((t=r(n).assigneeUser)==null?void 0:t.nickname),1),h(r(n))?(u(),p(y,{key:0,style:{"margin-left":"5px"},type:"danger",plain:"",onClick:s[0]||(s[0]=P=>f(r(n)))},{default:l(()=>[e(_,{icon:"ep:remove"}),g(" \u51CF\u7B7E ")]),_:1})):w("",!0)]}),default:l(()=>[e(U,{data:r(n).children,style:{width:"100%"},"row-key":"id",border:""},{default:l(()=>[e(o,{prop:"assigneeUser.nickname",label:"\u5BA1\u6279\u4EBA"}),e(o,{prop:"assigneeUser.deptName",label:"\u6240\u5728\u90E8\u95E8"}),e(o,{label:"\u5BA1\u6279\u72B6\u6001",prop:"result"},{default:l(t=>[e(S,{type:r(M).BPM_PROCESS_INSTANCE_RESULT,value:t.row.result},null,8,["type","value"])]),_:1}),e(o,{label:"\u63D0\u4EA4\u65F6\u95F4",align:"center",prop:"createTime",width:"180",formatter:r(C)},null,8,["formatter"]),e(o,{label:"\u7ED3\u675F\u65F6\u95F4",align:"center",prop:"endTime",width:"180",formatter:r(C)},null,8,["formatter"]),e(o,{label:"\u64CD\u4F5C",prop:"operation"},{default:l(t=>[h(t.row)?(u(),p(y,{key:0,type:"danger",plain:"",onClick:P=>f(t.row)},{default:l(()=>[e(_,{icon:"ep:remove"}),g(" \u51CF\u7B7E ")]),_:2},1032,["onClick"])):w("",!0)]),_:1})]),_:1},8,["data"]),e(G,{ref_key:"taskSubSignDialogForm",ref:d},null,512)]),_:1},8,["modelValue"])}}})});export{b as _,Q as __tla};
