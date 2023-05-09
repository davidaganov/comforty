import{d as b,u as k,r as h,o as B,a as i,c as g,b as r,e as $,t as p,f as c,w as v,I as G,_ as V,g as z,B as P,h as D,i as E,F as T,j as L,n as C,k as f,T as F,v as K,l as M,m as N,p as I,q as R,s as W,x as j,y as w,z as A,A as q,C as H,D as O,E as Q,G as J,H as U}from"./index-8af65e3d.js";const X=["aria-expanded"],Y=["tabindex","aria-label"],Z={class:"categories__container"},ee={class:"categories__top"},te={class:"categories__title"},se={class:"categories__list"},ae={id:"categoriesLabel",class:"visually-hidden"},oe=["id","aria-selected","aria-labelledby","onClick"],re=b({__name:"BaseCategoriesSelect",setup(y){const s=k(),u=h(s.getCategories),l=h(!1),t=h(window.innerWidth),n=e=>{t.value<1021&&(l.value=e,l.value?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll"))};return B(()=>{window.addEventListener("resize",()=>{t.value=window.innerWidth})}),(e,a)=>(i(),g("div",{class:C(["categories",{"categories--open":l.value}]),role:"listbox","aria-expanded":l.value,onKeydown:a[3]||(a[3]=N(d=>n(!1),["esc"]))},[r("button",{type:"button",class:"categories__label",tabindex:t.value<1021?0:-1,"aria-label":t.value<1021?e.$t("page.products.filter.ariaOpen"):e.$t("page.products.filter.ariaList"),onClick:a[0]||(a[0]=d=>n(!0))},[$(p(t.value>1021?e.$t("page.products.filter.categories"):e.$t("page.products.filter.title"))+" ",1),c(V,{class:"categories__label-icon",stroke:!0,width:12,height:8,box:"0 0 9 5"},{default:v(()=>[c(G)]),_:1})],8,Y),c(M,{name:"categories"},{default:v(()=>[z(r("div",Z,[r("div",ee,[c(P,{class:"categories__top-title"},{default:v(()=>[$(p(e.$t("page.products.filter.title")),1)]),_:1}),c(D,{"aria-label":e.$t("page.products.filter.ariaClose"),onClick:a[1]||(a[1]=d=>n(!1)),onKeydown:a[2]||(a[2]=E(d=>d.key==="Tab"?n(!1):null,["shift"]))},null,8,["aria-label"])]),r("h3",te,p(e.$t("page.products.filter.categories")),1),r("div",se,[r("span",ae,p(e.$t("page.products.filter.ariaLabel"))+": ",1),(i(!0),g(T,null,L(u.value,({id:d,slug:_,title:o})=>(i(),g("button",{type:"button",class:C(["categories__item",{"categories__item--active":f(s).isSelectedCategory(_)}]),role:"option",id:`category-${_}`,"aria-selected":f(s).isSelectedCategory(_),"aria-labelledby":`categoriesLabel category-${_}`,key:d,onClick:m=>(f(s).setSelectedCategory(_),n(!1))},p(o[f(F).currentLocale]),11,oe))),128))])],512),[[K,l.value]])]),_:1})],42,X))}});const ie=I(re,[["__scopeId","data-v-30539051"]]),x=y=>(J("data-v-3fd5d92e"),y=y(),U(),y),ce={class:"products",id:"products"},le=x(()=>r("hr",{class:"products__line"},null,-1)),ne={key:0,class:"products__list"},de={key:1,class:"products__empty"},ue=x(()=>r("span",{class:"products__empty-title"},"404",-1)),_e={class:"products__empty-description"},pe=b({__name:"BlockProductsGrid",setup(y){const s=h([]),u=R(),l=W(),t=k(),{getSelectedSortingTag:n,getSelectedCategory:e}=j(t),a=()=>{const o=u.query.cat?u.query.cat:"all",m={cat:o};typeof o=="string"&&(s.value=t.getSortingProducts({category:o}),t.setSelectedCategory(o)),l.push({path:u.path,query:m})},d=()=>{s.value=t.getSortingProducts({tag:n.value,category:e.value})},_=()=>{t.setSelectedSortingTag("all"),s.value=t.getSortingProducts({category:e.value}),l.push({path:u.path,query:{cat:e.value}})};return w(n,d),w(e,_),B(()=>{a()}),(o,m)=>(i(),g("section",ce,[c(Q,{class:"products__inner"},{default:v(()=>[c(P,{class:"products__title"},{default:v(()=>[$(p(o.$t("page.products.category.title")),1)]),_:1}),c(ie,{class:"products__categories"}),le,c(A,{class:"products__sorting",dropdown:!0}),s.value.length!==0?(i(),g("div",ne,[(i(!0),g(T,null,L(s.value,S=>(i(),q(H,O({class:"products__item",key:S.id},S),null,16))),128))])):(i(),g("div",de,[ue,r("p",_e,p(o.$t("page.products.notFound")),1)]))]),_:1})]))}});const ge=I(pe,[["__scopeId","data-v-3fd5d92e"]]),ve=b({__name:"ProductsView",setup(y){return(s,u)=>(i(),q(ge))}});export{ve as default};