import{ao as u,d as x,r as v,N as j,A,aQ as P,o as d,q as B,w as m,i,g as w,t as F,c as U,j as g,F as k,a as J,J as K,K as L,__tla as Q}from"./index-cc83619a.js";import{_ as $,__tla as z}from"./XTextButton-09766bc9.js";import{S as C}from"./constants-3cc050b6.js";import{g as D,__tla as E}from"./profile-6ca44377.js";import{u as G,__tla as H}from"./useMessage-36d6be68.js";let b,M=Promise.all([(()=>{try{return Q}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return H}catch{}})()]).then(async()=>{let y,_;y=["src"],_={class:"mr-5"},b=x({name:"UserSocial",__name:"UserSocial",props:{activeName:{}},emits:["update:activeName"],setup(O,{emit:q}){const f=G(),c=v([]),l=v(),h=async()=>{var t;c.value=[];const e=await D();l.value=e;for(const a in C){const s={...C[a]};if(c.value.push(s),(t=l.value)==null?void 0:t.socialUsers){for(const r in l.value.socialUsers)if(s.type===l.value.socialUsers[r].type){s.openid=l.value.socialUsers[r].openid;break}}}},n=j(),N=q,R=()=>{const e=(t="type",new URL(decodeURIComponent(location.href)).searchParams.get(t)??"");var t;const a=n.query.code,s=n.query.state;a&&((r,o,p)=>u.post({url:"/system/social-user/bind",data:{type:r,code:o,state:p}}))(e,a,s).then(()=>{f.success("\u7ED1\u5B9A\u6210\u529F"),N("update:activeName","userSocial"),h()})},S=e=>{const t=location.origin+"/user/profile?"+encodeURIComponent(`type=${e.type}`);((a,s)=>u.get({url:"/system/auth/social-auth-redirect?type="+a+"&redirectUri="+s}))(e.type,encodeURIComponent(t)).then(a=>{window.location.href=a})},I=async e=>{var t,a;await(t=e.type,a=e.openid,u.delete({url:"/system/social-user/unbind",data:{type:t,openid:a}}))&&(e.openid=void 0),f.success("\u89E3\u7ED1\u6210\u529F")};return A(async()=>{await h()}),P(()=>n,()=>{R()},{immediate:!0}),(e,t)=>{const a=K,s=$,r=L;return d(),B(r,{data:J(c),"show-header":!1},{default:m(()=>[i(a,{fixed:"left",title:"\u5E8F\u53F7",type:"seq",width:"60"}),i(a,{align:"left",label:"\u793E\u4EA4\u5E73\u53F0",width:"120"},{default:m(({row:o})=>[w("img",{src:o.img,alt:"",class:"h-5 align-middle"},null,8,y),w("p",_,F(o.title),1)]),_:1}),i(a,{align:"center",label:"\u64CD\u4F5C"},{default:m(({row:o})=>[o.openid?(d(),U(k,{key:0},[g(" \u5DF2\u7ED1\u5B9A "),i(s,{class:"mr-5",title:"(\u89E3\u7ED1)",type:"primary",onClick:p=>I(o)},null,8,["onClick"])],64)):(d(),U(k,{key:1},[g(" \u672A\u7ED1\u5B9A "),i(s,{class:"mr-5",title:"(\u7ED1\u5B9A)",type:"primary",onClick:p=>S(o)},null,8,["onClick"])],64))]),_:1})]),_:1},8,["data"])}}})});export{b as _,M as __tla};
