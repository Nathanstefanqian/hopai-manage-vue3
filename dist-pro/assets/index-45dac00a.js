import{ao as e,__tla as d}from"./index-ad2885e5.js";let r,t,s,u,l,g=Promise.all([(()=>{try{return d}catch{}})()]).then(async()=>{u=async a=>await e.get({url:"/trade/brokerage-user/page",params:a}),r=async a=>await e.get({url:"/trade/brokerage-user/get?id="+a}),l=async a=>await e.put({url:"/trade/brokerage-user/update-bind-user",data:a}),s=async a=>await e.put({url:"/trade/brokerage-user/clear-bind-user",data:a}),t=async a=>await e.put({url:"/trade/brokerage-user/update-brokerage-enable",data:a})});export{g as __tla,r as a,t as b,s as c,u as g,l as u};
