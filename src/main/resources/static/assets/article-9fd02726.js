import{an as O,ae as h,ao as $}from"./el-button-e63b366d.js";import{r as o,b as N}from"./request-d319ce4c.js";var R=/\s/;function B(e){for(var t=e.length;t--&&R.test(e.charAt(t)););return t}var U=/^\s+/;function D(e){return e&&e.slice(0,B(e)+1).replace(U,"")}var E=0/0,F=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,j=/^0o[0-7]+$/i,q=parseInt;function k(e){if(typeof e=="number")return e;if(O(e))return E;if(h(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=h(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=D(e);var i=_.test(e);return i||j.test(e)?q(e.slice(2),i?2:8):F.test(e)?E:+e}var H=function(){return $.Date.now()};const x=H;var P="Expected a function",X=Math.max,w=Math.min;function J(e,t,i){var c,u,g,f,n,s,d=0,I=!1,m=!1,p=!0;if(typeof e!="function")throw new TypeError(P);t=k(t)||0,h(i)&&(I=!!i.leading,m="maxWait"in i,g=m?X(k(i.maxWait)||0,t):g,p="trailing"in i?!!i.trailing:p);function T(r){var a=c,l=u;return c=u=void 0,d=r,f=e.apply(l,a),f}function L(r){return d=r,n=setTimeout(v,t),I?T(r):f}function W(r){var a=r-s,l=r-d,A=t-a;return m?w(A,g-l):A}function S(r){var a=r-s,l=r-d;return s===void 0||a>=t||a<0||m&&l>=g}function v(){var r=x();if(S(r))return y(r);n=setTimeout(v,W(r))}function y(r){return n=void 0,p&&c?T(r):(c=u=void 0,f)}function C(){n!==void 0&&clearTimeout(n),d=0,c=s=u=n=void 0}function M(){return n===void 0?f:y(x())}function b(){var r=x(),a=S(r);if(c=arguments,u=this,s=r,a){if(n===void 0)return L(s);if(m)return clearTimeout(n),n=setTimeout(v,t),T(s)}return n===void 0&&(n=setTimeout(v,t)),f}return b.cancel=C,b.flush=M,b}const K=e=>o.put("/server/article",e),Q=e=>o.get("/server/articles",{params:e}),V=e=>o.get(`/server/article?id=${e}`),Y=e=>o.get(N+"/upload/"+e,{responseType:"blob"}),Z=e=>o.get("/server/articles/user",{params:e}),ee=e=>o.delete("/server/article",{params:{article_id:e}});export{Q as a,J as b,Y as c,ee as d,V as e,Z as g,K as p};