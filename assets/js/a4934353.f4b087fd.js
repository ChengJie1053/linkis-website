"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[41651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Message Scheduler Module",sidebar_position:1},a=void 0,c={unversionedId:"architecture/commons/message-scheduler",id:"version-1.0.2/architecture/commons/message-scheduler",title:"Message Scheduler Module",description:"1 Overview",source:"@site/versioned_docs/version-1.0.2/architecture/commons/message-scheduler.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/message-scheduler",permalink:"/docs/1.0.2/architecture/commons/message-scheduler",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.0.2/architecture/commons/message-scheduler.md",tags:[],version:"1.0.2",sidebarPosition:1,frontMatter:{title:"Message Scheduler Module",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Add an EngineConn",permalink:"/docs/1.0.2/architecture/add-an-engine-conn"},next:{title:"RPC Module",permalink:"/docs/1.0.2/architecture/commons/rpc"}},s={},l=[{value:"1 Overview",id:"1-overview",level:2},{value:"2. Architecture description",id:"2-architecture-description",level:2},{value:"2.1. Architecture design diagram",id:"21-architecture-design-diagram",level:2},{value:"2.2. Module description",id:"22-module-description",level:2}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-overview"},"1 Overview"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Linkis-RPC can realize the communication between microservices. In order to simplify the use of RPC, Linkis provides the Message-Scheduler module, which is annotated by @Receiver Analyze, identify and call. At the same time, it also unifies the use of RPC and Restful interfaces, which has better scalability."),(0,i.kt)("h2",{id:"2-architecture-description"},"2. Architecture description"),(0,i.kt)("h2",{id:"21-architecture-design-diagram"},"2.1. Architecture design diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Module Design Drawing",src:r(36174).Z,width:"798",height:"508"})),(0,i.kt)("h2",{id:"22-module-description"},"2.2. Module description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ServiceParser: Parse the (Object) object of the Service module, and encapsulate the @Receiver annotated method into the ServiceMethod object."),(0,i.kt)("li",{parentName:"ul"},"ServiceRegistry: Register the corresponding Service module, and store the ServiceMethod parsed by the Service in the Map container."),(0,i.kt)("li",{parentName:"ul"},"ImplicitParser: parse the object of the Implicit module, and the method annotated with @Implicit will be encapsulated into the ImplicitMethod object."),(0,i.kt)("li",{parentName:"ul"},"ImplicitRegistry: Register the corresponding Implicit module, and store the resolved ImplicitMethod in a Map container."),(0,i.kt)("li",{parentName:"ul"},"Converter: Start to scan the non-interface non-abstract subclass of RequestMethod and store it in the Map, parse the Restful and match the related RequestProtocol."),(0,i.kt)("li",{parentName:"ul"},"Publisher: Realize the publishing scheduling function, find the ServiceMethod matching the RequestProtocol in the Registry, and encapsulate it as a Job for submission scheduling."),(0,i.kt)("li",{parentName:"ul"},"Scheduler: Scheduling implementation, using Linkis-Sceduler to execute the job and return the MessageJob object."),(0,i.kt)("li",{parentName:"ul"},"TxManager: Complete transaction management, perform transaction management on job execution, and judge whether to commit or rollback after the job execution ends.")))}d.isMDXComponent=!0},36174:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/linkis-message-scheduler-f135fb5503becb15e197bf0a2d422bac.png"}}]);