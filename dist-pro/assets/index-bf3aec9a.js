import{ao as E,d as ca,r as e,O as ua,o as d,c as U,i as c,w as y,a as _,B as V,g as v,t as ia,x as Y,q as G,j as J,F as na,D as sa,I as oa,H as ma,L as pa,$ as da,a0 as ya,__tla as va}from"./index-ad2885e5.js";import{_ as ha,__tla as fa}from"./ContentWrap.vue_vue_type_script_setup_true_lang-22fef0d2.js";import{_ as Ma,__tla as xa}from"./index-bdf1e881.js";import{_ as ga,__tla as Ua}from"./main.vue_vue_type_script_setup_true_lang-8be183ec.js";import Ia,{__tla as ba}from"./MenuEditor-6401b6a6.js";import wa,{__tla as Ta}from"./MenuPreviewer-550ca15c.js";import{h as Ca}from"./tree-ebab458e.js";import{u as Ea,__tla as Va}from"./useMessage-db992d55.js";import{_ as ka}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as qa}from"./el-card-5175ae0f.js";import{__tla as Da}from"./index-2f148874.js";import{__tla as Sa}from"./main-39049089.js";import{__tla as $a}from"./TabNews-4f303669.js";import{__tla as Ha}from"./main-75dc00a8.js";import{__tla as La}from"./el-image-c4c86403.js";import{__tla as Oa}from"./el-image-viewer-3779b731.js";import{__tla as Aa}from"./main-04773a4f.js";import{__tla as Fa}from"./index.vue_vue_type_script_setup_true_lang-8fc12eb8.js";import{__tla as Na}from"./index-d8b2d492.js";import{__tla as Pa}from"./main-df7caf2b.js";import{__tla as ja}from"./main.vue_vue_type_script_setup_true_lang-3afeb989.js";import{__tla as za}from"./index-c1830fc6.js";import{__tla as Ba}from"./index-e5dec91e.js";import{__tla as Ra}from"./formatTime-7d212ed5.js";import{__tla as Ya}from"./TabText.vue_vue_type_script_setup_true_lang-a92ab06a.js";import{__tla as Ga}from"./TabImage-54d5fe8b.js";import{__tla as Ja}from"./useUpload-d7b0b89e.js";import{__tla as Ka}from"./TabVoice-acb57918.js";import{__tla as Qa}from"./TabVideo-ed1b052d.js";import{__tla as Wa}from"./TabMusic.vue_vue_type_script_setup_true_lang-cbae1042.js";import{__tla as Xa}from"./vuedraggable.umd-791a8cf9.js";let K,Za=Promise.all([(()=>{try{return va}catch{}})(),(()=>{try{return fa}catch{}})(),(()=>{try{return xa}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return ba}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return qa}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return $a}catch{}})(),(()=>{try{return Ha}catch{}})(),(()=>{try{return La}catch{}})(),(()=>{try{return Oa}catch{}})(),(()=>{try{return Aa}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return ja}catch{}})(),(()=>{try{return za}catch{}})(),(()=>{try{return Ba}catch{}})(),(()=>{try{return Ra}catch{}})(),(()=>{try{return Ya}catch{}})(),(()=>{try{return Ga}catch{}})(),(()=>{try{return Ja}catch{}})(),(()=>{try{return Ka}catch{}})(),(()=>{try{return Qa}catch{}})(),(()=>{try{return Wa}catch{}})(),(()=>{try{return Xa}catch{}})()]).then(async()=>{let k,q,D,S,$,H,L,O,A,x;k={class:"clearfix public-account-management"},q={class:"left"},D={class:"weixin-hd"},S={class:"weixin-title"},$={class:"clearfix weixin-menu"},H={class:"save_div"},L={key:0,class:"right"},O={key:1,class:"right"},A=[(g=>(da("data-v-3cc4e775"),g=g(),ya(),g))(()=>v("p",null,"\u8BF7\u9009\u62E9\u83DC\u5355\u914D\u7F6E",-1))],x="__MENU_NOT_SELECTED__",K=ka(ca({name:"MpMenu",__name:"index",setup(g){const o=Ea(),u=e(!1),m=e(-1),F=e(""),i=e([]),h=e(x),I=e(-1),f=e(!1),b=e(!0),n=e({}),l=e({grand:"0",x:0,y:0}),Q=e(!1),W=(t,a)=>{m.value=t,F.value=a,w()},w=async()=>{u.value=!1;try{const t=await(r=>E.get({url:"/mp/menu/list?accountId="+r}))(m.value),a=X(t);i.value=Ca(a,"id")}finally{u.value=!1}},X=t=>{if(!t)return[];const a=[];return t.forEach(r=>{const p={...r};p.reply={type:r.replyMessageType,accountId:r.accountId,content:r.replyContent,mediaId:r.replyMediaId,url:r.replyMediaUrl,title:r.replyTitle,description:r.replyDescription,thumbMediaId:r.replyThumbMediaId,thumbMediaUrl:r.replyThumbMediaUrl,articles:r.replyArticles,musicUrl:r.replyMusicUrl,hqMusicUrl:r.replyHqMusicUrl},a.push(p)}),a},Z=()=>{h.value=x,I.value=-1,f.value=!1,n.value={},l.value={grand:"0",x:0,y:0},Q.value=!1},aa=async()=>{var t;try{await o.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417?"),l.value.grand==="1"?i.value.splice(l.value.x,1):l.value.grand==="2"&&((t=i.value[l.value.x].children)==null||t.splice(l.value.y,1)),o.notifySuccess("\u5220\u9664\u6210\u529F"),n.value={},f.value=!1,h.value=x}catch{}},ta=async()=>{try{await o.confirm("\u786E\u5B9A\u8981\u4FDD\u5B58\u5417?"),u.value=!0,await((t,a)=>E.post({url:"/mp/menu/save",data:{accountId:t,menus:a}}))(m.value,la()),w(),o.notifySuccess("\u53D1\u5E03\u6210\u529F")}finally{u.value=!1}},ra=async()=>{try{await o.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417?"),u.value=!0,await(t=>E.delete({url:"/mp/menu/delete?accountId="+t}))(m.value),Z(),w(),o.notifySuccess("\u6E05\u7A7A\u6210\u529F")}finally{u.value=!1}},la=()=>{const t=[];return i.value.forEach(a=>{const r=N(a);t.push(r),!a.children||a.children.length<=0||(r.children=[],a.children.forEach(p=>{r.children.push(N(p))}))}),t},N=t=>{let a={...t,children:void 0,reply:void 0};return a.replyMessageType=t.reply.type,a.replyContent=t.reply.content,a.replyMediaId=t.reply.mediaId,a.replyMediaUrl=t.reply.url,a.replyTitle=t.reply.title,a.replyDescription=t.reply.description,a.replyThumbMediaId=t.reply.thumbMediaId,a.replyThumbMediaUrl=t.reply.thumbMediaUrl,a.replyArticles=t.reply.articles,a.replyMusicUrl=t.reply.musicUrl,a.replyHqMusicUrl=t.reply.hqMusicUrl,a};return(t,a)=>{const r=Ma,p=sa,ea=oa,P=ha,j=ma,z=ua("hasPermi"),_a=pa;return d(),U(na,null,[c(r,{title:"\u516C\u4F17\u53F7\u83DC\u5355",url:"https://doc.iocoder.cn/mp/menu/"}),c(P,null,{default:y(()=>[c(ea,{class:"-mb-15px",ref:"queryFormRef",inline:!0,"label-width":"68px"},{default:y(()=>[c(p,{label:"\u516C\u4F17\u53F7",prop:"accountId"},{default:y(()=>[c(_(ga),{onChange:W})]),_:1})]),_:1},512)]),_:1}),c(P,null,{default:y(()=>[V((d(),U("div",k,[v("div",q,[v("div",D,[v("div",S,ia(_(F)),1)]),v("div",$,[c(wa,{modelValue:_(i),"onUpdate:modelValue":a[0]||(a[0]=s=>Y(i)?i.value=s:null),"account-id":_(m),"active-index":_(h),"parent-index":_(I),onMenuClicked:a[1]||(a[1]=(s,T)=>((C,M)=>{f.value=!0,n.value=C,l.value.grand="1",l.value.x=M,b.value=!0,h.value=`${M}`,I.value=M})(s,T)),onSubmenuClicked:a[2]||(a[2]=(s,T,C)=>((M,B,R)=>{f.value=!0,n.value=M,l.value.grand="2",l.value.x=B,l.value.y=R,b.value=!1,h.value=`${B}-${R}`})(s,T,C))},null,8,["modelValue","account-id","active-index","parent-index"])]),v("div",H,[V((d(),G(j,{class:"save_btn",type:"success",onClick:ta},{default:y(()=>[J("\u4FDD\u5B58\u5E76\u53D1\u5E03\u83DC\u5355")]),_:1})),[[z,["mp:menu:save"]]]),V((d(),G(j,{class:"save_btn",type:"danger",onClick:ra},{default:y(()=>[J("\u6E05\u7A7A\u83DC\u5355")]),_:1})),[[z,["mp:menu:delete"]]])])]),_(f)?(d(),U("div",L,[c(Ia,{"account-id":_(m),"is-parent":_(b),modelValue:_(n),"onUpdate:modelValue":a[3]||(a[3]=s=>Y(n)?n.value=s:null),onDelete:aa},null,8,["account-id","is-parent","modelValue"])])):(d(),U("div",O,A))])),[[_a,_(u)]])]),_:1})],64)}}}),[["__scopeId","data-v-3cc4e775"]])});export{Za as __tla,K as default};
