"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[83262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),k=r,c=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},36535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u603b\u89c8",sidebar_position:0},i=void 0,p={unversionedId:"engine-usage/overview",id:"engine-usage/overview",title:"\u603b\u89c8",description:"1. \u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/overview.md",sourceDirName:"engine-usage",slug:"/engine-usage/overview",permalink:"/zh-CN/docs/1.3.2/engine-usage/overview",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/engine-usage/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u603b\u89c8",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"UDF \u7684\u4f7f\u7528",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/udf-function"},next:{title:"Spark",permalink:"/zh-CN/docs/1.3.2/engine-usage/spark"}},o={},d=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4f5c\u4e3a\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u7684\u8ba1\u7b97\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u63a5\u4e0d\u540c\u7684\u8ba1\u7b97\u5f15\u64ce\uff0c\u901a\u8fc7\u5c4f\u853d\u4e0d\u540c\u8ba1\u7b97\u5f15\u64ce\u7684\u4f7f\u7528\u7ec6\u8282\uff0c\u5e76\u5411\u4e0a\u63d0\u4f9b\u4e86\u4e00\u5957\u7edf\u4e00\u7684\u4f7f\u7528\u63a5\u53e3\uff0c\n\u4f7f\u5f97\u90e8\u7f72\u548c\u5e94\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u7684\u5927\u6570\u636e\u5e73\u53f0\u7684\u8fd0\u7ef4\u6210\u672c\u5927\u5927\u964d\u4f4e\uff0c\u76ee\u524d\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u5df2\u7ecf\u5bf9\u63a5\u4e86\u51e0\u6b3e\u4e3b\u6d41\u7684\u8ba1\u7b97\u5f15\u64ce\uff0c\u57fa\u672c\u4e0a\u6db5\u76d6\u4e86\u4e0a\u751f\u4ea7\u4e0a\u5bf9\u6570\u636e\u7684\u9700\u6c42\uff0c\n\u4e3a\u4e86\u63d0\u4f9b\u66f4\u597d\u7684\u53ef\u62d3\u5c55\u6027\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u540c\u65f6\u63d0\u4f9b\u4e86\u63a5\u5165\u65b0\u5f15\u64ce\u7684\u76f8\u5173\u63a5\u53e3\uff0c\u53ef\u4ee5\u5229\u7528\u8be5\u63a5\u53e3\u63a5\u5165\u65b0\u7684\u8ba1\u7b97\u5f15\u64ce\u3002 "),(0,r.kt)("p",null,"\u5f15\u64ce\u662f\u63d0\u4f9b\u7ed9\u7528\u6237\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u80fd\u529b\u7684\u7ec4\u4ef6\uff0c\u76ee\u524d\u5df2\u7ecf\u63a5\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u7684\u5f15\u64ce\uff0c\u6709\u4e3b\u6d41\u7684\u5927\u6570\u636e\u8ba1\u7b97\u5f15\u64ce ",(0,r.kt)("inlineCode",{parentName:"p"},"Spark")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hive")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Presto")," \u7b49\uff0c\u4e5f\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," \u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"Shell")," \u8fd9\u4e9b\u811a\u672c\u5904\u7406\u6570\u636e\u80fd\u529b\u7684\u5f15\u64ce\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"DataSphereStudio")," \u4f5c\u4e3a\u5bf9\u63a5\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u7684\u4e00\u7ad9\u5f0f\u6570\u636e\u64cd\u4f5c\u5e73\u53f0\uff0c\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u7684\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSphereStudio")," \u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkis")," \u652f\u6301\u7684\u5f15\u64ce\u5b8c\u6210\u4ea4\u4e92\u5f0f\u6570\u636e\u5206\u6790\u4efb\u52a1\u548c\u5de5\u4f5c\u6d41\u4efb\u52a1\u3002"),(0,r.kt)("p",null,"\u652f\u6301\u5f15\u64ce\u53ca\u7248\u672c\u4fe1\u606f\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5f15\u64ce"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u5f15\u64ce"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/spark"},"Spark")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"2.4.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/hive"},"Hive")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/python"},"Python")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"python2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/shell"},"Shell")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/jdbc"},"JDBC")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/flink"},"Flink")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1.12.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/openlookeng"},"openLooKeng")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/pipeline"},"Pipeline")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/presto"},"Presto")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"0.234")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/sqoop"},"Sqoop")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/1.3.2/engine-usage/elasticsearch"},"Elasticsearch")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"7.6.2")))))}s.isMDXComponent=!0}}]);