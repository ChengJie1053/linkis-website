"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[42466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Login API",sidebar_position:1},l="Login Document",o={unversionedId:"api/login-api",id:"version-1.3.1/api/login-api",title:"Login API",description:"1. Docking With LDAP Service",source:"@site/versioned_docs/version-1.3.1/api/login-api.md",sourceDirName:"api",slug:"/api/login-api",permalink:"/docs/latest/api/login-api",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/api/login-api.md",tags:[],version:"1.3.1",sidebarPosition:1,frontMatter:{title:"Login API",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/latest/api/overview"},next:{title:"Task Rest API",permalink:"/docs/latest/api/linkis-task-operator"}},s={},p=[{value:"1. Docking With LDAP Service",id:"1-docking-with-ldap-service",level:2},{value:"2. How To Open The Test Mode To Achieve Login-Free",id:"2-how-to-open-the-test-mode-to-achieve-login-free",level:2},{value:"3.Log In Interface Summary",id:"3log-in-interface-summary",level:2},{value:"4. Interface details",id:"4-interface-details",level:2},{value:"1). Login In",id:"1-login-in",level:3},{value:"2). Login Out",id:"2-login-out",level:3},{value:"3). Heart Beat",id:"3-heart-beat",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"login-document"},"Login Document"),(0,r.kt)("h2",{id:"1-docking-with-ldap-service"},"1. Docking With LDAP Service"),(0,r.kt)("p",null,"Enter the /conf/linkis-spring-cloud-services/linkis-mg-gateway directory and execute the command:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    vim linkis-server.properties\n")),(0,r.kt)("p",null,"Add LDAP related configuration:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wds.linkis.ldap.proxy.url=ldap://127.0.0.1:389/ #LDAP service URL\nwds.linkis.ldap.proxy.baseDN=dc=webank,dc=com #Configuration of LDAP service    \n")),(0,r.kt)("h2",{id:"2-how-to-open-the-test-mode-to-achieve-login-free"},"2. How To Open The Test Mode To Achieve Login-Free"),(0,r.kt)("p",null,"Enter the /conf/linkis-spring-cloud-services/linkis-mg-gateway directory and execute the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    vim linkis-server.properties\n")),(0,r.kt)("p",null,"Turn on the test mode and the parameters are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    wds.linkis.test.mode=true   # Open test mode\n    wds.linkis.test.user=hadoop  # Specify which user to delegate all requests to in test mode\n")),(0,r.kt)("h2",{id:"3log-in-interface-summary"},"3.Log In Interface Summary"),(0,r.kt)("p",null,"We provide the following login-related interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login In")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login Out")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Heart Beat"))),(0,r.kt)("h2",{id:"4-interface-details"},"4. Interface details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The return of the Linkis Restful interface follows the following standard return format:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n "method": "",\n "status": 0,\n "message": "",\n "data": {}\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Protocol"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"method: Returns the requested Restful API URI, which is mainly used in WebSocket mode."),(0,r.kt)("li",{parentName:"ul"},"status: returns status information, where: -1 means no login, 0 means success, 1 means error, 2 means verification failed, 3 means no access to the interface."),(0,r.kt)("li",{parentName:"ul"},"data: return specific data."),(0,r.kt)("li",{parentName:"ul"},"message: return the requested prompt message. If the status is not 0, the message returns an error message, and the data may have a stack field, which returns specific stack information.")),(0,r.kt)("p",null,"For more information about the Linkis Restful interface specification, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../development/development-specification/api"},"Linkis Restful Interface Specification")),(0,r.kt)("h3",{id:"1-login-in"},"1). Login In"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/login"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'      {\n        "userName": "",\n        "password": ""\n      }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Return to example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "method": null,\n        "status": 0,\n        "message": "login successful(\u767b\u5f55\u6210\u529f)\uff01",\n        "data": {\n            "isAdmin": false,\n            "userName": ""\n        }\n     }\n')),(0,r.kt)("p",null,"Among them:"),(0,r.kt)("p",null,"-isAdmin: Linkis only has admin users and non-admin users. The only privilege of admin users is to support viewing the historical tasks of all users in the Linkis management console."),(0,r.kt)("h3",{id:"2-login-out"},"2). Login Out"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/logout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")),(0,r.kt)("p",{parentName:"li"},"No parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return to example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n        "method": "/api/rest_j/v1/user/logout",\n        "status": 0,\n        "message": "Logout successful(\u9000\u51fa\u767b\u5f55\u6210\u529f)\uff01"\n    }\n')),(0,r.kt)("h3",{id:"3-heart-beat"},"3). Heart Beat"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/rest_j/v1/user/heartbeat"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Submission method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")),(0,r.kt)("p",{parentName:"li"},"No parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return to example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n         "method": "/api/rest_j/v1/user/heartbeat",\n         "status": 0,\n         "message": "Maintain heartbeat success(\u7ef4\u7cfb\u5fc3\u8df3\u6210\u529f)!"\n    }\n')))}c.isMDXComponent=!0}}]);