function E(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function D(){return Object.create(null)}function g(t){t.forEach(O)}function P(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ft(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function R(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(G(e,n))}function _t(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,l){if(r){const c=q(e,n,i,l);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let v=!1;function I(){v=!0}function J(){v=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const s=e[u].claim_order,a=(r>0&&e[n[r]].claim_order<=s?r+1:K(1,r,x=>e[n[x]].claim_order,s))-1;i[u]=n[a]+1;const f=a+1;n[f]=u,r=Math.max(f,r)}const l=[],c=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(l.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<l.length&&c[u].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(c[u],a)}}function W(t,e){if(v){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){v&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function gt(){return C(" ")}function xt(){return C("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:X(t,e,n)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){Z(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function tt(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Et(t,e,n){return tt(t,e,n,V)}function et(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function vt(t){return et(t," ")}function wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e){t.value=e??""}function At(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function St(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ct(t,e){return new t(e)}let y;function p(t){y=t}function w(){if(!y)throw new Error("Function called outside component initialization");return y}function jt(t){w().$$.on_mount.push(t)}function kt(t){w().$$.after_update.push(t)}function Dt(t){w().$$.on_destroy.push(t)}function Tt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=nt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const h=[],T=[];let m=[];const M=[],H=Promise.resolve();let A=!1;function L(){A||(A=!0,H.then(z))}function Mt(){return L(),H}function S(t){m.push(t)}const N=new Set;let d=0;function z(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),it(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;T.length;)T.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;M.length;)M.pop()();A=!1,N.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function rt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function Pt(){_.r||g(_.c),_=_.p}function ct(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Bt(t){t&&t.c()}function Ht(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(O).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),l.forEach(S)}function st(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,i,r,l,c,o=[-1]){const u=y;p(t);const s=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:D(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(f,x,...j)=>{const k=j.length?j[0]:x;return s.ctx&&r(s.ctx[f],s.ctx[f]=k)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](k),a&&lt(t,f)),x}):[],s.update(),a=!0,g(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){I();const f=Y(e.target);s.fragment&&s.fragment.l(f),f.forEach(U)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),J(),z()}p(u)}class zt{$destroy(){st(this,1),this.$destroy=E}$on(e,n){if(!P(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,st as B,_t as C,W as D,ht as E,mt as F,dt as G,E as H,at as I,Nt as J,bt as K,yt as L,Dt as M,St as N,ft as O,Tt as P,$t as Q,g as R,zt as S,gt as a,pt as b,vt as c,qt as d,xt as e,Pt as f,ct as g,U as h,Lt as i,kt as j,V as k,Et as l,Y as m,X as n,jt as o,At as p,C as q,et as r,ot as s,Mt as t,wt as u,Ot as v,T as w,Ct as x,Bt as y,Ht as z};
//# sourceMappingURL=index.261bd982.js.map
