import{ao as o,__tla as i}from"./index-ad2885e5.js";let e,n,a,r,u,p,m=Promise.all([(()=>{try{return i}catch{}})()]).then(async()=>{a=function(t){return o.post({url:"/promotion/coupon-template/create",data:t})},p=function(t){return o.put({url:"/promotion/coupon-template/update",data:t})},n=function(t,l){const c={id:t,status:l};return o.put({url:"/promotion/coupon-template/update-status",data:c})},r=function(t){return o.delete({url:"/promotion/coupon-template/delete?id="+t})},e=function(t){return o.get({url:"/promotion/coupon-template/get?id="+t})},u=function(t){return o.get({url:"/promotion/coupon-template/page",params:t})}});export{m as __tla,e as a,n as b,a as c,r as d,u as g,p as u};
