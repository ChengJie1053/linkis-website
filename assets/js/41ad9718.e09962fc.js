"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[41291],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},d="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,g=d["".concat(m,".").concat(k)]||d[k]||o[k]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[d]="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},45298:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"EC Resource Information Management",sidebar_position:10},i=void 0,p={unversionedId:"api/http/linkis-cg-linkismanager-api/ec-resource-management-api",id:"version-1.3.1/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",title:"EC Resource Information Management",description:"ECResourceInfoRestfulApi class",source:"@site/versioned_docs/version-1.3.1/api/http/linkis-cg-linkismanager-api/ec-resource-management-api.md",sourceDirName:"api/http/linkis-cg-linkismanager-api",slug:"/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",permalink:"/docs/1.3.1/api/http/linkis-cg-linkismanager-api/ec-resource-management-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/api/http/linkis-cg-linkismanager-api/ec-resource-management-api.md",tags:[],version:"1.3.1",sidebarPosition:10,frontMatter:{title:"EC Resource Information Management",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"BML Resource Management",permalink:"/docs/1.3.1/api/http/linkis-ps-publicservice-api/bml-resource-management-api"},next:{title:"ECM Resource Information Management",permalink:"/docs/1.3.1/api/http/linkis-cg-linkismanager-api/ecm-resource-management-api"}},m={},u=[{value:"delete EC info",id:"delete-ec-info",level:2},{value:"Get EC information",id:"get-ec-information",level:2},{value:"Search EC information",id:"search-ec-information",level:2}],s={toc:u},d="wrapper";function o(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," ECResourceInfoRestfulApi class ")),(0,r.kt)("h2",{id:"delete-ec-info"},"delete EC info"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),":",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/delete/{ticketid}}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Delete EC information")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,r.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"204"),(0,r.kt)("td",{parentName:"tr",align:null},"No Content"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"get-ec-information"},"Get EC information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/get")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Get EC information")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,r.kt)("td",{parentName:"tr",align:null},"ticketid"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "data": {},\n    "message": "",\n    "method": "",\n    "status": 0\n}\n')),(0,r.kt)("h2",{id:"search-ec-information"},"Search EC information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/linkisManager/ecinfo/ecrHistoryList")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request method"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response data type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface description"),":",(0,r.kt)("p",null,"Get EC information")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"Request type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"instance"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"creator"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startDate"),(0,r.kt)("td",{parentName:"tr",align:null},"startDate"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endDate"),(0,r.kt)("td",{parentName:"tr",align:null},"endDate"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"engineType"),(0,r.kt)("td",{parentName:"tr",align:null},"engineType"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"pageNow"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response parameters"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"parameter description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"request url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)"),(0,r.kt)("td",{parentName:"tr",align:null},"integer(int32)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "message": "",\n        "status": 0,\n        "data": {\n        "engineList": [\n            {\n                "id": -94209540.07806732,\n                "requestResource": "consectetur dolor eiusmod ipsum",\n                "releasedResource": "est in id Ut",\n                "usedTimes": -51038117.02855969,\n                "ticketId": "adipisicing in nostrud do",\n                "ecmInstance": "id magna Lorem eiusmod",\n                "engineType": "dolor",\n                "usedTime": -38764910.74278392,\n                "logDirSuffix": "sunt eiusmod aute et",\n                "releaseTime": -33417043.232267484,\n                "usedResource": "in amet veniam velit",\n                "requestTimes": -15643696.319572791,\n                "labelValue": "veniam incididunt magna",\n                "releaseTimes": 96384811.3484546,\n                "createTime": 38434279.49900183,\n                "serviceInstance": "consequat aliqua in enim",\n                "createUser": "Lorem Ut occaecat amet"\n            },\n            {\n                "labelValue": "adipisicing deserunt do",\n                "usedTimes": 49828407.223826766,\n                "usedResource": "mollit laboris cupidatat enim",\n                "releaseTimes": -73400915.22672182,\n                "releasedResource": "est qui id ipsum mollit",\n                "requestResource": "deserunt reprehenderit ut",\n                "serviceInstance": "do laborum",\n                "requestTimes": -33074164.700212136,\n                "ecmInstance": "dolore",\n                "logDirSuffix": "ea incididunt",\n                "createUser": "Ut exercitation officia dolore ipsum",\n                "usedTime": 25412456.522457644,\n                "createTime": -93227549.70578489,\n                "id": -84032815.0589972,\n                "ticketId": "eu in mollit do",\n                "engineType": "non Ut eu",\n                "releaseTime": 34923394.9602966\n            },\n            {\n                "releaseTime": -91057731.93164417,\n                "usedTime": 99226623.97199354,\n                "id": 59680041.603043556,\n                "requestResource": "officia Ut enim nulla",\n                "usedTimes": -14680356.219609797,\n                "logDirSuffix": "proident amet reprehenderit tempor",\n                "ticketId": "minim esse",\n                "releaseTimes": 37270921.94107443,\n                "serviceInstance": "enim adipisicing cupidatat",\n                "createUser": "culpa",\n                "requestTimes": -33504917.797325186,\n                "releasedResource": "et dolore quis",\n                "ecmInstance": "elit dolor adipisicing id",\n                "createTime": -38827280.78902944,\n                "engineType": "ullamco in eiusmod reprehenderit aute",\n                "labelValue": "dolore qui labore nulla laboris",\n                "usedResource": "irure sint nostrud Excepteur sunt"\n            },\n            {\n                "requestResource": "deserunt incididunt enim",\n                "releaseTimes": -16708903.732444778,\n                "id": 80588551.12419662,\n                "ecmInstance": "et veniam",\n                "releaseTime": -50240956.63233949,\n                "usedTimes": -5348294.728038415,\n                "labelValue": "incididunt tempor reprehenderit quis eu",\n                "createUser": "in in",\n                "serviceInstance": "minim sit",\n                "ticketId": "in dolore",\n                "usedTime": -30138563.761232898,\n                "logDirSuffix": "quis laborum ea",\n                "createTime": 65920455.93896958,\n                "requestTimes": 38810152.0160971,\n                "engineType": "est in Ut proident",\n                "usedResource": "nulla laboris Ut",\n                "releasedResource": "cupidatat irure"\n            },\n            {\n                "usedResource": "Lorem adipisicing dolor",\n                "createTime": -11906770.11266476,\n                "labelValue": "et id magna",\n                "releaseTimes": 32546901.20497243,\n                "id": -90442428.4679744,\n                "logDirSuffix": "aute ut eu commodo",\n                "ticketId": "cillum sint non deserunt",\n                "requestResource": "non velit sunt consequat culpa",\n                "requestTimes": -75282512.0022062,\n                "usedTime": 6378131.554130778,\n                "releasedResource": "Duis in",\n                "serviceInstance": "dolore ut officia",\n                "usedTimes": 70810503.51038182,\n                "createUser": "voluptate sed",\n                "ecmInstance": "laboris do sit dolore ipsum",\n                "engineType": "id",\n                "releaseTime": 37544575.30154848\n            }\n        ]\n    }\n}\n```\n')))}o.isMDXComponent=!0}}]);