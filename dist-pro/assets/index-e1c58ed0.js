import{al as e,__tla as l}from"./index-e69fb82c.js";let r,t,s,o,p,i=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{r=async a=>await e.post({url:"/member/photographer/listPhotographerByApprove",data:a}),p=async a=>await e.post({url:"/member/user/photographer/review",data:a}),o=async a=>await e.get({url:`/member/photographer/get/${a}`}),s=async a=>await e.post({url:`/member/photographer/disable/${a}`}),t=async a=>await e.get({url:"/member/user-devices-pic/list?userId="+a})});export{i as __tla,r as a,t as b,s as d,o as g,p as v};
