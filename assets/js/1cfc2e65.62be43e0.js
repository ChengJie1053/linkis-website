"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[89140],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),l=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=l(e.components);return i.createElement(s.Provider,{value:r},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||v[d]||a;return t?i.createElement(m,o(o({ref:r},p),{},{components:t})):i.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52888:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(87462),n=(t(67294),t(3905));const a={title:"Overview",sidebar_position:0},o=void 0,c={unversionedId:"architecture/overview",id:"version-1.3.2/architecture/overview",title:"Overview",description:"Linkis 1.0 divides all microservices into three categories: public enhancement services, computing governance services, and microservice governance services. The following figure shows the architecture of Linkis 1.0.",source:"@site/versioned_docs/version-1.3.2/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/docs/latest/architecture/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/architecture/overview.md",tags:[],version:"1.3.2",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Task Management",permalink:"/docs/latest/api/http/linkis-cg-entrance-api/task-management-api"},next:{title:"Task Flow Description",permalink:"/docs/latest/architecture/task-flow"}},s={},l=[],p={toc:l},u="wrapper";function v(e){let{components:r,...a}=e;return(0,n.kt)(u,(0,i.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Linkis 1.0 divides all microservices into three categories: public enhancement services, computing governance services, and microservice governance services. The following figure shows the architecture of Linkis 1.0."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Linkis1.0 Architecture Figure",src:t(62557).Z,width:"2069",height:"1606"})),(0,n.kt)("p",null,"The specific responsibilities of each category are as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Public enhancement services are the material library services, context services, data source services and public services that Linkis 0.X has provided."),(0,n.kt)("li",{parentName:"ol"},"The microservice governance services are Spring Cloud Gateway, Eureka and Open Feign already provided by Linkis 0.X, and Linkis 1.0 will also provide support for Nacos"),(0,n.kt)("li",{parentName:"ol"},"Computing governance services are the core focus of Linkis 1.0, from submission, preparation to execution, overall three stages to comprehensively upgrade Linkis' ability to perform control over user tasks.")),(0,n.kt)("p",null,"The following is a directory listing of Linkis1.0 architecture documents:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For documents related to Linkis 1.0 public enhancement services, please read ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/architecture/feature/public-enhancement-services/overview"},"Public Enhancement Services"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For documents related to Linkis1.0 microservice governance, please read ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/architecture/service-architecture/overview"},"Microservice Governance"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"For related documentation on computing governance services provided by Linkis1.0, please read ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/architecture/feature/computation-governance-services/overview"},"Computation Governance Services"),"."))))}v.isMDXComponent=!0},62557:(e,r,t)=>{t.d(r,{Z:()=>i});const i=t.p+"assets/images/Linkis1.0-architecture-e11ce51d9deb9c92a9e813e439c530d4.png"}}]);