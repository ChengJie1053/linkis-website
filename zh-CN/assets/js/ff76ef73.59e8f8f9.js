"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[18975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),o=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=o(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=o(t),k=a,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||l;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=k;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[c]="string"==typeof e?e:a,r[1]=d;for(var o=2;o<l;o++)r[o]=t[o];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=t(87462),a=(t(67294),t(3905));const l={title:"JDBC",sidebar_position:5},r=void 0,d={unversionedId:"engine-usage/jdbc",id:"version-1.3.1/engine-usage/jdbc",title:"JDBC",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 Linkis \u4e2d\uff0c JDBC \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/engine-usage/jdbc.md",sourceDirName:"engine-usage",slug:"/engine-usage/jdbc",permalink:"/zh-CN/docs/1.3.1/engine-usage/jdbc",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.1/engine-usage/jdbc.md",tags:[],version:"1.3.1",sidebarPosition:5,frontMatter:{title:"JDBC",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Shell",permalink:"/zh-CN/docs/1.3.1/engine-usage/shell"},next:{title:"Flink",permalink:"/zh-CN/docs/1.3.1/engine-usage/flink"}},s={},o=[{value:"1. \u524d\u7f6e\u5de5\u4f5c",id:"1-\u524d\u7f6e\u5de5\u4f5c",level:2},{value:"1.1 \u73af\u5883\u5b89\u88c5",id:"11-\u73af\u5883\u5b89\u88c5",level:3},{value:"1.2 \u73af\u5883\u9a8c\u8bc1\uff08\u4ee5 <code>Mysql</code> \u4e3a\u4f8b\uff09",id:"12-\u73af\u5883\u9a8c\u8bc1\u4ee5-mysql-\u4e3a\u4f8b",level:3},{value:"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5",id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5",level:2},{value:"2.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09\u975e\u9ed8\u8ba4\u5f15\u64ce",id:"21-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce",level:3},{value:"2.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",id:"22-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d",level:3},{value:"2.3 \u5f15\u64ce\u5237\u65b0",id:"23-\u5f15\u64ce\u5237\u65b0",level:3},{value:"2.3.1 \u91cd\u542f\u5237\u65b0",id:"231-\u91cd\u542f\u5237\u65b0",level:4},{value:"2.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",id:"232-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f",level:3},{value:"3. \u5f15\u64ce\u7684\u4f7f\u7528",id:"3-\u5f15\u64ce\u7684\u4f7f\u7528",level:2},{value:"3.1 \u901a\u8fc7 <code>Linkis-cli</code> \u63d0\u4ea4\u4efb\u52a1",id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3.2 \u901a\u8fc7 <code>Linkis SDK</code> \u63d0\u4ea4\u4efb\u52a1",id:"32-\u901a\u8fc7-linkis-sdk-\u63d0\u4ea4\u4efb\u52a1",level:3},{value:"3.3 \u591a\u6570\u636e\u6e90\u652f\u6301",id:"33-\u591a\u6570\u636e\u6e90\u652f\u6301",level:3},{value:"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e",level:2},{value:"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e",level:3},{value:"4.2 \u914d\u7f6e\u4fee\u6539",id:"42-\u914d\u7f6e\u4fee\u6539",level:3},{value:"4.2.1 \u7ba1\u7406\u53f0\u914d\u7f6e",id:"421-\u7ba1\u7406\u53f0\u914d\u7f6e",level:4},{value:"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e",level:4},{value:"4.3 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",id:"43-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868",level:3}],p={toc:o},c="wrapper";function u(e){let{components:n,...l}=e;return(0,a.kt)(c,(0,i.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u4e2d\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u63d2\u4ef6\u7684\u5b89\u88c5\u3001\u4f7f\u7528\u548c\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"1-\u524d\u7f6e\u5de5\u4f5c"},"1. \u524d\u7f6e\u5de5\u4f5c"),(0,a.kt)("h3",{id:"11-\u73af\u5883\u5b89\u88c5"},"1.1 \u73af\u5883\u5b89\u88c5"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\uff0c\u60a8\u9700\u8981\u51c6\u5907 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u8fde\u63a5\u4fe1\u606f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," \u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\u7b49"),(0,a.kt)("h3",{id:"12-\u73af\u5883\u9a8c\u8bc1\u4ee5-mysql-\u4e3a\u4f8b"},"1.2 \u73af\u5883\u9a8c\u8bc1\uff08\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Mysql")," \u4e3a\u4f8b\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql -uroot -P 3306 -h 127.0.0.1 -p 123456\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\u4ee3\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u8fde\u63a5\u4fe1\u606f\u53ef\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 9\nServer version: 5.7.39 MySQL Community Server (GPL)\n\nCopyright (c) 2000, 2022, Oracle and/or its affiliates.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql>\n")),(0,a.kt)("h2",{id:"2-\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5"},"2. \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5"),(0,a.kt)("h3",{id:"21-\u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\u4e8c\u9009\u4e00\u975e\u9ed8\u8ba4\u5f15\u64ce"},"2.1 \u5f15\u64ce\u63d2\u4ef6\u51c6\u5907\uff08\u4e8c\u9009\u4e00\uff09",(0,a.kt)("a",{parentName:"h3",href:"/zh-CN/docs/1.3.1/engine-usage/overview"},"\u975e\u9ed8\u8ba4\u5f15\u64ce")),(0,a.kt)("p",null,"\u65b9\u5f0f\u4e00\uff1a\u76f4\u63a5\u4e0b\u8f7d\u5f15\u64ce\u63d2\u4ef6\u5305"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis \u5f15\u64ce\u63d2\u4ef6\u4e0b\u8f7d")),(0,a.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff1a\u5355\u72ec\u7f16\u8bd1\u5f15\u64ce\u63d2\u4ef6\uff08\u9700\u8981\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"maven")," \u73af\u5883\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u7f16\u8bd1\ncd ${linkis_code_dir}/linkis-engineconn-plugins/jdbc/\nmvn clean install\n# \u7f16\u8bd1\u51fa\u6765\u7684\u5f15\u64ce\u63d2\u4ef6\u5305\uff0c\u4f4d\u4e8e\u5982\u4e0b\u76ee\u5f55\u4e2d\n${linkis_code_dir}/linkis-engineconn-plugins/jdbc/target/out/\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/deployment/install-engineconn"},"EngineConnPlugin \u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")),(0,a.kt)("h3",{id:"22-\u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"},"2.2 \u5f15\u64ce\u63d2\u4ef6\u7684\u4e0a\u4f20\u548c\u52a0\u8f7d"),(0,a.kt)("p",null,"\u5c06 2.1 \u4e2d\u7684\u5f15\u64ce\u63d2\u4ef6\u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u5f15\u64ce\u76ee\u5f55\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"\u4e0a\u4f20\u540e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u6240\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 jdbc\n\u2502\xa0\xa0 \u251c\u2500\u2500 dist\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 v4\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 lib\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugin\n\u2502\xa0\xa0     \u2514\u2500\u2500 4\n")),(0,a.kt)("h3",{id:"23-\u5f15\u64ce\u5237\u65b0"},"2.3 \u5f15\u64ce\u5237\u65b0"),(0,a.kt)("h4",{id:"231-\u91cd\u542f\u5237\u65b0"},"2.3.1 \u91cd\u542f\u5237\u65b0"),(0,a.kt)("p",null,"\u901a\u8fc7\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," \u670d\u52a1\u5237\u65b0\u5f15\u64ce"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h3",{id:"232-\u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"},"2.3.2 \u68c0\u67e5\u5f15\u64ce\u662f\u5426\u5237\u65b0\u6210\u529f"),(0,a.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," \u8fd9\u5f20\u8868\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"last_update_time")," \u662f\u5426\u4e3a\u89e6\u53d1\u5237\u65b0\u7684\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#\u767b\u9646\u5230 `linkis` \u7684\u6570\u636e\u5e93 \nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,a.kt)("h2",{id:"3-\u5f15\u64ce\u7684\u4f7f\u7528"},"3. \u5f15\u64ce\u7684\u4f7f\u7528"),(0,a.kt)("h3",{id:"31-\u901a\u8fc7-linkis-cli-\u63d0\u4ea4\u4efb\u52a1"},"3.1 \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")," \u63d0\u4ea4\u4efb\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType jdbc-4 \\\n-codeType jdbc -code "show tables" \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"\u66f4\u591a ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," \u547d\u4ee4\u53c2\u6570\u53c2\u8003\uff1a ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/user-guide/linkiscli-manual"},"Linkis-Cli \u4f7f\u7528")),(0,a.kt)("h3",{id:"32-\u901a\u8fc7-linkis-sdk-\u63d0\u4ea4\u4efb\u52a1"},"3.2 \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis SDK")," \u63d0\u4ea4\u4efb\u52a1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Java")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Scala")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"SDK")," \u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.3.1/user-guide/sdk-manual"},"JAVA SDK Manual"),"\u3002\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u4efb\u52a1\u60a8\u53ea\u9700\u8981\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"Demo")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"EngineConnType")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeType")," \u53c2\u6570\u5373\u53ef:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> labels = new HashMap<String, Object>();\nlabels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "jdbc-4"); // required engineType Label\nlabels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\nlabels.put(LabelKeyConstant.CODE_TYPE_KEY, "jdbc"); // required codeType\n')),(0,a.kt)("h3",{id:"33-\u591a\u6570\u636e\u6e90\u652f\u6301"},"3.3 \u591a\u6570\u636e\u6e90\u652f\u6301"),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis 1.2.0")," \u5f00\u59cb\uff0c\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u591a\u6570\u636e\u6e90\u7684\u652f\u6301\uff0c\u6211\u4eec\u9996\u5148\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u7ba1\u7406\u4e0d\u540c\u7684\u6570\u636e\u6e90\u3002\u5730\u5740\uff1a\u767b\u9646\u7ba1\u7406\u53f0--\x3e\u6570\u636e\u6e90\u7ba1\u7406--\x3e\u65b0\u589e\u6570\u636e\u6e90"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(64596).Z,width:"1904",height:"827"})),(0,a.kt)("p",null,"\u56fe3-3 \u6570\u636e\u6e90\u7ba1\u7406"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1964).Z,width:"800",height:"751"})),(0,a.kt)("p",null,"\u56fe3-4 \u6570\u636e\u6e90\u8fde\u63a5\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u6dfb\u52a0\u5b8c\u6210\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u7684\u591a\u6570\u636e\u6e90\u5207\u6362\u529f\u80fd\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a\n1\u3001 \u901a\u8fc7\u63a5\u53e3\u53c2\u6570\u6307\u5b9a\u6570\u636e\u6e90\u540d\u79f0\u53c2\u6570\n\u53c2\u6570\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "executionContent": {\n    "code": "show databases",\n    "runType": "jdbc"\n  },\n  "params": {\n    "variable": {},\n    "configuration": {\n      "startup": {},\n      "runtime": {\n        "wds.linkis.engine.runtime.datasource": "test_mysql"\n      }\n    }\n  },\n  "source": {\n    "scriptPath": ""\n  },\n  "labels": {\n    "engineType": "jdbc-4",\n    "userCreator": "hadoop-IDE"\n  }\n}\n')),(0,a.kt)("p",null,"\u53c2\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"wds.linkis.engine.runtime.datasource")," \u4e3a\u56fa\u5b9a\u540d\u79f0\u7684\u914d\u7f6e\uff0c\u4e0d\u8981\u968f\u610f\u4fee\u6539\u540d\u79f0\u5b9a\u4e49"),(0,a.kt)("p",null,"2\u3001 \u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"DSS")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Scripts")," \u4ee3\u7801\u63d0\u4ea4\u5165\u53e3\u4e0b\u62c9\u7b5b\u9009\u9700\u8981\u63d0\u4ea4\u7684\u6570\u636e\u6e90\uff0c\u5982\u4e0b\u56fe\uff1a\n",(0,a.kt)("img",{src:t(90553).Z,width:"728",height:"240"}),"\n\u5f53\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"dss-1.1.0")," \u8fd8\u6682\u4e0d\u652f\u6301\u4e0b\u62c9\u9009\u62e9\u6570\u636e\u6e90\u540d\u79f0\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"PR")," \u5728\u5f00\u53d1\u4e2d\uff0c\u53ef\u4ee5\u7b49\u540e\u7eed\u53d1\u7248\u6216\u5173\u6ce8\u76f8\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"PR")," \uff1a\n\uff08",(0,a.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/DataSphereStudio/issues/940%EF%BC%89"},"https://github.com/WeBankFinTech/DataSphereStudio/issues/940\uff09")),(0,a.kt)("p",null,"\u591a\u6570\u636e\u6e90\u7684\u529f\u80fd\u8bf4\u660e\uff1a"),(0,a.kt)("p",null,"1\uff09\u5728\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u5bf9\u6570\u636e\u6e90\u7684\u652f\u6301\u4e0d\u591f\u5b8c\u5584\uff0c\u5c24\u5176\u662f\u642d\u914d ",(0,a.kt)("inlineCode",{parentName:"p"},"Scripts")," \u4f7f\u7528\u7684\u65f6\u5019\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u811a\u672c\u7c7b\u578b\u53ea\u80fd\u7ed1\u5b9a\u63a7\u5236\u53f0\u7684\u4e00\u5957 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u53c2\u6570\uff0c\n\u5f53\u6211\u4eec\u6709\u591a\u6570\u636e\u6e90\u7684\u5207\u6362\u9700\u6c42\u65f6\uff0c\u53ea\u80fd\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u7684\u8fde\u63a5\u53c2\u6570\uff0c\u6bd4\u8f83\u9ebb\u70e6\u3002"),(0,a.kt)("p",null,"2\uff09\u914d\u5408\u6570\u636e\u6e90\u7ba1\u7406\uff0c\u6211\u4eec\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u7684\u591a\u6570\u636e\u6e90\u5207\u6362\u529f\u80fd\uff0c\u53ef\u4ee5\u5b9e\u73b0\u53ea\u8bbe\u7f6e\u6570\u636e\u6e90\u540d\u79f0\uff0c\u5c31\u53ef\u628a\u4f5c\u4e1a\u63d0\u4ea4\u5230\u4e0d\u540c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u670d\u52a1\u4e4b\u4e0a\uff0c\u666e\u901a\u7528\u6237\u4e0d\u9700\u8981\n\u7ef4\u62a4\u6570\u636e\u6e90\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u907f\u514d\u4e86\u914d\u7f6e\u7e41\u7410\uff0c\u4e5f\u6ee1\u8db3\u4e86\u6570\u636e\u6e90\u8fde\u63a5\u5bc6\u7801\u7b49\u914d\u7f6e\u7684\u5b89\u5168\u6027\u9700\u8981\u3002"),(0,a.kt)("p",null,"3\uff09\u591a\u6570\u636e\u6e90\u7ba1\u7406\u4e2d\u8bbe\u7f6e\u7684\u6570\u636e\u6e90\uff0c\u53ea\u6709\u53d1\u5e03\u4e4b\u540e\uff0c\u5e76\u4e14\u6ca1\u6709\u8fc7\u671f\u7684\u6570\u636e\u6e90\u624d\u80fd\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u52a0\u8f7d\u5230\uff0c\u5426\u5219\u4f1a\u53cd\u9988\u7ed9\u7528\u6237\u4e0d\u540c\u7c7b\u578b\u7684\u5f02\u5e38\u63d0\u793a\u3002"),(0,a.kt)("p",null,"4\uff09 ",(0,a.kt)("inlineCode",{parentName:"p"},"JDBC")," \u5f15\u64ce\u53c2\u6570\u7684\u52a0\u8f7d\u4f18\u5148\u7ea7\u4e3a\uff1a\u4efb\u52a1\u63d0\u4ea4\u4f20\u53c2 > \u9009\u62e9\u6570\u636e\u6e90\u7684\u53c2\u6570 > \u63a7\u5236\u53f0JDBC\u5f15\u64ce\u7684\u53c2\u6570"),(0,a.kt)("h2",{id:"4-\u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"},"4. \u5f15\u64ce\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("h3",{id:"41-\u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"},"4.1 \u9ed8\u8ba4\u914d\u7f6e\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.connect.url"),(0,a.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://127.0.0.1:10000"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"jdbc\u8fde\u63a5\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.driver"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"jdbc\u8fde\u63a5\u9a71\u52a8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.username"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linknis.jdbc.password"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u94fe\u63a5\u5bc6\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.connect.max"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"jdbc\u5f15\u64ce\u6700\u5927\u8fde\u63a5\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wds.linkis.jdbc.version"),(0,a.kt)("td",{parentName:"tr",align:null},"jdbc4"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"jdbc\u7248\u672c")))),(0,a.kt)("h3",{id:"42-\u914d\u7f6e\u4fee\u6539"},"4.2 \u914d\u7f6e\u4fee\u6539"),(0,a.kt)("p",null,"\u5982\u679c\u9ed8\u8ba4\u53c2\u6570\u4e0d\u6ee1\u8db3\u65f6\uff0c\u6709\u5982\u4e0b\u51e0\u4e2d\u65b9\u5f0f\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u57fa\u7840\u53c2\u6570\u914d\u7f6e"),(0,a.kt)("h4",{id:"421-\u7ba1\u7406\u53f0\u914d\u7f6e"},"4.2.1 \u7ba1\u7406\u53f0\u914d\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jdbc",src:t(40464).Z,width:"1518",height:"702"})),(0,a.kt)("p",null,"\u6ce8\u610f: \u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"IDE")," \u6807\u7b7e\u4e0b\u7684\u914d\u7f6e\u540e\u9700\u8981\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"-creator IDE")," \u624d\u4f1a\u751f\u6548\uff08\u5176\u5b83\u6807\u7b7e\u7c7b\u4f3c\uff09\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -creator IDE \\\n-engineType jdbc-4 -codeType jdbc \\\n-code "show tables"  \\\n-submitUser hadoop -proxyUser hadoop \\\n-runtimeMap wds.linkis.jdbc.connect.url=jdbc:mysql://127.0.0.1:3306 \\\n-runtimeMap wds.linkis.jdbc.driver=com.mysql.jdbc.Driver \\\n-runtimeMap wds.linkis.jdbc.username=root \\\n-runtimeMap wds.linkis.jdbc.password=123456 \\\n')),(0,a.kt)("h4",{id:"422-\u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"},"4.2.2 \u4efb\u52a1\u63a5\u53e3\u914d\u7f6e"),(0,a.kt)("p",null,"\u63d0\u4ea4\u4efb\u52a1\u63a5\u53e3\uff0c\u901a\u8fc7\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")," \u8fdb\u884c\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'http \u8bf7\u6c42\u53c2\u6570\u793a\u4f8b \n{\n    "executionContent": {"code": "show databases;", "runType":  "jdbc"},\n    "params": {\n                    "variable": {},\n                    "configuration": {\n                            "runtime": {\n                                    "wds.linkis.jdbc.connect.url":"jdbc:mysql://127.0.0.1:3306/test",  \n                                    "wds.linkis.jdbc.driver":"com.mysql.jdbc.Driver",\n                                    "wds.linkis.jdbc.username":"test",\n                                    "wds.linkis.jdbc.password":"test23"\n                                }\n                            }\n                    },\n    "labels": {\n        "engineType": "jdbc-4",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')),(0,a.kt)("h3",{id:"43-\u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"},"4.3 \u5f15\u64ce\u76f8\u5173\u6570\u636e\u8868"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," \u662f\u901a\u8fc7\u5f15\u64ce\u6807\u7b7e\u6765\u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u6240\u6d89\u53ca\u7684\u6570\u636e\u8868\u4fe1\u606f\u5982\u4e0b\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis_ps_configuration_config_key:  \u63d2\u5165\u5f15\u64ce\u7684\u914d\u7f6e\u53c2\u6570\u7684key\u548c\u9ed8\u8ba4values\nlinkis_cg_manager_label\uff1a\u63d2\u5165\u5f15\u64celabel\u5982\uff1ajdbc-4\nlinkis_ps_configuration_category\uff1a \u63d2\u5165\u5f15\u64ce\u7684\u76ee\u5f55\u5173\u8054\u5173\u7cfb\nlinkis_ps_configuration_config_value\uff1a \u63d2\u5165\u5f15\u64ce\u9700\u8981\u5c55\u793a\u7684\u914d\u7f6e\nlinkis_ps_configuration_key_engine_relation:\u914d\u7f6e\u9879\u548c\u5f15\u64ce\u7684\u5173\u8054\u5173\u7cfb\n")),(0,a.kt)("p",null,"\u8868\u4e2d\u4e0e\u5f15\u64ce\u76f8\u5173\u7684\u521d\u59cb\u6570\u636e\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variable\nSET @JDBC_LABEL=\"jdbc-4\";\nSET @JDBC_ALL=CONCAT('*-*,',@JDBC_LABEL);\nSET @JDBC_IDE=CONCAT('*-IDE,',@JDBC_LABEL);\n\n-- engine label\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @JDBC_ALL, 'OPTIONAL', 2, now(), now());\ninsert into `linkis_cg_manager_label` (`label_key`, `label_value`, `label_feature`, `label_value_size`, `update_time`, `create_time`) VALUES ('combined_userCreator_engineType', @JDBC_IDE, 'OPTIONAL', 2, now(), now());\n\nselect @label_id := id from linkis_cg_manager_label where `label_value` = @JDBC_IDE;\ninsert into linkis_ps_configuration_category (`label_id`, `level`) VALUES (@label_id, 2);\n\n-- configuration key\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.connect.url', '\u4f8b\u5982:jdbc:mysql://127.0.0.1:10000', 'jdbc\u8fde\u63a5\u5730\u5740', 'jdbc:mysql://127.0.0.1:10000', 'Regex', '^\\\\s*jdbc:\\\\w+://([^:]+)(:\\\\d+)(/[^\\\\?]+)?(\\\\?\\\\S*)?$', '0', '0', '1', '\u6570\u636e\u6e90\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.driver', '\u4f8b\u5982:com.mysql.jdbc.Driver', 'jdbc\u8fde\u63a5\u9a71\u52a8', '', 'None', '', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.version', '\u53d6\u503c\u8303\u56f4\uff1ajdbc3,jdbc4', 'jdbc\u7248\u672c','jdbc4', 'OFT', '[\\\"jdbc3\\\",\\\"jdbc4\\\"]', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.username', 'username', '\u6570\u636e\u5e93\u8fde\u63a5\u7528\u6237\u540d', '', 'None', '', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.password', 'password', '\u6570\u636e\u5e93\u8fde\u63a5\u5bc6\u7801', '', 'None', '', '0', '0', '1', '\u7528\u6237\u914d\u7f6e', 'jdbc');\ninsert into `linkis_ps_configuration_config_key` (`key`, `description`, `name`, `default_value`, `validate_type`, `validate_range`, `is_hidden`, `is_advanced`, `level`, `treeName`, `engine_conn_type`) VALUES ('wds.linkis.jdbc.connect.max', '\u8303\u56f4\uff1a1-20\uff0c\u5355\u4f4d\uff1a\u4e2a', 'jdbc\u5f15\u64ce\u6700\u5927\u8fde\u63a5\u6570', '10', 'NumInterval', '[1,20]', '0', '0', '1', '\u6570\u636e\u6e90\u914d\u7f6e', 'jdbc');\n\n-- key engine relation\ninsert into `linkis_ps_configuration_key_engine_relation` (`config_key_id`, `engine_type_label_id`)\n(select config.id as `config_key_id`, label.id AS `engine_type_label_id` FROM linkis_ps_configuration_config_key config\nINNER JOIN linkis_cg_manager_label label ON config.engine_conn_type = 'jdbc' and label_value = @JDBC_ALL);\n\ninsert into `linkis_ps_configuration_config_value` (`config_key_id`, `config_value`, `config_label_id`)\n(select `relation`.`config_key_id` AS `config_key_id`, '' AS `config_value`, `relation`.`engine_type_label_id` AS `config_label_id` FROM linkis_ps_configuration_key_engine_relation relation\nINNER JOIN linkis_cg_manager_label label ON relation.engine_type_label_id = label.id AND label.label_value = @JDBC_ALL);\n")))}u.isMDXComponent=!0},1964:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/datasourceconntest-178eff197a8911ad75d758e97c8b559d.png"},64596:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/datasourcemanage-c6c7ee44e831152f4cfba5bfbcb9b3e3.png"},40464:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jdbc-config-1f87631660873bb5d971e96e1277ea69.png"},90553:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/muti-data-source-usage-51cf8dfbf4e9f09bc5615d83b70bbdbe.png"}}]);