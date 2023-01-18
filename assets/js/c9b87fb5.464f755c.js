"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[89866],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,k=u["".concat(s,".").concat(g)]||u[g]||c[g]||l;return t?i.createElement(k,r(r({ref:n},d),{},{components:t})):i.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},83560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const l={title:"Flink Engine",sidebar_position:8},r="Flink engine usage documentation",o={unversionedId:"engine-usage/flink",id:"version-1.3.1/engine-usage/flink",title:"Flink Engine",description:"This article mainly introduces the installation, use and configuration of the flink engine plugin in Linkis.",source:"@site/versioned_docs/version-1.3.1/engine-usage/flink.md",sourceDirName:"engine-usage",slug:"/engine-usage/flink",permalink:"/docs/latest/engine-usage/flink",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.1/engine-usage/flink.md",tags:[],version:"1.3.1",sidebarPosition:8,frontMatter:{title:"Flink Engine",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"JDBC Engine",permalink:"/docs/latest/engine-usage/jdbc"},next:{title:"OpenLooKeng Engine",permalink:"/docs/latest/engine-usage/openlookeng"}},s={},p=[{value:"1. Preliminary work",id:"1-preliminary-work",level:2},{value:"1.1 Engine environment configuration",id:"11-engine-environment-configuration",level:3},{value:"1.2 Engine Verification",id:"12-engine-verification",level:3},{value:"2. Engine plugin installation",id:"2-engine-plugin-installation",level:2},{value:"2.1 Engine plugin preparation (choose one) non-default engine",id:"21-engine-plugin-preparation-choose-one-non-default-engine",level:3},{value:"2.2 Upload and load engine plugins",id:"22-upload-and-load-engine-plugins",level:3},{value:"2.3 Engine refresh",id:"23-engine-refresh",level:3},{value:"2.3.1 Restart and refresh",id:"231-restart-and-refresh",level:4},{value:"2.3.2 Check if the engine is refreshed successfully",id:"232-check-if-the-engine-is-refreshed-successfully",level:3},{value:"3. Use of Flink engine",id:"3-use-of-flink-engine",level:2},{value:"3.1 Submit tasks through <code>Linkis-cli</code>",id:"31-submit-tasks-through-linkis-cli",level:3},{value:"3.2 Submitting tasks via <code>ComputationEngineConn</code>",id:"32-submitting-tasks-via-computationengineconn",level:3},{value:"3.3 Submitting tasks via <code>OnceEngineConn</code>",id:"33-submitting-tasks-via-onceengineconn",level:3}],d={toc:p};function u(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flink-engine-usage-documentation"},"Flink engine usage documentation"),(0,a.kt)("p",null,"This article mainly introduces the installation, use and configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"flink")," engine plugin in ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis"),"."),(0,a.kt)("h2",{id:"1-preliminary-work"},"1. Preliminary work"),(0,a.kt)("h3",{id:"11-engine-environment-configuration"},"1.1 Engine environment configuration"),(0,a.kt)("p",null,"If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," engine on your server, you need to ensure that the following environment variables are set correctly and that the user who started the engine has these environment variables."),(0,a.kt)("h3",{id:"12-engine-verification"},"1.2 Engine Verification"),(0,a.kt)("p",null,"It is strongly recommended that you check these environment variables for the executing user before executing ",(0,a.kt)("inlineCode",{parentName:"p"},"flink")," tasks. The specific way is"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo su -${username}\necho ${JAVA_HOME}\necho ${FLINK_HOME}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable name"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable content"),(0,a.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"JDK installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Hadoop configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Linkis starts the Flink on yarn mode adopted by the Flink engine, so yarn support is required.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_HOME"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink installation path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_CONF_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink configuration path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required, such as ${FLINK_HOME}/conf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FLINK_LIB_DIR"),(0,a.kt)("td",{parentName:"tr",align:null},"Flink package path"),(0,a.kt)("td",{parentName:"tr",align:null},"Required, ${FLINK_HOME}/lib")))),(0,a.kt)("h2",{id:"2-engine-plugin-installation"},"2. Engine plugin installation"),(0,a.kt)("h3",{id:"21-engine-plugin-preparation-choose-one-non-default-engine"},"2.1 Engine plugin preparation (choose one) ",(0,a.kt)("a",{parentName:"h3",href:"/docs/latest/engine-usage/overview"},"non-default engine")),(0,a.kt)("p",null,"Method 1: Download the engine plug-in package directly"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://linkis.apache.org/zh-CN/blog/2022/04/15/how-to-download-engineconn-plugin"},"Linkis Engine Plugin Download")),(0,a.kt)("p",null,"Method 2: Compile the engine plug-in separately (requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"maven")," environment)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# compile\ncd ${linkis_code_dir}/linkis-engineconn-plugins/flink/\nmvn clean install\n# The compiled engine plug-in package is located in the following directory\n${linkis_code_dir}/linkis-engineconn-plugins/flink/target/out/\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/latest/deployment/install-engineconn"},"EngineConnPlugin engine plugin installation")),(0,a.kt)("h3",{id:"22-upload-and-load-engine-plugins"},"2.2 Upload and load engine plugins"),(0,a.kt)("p",null,"Upload the engine plug-in package in 2.1 to the engine directory of the server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"${LINKIS_HOME}/lib/linkis-engineplugins\n")),(0,a.kt)("p",null,"The directory structure after uploading is as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"linkis-engineconn-plugins/\n\u251c\u2500\u2500 big\n\u2502   \u251c\u2500\u2500 dist\n\u2502 \u2502 \u2514\u2500\u2500 v1.12.2\n\u2502   \u2502       \u251c\u2500\u2500 conf\n\u2502 \u2502 \u2514\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 plugin\n\u2502 \u2514\u2500\u2500 1.12.2\n")),(0,a.kt)("h3",{id:"23-engine-refresh"},"2.3 Engine refresh"),(0,a.kt)("h4",{id:"231-restart-and-refresh"},"2.3.1 Restart and refresh"),(0,a.kt)("p",null,"Refresh the engine by restarting the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-cg-linkismanager")," service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ${LINKIS_HOME}/sbin\nsh linkis-daemon.sh restart cg-linkismanager\n")),(0,a.kt)("h3",{id:"232-check-if-the-engine-is-refreshed-successfully"},"2.3.2 Check if the engine is refreshed successfully"),(0,a.kt)("p",null,"You can check whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"last_update_time")," of this table in the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis_engine_conn_plugin_bml_resources")," in the database is the time when the refresh is triggered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"#Login to the linkis database\nselect * from linkis_cg_engine_conn_plugin_bml_resources;\n")),(0,a.kt)("h2",{id:"3-use-of-flink-engine"},"3. Use of Flink engine"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," engine of ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis")," is started by ",(0,a.kt)("inlineCode",{parentName:"p"},"flink on yarn"),", so the queue used by the user needs to be specified, as shown in the figure below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"yarn",src:t(70160).Z,width:"1252",height:"653"}),"  "),(0,a.kt)("h3",{id:"31-submit-tasks-through-linkis-cli"},"3.1 Submit tasks through ",(0,a.kt)("inlineCode",{parentName:"h3"},"Linkis-cli")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType flink-1.12.2 \\\n-codeType sql -code "show tables"  \\\n-submitUser hadoop -proxyUser hadoop\n')),(0,a.kt)("p",null,"More ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis-Cli")," command parameter reference: ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/user-guide/linkiscli-manual"},(0,a.kt)("inlineCode",{parentName:"a"},"Linkis-Cli")," usage")),(0,a.kt)("h3",{id:"32-submitting-tasks-via-computationengineconn"},"3.2 Submitting tasks via ",(0,a.kt)("inlineCode",{parentName:"h3"},"ComputationEngineConn")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FlinkSQL")," can support a variety of data sources, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"binlog, kafka, hive"),", etc. If you want to use these data sources in ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," code, you need to put these ",(0,a.kt)("inlineCode",{parentName:"p"},"connector")," plugin ",(0,a.kt)("inlineCode",{parentName:"p"},"jar")," packages into In the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"flink")," engine, and restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"EnginePlugin")," service of ",(0,a.kt)("inlineCode",{parentName:"p"},"Linkis"),". If you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"binlog")," as a data source in your ",(0,a.kt)("inlineCode",{parentName:"p"},"FlinkSQL"),", then you need to place ",(0,a.kt)("inlineCode",{parentName:"p"},"flink-connector-mysql-cdc-1.1.1.jar")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"flink")," engine."),(0,a.kt)("p",null,"In order to facilitate sampling and debugging, we have added the ",(0,a.kt)("inlineCode",{parentName:"p"},"fql")," script type in ",(0,a.kt)("inlineCode",{parentName:"p"},"Scriptis"),", which is specially used to execute ",(0,a.kt)("inlineCode",{parentName:"p"},"FlinkSQL"),". But you need to ensure that your ",(0,a.kt)("inlineCode",{parentName:"p"},"DSS")," has been upgraded to ",(0,a.kt)("inlineCode",{parentName:"p"},"DSS1.0.0"),". After upgrading to ",(0,a.kt)("inlineCode",{parentName:"p"},"DSS1.0.0"),", you can directly enter ",(0,a.kt)("inlineCode",{parentName:"p"},"Scriptis")," to create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"fql")," script for editing and execution."),(0,a.kt)("p",null,"Writing example of ",(0,a.kt)("inlineCode",{parentName:"p"},"FlinkSQL"),", taking ",(0,a.kt)("inlineCode",{parentName:"p"},"binlog")," as an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE mysql_binlog (\n id INT NOT NULL,\n name STRING,\n age INT\n) WITH (\n 'connector' = 'mysql-cdc',\n 'hostname' = 'ip',\n 'port' = 'port',\n 'username' = 'username',\n 'password' = 'password',\n 'database-name' = 'dbname',\n 'table-name' = 'tablename',\n 'debezium.snapshot.locking.mode' = 'none' -- it is recommended to add, otherwise the lock table will be required\n);\nselect * from mysql_binlog where id > 10;\n")),(0,a.kt)("p",null,"When debugging using the ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," syntax in ",(0,a.kt)("inlineCode",{parentName:"p"},"Scriptis"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," engine will have an automatic ",(0,a.kt)("inlineCode",{parentName:"p"},"cancel")," mechanism, that is, when the specified time or the number of lines sampled reaches the specified number, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," engine will Actively cancel the task and persist the obtained result set, and then the front end will call the interface to open the result set to display the result set on the front end."),(0,a.kt)("h3",{id:"33-submitting-tasks-via-onceengineconn"},"3.3 Submitting tasks via ",(0,a.kt)("inlineCode",{parentName:"h3"},"OnceEngineConn")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OnceEngineConn")," is used to officially start ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," streaming applications, specifically by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"LinkisManager")," ",(0,a.kt)("inlineCode",{parentName:"p"},"createEngineConn")," interface through ",(0,a.kt)("inlineCode",{parentName:"p"},"LinkisManagerClient"),", and sending the code to the created ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," engine, and then The ",(0,a.kt)("inlineCode",{parentName:"p"},"Flink")," engine starts to execute, and this method can be called by other systems, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Streamis"),". The usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," is also very simple, first create a ",(0,a.kt)("inlineCode",{parentName:"p"},"maven")," project, or introduce the following dependencies in your project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.linkis</groupId>\n    <artifactId>linkis-computation-client</artifactId>\n    <version>${linkis.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,"Then create a ",(0,a.kt)("inlineCode",{parentName:"p"},"scala")," test file, click execute, and the parsing from a ",(0,a.kt)("inlineCode",{parentName:"p"},"binlog")," data is completed and inserted into a table in another mysql database. But it should be noted that you must create a ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," directory in the ",(0,a.kt)("inlineCode",{parentName:"p"},"maven")," project, place a ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis.properties")," file, and specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"gateway")," address and ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," version of ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis"),", such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"wds.linkis.server.version=v1\nwds.linkis.gateway.url=http://ip:9001/\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"object OnceJobTest {\n  def main(args: Array[String]): Unit = {\n    val sql = \"\"\"CREATE TABLE mysql_binlog (\n                | id INT NOT NULL,\n                | name STRING,\n                | age INT\n                |) WITH (\n                | 'connector' = 'mysql-cdc',\n                | 'hostname' = 'ip',\n                | 'port' = 'port',\n                | 'username' = '${username}',\n                | 'password' = '${password}',\n                | 'database-name' = '${database}',\n                | 'table-name' = '${tablename}',\n                | 'debezium.snapshot.locking.mode' = 'none'\n                |);\n                |CREATE TABLE sink_table (\n                | id INT NOT NULL,\n                | name STRING,\n                | age INT,\n                | primary key(id) not enforced\n                |) WITH (\n                |  'connector' = 'jdbc',\n                |  'url' = 'jdbc:mysql://${ip}:port/${database}',\n                |  'table-name' = '${tablename}',\n                |  'driver' = 'com.mysql.jdbc.Driver',\n                |  'username' = '${username}',\n                |  'password' = '${password}'\n                |);\n                |INSERT INTO sink_table SELECT id, name, age FROM mysql_binlog;\n                |\"\"\".stripMargin\n    val onceJob = SimpleOnceJob.builder().setCreateService(\"Flink-Test\").addLabel(LabelKeyUtils.ENGINE_TYPE_LABEL_KEY, \"flink-1.12.2\")\n      .addLabel(LabelKeyUtils.USER_CREATOR_LABEL_KEY, \"hadoop-Streamis\").addLabel(LabelKeyUtils.ENGINE_CONN_MODE_LABEL_KEY, \"once\")\n      .addStartupParam(Configuration.IS_TEST_MODE.key, true)\n      //    .addStartupParam(\"label.\" + LabelKeyConstant.CODE_TYPE_KEY, \"sql\")\n      .setMaxSubmitTime(300000)\n      .addExecuteUser(\"hadoop\").addJobContent(\"runType\", \"sql\").addJobContent(\"code\", sql).addSource(\"jobName\", \"OnceJobTest\")\n      .build()\n    onceJob.submit()\n    println(onceJob.getId)\n    onceJob.waitForCompleted()\n    System.exit(0)\n  }\n}\n")))}u.isMDXComponent=!0},70160:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/yarn-conf-3611575997ffb7ba32993da83d626e72.png"}}]);