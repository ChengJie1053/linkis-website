"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[49929],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var k=n.createContext({}),d=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(k.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,k=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(a),o=l,N=m["".concat(k,".").concat(o)]||m[o]||u[o]||r;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=o;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p[m]="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},87005:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u5efa\u8bae\u914d\u7f6e",sidebar_position:.2},i=void 0,p={unversionedId:"about/configuration",id:"version-1.3.1/about/configuration",title:"\u5efa\u8bae\u914d\u7f6e",description:"1 \u8f6f\u786c\u4ef6\u73af\u5883\u5efa\u8bae\u914d\u7f6e",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/about/configuration.md",sourceDirName:"about",slug:"/about/configuration",permalink:"/zh-CN/docs/latest/about/configuration",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/about/configuration.md",tags:[],version:"1.3.1",sidebarPosition:.2,frontMatter:{title:"\u5efa\u8bae\u914d\u7f6e",sidebar_position:.2},sidebar:"tutorialSidebar",previous:{title:"\u7248\u672c\u7279\u6027",permalink:"/zh-CN/docs/latest/about/release"},next:{title:"\u540d\u8bcd\u89e3\u91ca\u548c\u670d\u52a1\u4ecb\u7ecd",permalink:"/zh-CN/docs/latest/about/glossary"}},k={},d=[{value:"1 \u8f6f\u786c\u4ef6\u73af\u5883\u5efa\u8bae\u914d\u7f6e",id:"1-\u8f6f\u786c\u4ef6\u73af\u5883\u5efa\u8bae\u914d\u7f6e",level:2},{value:"1.1 Linux \u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u8981\u6c42",id:"11-linux-\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u8981\u6c42",level:3},{value:"1.2 \u670d\u52a1\u5668\u5efa\u8bae\u914d\u7f6e",id:"12-\u670d\u52a1\u5668\u5efa\u8bae\u914d\u7f6e",level:3},{value:"\u751f\u4ea7\u73af\u5883",id:"\u751f\u4ea7\u73af\u5883",level:4},{value:"1.3 \u8f6f\u4ef6\u8981\u6c42",id:"13-\u8f6f\u4ef6\u8981\u6c42",level:3},{value:"1.4 \u5ba2\u6237\u7aef Web \u6d4f\u89c8\u5668\u8981\u6c42",id:"14-\u5ba2\u6237\u7aef-web-\u6d4f\u89c8\u5668\u8981\u6c42",level:3},{value:"2 \u5e38\u7528\u573a\u666f",id:"2-\u5e38\u7528\u573a\u666f",level:2},{value:"2.1 \u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f",id:"21-\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f",level:3},{value:"2.2 \u767b\u5f55\u7528\u6237\u8bbe\u7f6e",id:"22-\u767b\u5f55\u7528\u6237\u8bbe\u7f6e",level:3},{value:"2.3 LDAP\u8bbe\u7f6e",id:"23-ldap\u8bbe\u7f6e",level:3},{value:"2.4 \u5173\u95ed\u8d44\u6e90\u68c0\u67e5",id:"24-\u5173\u95ed\u8d44\u6e90\u68c0\u67e5",level:3},{value:"2.5 \u5f00\u542f\u5f15\u64ce\u8c03\u8bd5",id:"25-\u5f00\u542f\u5f15\u64ce\u8c03\u8bd5",level:3},{value:"2.6 Hive\u5143\u6570\u636e\u914d\u7f6e",id:"26-hive\u5143\u6570\u636e\u914d\u7f6e",level:3},{value:"2.7 Linkis \u6570\u636e\u5e93\u914d\u7f6e",id:"27-linkis-\u6570\u636e\u5e93\u914d\u7f6e",level:3},{value:"2.8 Linkis Session \u7f13\u5b58\u914d\u7f6e",id:"28-linkis-session-\u7f13\u5b58\u914d\u7f6e",level:3},{value:"2.9 Linkis \u6a21\u5757\u5f00\u53d1\u914d\u7f6e",id:"29-linkis-\u6a21\u5757\u5f00\u53d1\u914d\u7f6e",level:3},{value:"2.10 Linkis \u6a21\u5757\u5f00\u53d1\u914d\u7f6e",id:"210-linkis-\u6a21\u5757\u5f00\u53d1\u914d\u7f6e",level:3},{value:"2.11 Linkis \u6587\u4ef6\u7cfb\u7edf\u53ca\u7269\u6599\u5b58\u653e\u8def\u5f84",id:"211-linkis-\u6587\u4ef6\u7cfb\u7edf\u53ca\u7269\u6599\u5b58\u653e\u8def\u5f84",level:3}],s={toc:d};function m(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u8f6f\u786c\u4ef6\u73af\u5883\u5efa\u8bae\u914d\u7f6e"},"1 \u8f6f\u786c\u4ef6\u73af\u5883\u5efa\u8bae\u914d\u7f6e"),(0,l.kt)("p",null,"Linkis \u5728\u4e0a\u5c42\u5e94\u7528\u7a0b\u5e8f\u548c\u5e95\u5c42\u5f15\u64ce\u4e4b\u95f4\u6784\u5efa\u4e86\u4e00\u5c42\u8ba1\u7b97\u4e2d\u95f4\u4ef6\u3002 \u4f5c\u4e3a\u4e00\u6b3e\u5f00\u6e90\u5206\u5e03\u5f0f\u8ba1\u7b97\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u5f88\u597d\u5730\u90e8\u7f72\u548c\u8fd0\u884c\u5728 Intel \u67b6\u6784\u670d\u52a1\u5668\u53ca\u4e3b\u6d41\u865a\u62df\u5316\u73af\u5883\u4e0b\uff0c\u5e76\u652f\u6301\u4e3b\u6d41\u7684Linux\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883"),(0,l.kt)("h3",{id:"11-linux-\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u8981\u6c42"},"1.1 Linux \u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u8981\u6c42"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Red Hat Enterprise Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0 \u53ca\u4ee5\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0 \u53ca\u4ee5\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Oracle Enterprise Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0 \u53ca\u4ee5\u4e0a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ubuntu LTS"),(0,l.kt)("td",{parentName:"tr",align:null},"16.04 \u53ca\u4ee5\u4e0a")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4ee5\u4e0a Linux \u64cd\u4f5c\u7cfb\u7edf\u53ef\u8fd0\u884c\u5728\u7269\u7406\u670d\u52a1\u5668\u4ee5\u53ca VMware\u3001KVM\u3001XEN \u4e3b\u6d41\u865a\u62df\u5316\u73af\u5883\u4e0a")),(0,l.kt)("h3",{id:"12-\u670d\u52a1\u5668\u5efa\u8bae\u914d\u7f6e"},"1.2 \u670d\u52a1\u5668\u5efa\u8bae\u914d\u7f6e"),(0,l.kt)("p",null,"Linkis \u652f\u6301\u8fd0\u884c\u5728 Intel x86-64 \u67b6\u6784\u7684 64 \u4f4d\u901a\u7528\u786c\u4ef6\u670d\u52a1\u5668\u5e73\u53f0\u3002\u5bf9\u751f\u4ea7\u73af\u5883\u7684\u670d\u52a1\u5668\u786c\u4ef6\u914d\u7f6e\u6709\u4ee5\u4e0b\u5efa\u8bae\uff1a"),(0,l.kt)("h4",{id:"\u751f\u4ea7\u73af\u5883"},"\u751f\u4ea7\u73af\u5883"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"CPU")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5185\u5b58")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u786c\u76d8\u7c7b\u578b")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u7f51\u7edc")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"\u5b9e\u4f8b\u6570\u91cf")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16\u6838+"),(0,l.kt)("td",{parentName:"tr",align:null},"32GB+"),(0,l.kt)("td",{parentName:"tr",align:null},"SAS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5343\u5146\u7f51\u5361"),(0,l.kt)("td",{parentName:"tr",align:null},"1+")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"\u4ee5\u4e0a\u5efa\u8bae\u914d\u7f6e\u4e3a\u90e8\u7f72 Linkis\u7684\u6700\u4f4e\u914d\u7f6e\uff0c\u751f\u4ea7\u73af\u5883\u5f3a\u70c8\u63a8\u8350\u4f7f\u7528\u66f4\u9ad8\u7684\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u786c\u76d8\u5927\u5c0f\u914d\u7f6e\u5efa\u8bae 50GB+ \uff0c\u7cfb\u7edf\u76d8\u548c\u6570\u636e\u76d8\u5206\u5f00"))),(0,l.kt)("h3",{id:"13-\u8f6f\u4ef6\u8981\u6c42"},"1.3 \u8f6f\u4ef6\u8981\u6c42"),(0,l.kt)("p",null,"Linkis\u4e8c\u8fdb\u5236\u5305\u57fa\u4e8e\u4ee5\u4e0b\u8f6f\u4ef6\u7248\u672c\u8fdb\u884c\u7f16\u8bd1\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hadoop"),(0,l.kt)("td",{parentName:"tr",align:null},"2.7.2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hive"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3.3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spark"),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flink"),(0,l.kt)("td",{parentName:"tr",align:null},"1.12.2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"openLooKeng"),(0,l.kt)("td",{parentName:"tr",align:null},"1.5.0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sqoop"),(0,l.kt)("td",{parentName:"tr",align:null},"1.4.6"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ElasticSearch"),(0,l.kt)("td",{parentName:"tr",align:null},"7.6.2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Presto"),(0,l.kt)("td",{parentName:"tr",align:null},"0.234"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Python2"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\n\u5982\u679c\u672c\u5730\u5b89\u88c5\u7ec4\u4ef6\u7248\u672c\u4e0e\u4e0a\u8ff0\u4e0d\u4e00\u81f4\uff0c\u9700\u8981\u8fdb\u884c\u4fee\u6539\u5bf9\u5e94\u7ec4\u4ef6\u7248\u672c\uff0c\u81ea\u884c\u7f16\u8bd1\u4e8c\u8fdb\u5236\u5305\u8fdb\u884c\u5b89\u88c5\u3002")),(0,l.kt)("h3",{id:"14-\u5ba2\u6237\u7aef-web-\u6d4f\u89c8\u5668\u8981\u6c42"},"1.4 \u5ba2\u6237\u7aef Web \u6d4f\u89c8\u5668\u8981\u6c42"),(0,l.kt)("p",null,"Linkis\u63a8\u8350 Chrome 73\u7248\u672c\u8fdb\u884c\u524d\u7aef\u8bbf\u95ee"),(0,l.kt)("h2",{id:"2-\u5e38\u7528\u573a\u666f"},"2 \u5e38\u7528\u573a\u666f"),(0,l.kt)("h3",{id:"21-\u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f"},"2.1 \u5f00\u542f\u6d4b\u8bd5\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5f00\u53d1\u8fc7\u7a0b\u9700\u8981\u514d\u5bc6\u63a5\u53e3\uff0c\u53ef\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis.properties"),"\u66ff\u6362\u6216\u8ffd\u52a0\u6b64\u914d\u7f6e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.test.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a true\uff0c\u6240\u6709\u5fae\u670d\u52a1\u90fd\u652f\u6301\u514d\u5bc6\u767b\u5f55\uff0c\u4e14\u6240\u6709EngineConn\u6253\u5f00\u8fdc\u7a0b\u8c03\u8bd5\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.test.user"),(0,l.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53wds.linkis.test.mode=true\u65f6\uff0c\u514d\u5bc6\u767b\u5f55\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(54237).Z,width:"806",height:"339"})),(0,l.kt)("h3",{id:"22-\u767b\u5f55\u7528\u6237\u8bbe\u7f6e"},"2.2 \u767b\u5f55\u7528\u6237\u8bbe\u7f6e"),(0,l.kt)("p",null,"Apache Linkis \u9ed8\u8ba4\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u6765\u7ba1\u7406admin\u7528\u6237\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway.properties"),"\u66ff\u6362\u6216\u8ffd\u52a0\u6b64\u914d\u7f6e\u3002\u5982\u9700\u591a\u7528\u6237\u53ef\u63a5\u5165LDAP\u5b9e\u73b0\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.admin.user"),(0,l.kt)("td",{parentName:"tr",align:null},"hadoop"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.admin.password"),(0,l.kt)("td",{parentName:"tr",align:null},"123456"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5458\u7528\u6237\u5bc6\u7801")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(32595).Z,width:"1421",height:"583"})),(0,l.kt)("h3",{id:"23-ldap\u8bbe\u7f6e"},"2.3 LDAP\u8bbe\u7f6e"),(0,l.kt)("p",null,"Apache Linkis \u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u63a5\u5165LDAP\u5b9e\u73b0\u591a\u7528\u6237\u7ba1\u7406\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-mg-gateway.properties"),"\u66ff\u6362\u6216\u8ffd\u52a0\u6b64\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.ldap.proxy.url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"LDAP URL\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.ldap.proxy.baseDN"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"LDAP baseDN\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.ldap.proxy.userNameFormat"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(12517).Z,width:"1404",height:"586"})),(0,l.kt)("h3",{id:"24-\u5173\u95ed\u8d44\u6e90\u68c0\u67e5"},"2.4 \u5173\u95ed\u8d44\u6e90\u68c0\u67e5"),(0,l.kt)("p",null,"Apache Linkis \u63d0\u4ea4\u4efb\u52a1\u65f6\u6709\u65f6\u4f1a\u8c03\u8bd5\u5f02\u5e38\uff0c\u5982\uff1a\u8d44\u6e90\u4e0d\u8db3\uff1b\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager.properties"),"\u66ff\u6362\u6216\u8ffd\u52a0\u6b64\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.manager.rm.request.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u68c0\u67e5")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(60672).Z,width:"1305",height:"547"})),(0,l.kt)("h3",{id:"25-\u5f00\u542f\u5f15\u64ce\u8c03\u8bd5"},"2.5 \u5f00\u542f\u5f15\u64ce\u8c03\u8bd5"),(0,l.kt)("p",null,"Apache Linkis EC\u53ef\u4ee5\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager.properties"),"\u66ff\u6362\u6216\u8ffd\u52a0\u6b64\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.engineconn.debug.enable"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u5f15\u64ce\u8c03\u8bd5")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2699).Z,width:"1220",height:"544"})),(0,l.kt)("h3",{id:"26-hive\u5143\u6570\u636e\u914d\u7f6e"},"2.6 Hive\u5143\u6570\u636e\u914d\u7f6e"),(0,l.kt)("p",null,"Apache Linkis \u7684public-service\u670d\u52a1\u9700\u8981\u8bfb\u53d6hive\u7684\u5143\u6570\u636e\uff1b\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-ps-publicservice.properties"),"\u66ff\u6362\u6216\u8ffd\u52a0\u6b64\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hive.meta.url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"HiveMetaStore\u6570\u636e\u5e93\u7684URL\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hive.meta.user"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"HiveMetaStore\u6570\u636e\u5e93\u7684user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hive.meta.password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"HiveMetaStore\u6570\u636e\u5e93\u7684password")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(47661).Z,width:"1183",height:"779"})),(0,l.kt)("h3",{id:"27-linkis-\u6570\u636e\u5e93\u914d\u7f6e"},"2.7 Linkis \u6570\u636e\u5e93\u914d\u7f6e"),(0,l.kt)("p",null,"Apache Linkis \u8bbf\u95ee\u9ed8\u8ba4\u4f7f\u7528Mysql\u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis.properties"),"\u66ff\u6362\u6216\u8ffd\u52a0\u6b64\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.datasource.url"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\uff1ajdbc:mysql://127.0.0.1:3306/dss?characterEncoding=UTF-8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.datasource.username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u7528\u6237\u540d\uff0c\u4f8b\u5982\uff1aroot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.datasource.password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5bc6\u7801\uff0c\u4f8b\u5982\uff1aroot")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(68377).Z,width:"831",height:"536"})),(0,l.kt)("h3",{id:"28-linkis-session-\u7f13\u5b58\u914d\u7f6e"},"2.8 Linkis Session \u7f13\u5b58\u914d\u7f6e"),(0,l.kt)("p",null,"Apache Linkis \u652f\u6301\u4f7f\u7528redis\u8fdb\u884csession\u7684\u5171\u4eab\uff1b\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis.properties"),"\u66ff\u6362\u6216\u8ffd\u52a0\u6b64\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.cache.enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.host"),(0,l.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u673a\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.port"),(0,l.kt)("td",{parentName:"tr",align:null},"6379"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u53e3\uff0c\u4f8b\u5982")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.password"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(30450).Z,width:"753",height:"403"})),(0,l.kt)("h3",{id:"29-linkis-\u6a21\u5757\u5f00\u53d1\u914d\u7f6e"},"2.9 Linkis \u6a21\u5757\u5f00\u53d1\u914d\u7f6e"),(0,l.kt)("p",null,"Apache Linkis \u5f00\u53d1\u65f6\u53ef\u901a\u8fc7\u6b64\u53c2\u6570\uff0c\u81ea\u5b9a\u4e49\u52a0\u8f7d\u6a21\u5757\u7684\u6570\u636e\u5e93\u3001Rest\u63a5\u53e3\u3001\u5b9e\u4f53\u5bf9\u8c61\uff1b\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-ps-publicservice.properties"),"\u8fdb\u884c\u4fee\u6539\uff0c\u591a\u4e2a\u6a21\u5757\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u5272\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.restful.scan.packages"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"restful \u626b\u63cf\u5305\uff0c\u4f8b\u5982\uff1aorg.apache.linkis.basedatamanager.server.restful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.mapperLocations"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"mybatis mapper\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982\uff1a classpath",(0,l.kt)("em",{parentName:"td"},":org/apache/linkis/basedatamanager/server/dao/mapper/"),".xml")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.typeAliasesPackage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u522b\u540d\u626b\u63cf\u5305\uff0c\u4f8b\u5982\uff1aorg.apache.linkis.basedatamanager.server.domain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.BasePackage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93dao\u5c42\u626b\u63cf\uff0c\u4f8b\u5982\uff1aorg.apache.linkis.basedatamanager.server.dao")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(40217).Z,width:"843",height:"590"})),(0,l.kt)("h3",{id:"210-linkis-\u6a21\u5757\u5f00\u53d1\u914d\u7f6e"},"2.10 Linkis \u6a21\u5757\u5f00\u53d1\u914d\u7f6e"),(0,l.kt)("p",null,"Apache Linkis \u5f00\u53d1\u65f6\u53ef\u901a\u8fc7\u6b64\u53c2\u6570\uff0c\u81ea\u5b9a\u4e49\u52a0\u8f7d\u6a21\u5757\u7684\u8def\u7531\uff1b\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis.properties"),"\u8fdb\u884c\u4fee\u6539\uff0c\u591a\u4e2a\u6a21\u5757\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u5272\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.gateway.conf.publicservice.list"),(0,l.kt)("td",{parentName:"tr",align:null},"cs,contextservice,data-source-manager,metadataQuery,metadatamanager,query,jobhistory,application,configuration,filesystem,udf,variable,microservice,errorcode,bml,datasource,basedata-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"publicservice\u670d\u52a1\u652f\u6301\u8def\u7531\u7684\u6a21\u5757")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(87743).Z,width:"1205",height:"461"})),(0,l.kt)("h3",{id:"211-linkis-\u6587\u4ef6\u7cfb\u7edf\u53ca\u7269\u6599\u5b58\u653e\u8def\u5f84"},"2.11 Linkis \u6587\u4ef6\u7cfb\u7edf\u53ca\u7269\u6599\u5b58\u653e\u8def\u5f84"),(0,l.kt)("p",null,"Apache Linkis \u5f00\u53d1\u65f6\u53ef\u901a\u8fc7\u6b64\u53c2\u6570\uff0c\u81ea\u5b9a\u4e49\u52a0\u8f7d\u6a21\u5757\u7684\u8def\u7531\uff1b\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"linkis.properties"),"\u8fdb\u884c\u4fee\u6539\uff0c\u591a\u4e2a\u6a21\u5757\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u5272\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.filesystem.root.path"),(0,l.kt)("td",{parentName:"tr",align:null},"file:///tmp/linkis/"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u7528\u6237\u76ee\u5f55\uff0c\u9700\u5728\u8be5\u76ee\u5f55\u4e0b\u5efa\u7acb\u4ee5\u7528\u6237\u540d\u4e3a\u540d\u79f0\u7684\u6587\u4ef6\u5939")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.filesystem.hdfs.root.path"),(0,l.kt)("td",{parentName:"tr",align:null},"hdfs:///tmp/"),(0,l.kt)("td",{parentName:"tr",align:null},"HDFS\u7528\u6237\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.bml.is.hdfs"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528hdfs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.bml.hdfs.prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"/apps-data"),(0,l.kt)("td",{parentName:"tr",align:null},"hdfs\u8def\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wds.linkis.bml.local.prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"/apps-data"),(0,l.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u8def\u5f84")))),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(99435).Z,width:"540",height:"344"})))}m.isMDXComponent=!0},40217:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/deverlop-conf-09543dc2b1c9e5b57ffbc9f87a402873.png"},2699:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/engine-debug-d6d34a5e0ff4318bee1c2ec6145d2aad.png"},99435:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/fs-conf-4dd57caa5f812496174bda5b25d6f36b.png"},47661:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/hive-meta-d9866b2a627ba0e9323b902bce2c5c94.png"},12517:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/ldap-d8623897124ad621c0013d7e35c3bc22.png"},68377:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/linkis-db-c9e5a90db880655bc6169b28fbc5822c.png"},87743:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/list-conf-63213b57ab66a41758c14cdb731a9731.png"},32595:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/login-user-058dbc811831c9c5a3d647032f4b77a0.png"},30450:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/redis-93c88ca8d619cc6b131b5b77d31097c3.png"},60672:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/resource-enable-548b1bfdb4f8e206c4ddbd4485f65a73.png"},54237:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/test-mode-ab84afe3444112b960a11dc9c04d24b1.png"}}]);