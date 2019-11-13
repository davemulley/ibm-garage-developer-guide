(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{403:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return g}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),o=a(434);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,s={},l=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:s},b=o.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use LogDNA to manage logging for your running application")),Object(n.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"}),"automate application monitoring"),", including log management.\nLogDNA adds log management capabilities to a Kubernetes cluster and its deployments.\nThe Developer Tools environment includes an IBM Log Analysis with LogDNA service instance configured with\na LogDNA agent installed in the environment’s cluster.\nSimply by deploying your application into the Developer Tools environment, LogDNA collects the logs, just open\nthe LogDNA web UI from the IBM Cloud dashboard to browse your application’s logs."),Object(n.b)("h2",{id:"logdna-log-management"},"LogDNA log management"),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA"}),"IBM Log Analysis with LogDNA")," explains how to\nconfigure and use an instance of the LogDNA service, but the Developer Tools environment has already done this for you.\nYou can skip these steps about provisioning an instance, installing an agent, and user access."),Object(n.b)("h3",{id:"logdna-dashboard"},"LogDNA dashboard"),Object(n.b)("p",null,"Open the LogDNA web UI for your environment’s cluster"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-view_logs"}),"IBM Log Analysis with LogDNA: Viewing logs"),"\nexplains how to open the web UI"),Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud dashboard, navigate to ",Object(n.b)("strong",{parentName:"li"},"Observability")," > ",Object(n.b)("strong",{parentName:"li"},"Logging")),Object(n.b)("li",{parentName:"ul"},"Find the logging instance named after your environment’s cluster, such as ",Object(n.b)("inlineCode",{parentName:"li"},"showcase-dev-iks-logdna"),". To help find it,\nyou can filter by your resource group.\n",Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1026px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.454191033138402%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAeElEQVQI1z2NQQ7CMBAD+/+XceQDHFAFRUCTpmWzu2nQsOqBg6WxJduDTwndG6oaMtQFtWCzw3tznvnG/X1FbKX3b3gJVZaPMxc9OK2GeWNoj4y4I1KRqv/BGiyiWKuM5cxlPpF0ZG+dXLYo73HWeS3KNAtpsyP7AcmLmfZ/MF6GAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"LogDNA Logging Instance",title:"LogDNA Logging Instance",src:"/ibm-garage-developer-guide/static/920bfed8a9f8edfb6c874be93adb3784/ca2b2/logdna-logging-instance.png",srcSet:["/ibm-garage-developer-guide/static/920bfed8a9f8edfb6c874be93adb3784/d6747/logdna-logging-instance.png 288w","/ibm-garage-developer-guide/static/920bfed8a9f8edfb6c874be93adb3784/09548/logdna-logging-instance.png 576w","/ibm-garage-developer-guide/static/920bfed8a9f8edfb6c874be93adb3784/ca2b2/logdna-logging-instance.png 1026w"],sizes:"(max-width: 1026px) 100vw, 1026px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},"In the logging instance, press the ",Object(n.b)("strong",{parentName:"li"},"View LogDNA")," button to open the LogDNA web UI")),Object(n.b)("h3",{id:"explore-your-application"},"Explore your application"),Object(n.b)("p",null,"TBD"),Object(n.b)("h2",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"It’s important to be able to manage the logs of your deployed applications.\nHere, the Developer Tools environment uses LogDNA, but you never had to install or run it.\nJust deploy your application into the Developer Tools environment and its logs gets collected automatically.\nAfter deploying your application, open the LogDNA web UI and browse the logs."))}g.isMDXComponent=!0},432:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},433:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},434:function(e,t,a){"use strict";a(32),a(28);var n=a(1),o=a(432),i=a(0),r=a.n(i),s=a(105),l=a.n(s),c=a(195),b=a(127),g=a(3),p=a.n(g),d=a(384),u=function(e){var t,a=e.title,o=e.tabs,i=void 0===o?[]:o;return Object(n.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},m=a(433),h=a(385),v=function(e){var t=e.relativePagePath,a=e.repository,o=m.data.site.siteMetadata.repository,i=a||o,r=i.baseUrl,s=i.subDirectory,l=r+"/edit/"+i.branch+s+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a(193),y=(a(59),a(26)),A=a(386);var f=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0}),r=i===o,s=new RegExp(o+"(?!-)"),c=a.replace(s,i);return Object(n.b)("li",{key:e,className:p()((t={},t[A.selectedItem]=r,t),A.listItem)},Object(n.b)(y.Link,{className:A.link,to:""+c},e))}));return Object(n.b)("div",{className:A.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:A.list},i))))))},o}(r.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,s=t.frontmatter,g=void 0===s?{}:s,p=t.relativePagePath,d=t.titleType,m=g.tabs,h=g.title,y=g.theme,A=g.description,j=g.keywords,w=o.data.site.pathPrefix,D=w?i.pathname.replace(w,""):i.pathname,L=m?D.split("/").slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:y,pageTitle:h,pageDescription:A,pageKeywords:j,titleType:d},Object(n.b)(u,{title:r?Object(n.b)(r,null):h,label:"label",tabs:m}),m&&Object(n.b)(f,{slug:D,tabs:m,currentTab:L}),Object(n.b)(N.a,{padded:!0},a,Object(n.b)(v,{relativePagePath:p})),Object(n.b)(O.a,{pageContext:t,location:i,slug:D,tabs:m,currentTab:L}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-log-management-index-mdx-9e5fadfb59ffe2598cd1.js.map