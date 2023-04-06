"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[88908],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=l,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={title:"Shell Scripts Manual",sidebar_position:3},i=void 0,p={unversionedId:"user-guide/linkiscli-manual",id:"user-guide/linkiscli-manual",title:"Shell Scripts Manual",description:"1.Introduction",source:"@site/docs/user-guide/linkiscli-manual.md",sourceDirName:"user-guide",slug:"/user-guide/linkiscli-manual",permalink:"/docs/1.4.0/user-guide/linkiscli-manual",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/user-guide/linkiscli-manual.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Shell Scripts Manual",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to Use",permalink:"/docs/1.4.0/user-guide/how-to-use"},next:{title:"Linkis SDK Manual",permalink:"/docs/1.4.0/user-guide/sdk-manual"}},o={},s=[{value:"1.Introduction",id:"1introduction",level:2},{value:"2.Basic case",id:"2basic-case",level:2},{value:"3.How to use",id:"3how-to-use",level:2},{value:"4.Supported parameter list",id:"4supported-parameter-list",level:2},{value:"5.Detailed example",id:"5detailed-example",level:2},{value:"5.1 add cli parameters",id:"51-add-cli-parameters",level:3},{value:"5.2 add engine initial parameters",id:"52-add-engine-initial-parameters",level:3},{value:"5.3 add tags",id:"53-add-tags",level:3},{value:"5.4 variable replacement",id:"54-variable-replacement",level:3},{value:"5.5  use user configuration",id:"55--use-user-configuration",level:3},{value:"5.6 output result set to file",id:"56-output-result-set-to-file",level:3}],u={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1introduction"},"1.Introduction"),(0,l.kt)("p",null,"Linkis-Cli is a shell command line program used to submit tasks to Linkis."),(0,l.kt)("h2",{id:"2basic-case"},"2.Basic case"),(0,l.kt)("p",null,"You can simply submit a task to Linkis by referring to the example below"),(0,l.kt)("p",null,"The first step is to check whether the default configuration file ",(0,l.kt)("inlineCode",{parentName:"p"},"linkis-cli.properties")," exists in the conf/ directory, and it contains the following configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.common.gatewayUrl=http://127.0.0.1:9001\n   wds.linkis.client.common.authStrategy=token\n   wds.linkis.client.common.tokenKey=Validation-Code\n   wds.linkis.client.common.tokenValue=BML-AUTH\n")),(0,l.kt)("p",null,"The second step is to enter the linkis installation directory and enter the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'   sh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop \n')),(0,l.kt)("p",null,"In the third step, you will see the information on the console that the task has been submitted to linkis and started to execute."),(0,l.kt)("p",null,"Linkis-cli currently only supports synchronous submission, that is, after submitting a task to linkis, it will continue to inquire about the task status and pull task logs until the task ends. If the status is successful at the end of the task, linkis-cli will also actively pull the result set and output it."),(0,l.kt)("h2",{id:"3how-to-use"},"3.How to use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"   sh ./bin/linkis-cli [parameter] [cli parameter]\n")),(0,l.kt)("h2",{id:"4supported-parameter-list"},"4.Supported parameter list"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cli parameters"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Is Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--gwUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"Manually specify the linkis gateway address"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--authStg"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify authentication policy"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--authKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify authentication key"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--authVal"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify authentication value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--userConf"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the configuration file location"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Parameters"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Is Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-engType"),(0,l.kt)("td",{parentName:"tr",align:null},"Engine Type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-runType"),(0,l.kt)("td",{parentName:"tr",align:null},"Execution Type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-code"),(0,l.kt)("td",{parentName:"tr",align:null},"Execution code"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-codePath"),(0,l.kt)("td",{parentName:"tr",align:null},"Local execution code file path"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-smtUsr"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the submitting user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-pxyUsr"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the execution user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-creator"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify creator"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-scriptPath"),(0,l.kt)("td",{parentName:"tr",align:null},"scriptPath"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-outPath"),(0,l.kt)("td",{parentName:"tr",align:null},"Path of output result set to file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-confMap"),(0,l.kt)("td",{parentName:"tr",align:null},"configuration map"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-varMap"),(0,l.kt)("td",{parentName:"tr",align:null},"variable map for variable substitution"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-labelMap"),(0,l.kt)("td",{parentName:"tr",align:null},"linkis labelMap"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-sourceMap"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify linkis sourceMap"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))))),(0,l.kt)("h2",{id:"5detailed-example"},"5.Detailed example"),(0,l.kt)("h3",{id:"51-add-cli-parameters"},"5.1 add cli parameters"),(0,l.kt)("p",null,"Cli parameters can be passed in manually specified, this way will overwrite the conflicting configuration items in the default configuration file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'    sh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "select count(*) from testdb.test;" -submitUser hadoop -proxyUser hadoop --gwUrl http://127.0.0.1:9001- -authStg token --authKey [tokenKey] --authVal [tokenValue]\n')),(0,l.kt)("h3",{id:"52-add-engine-initial-parameters"},"5.2 add engine initial parameters"),(0,l.kt)("p",null,"The initial parameters of the engine can be added through the ",(0,l.kt)("inlineCode",{parentName:"p"},"-confMap")," parameter. Note that the data type of the parameter is Map. The input format of the command line is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    -confMap key1=val1,key2=val2,...\n    \n")),(0,l.kt)("p",null,"For example: the following example sets startup parameters such as the yarn queue for engine startup and the number of spark executors:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  sh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -confMap wds.linkis.yarnqueue=q02,spark.executor.instances=3 -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop  \n')),(0,l.kt)("p",null,"Of course, these parameters can also be read in a configuration file, we will talk about it later"),(0,l.kt)("h3",{id:"53-add-tags"},"5.3 add tags"),(0,l.kt)("p",null,"Labels can be added through the ",(0,l.kt)("inlineCode",{parentName:"p"},"-labelMap")," parameter. Like the ",(0,l.kt)("inlineCode",{parentName:"p"},"-confMap"),", the type of the ",(0,l.kt)("inlineCode",{parentName:"p"},"-labelMap")," parameter is also Map:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  sh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -labelMap labelKey=labelVal -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop  \n')),(0,l.kt)("h3",{id:"54-variable-replacement"},"5.4 variable replacement"),(0,l.kt)("p",null,"Linkis-cli variable substitution is realized by ",(0,l.kt)("inlineCode",{parentName:"p"},"${}")," symbol and ",(0,l.kt)("inlineCode",{parentName:"p"},"-varMap")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'   sh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "select count(*) from \\${key};" -varMap key=testdb.test  -submitUser hadoop -proxyUser hadoop  \n')),(0,l.kt)("p",null,"During execution, the sql statement will be replaced with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mysql-sql"},"   select count(*) from testdb.test\n")),(0,l.kt)("p",null,"Note that the escape character in ",(0,l.kt)("inlineCode",{parentName:"p"},"'\\$'")," is to prevent the parameter from being parsed in advance by linux. If ",(0,l.kt)("inlineCode",{parentName:"p"},"-codePath")," specifies the local script mode, the escape character is not required"),(0,l.kt)("h3",{id:"55--use-user-configuration"},"5.5  use user configuration"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"linkis-cli supports loading user-defined configuration files, the configuration file path is specified by the ",(0,l.kt)("inlineCode",{parentName:"li"},"--userConf")," parameter, and the configuration file needs to be in the file format of ",(0,l.kt)("inlineCode",{parentName:"li"},".properties"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  sh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "select count(*) from testdb.test;"  -submitUser hadoop -proxyUser hadoop  --userConf [configuration file path]\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Which parameters can be configured?")),(0,l.kt)("p",null,"All parameters can be configured, for example:"),(0,l.kt)("p",null,"cli parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.common.gatewayUrl=http://127.0.0.1:9001\n   wds.linkis.client.common.authStrategy=static\n   wds.linkis.client.common.tokenKey=[tokenKey]\n   wds.linkis.client.common.tokenValue=[tokenValue]\n")),(0,l.kt)("p",null,"parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.label.engineType=spark-2.4.3\n   wds.linkis.client.label.codeType=sql\n")),(0,l.kt)("p",null,"When the Map class parameters are configured, the format of the key is"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    [Map prefix] + [key]\n")),(0,l.kt)("p",null,"The Map prefix includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ExecutionMap prefix: wds.linkis.client.exec"),(0,l.kt)("li",{parentName:"ul"},"sourceMap prefix: wds.linkis.client.source"),(0,l.kt)("li",{parentName:"ul"},"ConfigurationMap prefix: wds.linkis.client.param.conf"),(0,l.kt)("li",{parentName:"ul"},"runtimeMap prefix: wds.linkis.client.param.runtime"),(0,l.kt)("li",{parentName:"ul"},"labelMap prefix: wds.linkis.client.label\n")),(0,l.kt)("p",null,"Note:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"variableMap does not support configuration")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When there is a conflict between the configured key and the key entered in the command parameter, the priority is as follows:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Instruction Parameters> Key in Instruction Map Type Parameters> User Configuration> Default Configuration\n")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"Configure engine startup parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.param.conf.spark.executor.instances=3\n   wds.linkis.client.param.conf.wds.linkis.yarnqueue=q02\n")),(0,l.kt)("p",null,"Configure labelMap parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"   wds.linkis.client.label.myLabel=label123\n")),(0,l.kt)("h3",{id:"56-output-result-set-to-file"},"5.6 output result set to file"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-outPath")," parameter to specify an output directory, linkis-cli will output the result set to a file, and each result set will automatically create a file. The output format is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        task-[taskId]-result-[idx].txt\n")),(0,l.kt)("p",null,"E.g:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"        task-906-result-1.txt\n        task-906-result-2.txt\n        task-906-result-3.txt\n")))}c.isMDXComponent=!0}}]);