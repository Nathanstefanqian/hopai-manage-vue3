import{cG as V,cH as w,Z as c,bN as d,__tla as r}from"./index-e69fb82c.js";let h,l=Promise.all([(()=>{try{return r}catch{}})()]).then(async()=>{h=V("tagsView",{state:()=>({visitedViews:[],cachedViews:new Set}),getters:{getVisitedViews(){return this.visitedViews},getCachedViews(){return Array.from(this.cachedViews)}},actions:{addView(e){this.addVisitedView(e),this.addCachedView()},addVisitedView(e){var i,t;this.visitedViews.some(s=>s.path===e.path)||(i=e.meta)!=null&&i.noTagsView||this.visitedViews.push(Object.assign({},e,{title:((t=e.meta)==null?void 0:t.title)||"no-name"}))},addCachedView(){var i;const e=new Set;for(const t of this.visitedViews){const s=w(t);if((i=s.meta)!=null&&i.noCache)continue;const a=s.name;e.add(a)}Array.from(this.cachedViews).sort().toString()!==Array.from(e).sort().toString()&&(this.cachedViews=e)},delView(e){this.delVisitedView(e),this.delCachedView()},delVisitedView(e){for(const[i,t]of this.visitedViews.entries())if(t.path===e.path){this.visitedViews.splice(i,1);break}},delCachedView(){const e=c.currentRoute.value,i=d(this.getCachedViews,t=>t===e.name);i>-1&&this.cachedViews.delete(this.getCachedViews[i])},delAllViews(){this.delAllVisitedViews(),this.delCachedView()},delAllVisitedViews(){this.visitedViews=[]},delOthersViews(e){this.delOthersVisitedViews(e),this.addCachedView()},delOthersVisitedViews(e){this.visitedViews=this.visitedViews.filter(i=>{var t;return((t=i==null?void 0:i.meta)==null?void 0:t.affix)||i.path===e.path})},delLeftViews(e){const i=d(this.visitedViews,t=>t.path===e.path);i>-1&&(this.visitedViews=this.visitedViews.filter((t,s)=>{var a;return((a=t==null?void 0:t.meta)==null?void 0:a.affix)||t.path===e.path||s>i}),this.addCachedView())},delRightViews(e){const i=d(this.visitedViews,t=>t.path===e.path);i>-1&&(this.visitedViews=this.visitedViews.filter((t,s)=>{var a;return((a=t==null?void 0:t.meta)==null?void 0:a.affix)||t.path===e.path||s<i}),this.addCachedView())},updateVisitedView(e){for(let i of this.visitedViews)if(i.path===e.path){i=Object.assign(i,e);break}}}})});export{l as __tla,h as u};
