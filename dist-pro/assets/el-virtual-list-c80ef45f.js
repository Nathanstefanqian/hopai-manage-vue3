import{ak as Ne,b as c,cb as ze,cc as v,b4 as w,a_ as B,cd as Ee,d as Me,b0 as Z,r as ee,f as Le,ce as Ce,a as R,aQ as Ie,aY as Be,h as te,aP as Re,bn as Te,bp as Oe,__tla as _e}from"./index-ad2885e5.js";let ae,A,re,le,ne,P,h,oe,T,se,O,j,k,ie,ue,H,ce,de,me,ve,pe,fe,V,ge,he,$e=Promise.all([(()=>{try{return _e}catch{}})()]).then(async()=>{var K=Number.isNaN||function(e){return typeof e=="number"&&e!=e};function ye(e,a){if(e.length!==a.length)return!1;for(var l=0;l<e.length;l++)if(n=e[l],r=a[l],!(n===r||K(n)&&K(r)))return!1;var n,r;return!0}let W,x,N,z,Y,E,y,_,$,M,q,D;ge=()=>{const e=Ne().proxy.$props;return c(()=>{const a=(l,n,r)=>({});return e.perfMode?ze(a):function(l,n){n===void 0&&(n=ye);var r=null;function p(){for(var u=[],d=0;d<arguments.length;d++)u[d]=arguments[d];if(r&&r.lastThis===this&&n(u,r.lastArgs))return r.lastResult;var f=l.apply(this,u);return r={lastResult:f,lastArgs:u,lastThis:this},f}return p.clear=function(){r=null},p}(a)})},le=50,oe="itemRendered",se="scroll",P="forward",A="backward",ae="auto",me="smart",ce="start",re="center",ne="end",h="horizontal",O="vertical",T="rtl",k="negative",j="positive-ascending",H="positive-descending",W={[h]:"left",[O]:"top"},x=v({type:w([Number,Function]),required:!0}),N=v({type:Number}),z=v({type:Number,default:2}),Y=v({type:String,values:["ltr","rtl"],default:"ltr"}),E=v({type:Number,default:0}),y=v({type:Number,required:!0}),_=v({type:String,values:["horizontal","vertical"],default:O}),$=B({className:{type:String,default:""},containerElement:{type:w([String,Object]),default:"div"},data:{type:w(Array),default:()=>Ee([])},direction:Y,height:{type:[String,Number],required:!0},innerElement:{type:[String,Object],default:"div"},style:{type:w([Object,String,Array])},useIsScrolling:{type:Boolean,default:!1},width:{type:[Number,String],required:!1},perfMode:{type:Boolean,default:!0},scrollbarAlwaysOn:{type:Boolean,default:!1}}),he=B({cache:z,estimatedItemSize:N,layout:_,initScrollOffset:E,total:y,itemSize:x,...$}),M={type:Number,default:6},q={type:Number,default:0},D={type:Number,default:2},pe=B({columnCache:z,columnWidth:x,estimatedColumnWidth:N,estimatedRowHeight:N,initScrollLeft:E,initScrollTop:E,itemKey:{type:w(Function),default:({columnIndex:e,rowIndex:a})=>`${a}:${e}`},rowCache:z,rowHeight:x,totalColumn:y,totalRow:y,hScrollbarSize:M,vScrollbarSize:M,scrollbarStartGap:q,scrollbarEndGap:D,role:String,...$}),V=B({alwaysOn:Boolean,class:String,layout:_,total:y,ratio:{type:Number,required:!0},clientSize:{type:Number,required:!0},scrollFrom:{type:Number,required:!0},scrollbarSize:M,startGap:q,endGap:D,visible:Boolean}),ue=(e,a)=>e<a?P:A,ve=e=>e==="ltr"||e===T||e===h,fe=e=>e===T;let b=null;de=function(e=!1){if(b===null||e){const a=document.createElement("div"),l=a.style;l.width="50px",l.height="50px",l.overflow="scroll",l.direction="rtl";const n=document.createElement("div"),r=n.style;return r.width="100px",r.height="100px",a.appendChild(n),document.body.appendChild(a),a.scrollLeft>0?b=H:(a.scrollLeft=1,b=a.scrollLeft===0?k:j),document.body.removeChild(a),b}return b},ie=Me({name:"ElVirtualScrollBar",props:V,emits:["scroll","start-move","stop-move"],setup(e,{emit:a}){const l=c(()=>e.startGap+e.endGap),n=Z("virtual-scrollbar"),r=Z("scrollbar"),p=ee(),u=ee();let d=null,f=null;const i=Le({isDragging:!1,traveled:0}),o=c(()=>Ce[e.layout]),Q=c(()=>e.clientSize-R(l)),be=c(()=>({position:"absolute",width:`${h===e.layout?Q.value:e.scrollbarSize}px`,height:`${h===e.layout?e.scrollbarSize:Q.value}px`,[W[e.layout]]:"2px",right:"2px",bottom:"2px",borderRadius:"4px"})),F=c(()=>{const t=e.ratio,s=e.clientSize;if(t>=100)return Number.POSITIVE_INFINITY;if(t>=50)return t*s/100;const g=s/3;return Math.floor(Math.min(Math.max(t*s,20),g))}),Se=c(()=>{if(!Number.isFinite(F.value))return{display:"none"};const t=`${F.value}px`;return function({move:g,size:I,bar:X},xe){const m={},G=`translate${X.axis}(${g}px)`;return m[X.size]=I,m.transform=G,m.msTransform=G,m.webkitTransform=G,xe==="horizontal"?m.height="100%":m.width="100%",m}({bar:o.value,size:t,move:i.traveled},e.layout)}),S=c(()=>Math.floor(e.clientSize-F.value-R(l))),J=()=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",L),document.onselectstart=f,f=null;const t=R(u);t&&(t.removeEventListener("touchmove",C),t.removeEventListener("touchend",L))},U=t=>{t.stopImmediatePropagation(),t.ctrlKey||[1,2].includes(t.button)||(i.isDragging=!0,i[o.value.axis]=t.currentTarget[o.value.offset]-(t[o.value.client]-t.currentTarget.getBoundingClientRect()[o.value.direction]),a("start-move"),(()=>{window.addEventListener("mousemove",C),window.addEventListener("mouseup",L);const s=R(u);s&&(f=document.onselectstart,document.onselectstart=()=>!1,s.addEventListener("touchmove",C),s.addEventListener("touchend",L))})())},L=()=>{i.isDragging=!1,i[o.value.axis]=0,a("stop-move"),J()},C=t=>{const{isDragging:s}=i;if(!s||!u.value||!p.value)return;const g=i[o.value.axis];if(!g)return;Te(d);const I=-1*(p.value.getBoundingClientRect()[o.value.direction]-t[o.value.client])-(u.value[o.value.offset]-g);d=Oe(()=>{i.traveled=Math.max(e.startGap,Math.min(I,S.value)),a("scroll",I,S.value)})},we=t=>{const s=Math.abs(t.target.getBoundingClientRect()[o.value.direction]-t[o.value.client])-u.value[o.value.offset]/2;i.traveled=Math.max(0,Math.min(s,S.value)),a("scroll",s,S.value)};return Ie(()=>e.scrollFrom,t=>{i.isDragging||(i.traveled=Math.ceil(t*S.value))}),Be(()=>{J()}),()=>te("div",{role:"presentation",ref:p,class:[n.b(),e.class,(e.alwaysOn||i.isDragging)&&"always-on"],style:be.value,onMousedown:Re(we,["stop","prevent"]),onTouchstartPrevent:U},te("div",{ref:u,class:r.e("thumb"),style:Se.value,onMousedown:U},[]))}})});export{ae as A,A as B,re as C,le as D,ne as E,P as F,h as H,oe as I,T as R,se as S,O as V,$e as __tla,j as a,k as b,ie as c,ue as d,H as e,ce as f,de as g,me as h,ve as i,pe as j,fe as k,V as l,ge as u,he as v};
