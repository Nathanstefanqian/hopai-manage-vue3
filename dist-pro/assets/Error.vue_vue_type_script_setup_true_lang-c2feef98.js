import{d as x,p as y,o as _,c as v,g as t,t as c,i as T,w as b,l as k,H as E,j as H,__tla as h}from"./index-ad2885e5.js";let u,w=Promise.all([(()=>{try{return h}catch{}})()]).then(async()=>{let a,o,l,n,i;a={class:"flex justify-center"},o={class:"text-center"},l=["src"],n={class:"text-14px text-[var(--el-color-info)]"},i={class:"mt-20px"},u=x({name:"Error",__name:"Error",props:{type:y.string.validate(e=>["404","500","403"].includes(e)).def("404")},emits:["errorClick"],setup(e,{emit:m}){const{t:r}=k(),s={404:{url:"/assets/404-1759fece.svg",message:r("error.pageError"),buttonText:r("error.returnToHome")},500:{url:"/assets/500-8fda557c.svg",message:r("error.networkError"),buttonText:r("error.returnToHome")},403:{url:"/assets/403-af24f6bf.svg",message:r("error.noPermission"),buttonText:r("error.returnToHome")}},p=e,g=m,d=()=>{g("errorClick",p.type)};return(C,j)=>{const f=E;return _(),v("div",a,[t("div",o,[t("img",{src:s[e.type].url,alt:"",width:"350"},null,8,l),t("div",n,c(s[e.type].message),1),t("div",i,[T(f,{type:"primary",onClick:d},{default:b(()=>[H(c(s[e.type].buttonText),1)]),_:1})])])])}}})});export{u as _,w as __tla};
