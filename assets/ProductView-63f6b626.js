import{d as v,c as n,a,w as r,B as S,o as c,b as s,e,C as h,F as m,r as f,t as u,T as i,h as B,i as w,m as _,j as P,f as p,S as y,k,_ as x,u as L,l as N,n as $}from"./index-5cb35d76.js";const b=["id"],A={class:"product__gallery"},T={class:"product__gallery-small"},V=["src","alt"],F={class:"product__gallery-big"},I=["src","alt"],j={class:"product__info"},z={class:"product__title"},D={class:"product__description"},E={class:"product__price"},R={class:"product__price-regular"},U={key:0,class:"product__price-discount"},q=v({__name:"BlockProduct",props:{id:null,title:null,cover:null,gallery:null,description:null,slug:null,category:null,attr:null,price:null},setup(t){const d=t,o={itemsToShow:1,snapAlign:"start"},g={itemsToShow:3,snapAlign:"start"};return(C,H)=>(c(),n("section",{class:"product",id:`product-${t.slug}`},[a(S,null,{default:r(()=>[s("div",A,[s("div",T,[a(e(h),{settings:g},{default:r(()=>[(c(!0),n(m,null,f(t.gallery,l=>(c(),p(e(y),{key:l},{default:r(()=>[s("img",{class:"product__thumbnail",width:"150",height:"150",src:e(k)({fileName:l,folder:"images/products"}),alt:t.title[e(i).currentLocale]},null,8,V)]),_:2},1024))),128))]),_:1})]),s("div",F,[a(e(h),{settings:o},{default:r(()=>[(c(!0),n(m,null,f(t.gallery,l=>(c(),p(e(y),{key:l},{default:r(()=>[s("img",{class:"product__picture",width:"300",height:"300",src:e(k)({fileName:l,folder:"images/products"}),alt:t.title[e(i).currentLocale]},null,8,I)]),_:2},1024))),128))]),_:1})])]),s("div",j,[s("h2",z,u(t.title[e(i).currentLocale]),1),s("p",D,u(t.description[e(i).currentLocale]),1),s("div",E,[s("span",R,"$"+u(t.price.regular),1),t.price.discount?(c(),n("span",U," $"+u(t.price.discount),1)):B("",!0)]),a(w,_({class:"product__cart"},d),null,16),a(P,_({class:"product__favorite"},d),null,16)])]),_:1})],8,b))}});const G=x(q,[["__scopeId","data-v-4cf5704c"]]),K=v({__name:"ProductView",setup(t){const o=L().getProduct(`${N().params.slug}`);return(g,C)=>e(o)?(c(),p(G,$(_({key:0},e(o))),null,16)):B("",!0)}});export{K as default};
