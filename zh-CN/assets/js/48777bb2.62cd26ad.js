"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[91188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u57fa\u7840\u6570\u636e\u7ba1\u7406",sidebar_position:8},o=void 0,c={unversionedId:"user-guide/control-panel/basicdata-management",id:"user-guide/control-panel/basicdata-management",title:"\u57fa\u7840\u6570\u636e\u7ba1\u7406",description:"\u6570\u636e\u6e90\u7ba1\u7406\u9875\u9762\u53ef\u4ee5\u5bf9\u7528\u6237\u4ee4\u724c\u3001\u9519\u8bef\u7801\u3001\u6269\u5c55\u8d44\u6e90\u3001\u5f15\u64ce\u7269\u6599\u7b49\u6570\u636e\u8fdb\u884c\u7ba1\u7406\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/basicdata-management.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/basicdata-management",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/basicdata-management",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/control-panel/basicdata-management.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"\u57fa\u7840\u6570\u636e\u7ba1\u7406",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u6e90\u7ba1\u7406",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/datasource-management"},next:{title:"UDF \u7684\u4f7f\u7528",permalink:"/zh-CN/docs/1.3.2/user-guide/control-panel/udf-function"}},l={},s=[{value:"1. \u4ee4\u724c\u7ba1\u7406",id:"1-\u4ee4\u724c\u7ba1\u7406",level:2},{value:"2. \u9519\u8bef\u7801\u7ba1\u7406",id:"2-\u9519\u8bef\u7801\u7ba1\u7406",level:2},{value:"2.1 \u9519\u8bef\u7801\u5217\u8868",id:"21-\u9519\u8bef\u7801\u5217\u8868",level:3},{value:"2.1 \u5e38\u89c1\u9519\u8bef\u7801\u95ee\u9898\u89e3\u51b3",id:"21-\u5e38\u89c1\u9519\u8bef\u7801\u95ee\u9898\u89e3\u51b3",level:3},{value:"3. \u6269\u5c55\u8d44\u6e90\u7ba1\u7406",id:"3-\u6269\u5c55\u8d44\u6e90\u7ba1\u7406",level:2},{value:"4. \u5f15\u64ce\u7269\u6599\u7ba1\u7406",id:"4-\u5f15\u64ce\u7269\u6599\u7ba1\u7406",level:2}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u7ba1\u7406\u9875\u9762\u53ef\u4ee5\u5bf9\u7528\u6237\u4ee4\u724c\u3001\u9519\u8bef\u7801\u3001\u6269\u5c55\u8d44\u6e90\u3001\u5f15\u64ce\u7269\u6599\u7b49\u6570\u636e\u8fdb\u884c\u7ba1\u7406\u3002"),(0,a.kt)("h2",{id:"1-\u4ee4\u724c\u7ba1\u7406"},"1. \u4ee4\u724c\u7ba1\u7406"),(0,a.kt)("p",null,"\u7528\u4e8e\u7ba1\u7406\u5404\u5e94\u7528 Token \u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(20747).Z,width:"1901",height:"693"})),(0,a.kt)("h2",{id:"2-\u9519\u8bef\u7801\u7ba1\u7406"},"2. \u9519\u8bef\u7801\u7ba1\u7406"),(0,a.kt)("h3",{id:"21-\u9519\u8bef\u7801\u5217\u8868"},"2.1 \u9519\u8bef\u7801\u5217\u8868"),(0,a.kt)("p",null,"\u5217\u51fa\u9519\u8bef\u7801\u4fe1\u606f\uff0c\u53ef\u4ee5\u6839\u636e\u9519\u8bef\u7801\u6216\u9519\u8bef\u63cf\u8ff0\u8fdb\u884c\u67e5\u8be2\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(33100).Z,width:"1892",height:"630"})),(0,a.kt)("h3",{id:"21-\u5e38\u89c1\u9519\u8bef\u7801\u95ee\u9898\u89e3\u51b3"},"2.1 \u5e38\u89c1\u9519\u8bef\u7801\u95ee\u9898\u89e3\u51b3"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.2/tuning-and-troubleshooting/error-guide/error-code"},"\u5e38\u89c1\u9519\u8bef\u7801\u53ca\u5904\u7406\u65b9\u6cd5")),(0,a.kt)("h2",{id:"3-\u6269\u5c55\u8d44\u6e90\u7ba1\u7406"},"3. \u6269\u5c55\u8d44\u6e90\u7ba1\u7406"),(0,a.kt)("p",null,"\u7528\u4e8e\u7ba1\u7406\u6269\u5c55\u8d44\u6e90\uff0c\u4f8b\u5982 yarn \u94fe\u63a5 url \u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87975).Z,width:"1894",height:"684"})),(0,a.kt)("h2",{id:"4-\u5f15\u64ce\u7269\u6599\u7ba1\u7406"},"4. \u5f15\u64ce\u7269\u6599\u7ba1\u7406"),(0,a.kt)("p",null,"\u7528\u4e8e\u7ba1\u7406 Linkis \u5f15\u64ce\u7269\u6599\uff0c\u5305\u62ec\u5f15\u64ce\u63d2\u4ef6\u7684\u521b\u5efa\u3001\u66f4\u65b0\u4ee5\u53ca\u5220\u9664\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50686).Z,width:"1897",height:"682"})))}p.isMDXComponent=!0},50686:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/basic-bml-0a0f9126602d9dfc48e0d84c2d15602c.png"},33100:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/basic-code-d6c41e0340ebc91113cd272736d232e4.png"},87975:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/basic-ext-88913f733e74649f5db2f3c823d478e2.png"},20747:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/basic-token-a136eda03baf33662929cc9749b2ccf9.png"}}]);