import{r as T,A as q,ax as A,aC as _,d as p,aE as g,o as t,c as r,q as h,a,aL as C,a1 as w,W as m,aI as x,aM as F,F as k,k as b,aH as E,i as H,ah as N,aN as J,aJ as M,aO as O,__tla as P}from"./index-0d81347e.js";let S,W=Promise.all([(()=>{try{return P}catch{}})()]).then(async()=>{const $=_({animated:{type:Boolean,default:!1},count:{type:Number,default:1},rows:{type:Number,default:3},loading:{type:Boolean,default:!0},throttle:{type:Number}}),I=_({variant:{type:String,values:["circle","rect","h1","h3","text","caption","p","image","button"],default:"text"}}),B=p({name:"ElSkeletonItem"});var u=x(p({...B,props:I,setup(d){const i=g("skeleton");return(o,s)=>(t(),r("div",{class:m([a(i).e("item"),a(i).e(o.variant)])},[o.variant==="image"?(t(),h(a(C),{key:0})):w("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);const L=p({name:"ElSkeleton"});S=M(x(p({...L,props:$,setup(d,{expose:i}){const o=d,s=g("skeleton"),v=((e,c=0)=>{if(c===0)return e;const l=T(!1);let n=0;const y=()=>{n&&clearTimeout(n),n=window.setTimeout(()=>{l.value=e.value},c)};return q(y),A(()=>e.value,f=>{f?y():l.value=f}),l})(F(o,"loading"),o.throttle);return i({uiLoading:v}),(e,c)=>a(v)?(t(),r("div",N({key:0,class:[a(s).b(),a(s).is("animated",e.animated)]},e.$attrs),[(t(!0),r(k,null,b(e.count,l=>(t(),r(k,{key:l},[e.loading?E(e.$slots,"template",{key:l},()=>[H(u,{class:m(a(s).is("first")),variant:"p"},null,8,["class"]),(t(!0),r(k,null,b(e.rows,n=>(t(),h(u,{key:n,class:m([a(s).e("paragraph"),a(s).is("last",n===e.rows&&e.rows>1)]),variant:"p"},null,8,["class"]))),128))]):w("v-if",!0)],64))),128))],16)):E(e.$slots,"default",J(N({key:1},e.$attrs)))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]),{SkeletonItem:u}),O(u)});export{S as E,W as __tla};
