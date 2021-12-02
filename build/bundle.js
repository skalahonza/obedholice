var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,n,e,s){if(t){const o=u(t,n,e,s);return t[0](o)}}function u(t,e,s,o){return t[1]&&o?n(s.ctx.slice(),t[1](o(e))):s.ctx}function i(t,n,e,s){if(t[2]&&s){const o=t[2](s(e));if(void 0===n.dirty)return o;if("object"==typeof o){const t=[],e=Math.max(n.dirty.length,o.length);for(let s=0;s<e;s+=1)t[s]=n.dirty[s]|o[s];return t}return n.dirty|o}return n.dirty}function $(t,n,e,s,o,l){if(o){const c=u(n,e,s,l);t.p(c,o)}}function a(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function f(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function d(t,n){const e={};n=new Set(n);for(const s in t)n.has(s)||"$"===s[0]||(e[s]=t[s]);return e}function p(t,n){t.appendChild(n)}function m(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function w(){return y("")}function v(t,n,e,s){return t.addEventListener(n,e,s),()=>t.removeEventListener(n,e,s)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function k(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in n)null==n[s]?t.removeAttribute(s):"style"===s?t.style.cssText=n[s]:"__value"===s?t.value=t[s]=n[s]:e[s]&&e[s].set?t[s]=n[s]:_(t,s,n[s])}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let E;function A(t){E=t}function N(t){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.on_mount.push(t)}function O(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const G=[],T=[],B=[],C=[],I=Promise.resolve();let M=!1;function S(t){B.push(t)}let H=!1;const L=new Set;function P(){if(!H){H=!0;do{for(let t=0;t<G.length;t+=1){const n=G[t];A(n),q(n.$$)}for(A(null),G.length=0;T.length;)T.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];L.has(n)||(L.add(n),n())}B.length=0}while(G.length);for(;C.length;)C.pop()();M=!1,H=!1,L.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const z=new Set;let D;function F(){D={r:0,c:[],p:D}}function J(){D.r||o(D.c),D=D.p}function K(t,n){t&&t.i&&(z.delete(t),t.i(n))}function Q(t,n,e,s){if(t&&t.o){if(z.has(t))return;z.add(t),D.c.push((()=>{z.delete(t),s&&(e&&t.d(1),s())})),t.o(n)}}function R(t,n){const e={},s={},o={$$scope:1};let l=t.length;for(;l--;){const c=t[l],r=n[l];if(r){for(const t in c)t in r||(s[t]=1);for(const t in r)o[t]||(e[t]=r[t],o[t]=1);t[l]=r}else for(const t in c)o[t]=1}for(const t in s)t in e||(e[t]=void 0);return e}function U(t){t&&t.c()}function V(t,n,s,c){const{fragment:r,on_mount:u,on_destroy:i,after_update:$}=t.$$;r&&r.m(n,s),c||S((()=>{const n=u.map(e).filter(l);i?i.push(...n):o(n),t.$$.on_mount=[]})),$.forEach(S)}function W(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function X(t,n){-1===t.$$.dirty[0]&&(G.push(t),M||(M=!0,I.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Y(n,e,l,c,r,u,i,$=[-1]){const a=E;A(n);const f=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:r,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:s(),dirty:$,skip_bound:!1,root:e.target||a.$$.root};i&&i(f.root);let d=!1;if(f.ctx=l?l(n,e.props||{},((t,e,...s)=>{const o=s.length?s[0]:e;return f.ctx&&r(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),d&&X(n,t)),e})):[],f.update(),d=!0,o(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();e.intro&&K(n.$$.fragment),V(n,e.target,e.anchor,e.customElement),P()}A(a)}class Z{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function tt(t){let n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))n=t.map(tt).filter(Boolean).join(" ");else for(let e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function nt(...t){return t.map(tt).filter(Boolean).join(" ")}function et(t){let e,s,o,l;const c=t[9].default,u=r(c,t,t[8],null);let f=[t[2],{class:t[1]},{style:t[0]}],d={};for(let t=0;t<f.length;t+=1)d=n(d,f[t]);return{c(){e=x("div"),u&&u.c(),k(e,d)},m(n,c){m(n,e,c),u&&u.m(e,null),s=!0,o||(l=v(e,"click",t[10]),o=!0)},p(t,[n]){u&&u.p&&(!s||256&n)&&$(u,c,t,t[8],s?i(c,t[8],n,null):a(t[8]),null),k(e,d=R(f,[4&n&&t[2],(!s||2&n)&&{class:t[1]},(!s||1&n)&&{style:t[0]}]))},i(t){s||(K(u,t),s=!0)},o(t){Q(u,t),s=!1},d(t){t&&g(e),u&&u.d(t),o=!1,l()}}}function st(t,e,s){let o;const l=["class","body","color","inverse","outline","style"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e,{body:$=!1}=e,{color:a=""}=e,{inverse:p=!1}=e,{outline:m=!1}=e,{style:g=""}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(2,c=d(e,l)),"class"in t&&s(3,i=t.class),"body"in t&&s(4,$=t.body),"color"in t&&s(5,a=t.color),"inverse"in t&&s(6,p=t.inverse),"outline"in t&&s(7,m=t.outline),"style"in t&&s(0,g=t.style),"$$scope"in t&&s(8,u=t.$$scope)},t.$$.update=()=>{248&t.$$.dirty&&s(1,o=nt(i,"card",!!p&&"text-white",!!$&&"card-body",!!a&&`${m?"border":"bg"}-${a}`))},[g,o,c,i,$,a,p,m,u,r,function(n){O.call(this,t,n)}]}class ot extends Z{constructor(t){super(),Y(this,t,st,et,c,{class:3,body:4,color:5,inverse:6,outline:7,style:0})}}function lt(t){let e,s;const o=t[4].default,l=r(o,t,t[3],null);let c=[t[1],{class:t[0]}],u={};for(let t=0;t<c.length;t+=1)u=n(u,c[t]);return{c(){e=x("div"),l&&l.c(),k(e,u)},m(t,n){m(t,e,n),l&&l.m(e,null),s=!0},p(t,[n]){l&&l.p&&(!s||8&n)&&$(l,o,t,t[3],s?i(o,t[3],n,null):a(t[3]),null),k(e,u=R(c,[2&n&&t[1],(!s||1&n)&&{class:t[0]}]))},i(t){s||(K(l,t),s=!0)},o(t){Q(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}function ct(t,e,s){let o;const l=["class"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(1,c=d(e,l)),"class"in t&&s(2,i=t.class),"$$scope"in t&&s(3,u=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&s(0,o=nt(i,"card-body"))},[o,c,i,u,r]}class rt extends Z{constructor(t){super(),Y(this,t,ct,lt,c,{class:2})}}function ut(t){let e,s;const o=t[4].default,l=r(o,t,t[3],null);let c=[t[1],{class:t[0]}],u={};for(let t=0;t<c.length;t+=1)u=n(u,c[t]);return{c(){e=x("div"),l&&l.c(),k(e,u)},m(t,n){m(t,e,n),l&&l.m(e,null),s=!0},p(t,[n]){l&&l.p&&(!s||8&n)&&$(l,o,t,t[3],s?i(o,t[3],n,null):a(t[3]),null),k(e,u=R(c,[2&n&&t[1],(!s||1&n)&&{class:t[0]}]))},i(t){s||(K(l,t),s=!0)},o(t){Q(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}function it(t,e,s){let o;const l=["class"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(1,c=d(e,l)),"class"in t&&s(2,i=t.class),"$$scope"in t&&s(3,u=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&s(0,o=nt(i,"card-deck"))},[o,c,i,u,r]}class $t extends Z{constructor(t){super(),Y(this,t,it,ut,c,{class:2})}}function at(t){let e,s,o,l;const c=t[5].default,u=r(c,t,t[4],null);let f=[t[2],{class:t[1]}],d={};for(let t=0;t<f.length;t+=1)d=n(d,f[t]);return{c(){e=x("div"),u&&u.c(),k(e,d)},m(n,c){m(n,e,c),u&&u.m(e,null),s=!0,o||(l=v(e,"click",t[7]),o=!0)},p(t,n){u&&u.p&&(!s||16&n)&&$(u,c,t,t[4],s?i(c,t[4],n,null):a(t[4]),null),k(e,d=R(f,[4&n&&t[2],(!s||2&n)&&{class:t[1]}]))},i(t){s||(K(u,t),s=!0)},o(t){Q(u,t),s=!1},d(t){t&&g(e),u&&u.d(t),o=!1,l()}}}function ft(t){let e,s,o,l;const c=t[5].default,u=r(c,t,t[4],null);let f=[t[2],{class:t[1]}],d={};for(let t=0;t<f.length;t+=1)d=n(d,f[t]);return{c(){e=x("h3"),u&&u.c(),k(e,d)},m(n,c){m(n,e,c),u&&u.m(e,null),s=!0,o||(l=v(e,"click",t[6]),o=!0)},p(t,n){u&&u.p&&(!s||16&n)&&$(u,c,t,t[4],s?i(c,t[4],n,null):a(t[4]),null),k(e,d=R(f,[4&n&&t[2],(!s||2&n)&&{class:t[1]}]))},i(t){s||(K(u,t),s=!0)},o(t){Q(u,t),s=!1},d(t){t&&g(e),u&&u.d(t),o=!1,l()}}}function dt(t){let n,e,s,o;const l=[ft,at],c=[];function r(t,n){return"h3"===t[0]?0:1}return n=r(t),e=c[n]=l[n](t),{c(){e.c(),s=w()},m(t,e){c[n].m(t,e),m(t,s,e),o=!0},p(t,[o]){let u=n;n=r(t),n===u?c[n].p(t,o):(F(),Q(c[u],1,1,(()=>{c[u]=null})),J(),e=c[n],e?e.p(t,o):(e=c[n]=l[n](t),e.c()),K(e,1),e.m(s.parentNode,s))},i(t){o||(K(e),o=!0)},o(t){Q(e),o=!1},d(t){c[n].d(t),t&&g(s)}}}function pt(t,e,s){let o;const l=["class","tag"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e,{tag:$="div"}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(2,c=d(e,l)),"class"in t&&s(3,i=t.class),"tag"in t&&s(0,$=t.tag),"$$scope"in t&&s(4,u=t.$$scope)},t.$$.update=()=>{8&t.$$.dirty&&s(1,o=nt(i,"card-header"))},[$,o,c,i,u,r,function(n){O.call(this,t,n)},function(n){O.call(this,t,n)}]}class mt extends Z{constructor(t){super(),Y(this,t,pt,dt,c,{class:3,tag:0})}}function gt(t){let e,s;const o=t[4].default,l=r(o,t,t[3],null);let c=[t[1],{class:t[0]}],u={};for(let t=0;t<c.length;t+=1)u=n(u,c[t]);return{c(){e=x("h6"),l&&l.c(),k(e,u)},m(t,n){m(t,e,n),l&&l.m(e,null),s=!0},p(t,[n]){l&&l.p&&(!s||8&n)&&$(l,o,t,t[3],s?i(o,t[3],n,null):a(t[3]),null),k(e,u=R(c,[2&n&&t[1],(!s||1&n)&&{class:t[0]}]))},i(t){s||(K(l,t),s=!0)},o(t){Q(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}function ht(t,e,s){let o;const l=["class"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(1,c=d(e,l)),"class"in t&&s(2,i=t.class),"$$scope"in t&&s(3,u=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&s(0,o=nt(i,"card-subtitle"))},[o,c,i,u,r]}class xt extends Z{constructor(t){super(),Y(this,t,ht,gt,c,{class:2})}}function yt(t){let e,s;const o=t[4].default,l=r(o,t,t[3],null);let c=[t[1],{class:t[0]}],u={};for(let t=0;t<c.length;t+=1)u=n(u,c[t]);return{c(){e=x("p"),l&&l.c(),k(e,u)},m(t,n){m(t,e,n),l&&l.m(e,null),s=!0},p(t,[n]){l&&l.p&&(!s||8&n)&&$(l,o,t,t[3],s?i(o,t[3],n,null):a(t[3]),null),k(e,u=R(c,[2&n&&t[1],(!s||1&n)&&{class:t[0]}]))},i(t){s||(K(l,t),s=!0)},o(t){Q(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}function bt(t,e,s){let o;const l=["class"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(1,c=d(e,l)),"class"in t&&s(2,i=t.class),"$$scope"in t&&s(3,u=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&s(0,o=nt(i,"card-text"))},[o,c,i,u,r]}class wt extends Z{constructor(t){super(),Y(this,t,bt,yt,c,{class:2})}}function vt(t){let e,s;const o=t[4].default,l=r(o,t,t[3],null);let c=[t[1],{class:t[0]}],u={};for(let t=0;t<c.length;t+=1)u=n(u,c[t]);return{c(){e=x("h5"),l&&l.c(),k(e,u)},m(t,n){m(t,e,n),l&&l.m(e,null),s=!0},p(t,[n]){l&&l.p&&(!s||8&n)&&$(l,o,t,t[3],s?i(o,t[3],n,null):a(t[3]),null),k(e,u=R(c,[2&n&&t[1],(!s||1&n)&&{class:t[0]}]))},i(t){s||(K(l,t),s=!0)},o(t){Q(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}function _t(t,e,s){let o;const l=["class"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(1,c=d(e,l)),"class"in t&&s(2,i=t.class),"$$scope"in t&&s(3,u=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&s(0,o=nt(i,"card-title"))},[o,c,i,u,r]}class kt extends Z{constructor(t){super(),Y(this,t,_t,vt,c,{class:2})}}function jt(t){let e,s;const o=t[10].default,l=r(o,t,t[9],null);let c=[t[1],{class:t[0]}],u={};for(let t=0;t<c.length;t+=1)u=n(u,c[t]);return{c(){e=x("div"),l&&l.c(),k(e,u)},m(t,n){m(t,e,n),l&&l.m(e,null),s=!0},p(t,[n]){l&&l.p&&(!s||512&n)&&$(l,o,t,t[9],s?i(o,t[9],n,null):a(t[9]),null),k(e,u=R(c,[2&n&&t[1],(!s||1&n)&&{class:t[0]}]))},i(t){s||(K(l,t),s=!0)},o(t){Q(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}function Et(t,e,s){let o;const l=["class","sm","md","lg","xl","xxl","fluid"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e,{sm:$}=e,{md:a}=e,{lg:p}=e,{xl:m}=e,{xxl:g}=e,{fluid:h=!1}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(1,c=d(e,l)),"class"in t&&s(2,i=t.class),"sm"in t&&s(3,$=t.sm),"md"in t&&s(4,a=t.md),"lg"in t&&s(5,p=t.lg),"xl"in t&&s(6,m=t.xl),"xxl"in t&&s(7,g=t.xxl),"fluid"in t&&s(8,h=t.fluid),"$$scope"in t&&s(9,u=t.$$scope)},t.$$.update=()=>{508&t.$$.dirty&&s(0,o=nt(i,{"container-sm":$,"container-md":a,"container-lg":p,"container-xl":m,"container-xxl":g,"container-fluid":h,container:!($||a||p||m||g||h)}))},[o,c,i,$,a,p,m,g,h,u,r]}class At extends Z{constructor(t){super(),Y(this,t,Et,jt,c,{class:2,sm:3,md:4,lg:5,xl:6,xxl:7,fluid:8})}}function Nt(t){let e,s;const o=t[7].default,l=r(o,t,t[6],null);let c=[t[1],{class:t[0]}],u={};for(let t=0;t<c.length;t+=1)u=n(u,c[t]);return{c(){e=x("div"),l&&l.c(),k(e,u)},m(t,n){m(t,e,n),l&&l.m(e,null),s=!0},p(t,[n]){l&&l.p&&(!s||64&n)&&$(l,o,t,t[6],s?i(o,t[6],n,null):a(t[6]),null),k(e,u=R(c,[2&n&&t[1],(!s||1&n)&&{class:t[0]}]))},i(t){s||(K(l,t),s=!0)},o(t){Q(l,t),s=!1},d(t){t&&g(e),l&&l.d(t)}}}function Ot(t,e,s){let o;const l=["class","noGutters","form","cols"];let c=d(e,l),{$$slots:r={},$$scope:u}=e,{class:i=""}=e,{noGutters:$=!1}=e,{form:a=!1}=e,{cols:p=0}=e;return t.$$set=t=>{e=n(n({},e),f(t)),s(1,c=d(e,l)),"class"in t&&s(2,i=t.class),"noGutters"in t&&s(3,$=t.noGutters),"form"in t&&s(4,a=t.form),"cols"in t&&s(5,p=t.cols),"$$scope"in t&&s(6,u=t.$$scope)},t.$$.update=()=>{60&t.$$.dirty&&s(0,o=nt(i,$?"gx-0":null,a?"form-row":"row",...function(t){const n=parseInt(t);if(isNaN(n)){if("object"==typeof t)return["xs","sm","md","lg","xl"].map((n=>{const e="xs"===n?"-":`-${n}-`,s=t[n];return"number"==typeof s&&s>0?`row-cols${e}${s}`:null})).filter((t=>!!t))}else if(n>0)return[`row-cols-${n}`];return[]}(p)))},[o,c,i,$,a,p,u,r]}class Gt extends Z{constructor(t){super(),Y(this,t,Ot,Nt,c,{class:2,noGutters:3,form:4,cols:5})}}function Tt(t,n,e){const s=t.slice();return s[1]=n[e],s}function Bt(t,n,e){const s=t.slice();return s[4]=n[e],s}function Ct(t){let n,e,s;return{c(){n=x("h1"),n.textContent="Obědy Holice",e=b(),s=x("h2"),s.textContent="Agregátor restauračních menu ve městě Holice",_(n,"class","svelte-1g1tp5k"),_(s,"class","svelte-1g1tp5k")},m(t,o){m(t,n,o),m(t,e,o),m(t,s,o)},d(t){t&&g(n),t&&g(e),t&&g(s)}}}function It(t){let n,e=t[1].name+"";return{c(){n=y(e)},m(t,e){m(t,n,e)},p(t,s){1&s&&e!==(e=t[1].name+"")&&j(n,e)},d(t){t&&g(n)}}}function Mt(t){let n,e;return n=new kt({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){U(n.$$.fragment)},m(t,s){V(n,t,s),e=!0},p(t,e){const s={};129&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function St(t){let n,e=t[1].subTitle+"";return{c(){n=y(e)},m(t,e){m(t,n,e)},p(t,s){1&s&&e!==(e=t[1].subTitle+"")&&j(n,e)},d(t){t&&g(n)}}}function Ht(t){let n,e,s=t[4]+"";return{c(){n=x("li"),e=y(s)},m(t,s){m(t,n,s),p(n,e)},p(t,n){1&n&&s!==(s=t[4]+"")&&j(e,s)},d(t){t&&g(n)}}}function Lt(t){let n,e=t[1].menuItems,s=[];for(let n=0;n<e.length;n+=1)s[n]=Ht(Bt(t,e,n));return{c(){n=x("ul");for(let t=0;t<s.length;t+=1)s[t].c()},m(t,e){m(t,n,e);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,o){if(1&o){let l;for(e=t[1].menuItems,l=0;l<e.length;l+=1){const c=Bt(t,e,l);s[l]?s[l].p(c,o):(s[l]=Ht(c),s[l].c(),s[l].m(n,null))}for(;l<s.length;l+=1)s[l].d(1);s.length=e.length}},d(t){t&&g(n),h(s,t)}}}function Pt(t){let n,e,s,o,l,c,r,u;return n=new xt({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),s=new wt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){U(n.$$.fragment),e=b(),U(s.$$.fragment),o=b(),l=x("a"),c=y("Menu"),_(l,"class","btn btn-light"),_(l,"href",r=t[1].website),_(l,"role","button"),_(l,"target","_blank")},m(t,r){V(n,t,r),m(t,e,r),V(s,t,r),m(t,o,r),m(t,l,r),p(l,c),u=!0},p(t,e){const o={};129&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const c={};129&e&&(c.$$scope={dirty:e,ctx:t}),s.$set(c),(!u||1&e&&r!==(r=t[1].website))&&_(l,"href",r)},i(t){u||(K(n.$$.fragment,t),K(s.$$.fragment,t),u=!0)},o(t){Q(n.$$.fragment,t),Q(s.$$.fragment,t),u=!1},d(t){W(n,t),t&&g(e),W(s,t),t&&g(o),t&&g(l)}}}function qt(t){let n,e,s,o,l;return n=new mt({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),s=new rt({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){U(n.$$.fragment),e=b(),U(s.$$.fragment),o=b()},m(t,c){V(n,t,c),m(t,e,c),V(s,t,c),m(t,o,c),l=!0},p(t,e){const o={};129&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const l={};129&e&&(l.$$scope={dirty:e,ctx:t}),s.$set(l)},i(t){l||(K(n.$$.fragment,t),K(s.$$.fragment,t),l=!0)},o(t){Q(n.$$.fragment,t),Q(s.$$.fragment,t),l=!1},d(t){W(n,t),t&&g(e),W(s,t),t&&g(o)}}}function zt(t){let n,e;return n=new ot({props:{class:"mb-3",$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){U(n.$$.fragment)},m(t,s){V(n,t,s),e=!0},p(t,e){const s={};129&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function Dt(t){let n,e,s=t[0],o=[];for(let n=0;n<s.length;n+=1)o[n]=zt(Tt(t,s,n));const l=t=>Q(o[t],1,1,(()=>{o[t]=null}));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();n=w()},m(t,s){for(let n=0;n<o.length;n+=1)o[n].m(t,s);m(t,n,s),e=!0},p(t,e){if(1&e){let c;for(s=t[0],c=0;c<s.length;c+=1){const l=Tt(t,s,c);o[c]?(o[c].p(l,e),K(o[c],1)):(o[c]=zt(l),o[c].c(),K(o[c],1),o[c].m(n.parentNode,n))}for(F(),c=s.length;c<o.length;c+=1)l(c);J()}},i(t){if(!e){for(let t=0;t<s.length;t+=1)K(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)Q(o[t]);e=!1},d(t){h(o,t),t&&g(n)}}}function Ft(t){let n,e;return n=new $t({props:{class:"mt-4",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){U(n.$$.fragment)},m(t,s){V(n,t,s),e=!0},p(t,e){const s={};129&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){Q(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function Jt(t){let n,e,s,o;return n=new Gt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),s=new Gt({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){U(n.$$.fragment),e=b(),U(s.$$.fragment)},m(t,l){V(n,t,l),m(t,e,l),V(s,t,l),o=!0},p(t,e){const o={};128&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const l={};129&e&&(l.$$scope={dirty:e,ctx:t}),s.$set(l)},i(t){o||(K(n.$$.fragment,t),K(s.$$.fragment,t),o=!0)},o(t){Q(n.$$.fragment,t),Q(s.$$.fragment,t),o=!1},d(t){W(n,t),t&&g(e),W(s,t)}}}function Kt(t){let n,e,s;return e=new At({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){n=x("main"),U(e.$$.fragment)},m(t,o){m(t,n,o),V(e,n,null),s=!0},p(t,[n]){const s={};129&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(K(e.$$.fragment,t),s=!0)},o(t){Q(e.$$.fragment,t),s=!1},d(t){t&&g(n),W(e)}}}function Qt(t,n,e){let{restaurants:s=[]}=n;return N((async()=>{e(0,s=await async function(){return(await fetch("http://localhost:7071/api/restaurants")).json()}()),console.log(s)})),t.$$set=t=>{"restaurants"in t&&e(0,s=t.restaurants)},[s]}return new class extends Z{constructor(t){super(),Y(this,t,Qt,Kt,c,{restaurants:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
