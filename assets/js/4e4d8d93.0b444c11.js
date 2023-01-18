"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[91576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={title:"installation package directory structure",sidebar_position:4.5},o=void 0,c={unversionedId:"deployment/unpack-hierarchical-structure",id:"version-1.1.1/deployment/unpack-hierarchical-structure",title:"installation package directory structure",description:"Linkis installation package decompressed directory structure",source:"@site/versioned_docs/version-1.1.1/deployment/unpack-hierarchical-structure.md",sourceDirName:"deployment",slug:"/deployment/unpack-hierarchical-structure",permalink:"/docs/1.1.1/deployment/unpack-hierarchical-structure",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.1.1/deployment/unpack-hierarchical-structure.md",tags:[],version:"1.1.1",sidebarPosition:4.5,frontMatter:{title:"installation package directory structure",sidebar_position:4.5},sidebar:"tutorialSidebar",previous:{title:"Installation Directory Structure",permalink:"/docs/1.1.1/deployment/installation-hierarchical-structure"},next:{title:"Source Code Directory Structure",permalink:"/docs/1.1.1/deployment/sourcecode-hierarchical-structure"}},s={},l=[{value:"Linkis installation package decompressed directory structure",id:"linkis-installation-package-decompressed-directory-structure",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"linkis-installation-package-decompressed-directory-structure"},"Linkis installation package decompressed directory structure"),(0,i.kt)("p",null,"Download the officially released ",(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/download/main"},"Compilation Complete Package"),", and the decompressed directory structure is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\n\u251c\u2500\u2500 bin\n\u2502 \u251c\u2500\u2500 checkEnv.sh //deployment environment verification script\n\u2502 \u251c\u2500\u2500 common.sh\n\u2502 \u2514\u2500\u2500 install.sh //script to execute the installation\n\u251c\u2500\u2500 deploy-config\n\u2502 \u251c\u2500\u2500 db.sh //database connection configuration\n\u2502 \u2514\u2500\u2500 linkis-env.sh //related environment configuration information\n\u251c\u2500\u2500 DISCLAIMER\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 licenses\n\u251c\u2500\u2500 linkis-package //microservice related startup configuration files, dependencies, scripts, linkis-cli, etc.\n\u2502 \u251c\u2500\u2500 bin\n\u2502 \u251c\u2500\u2500 conf\n\u2502 \u251c\u2500\u2500 db\n\u2502 \u251c\u2500\u2500 lib\n\u2502 \u2514\u2500\u2500 sbin\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 README_CN.md\n\u2514\u2500\u2500 README.md\n\n")))}u.isMDXComponent=!0}}]);