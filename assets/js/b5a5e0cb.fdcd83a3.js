"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[51969],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>m});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),g=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=g(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),d=g(n),s=l,m=d["".concat(p,".").concat(s)]||d[s]||u[s]||r;return n?a.createElement(m,i(i({ref:e},k),{},{components:n})):a.createElement(m,i({ref:e},k))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:l,i[1]=o;for(var g=2;g<r;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},87151:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var a=n(87462),l=(n(67294),n(3905));const r={title:"How to Download Engine Plugins Not Included in the Installation Package By Default",authors:["Casion"],tags:["engine","guide"]},i=void 0,o={permalink:"/blog/2022/04/15/how-to-download-engineconn-plugin",editUrl:"https://github.com/apache/linkis-website/edit/dev/blog/2022-04-15-how-to-download-engineconn-plugin.md",source:"@site/blog/2022-04-15-how-to-download-engineconn-plugin.md",title:"How to Download Engine Plugins Not Included in the Installation Package By Default",description:"This article mainly guides you how to download the non-default engine installation plug-in package corresponding to each version.",date:"2022-04-15T00:00:00.000Z",formattedDate:"April 15, 2022",tags:[{label:"engine",permalink:"/blog/tags/engine"},{label:"guide",permalink:"/blog/tags/guide"}],readingTime:1.985,hasTruncateMarker:!1,authors:[{name:"Casion",title:"Development Engineer of WeBank",url:"https://github.com/casionone/",imageURL:"https://avatars.githubusercontent.com/u/7869972?v=4",key:"Casion"}],frontMatter:{title:"How to Download Engine Plugins Not Included in the Installation Package By Default",authors:["Casion"],tags:["engine","guide"]},prevItem:{title:"Apache Linkis Meet up",permalink:"/blog/2022/06/09/meetup-content-review"},nextItem:{title:"Implementation of OpenLookEng Engine",permalink:"/blog/2022/03/20/openlookeng"}},p={authorsImageUrls:[void 0]},g=[{value:"Download link",id:"download-link",level:2},{value:"engine type",id:"engine-type",level:2},{value:"Install engine guide",id:"install-engine-guide",level:2}],k={toc:g},d="wrapper";function u(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"This article mainly guides you how to download the non-default engine installation plug-in package corresponding to each version. "))),(0,l.kt)("p",null,"Considering the size of the release package and the use of plug-ins, the binary installation package released by linkis only contains some common engines /hive/spark/python/shell.\nVery useful engine, there are corresponding modules ",(0,l.kt)("inlineCode",{parentName:"p"},"flink/io_file/pipeline/sqoop")," in the project code (there may be differences between different versions),\nIn order to facilitate everyone's use, based on the release branch code of each version of linkis: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/linkis"},"https://github.com/apache/linkis"),", this part of the engine is compiled for everyone to choose and use."),(0,l.kt)("h2",{id:"download-link"},"Download link"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"linkis version")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"engines included")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"engine material package download link")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.3.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"io_file",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null),"openlookeng",(0,l.kt)("br",null),"sqoop",(0,l.kt)("br",null),"presto",(0,l.kt)("br",null),"elasticsearch",(0,l.kt)("br",null),"trino",(0,l.kt)("br",null),"seatunnel",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.3.2-engineconn-plugin.tar"},"1.3.2-engineconn-plugin.tar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.3.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"io_file",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null),"openlookeng",(0,l.kt)("br",null),"sqoop",(0,l.kt)("br",null),"presto",(0,l.kt)("br",null),"elasticsearch",(0,l.kt)("br",null),"trino",(0,l.kt)("br",null),"seatunnel",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.3.1-engineconn-plugin.tar"},"1.3.1-engineconn-plugin.tar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.3.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"io_file",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null),"openlookeng",(0,l.kt)("br",null),"sqoop",(0,l.kt)("br",null),"presto",(0,l.kt)("br",null),"elasticsearch",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.3.0-engineconn-plugin.tar"},"1.3.0-engineconn-plugin.tar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.2.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null),"openlookeng",(0,l.kt)("br",null),"sqoop",(0,l.kt)("br",null),"presto",(0,l.kt)("br",null),"elasticsearch",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.2.0-engineconn-plugin.tar"},"1.2.0-engineconn-plugin.tar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null),"openlookeng",(0,l.kt)("br",null),"sqoop"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.1.3-engineconn-plugin.tar"},"1.1.3-engineconn-plugin.tar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null),"openlookeng",(0,l.kt)("br",null),"sqoop"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.1.2-engineconn-plugin.tar"},"1.1.2-engineconn-plugin.tar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.1.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null),"openlookeng",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.1.1-engineconn-plugin.tar"},"1.1.1-engineconn-plugin.tar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.1.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.1.0-engineconn-plugin.tar"},"1.1.0-engineconn-plugin.tar"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"1.0.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"jdbc",(0,l.kt)("br",null),"pipeline",(0,l.kt)("br",null),"flink",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://osp-1257653870.cos.ap-guangzhou.myqcloud.com/WeDatasphere/Linkis/engineconn-plugin/1.0.3-engineconn-plugin.tar"},"1.0.3-engineconn-plugin.tar"))))),(0,l.kt)("h2",{id:"engine-type"},"engine type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Engine name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Support underlying component version",(0,l.kt)("br",null),"(default dependency version)")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Linkis Version Requirements")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Included in Release Package By Default")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Apache 2.0.0~2.4.7, ",(0,l.kt)("br",null),"CDH >= 5.4.0, ",(0,l.kt)("br",null),"(default Apache Spark 2.4.3)"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.0.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Spark EngineConn, supports SQL , Scala, Pyspark and R code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Apache >= 1.0.0, ",(0,l.kt)("br",null),"CDH >= 5.4.0, ",(0,l.kt)("br",null),"(default Apache Hive 2.3.3)"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.0.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Hive EngineConn, supports HiveQL code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Python"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Python >= 2.6, ",(0,l.kt)("br",null),"(default Python2*)"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.0.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Python EngineConn, supports python code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bash >= 2.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.0.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Shell EngineConn, supports Bash shell code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC"),(0,l.kt)("td",{parentName:"tr",align:"left"},"MySQL >= 5.0, Hive >=1.2.1, ",(0,l.kt)("br",null),"(default Hive-jdbc 2.3.4)"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.0.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"JDBC EngineConn, already supports MySQL and HiveQL, can be extended quickly Support other engines with JDBC Driver package, such as Oracle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink >= 1.12.2, ",(0,l.kt)("br",null),"(default Apache Flink 1.12.2)"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.0.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flink EngineConn, supports FlinkSQL code, also supports starting a new Yarn in the form of Flink Jar Application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Pipeline"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.0.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Pipeline EngineConn, supports file import and export")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"openLooKeng"),(0,l.kt)("td",{parentName:"tr",align:"left"},"openLooKeng >= 1.5.0, ",(0,l.kt)("br",null),"(default openLookEng 1.5.0)"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.1.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"openLooKeng EngineConn, supports querying data virtualization engine with Sql openLooKeng")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Sqoop"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sqoop >= 1.4.6, ",(0,l.kt)("br",null),"(default Apache Sqoop 1.4.6)"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sqoop EngineConn, support data migration tool Sqoop engine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Presto"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Presto >= 0.180"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.2.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Presto EngineConn, supports Presto SQL code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ElasticSearch"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ElasticSearch >=6.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},">","=1.2.0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"ElasticSearch EngineConn, supports SQL and DSL code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Trino"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Trino >=371"),(0,l.kt)("td",{parentName:"tr",align:"left"},">=1.3.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Trino EngineConn\uff0c supports Trino SQL code")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Seatunnel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Seatunnel >=2.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},">=1.3.1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Seatunnel EngineConn\uff0c supportt Seatunnel SQL code")))),(0,l.kt)("h2",{id:"install-engine-guide"},"Install engine guide"),(0,l.kt)("p",null,"After downloading the material package of the engine, unzip the package"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"tar -xvf 1.0.3-engineconn-plugin.tar\ncd 1.0.3-engineconn-plugin\n\n")),(0,l.kt)("p",null,"Copy the engine material package to be used to the engine plug-in directory of linkis, and then refresh the engine material."),(0,l.kt)("p",null,"For the detailed process, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/docs/latest/deployment/install-engineconn"},"Installing the EngineConnPlugin Engine"),"."))}u.isMDXComponent=!0}}]);