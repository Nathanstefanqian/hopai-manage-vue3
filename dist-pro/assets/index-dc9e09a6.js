import{ao as t,__tla as g}from"./index-ad2885e5.js";let e,r,s,u,p,l,i=Promise.all([(()=>{try{return g}catch{}})()]).then(async()=>{s=async a=>await t.post({url:"/bpm/user-group/create",data:a}),l=async a=>await t.put({url:"/bpm/user-group/update",data:a}),u=async a=>await t.delete({url:"/bpm/user-group/delete?id="+a}),e=async a=>await t.get({url:"/bpm/user-group/get?id="+a}),r=async a=>await t.get({url:"/bpm/user-group/page",params:a}),p=async()=>await t.get({url:"/bpm/user-group/list-all-simple"})});export{i as __tla,e as a,r as b,s as c,u as d,p as g,l as u};
