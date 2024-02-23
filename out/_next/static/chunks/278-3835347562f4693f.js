"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{703:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(7447),o=r.n(n)},8792:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(5250),o=r.n(n)},6406:function(e,t,r){function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2139),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5250:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return O}});let n=r(6921),o=r(3827),l=n._(r(4090)),u=r(4542),i=r(7434),a=r(1030),c=r(6874),f=r(2956),s=r(6993),d=r(8599),p=r(5291),b=r(6406),y=r(5786),v=r(1414),g=new Set;function h(e,t,r,n,o,l){if(l||(0,i.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(o))return;g.add(o)}Promise.resolve(l?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let O=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:g,children:O,prefetch:j=null,passHref:P,replace:_,shallow:w,scroll:C,locale:k,onClick:E,onMouseEnter:M,onTouchStart:x,legacyBehavior:S=!1,...L}=e;r=O,S&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let I=l.default.useContext(s.RouterContext),N=l.default.useContext(d.AppRouterContext),R=null!=I?I:N,T=!I,D=!1!==j,z=null===j?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:U,as:A}=l.default.useMemo(()=>{if(!I){let e=m(a);return{href:e,as:g?m(g):e}}let[e,t]=(0,u.resolveHref)(I,a,!0);return{href:e,as:g?(0,u.resolveHref)(I,g):t||e}},[I,a,g]),K=l.default.useRef(U),H=l.default.useRef(A);S&&(n=l.default.Children.only(r));let q=S?n&&"object"==typeof n&&n.ref:t,[B,F,G]=(0,p.useIntersection)({rootMargin:"200px"}),V=l.default.useCallback(e=>{(H.current!==A||K.current!==U)&&(G(),H.current=A,K.current=U),B(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[A,q,U,G,B]);l.default.useEffect(()=>{R&&F&&D&&h(R,U,A,{locale:k},{kind:z},T)},[A,U,F,k,D,null==I?void 0:I.locale,R,T,z]);let W={ref:V,onClick(e){S||"function"!=typeof E||E(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,o,u,a,c,f){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:c,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};f?l.default.startTransition(d):d()}(e,R,U,A,_,w,C,k,T)},onMouseEnter(e){S||"function"!=typeof M||M(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(D||!T)&&h(R,U,A,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:z},T)},onTouchStart(e){S||"function"!=typeof x||x(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(D||!T)&&h(R,U,A,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:z},T)}};if((0,c.isAbsoluteUrl)(A))W.href=A;else if(!S||P||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,b.getDomainLocale)(A,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);W.href=t||(0,y.addBasePath)((0,f.addLocale)(A,e,null==I?void 0:I.defaultLocale))}return S?l.default.cloneElement(n,W):(0,o.jsx)("a",{...L,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5291:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(4090),o=r(2185),l="function"==typeof IntersectionObserver,u=new Map,i=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,c=a||!l,[f,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(c||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7447:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return i},default:function(){return a}});let n=r(6921),o=r(8630),l=r(1749),u=n._(r(536)),i=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=l.Image},158:function(e,t,r){r.d(t,{w_:function(){return f}});var n=r(4090),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),u=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return t=>n.createElement(s,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function s(e){var t=t=>{var r,{attr:o,size:l,title:a}=e,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>t(e)):t(o)}}}]);