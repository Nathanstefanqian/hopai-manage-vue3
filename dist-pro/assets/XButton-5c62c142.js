import{d as f,p as n,b as u,o as a,q as l,w as _,ah as m,a as I,bi as b,H as k,a3 as c,j as y,t as g,_ as C,__tla as x}from"./index-ad2885e5.js";import{_ as h}from"./_plugin-vue_export-helper-1b428a4d.js";let r,w=Promise.all([(()=>{try{return x}catch{}})()]).then(async()=>{r=h(f({name:"XButton",__name:"XButton",props:{modelValue:n.bool.def(!1),loading:n.bool.def(!1),preIcon:n.string.def(""),postIcon:n.string.def(""),title:n.string.def(""),type:n.oneOf(["","primary","success","warning","danger","info"]).def(""),link:n.bool.def(!1),circle:n.bool.def(!1),round:n.bool.def(!1),plain:n.bool.def(!1),onClick:{type:Function,default:null}},setup(e){const i=e,p=u(()=>{const s=["title","preIcon","postIcon","onClick"],t={...b(),...i};for(const o in t)s.indexOf(o)!==-1&&delete t[o];return t});return(s,t)=>{const o=C,d=k;return a(),l(d,m(I(p),{onClick:e.onClick}),{default:_(()=>[e.preIcon?(a(),l(o,{key:0,icon:e.preIcon,class:"mr-1px"},null,8,["icon"])):c("",!0),y(" "+g(e.title?e.title:"")+" ",1),e.postIcon?(a(),l(o,{key:1,icon:e.postIcon,class:"mr-1px"},null,8,["icon"])):c("",!0)]),_:1},16,["onClick"])}}}),[["__scopeId","data-v-cc9e668e"]])});export{r as _,w as __tla};
