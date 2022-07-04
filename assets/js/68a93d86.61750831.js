"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[21602],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),v=l(t),d=i,f=v["".concat(s,".").concat(d)]||v[d]||p[d]||c;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=v;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},45618:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return v}});var n=t(87462),i=t(63366),c=(t(67294),t(3905)),o=["components"],a={title:"Overview",sidebar_position:0},s=void 0,l={unversionedId:"architecture/overview",id:"version-1.0.3/architecture/overview",isDocsHomePage:!1,title:"Overview",description:"Linkis 1.0 divides all microservices into three categories: public enhancement services, computing governance services, and microservice governance services. The following figure shows the architecture of Linkis 1.0.",source:"@site/versioned_docs/version-1.0.3/architecture/overview.md",sourceDirName:"architecture",slug:"/architecture/overview",permalink:"/docs/1.0.3/architecture/overview",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.3/architecture/overview.md",tags:[],version:"1.0.3",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Task Submission and Execution Rest Api",permalink:"/docs/1.0.3/api/linkis_task_operator"},next:{title:"Difference Between 1.0 And 0.x",permalink:"/docs/1.0.3/architecture/difference_between_1.0_and_0.x"}},u=[],p={toc:u};function v(e){var r=e.components,a=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Linkis 1.0 divides all microservices into three categories: public enhancement services, computing governance services, and microservice governance services. The following figure shows the architecture of Linkis 1.0."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Linkis1.0 Architecture Figure",src:t(14359).Z})),(0,c.kt)("p",null,"The specific responsibilities of each category are as follows:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Public enhancement services are the material library services, context services, data source services and public services that Linkis 0.X has provided."),(0,c.kt)("li",{parentName:"ol"},"The microservice governance services are Spring Cloud Gateway, Eureka and Open Feign already provided by Linkis 0.X, and Linkis 1.0 will also provide support for Nacos"),(0,c.kt)("li",{parentName:"ol"},"Computing governance services are the core focus of Linkis 1.0, from submission, preparation to execution, overall three stages to comprehensively upgrade Linkis' ability to perform control over user tasks.")),(0,c.kt)("p",null,"The following is a directory listing of Linkis1.0 architecture documents:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"The characteristics of Linkis1.0's architecture , please read ",(0,c.kt)("a",{parentName:"li",href:"/docs/1.0.3/architecture/difference_between_1.0_and_0.x"},"The difference between Linkis1.0 and Linkis0.x"),"."),(0,c.kt)("li",{parentName:"ol"},"Linkis 1.0 public enhancement service related documents, please read ",(0,c.kt)("a",{parentName:"li",href:"/docs/1.0.3/architecture/public_enhancement_services/overview"},"Public Enhancement Service"),"."),(0,c.kt)("li",{parentName:"ol"},"Linkis 1.0 microservice governance related documents, please read ",(0,c.kt)("a",{parentName:"li",href:"/docs/1.0.3/architecture/microservice_governance_services/overview"},"Microservice Governance"),"."),(0,c.kt)("li",{parentName:"ol"},"Linkis 1.0 computing governance service related documents, please read ",(0,c.kt)("a",{parentName:"li",href:"/docs/1.0.3/architecture/computation_governance_services/overview"},"Computation Governance Service"),".")))}v.isMDXComponent=!0},14359:function(e,r,t){r.Z=t.p+"assets/images/Linkis1.0-architecture-e11ce51d9deb9c92a9e813e439c530d4.png"}}]);