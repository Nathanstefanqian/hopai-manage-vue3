import{ao as s,cN as n,__tla as u}from"./index-ad2885e5.js";let t,a,r,i,l,d,o,m,y=Promise.all([(()=>{try{return u}catch{}})()]).then(async()=>{a=e=>s.get({url:"/system/sensitive-word/page",params:e}),d=e=>s.get({url:"/system/sensitive-word/get?id="+e}),r=e=>s.post({url:"/system/sensitive-word/create",data:e}),o=e=>s.put({url:"/system/sensitive-word/update",data:e}),i=e=>s.delete({url:"/system/sensitive-word/delete?id="+e}),l=e=>s.download({url:"/system/sensitive-word/export-excel",params:e}),t=()=>s.get({url:"/system/sensitive-word/get-tags"}),m=e=>s.get({url:"/system/sensitive-word/validate-text?"+n.stringify(e,{arrayFormat:"repeat"})})});export{y as __tla,t as a,a as b,r as c,i as d,l as e,d as g,o as u,m as v};
