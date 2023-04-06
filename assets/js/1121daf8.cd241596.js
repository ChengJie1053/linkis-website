"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[46123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=s,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(87462),s=(n(67294),n(3905));const r={title:"Installation Scriptis Tool",sidebar_position:4.1},a=void 0,o={unversionedId:"deployment/integrated/install-scriptis",id:"deployment/integrated/install-scriptis",title:"Installation Scriptis Tool",description:"1 Introduction",source:"@site/docs/deployment/integrated/install-scriptis.md",sourceDirName:"deployment/integrated",slug:"/deployment/integrated/install-scriptis",permalink:"/docs/1.4.0/deployment/integrated/install-scriptis",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/docs/deployment/integrated/install-scriptis.md",tags:[],version:"current",sidebarPosition:4.1,frontMatter:{title:"Installation Scriptis Tool",sidebar_position:4.1},sidebar:"tutorialSidebar",previous:{title:"Version Adaptation",permalink:"/docs/1.4.0/deployment/version-adaptation"},next:{title:"Involve SkyWaling",permalink:"/docs/1.4.0/deployment/integrated/involve-skywalking"}},l={},c=[{value:"1 Introduction",id:"1-introduction",level:2},{value:"2. Environment preparation",id:"2-environment-preparation",level:2},{value:"2.1 Install node.js",id:"21-install-nodejs",level:3},{value:"2.2 Install learn",id:"22-install-learn",level:3},{value:"3 Compile and deploy",id:"3-compile-and-deploy",level:2},{value:"3.1 Get scriptis code",id:"31-get-scriptis-code",level:3},{value:"3.2 Running the project locally (optional)",id:"32-running-the-project-locally-optional",level:3},{value:"3.2.1 Configure linkis-gateway service address configuration",id:"321-configure-linkis-gateway-service-address-configuration",level:4},{value:"3.2.2 Running the scriptis module",id:"322-running-the-scriptis-module",level:4},{value:"4 Packaging &amp; deploying scriptis",id:"4-packaging--deploying-scriptis",level:2},{value:"4.1 Packaging",id:"41-packaging",level:3},{value:"4.2 Deployment",id:"42-deployment",level:3},{value:"5 scriptis usage steps",id:"5-scriptis-usage-steps",level:2},{value:"5.1 Log in to Linkis console normally",id:"51-log-in-to-linkis-console-normally",level:3},{value:"5.2 Access the scriptis page after successful login",id:"52-access-the-scriptis-page-after-successful-login",level:3},{value:"5.3 Using scriptis",id:"53-using-scriptis",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-introduction"},"1 Introduction"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"After Apache Linkis >= 1.1.1 and DSS >= 1.1.0, scriptis can be deployed separately and used in conjunction with Linkis. Using the interactive analysis function of scriptis, you can write SQL, Pyspark, HiveQL, etc. online on web pages Scripts are submitted to Linkis for execution and support features such as UDFs, functions, resource management and custom variables. This article will introduce how to deploy the web component-scriptis separately, and use  Apache Linkis through the scriptis web page.")),(0,s.kt)("p",null,"Prerequisite: The Linkis service (backend and management desk service) has been successfully installed and can be used normally. The deployment process of Linkis can be found in ",(0,s.kt)("a",{parentName:"p",href:"/docs/1.4.0/deployment/deploy-quick"},"Quick Deployment of Apache Linkis")),(0,s.kt)("p",null,"Example description:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The address of the linkis-gateway service is 10.10.10.10 and the port is 9001"),(0,s.kt)("li",{parentName:"ul"},"Linkis console nginx is deployed on 10.10.10.10 port 8080")),(0,s.kt)("h2",{id:"2-environment-preparation"},"2. Environment preparation"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Requires installation on first use")),(0,s.kt)("h3",{id:"21-install-nodejs"},"2.1 Install node.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"Download node.js and install it. Download address: http://nodejs.cn/download/ (It is recommended to use node v14 version) This step only needs to be executed for the first time\n")),(0,s.kt)("h3",{id:"22-install-learn"},"2.2 Install learn"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#Wait for the installation to complete, the installation of liarn only needs to be executed when it is used for the first time\nnpm install lerna -g\n")),(0,s.kt)("h2",{id:"3-compile-and-deploy"},"3 Compile and deploy"),(0,s.kt)("h3",{id:"31-get-scriptis-code"},"3.1 Get scriptis code"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"scriptis is a pure front-end project, integrated as a component in the DSS web code component, we only need to compile the DSS web project with a separate scriptis module")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#Download >=dss 1.1.0 via git to compile script components\ngit clone -b branch-1.1.0 https://github.com/WeBankFinTech/DataSphereStudio\n# Or directly download the zip package and unzip it\nhttps://github.com/WeBankFinTech/DataSphereStudio/archive/refs/heads/branch-1.1.0.zip\n\n# enter the web directory\ncd DataSphereStudio/web\n\n#This step is only required for the first use\nlerna init\n\n#Add dependencies Note: This is not through npm install but lerna bootstrap needs to be installed first learn This step only needs to be executed for the first time\nlerna bootstrap\n")),(0,s.kt)("h3",{id:"32-running-the-project-locally-optional"},"3.2 Running the project locally (optional)"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If you don't need to run the debug view locally, you can skip this step")),(0,s.kt)("h4",{id:"321-configure-linkis-gateway-service-address-configuration"},"3.2.1 Configure linkis-gateway service address configuration"),(0,s.kt)("p",null,"If you start the service locally, you need to configure the backend linkis-gateway service address in the code, in the ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file in the ",(0,s.kt)("inlineCode",{parentName:"p"},"web/packages/dss/")," directory,\nNo configuration is required when packaging and deploying"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"// Backend linkis-gatway service address\nVUE_APP_HOST=http://10.10.10.10:9001\nVUE_APP_MN_CONFIG_PREFIX=http://10.10.10.10:9001/api/rest_j/v1\n")),(0,s.kt)("h4",{id:"322-running-the-scriptis-module"},"3.2.2 Running the scriptis module"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd DataSphereStudio/web\n# run scriptis component\nnpm run serve --module=scriptis --micro_module=scriptis\n")),(0,s.kt)("p",null,"Open the browser and access the application script through the link ",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," (the default port for local requests is 8080), because it will request the remote linkis-gatway service interface, which will cause cross-domain problems, chrome browser To solve cross-domain problems, please refer to ",(0,s.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/56b1e01e6b6a"},"Solving Chrome Cross-Domain Problems")),(0,s.kt)("h2",{id:"4-packaging--deploying-scriptis"},"4 Packaging & deploying scriptis"),(0,s.kt)("h3",{id:"41-packaging"},"4.1 Packaging"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#Specify scriptis module\ncd DataSphereStudio/web\n\n#After the command is executed successfully, a folder named `dist` will appear in the web directory, which is the component resource code of the packaged scriptis. We need to deploy the front-end resource to the nginx server where linkis-web is located\nnpm run build --module=scriptis --micro_module=scriptis\n")),(0,s.kt)("h3",{id:"42-deployment"},"4.2 Deployment"),(0,s.kt)("p",null,"Upload the static resources compiled in step 3.1 to the server where the Linkis console is located, and store them in ",(0,s.kt)("inlineCode",{parentName:"p"},"/data/Install/scriptis-web/dist/"),",\nIn the nginx server configuration where Linkis console is installed, add scriptis static resource access rules. The nginx configuration deployed by Linkis console is generally located in ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/linkis.conf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," location /scripts {\n     alias /data/Install/scriptis-web/dist/ ;\n     index index.html ;\n}\n")),(0,s.kt)("p",null,"sudo vim ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d/linkis.conf")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"server {\n            listen 8080;# access port\n            server_name localhost;\n            #charset koi8-r;\n            #access_log /var/log/nginx/host.access.log main;\n\n            location / {\n             root /appcom/Install/linkis-web/dist/; # static file directory\n             index index.html;\n            }\n\n           location /scriptis { #scriptis resources are prefixed with scriptis to distinguish them from the linkis console\n             alias /data/Install/scriptis-web/dist/ ; #nginx scriptis static file storage path (customizable)\n             index index.html ;\n            }\n\n        ......\n\nlocation /api {\n            proxy_pass http://10.10.10.10:9001; address of #gatway\n            proxy_set_header Host $host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header x_real_ipP $remote_addr;\n            proxy_set_header remote_addr $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_http_version 1.1;\n            proxy_connect_timeout 4s;\n            proxy_read_timeout 600s;\n            proxy_send_timeout 12s;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection upgrade;\n            }\n\n            #error_page 404 /404.html;\n            # redirect server error pages to the static page /50x.html\n            #\n            error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n            root /usr/share/nginx/html;\n            }\n        }\n\n")),(0,s.kt)("p",null,"After modifying the configuration, reload the nginx configuration"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo nginx -s reload\n")),(0,s.kt)("p",null,"Note the difference between root and alias in the location configuration block in nginx"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The processing result of root is: root path + location path."),(0,s.kt)("li",{parentName:"ul"},"The result of alias processing is: replace the location path with the alias path."),(0,s.kt)("li",{parentName:"ul"},"alias is the definition of a directory alias, root is the definition of the topmost directory")),(0,s.kt)("h2",{id:"5-scriptis-usage-steps"},"5 scriptis usage steps"),(0,s.kt)("h3",{id:"51-log-in-to-linkis-console-normally"},"5.1 Log in to Linkis console normally"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#http://10.10.10.10:8080/#/\nhttp://nginxIp:port/#/\n")),(0,s.kt)("p",null,"Because access to scriptis requires login verification, you need to log in first, obtain and cache cookies."),(0,s.kt)("h3",{id:"52-access-the-scriptis-page-after-successful-login"},"5.2 Access the scriptis page after successful login"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"#http://10.10.10.10:8080/scriptis/#/home\nhttp://nginxIp:port/scriptis/#/home\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"nginxIp"),": The ip of the nginx server deployed by the Linkis console, ",(0,s.kt)("inlineCode",{parentName:"p"},"port"),": the port number of the nginx configuration startup, ",(0,s.kt)("inlineCode",{parentName:"p"},"scriptis")," is the location address of the nginx configuration for requesting the static files of the scriptis project (can be customized)"),(0,s.kt)("h3",{id:"53-using-scriptis"},"5.3 Using scriptis"),(0,s.kt)("p",null,"Take creating a new sql query task as an example."),(0,s.kt)("p",null,"step1 Create a new script Select the script type as sql type"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Rendering",src:n(12674).Z,width:"1915",height:"694"})),(0,s.kt)("p",null,"step2 Enter the statement to be queried"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Rendering",src:n(21989).Z,width:"1918",height:"604"})),(0,s.kt)("p",null,"step3 run"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Rendering",src:n(42968).Z,width:"1716",height:"317"})),(0,s.kt)("p",null,"shep4 View Results"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Rendering",src:n(49015).Z,width:"1920",height:"812"})))}u.isMDXComponent=!0},49015:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/design_sketch-5a7e1807d1f587129e33b863c1da1418.png"},12674:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new_script-f73ee84fe932d7d4cc43c40408405722.png"},42968:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/running_results-b181b4b3a60bc22c7a1bfc72356b165b.png"},21989:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/test_statement-0ed452eb88b6c3f9a9bb89fe06901c3b.png"}}]);