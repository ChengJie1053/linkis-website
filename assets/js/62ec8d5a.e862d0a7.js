"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[81236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={title:"Exception Catch Specification",sidebar_position:3},a=void 0,c={unversionedId:"development/development-specification/exception-catch",id:"version-1.3.1/development/development-specification/exception-catch",title:"Exception Catch Specification",description:"1. [Mandatory] For the exception of each small module, a special exception class should be defined to facilitate the subsequent generation of error codes for users. It is not allowed to throw any RuntimeException or directly throw Exception.",source:"@site/versioned_docs/version-1.3.1/development/development-specification/exception-catch.md",sourceDirName:"development/development-specification",slug:"/development/development-specification/exception-catch",permalink:"/docs/latest/development/development-specification/exception-catch",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/development/development-specification/exception-catch.md",tags:[],version:"1.3.1",sidebarPosition:3,frontMatter:{title:"Exception Catch Specification",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Log Specification",permalink:"/docs/latest/development/development-specification/log"},next:{title:"API Specification",permalink:"/docs/latest/development/development-specification/api"}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Mandatory"),"]"," For the exception of each small module, a special exception class should be defined to facilitate the subsequent generation of error codes for users. It is not allowed to throw any RuntimeException or directly throw Exception."),(0,r.kt)("li",{parentName:"ol"},"Try not to try-catch a large section of code. This is irresponsible. Please distinguish between stable code and non-stable code when catching. Stable code refers to code that will not go wrong anyway. For the catch of unstable code, try to distinguish the exception types as much as possible, and then do the corresponding exception handling."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Mandatory"),"]"," The purpose of catching an exception is to handle it. Don't throw it away without handling it. If you don't want to handle it, please throw the exception to its caller. Note: Do not use e.printStackTrace() under any circumstances! The outermost business users must deal with exceptions and turn them into content that users can understand."),(0,r.kt)("li",{parentName:"ol"},"The finally block must close the resource object and the stream object, and try-catch if there is an exception."),(0,r.kt)("li",{parentName:"ol"},"[",(0,r.kt)("strong",{parentName:"li"},"Mandatory"),"]"," Prevent NullPointerException. The return value of the method can be null, and it is not mandatory to return an empty collection, or an empty object, etc., but a comment must be added to fully explain under what circumstances the null value will be returned. RPC and SpringCloud Feign calls all require non-empty judgments.")))}d.isMDXComponent=!0}}]);