"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[402],{7402:(q,O,w)=>{w.r(O),w.d(O,{startInputShims:()=>Z});var g=w(467),l=w(4878),T=w(7849),y=w(1656),R=w(5680);const M=new WeakMap,P=(e,t,r,s=0,o=!1)=>{M.has(e)!==r&&(r?j(e,t,s,o):G(e,t))},j=(e,t,r,s=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,s&&(n.disabled=!0),o.appendChild(n),M.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${r}px,0) scale(0)`},G=(e,t)=>{const r=M.get(e);r&&(M.delete(e),r.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",B=(e,t,r)=>{const s=e[N];s&&clearTimeout(s),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),r&&r()},120)},F=(e,t,r)=>{e.addEventListener("focusout",()=>{t&&B(t,0,r)},{once:!0})};let A=0;const x="data-ionic-skip-scroll-assist",V=(e,t,r,s,o,n,i,a=!1)=>{const S=n&&(void 0===i||i.mode===R.a.None);let m=!1;const u=void 0!==l.w?l.w.innerHeight:0,f=h=>{!1!==m?U(e,t,r,s,h.detail.keyboardHeight,S,a,u,!1):m=!0},c=()=>{m=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)},_=function(){var h=(0,g.A)(function*(){t.hasAttribute(x)?t.removeAttribute(x):(U(e,t,r,s,o,S,a,u),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",c,!0))});return function(){return h.apply(this,arguments)}}();return e.addEventListener("focusin",_,!0),()=>{e.removeEventListener("focusin",_,!0),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",c,!0)}},p=e=>{document.activeElement!==e&&(e.setAttribute(x,"true"),e.focus())},U=function(){var e=(0,g.A)(function*(t,r,s,o,n,i,a=!1,S=0,m=!0){if(!s&&!o)return;const u=((e,t,r,s)=>{var o;return((e,t,r,s)=>{const o=e.top,n=e.bottom,i=t.top,S=i+15,u=Math.min(t.bottom,s-r)-50-n,f=S-o,c=Math.round(u<0?-u:f>0?-f:0),_=Math.min(c,o-i),L=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,L)),scrollPadding:r,inputSafeY:4-(o-S)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),r,s)})(t,s||o,n,S);if(s&&Math.abs(u.scrollAmount)<4)return p(r),void(i&&null!==s&&(B(s,A),F(r,s,()=>A=0)));if(P(t,r,!0,u.inputSafeY,a),p(r),(0,y.r)(()=>t.click()),i&&s&&(A=u.scrollPadding,B(s,A)),typeof window<"u"){let f;const c=function(){var h=(0,g.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",_),window.removeEventListener("ionKeyboardDidShow",c),s&&(yield(0,T.c)(s,0,u.scrollAmount,u.scrollDuration)),P(t,r,!1,u.inputSafeY),p(r),i&&F(r,s,()=>A=0)});return function(){return h.apply(this,arguments)}}(),_=()=>{window.removeEventListener("ionKeyboardDidShow",_),window.addEventListener("ionKeyboardDidShow",c)};if(s){const h=yield(0,T.g)(s);if(m&&u.scrollAmount>h.scrollHeight-h.clientHeight-h.scrollTop)return"password"===r.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",_)):window.addEventListener("ionKeyboardDidShow",c),void(f=setTimeout(c,1e3))}c()}});return function(r,s,o,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,g.A)(function*(t,r){if(void 0===l.d)return;const s="ios"===r,o="android"===r,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",s),S=t.getBoolean("inputBlurring",s),m=t.getBoolean("scrollPadding",!0),u=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,c=new WeakMap,_=yield R.K.getResizeMode(),h=function(){var v=(0,g.A)(function*(d){yield new Promise(I=>(0,y.c)(d,I));const K=d.shadowRoot||d,b=K.querySelector("input")||K.querySelector("textarea"),D=(0,T.a)(d),H=D?null:d.closest("ion-footer");if(b){if(D&&a&&!f.has(d)){const I=((e,t,r)=>{if(!r||!t)return()=>{};const s=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},o=()=>P(e,t,!1),n=()=>s(!0),i=()=>s(!1);return(0,y.a)(r,"ionScrollStart",n),(0,y.a)(r,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,y.b)(r,"ionScrollStart",n),(0,y.b)(r,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,b,D);f.set(d,I)}if("date"!==b.type&&"datetime-local"!==b.type&&(D||H)&&i&&!c.has(d)){const I=V(d,b,D,H,n,m,_,o);c.set(d,I)}}});return function(K){return v.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const r=document;(0,y.a)(r,"ionScrollStart",()=>{t=!0}),r.addEventListener("focusin",()=>{e=!0},!0),r.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=r.activeElement;if(!a||a.matches(C))return;const S=i.target;S!==a&&(S.matches(C)||S.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of u)h(v);l.d.addEventListener("ionInputDidLoad",v=>{h(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=c.get(v);d&&d(),c.delete(v)}})(v.detail)})});return function(r,s){return e.apply(this,arguments)}}()}}]);