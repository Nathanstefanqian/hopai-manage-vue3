import{_ as g,__tla as v}from"./CountTo.vue_vue_type_script_setup_true_lang-cc9c8128.js";import{d as b,aa as a,o as f,c as y,e as t,t as m,l as w,w as T,f as s,V,n as h,a as l,dU as r,m as S,_ as j,aV as k,__tla as M}from"./index-c0a26e5e.js";let x,N=Promise.all([(()=>{try{return v}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{let n,c,i,o,p;n={class:"flex flex-col gap-2 bg-[var(--el-bg-color-overlay)] p-6"},c={class:"flex items-center justify-between text-gray-500"},i={class:"mb-4 text-3xl"},o={class:"flex flex-row gap-1 text-sm"},p=t("span",{class:"text-gray-500"},"\u73AF\u6BD4",-1),x=b({name:"TradeStatisticValue",__name:"TradeStatisticValue",props:{tooltip:a.string.def(""),title:a.string.def(""),prefix:a.string.def(""),value:a.number.def(0),decimals:a.number.def(0),percent:a.oneOfType([Number,String]).def(0)},setup:e=>(O,P)=>{const d=j,_=k,u=g;return f(),y("div",n,[t("div",c,[t("span",null,m(e.title),1),e.tooltip?(f(),w(_,{key:0,content:e.tooltip,placement:"top-start"},{default:T(()=>[s(d,{icon:"ep:warning"})]),_:1},8,["content"])):V("",!0)]),t("div",i,[s(u,{prefix:e.prefix,"end-val":e.value,decimals:e.decimals},null,8,["prefix","end-val","decimals"])]),t("div",o,[p,t("span",{class:h(l(r)(e.percent)>0?"text-red-500":"text-green-500")},[S(m(Math.abs(l(r)(e.percent)))+"% ",1),s(d,{icon:l(r)(e.percent)>0?"ep:caret-top":"ep:caret-bottom",class:"!text-sm"},null,8,["icon"])],2)])])}})});export{x as _,N as __tla};
