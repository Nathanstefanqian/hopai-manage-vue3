import{aB as S,aC as V,bV as ae,bp as $,bq as W,aK as se,r as y,cP as P,au as le,bv as te,aD as j,Q as c,d as _,o as q,c as D,aE as x,n as m,a as e,aF as G,de as O,b7 as ie,e as A,m as oe,t as ne,f as w,w as Q,cl as ce,br as de,I as re,b6 as ue,p as pe,U as me,df as ve,aG as be,cB as fe,__tla as he}from"./index-e69fb82c.js";let T,U,Ce=Promise.all([(()=>{try{return he}catch{}})()]).then(async()=>{const E=v=>typeof se(v),z=S({accordion:Boolean,modelValue:{type:V([Array,String,Number]),default:()=>ae([])}}),J={[$]:E,[W]:E},B=Symbol("collapseContextKey"),L=_({name:"ElCollapse"});var M=G(_({...L,props:z,emits:J,setup(v,{expose:k,emit:f}){const h=v,{activeNames:g,setActiveNames:r}=((t,u)=>{const o=y(P(t.modelValue)),b=d=>{o.value=d;const n=t.accordion?o.value[0]:o.value;u($,n),u(W,n)};return le(()=>t.modelValue,()=>o.value=P(t.modelValue),{deep:!0}),te(B,{activeNames:o,handleItemClick:d=>{if(t.accordion)b([o.value[0]===d?"":d]);else{const n=[...o.value],K=n.indexOf(d);K>-1?n.splice(K,1):n.push(d),b(n)}}}),{activeNames:o,setActiveNames:b}})(h,f),{rootKls:C}=(()=>{const t=j("collapse");return{rootKls:c(()=>t.b())}})();return k({activeNames:g,setActiveNames:r}),(t,u)=>(q(),D("div",{class:m(e(C))},[x(t.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const R=S({title:{type:String,default:""},name:{type:V([String,Number]),default:()=>O()},disabled:Boolean}),X=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],Y=["id","aria-hidden","aria-labelledby"],Z=_({name:"ElCollapseItem"});var F=G(_({...Z,props:R,setup(v,{expose:k}){const f=v,{focusing:h,id:g,isActive:r,handleFocus:C,handleHeaderClick:t,handleEnterClick:u}=(i=>{const a=ie(B),s=y(!1),p=y(!1),l=y(O()),N=c(()=>a==null?void 0:a.activeNames.value.includes(i.name));return{focusing:s,id:l,isActive:N,handleFocus:()=>{setTimeout(()=>{p.value?p.value=!1:s.value=!0},50)},handleHeaderClick:()=>{i.disabled||(a==null||a.handleItemClick(i.name),s.value=!1,p.value=!0)},handleEnterClick:()=>{a==null||a.handleItemClick(i.name)}}})(f),{arrowKls:o,headKls:b,rootKls:d,itemWrapperKls:n,itemContentKls:K,scopedContentId:I,scopedHeadId:H}=((i,{focusing:a,isActive:s,id:p})=>{const l=j("collapse"),N=c(()=>[l.b("item"),l.is("active",e(s)),l.is("disabled",i.disabled)]),ee=c(()=>[l.be("item","header"),l.is("active",e(s)),{focusing:e(a)&&!i.disabled}]);return{arrowKls:c(()=>[l.be("item","arrow"),l.is("active",e(s))]),headKls:ee,rootKls:N,itemWrapperKls:c(()=>l.be("item","wrap")),itemContentKls:c(()=>l.be("item","content")),scopedContentId:c(()=>l.b(`content-${e(p)}`)),scopedHeadId:c(()=>l.b(`head-${e(p)}`))}})(f,{focusing:h,isActive:r,id:g});return k({isActive:r}),(i,a)=>(q(),D("div",{class:m(e(d))},[A("button",{id:e(H),class:m(e(b)),"aria-expanded":e(r),"aria-controls":e(I),"aria-describedby":e(I),tabindex:i.disabled?-1:0,type:"button",onClick:a[0]||(a[0]=(...s)=>e(t)&&e(t)(...s)),onKeydown:a[1]||(a[1]=re(ue((...s)=>e(u)&&e(u)(...s),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...s)=>e(C)&&e(C)(...s)),onBlur:a[3]||(a[3]=s=>h.value=!1)},[x(i.$slots,"title",{},()=>[oe(ne(i.title),1)]),w(e(de),{class:m(e(o))},{default:Q(()=>[w(e(ce))]),_:1},8,["class"])],42,X),w(e(ve),null,{default:Q(()=>[pe(A("div",{id:e(I),role:"region",class:m(e(n)),"aria-hidden":!e(r),"aria-labelledby":e(H)},[A("div",{class:m(e(K))},[x(i.$slots,"default")],2)],10,Y),[[me,e(r)]])]),_:3})],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);U=be(M,{CollapseItem:F}),T=fe(F)});export{T as E,Ce as __tla,U as a};
