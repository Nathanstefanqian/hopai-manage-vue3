import{d as oa,N as _a,ak as na,e as ia,r as s,f as ca,A as ua,ai as ma,o as d,q as C,w as r,c as J,k as fa,a,F as pa,B as M,g as A,t as x,i as t,a3 as D,al as da,am as ya,an as ha,E as ka,L as va,j as f,D as ga,aj as ba,T as Ca,I as Ta,_ as wa,H as xa,__tla as Ua}from"./index-cc83619a.js";import{_ as Va,__tla as Da}from"./ContentWrap.vue_vue_type_script_setup_true_lang-21865cbe.js";import{E as Fa,__tla as Sa}from"./el-card-a16612ff.js";import{b as ja}from"./formCreate-a3356cdc.js";import{a as Aa,__tla as Ba}from"./index-3245bf9a.js";import{g as Ea,__tla as Pa}from"./index-1199e538.js";import{g as qa,a as Ia,r as Ra,__tla as za}from"./index-27a3e428.js";import{_ as Na,__tla as $a}from"./TaskUpdateAssigneeForm.vue_vue_type_script_setup_true_lang-e57739e6.js";import{_ as Ha,__tla as Ka}from"./ProcessInstanceBpmnViewer.vue_vue_type_style_index_0_lang-d3a84874.js";import{_ as La,__tla as Oa}from"./ProcessInstanceTaskList.vue_vue_type_script_setup_true_lang-9b436f11.js";import{_ as Za,__tla as Ga}from"./TaskReturnDialogForm.vue_vue_type_script_name_TaskRollbackDialogForm_setup_true_lang-46f6b42a.js";import{_ as Ja,__tla as Ma}from"./TaskDelegateForm.vue_vue_type_script_setup_true_lang-24349bc7.js";import{_ as Qa,__tla as Wa}from"./TaskAddSignDialogForm.vue_vue_type_script_setup_true_lang-8fc6b190.js";import{u as Xa,__tla as Ya}from"./useMessage-36d6be68.js";import{__tla as ae}from"./Dialog.vue_vue_type_style_index_0_lang-4fd20e63.js";import{__tla as ee}from"./index-d1032391.js";import{__tla as te}from"./bpmn-embedded-49ab43e3.js";import{__tla as re}from"./XTextButton-09766bc9.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as le}from"./XButton-d94eb0ee.js";import{__tla as se}from"./el-collapse-item-717957c7.js";import{__tla as oe}from"./el-link-e745c3e6.js";import{__tla as _e}from"./el-drawer-43e16f47.js";import{__tla as ne}from"./dict-a02a16d0.js";import{__tla as ie}from"./formatTime-b3879261.js";import{__tla as ce}from"./el-timeline-item-d4212990.js";import{__tla as ue}from"./DictTag.vue_vue_type_script_lang-cb3b80f7.js";import"./color-a8b4eb58.js";import{__tla as me}from"./ProcessInstanceChildrenTaskList.vue_vue_type_script_setup_true_lang-ddf8b605.js";import{__tla as fe}from"./TaskSubSignDialogForm.vue_vue_type_script_name_TaskRollbackDialogForm_setup_true_lang-81eef635.js";let Q,pe=Promise.all([(()=>{try{return Ua}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return Ba}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return $a}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return Oa}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Ma}catch{}})(),(()=>{try{return Wa}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return ae}catch{}})(),(()=>{try{return ee}catch{}})(),(()=>{try{return te}catch{}})(),(()=>{try{return re}catch{}})(),(()=>{try{return le}catch{}})(),(()=>{try{return se}catch{}})(),(()=>{try{return oe}catch{}})(),(()=>{try{return _e}catch{}})(),(()=>{try{return ne}catch{}})(),(()=>{try{return ie}catch{}})(),(()=>{try{return ce}catch{}})(),(()=>{try{return ue}catch{}})(),(()=>{try{return me}catch{}})(),(()=>{try{return fe}catch{}})()]).then(async()=>{let B,E,P,q;B={class:"el-icon-picture-outline"},E={style:{"margin-bottom":"20px","margin-left":"10%","font-size":"14px"}},P={class:"el-icon-document"},q={key:1},Q=oa({name:"BpmProcessInstanceDetail",__name:"index",setup(de){const{query:W}=_a(),F=Xa(),{proxy:X}=na(),Y=ia().getUser.id,S=W.id,T=s(!1),o=s({}),I=s(""),j=s(!0),k=s([]),U=s([]),v=s([]),aa=ca({reason:[{required:!0,message:"\u5BA1\u6279\u5EFA\u8BAE\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),V=s(),w=s({rule:[],option:{},value:{}}),R=async(_,e)=>{const l=U.value.indexOf(_),b=X.$refs["form"+l][0],y=a(b);if(!y||!await y.validate())return;const h={id:_.id,reason:v.value[l].reason};e?(await Ia(h),F.success("\u5BA1\u6279\u901A\u8FC7\u6210\u529F")):(await Ra(h),F.success("\u5BA1\u6279\u4E0D\u901A\u8FC7\u6210\u529F")),g()},z=s(),N=s(),$=s(),H=s(),g=()=>{ea(),ta()},K=s(null),ea=async()=>{try{T.value=!0;const _=await Ea(S);if(!_)return void F.error("\u67E5\u8BE2\u4E0D\u5230\u6D41\u7A0B\u4FE1\u606F\uFF01");o.value=_;const e=_.processDefinition;e.formType===10?(ja(w,e.formConf,e.formFields,_.formVariables),da().then(()=>{var l,b,y,h,u,m;(b=(l=V.value)==null?void 0:l.fapi)==null||b.btn.show(!1),(h=(y=V.value)==null?void 0:y.fapi)==null||h.resetBtn.show(!1),(m=(u=V.value)==null?void 0:u.fapi)==null||m.disabled(!0)})):K.value=ya(_.processDefinition.formCustomViewPath),I.value=await Aa(e.id)}finally{T.value=!1}},ta=async()=>{try{j.value=!0;const _=await qa(S);k.value=[],_.forEach(e=>{e.result!==4&&k.value.push(e)}),k.value.sort((e,l)=>e.endTime&&l.endTime?l.endTime-e.endTime:e.endTime?1:l.endTime?-1:l.createTime-e.createTime),U.value=[],v.value=[],L(k.value)}finally{j.value=!1}},L=_=>{_.forEach(e=>{ha(e.children)||L(e.children),e.result!==1&&e.result!==6||e.assigneeUser&&e.assigneeUser.id===Y&&(U.value.push({...e}),v.value.push({reason:""}))})};return ua(()=>{g()}),(_,e)=>{const l=ga,b=ba,y=Ca,h=Ta,u=wa,m=xa,O=ka,Z=Fa,ra=ma("form-create"),la=Va,G=va;return d(),C(la,null,{default:r(()=>[(d(!0),J(pa,null,fa(a(U),(i,p)=>M((d(),C(Z,{key:p,class:"box-card"},{header:r(()=>[A("span",B,"\u5BA1\u6279\u4EFB\u52A1\u3010"+x(i.name)+"\u3011",1)]),default:r(()=>[t(O,{offset:6,span:16},{default:r(()=>[t(h,{ref_for:!0,ref:"form"+p,model:a(v)[p],rules:a(aa),"label-width":"100px"},{default:r(()=>[a(o)&&a(o).name?(d(),C(l,{key:0,label:"\u6D41\u7A0B\u540D"},{default:r(()=>[f(x(a(o).name),1)]),_:1})):D("",!0),a(o)&&a(o).startUser?(d(),C(l,{key:1,label:"\u6D41\u7A0B\u53D1\u8D77\u4EBA"},{default:r(()=>[f(x(a(o).startUser.nickname)+" ",1),t(b,{size:"small",type:"info"},{default:r(()=>[f(x(a(o).startUser.deptName),1)]),_:1})]),_:1})):D("",!0),t(l,{label:"\u5BA1\u6279\u5EFA\u8BAE",prop:"reason"},{default:r(()=>[t(y,{modelValue:a(v)[p].reason,"onUpdate:modelValue":c=>a(v)[p].reason=c,placeholder:"\u8BF7\u8F93\u5165\u5BA1\u6279\u5EFA\u8BAE",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["model","rules"]),A("div",E,[t(m,{type:"success",onClick:c=>R(i,!0)},{default:r(()=>[t(u,{icon:"ep:select"}),f(" \u901A\u8FC7 ")]),_:2},1032,["onClick"]),t(m,{type:"danger",onClick:c=>R(i,!1)},{default:r(()=>[t(u,{icon:"ep:close"}),f(" \u4E0D\u901A\u8FC7 ")]),_:2},1032,["onClick"]),t(m,{type:"primary",onClick:c=>{return n=i.id,void z.value.open(n);var n}},{default:r(()=>[t(u,{icon:"ep:edit"}),f(" \u8F6C\u529E ")]),_:2},1032,["onClick"]),t(m,{type:"primary",onClick:c=>(async n=>{N.value.open(n.id)})(i)},{default:r(()=>[t(u,{icon:"ep:position"}),f(" \u59D4\u6D3E ")]),_:2},1032,["onClick"]),t(m,{type:"primary",onClick:c=>(async n=>{H.value.open(n.id)})(i)},{default:r(()=>[t(u,{icon:"ep:plus"}),f(" \u52A0\u7B7E ")]),_:2},1032,["onClick"]),t(m,{type:"warning",onClick:c=>(async n=>{$.value.open(n.id)})(i)},{default:r(()=>[t(u,{icon:"ep:back"}),f(" \u56DE\u9000 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024)),[[G,a(T)]])),128)),M((d(),C(Z,{class:"box-card"},{header:r(()=>[A("span",P,"\u7533\u8BF7\u4FE1\u606F\u3010"+x(a(o).name)+"\u3011",1)]),default:r(()=>{var i,p,c,n;return[((p=(i=a(o))==null?void 0:i.processDefinition)==null?void 0:p.formType)===10?(d(),C(O,{key:0,offset:6,span:16},{default:r(()=>[t(ra,{ref_key:"fApi",ref:V,modelValue:a(w).value,"onUpdate:modelValue":e[0]||(e[0]=sa=>a(w).value=sa),option:a(w).option,rule:a(w).rule},null,8,["modelValue","option","rule"])]),_:1})):D("",!0),((n=(c=a(o))==null?void 0:c.processDefinition)==null?void 0:n.formType)===20?(d(),J("div",q,[t(a(K),{id:a(o).businessKey},null,8,["id"])])):D("",!0)]}),_:1})),[[G,a(T)]]),t(La,{loading:a(j),tasks:a(k)},null,8,["loading","tasks"]),t(Ha,{id:`${a(S)}`,"bpmn-xml":a(I),loading:a(T),"process-instance":a(o),tasks:a(k)},null,8,["id","bpmn-xml","loading","process-instance","tasks"]),t(Na,{ref_key:"taskUpdateAssigneeFormRef",ref:z,onSuccess:g},null,512),t(Za,{ref_key:"taskReturnDialogRef",ref:$,onSuccess:g},null,512),t(Ja,{ref_key:"taskDelegateForm",ref:N,onSuccess:g},null,512),t(Qa,{ref_key:"taskAddSignDialogForm",ref:H,onSuccess:g},null,512)]),_:1})}}})});export{pe as __tla,Q as default};
