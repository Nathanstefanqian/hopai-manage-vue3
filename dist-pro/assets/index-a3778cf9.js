import{ao as t,__tla as y}from"./index-ad2885e5.js";let s,e,l,d,r,i,p=Promise.all([(()=>{try{return y}catch{}})()]).then(async()=>{r=async()=>await t.get({url:"/system/dept/list-all-simple"}),e=async a=>await t.get({url:"/system/dept/list",params:a}),s=async a=>await t.get({url:"/system/dept/get?id="+a}),l=async a=>await t.post({url:"/system/dept/create",data:a}),i=async a=>await t.put({url:"/system/dept/update",data:a}),d=async a=>await t.delete({url:"/system/dept/delete?id="+a})});export{p as __tla,s as a,e as b,l as c,d,r as g,i as u};
