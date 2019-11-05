(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{420:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var o=a(106),i=a(430);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var n={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=s("PageDescription"),p=s("AnchorLinks"),l=s("AnchorLink"),u={_frontmatter:n},b=i.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(o.b)(b,r({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"IBM Garage for Cloud Developer Tools provides a set of tools to speed development of applications built for Kubernetes or OpenShift, using agile DevOps processes."),Object(o.b)("p",null,"No matter what kind of applications you’re building, whether you want to leverage Service Mesh, Ingress Controller, or simply use application SDKs, AppID can be used to help secure you application experience."),Object(o.b)("p",null," You can easily use App ID for all these scenarios easily add user authentication to your app, protecting applications running on Kubernetes or OpenShift clusters, getting administrative and authentication events in Activity Tracker."),Object(o.b)("h2",{id:"what-is-app-id"},"What is App ID"),Object(o.b)("p",null,"IBM Cloud App ID is an IBM cloud service that allows developers to easily add authentication and authorization capabilities to their applications while all the operational aspects of the service are handled by the IBM Cloud Platform. App ID is intended for developers that don’t need or want to know anything about various security protocols. The service provides capabilities like Cloud Directory (a highly scalable user repository in the cloud), enterprise identity federation, social login, SSO, customizable Login Widget UI, flexible access controls and user profiles, multi-factor authentication, a set of open-sourced SDKs for easy app instrumentation."),Object(o.b)("h2",{id:"setting-up-security"},"Setting up Security"),Object(o.b)("p",null,"Setting up application security can be complicated. For most developers, it can be one of the hardest parts of creating an app. How can you be sure that you are securely storing your users’ information? How can you be sure your system cannot be infiltrated? How do you manage access controls? How do you ensure that you address any and all vulnerabilities? What if your application runs on different cloud providers with completely different security systems?"),Object(o.b)("p",null,"In most cases, developers prefer to focus on delivering the business value while leaving any security aspects to experts and specialized products. There are a number of approaches"),Object(o.b)("h3",{id:"the-programmatic-approach"},"The programmatic approach"),Object(o.b)("p",null,"Most developers are fairly familiar with the programmatic approach. You pull an SDK into your app, you change some code, you do some configurations, and voila, your app is protected. This approach has existed for ages, and while it is a valid one, it has some scaling concerns."),Object(o.b)("p",null,"Imagine having a microservices-based architecture with dozens, or even hundreds, of microservices. Instrumenting each one with SDK would work but the overhead will grow fast as your ecosystem evolves. Each time you need to update the SDK version, you’ll need to update all your microservices’ code and redeploy them."),Object(o.b)("h3",{id:"the-declarative-approach"},"The declarative approach"),Object(o.b)("p",null,"The declarative approach is a more modern, recommended way of protecting your distributed apps. With the declaraåtive approach, in most cases, you wouldn’t need to change a single line in your application in order to protect it or even redeploy. You just need to “declare”—hence the name—that you want your app to be protected instead."),Object(o.b)("p",null,"The declarative approach is fully language-agnostic, it helps you to scale more easily, and allows to have a centralized way of managing security settings for all your apps and microservices. Updating security settings is also significantly easier with the declarative approach since you simply update the configuration, which is immediately applied without changing or redeploying your apps."),Object(o.b)("h3",{id:"declaratively-protecting-your-apps"},"Declaratively protecting your apps"),Object(o.b)("p",null,"If you’re running your apps on managed Red Hat OpenShift on IBM Cloud, the easiest approach is to use the declarative Ingress annotation. Add a single line to your Ingress resource YAML file, and your app is protected. See the full documentation ",Object(o.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/appid?topic=appid-kube-auth"}),"here")," and a video tutorial below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://youtu.be/sqGS7naTkoU"}),"Securing your IBM Kubernetes or Red Hat OpenShift managed cluster"))),Object(o.b)("h3",{id:"programmatically-protecting-your-apps"},"Programmatically protecting your apps"),Object(o.b)("p",null,"Protecting your apps with a programmatic approach can be different depending on what language and/or what web framework you’re using. The concept is the same—add an SDK to your app (or use the one bundled within your framework), configure it, and you’re done. However, different SDKs and framework are configured in different ways. The list below covers most popular scenarios but, in general, you can use App ID with any other web application framework that supports OAuth2 and OpenID Connect."),Object(o.b)("p",null,"Need to protect an existing Node.js application, be it web application or backend? Use the following links to see documentation and videos:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://youtu.be/6roa1ZOvwtw"}),"Protecting Node.js Web Applications with IBM Cloud App ID")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://youtu.be/jJLSgkHpZwA"}),"Protecting Node.js Backend Application with IBM Cloud App ID"))),Object(o.b)("p",null,"Need to protect an existing Java application running on Liberty server, be it web application or backend? Use the following links to see documentation and videos:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://youtu.be/o_Er69YUsMQ"}),"Protecting Liberty Java Web Applications with IBM Cloud App ID")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://youtu.be/QA6DY2qqLaw"}),"Protecting Liberty Java Backend Applications with IBM Cloud App ID"))),Object(o.b)("p",null,"Need to protect an existing Spring Boot application, be it web application or backend? Use the following links to see documentation and videos:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://youtu.be/EZWl1ij3dAE"}),"Protecting Spring Boot Web Applications with IBM Cloud App ID")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://youtu.be/roQ4mKJBOqg"}),"Protecting Spring Boot Backend Application with IBM Cloud App ID"))),Object(o.b)("h2",{id:"other-links"},"Other Links"),Object(o.b)(p,{mdxType:"AnchorLinks"},Object(o.b)(l,{to:"https://cloud.ibm.com/docs/services/appid?topic=appid-about",mdxType:"AnchorLink"},"IBM Cloud App ID Service"),Object(o.b)(l,{to:"https://cloud.ibm.com/docs/services/appid?topic=appid-at-events",mdxType:"AnchorLink"},"Activity Tracker")))}d.isMDXComponent=!0},428:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},429:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},430:function(e,t,a){"use strict";a(32),a(28);var o=a(1),i=a(428),r=a(0),n=a.n(r),s=a(105),c=a.n(s),p=a(195),l=a(127),u=a(3),b=a.n(u),d=a(384),h=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(o.b)("div",{className:b()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12"},Object(o.b)("h1",{id:"page-title",className:d.text},a)))))},m=a(429),y=a(385),g=function(e){var t=e.relativePagePath,a=e.repository,i=m.data.site.siteMetadata.repository,r=a||i,n=r.baseUrl,s=r.subDirectory,c=n+"/edit/"+r.branch+s+"/src/pages"+t;return n?Object(o.b)("div",{className:"bx--row "+y.row},Object(o.b)("div",{className:"bx--col"},Object(o.b)("a",{className:y.link,href:c},"Edit this page on GitHub"))):null},v=a(193),f=(a(59),a(26)),O=a(386);var j=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),n=r===i,s=new RegExp(i+"(?!-)"),p=a.replace(s,r);return Object(o.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=n,t),O.listItem)},Object(o.b)(f.Link,{className:O.link,to:""+p},e))}));return Object(o.b)("div",{className:O.tabsContainer},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(o.b)("nav",null,Object(o.b)("ul",{className:O.list},r))))))},i}(n.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,s=t.frontmatter,u=void 0===s?{}:s,b=t.relativePagePath,d=t.titleType,m=u.tabs,y=u.title,f=u.theme,O=u.description,N=u.keywords,k=i.data.site.pathPrefix,I=k?r.pathname.replace(k,""):r.pathname,D=m?I.split("/").slice(-1)[0]||c()(m[0],{lower:!0}):"";return Object(o.b)(l.a,{homepage:!1,theme:f,pageTitle:y,pageDescription:O,pageKeywords:N,titleType:d},Object(o.b)(h,{title:n?Object(o.b)(n,null):y,label:"label",tabs:m}),m&&Object(o.b)(j,{slug:I,tabs:m,currentTab:D}),Object(o.b)(w.a,{padded:!0},a,Object(o.b)(g,{relativePagePath:b})),Object(o.b)(v.a,{pageContext:t,location:r,slug:I,tabs:m,currentTab:D}),Object(o.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-services-security-index-mdx-e7c027388e409d9f7945.js.map