"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[48890],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||a;return r?o.createElement(m,s(s({ref:t},c),{},{components:r})):o.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},41830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={title:"Asynchronous Pool Call",sidebar_position:3},s=void 0,l={unversionedId:"architecture/ujes/asynchronous-thread-pool",id:"version-0.11.0/architecture/ujes/asynchronous-thread-pool",title:"Asynchronous Pool Call",description:"How UJES implements full asynchronous thread pool calls",source:"@site/versioned_docs/version-0.11.0/architecture/ujes/asynchronous-thread-pool.md",sourceDirName:"architecture/ujes",slug:"/architecture/ujes/asynchronous-thread-pool",permalink:"/docs/0.11.0/architecture/ujes/asynchronous-thread-pool",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-0.11.0/architecture/ujes/asynchronous-thread-pool.md",tags:[],version:"0.11.0",sidebarPosition:3,frontMatter:{title:"Asynchronous Pool Call",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Spark Engine File Import Export",permalink:"/docs/0.11.0/architecture/ujes/file-import-and-export-structure"},next:{title:"Compile And Package",permalink:"/docs/0.11.0/development/compile-and-package"}},i={},p=[{value:"1 Full Asynchronous Thread Pool for Advantage",id:"1-full-asynchronous-thread-pool-for-advantage",level:2},{value:"2 How to Implement",id:"2-how-to-implement",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"How UJES implements full asynchronous thread pool calls")),(0,n.kt)("h2",{id:"1-full-asynchronous-thread-pool-for-advantage"},"1 Full Asynchronous Thread Pool for Advantage"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"5 Asynchronous Message Queue and Thread Pool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Job's thread less than 1 ms per occupation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can accept more than 10,000 + TPS permanent Jobs per entry"))),(0,n.kt)("h2",{id:"2-how-to-implement"},"2 How to Implement"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Full-asynchronous call thread pool",src:r(20835).Z,width:"646",height:"627"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How can you improve the upper's request through?")),(0,n.kt)("p",{parentName:"li"},"Entrance WebSocket Processors, internalize a processing thread pool and handler queue to receive the top requests from Spring Cloud Gateway routes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How to ensure that different users in different systems are segregated from one another?")),(0,n.kt)("p",{parentName:"li"},"Entrance Jobschedule, each user of each system has a dedicated thread to ensure isolation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How to ensure job execution?")),(0,n.kt)("p",{parentName:"li"},"The Job Execution Pool is used only for the submission of Job, and once the Job is submitted to Engineering, the horse is placed in the Job's execution queue to ensure that each Job's occupation of the execution pool thread does not exceed 1 millisecond."),(0,n.kt)("p",{parentName:"li"},"The RPC requests the pool to receive and process engineered logs, progress, status and resultsets and to update the Job's information in real time.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"How can Job's logs, progress, and status be pushed to the top of the system in real time?")),(0,n.kt)("p",{parentName:"li"},"WebSocket Send Pool, dedicated to processing Job's log, progress and state, and push information to the top system."))))}u.isMDXComponent=!0},20835:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/fully_asynchronous_call_thread_pool-caf5167951b6d1ef3b43c22fd1493431.png"}}]);