import{_ as g,__tla as v}from"./CountTo.vue_vue_type_script_setup_true_lang-0d89e6ab.js";import{d as y,p as a,o as f,c as b,g as t,t as m,q as w,w as h,i as s,a3 as S,V as T,a as l,dW as r,j as V,_ as j,ay as k,__tla as q}from"./index-ad2885e5.js";let x,M=Promise.all([(()=>{try{return v}catch{}})(),(()=>{try{return q}catch{}})()]).then(async()=>{let n,c,i,p,o;n={class:"flex flex-col gap-2 bg-[var(--el-bg-color-overlay)] p-6"},c={class:"flex items-center justify-between text-gray-500"},i={class:"mb-4 text-3xl"},p={class:"flex flex-row gap-1 text-sm"},o=t("span",{class:"text-gray-500"},"\u73AF\u6BD4",-1),x=y({name:"TradeStatisticValue",__name:"TradeStatisticValue",props:{tooltip:a.string.def(""),title:a.string.def(""),prefix:a.string.def(""),value:a.number.def(0),decimals:a.number.def(0),percent:a.oneOfType([Number,String]).def(0)},setup:e=>(N,O)=>{const d=j,_=k,u=g;return f(),b("div",n,[t("div",c,[t("span",null,m(e.title),1),e.tooltip?(f(),w(_,{key:0,content:e.tooltip,placement:"top-start"},{default:h(()=>[s(d,{icon:"ep:warning"})]),_:1},8,["content"])):S("",!0)]),t("div",i,[s(u,{prefix:e.prefix,"end-val":e.value,decimals:e.decimals},null,8,["prefix","end-val","decimals"])]),t("div",p,[o,t("span",{class:T(l(r)(e.percent)>0?"text-red-500":"text-green-500")},[V(m(Math.abs(l(r)(e.percent)))+"% ",1),s(d,{icon:l(r)(e.percent)>0?"ep:caret-top":"ep:caret-bottom",class:"!text-sm"},null,8,["icon"])],2)])])}})});export{x as _,M as __tla};
