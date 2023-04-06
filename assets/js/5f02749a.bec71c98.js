"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[65410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={title:"Concurrent Specification",sidebar_position:5},a=void 0,c={unversionedId:"development/development-specification/concurrent",id:"development/development-specification/concurrent",title:"Concurrent Specification",description:"1. [Compulsory] Make sure getting a singleton object to be thread-safe. Operating inside singletons should also be kept thread-safe.",source:"@site/docs/development/development-specification/concurrent.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/concurrent",permalink:"/docs/1.4.0/development/development-specification/concurrent",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/development/development-specification/concurrent.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Concurrent Specification",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"API Specification",permalink:"/docs/1.4.0/development/development-specification/api"},next:{title:"Path Usage Specification",permalink:"/docs/1.4.0/development/development-specification/path-usage"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Compulsory"),"]"," Make sure getting a singleton object to be thread-safe. Operating inside singletons should also be kept thread-safe."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Compulsory"),"]"," Thread resources must be provided through the thread pool, and it is not allowed to explicitly create threads in the application."),(0,r.kt)("li",{parentName:"ol"},"SimpleDateFormat is a thread-unsafe class. It is recommended to use the DataUtils utility class."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Compulsory"),"]"," At high concurrency, synchronous calls should consider the performance cost of locking. If you can use lockless data structures, don't use locks. If you can lock blocks, don't lock the whole method body. If you can use object locks, don't use class locks."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Compulsory"),"]"," Use ThreadLocal as less as possible. Everytime using ThreadLocal and it holds an object which needs to be closed, remember to close it to release.")))}d.isMDXComponent=!0}}]);