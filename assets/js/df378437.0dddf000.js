"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[43388],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),m=s(a),y=r,k=m["".concat(u,".").concat(y)]||m[y]||p[y]||l;return a?n.createElement(k,i(i({ref:e},o),{},{components:a})):n.createElement(k,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=y;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d[m]="string"==typeof t?t:r,i[1]=d;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},3630:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"built-in time variable",sidebar_position:6},i=void 0,d={unversionedId:"user-guide/dynamic-variables",id:"version-1.3.2/user-guide/dynamic-variables",title:"built-in time variable",description:"1. Overview",source:"@site/versioned_docs/version-1.3.2/user-guide/dynamic-variables.md",sourceDirName:"user-guide",slug:"/user-guide/dynamic-variables",permalink:"/docs/latest/user-guide/dynamic-variables",draft:!1,editUrl:"https://github.com/apache/linkis-website/edit/dev/versioned_docs/version-1.3.2/user-guide/dynamic-variables.md",tags:[],version:"1.3.2",sidebarPosition:6,frontMatter:{title:"built-in time variable",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"DataSource Client SDK",permalink:"/docs/latest/user-guide/datasource-client"},next:{title:"Data Source Manual",permalink:"/docs/latest/user-guide/datasource-manual"}},u={},s=[{value:"1. Overview",id:"1-overview",level:2},{value:"need",id:"need",level:3},{value:"Target",id:"target",level:3},{value:"2 Custom variable function introduction",id:"2-custom-variable-function-introduction",level:2},{value:"2.1 Built-in variables",id:"21-built-in-variables",level:3},{value:"2.2 Custom variables",id:"22-custom-variables",level:3},{value:"2.3 Variable scope",id:"23-variable-scope",level:3},{value:"3. Date Pattern variable introduction",id:"3-date-pattern-variable-introduction",level:2},{value:"3.1 Features",id:"31-features",level:3},{value:"3.2 Date Pattern variable example",id:"32-date-pattern-variable-example",level:3},{value:"3.3 Date Pattern variable usage examples",id:"33-date-pattern-variable-usage-examples",level:3}],o={toc:s},m="wrapper";function p(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-overview"},"1. Overview"),(0,r.kt)("h3",{id:"need"},"need"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user hopes that Linkis can provide some public variables and then replace them during execution. For example, the user runs the same SQL in batches every day, and needs to specify the partition time of the previous day. Writing based on SQL will be more complicated if the system provides a run_date variable It will be very convenient to use."),(0,r.kt)("li",{parentName:"ol"},"The user hopes that Linkis supports date pattern calculation, supports writing variables such as &{YYYY-MM-DD} in the code to calculate time variables"),(0,r.kt)("li",{parentName:"ol"},"The user wants to define variables by himself, such as setting a float variable, and then use it in the code")),(0,r.kt)("h3",{id:"target"},"Target"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Support variable replacement of task code"),(0,r.kt)("li",{parentName:"ol"},"Support custom variables, support users to define custom variables in scripts and task parameters submitted to Linkis, support simple +, - and other calculations"),(0,r.kt)("li",{parentName:"ol"},"Preset system variables: run_date, run_month, run_today and other system variables"),(0,r.kt)("li",{parentName:"ol"},"Support date pattern variable, support +, - operation of pattern")),(0,r.kt)("p",null,"The specific technical architecture can refer to:\n",(0,r.kt)("a",{parentName:"p",href:"https://linkis.apache.org/docs/latest/architecture/commons/variable/"},"Linkis Custom Variables")),(0,r.kt)("h2",{id:"2-custom-variable-function-introduction"},"2 Custom variable function introduction"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","The variable types supported by Linkis are divided into custom variables and system built-in variables. The internal variables are pre-defined by Linkis and can be used directly. Then different variable types support different calculation formats: String supports +, integers and decimals support +-*/, and dates support +-."),(0,r.kt)("h3",{id:"21-built-in-variables"},"2.1 Built-in variables"),(0,r.kt)("p",null,"Currently supported built-in variables are as follows:\n(The variable values in the following table take 20240229 in leap year as a special date as an example)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"variable type"),(0,r.kt)("th",{parentName:"tr",align:null},"variable meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"variable value example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","date"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Data statistics time (users can set it themselves, the default setting is the day before the current time), if you execute yesterday\u2019s data today, it will be yesterday\u2019s time, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240229")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","date","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Data statistics time (standard date format), if yesterday\u2019s data is executed today, it is yesterday\u2019s time, the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-02-29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_today"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The day after run_date (data statistics time), the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_today_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The day after run_date (data statistics time) (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-03-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_mon"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The month of run_date, the format is yyyyMM"),(0,r.kt)("td",{parentName:"tr",align:null},"202402")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_mon_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The month of run_date (standard format), the format is yyyy-MM"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-02")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the month where the data statistics time is located, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240201")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","begin","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the month where run_date is located (standard date format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-02-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"the first day of the previous month where run_today is located, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240201")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the previous month where run_today is located (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-02-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the month where run_date belongs, in the format of yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240229")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","end","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the month of run_date (standard date format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-02-29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"the last day of the previous month where run_today is located, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240229")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the previous month where run_today is located (standard date format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-02-29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the quarter where run_date belongs, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the quarter where run_date is located, in the format of yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240331")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the half year where run_date is located, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the half year where run_date is located, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240630")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the year where run_date is located, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20240101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the year where run_date is located, the format is yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20241231")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the quarter where run_date belongs (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the quarter where run_date belongs (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-03-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the half year where run_date is located (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the half year where run_date is located (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-06-30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The first day of the year where run_date is located (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The last day of the year of run_date (standard format), the format is yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-12-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_tody_h"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"run_today task running time, yyyyMMddHH"),(0,r.kt)("td",{parentName:"tr",align:null},"2024030111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_tody_h_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The running time of the run_today task yyyy-MM-dd HH"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-03-01 11")))),(0,r.kt)("p",null,"details:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"run_date is a date variable that comes with the core, and supports user-defined dates. If not specified, it defaults to the day before the current system time."),(0,r.kt)("li",{parentName:"ol"},"Definition of other derived built-in date variables: other date built-in variables are calculated relative to run_date. Once run_date changes, the values of other variables will also change automatically. Other date variables do not support setting initial values and can only be modified by modifying run_date ."),(0,r.kt)("li",{parentName:"ol"},"The built-in variables support richer usage scenarios: ${run_date-1} is the day before run_data; ${run_month_begin-1} is the first day of the previous month of run_month_begin, where -1 means minus one month.")),(0,r.kt)("p",null,"Take sql as an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'--@set run_date=20240229\nselect\n"${run_date}" as run_date,\n"${run_date_std}" as run_date_std,\n"${run_today}" as run_today,\n"${run_today_std}" as run_today_std,\n"${run_mon}" as run_mon,\n"${run_mon_std}" as run_mon_std,\n"${run_month_begin}" as run_month_begin,\n"${run_month_begin_std}" as run_month_begin_std,\n"${run_month_now_begin}" as run_month_now_begin,\n"${run_month_now_begin_std}" as run_month_now_begin_std,\n"${run_month_end}" as run_month_end,\n"${run_month_end_std}" as run_month_end_std,\n"${run_month_now_end}" as run_month_now_end,\n"${run_month_now_end_std}" as run_month_now_end_std,\n"${run_quarter_begin}" as run_quarter_begin,\n"${run_quarter_end}" as run_quarter_end,\n"${run_half_year_begin}" as run_half_year_begin,\n"${run_half_year_end}" as run_half_year_end,\n"${run_year_begin}" as run_year_begin,\n"${run_year_end}" as run_year_end,\n"${run_quarter_begin_std}" as run_quarter_begin_std,\n"${run_quarter_end_std}" as run_quarter_end_std,\n"${run_half_year_begin_std}" as run_half_year_begin_std,\n"${run_half_year_end_std}" as run_half_year_end_std,\n"${run_year_begin_std}" as run_year_begin_std,\n"${run_year_end_std}" as run_year_end_std,\n"${run_today_h}" as run_tody_h,\n"${run_today_h_std}" as run_tody_h_std\n\nCompile the replaced content:\nselect \n"20240229" as run_date,\n"2024-02-29" as run_date_std,\n"20240301" as run_today,\n"2024-03-01" as run_today_std, \n"202402" as run_mon,\n"2024-02" as run_mon_std,\n"20240201" as run_month_begin,\n"2024-02-01" as run_month_begin_std,\n"20240201" as run_month_now_begin, \n"2024-02-01" as run_month_now_begin_std,\n"20240229" as run_month_end,\n"2024-02-29" as run_month_end_std,\n"20240229" as run_month_now_end,\n"2024-02-29" as run_month_now_end_std, \n"20240101" as run_quarter_begin,\n"20240331" as run_quarter_end,\n"20240101" as run_half_year_begin,\n"20240630" as run_half_year_end,\n"20240101" as run_year_begin, \n"20241231" as run_year_end,\n"2024-01-01" as run_quarter_begin_std,\n"2024-03-31" as run_quarter_end_std,\n"2024-01-01" as run_half_year_begin_std,\n"2024-06-30" as run_half_year_end_std, \n"2024-01-01" as run_year_begin_std,\n"2024-12-31" as run_year_end_std,\n"2024030111" as run_tody_h,\n"2024-03-01 11" as run_tody_h_std\n\n')),(0,r.kt)("h3",{id:"22-custom-variables"},"2.2 Custom variables"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","What are custom variables? User variables that are defined first and used later. User-defined variables temporarily support the definition of strings, integers, and floating-point variables. Strings support the + method, and integers and floating-point numbers support the +-*/ method. User-defined variables do not conflict with the set variable syntax supported by SparkSQL and HQL itself, but the same name is not allowed. How to define and use custom variables? as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## Defined in the code, specify before the task code\nsql type definition method:\n--@set f=20.1\nThe python/Shell type is defined as follows:\n#@set f=20.1\nNote: Only one line to define a variable is supported\n")),(0,r.kt)("p",null,"The use is directly used in the code through ",(0,r.kt)("inlineCode",{parentName:"p"},"{varName expression}, such as ${f*2}")),(0,r.kt)("h3",{id:"23-variable-scope"},"2.3 Variable scope"),(0,r.kt)("p",null,"Custom variables also have a scope in linkis, and the priority is that the variable defined in the script is greater than the Variable defined in the task parameter and greater than the built-in run_date variable. The task parameters are defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'## restful\n{\n     "executionContent": {"code": "select \\"${f-1}\\";", "runType": "sql"},\n     "params": {\n                     "variable": {f: "20.1"},\n                     "configuration": {\n                             "runtime": {\n                                 "linkis.openlookeng.url":"http://127.0.0.1:9090"\n                                 }\n                             }\n                     },\n     "source": {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n     "labels": {\n         "engineType": "spark-2.4.3",\n         "userCreator": "hadoop-IDE"\n     }\n}\n## java SDK\nJobSubmitAction. builder\n   .addExecuteCode(code)\n   .setStartupParams(startupMap)\n   .setUser(user) //submit user\n   .addExecuteUser(user) //execute user\n   .setLabels(labels)\n   .setVariableMap(varMap) //setVar\n   .build\n')),(0,r.kt)("h2",{id:"3-date-pattern-variable-introduction"},"3. Date Pattern variable introduction"),(0,r.kt)("h3",{id:"31-features"},"3.1 Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support Pattern format time and users can specify it at will"),(0,r.kt)("li",{parentName:"ul"},"Pattern date variables are calculated relative to run_date"),(0,r.kt)("li",{parentName:"ul"},"Support \xb1y/\xb1M/\xb1d/\xb1H etc."),(0,r.kt)("li",{parentName:"ul"},"Among them, +- is to operate on the linkis built-in parameter run_date first, and then replace the pattern field before %. Non-Pattern characters do not support operation and replacement.")),(0,r.kt)("p",null,"Pattern format comparison table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Letter"),(0,r.kt)("th",{parentName:"tr",align:null},"Date or Time Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Presentation"),(0,r.kt)("th",{parentName:"tr",align:null},"Examples"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"G"),(0,r.kt)("td",{parentName:"tr",align:null},"Era designator"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"AD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"Year"),(0,r.kt)("td",{parentName:"tr",align:null},"Year"),(0,r.kt)("td",{parentName:"tr",align:null},"1996; 96")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Week year"),(0,r.kt)("td",{parentName:"tr",align:null},"Year"),(0,r.kt)("td",{parentName:"tr",align:null},"2009; 09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"Month in year"),(0,r.kt)("td",{parentName:"tr",align:null},"Month"),(0,r.kt)("td",{parentName:"tr",align:null},"July; Jul; 07")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"w"),(0,r.kt)("td",{parentName:"tr",align:null},"Week in year"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"27")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"W"),(0,r.kt)("td",{parentName:"tr",align:null},"Week in month"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"Day in year"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"189")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"Day in month"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"F"),(0,r.kt)("td",{parentName:"tr",align:null},"Day of week in month"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E"),(0,r.kt)("td",{parentName:"tr",align:null},"Day name in week"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Tuesday; Tue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"u"),(0,r.kt)("td",{parentName:"tr",align:null},"Day number of week (1 = Monday, \u2026, 7 = Sunday)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"Am/pm marker"),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"PM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"H"),(0,r.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"k"),(0,r.kt)("td",{parentName:"tr",align:null},"Hour in day (1-24)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"K"),(0,r.kt)("td",{parentName:"tr",align:null},"Hour in am/pm (0-11)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"h"),(0,r.kt)("td",{parentName:"tr",align:null},"Hour in am/pm (1-12)"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"m"),(0,r.kt)("td",{parentName:"tr",align:null},"Minute in hour"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"Second in minute"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"55")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S"),(0,r.kt)("td",{parentName:"tr",align:null},"Millisecond"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"978")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"z"),(0,r.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"General time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"Pacific Standard Time; PST; GMT-08:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z"),(0,r.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"RFC 822 time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"-0800")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"Time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 time zone"),(0,r.kt)("td",{parentName:"tr",align:null},"-08; -0800; -08:00")))),(0,r.kt)("h3",{id:"32-date-pattern-variable-example"},"3.2 Date Pattern variable example"),(0,r.kt)("p",null,"You can define the parameters that need dynamic rendering according to your own preferences/business actual situation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"variable"),(0,r.kt)("th",{parentName:"tr",align:null},"result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy-01-01}"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy-01-01%-2y}"),(0,r.kt)("td",{parentName:"tr",align:null},"2019-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy-MM-01%-2M}"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-02-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy-MM-dd%-2d}"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-03-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyy MM ----- HH%-1H}"),(0,r.kt)("td",{parentName:"tr",align:null},"2021 04 ----- 14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyyMMdd%-1d}"),(0,r.kt)("td",{parentName:"tr",align:null},"20210401")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{yyyyMM01%-1M}"),(0,r.kt)("td",{parentName:"tr",align:null},"20210301")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"&{HH%-1H}"),(0,r.kt)("td",{parentName:"tr",align:null},"14")))),(0,r.kt)("h3",{id:"33-date-pattern-variable-usage-examples"},"3.3 Date Pattern variable usage examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 1: sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hive.tmp.fund_nav_histories\nWHERE dt <= DATE_FORMAT(DATE_ADD('day', -1, DATE(Date_parse('&{yyyyMMdd%-1d}', '%Y%m%d'))), '%Y%m%d')\n")),(0,r.kt)("p",null,"after rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM hive.tmp.fund_nav_histories\nWHERE dt <= DATE_FORMAT(DATE_ADD('day', -1, DATE(Date_parse('20220705', '%Y%m%d'))), '%Y%m%d')\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 2: shell")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3 ls s3://***/ads/tmp/dws_member_active_detail_d_20210601_20211231/pt=&{yyyyMMdd%-1d}/\n")),(0,r.kt)("p",null,"after rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"aws s3 ls s3://***/ads/tmp/dws_member_active_detail_d_20210601_20211231/pt=20220705/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 3: datax json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "job": {\n     "setting": {\n       "speed": {\n         "channel": 1\n       }\n     },\n     "content": [\n       {\n         "reader": {\n           "name": "s3reader",\n           "parameter": {\n             "bucket": "**************",\n             "path": [\n               "ads/tmp/ccass_tm_announcements/&{yyyyMMdd%-1d}/"\n             ],\n             "stored": "parquet",\n             "compression": "NONE",\n             "column": [\n               {\n                 "index": 0,\n                 "type": "int"\n               },\n               {\n                 "index": 1,\n                 "type": "string",\n                 "constant": "&{yyyyMMdd%-1d}"\n               }\n             ]\n           }\n         },\n         "writer": {\n           "name": "streamwriter",\n           "parameter": {\n             "print": true\n           }\n         }\n       }\n     ]\n   }\n}\n')),(0,r.kt)("p",null,"after rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "job": {\n     "setting": {\n       "speed": {\n         "channel": 1\n       }\n     },\n     "content": [\n       {\n         "reader": {\n           "name": "s3reader",\n           "parameter": {\n             "bucket": "**************",\n             "path": [\n               "ads/tmp/ccass_tm_announcements/20220705/"\n             ],\n             "stored": "parquet",\n             "compression": "NONE",\n             "column": [\n               {\n                 "index": 0,\n                 "type": "int"\n               },\n               {\n                 "index": 1,\n                 "type": "string",\n                 "constant": "20220705"\n               }\n             ]\n           }\n         },\n         "writer": {\n           "name": "streamwriter",\n           "parameter": {\n             "print": true\n           }\n         }\n       }\n     ]\n   }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example 4:python")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(&{yyyyMMdd%-1d})\n")),(0,r.kt)("p",null,"after rendering"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  20220705\n")))}p.isMDXComponent=!0}}]);