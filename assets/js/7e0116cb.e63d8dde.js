"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[18406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=o,h=c["".concat(s,".").concat(f)]||c[f]||p[f]||a;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={title:"UDF Function",sidebar_position:9},r=void 0,l={unversionedId:"user-guide/control-panel/udf-function",id:"user-guide/control-panel/udf-function",title:"UDF Function",description:"1 Introduction to UDF",source:"@site/docs/user-guide/control-panel/udf-function.md",sourceDirName:"user-guide/control-panel",slug:"/user-guide/control-panel/udf-function",permalink:"/docs/1.4.0/user-guide/control-panel/udf-function",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/user-guide/control-panel/udf-function.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"UDF Function",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Basic Data Management",permalink:"/docs/1.4.0/user-guide/control-panel/basicdata-management"},next:{title:"User Permission Description of Management Console",permalink:"/docs/1.4.0/user-guide/control-panel/permission-instructions-console"}},s={},d=[{value:"1 Introduction to UDF",id:"1-introduction-to-udf",level:2},{value:"1.1 UDF function implementation",id:"11-udf-function-implementation",level:3},{value:"1.2 Several types of UDF",id:"12-several-types-of-udf",level:3},{value:"2 UDF addition, deletion and modification",id:"2-udf-addition-deletion-and-modification",level:2},{value:"2.1 UDF new",id:"21-udf-new",level:3},{value:"2.2 UDF modification",id:"22-udf-modification",level:3},{value:"2.3 UDF deletion",id:"23-udf-deletion",level:3},{value:"3 UDF usage",id:"3-udf-usage",level:2},{value:"4 UDF sharing",id:"4-udf-sharing",level:2},{value:"5 Other Function Introduction",id:"5-other-function-introduction",level:2},{value:"5.1 UDF Handover",id:"51-udf-handover",level:3},{value:"5.2 UDF expiration",id:"52-udf-expiration",level:3},{value:"5.3 UDF version list",id:"53-udf-version-list",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-introduction-to-udf"},"1 Introduction to UDF"),(0,o.kt)("p",null,"UDF: User Defined Function, user-defined function. In some scenarios, we need to use hive functions to process some data. Functions like count() and sum() are built-in. If we want to use some functions that are not built-in, we need to customize the function, which can be done by writing UDF."),(0,o.kt)("h3",{id:"11-udf-function-implementation"},"1.1 UDF function implementation"),(0,o.kt)("p",null,"The way to implement a UDF is relatively simple: just inherit the UDF class and rewrite the evaluate method.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'public class HelloUDF extends UDF{\n        public String evaluate(String str){\n                try {\n                        return "Hello " + str;\n                } catch (Exception e) {\n                        // TODO: handle exception\n                        e.printStackTrace();\n                        return "ERROR";\n                }\n        }\n')),(0,o.kt)("h3",{id:"12-several-types-of-udf"},"1.2 Several types of UDF"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"UDF function (can be used only after registration):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"UDF function of general type: refers to the UDF function that can be used by both hql of Hive and sql of Spark, and is generally compiled into a jar package"),(0,o.kt)("li",{parentName:"ul"},"Spark-type UDF functions: Spark-specific UDFs need to create corresponding scala/python scripts first, register through scala or python functions, and can also be used in sql after registration"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Custom functions PythonUDF and ScalaUDF can only be used in the Spark engine"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"python function, based on functions written in python"),(0,o.kt)("li",{parentName:"ul"},"Scala functions, functions written based on scala")))),(0,o.kt)("h2",{id:"2-udf-addition-deletion-and-modification"},"2 UDF addition, deletion and modification"),(0,o.kt)("p",null,"Click on the linkis management console: Home>>UDF Management\n",(0,o.kt)("img",{src:n(18214).Z,width:"1268",height:"575"})),(0,o.kt)("p",null,'There are two columns of "UDF Management" and "Function Management". In the Function Management column, there are general method functions, such as python and scala functions, which can be used like ordinary functions in scripts without registration. UDF needs It can only be used after registration.\n',(0,o.kt)("img",{src:n(33011).Z,width:"1266",height:"573"})),(0,o.kt)("h3",{id:"21-udf-new"},"2.1 UDF new"),(0,o.kt)("p",null,"Added UDF function of general type:"),(0,o.kt)("p",null,"You need to compile the corresponding Jar package first, and upload it to the workspace of the corresponding user (if you use the dss family bucket, you can upload it through scriptis, if you use linkis separately, you need to manually upload it to the corresponding directory)"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49735).Z,width:"468",height:"384"})),(0,o.kt)("p",null,'Click the Add UDF button. There are two types of UDFs that can be added. Select the "General" type and register through the jar package. The registration format needs to write the fully qualified class name of the UDF implementation class.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(33061).Z,width:"468",height:"384"})),(0,o.kt)("p",null,"For example, the fully qualified class name of UDFServiceImpl in the figure below is: org.apache.linkis.udf.service.impl.UDFServiceImpl"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(71862).Z,width:"1285",height:"465"})),(0,o.kt)("p",null,"Add the UDF function of Spark type:"),(0,o.kt)("p",null,'If you choose the "spark" type, select the defined scala or python function to register, and you need to write a scala or python type script for the custom function. It can also be used in sql after registration, similar to: select hello("abc").'),(0,o.kt)("p",null,"Notice:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When registering, you should fill in the method name in the new script."),(0,o.kt)("li",{parentName:"ol"},"After adding udf, the corresponding jar package or script content will be uploaded to bml storage. If the resource is modified locally, it needs to be updated to take effect.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(42739).Z,width:"468",height:"384"})),(0,o.kt)("h3",{id:"22-udf-modification"},"2.2 UDF modification"),(0,o.kt)("p",null,"Click the edit button corresponding to udf."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(72423).Z,width:"1253",height:"566"})),(0,o.kt)("p",null,"If you need to update the content of the udf, you need to edit the udf and upload it again, and generate a new version of the udf. If the content of the script has not changed, but only modified other content such as the format used, only the information will be updated, and no new version will be generated."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(16609).Z,width:"1253",height:"566"})),(0,o.kt)("h3",{id:"23-udf-deletion"},"2.3 UDF deletion"),(0,o.kt)("p",null,"Click the delete button corresponding to the udf. Note: all versions of the udf will be deleted."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(38543).Z,width:"1257",height:"557"})),(0,o.kt)("h2",{id:"3-udf-usage"},"3 UDF usage"),(0,o.kt)("p",null,'If you want to make the UDF you created take effect and use it in the program, you need to load the UDF. The entry point of "loading"/"unloading" is: enter the UDF function on the left side of scriptis -> personal function, and the created UDFs are all in the personal function list.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note 1: If you do not actively cancel the check on the page when adding a UDF, it will be checked and loaded by default. At this time, you need to kill the corresponding engine to start a new engine, so that the operation will take effect.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note 2: The operation of loading/unloading udf needs to kill the corresponding engine and start a new engine before the operation will take effect")),(0,o.kt)("p",null,"Introduction to non-personal functions in the list:"),(0,o.kt)("p",null,"BDAP function: functions created by bdap for users, such as desensitization functions, etc. Note: The bdap function needs to be actively loaded before it can be used."),(0,o.kt)("p",null,"System function: The default function of the system can be used in the code without loading by the user."),(0,o.kt)("p",null,"Shared functions: functions shared to you by others, you need to load them to use them"),(0,o.kt)("p",null,"Expired function: It is also a shared function, but the sharer marked it as expired, which will not affect the use for the time being"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Load udf from parameter ",(0,o.kt)("inlineCode",{parentName:"strong"},"ids"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"introduction"),(0,o.kt)("th",{parentName:"tr",align:null},"default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"linkis.user.udf.all.load")),(0,o.kt)("td",{parentName:"tr",align:null},"load user's all selected udf"),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"linkis.user.udf.custom.ids")),(0,o.kt)("td",{parentName:"tr",align:null},"udf ID list\uff0csplit by ",(0,o.kt)("inlineCode",{parentName:"td"},",")),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("p",null,"example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'POST /api/rest_j/v1/entrance/submit\nContent-Type: application/json\nToken-Code: dss-AUTH\nToken-User: linkis\n\n{\n    "executionContent": {\n        "code": "show databases",\n        "runType": "sql"\n    },\n    "params": {\n        "configuration": {\n            "startup": {\n                "linkis.user.udf.all.load": false\n                "linkis.user.udf.custom.ids": "1,2,3"\n            }\n        }\n    },\n    "labels": {\n        "engineType": "spark-2.4.3",\n        "userCreator": "linkis-IDE"\n    }\n}\n')),(0,o.kt)("h2",{id:"4-udf-sharing"},"4 UDF sharing"),(0,o.kt)("p",null,"Premise: The sharing function requires the user to be an administrator to use it, otherwise the front-end page will not provide an operation entry."),(0,o.kt)("p",null,"Click the share button of udf: a content box will pop up, enter the list of users you want to share (comma-separated)."),(0,o.kt)("p",null,"Note: After being shared with others, the UDF needs to be actively loaded by others before it can be used."),(0,o.kt)("p",null,'After sharing, the shared user can find it in the "Shared Function", and then use it after ticking and loading it.'),(0,o.kt)("h2",{id:"5-other-function-introduction"},"5 Other Function Introduction"),(0,o.kt)("h3",{id:"51-udf-handover"},"5.1 UDF Handover"),(0,o.kt)("p",null,"If the user resigns, it may be necessary to hand over the personal udf to others. Click the transfer button, select your transfer object, and click OK."),(0,o.kt)("h3",{id:"52-udf-expiration"},"5.2 UDF expiration"),(0,o.kt)("p",null,"For a UDF shared with others, if it has been loaded by the sharing user, the UDF cannot be deleted directly, but the UDF can only be marked as expired. For the time being, it is only used for marking and does not affect the use."),(0,o.kt)("h3",{id:"53-udf-version-list"},"5.3 UDF version list"),(0,o.kt)("p",null,'Click the "version list" button of a udf to view all versions of the udf. For each version the following features are provided:'),(0,o.kt)("p",null,"Create a new version: copy the corresponding version to the latest version."),(0,o.kt)("p",null,"Download: download the udf file from bml to the local."),(0,o.kt)("p",null,"View source code: For python/scala script type, you can directly view the source code, jar type does not support it."),(0,o.kt)("p",null,"Publish: Shared udf can be clicked to release a certain version, so that the version will take effect for the shared user. Note: The shared user uses the latest version of udf, and the individual user always uses the latest version."))}p.isMDXComponent=!0},71862:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf-cllass-90d57ed7337f001d4cfed693a29e8e16.png"},18214:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf_01-213afa51d799fb2b606d7cd8bcbf1da4.png"},33011:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf_02-c19ed2ebb926d5d33dd3444e22bbcee7.png"},33061:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf_03-c157bf8ac43579c02bd63d6ed4d8ea25.png"},42739:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf_04-c157bf8ac43579c02bd63d6ed4d8ea25.png"},72423:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf_05-f378f9cf353295a96cfe0e514863e224.png"},16609:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf_06-f378f9cf353295a96cfe0e514863e224.png"},38543:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf_07-d112e549ddce84db6fb70c9da6ed44fa.png"},49735:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/udf_09-51edbb1e326e617c3485db02a801aa2a.png"}}]);