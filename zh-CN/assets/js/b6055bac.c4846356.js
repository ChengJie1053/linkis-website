"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[15356],{3905:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>d});var a=e(67294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,a,r=function(n,t){if(null==n)return{};var e,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)e=l[a],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var c=a.createContext({}),u=function(n){var t=a.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},p=function(n){var t=u(n.components);return a.createElement(c.Provider,{value:t},n.children)},k="mdxType",g={inlineCode:"code",wrapper:function(n){var t=n.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(n,t){var e=n.components,r=n.mdxType,l=n.originalType,c=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),k=u(e),m=r,d=k["".concat(c,".").concat(m)]||k[m]||g[m]||l;return e?a.createElement(d,i(i({ref:t},p),{},{components:e})):a.createElement(d,i({ref:t},p))}));function d(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var l=e.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=n,o[k]="string"==typeof n?n:r,i[1]=o;for(var u=2;u<l;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},36911:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=e(87462),r=(e(67294),e(3905));const l={title:"EngineConn\u67b6\u6784",sidebar_position:1},i="EngineConn\u67b6\u6784\u8bbe\u8ba1",o={unversionedId:"architecture/computation-governance-services/engine/engine-conn",id:"version-1.1.0/architecture/computation-governance-services/engine/engine-conn",title:"EngineConn\u67b6\u6784",description:"EngineConn\uff1a\u5f15\u64ce\u8fde\u63a5\u5668\uff0c\u4e3a\u5176\u4ed6\u5fae\u670d\u52a1\u6a21\u5757\u63d0\u4f9b\u7edf\u4e00\u914d\u7f6e\u7ba1\u7406\u3001\u4e0a\u4e0b\u6587\u670d\u52a1\u3001\u7269\u6599\u5e93\u3001\u6570\u636e\u6e90\u7ba1\u7406\u3001\u5fae\u670d\u52a1\u7ba1\u7406\u548c\u5386\u53f2\u4efb\u52a1\u67e5\u8be2\u7b49\u529f\u80fd\u7684\u6a21\u5757\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/architecture/computation-governance-services/engine/engine-conn.md",sourceDirName:"architecture/computation-governance-services/engine",slug:"/architecture/computation-governance-services/engine/engine-conn",permalink:"/zh-CN/docs/1.1.0/architecture/computation-governance-services/engine/engine-conn",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/architecture/computation-governance-services/engine/engine-conn.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"EngineConn\u67b6\u6784",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ResourceManager \u67b6\u6784",permalink:"/zh-CN/docs/1.1.0/architecture/computation-governance-services/linkis-manager/resource-manager"},next:{title:"EngineConnManager\u67b6\u6784",permalink:"/zh-CN/docs/1.1.0/architecture/computation-governance-services/engine/engine-conn-manager"}},c={},u=[{value:"linkis-computation-engineconn\u4ea4\u4e92\u5f0f\u5f15\u64ce\u8fde\u63a5\u5668",id:"linkis-computation-engineconn\u4ea4\u4e92\u5f0f\u5f15\u64ce\u8fde\u63a5\u5668",level:2},{value:"linkis-engineconn-common\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u901a\u7528\u6a21\u5757",id:"linkis-engineconn-common\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u901a\u7528\u6a21\u5757",level:2},{value:"linkis-engineconn-core\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u6838\u5fc3\u903b\u8f91",id:"linkis-engineconn-core\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u6838\u5fc3\u903b\u8f91",level:2},{value:"linkis-engineconn-launch\u5f15\u64ce\u8fde\u63a5\u5668\u542f\u52a8\u6a21\u5757",id:"linkis-engineconn-launch\u5f15\u64ce\u8fde\u63a5\u5668\u542f\u52a8\u6a21\u5757",level:2},{value:"linkis-executor-core\u6267\u884c\u5668\u7684\u6838\u5fc3\u903b\u8f91",id:"linkis-executor-core\u6267\u884c\u5668\u7684\u6838\u5fc3\u903b\u8f91",level:2},{value:"linkis-callback-service\u56de\u8c03\u903b\u8f91",id:"linkis-callback-service\u56de\u8c03\u903b\u8f91",level:2},{value:"linkis-accessible-executor\u80fd\u591f\u88ab\u8bbf\u95ee\u7684\u6267\u884c\u5668",id:"linkis-accessible-executor\u80fd\u591f\u88ab\u8bbf\u95ee\u7684\u6267\u884c\u5668",level:2}],p={toc:u};function k(n){let{components:t,...l}=n;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"engineconn\u67b6\u6784\u8bbe\u8ba1"},"EngineConn\u67b6\u6784\u8bbe\u8ba1"),(0,r.kt)("p",null,"EngineConn\uff1a\u5f15\u64ce\u8fde\u63a5\u5668\uff0c\u4e3a\u5176\u4ed6\u5fae\u670d\u52a1\u6a21\u5757\u63d0\u4f9b\u7edf\u4e00\u914d\u7f6e\u7ba1\u7406\u3001\u4e0a\u4e0b\u6587\u670d\u52a1\u3001\u7269\u6599\u5e93\u3001\u6570\u636e\u6e90\u7ba1\u7406\u3001\u5fae\u670d\u52a1\u7ba1\u7406\u548c\u5386\u53f2\u4efb\u52a1\u67e5\u8be2\u7b49\u529f\u80fd\u7684\u6a21\u5757\u3002"),(0,r.kt)("p",null,"\u4e00\u3001EngineConn\u67b6\u6784\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EngineConn",src:e(60133).Z,width:"1420",height:"728"})),(0,r.kt)("h1",{id:"\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd"},"\u4e8c\u7ea7\u6a21\u5757\u4ecb\u7ecd\uff1a"),(0,r.kt)("h2",{id:"linkis-computation-engineconn\u4ea4\u4e92\u5f0f\u5f15\u64ce\u8fde\u63a5\u5668"},"linkis-computation-engineconn\u4ea4\u4e92\u5f0f\u5f15\u64ce\u8fde\u63a5\u5668"),(0,r.kt)("p",null,"\u63d0\u4f9b\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u4efb\u52a1\u7684\u80fd\u529b\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnTask"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u63d0\u4ea4\u7ed9EngineConn\u7684\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u4efb\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ComputationExecutor"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86\u4ea4\u4e92\u5f0fExecutor\uff0c\u5177\u5907\u72b6\u6001\u67e5\u8be2\u3001\u4efb\u52a1kill\u7b49\u4ea4\u4e92\u5f0f\u80fd\u529b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TaskExecutionService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u5bf9\u4ea4\u4e92\u5f0f\u8ba1\u7b97\u4efb\u52a1\u7684\u7ba1\u7406\u529f\u80fd")))),(0,r.kt)("h2",{id:"linkis-engineconn-common\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u901a\u7528\u6a21\u5757"},"linkis-engineconn-common\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u901a\u7528\u6a21\u5757"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e86\u5f15\u64ce\u8fde\u63a5\u5668\u4e2d\u6700\u57fa\u7840\u7684\u5b9e\u4f53\u7c7b\u548c\u63a5\u53e3\u3002EngineConn\u662f\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u5e95\u5c42\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u7684\u8fde\u63a5\u4f1a\u8bddSession\uff0c\u5305\u542b\u5f15\u64ce\u4e0e\u5177\u4f53\u96c6\u7fa4\u7684\u4f1a\u8bdd\u4fe1\u606f\uff0c\u662f\u4e0e\u5177\u4f53\u5f15\u64ce\u901a\u4fe1\u7684client\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3Service"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineCreationContext"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u4e86EngineConn\u5728\u542f\u52a8\u671f\u95f4\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u4e86EngineConn\u7684\u5177\u4f53\u4fe1\u606f\uff0c\u5982\u7c7b\u578b\u3001\u4e0e\u5c42\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u7684\u5177\u4f53\u8fde\u63a5\u4fe1\u606f\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineExecution"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9bExecutor\u7684\u521b\u5efa\u903b\u8f91")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnHook"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5f15\u64ce\u542f\u52a8\u5404\u4e2a\u9636\u6bb5\u524d\u540e\u7684\u64cd\u4f5c")))),(0,r.kt)("h2",{id:"linkis-engineconn-core\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u6838\u5fc3\u903b\u8f91"},"linkis-engineconn-core\u5f15\u64ce\u8fde\u63a5\u5668\u7684\u6838\u5fc3\u903b\u8f91"),(0,r.kt)("p",null,"\u5b9a\u4e49\u4e86EngineConn\u7684\u6838\u5fc3\u903b\u8f91\u6d89\u53ca\u7684\u63a5\u53e3\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnManager"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u521b\u5efa\u3001\u83b7\u53d6EngineConn\u7684\u76f8\u5173\u63a5\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExecutorManager"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u521b\u5efa\u3001\u83b7\u53d6Executor\u7684\u76f8\u5173\u63a5\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ShutdownHook"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u5f15\u64ce\u5173\u95ed\u9636\u6bb5\u7684\u64cd\u4f5c")))),(0,r.kt)("h2",{id:"linkis-engineconn-launch\u5f15\u64ce\u8fde\u63a5\u5668\u542f\u52a8\u6a21\u5757"},"linkis-engineconn-launch\u5f15\u64ce\u8fde\u63a5\u5668\u542f\u52a8\u6a21\u5757"),(0,r.kt)("p",null,"\u5b9a\u4e49\u4e86\u5982\u4f55\u542f\u52a8EngineConn\u7684\u903b\u8f91\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnServer"),(0,r.kt)("td",{parentName:"tr",align:null},"EngineConn\u5fae\u670d\u52a1\u7684\u542f\u52a8\u7c7b")))),(0,r.kt)("h2",{id:"linkis-executor-core\u6267\u884c\u5668\u7684\u6838\u5fc3\u903b\u8f91"},"linkis-executor-core\u6267\u884c\u5668\u7684\u6838\u5fc3\u903b\u8f91"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"  \u5b9a\u4e49\u4e86\u6267\u884c\u5668\u76f8\u5173\u7684\u6838\u5fc3\u7c7b\u3002\u6267\u884c\u5668\u662f\u771f\u6b63\u7684\u8ba1\u7b97\u573a\u666f\u6267\u884c\u5668\uff0c\u8d1f\u8d23\u5c06\u7528\u6237\u4ee3\u7801\u63d0\u4ea4\u7ed9EngineConn\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Executor"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5b9e\u9645\u7684\u8ba1\u7b97\u903b\u8f91\u6267\u884c\u5355\u5143\uff0c\u5e76\u63d0\u4f9b\u5bf9\u5f15\u64ce\u5404\u79cd\u80fd\u529b\u7684\u9876\u5c42\u62bd\u8c61\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnAsyncEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u76f8\u5173\u7684\u5f02\u6b65\u4e8b\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnSyncEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u76f8\u5173\u7684\u540c\u6b65\u4e8b\u4ef6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnAsyncListener"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u76f8\u5173\u5f02\u6b65\u4e8b\u4ef6\u76d1\u542c\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnSyncListener"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u76f8\u5173\u540c\u6b65\u4e8b\u4ef6\u76d1\u542c\u5668")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnAsyncListenerBus"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u5f02\u6b65\u4e8b\u4ef6\u7684\u76d1\u542c\u5668\u603b\u7ebf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnSyncListenerBus"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u540c\u6b65\u4e8b\u4ef6\u7684\u76d1\u542c\u5668\u603b\u7ebf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExecutorListenerBusContext"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u4e86EngineConn\u4e8b\u4ef6\u76d1\u542c\u5668\u7684\u4e0a\u4e0b\u6587")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LabelService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u6807\u7b7e\u4e0a\u62a5\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ManagerService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e0eLinkisManager\u8fdb\u884c\u4fe1\u606f\u4f20\u9012\u7684\u529f\u80fd")))),(0,r.kt)("h2",{id:"linkis-callback-service\u56de\u8c03\u903b\u8f91"},"linkis-callback-service\u56de\u8c03\u903b\u8f91"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnCallback"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49EngineConn\u7684\u56de\u8c03\u903b\u8f91")))),(0,r.kt)("h2",{id:"linkis-accessible-executor\u80fd\u591f\u88ab\u8bbf\u95ee\u7684\u6267\u884c\u5668"},"linkis-accessible-executor\u80fd\u591f\u88ab\u8bbf\u95ee\u7684\u6267\u884c\u5668"),(0,r.kt)("p",null,"\u80fd\u591f\u88ab\u8bbf\u95ee\u7684Executor\u3002\u53ef\u4ee5\u901a\u8fc7RPC\u8bf7\u6c42\u4e0e\u5b83\u4ea4\u4e92\uff0c\u4ece\u800c\u83b7\u53d6\u5b83\u7684\u72b6\u6001\u3001\u8d1f\u8f7d\u3001\u5e76\u53d1\u7b49\u57fa\u7840\u6307\u6807Metrics\u6570\u636e\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u7c7b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6838\u5fc3\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LogCache"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u65e5\u5fd7\u7f13\u5b58\u7684\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccessibleExecutor"),(0,r.kt)("td",{parentName:"tr",align:null},"\u80fd\u591f\u88ab\u8bbf\u95ee\u7684Executor\uff0c\u53ef\u4ee5\u901a\u8fc7RPC\u8bf7\u6c42\u4e0e\u5b83\u4ea4\u4e92\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NodeHealthyInfoManager"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406Executor\u7684\u5065\u5eb7\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NodeHeartbeatMsgManager"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406Executor\u7684\u5fc3\u8df3\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NodeOverLoadInfoManager"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406Executor\u7684\u8d1f\u8f7d\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Listener"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u4e0eExecutor\u76f8\u5173\u7684\u4e8b\u4ef6\u4ee5\u53ca\u5bf9\u5e94\u7684\u76d1\u542c\u5668\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnTimedLock"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49Executor\u7ea7\u522b\u7684\u9501")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccessibleService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9bExecutor\u7684\u542f\u505c\u3001\u72b6\u6001\u83b7\u53d6\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExecutorHeartbeatService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9bExecutor\u7684\u5fc3\u8df3\u76f8\u5173\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LockService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u9501\u7ba1\u7406\u529f\u80fd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LogService"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d0\u4f9b\u65e5\u5fd7\u7ba1\u7406\u529f\u80fd")))))}k.isMDXComponent=!0},60133:(n,t,e)=>{e.d(t,{Z:()=>a});const a=e.p+"assets/images/engineconn-01-63efc68110e3bb6d699914c0aa86eb86.png"}}]);