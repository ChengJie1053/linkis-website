"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[49618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>S});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,S=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(S,o(o({ref:t},u),{},{components:a})):n.createElement(S,o({ref:t},u))}));function S(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4649:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"DataSource Client SDK \u7684\u4f7f\u7528",sidebar_position:4},o=void 0,s={unversionedId:"user-guide/linkis-datasource-client",id:"version-1.1.3/user-guide/linkis-datasource-client",title:"DataSource Client SDK \u7684\u4f7f\u7528",description:"Linkis DataSource \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684JAVA\u548cSCALA\u8c03\u7528\u7684\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u5f15\u5165linkis-datasource-client\u7684\u6a21\u5757\u5c31\u53ef\u4ee5\u8fdb\u884c\u4f7f\u7528\uff0c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/user-guide/linkis-datasource-client.md",sourceDirName:"user-guide",slug:"/user-guide/linkis-datasource-client",permalink:"/zh-CN/docs/1.1.3/user-guide/linkis-datasource-client",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/user-guide/linkis-datasource-client.md",tags:[],version:"1.1.3",sidebarPosition:4,frontMatter:{title:"DataSource Client SDK \u7684\u4f7f\u7528",sidebar_position:4},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"Linkis \u7ba1\u7406\u53f0\u7684\u4f7f\u7528",permalink:"/zh-CN/docs/1.1.3/user-guide/console-manual"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.1.3/engine-usage/overview"}},c={},l=[{value:"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757",id:"1-\u5f15\u5165\u4f9d\u8d56\u6a21\u5757",level:2},{value:"2. Scala\u6d4b\u8bd5\u4ee3\u7801",id:"2-scala\u6d4b\u8bd5\u4ee3\u7801",level:2}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Linkis DataSource \u63d0\u4f9b\u4e86\u65b9\u4fbf\u7684JAVA\u548cSCALA\u8c03\u7528\u7684\u63a5\u53e3\uff0c\u53ea\u9700\u8981\u5f15\u5165linkis-datasource-client\u7684\u6a21\u5757\u5c31\u53ef\u4ee5\u8fdb\u884c\u4f7f\u7528\uff0c")),(0,r.kt)("h2",{id:"1-\u5f15\u5165\u4f9d\u8d56\u6a21\u5757"},"1. \u5f15\u5165\u4f9d\u8d56\u6a21\u5757"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," <dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-datasource-client</artifactId>\n   <version>${linkis.version}</version>\n </dependency>\n\u5982\uff1a\n <dependency>\n   <groupId>org.apache.linkis</groupId>\n   <artifactId>linkis-datasource-client</artifactId>\n   <version>1.1.0</version>\n </dependency>\n")),(0,r.kt)("h2",{id:"2-scala\u6d4b\u8bd5\u4ee3\u7801"},"2. Scala\u6d4b\u8bd5\u4ee3\u7801"),(0,r.kt)("p",null,"\u5efa\u7acbScala\u7684\u6d4b\u8bd5\u7c7bLinkisDataSourceClientTest\uff0c\u5177\u4f53\u63a5\u53e3\u542b\u4e49\u53ef\u4ee5\u89c1\u6ce8\u91ca\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nimport com.fasterxml.jackson.databind.ObjectMapper\nimport org.apache.linkis.common.utils.JsonUtils\nimport org.apache.linkis.datasource.client.impl.{LinkisDataSourceRemoteClient, LinkisMetaDataRemoteClient}\nimport org.apache.linkis.datasource.client.request.{CreateDataSourceAction, GetAllDataSourceTypesAction, MetadataGetDatabasesAction, UpdateDataSourceParameterAction}\nimport org.apache.linkis.datasourcemanager.common.domain.{DataSource, DataSourceType}\nimport org.apache.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport org.apache.linkis.httpclient.dws.config.{DWSClientConfig, DWSClientConfigBuilder}\n\nimport java.io.StringWriter\nimport java.util\nimport java.util.concurrent.TimeUnit\n\n\nobject LinkisDataSourceClientTest {\n\n  def main(args: Array[String]): Unit = {\n    val clientConfig =DWSClientConfigBuilder.newBuilder\n      .addServerUrl("http://127.0.0.1:9001") //set linkis-mg-gateway url: http://{ip}:{port}\n      .connectionTimeout(30000) //connection timtout\n      .discoveryEnabled(false) //disable discovery\n      .discoveryFrequency(1, TimeUnit.MINUTES)  // discovery frequency\n      .loadbalancerEnabled(true) // enable loadbalance\n      .maxConnectionSize(5) // set max Connection\n      .retryEnabled(false) // set retry\n      .readTimeout(30000) //set read timeout\n      .setAuthenticationStrategy(new StaticAuthenticationStrategy) //AuthenticationStrategy Linkis authen suppory static and Token\n      .setAuthTokenKey("hadoop")  // set submit user\n      .setAuthTokenValue("xxx") // set passwd or token\n      .setDWSVersion("v1") //linkis rest version v1\n      .build\n     //init datasource remote client   \n     val dataSourceClient = new LinkisDataSourceRemoteClient(clientConfig)\n     //init metadata remote client\n     val metaDataClient = new LinkisMetaDataRemoteClient(clientConfig)\n    //get all datasource type\n    testGetAllDataSourceTypes(dataSourceClient)\n    //create kafka datasource\n    testCreateDataSourceForKafka(dataSourceClient)\n    //create es datasource\n    testCreateDataSourceForEs(dataSourceClient)\n    //update datasource parameter for kafka\n    testUpdateDataSourceParameterForKafka(dataSourceClient)\n    //update datasource parameter for es\n    testUpdateDataSourceParameterForEs(dataSourceClient)\n    //get hive metadata database list\n    testMetadataGetDatabases(metaDataClient)\n  }\n\ndef testGetAllDataSourceTypes(client:LinkisDataSourceRemoteClient): Unit ={\n    val getAllDataSourceTypesResult = client.getAllDataSourceTypes(GetAllDataSourceTypesAction.builder().setUser("hadoop").build()).getAllDataSourceType\n    System.out.println(getAllDataSourceTypesResult)\n  }\n\ndef testCreateDataSourceForKafka(client:LinkisDataSourceRemoteClient): Unit ={\n    val dataSource = new DataSource();\n    val dataSourceType = new DataSourceType\n    dataSourceType.setName("kafka")\n    dataSourceType.setId("2")\n    dataSourceType.setLayers(2)\n    dataSourceType.setClassifier("\u6d88\u606f\u961f\u5217")\n    dataSourceType.setDescription("kafka")\n    dataSource.setDataSourceType(dataSourceType)\n    dataSource.setDataSourceName("kafka-test")\n    dataSource.setCreateSystem("client")\n    dataSource.setDataSourceTypeId(2l);\n\n    val dsJsonWriter = new StringWriter\n\n    val mapper = new ObjectMapper\n    JsonUtils.jackson.writeValue(dsJsonWriter, dataSource)\n    val map = mapper.readValue(dsJsonWriter.toString,new util.HashMap[String,Any]().getClass)\n    val id = client.createDataSource(CreateDataSourceAction.builder().setUser("hadoop").addRequestPayloads(map).build()).getInsert_id\n    System.out.println(id)\n\n  }\n\ndef testCreateDataSourceForEs(client:LinkisDataSourceRemoteClient): Unit ={\n    val dataSource = new DataSource();\n    dataSource.setDataSourceName("es-test")\n    dataSource.setCreateSystem("client")\n    dataSource.setDataSourceTypeId(7l);\n    val dsJsonWriter = new StringWriter\n    val mapper = new ObjectMapper\n    JsonUtils.jackson.writeValue(dsJsonWriter, dataSource)\n    val map = mapper.readValue(dsJsonWriter.toString,new util.HashMap[String,Any]().getClass)\n    val id = client.createDataSource(CreateDataSourceAction.builder().setUser("hadoop").addRequestPayloads(map).build()).getInsert_id\n    System.out.println(id)\n\n  }\n\ndef testUpdateDataSourceParameterForKafka(client:LinkisDataSourceRemoteClient): Unit ={\n    val params = new util.HashMap[String,Any]()\n    val connParams = new util.HashMap[String,Any]()\n    connParams.put("brokers","172.24.2.232:9092")\n    params.put("connectParams",connParams)\n    params.put("comment","kafka data source")\n  client.updateDataSourceParameter(UpdateDataSourceParameterAction.builder().setUser("hadoop").setDataSourceId("7").addRequestPayloads(params).build())\n  }\n\ndef testUpdateDataSourceParameterForEs(client:LinkisDataSourceRemoteClient): Unit ={\n    val params = new util.HashMap[String,Any]()\n    val connParams = new util.HashMap[String,Any]()\n    val elasticUrls = new util.ArrayList[String]()\n    elasticUrls.add("http://172.24.2.231:9200")\n    connParams.put("elasticUrls",elasticUrls)\n    params.put("connectParams",connParams)\n    params.put("comment","es data source")\n    client.updateDataSourceParameter(UpdateDataSourceParameterAction.builder().setUser("hadoop").setDataSourceId("8").addRequestPayloads(params).build())\n  }\n\n\n def testMetadataGetDatabases(client:LinkisMetaDataRemoteClient): Unit ={\n  client.getDatabases(MetadataGetDatabasesAction.builder().setUser("hadoop").setDataSourceId(9l).setUser("hadoop").setSystem("client").build()).getDbs\n  }\n}\n')))}d.isMDXComponent=!0}}]);