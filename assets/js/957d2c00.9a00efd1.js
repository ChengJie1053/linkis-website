"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[69993],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||r;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},30898:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const r={title:"Seatunnel Engine",sidebar_position:14},l=void 0,o={unversionedId:"engine-usage/seatunnel",id:"engine-usage/seatunnel",title:"Seatunnel Engine",description:"This article mainly introduces the installation, usage and configuration of the Seatunnel engine plugin in Linkis.",source:"@site/docs/engine-usage/seatunnel.md",sourceDirName:"engine-usage",slug:"/engine-usage/seatunnel",permalink:"/docs/1.3.2/engine-usage/seatunnel",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/engine-usage/seatunnel.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Seatunnel Engine",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Trino Engine",permalink:"/docs/1.3.2/engine-usage/trino"},next:{title:"Overview",permalink:"/docs/1.3.2/api/overview"}},s={},u=[{value:"1. Pre-work",id:"1-pre-work",level:2},{value:"1.1 Engine installation",id:"11-engine-installation",level:3},{value:"1.2 Engine Environment Verification",id:"12-engine-environment-verification",level:3},{value:"2. Engine plugin deployment",id:"2-engine-plugin-deployment",level:2},{value:"2.1 Engine plugin preparation (choose one) non-default engine",id:"21-engine-plugin-preparation-choose-one-non-default-engine",level:3},{value:"2.2 Upload and load engine plugins",id:"22-upload-and-load-engine-plugins",level:3},{value:"2.3 Engine refresh",id:"23-engine-refresh",level:3},{value:"2.3.1 Restart and refresh",id:"231-restart-and-refresh",level:4},{value:"2.3.2 Check whether the engine is refreshed successfully",id:"232-check-whether-the-engine-is-refreshed-successfully",level:3},{value:"3. Engine usage",id:"3-engine-usage",level:2},{value:"3.1 Submit tasks through <code>Linkis-cli</code>",id:"31-submit-tasks-through-linkis-cli",level:3},{value:"3.2 Submit tasks through OnceEngineConn",id:"32-submit-tasks-through-onceengineconn",level:3},{value:"4. Engine configuration instructions",id:"4-engine-configuration-instructions",level:2},{value:"4.1 Default Configuration Description",id:"41-default-configuration-description",level:3},{value:"4.2 Configuration modification",id:"42-configuration-modification",level:3},{value:"4.2.1 Client Configuration Parameters",id:"421-client-configuration-parameters",level:4},{value:"4.2.2 Task interface configuration",id:"422-task-interface-configuration",level:4}],p={toc:u};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article mainly introduces the installation, usage and configuration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Seatunnel")," engine plugin in ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis"),"."),(0,i.kt)("h2",{id:"1-pre-work"},"1. Pre-work"),(0,i.kt)("h3",{id:"11-engine-installation"},"1.1 Engine installation"),(0,i.kt)("p",null,"If you want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Seatunnel")," engine on your ",(0,i.kt)("inlineCode",{parentName:"p"},"Linkis")," service, you need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"Seatunnel")," engine. Moreover, ",(0,i.kt)("inlineCode",{parentName:"p"},"Seatunnel")," depends on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Flink")," environment. Before using the ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-seatunnel")," engine, it is strongly recommended to run through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Seatunnel")," environment locally."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Seatunnel 2.1.2")," download address: ",(0,i.kt)("a",{parentName:"p",href:"https://dlcdn.apache.org/incubator/seatunnel/2.1.2/apache-seatunnel-incubating-2.1.2-bin.tar.gz"},"https://dlcdn.apache.org/incubator/seatunnel/2.1.2/apache-seatunnel-incubating-2.1.2-bin.tar.gz")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,i.kt)("th",{parentName:"tr",align:null},"Required or not"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"JDK installation path"),(0,i.kt)("td",{parentName:"tr",align:null},"Required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SEATUNNEL_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Seatunnel installation path"),(0,i.kt)("td",{parentName:"tr",align:null},"required")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SPARK_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark installation path"),(0,i.kt)("td",{parentName:"tr",align:null},"Seatunnel needs to run based on Spark")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FLINK_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Flink installation path"),(0,i.kt)("td",{parentName:"tr",align:null},"Seatunnel execution is based on Flink")))),(0,i.kt)("p",null,"Table 1-1 Environment configuration list"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Linkis variable name"),(0,i.kt)("th",{parentName:"tr",align:null},"variable content"),(0,i.kt)("th",{parentName:"tr",align:null},"required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.engine.seatunnel.plugin.home"),(0,i.kt)("td",{parentName:"tr",align:null},"Seatunnel installation path"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,i.kt)("h3",{id:"12-engine-environment-verification"},"1.2 Engine Environment Verification"),(0,i.kt)("p",null,"Take the execution of ",(0,i.kt)("inlineCode",{parentName:"p"},"Spark")," tasks as an example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd $SEATUNNEL_HOME\n./bin/start-seatunnel-spark.sh --master local[4] --deploy-mode client --config ./config/spark.batch.conf.template\n")),(0,i.kt)("p",null,"The output is as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(43963).Z,width:"1014",height:"515"})),(0,i.kt)("h2",{id:"2-engine-plugin-deployment"},"2. Engine plugin deployment"),(0,i.kt)("h3",{id:"21-engine-plugin-preparation-choose-one-non-default-engine"},"2.1 Engine plugin preparation (choose one) ",(0,i.kt)("a",{parentName:"h3",href:"/docs/1.3.2/engine-usage/overview"},"non-default engine")),(0,i.kt)("p",null,"Method 1: Download the engine plug-in package directly"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis Engine Plugin Download")),(0,i.kt)("p",null,"Method 2: Compile the engine plug-in separately (requires ",(0,i.kt)("inlineCode",{parentName:"p"},"maven")," environment)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# compile\ncd ${linkis_code_dir}/linkis-engineconn-plugins/seatunnel/\nmvn clean install\n# The compiled engine plug-in package is located in the following directory\n${linkis_code_dir}/linkis-engineconn-plugins/seatunnel/target/out/\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/1.3.2/deployment/install-engineconn"},"EngineConnPlugin Engine Plugin Installation")),(0,i.kt)("h3",{id:"22-upload-and-load-engine-plugins"},"2.2 Upload and load engine plugins"),(0,i.kt)("p",null,"Upload the engine package in 2.1 to the engine directory of the server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,i.kt)("p",null,"The directory structure after uploading is as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 seat tunnel\n\u2502 \u251c\u2500\u2500 dist\n\u2502 \u2502 \u2514\u2500\u2500 v2.1.2\n\u2502 \u2502 \u251c\u2500\u2500 conf\n\u2502 \u2502 \u2514\u2500\u2500 lib\n\u2502 \u2514\u2500\u2500 plugin\n\u2502 \u2514\u2500\u2500 2.1.2\n")),(0,i.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,i.kt)("h4",{id:"231-restart-and-refresh"},"2.3.1 Restart and refresh"),(0,i.kt)("p",null,"Refresh the engine by restarting the ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,i.kt)("h3",{id:"232-check-whether-the-engine-is-refreshed-successfully"},"2.3.2 Check whether the engine is refreshed successfully"),(0,i.kt)("p",null,"You can check whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"last_update_time")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," table in the database is the time to trigger the refresh."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"#login to `linkis` database\nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,i.kt)("h2",{id:"3-engine-usage"},"3. Engine usage"),(0,i.kt)("h3",{id:"31-submit-tasks-through-linkis-cli"},"3.1 Submit tasks through ",(0,i.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli --mode once -code \'test\' -engineType seatunnel-2.1.2 -codeType sspark -labelMap userCreator=hadoop-seatunnel -labelMap engineConnMode=once -jobContentMap code=\'env {\n   spark.app.name = "SeaTunnel"\n   spark.executor.instances = 2\n   spark.executor.cores = 1\n   spark.executor.memory = "1g"\n   }\n   source {\n     Fake {\n       result_table_name = "my_dataset"\n     }\n   }\n   transform {}\n   sink {Console {}}\' -jobContentMap master=local[4] -jobContentMap deploy-mode=client -sourceMap jobName=OnceJobTest -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("h3",{id:"32-submit-tasks-through-onceengineconn"},"3.2 Submit tasks through OnceEngineConn"),(0,i.kt)("p",null,"OnceEngineConn calls LinkisManager's createEngineConn interface through LinkisManagerClient, and sends the code to the created Seatunnel engine, and then Seatunnel engine starts to execute. The use of Client is also very simple, first create a new maven project, or introduce the following dependencies in the project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-computation-client</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.linkis.computation.client;\nimport org.apache.linkis.common.conf.Configuration;\nimport org.apache.linkis.computation.client.once.simple.SubmittableSimpleOnceJob;\nimport org.apache.linkis.computation.client.utils.LabelKeyUtils;\npublic class SeatunnelOnceJobTest {\n    public static void main(String[] args) {\n        LinkisJobClient.config().setDefaultServerUrl("http://ip:9001");\n        String code =\n                "\\n"\n                        + "env {\\n"\n                        + " spark.app.name = \\"SeaTunnel\\"\\n"\n                        + "spark.executor.instances = 2\\n"\n                        + "spark.executor.cores = 1\\n"\n                        + " spark.executor.memory = \\"1g\\"\\n"\n                        + "}\\n"\n                        + "\\n"\n                        + "source {\\n"\n                        + "Fake {\\n"\n                        + " result_table_name = \\"my_dataset\\"\\n"\n                        + " }\\n"\n                        + "\\n"\n                        + "}\\n"\n                        + "\\n"\n                        + "transform {\\n"\n                        + "}\\n"\n                        + "\\n"\n                        + "sink {\\n"\n                        + " Console {}\\n"\n                        + "}";\n        SubmittableSimpleOnceJob onceJob =\n                LinkisJobClient.once()\n                        .simple()\n                        .builder()\n                        .setCreateService("seatunnel-Test")\n                        .setMaxSubmitTime(300000)\n                        .addLabel(LabelKeyUtils.ENGINE_TYPE_LABEL_KEY(), "seatunnel-2.1.2")\n                        .addLabel(LabelKeyUtils.USER_CREATOR_LABEL_KEY(), "hadoop-seatunnel")\n                        .addLabel(LabelKeyUtils.ENGINE_CONN_MODE_LABEL_KEY(), "once")\n                        .addStartupParam(Configuration.IS_TEST_MODE().key(), true)\n                        .addExecuteUser("hadoop")\n                        .addJobContent("runType", "sspark")\n                        .addJobContent("code", code)\n                        .addJobContent("master", "local[4]")\n                        .addJobContent("deploy-mode", "client")\n                        .addSource("jobName", "OnceJobTest")\n                        .build();\n        onceJob. submit();\n        System.out.println(onceJob.getId());\n        onceJob. waitForCompleted();\n        System.out.println(onceJob.getStatus());\n        LinkisJobMetrics jobMetrics = onceJob. getJobMetrics();\n        System.out.println(jobMetrics.getMetrics());\n    }\n}\n')),(0,i.kt)("h2",{id:"4-engine-configuration-instructions"},"4. Engine configuration instructions"),(0,i.kt)("h3",{id:"41-default-configuration-description"},"4.1 Default Configuration Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"wds.linkis.engine.seatunnel.plugin.home"),(0,i.kt)("td",{parentName:"tr",align:null},"/opt/linkis/seatunnel"),(0,i.kt)("td",{parentName:"tr",align:null},"Seatunnel installation path"),(0,i.kt)("td",{parentName:"tr",align:null},"true")))),(0,i.kt)("h3",{id:"42-configuration-modification"},"4.2 Configuration modification"),(0,i.kt)("p",null,"If the default parameters are not satisfied, there are the following ways to configure some basic parameters"),(0,i.kt)("h4",{id:"421-client-configuration-parameters"},"4.2.1 Client Configuration Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli --mode once-code \'test\' \\\n-engineType seatunnel-2.1.2 -codeType sspark\\\n-labelMap userCreator=hadoop-seatunnel -labelMap engineConnMode=once \\\n-jobContentMap code=\'env {\n   spark.app.name = "SeaTunnel"\n   spark.executor.instances = 2\n   spark.executor.cores = 1\n   spark.executor.memory = "1g"\n   }\n   source {\n     Fake {\n       result_table_name = "my_dataset"\n     }\n   }\n   transform {}\n   sink {Console {}}\' -jobContentMap master=local[4] \\\n   -jobContentMap deploy-mode=client \\\n   -sourceMap jobName=OnceJobTest\\\n   -runtimeMap wds.linkis.engine.seatunnel.plugin.home=/opt/linkis/seatunnel \\\n   -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("h4",{id:"422-task-interface-configuration"},"4.2.2 Task interface configuration"),(0,i.kt)("p",null,"Submit the task interface and configure it through the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"params.configuration.runtime")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Example of http request parameters\n{\n    "executionContent": {"code": \'env {\n    spark.app.name = "SeaTunnel"\n    spark.executor.instances = 2\n    spark.executor.cores = 1\n    spark.executor.memory = "1g"\n    }\n    source {\n        Fake {\n            result_table_name = "my_dataset"\n        }\n    }\n    transform {}\n    sink {Console {}}\',\n    "runType": "sql"},\n    "params": {\n        "variable": {},\n        "configuration": {\n                "runtime": {\n                    "wds.linkis.engine.seatunnel.plugin.home":"/opt/linkis/seatunnel"\n                    }\n                }\n        },\n    "labels": {\n        "engineType": "seatunnel-2.1.2",\n        "userCreator": "hadoop-IDE"\n    }\n}\n')))}c.isMDXComponent=!0},43963:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/check-seatunnel-eb158e0b946d2e55b7bfac3b90b0448b.png"}}]);