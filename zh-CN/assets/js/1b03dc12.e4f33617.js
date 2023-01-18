"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[57706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,m=c["".concat(s,".").concat(u)]||c[u]||k[u]||l;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:r,o[1]=a;for(var d=2;d<l;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const l={title:"\u5bb9\u5668\u5316\u90e8\u7f72",sidebar_position:2},o=void 0,a={unversionedId:"quick/deploy-to-kubernetes",id:"quick/deploy-to-kubernetes",title:"\u5bb9\u5668\u5316\u90e8\u7f72",description:"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u5c31 Kind \u7684 Kubernetes \u7684\u73af\u5883\u4e2d\u90e8\u7f72 Linkis \u670d\u52a1\uff0c\u4ee5\u65b9\u4fbf\u66f4\u8f7b\u91cf\u5316\u7684\u5b66\u4e60\u4f7f\u7528\u548c\u8c03\u8bd5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/quick/deploy-to-kubernetes.md",sourceDirName:"quick",slug:"/quick/deploy-to-kubernetes",permalink:"/zh-CN/docs/1.3.2/quick/deploy-to-kubernetes",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/quick/deploy-to-kubernetes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u5bb9\u5668\u5316\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6c99\u7bb1\u5728\u7ebf\u4f53\u9a8c",permalink:"/zh-CN/docs/1.3.2/quick/live-demo"},next:{title:"\u65e0 HDFS \u90e8\u7f72",permalink:"/zh-CN/docs/1.3.2/quick/deploy-without-hdfs"}},s={},d=[{value:"1. \u4f9d\u8d56\u7248\u672c",id:"1-\u4f9d\u8d56\u7248\u672c",level:2},{value:"1.1 \u7248\u672c:",id:"11-\u7248\u672c",level:3},{value:"1.2 \u6ce8\u610f\uff1a",id:"12-\u6ce8\u610f",level:3},{value:"2.\u5b89\u88c5docker",id:"2\u5b89\u88c5docker",level:2},{value:"2.1 \u5b89\u88c5\u6559\u7a0b",id:"21-\u5b89\u88c5\u6559\u7a0b",level:3},{value:"2.2 \u8bbe\u7f6e\u56fd\u5185\u955c\u50cf",id:"22-\u8bbe\u7f6e\u56fd\u5185\u955c\u50cf",level:3},{value:"3. \u5b89\u88c5 kind",id:"3-\u5b89\u88c5-kind",level:2},{value:"3.1 \u624b\u5de5\u4e0b\u8f7dkind\u4e8c\u8fdb\u5236",id:"31-\u624b\u5de5\u4e0b\u8f7dkind\u4e8c\u8fdb\u5236",level:3},{value:"3.2 \u5b89\u88c5kind\u4e8c\u8fdb\u5236",id:"32-\u5b89\u88c5kind\u4e8c\u8fdb\u5236",level:3},{value:"4. \u5b89\u88c5linkis",id:"4-\u5b89\u88c5linkis",level:2},{value:"4.1 \u4e0b\u8f7d\u6216\u81ea\u884c\u7f16\u8bd1 linkis1.3.1 \u90e8\u7f72\u5305",id:"41-\u4e0b\u8f7d\u6216\u81ea\u884c\u7f16\u8bd1-linkis131-\u90e8\u7f72\u5305",level:3},{value:"4.2 \u521b\u5efa\u76ee\u5f55",id:"42-\u521b\u5efa\u76ee\u5f55",level:3},{value:"4.3 \u62f7\u8d1d\u9a71\u52a8",id:"43-\u62f7\u8d1d\u9a71\u52a8",level:3},{value:"4.4 \u91cd\u7f6ekind\uff08\u975e\u5fc5\u8981\uff09",id:"44-\u91cd\u7f6ekind\u975e\u5fc5\u8981",level:3},{value:"4.5 \u62c9\u53d6\u955c\u50cf",id:"45-\u62c9\u53d6\u955c\u50cf",level:3},{value:"4.6 \u5b89\u88c5linkis\u5230kind\u4e2d",id:"46-\u5b89\u88c5linkis\u5230kind\u4e2d",level:3},{value:"4.7 \u4f7f\u7528\u547d\u4ee4\u67e5\u770b\u670d\u52a1\uff0c\u7b49\u5f85\u5168\u90e8\u542f\u52a8\u6210\u529f",id:"47-\u4f7f\u7528\u547d\u4ee4\u67e5\u770b\u670d\u52a1\u7b49\u5f85\u5168\u90e8\u542f\u52a8\u6210\u529f",level:3},{value:"4.8 \u62f7\u8d1d ldh \u73af\u5883\u5230 linkis",id:"48-\u62f7\u8d1d-ldh-\u73af\u5883\u5230-linkis",level:3},{value:"4.9 \u5f00\u542f\u7aef\u53e3\u6620\u5c04",id:"49-\u5f00\u542f\u7aef\u53e3\u6620\u5c04",level:3},{value:"4.10 \u8bbf\u95ee\u7cfb\u7edf",id:"410-\u8bbf\u95ee\u7cfb\u7edf",level:3},{value:"4.11 \u6267\u884c linkis-cli \u6267\u884c\u4efb\u52a1",id:"411-\u6267\u884c-linkis-cli-\u6267\u884c\u4efb\u52a1",level:3}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u5728\u5c31 Kind \u7684 Kubernetes \u7684\u73af\u5883\u4e2d\u90e8\u7f72 Linkis \u670d\u52a1\uff0c\u4ee5\u65b9\u4fbf\u66f4\u8f7b\u91cf\u5316\u7684\u5b66\u4e60\u4f7f\u7528\u548c\u8c03\u8bd5\u3002"),(0,r.kt)("h2",{id:"1-\u4f9d\u8d56\u7248\u672c"},"1. \u4f9d\u8d56\u7248\u672c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kind github\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kind"},"https://github.com/kubernetes-sigs/kind"),"  "),(0,r.kt)("li",{parentName:"ul"},"kind\u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"kind.sigs.k8s.io/"))),(0,r.kt)("h3",{id:"11-\u7248\u672c"},"1.1 \u7248\u672c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kind 0.14.0"),(0,r.kt)("li",{parentName:"ul"},"docker 20.10.17"),(0,r.kt)("li",{parentName:"ul"},"centos 7.6"),(0,r.kt)("li",{parentName:"ul"},"helm 3.x")),(0,r.kt)("h3",{id:"12-\u6ce8\u610f"},"1.2 \u6ce8\u610f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.\u786e\u4fdd\u7ec4\u4ef6\u4f9d\u8d56\u7248\u672c"),(0,r.kt)("li",{parentName:"ul"},"2.kind \u662f\u7528 docker \u5bb9\u5668\u6a21\u62df\u8282\u70b9\u7684\uff0c\u673a\u5668\u91cd\u542f\u56de\u6765\u5bb9\u5668\u90fd\u53d8\u4e86\uff0c\u8c03\u5ea6\u5668\u5c31\u4e0d\u5de5\u4f5c\u4e86\uff0c\u8fd9\u4e2a\u662fkind\u7684limitation \uff0c\u5b98\u65b9\u6587\u6863\u6709\u8be6\u7ec6\u8bf4\u660e\u3002")),(0,r.kt)("h2",{id:"2\u5b89\u88c5docker"},"2.\u5b89\u88c5docker"),(0,r.kt)("h3",{id:"21-\u5b89\u88c5\u6559\u7a0b"},"2.1 \u5b89\u88c5\u6559\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo yum install -y yum-utils device-mapper-persistent-data lvm2\nsudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\nsudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo\nsudo yum makecache fast\nsudo yum -y install docker-ce\nsystemctl start docker\nsystemctl enable docker\n")),(0,r.kt)("h3",{id:"22-\u8bbe\u7f6e\u56fd\u5185\u955c\u50cf"},"2.2 \u8bbe\u7f6e\u56fd\u5185\u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'vi /etc/docker/daemon.json\n{\n"registry-mirrors": ["http://hub-mirror.c.163.com"],\n"insecure-registries": ["https://registry.mydomain.com","http://hub-mirror.c.163.com"]\n}\n')),(0,r.kt)("h2",{id:"3-\u5b89\u88c5-kind"},"3. \u5b89\u88c5 kind"),(0,r.kt)("h3",{id:"31-\u624b\u5de5\u4e0b\u8f7dkind\u4e8c\u8fdb\u5236"},"3.1 \u624b\u5de5\u4e0b\u8f7dkind\u4e8c\u8fdb\u5236"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://github.com/kubernetes-sigs/kind/releases\n")),(0,r.kt)("h3",{id:"32-\u5b89\u88c5kind\u4e8c\u8fdb\u5236"},"3.2 \u5b89\u88c5kind\u4e8c\u8fdb\u5236"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chmod +x ./kind\nmv kind-linux-amd64 /usr/bin/kind\n")),(0,r.kt)("h2",{id:"4-\u5b89\u88c5linkis"},"4. \u5b89\u88c5linkis"),(0,r.kt)("h3",{id:"41-\u4e0b\u8f7d\u6216\u81ea\u884c\u7f16\u8bd1-linkis131-\u90e8\u7f72\u5305"},"4.1 \u4e0b\u8f7d\u6216\u81ea\u884c\u7f16\u8bd1 linkis1.3.1 \u90e8\u7f72\u5305"),(0,r.kt)("p",null,"\u4f7f\u7528\u7248\u672c\uff1adev-1.3.1 \u5206\u652f\u7f16\u8bd1\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apache-linkis-1.3.1-incubating-bin.tar.gz\n")),(0,r.kt)("h3",{id:"42-\u521b\u5efa\u76ee\u5f55"},"4.2 \u521b\u5efa\u76ee\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p /opt/data/common/extendlib\n")),(0,r.kt)("h3",{id:"43-\u62f7\u8d1d\u9a71\u52a8"},"4.3 \u62f7\u8d1d\u9a71\u52a8"),(0,r.kt)("p",null,"\u62f7\u8d1d mysql \u9a71\u52a8\u5230 /opt/data/common/extendlib"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar -o /opt/data/common/extendlib/[mysql-connector-java-8.0.28.jar](https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.28/mysql-connector-java-8.0.28.jar)\n")),(0,r.kt)("h3",{id:"44-\u91cd\u7f6ekind\u975e\u5fc5\u8981"},"4.4 \u91cd\u7f6ekind\uff08\u975e\u5fc5\u8981\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bin/install-linkis-to-kubernetes.sh reset\n")),(0,r.kt)("h3",{id:"45-\u62c9\u53d6\u955c\u50cf"},"4.5 \u62c9\u53d6\u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bin/install-linkis-to-kubernetes.sh pull -mghcr.dockerproxy.com\n")),(0,r.kt)("h3",{id:"46-\u5b89\u88c5linkis\u5230kind\u4e2d"},"4.6 \u5b89\u88c5linkis\u5230kind\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./bin/install-linkis-to-kubernetes.sh install -l -mghcr.dockerproxy.com\n")),(0,r.kt)("h3",{id:"47-\u4f7f\u7528\u547d\u4ee4\u67e5\u770b\u670d\u52a1\u7b49\u5f85\u5168\u90e8\u542f\u52a8\u6210\u529f"},"4.7 \u4f7f\u7528\u547d\u4ee4\u67e5\u770b\u670d\u52a1\uff0c\u7b49\u5f85\u5168\u90e8\u542f\u52a8\u6210\u529f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods -A\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(98165).Z,width:"1147",height:"447"})),(0,r.kt)("h3",{id:"48-\u62f7\u8d1d-ldh-\u73af\u5883\u5230-linkis"},"4.8 \u62f7\u8d1d ldh \u73af\u5883\u5230 linkis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./helm/scripts/prepare-for-spark.sh\n")),(0,r.kt)("h3",{id:"49-\u5f00\u542f\u7aef\u53e3\u6620\u5c04"},"4.9 \u5f00\u542f\u7aef\u53e3\u6620\u5c04"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./helm/scripts/remote-proxy.sh start\n")),(0,r.kt)("h3",{id:"410-\u8bbf\u95ee\u7cfb\u7edf"},"4.10 \u8bbf\u95ee\u7cfb\u7edf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"linkis-web: http://10.0.2.101:8088/\neureka: http://10.0.2.101:20303/\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(22348).Z,width:"1880",height:"550"})),(0,r.kt)("h3",{id:"411-\u6267\u884c-linkis-cli-\u6267\u884c\u4efb\u52a1"},"4.11 \u6267\u884c linkis-cli \u6267\u884c\u4efb\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u8fdb\u5165\u5bb9\u5668\n./helm/scripts/login-pod.sh cg-engineconnmanager\n\u6267\u884cshell\u6d4b\u8bd5\nsh ./bin/linkis-cli -engineType shell-1 -codeType shell -code "echo "hello" "  -submitUser hadoop -proxyUser hadoop\n\u6267\u884chive\u6d4b\u8bd5\nsh ./bin/linkis-cli -engineType hive-2.3.3 -codeType hql -code "show tables"  -submitUser hadoop -proxyUser hadoop\n\u6267\u884cspark\u6d4b\u8bd5\nsh ./bin/linkis-cli -engineType spark-2.4.3 -codeType sql -code "show tables"  -submitUser hadoop -proxyUser hadoop\n\u6267\u884cpython\u6d4b\u8bd5\nsh ./bin/linkis-cli -engineType python-python2 -codeType python -code "print(\\"hello\\")"  -submitUser hadoop -proxyUser hadoop  -confMap  python.version=python\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(78904).Z,width:"1683",height:"440"})))}c.isMDXComponent=!0},22348:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/eureka-200241584d49a88314554cda60f2e239.png"},78904:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/linkis-37fe8c9f4209ea07542c9ab7e1a89f7a.jpg"},98165:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pods-df2553c9e0c1a61bb73bd5f17033e63e.jpg"}}]);