import{_ as ua,__tla as _a}from"./ContentWrap.vue_vue_type_script_setup_true_lang-73045fca.js";import{d as ca,N as oa,u as na,r as M,A as pa,o as c,c as k,i as a,w as t,j as s,t as u,a as e,at as D,F as C,k as S,q as y,a1 as v,l as ia,H as da,J as ya,K as ma,E as fa,n as ba,g as b,au as ha,ab as Ea,ac as va,av as wa,aj as Ta,__tla as Aa}from"./index-0d81347e.js";import{E as Ra,a as ka,__tla as Ca}from"./el-timeline-item-e53b0e53.js";import{E as Na,__tla as Pa}from"./el-image-fd00a23a.js";import{__tla as Da}from"./el-image-viewer-4844959b.js";import{E as Sa,a as ga,__tla as Fa}from"./el-descriptions-item-b5343801.js";import{_ as La,__tla as Ya}from"./DictTag.vue_vue_type_script_lang-7ba127bd.js";import{g as Ia,a as Ua,r as xa,b as Ma,c as Oa,__tla as Va}from"./index-fd2e56e6.js";import{D as p,b as ja,c as Ha,__tla as Ka}from"./dict-d9e0d1ac.js";import{f as O,__tla as Wa}from"./formatTime-c18eac7a.js";import{_ as qa,__tla as Ba}from"./AfterSaleDisagreeForm.vue_vue_type_script_setup_true_lang-da218299.js";import{c as Ja,__tla as Xa}from"./index-8e322d14.js";import{u as za,__tla as Ga}from"./tagsView-f74f705e.js";import{u as Qa,__tla as Za}from"./useMessage-da459548.js";import{_ as $a}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as at}from"./el-card-3076e2b9.js";import"./color-a8b4eb58.js";import{__tla as tt}from"./Dialog.vue_vue_type_style_index_0_lang-9d93c798.js";import{__tla as et}from"./ImageViewer.vue_vue_type_script_setup_true_lang-a2fced06.js";let V,lt=Promise.all([(()=>{try{return _a}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return Wa}catch{}})(),(()=>{try{return Ba}catch{}})(),(()=>{try{return Xa}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Za}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return et}catch{}})()]).then(async()=>{let w,g,F,L,Y,I;w=T=>(Ea("data-v-f1271054"),T=T(),va(),T),g=w(()=>b("span",{style:{color:"red"}},"\u63D0\u9192: ",-1)),F=w(()=>b("br",null,null,-1)),L=w(()=>b("br",null,null,-1)),Y={class:"el-timeline-right-content"},I=ca({name:"TradeAfterSaleDetail",__name:"index",setup(T){const{t:A}=ia(),o=Qa(),{params:j}=oa(),{push:H,currentRoute:K}=na(),l=M({order:{},logs:[]}),U=M(),W=i=>{const n=Ha(p.USER_TYPE,i);switch(n==null?void 0:n.colorType){case"success":return"#67C23A";case"info":return"#909399";case"warning":return"#E6A23C";case"danger":return"#F56C6C"}return"#409EFF"},f=async()=>{const i=j.id;if(i){const n=await Ia(i);n==null&&(o.notifyError("\u552E\u540E\u8BA2\u5355\u4E0D\u5B58\u5728"),Q()),l.value=n}},q=async()=>{try{await o.confirm("\u662F\u5426\u540C\u610F\u552E\u540E\uFF1F"),await Ua(l.value.id),o.success(A("common.success")),await f()}catch{}},B=async()=>{var i;(i=U.value)==null||i.open(l.value)},J=async()=>{try{await o.confirm("\u662F\u5426\u786E\u8BA4\u6536\u8D27\uFF1F"),await xa(l.value.id),o.success(A("common.success")),await f()}catch{}},X=async()=>{try{await o.confirm("\u662F\u5426\u62D2\u7EDD\u6536\u8D27\uFF1F"),await Ma(l.value.id),o.success(A("common.success")),await f()}catch{}},z=async()=>{try{await o.confirm("\u662F\u5426\u786E\u8BA4\u9000\u6B3E\uFF1F"),await Oa(l.value.id),o.success(A("common.success")),await f()}catch{}},{delView:G}=za(),Q=()=>{G(e(K)),H({name:"TradeAfterSale"})};return pa(async()=>{await f()}),(i,n)=>{const r=Sa,m=La,h=ga,Z=Na,E=da,$=Ta,R=ya,aa=ma,x=fa,ta=ba,ea=ka,la=Ra,ra=ua;return c(),k(C,null,[a(ra,null,{default:t(()=>[a(h,{title:"\u8BA2\u5355\u4FE1\u606F"},{default:t(()=>[a(r,{label:"\u8BA2\u5355\u53F7: "},{default:t(()=>[s(u(e(l).orderNo),1)]),_:1}),a(r,{label:"\u914D\u9001\u65B9\u5F0F: "},{default:t(()=>[a(m,{type:e(p).TRADE_DELIVERY_TYPE,value:e(l).order.deliveryType},null,8,["type","value"])]),_:1}),a(r,{label:"\u8BA2\u5355\u7C7B\u578B: "},{default:t(()=>[a(m,{type:e(p).TRADE_ORDER_TYPE,value:e(l).order.type},null,8,["type","value"])]),_:1}),a(r,{label:"\u6536\u8D27\u4EBA: "},{default:t(()=>[s(u(e(l).order.receiverName),1)]),_:1}),a(r,{label:"\u4E70\u5BB6\u7559\u8A00: "},{default:t(()=>[s(u(e(l).order.userRemark),1)]),_:1}),a(r,{label:"\u8BA2\u5355\u6765\u6E90: "},{default:t(()=>[a(m,{type:e(p).TERMINAL,value:e(l).order.terminal},null,8,["type","value"])]),_:1}),a(r,{label:"\u8054\u7CFB\u7535\u8BDD: "},{default:t(()=>[s(u(e(l).order.receiverMobile),1)]),_:1}),a(r,{label:"\u5546\u5BB6\u5907\u6CE8: "},{default:t(()=>[s(u(e(l).order.remark),1)]),_:1}),a(r,{label:"\u652F\u4ED8\u5355\u53F7: "},{default:t(()=>[s(u(e(l).order.payOrderId),1)]),_:1}),a(r,{label:"\u4ED8\u6B3E\u65B9\u5F0F: "},{default:t(()=>[a(m,{type:e(p).PAY_CHANNEL_CODE,value:e(l).order.payChannelCode},null,8,["type","value"])]),_:1}),a(r,{label:"\u4E70\u5BB6: "},{default:t(()=>{var _,d;return[s(u((d=(_=e(l))==null?void 0:_.user)==null?void 0:d.nickname),1)]}),_:1})]),_:1}),a(h,{title:"\u552E\u540E\u4FE1\u606F"},{default:t(()=>[a(r,{label:"\u9000\u6B3E\u7F16\u53F7: "},{default:t(()=>[s(u(e(l).no),1)]),_:1}),a(r,{label:"\u7533\u8BF7\u65F6\u95F4: "},{default:t(()=>[s(u(e(O)(e(l).auditTime)),1)]),_:1}),a(r,{label:"\u552E\u540E\u7C7B\u578B: "},{default:t(()=>[a(m,{type:e(p).TRADE_AFTER_SALE_TYPE,value:e(l).type},null,8,["type","value"])]),_:1}),a(r,{label:"\u552E\u540E\u65B9\u5F0F: "},{default:t(()=>[a(m,{type:e(p).TRADE_AFTER_SALE_WAY,value:e(l).way},null,8,["type","value"])]),_:1}),a(r,{label:"\u9000\u6B3E\u91D1\u989D: "},{default:t(()=>[s(u(e(D)(e(l).refundPrice)),1)]),_:1}),a(r,{label:"\u9000\u6B3E\u539F\u56E0: "},{default:t(()=>[s(u(e(l).applyReason),1)]),_:1}),a(r,{label:"\u8865\u5145\u63CF\u8FF0: "},{default:t(()=>[s(u(e(l).applyDescription),1)]),_:1}),a(r,{label:"\u51ED\u8BC1\u56FE\u7247: "},{default:t(()=>[(c(!0),k(C,null,S(e(l).applyPicUrls,(_,d)=>(c(),y(Z,{key:d,src:_.url,class:"mr-10px h-60px w-60px",onClick:n[0]||(n[0]=rt=>(N=>{const P=[];wa(N)?N.forEach(sa=>{P.push(sa.url)}):P.push(N),Ja({urlList:P})})(e(l).applyPicUrls))},null,8,["src"]))),128))]),_:1})]),_:1}),a(h,{column:1,title:"\u9000\u6B3E\u72B6\u6001"},{default:t(()=>[a(r,{label:"\u9000\u6B3E\u72B6\u6001: "},{default:t(()=>[a(m,{type:e(p).TRADE_AFTER_SALE_STATUS,value:e(l).status},null,8,["type","value"])]),_:1}),a(r,{"label-class-name":"no-colon"},{default:t(()=>[e(l).status===10?(c(),y(E,{key:0,type:"primary",onClick:q},{default:t(()=>[s("\u540C\u610F\u552E\u540E")]),_:1})):v("",!0),e(l).status===10?(c(),y(E,{key:1,type:"primary",onClick:B},{default:t(()=>[s(" \u62D2\u7EDD\u552E\u540E ")]),_:1})):v("",!0),e(l).status===30?(c(),y(E,{key:2,type:"primary",onClick:J},{default:t(()=>[s(" \u786E\u8BA4\u6536\u8D27 ")]),_:1})):v("",!0),e(l).status===30?(c(),y(E,{key:3,type:"primary",onClick:X},{default:t(()=>[s("\u62D2\u7EDD\u6536\u8D27")]),_:1})):v("",!0),e(l).status===40?(c(),y(E,{key:4,type:"primary",onClick:z},{default:t(()=>[s("\u786E\u8BA4\u9000\u6B3E")]),_:1})):v("",!0)]),_:1}),a(r,null,{label:t(()=>[g]),default:t(()=>[s(" \u5982\u679C\u672A\u53D1\u8D27\uFF0C\u8BF7\u70B9\u51FB\u540C\u610F\u9000\u6B3E\u7ED9\u4E70\u5BB6\u3002"),F,s(" \u5982\u679C\u5B9E\u9645\u5DF2\u53D1\u8D27\uFF0C\u8BF7\u4E3B\u52A8\u4E0E\u4E70\u5BB6\u8054\u7CFB\u3002"),L,s(" \u5982\u679C\u8BA2\u5355\u6574\u4F53\u9000\u6B3E\u540E\uFF0C\u4F18\u60E0\u5238\u548C\u4F59\u989D\u4F1A\u9000\u8FD8\u7ED9\u4E70\u5BB6. ")]),_:1})]),_:1}),a(h,{title:"\u5546\u54C1\u4FE1\u606F"},{default:t(()=>[a(r,{labelClassName:"no-colon"},{default:t(()=>[a(ta,{gutter:20},{default:t(()=>[a(x,{span:15},{default:t(()=>[a(aa,{data:[e(l).orderItem],border:""},{default:t(()=>[a(R,{label:"\u5546\u54C1",prop:"spuName",width:"auto"},{default:t(({row:_})=>[s(u(_.spuName)+" ",1),(c(!0),k(C,null,S(_.properties,d=>(c(),y($,{key:d.propertyId},{default:t(()=>[s(u(d.propertyName)+": "+u(d.valueName),1)]),_:2},1024))),128))]),_:1}),a(R,{label:"\u5546\u54C1\u539F\u4EF7",prop:"price",width:"150"},{default:t(({row:_})=>[s(u(e(D)(_.price))+" \u5143",1)]),_:1}),a(R,{label:"\u6570\u91CF",prop:"count",width:"100"}),a(R,{label:"\u5408\u8BA1",prop:"payPrice",width:"150"},{default:t(({row:_})=>[s(u(e(D)(_.payPrice))+" \u5143",1)]),_:1})]),_:1},8,["data"])]),_:1}),a(x,{span:10})]),_:1})]),_:1})]),_:1}),a(h,{title:"\u552E\u540E\u65E5\u5FD7"},{default:t(()=>[a(r,{labelClassName:"no-colon"},{default:t(()=>[a(la,null,{default:t(()=>[(c(!0),k(C,null,S(e(l).logs,_=>(c(),y(ea,{key:_.id,timestamp:e(O)(_.createTime),placement:"top"},{dot:t(()=>[b("span",{style:ha({backgroundColor:W(_.userType)}),class:"dot-node-style"},u(e(ja)(e(p).USER_TYPE,_.userType)[0]||"\u7CFB"),5)]),default:t(()=>[b("div",Y,[b("span",null,u(_.content),1)])]),_:2},1032,["timestamp"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}),a(qa,{ref_key:"updateAuditReasonFormRef",ref:U,onSuccess:f},null,512)],64)}}}),V=$a(I,[["__scopeId","data-v-f1271054"]])});export{lt as __tla,V as default};
