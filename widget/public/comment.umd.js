!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function l(){return f(" ")}function p(){return f("")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let $;function y(t){$=t}function b(){if(!$)throw new Error("Function called outside component initialization");return $}function v(t,e){b().$$.context.set(t,e)}function x(t){return b().$$.context.get(t)}const I=[],w=[],k=[],_=[],S=Promise.resolve();let A=!1;function C(t){k.push(t)}let E=!1;const j=new Set;function N(){if(!E){E=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];y(e),L(e.$$)}for(y(null),I.length=0;w.length;)w.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];j.has(e)||(j.add(e),e())}k.length=0}while(I.length);for(;_.length;)_.pop()();A=!1,E=!1,j.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const O=new Set;let M;function P(){M={r:0,c:[],p:M}}function R(){M.r||o(M.c),M=M.p}function T(t,e){t&&t.i&&(O.delete(t),t.i(e))}function q(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),M.c.push((()=>{O.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function z(t,e){q(t,1,1,(()=>{e.delete(t.key)}))}function U(t,e,n,o,r,a,c,i,u,s,f,l){let p=t.length,d=a.length,m=p;const h={};for(;m--;)h[t[m].key]=m;const g=[],$=new Map,y=new Map;for(m=d;m--;){const t=l(r,a,m),i=n(t);let u=c.get(i);u?o&&u.p(t,e):(u=s(i,t),u.c()),$.set(i,g[m]=u),i in h&&y.set(i,Math.abs(m-h[i]))}const b=new Set,v=new Set;function x(t){T(t,1),t.m(i,f),c.set(t.key,t),f=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],o=e.key,r=n.key;e===n?(f=e.first,p--,d--):$.has(r)?!c.has(o)||b.has(o)?x(e):v.has(r)?p--:y.get(o)>y.get(r)?(v.add(o),x(e)):(b.add(r),p--):(u(n,c),p--)}for(;p--;){const e=t[p];$.has(e.key)||u(e,c)}for(;d;)x(g[d-1]);return g}function J(t){t&&t.c()}function B(t,n,a,c){const{fragment:i,on_mount:u,on_destroy:s,after_update:f}=t.$$;i&&i.m(n,a),c||C((()=>{const n=u.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(C)}function F(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(I.push(t),A||(A=!0,S.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(e,r,a,c,i,s,f=[-1]){const l=$;y(e);const p=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:r.context||[]),callbacks:n(),dirty:f,skip_bound:!1};let d=!1;if(p.ctx=a?a(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&H(e,t)),n})):[],p.update(),d=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=(m=r.target,Array.from(m.childNodes));p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();r.intro&&T(e.$$.fragment),B(e,r.target,r.anchor,r.customElement),N()}var m;y(l)}class G{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var K=function t(e){function n(t,e,o){var r,a={};if(Array.isArray(t))return t.concat(e);for(r in t)a[o?r.toLowerCase():r]=t[r];for(r in e){var c=o?r.toLowerCase():r,i=e[r];a[c]=c in a&&"object"==typeof i?n(a[c],i,"headers"===c):i}return a}function o(t,o,r,a){"string"!=typeof t&&(t=(o=t).url);var c={config:o},i=n(e,o),u={},s=a||i.data;(i.transformRequest||[]).map((function(t){s=t(s,i.headers)||s})),s&&"object"==typeof s&&"function"!=typeof s.append&&(s=JSON.stringify(s),u["content-type"]="application/json");var f="undefined"!=typeof document&&document.cookie.match(RegExp("(^|; )"+i.xsrfCookieName+"=([^;]*)"));if(f&&(u[i.xsrfHeaderName]=f[2]),i.auth&&(u.authorization=i.auth),i.baseURL&&(t=t.replace(/^(?!.*\/\/)\/?(.*)$/,i.baseURL+"/$1")),i.params){var l=~t.indexOf("?")?"&":"?";t+=l+(i.paramsSerializer?i.paramsSerializer(i.params):new URLSearchParams(i.params))}return(i.fetch||fetch)(t,{method:r||i.method,body:s,headers:n(i.headers,u,!0),credentials:i.withCredentials?"include":"same-origin"}).then((function(t){for(var e in t)"function"!=typeof t[e]&&(c[e]=t[e]);var n=i.validateStatus?i.validateStatus(t.status):t.ok;return"stream"==i.responseType?(c.data=t.body,c):t[i.responseType||"text"]().then((function(t){c.data=t,c.data=JSON.parse(t)})).catch(Object).then((function(){return n?c:Promise.reject(c)}))}))}return e=e||{},o.request=o,o.get=function(t,e){return o(t,e,"get")},o.delete=function(t,e){return o(t,e,"delete")},o.head=function(t,e){return o(t,e,"head")},o.options=function(t,e){return o(t,e,"options")},o.post=function(t,e,n){return o(t,n,"post",e)},o.put=function(t,e,n){return o(t,n,"put",e)},o.patch=function(t,e,n){return o(t,n,"patch",e)},o.all=Promise.all.bind(Promise),o.spread=function(t){return function(e){return t.apply(this,e)}},o.CancelToken="function"==typeof AbortController?AbortController:Object,o.defaults=e,o.create=t,o}();function Q(e){let n,r,a,f,p,h,$,y,b,v;return{c(){n=s("div"),r=s("input"),a=l(),f=s("input"),p=l(),h=s("textarea"),$=l(),y=s("button"),y.textContent="comment",m(r,"type","text"),m(r,"placeholder","nickname"),m(f,"type","text"),m(f,"placeholder","email")},m(t,o){i(t,n,o),c(n,r),g(r,e[1]),c(n,a),c(n,f),g(f,e[2]),c(n,p),c(n,h),g(h,e[0]),c(n,$),c(n,y),b||(v=[d(r,"input",e[5]),d(f,"input",e[6]),d(h,"input",e[7]),d(y,"click",e[3])],b=!0)},p(t,[e]){2&e&&r.value!==t[1]&&g(r,t[1]),4&e&&f.value!==t[2]&&g(f,t[2]),1&e&&g(h,t[0])},i:t,o:t,d(t){t&&u(n),b=!1,o(v)}}}function V(t,e,n){let{parentId:o}=e,r="",a="",c="";const i=x("api"),{appId:u,pageId:s}=x("info");return t.$$set=t=>{"parentId"in t&&n(4,o=t.parentId)},[r,a,c,async function(t){await i.post("/api/open/comments",{appId:u,pageId:s,content:r,nickname:a,email:c,parentId:o})},o,function(){a=this.value,n(1,a)},function(){c=this.value,n(2,c)},function(){r=this.value,n(0,r)}]}class W extends G{constructor(t){super(),D(this,t,V,Q,a,{parentId:4})}}function X(t,e,n){const o=t.slice();return o[3]=e[n],o}function Y(t){let e,n,o=[],r=new Map,a=t[0].replies;const c=t=>t[3].id;for(let i=0;i<a.length;i+=1){let e=X(t,a,i),n=c(e);r.set(n,o[i]=Z(n,e))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=p()},m(t,r){for(let e=0;e<o.length;e+=1)o[e].m(t,r);i(t,e,r),n=!0},p(t,n){1&n&&(a=t[0].replies,P(),o=U(o,n,c,1,t,a,r,e.parentNode,z,Z,e,X),R())},i(t){if(!n){for(let t=0;t<a.length;t+=1)T(o[t]);n=!0}},o(t){for(let e=0;e<o.length;e+=1)q(o[e]);n=!1},d(t){for(let e=0;e<o.length;e+=1)o[e].d(t);t&&u(e)}}}function Z(t,e){let n,o,r;return o=new nt({props:{comment:e[3]}}),{key:t,first:null,c(){n=p(),J(o.$$.fragment),this.first=n},m(t,e){i(t,n,e),B(o,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.comment=e[3]),o.$set(r)},i(t){r||(T(o.$$.fragment,t),r=!0)},o(t){q(o.$$.fragment,t),r=!1},d(t){t&&u(n),F(o,t)}}}function tt(t){let e,n,o,r,a,p,d,m,g,$,y=t[0].content+"",b=t[0].createdAt+"";m=new W({props:{parentId:t[0].id}});let v=t[0].replies.length>0&&Y(t);return{c(){var t,c,i;e=s("div"),n=s("div"),o=f(y),r=l(),a=s("div"),p=f(b),d=l(),J(m.$$.fragment),g=l(),v&&v.c(),t="padding-left",c="1rem",e.style.setProperty(t,c,i?"important":"")},m(t,u){i(t,e,u),c(e,n),c(n,o),c(e,r),c(e,a),c(a,p),c(e,d),B(m,e,null),c(e,g),v&&v.m(e,null),$=!0},p(t,[n]){(!$||1&n)&&y!==(y=t[0].content+"")&&h(o,y),(!$||1&n)&&b!==(b=t[0].createdAt+"")&&h(p,b);const r={};1&n&&(r.parentId=t[0].id),m.$set(r),t[0].replies.length>0?v?(v.p(t,n),1&n&&T(v,1)):(v=Y(t),v.c(),T(v,1),v.m(e,null)):v&&(P(),q(v,1,1,(()=>{v=null})),R())},i(t){$||(T(m.$$.fragment,t),T(v),$=!0)},o(t){q(m.$$.fragment,t),q(v),$=!1},d(t){t&&u(e),F(m),v&&v.d()}}}function et(t,e,n){let{comment:o}=e;return x("info"),t.$$set=t=>{"comment"in t&&n(0,o=t.comment)},[o]}class nt extends G{constructor(t){super(),D(this,t,et,tt,a,{comment:0})}}function ot(t,e,n){const o=t.slice();return o[5]=e[n],o}function rt(t){let e;return{c(){e=f("No comment")},m(t,n){i(t,e,n)},d(t){t&&u(e)}}}function at(t,e){let n,o,r;return o=new nt({props:{comment:e[5]}}),{key:t,first:null,c(){n=p(),J(o.$$.fragment),this.first=n},m(t,e){i(t,n,e),B(o,t,e),r=!0},p(t,n){e=t;const r={};1&n&&(r.comment=e[5]),o.$set(r)},i(t){r||(T(o.$$.fragment,t),r=!0)},o(t){q(o.$$.fragment,t),r=!1},d(t){t&&u(n),F(o,t)}}}function ct(t){let e,n,o,r,a,f,p=[],d=new Map,m=0===t[0].length&&rt();o=new W({});let h=t[0];const g=t=>t[5].id;for(let c=0;c<h.length;c+=1){let e=ot(t,h,c),n=g(e);d.set(n,p[c]=at(n,e))}return{c(){e=s("div"),m&&m.c(),n=l(),J(o.$$.fragment),r=l(),a=s("div");for(let t=0;t<p.length;t+=1)p[t].c()},m(t,u){i(t,e,u),m&&m.m(e,null),c(e,n),B(o,e,null),c(e,r),c(e,a);for(let e=0;e<p.length;e+=1)p[e].m(a,null);f=!0},p(t,[o]){0===t[0].length?m||(m=rt(),m.c(),m.m(e,n)):m&&(m.d(1),m=null),1&o&&(h=t[0],P(),p=U(p,o,g,1,t,h,d,a,z,at,null,ot),R())},i(t){if(!f){T(o.$$.fragment,t);for(let t=0;t<h.length;t+=1)T(p[t]);f=!0}},o(t){q(o.$$.fragment,t);for(let e=0;e<p.length;e+=1)q(p[e]);f=!1},d(t){t&&u(e),m&&m.d(),F(o);for(let e=0;e<p.length;e+=1)p[e].d()}}}function it(t,e,n){let{pageId:o}=e,{appId:r}=e,{comments:a=[]}=e;const c=K.create({baseURL:"http://localhost:3000"});var i;return v("api",c),v("info",{appId:r,pageId:o}),i=()=>{!async function(){const t=await c.get("/api/open/comments",{params:{appId:r,pageId:o}});n(0,a=t.data.data)}()},b().$$.on_mount.push(i),t.$$set=t=>{"pageId"in t&&n(1,o=t.pageId),"appId"in t&&n(2,r=t.appId),"comments"in t&&n(0,a=t.comments)},[a,o,r]}class ut extends G{constructor(t){super(),D(this,t,it,ct,a,{pageId:1,appId:2,comments:0})}}const st=document.querySelector("#comment");if(st){const{appId:t,pageId:e}=st.dataset;new ut({target:st,props:{appId:t,pageId:e}})}}));
