"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[36298],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65196:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(87462),i=r(63366),c=(r(67294),r(3905)),o=["components"],a={title:"RPC Module",sidebar_position:2},s=void 0,u={unversionedId:"architecture/commons/rpc",id:"architecture/commons/rpc",isDocsHomePage:!1,title:"RPC Module",description:"1 Overview",source:"@site/docs/architecture/commons/rpc.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/rpc",permalink:"/docs/1.1.3/architecture/commons/rpc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/commons/rpc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"RPC Module",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Custom Variable Design",permalink:"/docs/1.1.3/architecture/commons/variable"},next:{title:"Overview",permalink:"/docs/1.1.3/architecture/computation_governance_services/overview"}},l=[{value:"1 Overview",id:"1-overview",children:[]},{value:"2. Architecture description",id:"2-architecture-description",children:[]},{value:"2.1. Architecture design diagram",id:"21-architecture-design-diagram",children:[]},{value:"2.2. Module description",id:"22-module-description",children:[]}],d={toc:l};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"1-overview"},"1 Overview"),(0,c.kt)("p",null,"The call of HTTP interface between Feign-based microservices can only satisfy a simple A microservice instance that randomly selects a service instance in B microservices according to simple rules, and if this B microservice instance wants to asynchronously return information To the caller, it is simply impossible to achieve.\nAt the same time, because Feign only supports simple service selection rules, it cannot forward the request to the specified microservice instance, and cannot broadcast a request to all instances of the recipient microservice."),(0,c.kt)("h2",{id:"2-architecture-description"},"2. Architecture description"),(0,c.kt)("h2",{id:"21-architecture-design-diagram"},"2.1. Architecture design diagram"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Linkis RPC architecture diagram",src:r(25524).Z})),(0,c.kt)("h2",{id:"22-module-description"},"2.2. Module description"),(0,c.kt)("p",null,"The functions of the main modules are introduced as follows:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Eureka: service registration center, user management service, service discovery."),(0,c.kt)("li",{parentName:"ul"},"Sender: Service request interface, the sender uses Sender to request service from the receiver."),(0,c.kt)("li",{parentName:"ul"},"Receiver: The service request receives the corresponding interface, and the receiver responds to the service through this interface."),(0,c.kt)("li",{parentName:"ul"},"Interceptor: Sender will pass the user's request to the interceptor. The interceptor intercepts the request and performs additional functional processing on the request. The broadcast interceptor is used to broadcast operations on the request, the retry interceptor is used to retry the processing of failed requests, and the cache interceptor is used to read and cache simple and unchanged requests. , And the default interceptor that provides the default implementation."),(0,c.kt)("li",{parentName:"ul"},"Decoder, Encoder: used for request encoding and decoding."),(0,c.kt)("li",{parentName:"ul"},"Feign: is a lightweight framework for http request calls, a declarative WebService client program, used for Linkis-RPC bottom communication."),(0,c.kt)("li",{parentName:"ul"},"Listener: monitor module, mainly used to monitor broadcast requests.")))}p.isMDXComponent=!0},25524:function(e,t,r){t.Z=r.p+"assets/images/linkis-rpc-6f940d04ce7c039d0e8ca787d3bed98c.png"}}]);