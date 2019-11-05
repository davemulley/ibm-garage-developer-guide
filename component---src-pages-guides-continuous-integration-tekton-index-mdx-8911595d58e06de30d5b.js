(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{417:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(443);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},l={_frontmatter:o},b=i.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(b,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"overview"},"Overview"),Object(n.b)("h3",{id:"tekton"},"Tekton"),Object(n.b)("h3",{id:"pipelines"},"Pipelines"),Object(n.b)("p",null,"Pipelines offer a set of stages or steps that can be chained together to allow a level of software\nautomation. This automation can be tailored to the specific project requirements."),Object(n.b)("h3",{id:"stages"},"Stages"),Object(n.b)("p",null,"You can see from either the vanilla Jenkins pipelines view of the Application Console pipelines view, each template offers a number of pipeline stages. The stages have been configured to be work from the defined ",Object(n.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(n.b)("inlineCode",{parentName:"p"},"config maps")," that have been defined in the Development cluster setup."),Object(n.b)("p",null,"The following gives a description of what each stage in the pipeline does. The ",Object(n.b)("em",{parentName:"p"},"Optional")," stages can be deleted or ignored if the tool support it is not installed. These stages represent a typical production pipeline flow for a Cloud Native application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Setup")," clones the code into the pipeline"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Build")," runs the build commands for the code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test"),"\tvalidates the unit tests for the code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Publish pacts"),"\t(",Object(n.b)("em",{parentName:"li"},"optional"),") publishes any pact contracts that have been defined"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Verify pact")," (",Object(n.b)("em",{parentName:"li"},"optional"),") verifies the pact contracts"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Sonar scan")," (",Object(n.b)("em",{parentName:"li"},"optional"),") runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Verify environment")," Validates the OpenShift or IKS environment configuration is valid"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Build image")," Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Deploy to DEV env"),"\tDeploys the Docker image tagged version to ",Object(n.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Health Check")," Validates the Health Endpoint of the deployed application"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Package Helm Chart")," (",Object(n.b)("em",{parentName:"li"},"optional"),") Stores the tagged version of the Helm chart into Artifactory"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Trigger CD Pipeline")," (",Object(n.b)("em",{parentName:"li"},"optional"),") This is a GitOps stage that will update the build number in designated git repo and trigger ArgoCD for deployment to ",Object(n.b)("strong",{parentName:"li"},"test"))),Object(n.b)("h2",{id:"registering-pipelines"},"Registering Pipelines"),Object(n.b)("p",null,"Once you become familiar with deploying code into OpenShift or IKS, read up about how you can manage code deployment with ",Object(n.b)("inlineCode",{parentName:"p"},"Continuous Deployment")," with ",Object(n.b)("inlineCode",{parentName:"p"},"Artiactory")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ArgoCD")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"./ARTIFACTORY.md"}),"Artiact Storage with Artifactory")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"./ARGOCD.md"}),"Continuous Deployment with ArgoCD"))),Object(n.b)("p",null,"You can use the ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/template-argocd-test"}),"Argo CD Template")," to help define a deployment configuration for ",Object(n.b)("inlineCode",{parentName:"p"},"test")," and ",Object(n.b)("inlineCode",{parentName:"p"},"staging")," namespaces."))}c.isMDXComponent=!0},441:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},442:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},443:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(441),r=a(0),o=a.n(r),l=a(105),b=a.n(l),c=a(195),s=a(127),p=a(3),m=a.n(p),u=a(384),d=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(n.b)("div",{className:m()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:u.text},a)))))},h=a(442),O=a(385),g=function(e){var t=e.relativePagePath,a=e.repository,i=h.data.site.siteMetadata.repository,r=a||i,o=r.baseUrl,l=r.subDirectory,b=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),N=a(386);var v=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0}),o=r===i,l=new RegExp(i+"(?!-)"),c=a.replace(l,r);return Object(n.b)("li",{key:e,className:m()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(n.b)(f.Link,{className:N.link,to:""+c},e))}));return Object(n.b)("div",{className:N.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:N.list},r))))))},i}(o.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,l=t.frontmatter,p=void 0===l?{}:l,m=t.relativePagePath,u=t.titleType,h=p.tabs,O=p.title,f=p.theme,N=p.description,w=p.keywords,C=i.data.site.pathPrefix,T=C?r.pathname.replace(C,""):r.pathname,x=h?T.split("/").slice(-1)[0]||b()(h[0],{lower:!0}):"";return Object(n.b)(s.a,{homepage:!1,theme:f,pageTitle:O,pageDescription:N,pageKeywords:w,titleType:u},Object(n.b)(d,{title:o?Object(n.b)(o,null):O,label:"label",tabs:h}),h&&Object(n.b)(v,{slug:T,tabs:h,currentTab:x}),Object(n.b)(y.a,{padded:!0},a,Object(n.b)(g,{relativePagePath:m})),Object(n.b)(j.a,{pageContext:t,location:r,slug:T,tabs:h,currentTab:x}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-integration-tekton-index-mdx-8911595d58e06de30d5b.js.map