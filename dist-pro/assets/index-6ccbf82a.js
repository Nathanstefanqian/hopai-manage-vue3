import{al as e,__tla as l}from"./index-c0a26e5e.js";let r,t,s,o,p=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{r=async a=>await e.post({url:"/member/photographer/listPhotographerByApprove",data:a}),o=async a=>await e.post({url:"/member/user/photographer/review",data:a}),s=async a=>await e.get({url:`/member/photographer/get/${a}`}),t=async a=>await e.get({url:"/member/user-devices-pic/list?userId="+a})});export{p as __tla,r as a,t as b,s as g,o as v};
