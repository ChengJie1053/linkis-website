"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[67659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"EngineConn Design",sidebar_position:1},o=void 0,l={unversionedId:"architecture/feature/computation-governance-services/engine/engine-conn",id:"architecture/feature/computation-governance-services/engine/engine-conn",title:"EngineConn Design",description:"1. Overview",source:"@site/docs/architecture/feature/computation-governance-services/engine/engine-conn.md",sourceDirName:"architecture/feature/computation-governance-services/engine",slug:"/architecture/feature/computation-governance-services/engine/engine-conn",permalink:"/docs/1.3.2/architecture/feature/computation-governance-services/engine/engine-conn",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/architecture/feature/computation-governance-services/engine/engine-conn.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"EngineConn Design",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"EngineConn History Features",permalink:"/docs/1.3.2/architecture/feature/computation-governance-services/linkis-manager/engine-conn-history"},next:{title:"EngineConnPlugin (ECP) Design",permalink:"/docs/1.3.2/architecture/feature/computation-governance-services/engine/engine-conn-plugin"}},s={},c=[{value:"1. Overview",id:"1-overview",level:2},{value:"2. Overall Design",id:"2-overall-design",level:2},{value:"2.1 Technical Architecture",id:"21-technical-architecture",level:3},{value:"2.2 Business Architecture",id:"22-business-architecture",level:3},{value:"3. Module design",id:"3-module-design",level:2},{value:"4. Data structure/storage design",id:"4-data-structurestorage-design",level:2},{value:"5. Interface design",id:"5-interface-design",level:2},{value:"6. Non-functional design",id:"6-non-functional-design",level:2},{value:"6.1 Security",id:"61-security",level:3},{value:"6.2 Performance",id:"62-performance",level:3},{value:"6.3 Capacity",id:"63-capacity",level:3},{value:"6.4 High Availability",id:"64-high-availability",level:3},{value:"6.5 Data Quality",id:"65-data-quality",level:3}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-overview"},"1. Overview"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"EngineConn: engine connector, which is used to connect to the underlying computing and storage engine to complete task execution, task information push and result return, etc. It is the basis for Linkis to provide computing and storage capabilities.\n")),(0,r.kt)("h2",{id:"2-overall-design"},"2. Overall Design"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," The overall design idea of EngineConn is to complete the acquisition and storage of the session information of the underlying engine when starting, complete the connection between the EngineConn process and the underlying engine, and then complete the scheduling of tasks to the underlying engine Session stored in EngineConn through the Executor unit for execution. and get execution-related information.\n")),(0,r.kt)("h3",{id:"21-technical-architecture"},"2.1 Technical Architecture"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Introduction to related terms:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EngineConn:")," Used to store the session information of the underlying engine. To complete the connection with the underlying engine, for example, the Spark engine stores the SparkSession."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Executor:")," The scheduling executor used to accept the task passed by the caller (such as: Entrance), and finally submit the task to the underlying engine Session for execution. Different tasks implement different Executor classes. The most used is the interactive ComputationExecutor, which is used to accept tasks and push task information to the caller in real time. And the non-interactive ManageableOnceExecutor that accepts only one task is used to complete the submission and execution of the task started by EngineConn."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"arc",src:n(54937).Z,width:"1493",height:"1216"})),(0,r.kt)("h3",{id:"22-business-architecture"},"2.2 Business Architecture"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Component name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"First-level module"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Second-level module"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Function points"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linkis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-engineconn-common"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The common module of engine conn, which defines the most basic entity classes and interfaces in engine conn.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linkis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-engineconn-core"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The core module of the engine connector, which defines the interfaces involved in the core logic of EngineConn.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linkis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-executor-core"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The core module of the executor, which defines the core classes related to the executor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linkis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-accessible-executor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The underlying abstraction of the accessible Executor. You can interact with it through RPC requests to obtain its status, load, concurrency and other basic indicators Metrics data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Linkis"),(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"linkis-computation-engineconn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Related classes that provide capabilities for interactive computing tasks.")))),(0,r.kt)("h2",{id:"3-module-design"},"3. Module design"),(0,r.kt)("p",null,"Input: The caller executes the task"),(0,r.kt)("p",null,"Output: return task information such as execution status, results, logs, etc."),(0,r.kt)("p",null,"Key logic: the timing diagram of the key logic of task execution"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"time",src:n(6829).Z,width:"669",height:"691"})),(0,r.kt)("p",null,"Key Notes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If it is a serial Executor, after EngineConn receives a task, it will mark EngineConn as Busy and cannot accept other tasks, and will judge whether the lock of the task is consistent to prevent EngineConn from being submitted by multiple callers at the same time. After the task is executed, it becomes the Unlock state"),(0,r.kt)("li",{parentName:"ol"},"If it is a parallel Executor, after EngineConn receives the task, the state is still in the Unlock state, and it can continue to accept the task. Only when the number of concurrent tasks is reached or the machine index is abnormal will it be marked as Busy state"),(0,r.kt)("li",{parentName:"ol"},"If it is an Once type task, EngineConn will automatically execute the task after it is started, and the EngineConn process will exit after the task is executed.")),(0,r.kt)("h2",{id:"4-data-structurestorage-design"},"4. Data structure/storage design"),(0,r.kt)("p",null,"not involving"),(0,r.kt)("h2",{id:"5-interface-design"},"5. Interface design"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Brief introduction of other classes:")),(0,r.kt)("p",null,"The common module of linkis-engineconn-common engine connector defines the most basic entity classes and interfaces in the engine connector."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Service"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineCreationContext"),(0,r.kt)("td",{parentName:"tr",align:"left"},"contains the context information of EngineConn during startup")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConn"),(0,r.kt)("td",{parentName:"tr",align:"left"},"contains the specific information of EngineConn, such as type, specific connection information with layer computing storage engine, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineExecution"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides the creation logic of Executor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnHook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the operations before and after each stage of engine startup")))),(0,r.kt)("p",null,"The core module of linkis-engineconn-core engine connector defines the interfaces involved in the core logic of EngineConn."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Classes"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Functions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnManager"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides related interfaces for creating and obtaining EngineConn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ExecutorManager"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides related interfaces for creating and obtaining Executor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ShutdownHook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines actions during engine shutdown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnServer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Startup class of EngineConn microservice")))),(0,r.kt)("p",null,"linkis-executor-core is the core module of the executor, which defines the core classes related to the executor. The executor is the real computing execution unit, which is responsible for submitting user code to EngineConn for execution."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Classes"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Functions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Executor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"is the actual computing logic execution unit, and provides top-level abstraction of various capabilities of the engine.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnAsyncEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"defines EngineConn related asynchronous events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnSyncEvent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"defines the synchronization event related to EngineConn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnAsyncListener"),(0,r.kt)("td",{parentName:"tr",align:"left"},"defines EngineConn-related asynchronous event listeners")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnSyncListener"),(0,r.kt)("td",{parentName:"tr",align:"left"},"defines EngineConn-related synchronization event listeners")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnAsyncListenerBus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the listener bus for EngineConn asynchronous events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnSyncListenerBus"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the listener bus for EngineConn sync events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ExecutorListenerBusContext"),(0,r.kt)("td",{parentName:"tr",align:"left"},"defines the context of the EngineConn event listener")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LabelService"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provide label reporting function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ManagerService"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides the function of information transfer with LinkisManager")))),(0,r.kt)("p",null,"linkis-accessible-executor: The underlying abstraction of the Executor that can be accessed. You can interact with it through RPC requests to obtain basic metrics such as its status, load, and concurrency."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Classes"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Functions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LogCache"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides the function of log caching")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AccessibleExecutor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An Executor that can be accessed and interacted with via RPC requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NodeHealthyInfoManager"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Manage Executor's health information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NodeHeartbeatMsgManager"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Manage Executor's heartbeat information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NodeOverLoadInfoManager"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Manage Executor load information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Listener-related"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides events related to Executor and corresponding listener definitions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnTimedLock"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define Executor level lock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AccessibleService"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provide the start-stop and status acquisition functions of Executor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ExecutorHeartbeatService"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides Executor's heartbeat-related functions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LockService"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides lock management functions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LogService"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides log management functions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnCallback"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Define the callback logic of EngineConn")))),(0,r.kt)("p",null,"Related classes that provide capabilities for interactive computing tasks."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Classes"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Core Functions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EngineConnTask"),(0,r.kt)("td",{parentName:"tr",align:"left"},"defines interactive computing tasks submitted to EngineConn")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ComputationExecutor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"defines an interactive Executor, which has interactive capabilities such as status query and task kill, and can only execute tasks once by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ConcurrentComputationExecutor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Interactive synchronous concurrent Executor, inherited from ComputationExecutor, but supports executing multiple tasks at the same time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AsyncConcurrentComputationExecutor"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Interactive asynchronous concurrent Executor, inherited from ComputationExecutor, supports multiple tasks to be executed at the same time, and the task does not occupy the execution thread and adopts the form of asynchronous notification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TaskExecutionService"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Provides management functions for interactive computing tasks")))),(0,r.kt)("h2",{id:"6-non-functional-design"},"6. Non-functional design"),(0,r.kt)("h3",{id:"61-security"},"6.1 Security"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All the relevant information of the task can only be queried by submitting the user"),(0,r.kt)("li",{parentName:"ol"},"The default startup user of the EngineConn process is the submission user")),(0,r.kt)("h3",{id:"62-performance"},"6.2 Performance"),(0,r.kt)("p",null,"EngineConn that supports concurrency supports colleagues to run a large number of tasks concurrently. For example, a single Trino EngineConn can run more than 300 trino tasks at the same time"),(0,r.kt)("h3",{id:"63-capacity"},"6.3 Capacity"),(0,r.kt)("p",null,"not involving"),(0,r.kt)("h3",{id:"64-high-availability"},"6.4 High Availability"),(0,r.kt)("p",null,"EngineConn is a process started on demand and task. Support high availability"),(0,r.kt)("h3",{id:"65-data-quality"},"6.5 Data Quality"),(0,r.kt)("p",null,"not involving"))}u.isMDXComponent=!0},54937:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ec_arc_01-89727cc94c3f7a45f1e305375f26fa43.png"},6829:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ec_arc_02-92cd8e8370b5780197b17f08ecf52492.png"}}]);