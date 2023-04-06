"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[31666],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>c});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},u=function(e){var i=d(e.components);return n.createElement(s.Provider,{value:i},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},k=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(t),k=a,c=m["".concat(s,".").concat(k)]||m[k]||p[k]||l;return t?n.createElement(c,r(r({ref:i},u),{},{components:t})):n.createElement(c,r({ref:i},u))}));function c(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=k;var o={};for(var s in i)hasOwnProperty.call(i,s)&&(o[s]=i[s]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5210:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const l={title:"How to Build Docker Image",sidebar_position:4},r=void 0,o={unversionedId:"development/build-docker",id:"version-1.3.2/development/build-docker",title:"How to Build Docker Image",description:"Linkis Image Components",source:"@site/versioned_docs/version-1.3.2/development/build-docker.md",sourceDirName:"development",slug:"/development/build-docker",permalink:"/docs/latest/development/build-docker",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/development/build-docker.md",tags:[],version:"1.3.2",sidebarPosition:4,frontMatter:{title:"How to Build Docker Image",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Build Console",permalink:"/docs/latest/development/build-console"},next:{title:"Debug Guide",permalink:"/docs/latest/development/debug"}},s={},d=[{value:"Linkis Image Components",id:"linkis-image-components",level:2},{value:"linkis-base",id:"linkis-base",level:3},{value:"linkis",id:"linkis",level:3},{value:"linkis-web",id:"linkis-web",level:3},{value:"linkis-ldh",id:"linkis-ldh",level:3},{value:"Integrate with MySQL JDBC driver",id:"integrate-with-mysql-jdbc-driver",level:3},{value:"Build Linkis Images",id:"build-linkis-images",level:2},{value:"Building images with Maven",id:"building-images-with-maven",level:3},{value:"Building images with <code>docker build</code> command",id:"building-images-with-docker-build-command",level:3}],u={toc:d},m="wrapper";function p(e){let{components:i,...t}=e;return(0,a.kt)(m,(0,n.Z)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"linkis-image-components"},"Linkis Image Components"),(0,a.kt)("p",null,"Starting from version 1.3.0, Linkis introduces some Docker images, and the Dockerfile files for all the images are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist/docker")," directory."),(0,a.kt)("p",null,"Images currently included as below:"),(0,a.kt)("h3",{id:"linkis-base"},"linkis-base"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dockerfile"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"File: linkis.Dockerfile"),(0,a.kt)("li",{parentName:"ul"},"Arguments, which can be overridden with the ",(0,a.kt)("inlineCode",{parentName:"li"},"-build-arg")," option of the ",(0,a.kt)("inlineCode",{parentName:"li"},"docker build")," command: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"JDK_VERSION: JDK version, default is 1.8.0-openjdk"),(0,a.kt)("li",{parentName:"ul"},"JDK_BUILD_REVISION: JDK release version, default is 1.8.0.332.b09-1.el7_9"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": Linkis service Base image for Linkis service, mainly used for pre-installation of external libraries, initialization of system environment and directory. This image does not need to be updated frequently, and can be used to speed up the creation of Linkis images by using docker's image caching mechanism.")),(0,a.kt)("h3",{id:"linkis"},"linkis"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dockerfile"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"File Name: linkis.Dockerfile"),(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LINKIS_VERSION: Linkis Version, default is 0.0.0"),(0,a.kt)("li",{parentName:"ul"},"LINKIS_SYSTEM_USER: System user, default is hadoop "),(0,a.kt)("li",{parentName:"ul"},"LINKIS_SYSTEM_UID: System user UID, default is 9001"),(0,a.kt)("li",{parentName:"ul"},"LINKIS_HOME: Linkis home directory, default is /opt/linkis , the binary packages and various scripts will be deployed here"),(0,a.kt)("li",{parentName:"ul"},"LINKIS_CONF_DIR: Linkis configuration directory, default is /etc/linkis-conf"),(0,a.kt)("li",{parentName:"ul"},"LINKIS_LOG_DIR: Linkis log directory, default is /var/logs/linkis"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": Linkis service image, it contains binary packages of all components of Apache Linkis and various scripts.")),(0,a.kt)("h3",{id:"linkis-web"},"linkis-web"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dockerfile"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"File Name: linkis.Dockerfile"),(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LINKIS_VERSION: Linkis Version, default is 0.0.0"),(0,a.kt)("li",{parentName:"ul"},"LINKIS_HOME: Linkis home directory, default is /opt/linkis , Web \u76f8\u5173\u7684\u5305\u4f1a\u88ab\u653e\u7f6e\u5728 ${LINKIS_HOME}-web \u4e0b "))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": Linkis Web Console image, it contains binary packages and various scripts for the Apache Linkis web console, which uses nginx as the web server. ")),(0,a.kt)("h3",{id:"linkis-ldh"},"linkis-ldh"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dockerfile"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"File Name: ldh.Dockerfile"),(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"JDK_VERSION: JDK version, default is 1.8.0-openjdk"),(0,a.kt)("li",{parentName:"ul"},"JDK_BUILD_REVISION: JDK release version, default is 1.8.0.332.b09-1.el7_9"),(0,a.kt)("li",{parentName:"ul"},"LINKIS_VERSION: Linkis Version, default is 0.0.0"),(0,a.kt)("li",{parentName:"ul"},"MYSQL_JDBC_VERSION: MySQL JDBC version, default is 8.0.28"),(0,a.kt)("li",{parentName:"ul"},"HADOOP_VERSION: Apache Hadoop version, default is 2.7.2"),(0,a.kt)("li",{parentName:"ul"},"HIVE_VERSION: Apache Hive version, default is 2.3.3"),(0,a.kt)("li",{parentName:"ul"},"SPARK_VERSION:  Apache Spark version, default is 2.4.3"),(0,a.kt)("li",{parentName:"ul"},"SPARK_HADOOP_VERSION:  Hadoop version suffix of pre-build Apache Spark distrubtion package, default is 2.7. This value cannot be set arbitrarily, and must be consistent with the official release version of Apache Spark, otherwise the relevant component cannot be downloaded automatically.  "),(0,a.kt)("li",{parentName:"ul"},"FLINK_VERSION:  Apache Flink version, default is 1.12.2"),(0,a.kt)("li",{parentName:"ul"},"ZOOKEEPER_VERSION:  Apache Zookeeper version, default is 3.5.9"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": LDH is a test-oriented image, LDH image provides a complete, pseudo-distributed mode Apache Hadoop runtime environment, including HDFS, YARN, HIVE, Spark, Flink and Zookeeper. you can easily pull up a full-featured Hadoop environment in the development environment for testing Linkis functionality. The ENTRYPOINT of LDH image is in ",(0,a.kt)("inlineCode",{parentName:"li"},"linkis-dist/docker/scripts/entry-point-ldh.sh"),", some initialization operations, such as format HDFS, are done in this script. ")),(0,a.kt)("h3",{id:"integrate-with-mysql-jdbc-driver"},"Integrate with MySQL JDBC driver"),(0,a.kt)("p",null,"Due to MySQL licensing restrictions, the official Linkis image does not integrate the MySQL JDBC driver, as a result, users need to  by themselves put the MySQL JDBC driver into the container before using the Linkis. To simplify this process, we provide a Dockerfile:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File Name: linkis-with-mysql-jdbc.Dockerfile"),(0,a.kt)("li",{parentName:"ul"},"Arguments:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"LINKIS_IMAGE: Linkis image name with tag, based on which to create a custom image containing the MySQL JDBC driver, default is ",(0,a.kt)("inlineCode",{parentName:"li"},"linkis:dev")),(0,a.kt)("li",{parentName:"ul"},"LINKIS_HOME: Linkis home directory, default is /opt/linkis"),(0,a.kt)("li",{parentName:"ul"},"MYSQL_JDBC_VERSION: MySQL JDBC version, default is 8.0.28")))),(0,a.kt)("h2",{id:"build-linkis-images"},"Build Linkis Images"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Because some Bash scripts are used in the image creation process, Linkis image packaging is currently only supported under Linux/MaxOS. ")),(0,a.kt)("h3",{id:"building-images-with-maven"},"Building images with Maven"),(0,a.kt)("p",null,"Liniks images can be created using Maven commands. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build image ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis")," "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# Building a Linkis image without MySQL JDBC\n$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n# Building a Linkis image contains MySQL JDBC\n$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.with.jdbc=true\n")),(0,a.kt)("p",{parentName:"li"},"Note: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"linkis-base")," image will be built on the first build of the ",(0,a.kt)("inlineCode",{parentName:"li"},"linkis")," image, and will not be rebuilt if the Dockerfile has not been modified;"),(0,a.kt)("li",{parentName:"ul"},"Due to the syntax of the Maven POM file, ",(0,a.kt)("inlineCode",{parentName:"li"},"linkis.build.with.jdbc")," is a pseudo-boolean arguments, in fact ",(0,a.kt)("inlineCode",{parentName:"li"},"-Dlinkis.build.with.jdbc=false")," is the same as ",(0,a.kt)("inlineCode",{parentName:"li"},"-Dlinkis.build.with.jdbc=true"),", If you want to express ",(0,a.kt)("inlineCode",{parentName:"li"},"-Dlinkis.build.with.jdbc=false"),", please just remove this arguments. Other arguments are similar. "))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build image ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-web")," "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.web=true\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build image ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-ldh")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.ldh=true\n")),(0,a.kt)("p",{parentName:"li"},"Note: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In the process of creating this image, we downloaded the pre-built binary distribution of each hadoop components from the official site ",(0,a.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/"},"Apache Archives"),". However, due to the network environment in China or other nation/region which is slow to visit Apache site, this approach can be very slow. If you have a faster mirror site, you can manually download the corresponding packages from these sites and move them to the following directory ",(0,a.kt)("inlineCode",{parentName:"li"},"${HOME}/.linkis-build-cache")," to solve this problem. ")))),(0,a.kt)("p",null,"All of the above Arguments can be used in combination, so if you want to build all the images at once, you can use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$> ./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.web=true -Dlinkis.build.ldh=true\n")),(0,a.kt)("h3",{id:"building-images-with-docker-build-command"},"Building images with ",(0,a.kt)("inlineCode",{parentName:"h3"},"docker build")," command"),(0,a.kt)("p",null,"It is much convenient to build an image with maven, but the build process introduces a lot of repetitive compilation process, which cause the whole process is rather long. If you only adjust the internal structure of the image, such as directory structure, initialization commands, etc., you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker build")," command to quickly build the image for testing after the first time using the Maven command to build the image. "),(0,a.kt)("p",null,"An example of building a ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-ldh")," image using the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker build")," command is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$> docker build -t linkis-ldh:dev --target linkis-ldh -f linkis-dist/docker/ldh.Dockerfile linkis-dist/target\n\n[+] Building 0.2s (19/19) FINISHED                                                                                                                                                                                      \n => [internal] load build definition from ldh.Dockerfile               0.0s\n => => transferring dockerfile: 41B                                    0.0s\n => [internal] load .dockerignore                                      0.0s\n => => transferring context: 2B                                        0.0s\n => [internal] load metadata for docker.io/library/centos:7            0.0s\n => [ 1/14] FROM docker.io/library/centos:7                            0.0s\n => [internal] load build context                                      0.0s\n => => transferring context: 1.93kB                                    0.0s\n => CACHED [ 2/14] RUN useradd -r -s ...                               0.0s\n => CACHED [ 3/14] RUN yum install -y       ...                        0.0s\n ...\n => CACHED [14/14] RUN chmod +x /usr/bin/start-all.sh                  0.0s\n => exporting to image                                                 0.0s\n => => exporting layers                                                0.0s\n => => writing image sha256:aa3bde0a31bf704413fb75673fc2894b03a0840473d8fe15e2d7f7dd22f1f854     0.0s\n => => naming to docker.io/library/linkis-ldh:dev \n")),(0,a.kt)("p",null,"For other images, please refer to the relevant profile in ",(0,a.kt)("inlineCode",{parentName:"p"},"linkis-dist/pom.xml"),"."))}p.isMDXComponent=!0}}]);