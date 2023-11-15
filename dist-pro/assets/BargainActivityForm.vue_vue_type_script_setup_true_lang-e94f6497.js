import{ao as y,f as N,d as Q,l as W,r as u,o as R,c as Z,i as l,w as n,a as s,j as F,B as $,q as aa,x as ea,F as ta,aq as M,al as ra,ar as ia,as as k,H as oa,bX as la,J as sa,L as na,__tla as ca}from"./index-ad2885e5.js";import{_ as ua,__tla as ma}from"./Dialog.vue_vue_type_style_index_0_lang-98b85c6a.js";import{_ as pa,__tla as da}from"./Form-37cd94c0.js";import{b as E,__tla as fa}from"./formatTime-7d212ed5.js";import{r as b,__tla as _a}from"./formRules-7e35ced6.js";import{u as ga,__tla as ba}from"./useCrudSchemas-5c9297a9.js";import{_ as ya,__tla as Pa}from"./SpuSelect.vue_vue_type_script_setup_true_lang-7c4dcc99.js";import{_ as va,__tla as ha}from"./SpuAndSkuList.vue_vue_type_script_setup_true_lang-6619c465.js";import{g as Ma,__tla as ka}from"./index-8839fa37.js";import{i as wa,__tla as Ca}from"./spu-e7e965e6.js";import{u as Fa,__tla as Ia}from"./useMessage-db992d55.js";let A,B,q,Sa=Promise.all([(()=>{try{return ca}catch{}})(),(()=>{try{return ma}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return ha}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Ia}catch{}})()]).then(async()=>{let I,S,V;q=async P=>await y.get({url:"/promotion/bargain-activity/page",params:P}),B=async P=>await y.put({url:"/promotion/bargain-activity/close?id="+P}),I=N({name:[b],startTime:[b],endTime:[b],helpMaxCount:[b],bargainCount:[b],singleLimitCount:[b]}),S=N([{label:"\u780D\u4EF7\u6D3B\u52A8\u540D\u79F0",field:"name",isSearch:!0,isTable:!1,form:{colProps:{span:24}}},{label:"\u6D3B\u52A8\u5F00\u59CB\u65F6\u95F4",field:"startTime",formatter:E,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u6D3B\u52A8\u7ED3\u675F\u65F6\u95F4",field:"endTime",formatter:E,isSearch:!0,search:{component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD",type:"daterange"}},form:{component:"DatePicker",componentProps:{type:"date",valueFormat:"x"}},table:{width:120}},{label:"\u780D\u4EF7\u4EBA\u6570",field:"helpMaxCount",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u53C2\u4E0E\u4EBA\u6570\u4E0D\u80FD\u5C11\u4E8E\u4E24\u4EBA",value:2}},{label:"\u6700\u5927\u5E2E\u780D\u6B21\u6570",field:"bargainCount",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u53C2\u4E0E\u4EBA\u6570\u4E0D\u80FD\u5C11\u4E8E\u4E24\u4EBA",value:2}},{label:"\u603B\u9650\u8D2D\u6570\u91CF",field:"totalLimitCount",isSearch:!1,form:{component:"InputNumber",labelMessage:"\u7528\u6237\u6700\u5927\u80FD\u53D1\u8D77\u780D\u4EF7\u7684\u6B21\u6570",value:0}},{label:"\u780D\u4EF7\u7684\u6700\u5C0F\u91D1\u989D",field:"randomMinPrice",isSearch:!1,isTable:!1,form:{component:"InputNumber",componentProps:{min:0,precision:2,step:.1},labelMessage:"\u7528\u6237\u6BCF\u6B21\u780D\u4EF7\u7684\u6700\u5C0F\u91D1\u989D",value:0}},{label:"\u780D\u4EF7\u7684\u6700\u5927\u91D1\u989D",field:"randomMaxPrice",isSearch:!1,isTable:!1,form:{component:"InputNumber",componentProps:{min:0,precision:2,step:.1},labelMessage:"\u7528\u6237\u6BCF\u6B21\u780D\u4EF7\u7684\u6700\u5927\u91D1\u989D",value:0}},{label:"\u62FC\u56E2\u5546\u54C1",field:"spuId",isSearch:!1,form:{colProps:{span:24}}}]),{allSchemas:V}=ga(S),A=Q({name:"PromotionBargainActivityForm",__name:"BargainActivityForm",emits:["success"],setup(P,{expose:j,emit:H}){const{t:w}=W(),x=Fa(),p=u(!1),D=u(""),d=u(!1),Y=u(""),m=u(),T=u(),U=u(),v=u([]),C=u([]),J=[{name:"productConfig.bargainFirstPrice",rule:e=>e>0,message:"\u5546\u54C1\u780D\u4EF7\u8D77\u59CB\u4EF7\u683C\u4E0D\u80FD\u5C0F\u4E8E 0 \uFF01\uFF01\uFF01"},{name:"productConfig.bargainMinPrice",rule:e=>e>=0,message:"\u5546\u54C1\u780D\u4EF7\u5E95\u4EF7\u4E0D\u80FD\u5C0F\u4E8E 0 \uFF01\uFF01\uFF01"},{name:"productConfig.stock",rule:e=>e>=1,message:"\u5546\u54C1\u6D3B\u52A8\u5E93\u5B58\u4E0D\u80FD\u5C0F\u4E8E 1 \uFF01\uFF01\uFF01"}],X=(e,r)=>{m.value.setValues({spuId:e}),L(e,r)},L=async(e,r,a)=>{var h;const i=[],f=await wa([e]);if(f.length==0)return;v.value=[];const o=f[0],_=r===void 0?o==null?void 0:o.skus:(h=o==null?void 0:o.skus)==null?void 0:h.filter(t=>r.includes(t.id));_==null||_.forEach(t=>{let c={spuId:o.id,skuId:t.id,bargainFirstPrice:1,bargainMinPrice:1,stock:1};if(a!==void 0){const g=a.find(O=>O.skuId===t.id);g&&(g.bargainFirstPrice=M(g.bargainFirstPrice),g.bargainMinPrice=M(g.bargainMinPrice)),c=g||c}t.productConfig=c}),o.skus=_,i.push({spuId:o.id,spuDetail:o,propertyList:Ma(o)}),v.value.push(o),C.value=i};j({open:async(e,r)=>{if(p.value=!0,D.value=w("action."+e),Y.value=e,await z(),r){d.value=!0;try{const a=await(async i=>await y.get({url:"/promotion/bargain-activity/get?id="+i}))(r);a.randomMinPrice=M(a.randomMinPrice),a.randomMaxPrice=M(a.randomMaxPrice),await L(a.spuId,[a.skuId],[{spuId:a.spuId,skuId:a.skuId,bargainFirstPrice:a.bargainFirstPrice,bargainMinPrice:a.bargainMinPrice,stock:a.stock}]),m.value.setValues(a)}finally{d.value=!1}}}});const z=async()=>{v.value=[],C.value=[],await ra(),m.value.getElFormRef().resetFields()},G=H,K=async()=>{if(m&&await m.value.getElFormRef().validate()){d.value=!0;try{const e=ia(m.value.formModel),r=U.value.getSkuConfigs("productConfig");r.forEach(i=>{i.bargainFirstPrice=k(i.bargainFirstPrice),i.bargainMinPrice=k(i.bargainMinPrice)}),e.randomMinPrice=k(e.randomMinPrice),e.randomMaxPrice=k(e.randomMaxPrice);const a={...e,...r[0]};Y.value==="create"?(await(async i=>await y.post({url:"/promotion/bargain-activity/create",data:i}))(a),x.success(w("common.createSuccess"))):(await(async i=>await y.put({url:"/promotion/bargain-activity/update",data:i}))(a),x.success(w("common.updateSuccess"))),p.value=!1,G("success")}finally{d.value=!1}}};return(e,r)=>{const a=oa,i=la,f=sa,o=pa,_=ua,h=na;return R(),Z(ta,null,[l(_,{modelValue:s(p),"onUpdate:modelValue":r[2]||(r[2]=t=>ea(p)?p.value=t:null),title:s(D),width:"65%"},{footer:n(()=>[l(a,{disabled:s(d),type:"primary",onClick:K},{default:n(()=>[F("\u786E \u5B9A")]),_:1},8,["disabled"]),l(a,{onClick:r[1]||(r[1]=t=>p.value=!1)},{default:n(()=>[F("\u53D6 \u6D88")]),_:1})]),default:n(()=>[$((R(),aa(o,{ref_key:"formRef",ref:m,"is-col":!0,rules:s(I),schema:s(V).formSchema,class:"mt-10px"},{spuId:n(()=>[l(a,{onClick:r[0]||(r[0]=t=>s(T).open())},{default:n(()=>[F("\u9009\u62E9\u5546\u54C1")]),_:1}),l(s(va),{ref_key:"spuAndSkuListRef",ref:U,"rule-config":J,"spu-list":s(v),"spu-property-list-p":s(C)},{default:n(()=>[l(f,{align:"center",label:"\u780D\u4EF7\u8D77\u59CB\u4EF7\u683C(\u5143)","min-width":"168"},{default:n(({row:t})=>[l(i,{modelValue:t.productConfig.bargainFirstPrice,"onUpdate:modelValue":c=>t.productConfig.bargainFirstPrice=c,min:0,precision:2,step:.1,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{align:"center",label:"\u780D\u4EF7\u5E95\u4EF7(\u5143)","min-width":"168"},{default:n(({row:t})=>[l(i,{modelValue:t.productConfig.bargainMinPrice,"onUpdate:modelValue":c=>t.productConfig.bargainMinPrice=c,min:0,precision:2,step:.1,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{align:"center",label:"\u6D3B\u52A8\u5E93\u5B58","min-width":"168"},{default:n(({row:t})=>[l(i,{modelValue:t.productConfig.stock,"onUpdate:modelValue":c=>t.productConfig.stock=c,class:"w-100%"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["spu-list","spu-property-list-p"])]),_:1},8,["rules","schema"])),[[h,s(d)]])]),_:1},8,["modelValue","title"]),l(s(ya),{ref_key:"spuSelectRef",ref:T,isSelectSku:!0,radio:!0,onConfirm:X},null,512)],64)}}})});export{A as _,Sa as __tla,B as c,q as g};
