import{i as J,$ as z,n as A,d as L,h as V,o as p,c as k,b as m,a as I,w as C,F as q,r as R,e as v,S as F,E as K,f as O,j as N,k as G,T as $,l as Q,_ as H,B as W,t as B,p as D,q as U,s as Z,v as w,x as ee,y as te,u as se,z as ae,A as le,m as ne,C as oe,D as ie}from"./index-6f174407.js";function ce({swiper:e,extendParams:u,on:r}){u({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let h=!1,T=!1;e.thumbs={swiper:null};function M(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const s=t.clickedIndex,o=t.clickedSlide;if(o&&z(o).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let n;if(t.params.loop?n=parseInt(z(t.clickedSlide).attr("data-swiper-slide-index"),10):n=s,e.params.loop){let i=e.activeIndex;e.slides.eq(i).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,i=e.activeIndex);const g=e.slides.eq(i).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),x=e.slides.eq(i).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();typeof g>"u"?n=x:typeof x>"u"?n=g:x-i<i-g?n=x:n=g}e.slideTo(n)}function S(){const{thumbs:t}=e.params;if(h)return!1;h=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(J(t.swiper)){const o=Object.assign({},t.swiper);Object.assign(o,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(o),T=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",M),!0}function c(t){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const o=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let n=1;const i=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(i),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let l=0;l<n;l+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+l}"]`).addClass(i);else for(let l=0;l<n;l+=1)s.slides.eq(e.realIndex+l).addClass(i);const g=e.params.thumbs.autoScrollOffset,x=g&&!s.params.loop;if(e.realIndex!==s.realIndex||x){let l=s.activeIndex,d,a;if(s.params.loop){s.slides.eq(l).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,l=s.activeIndex);const y=s.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),_=s.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof y>"u"?d=_:typeof _>"u"?d=y:_-l===l-y?d=s.params.slidesPerGroup>1?_:l:_-l<l-y?d=_:d=y,a=e.activeIndex>e.previousIndex?"next":"prev"}else d=e.realIndex,a=d>e.previousIndex?"next":"prev";x&&(d+=a==="next"?g:-1*g),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(d)<0&&(s.params.centeredSlides?d>l?d=d-Math.floor(o/2)+1:d=d+Math.floor(o/2)-1:d>l&&s.params.slidesPerGroup,s.slideTo(d,t?0:void 0))}}r("beforeInit",()=>{const{thumbs:t}=e.params;!t||!t.swiper||(S(),c(!0))}),r("slideChange update resize observerUpdate",()=>{c()}),r("setTransition",(t,s)=>{const o=e.thumbs.swiper;!o||o.destroyed||o.setTransition(s)}),r("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||T&&t.destroy()}),Object.assign(e.thumbs,{init:S,update:c})}function de({swiper:e,extendParams:u,emit:r,once:h}){u({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function T(){const c=e.getTranslate();e.setTranslate(c),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function M(){const{touchEventsData:c,touches:t}=e;c.velocities.length===0&&c.velocities.push({position:t[e.isHorizontal()?"startX":"startY"],time:c.touchStartTime}),c.velocities.push({position:t[e.isHorizontal()?"currentX":"currentY"],time:A()})}function S({currentPos:c}){const{params:t,$wrapperEl:s,rtlTranslate:o,snapGrid:n,touchEventsData:i}=e,x=A()-i.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<n.length?e.slideTo(n.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(i.velocities.length>1){const f=i.velocities.pop(),b=i.velocities.pop(),Y=f.position-b.position,j=f.time-b.time;e.velocity=Y/j,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(j>150||A()-f.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,i.velocities.length=0;let l=1e3*t.freeMode.momentumRatio;const d=e.velocity*l;let a=e.translate+d;o&&(a=-a);let y=!1,_;const P=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let E;if(a<e.maxTranslate())t.freeMode.momentumBounce?(a+e.maxTranslate()<-P&&(a=e.maxTranslate()-P),_=e.maxTranslate(),y=!0,i.allowMomentumBounce=!0):a=e.maxTranslate(),t.loop&&t.centeredSlides&&(E=!0);else if(a>e.minTranslate())t.freeMode.momentumBounce?(a-e.minTranslate()>P&&(a=e.minTranslate()+P),_=e.minTranslate(),y=!0,i.allowMomentumBounce=!0):a=e.minTranslate(),t.loop&&t.centeredSlides&&(E=!0);else if(t.freeMode.sticky){let f;for(let b=0;b<n.length;b+=1)if(n[b]>-a){f=b;break}Math.abs(n[f]-a)<Math.abs(n[f-1]-a)||e.swipeDirection==="next"?a=n[f]:a=n[f-1],a=-a}if(E&&h("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(o?l=Math.abs((-a-e.translate)/e.velocity):l=Math.abs((a-e.translate)/e.velocity),t.freeMode.sticky){const f=Math.abs((o?-a:a)-e.translate),b=e.slidesSizesGrid[e.activeIndex];f<b?l=t.speed:f<2*b?l=t.speed*1.5:l=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&y?(e.updateProgress(_),e.setTransition(l),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating=!0,s.transitionEnd(()=>{!e||e.destroyed||!i.allowMomentumBounce||(r("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(_),s.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(r("_freeModeNoMomentumRelease"),e.updateProgress(a),e.setTransition(l),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,s.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(a),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&r("_freeModeNoMomentumRelease");(!t.freeMode.momentum||x>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:T,onTouchMove:M,onTouchEnd:S}})}const re={class:"gallery"},ue={class:"gallery__big"},me={class:"gallery__big-slide"},fe=["src","alt"],he={class:"gallery__small"},_e={class:"gallery__small-slide"},ve=["src","alt"],be=L({__name:"BaseGallery",props:{gallery:null,title:null},setup(e){const u=V(),r=V(0),h=c=>{u.value=c},T=()=>{u.value.realIndex&&(r.value=u.value.realIndex)},M=c=>{r.value=c},S=[K,ce,de];return(c,t)=>(p(),k("div",re,[m("div",ue,[I(v(F),{id:"gallery",ref:"gallery","slides-per-view":1,effect:"fade",thumbs:{swiper:u.value},allowTouchMove:!1,modules:S},{default:C(()=>[(p(!0),k(q,null,R(e.gallery,s=>(p(),O(v(N),{key:s},{default:C(()=>[m("div",me,[m("img",{class:"gallery__picture",width:"300",height:"300",src:v(G)({fileName:s,folder:"images/products"}),alt:e.title[v($).currentLocale]},null,8,fe)])]),_:2},1024))),128))]),_:1},8,["thumbs"])]),m("div",he,[I(v(F),{id:"thumbnails",ref_key:"thumbnailsSwiper",ref:u,"slides-per-view":3,freeMode:!0,"watch-slides-progress":!0,onSwiper:h,onSlideChange:T,modules:S},{default:C(()=>[(p(!0),k(q,null,R(e.gallery,(s,o)=>(p(),O(v(N),{key:s,onClick:n=>M(o)},{default:C(()=>[m("div",_e,[m("img",{class:Q(["gallery__thumbnail",{"gallery__thumbnail--active":o===r.value}]),width:"150",height:"150",src:v(G)({fileName:s,folder:"images/products"}),alt:e.title[v($).currentLocale]},null,10,ve)])]),_:2},1032,["onClick"]))),128))]),_:1},512)])]))}});const ge=H(be,[["__scopeId","data-v-f6c40c44"]]),X=e=>(ee("data-v-5ca054ab"),e=e(),te(),e),xe=["id"],ye={class:"product__info"},pe={class:"product__title"},Te={class:"product__description"},Se=X(()=>m("br",null,null,-1)),Ie={class:"product__price"},Me=X(()=>m("span",{class:"product__price-title"},"Цена:",-1)),Ce={class:"product__price-regular"},ke={key:0,class:"product__price-discount"},Pe={class:"product__buttons"},Be=L({__name:"BlockProduct",props:{id:null,title:null,cover:null,gallery:null,description:null,slug:null,category:null,attr:null,price:null},setup(e){const u=e;return(r,h)=>(p(),k("section",{class:"product",id:`product-${e.slug}`},[I(W,{class:"product__inner"},{default:C(()=>[I(ge,{class:"product__gallery",title:e.title,gallery:e.gallery},null,8,["title","gallery"]),m("div",ye,[m("h2",pe,B(e.title[v($).currentLocale]),1),m("p",Te,[D(" Описание:"),Se,D(" "+B(e.description[v($).currentLocale]),1)]),m("div",Ie,[Me,m("span",Ce,"$"+B(e.price.regular),1),e.price.discount?(p(),k("span",ke," $"+B(e.price.discount),1)):U("",!0)]),m("div",Pe,[I(Z,{class:"product__cart",appearance:"ghost",id:u.id},{default:C(()=>[D(" Добавить в корзину ")]),_:1},8,["id"]),I(w,{class:"product__favorite",appearance:"ghost",id:u.id},null,8,["id"])])])]),_:1})],8,xe))}});const $e=H(Be,[["__scopeId","data-v-5ca054ab"]]),Ae=L({__name:"ProductView",setup(e){const u=se(),r=ie(),h=V(u.getProduct(`${r.params.slug}`)),T=u.getProducts.slice(0,8);return ae(()=>r.params.slug,()=>{h.value=u.getProduct(`${r.params.slug}`)}),(M,S)=>(p(),k(q,null,[h.value?(p(),O($e,le(ne({key:0},h.value)),null,16)):U("",!0),I(oe,{name:"featured",products:v(T)},null,8,["products"])],64))}});export{Ae as default};
