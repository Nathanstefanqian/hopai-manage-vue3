import{ao as t,__tla as p}from"./index-ad2885e5.js";let s,e,c,r,i=Promise.all([(()=>{try{return p}catch{}})()]).then(async()=>{e=async a=>await t.get({url:"/bpm/process-instance/my-page",params:a}),c=async a=>await t.post({url:"/bpm/process-instance/create",data:a}),s=async(a,n)=>{const l={id:a,reason:n};return await t.delete({url:"/bpm/process-instance/cancel",data:l})},r=async a=>await t.get({url:"/bpm/process-instance/get?id="+a})});export{i as __tla,s as a,e as b,c,r as g};
