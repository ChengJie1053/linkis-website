"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[40300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,r[1]=a;for(var c=2;c<s;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const s={title:"Use of 0.X SDK",sidebar_position:0},r=void 0,a={unversionedId:"user-guide/X-sdk-manual",id:"version-0.11.0/user-guide/X-sdk-manual",title:"Use of 0.X SDK",description:"Linkis provides a convenient interface for calling JAVA and SCALA, which can be used only by introducing the ujes-client module",source:"@site/versioned_docs/version-0.11.0/user-guide/0.X-sdk-manual.md",sourceDirName:"user-guide",slug:"/user-guide/X-sdk-manual",permalink:"/docs/0.11.0/user-guide/X-sdk-manual",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-0.11.0/user-guide/0.X-sdk-manual.md",tags:[],version:"0.11.0",sidebarPosition:0,frontMatter:{title:"Use of 0.X SDK",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Source Code Directory Structure",permalink:"/docs/0.11.0/deployment/sourcecode-hierarchical-structure"},next:{title:"Use of 1.0 SDK",permalink:"/docs/0.11.0/user-guide/1.0-sdk-manual"}},l={},c=[{value:"1 Introduce dependent modules",id:"1-introduce-dependent-modules",level:2},{value:"2 Java test code",id:"2-java-test-code",level:2},{value:"3 Scala test code",id:"3-scala-test-code",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Linkis provides a convenient interface for calling JAVA and SCALA, which can be used only by introducing the ujes-client module")),(0,o.kt)("h2",{id:"1-introduce-dependent-modules"},"1 Introduce dependent modules"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<dependency>\n  <groupId>com.webank.wedatasphere.linkis</groupId>\n  <artifactId>linkis-ujes-client</artifactId>\n  <version>0.9.3</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"2-java-test-code"},"2 Java test code"),(0,o.kt)("p",null,"Establish the Java test class UJESClientImplTestJ, the specific interface meaning can be seen in the notes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.wedatasphere.linkis.ujes.test;\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils;\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.TokenAuthenticationStrategy;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfig;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClientImpl;\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobExecuteAction;\nimport com.webank.wedatasphere.linkis.ujes.client.request.ResultSetAction;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobExecuteResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobInfoResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobProgressResult;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class UJESClientTest {\n\n    public static void main(String[] args){\n\n        String user = "hadoop";\n        String executeCode = "show databases;";\n\n        // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n        DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n                .addUJESServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the linkis server-side gateway, such as http://{ip}:{port}\n                .connectionTimeout(30000) //connectionTimeOut client connection timeout\n                .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n                .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n                .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n                .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n                .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n                .setAuthTokenKey("${username}").setAuthTokenValue("${password}"))) //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n                .setDWSVersion("v1").build(); //Linkis background protocol version, the current version is v1\n\n        // 2. Get a UJESClient through DWSClientConfig\n        UJESClient client = new UJESClientImpl(clientConfig);\n\n        try {\n            // 3. Start code execution\n            System.out.println("user: "+ user + ", code: [" + executeCode + "]");\n            Map<String, Object> startupMap = new HashMap<String, Object>();\n            startupMap.put("wds.linkis.yarnqueue", "default"); // Various startup parameters can be stored in startupMap, see linkis management console configuration\n            JobExecuteResult jobExecuteResult = client.execute(JobExecuteAction.builder()\n                    .setCreator("linkisClient-Test") //creator, the system name of the client requesting linkis, used for system-level isolation\n                    .addExecuteCode(executeCode) //ExecutionCode The code to be executed\n                    .setEngineType((JobExecuteAction.EngineType) JobExecuteAction.EngineType$.MODULE$.HIVE()) // The execution engine type of the linkis that you want to request, such as Spark hive, etc.\n                    .setUser(user) //User, request user; used for user-level multi-tenant isolation\n                    .setStartupParams(startupMap)\n                    .build());\n            System.out.println("execId: "+ jobExecuteResult.getExecID() + ", taskId:" + jobExecuteResult.taskID());\n\n            // 4. Get the execution status of the script\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            while(!jobInfoResult.isCompleted()) {\n                // 5. Get the execution progress of the script\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            // 6. Get the job information of the script\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 8. Get a specific result set through a result set information\n            Object fileContents = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build()).getFileContent();\n            System.out.println("fileContents: "+ fileContents);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n}\n')),(0,o.kt)("p",null,"Run the above code to interact with Linkis"),(0,o.kt)("h2",{id:"3-scala-test-code"},"3 Scala test code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'package com.wedatasphere.linkis.ujes.test\n\nimport java.util.concurrent.TimeUnit\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobExecuteAction.EngineType\nimport com.webank.wedatasphere.linkis.ujes.client.request.{JobExecuteAction, ResultSetAction}\nimport org.apache.commons.io.IOUtils\n\nobject UJESClientImplTest extends App {\n\n  var executeCode = "show databases;"\n  var user = "hadoop"\n\n  // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addUJESServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the Linkis server-side gateway, such as http://{ip}:{port}\n    .connectionTimeout(30000) //connectionTimeOut client connection timeout\n    .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n    .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n    .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n    .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n    .setAuthTokenKey("${username}").setAuthTokenValue("${password}") //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n    .setDWSVersion("v1").build() //Linkis backend protocol version, the current version is v1\n\n  // 2. Get a UJESClient through DWSClientConfig\n  val client = UJESClient(clientConfig)\n  \n  try {\n    // 3. Start code execution\n    println("user: "+ user + ", code: [" + executeCode + "]")\n    val startupMap = new java.util.HashMap[String, Any]()\n    startupMap.put("wds.linkis.yarnqueue", "default") //Startup parameter configuration\n    val jobExecuteResult = client.execute(JobExecuteAction.builder()\n      .setCreator("LinkisClient-Test") //creator, requesting the system name of the Linkis client, used for system-level isolation\n      .addExecuteCode(executeCode) //ExecutionCode The code to be executed\n      .setEngineType(EngineType.SPARK) // The execution engine type of Linkis that you want to request, such as Spark hive, etc.\n      .setStartupParams(startupMap)\n      .setUser(user).build()) //User, request user; used for user-level multi-tenant isolation\n    println("execId: "+ jobExecuteResult.getExecID + ", taskId:" + jobExecuteResult.taskID)\n    \n    // 4. Get the execution status of the script\n    var jobInfoResult = client.getJobInfo(jobExecuteResult)\n    val sleepTimeMills: Int = 1000\n    while (!jobInfoResult.isCompleted) {\n      // 5. Get the execution progress of the script\n      val progress = client.progress(jobExecuteResult)\n      val progressInfo = if (progress.getProgressInfo != null) progress.getProgressInfo.toList else List.empty\n      println("progress: "+ progress.getProgress + ", progressInfo:" + progressInfo)\n      Utils.sleepQuietly(sleepTimeMills)\n      jobInfoResult = client.getJobInfo(jobExecuteResult)\n    }\n    if (!jobInfoResult.isSucceed) {\n      println("Failed to execute job: "+ jobInfoResult.getMessage)\n      throw new Exception(jobInfoResult.getMessage)\n    }\n\n    // 6. Get the job information of the script\n    val jobInfo = client.getJobInfo(jobExecuteResult)\n    // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n    val resultSetList = jobInfoResult.getResultSetList(client)\n    println("All result set list:")\n    resultSetList.foreach(println)\n    val oneResultSet = jobInfo.getResultSetList(client).head\n    // 8. Get a specific result set through a result set information\n    val fileContents = client.resultSet(ResultSetAction.builder().setPath(oneResultSet).setUser(jobExecuteResult.getUser).build()).getFileContent\n    println("First fileContents: ")\n    println(fileContents)\n  } catch {\n    case e: Exception => {\n      e.printStackTrace()\n    }\n  }\n  IOUtils.closeQuietly(client)\n}\n')))}p.isMDXComponent=!0}}]);