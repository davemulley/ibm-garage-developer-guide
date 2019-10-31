(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n(11),n(5),n(6),n(4),n(10),n(1),n(0);var r=n(106),a=n(439);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("AnchorLinks"),b=c("AnchorLink"),l={_frontmatter:i},p=a.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(p,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Now you have prepared your development cluster for Cloud Native application development. You can now create a new app using one of the\nStarter Kit Templates. These have been created to include all the key components,configuration and frameworks to get you starting on\ncreating the code your need for your solutions."),Object(r.b)("h3",{id:"creating-your-first-app"},"Creating your first App"),Object(r.b)("h3",{id:"running-locally"},"Running Locally"),Object(r.b)("h3",{id:"register-app-pipeline"},"Register App Pipeline"),Object(r.b)("h3",{id:"view-app-pipeline"},"View App Pipeline"),Object(r.b)("h3",{id:"access-running-app"},"Access running App"),Object(r.b)("h3",{id:"whats-next"},"Whats Next"),Object(r.b)("p",null,"Now that you have a running application that is being built and deployed into your development the next step is to prepare\nfor Continuous Delivery using ArgoCD and hosting your Helm chart artifacts in Artifactory."),Object(r.b)("p",null,"To enable this complete the setup of the ",Object(r.b)("strong",{parentName:"p"},"ArgoCD")," and ",Object(r.b)("strong",{parentName:"p"},"Artifactory")," follow these instructions:"),Object(r.b)(s,{small:!0,mdxType:"AnchorLinks"},Object(r.b)(b,{to:"/getting-started/argocd-setup",mdxType:"AnchorLink"},"ArgoCD Setup"),Object(r.b)(b,{to:"/getting-started/artifactory-setup",mdxType:"AnchorLink"},"Artifactory Setup")),Object(r.b)("h3",{id:"guides"},"Guides"),Object(r.b)("p",null,"For more detailed instructions of how to enable to the full developer lifecycle read through the ",Object(r.b)("strong",{parentName:"p"},"Guides")," section."))}u.isMDXComponent=!0},437:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},438:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},439:function(e,t,n){"use strict";n(32),n(28);var r=n(1),a=n(437),o=n(0),i=n.n(o),c=n(105),s=n.n(c),b=n(195),l=n(127),p=n(3),u=n.n(p),d=n(384),h=function(e){var t,n=e.title,a=e.tabs,o=void 0===a?[]:a;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},n)))))},g=n(438),O=n(385),m=function(e){var t=e.relativePagePath,n=e.repository,a=g.data.site.siteMetadata.repository,o=n||a,i=o.baseUrl,c=o.subDirectory,s=i+"/edit/"+o.branch+c+"/src/pages"+t;return i?Object(r.b)("div",{className:"bx--row "+O.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},f=n(193),v=(n(59),n(26)),j=n(386);var y=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),i=o===a,c=new RegExp(a+"(?!-)"),b=n.replace(c,o);return Object(r.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(r.b)(v.Link,{className:j.link,to:""+b},e))}));return Object(r.b)("div",{className:j.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:j.list},o))))))},a}(i.a.Component),w=n(194);t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,i=e.Title,c=t.frontmatter,p=void 0===c?{}:c,u=t.relativePagePath,d=t.titleType,g=p.tabs,O=p.title,v=p.theme,j=p.description,x=p.keywords,N=a.data.site.pathPrefix,A=N?o.pathname.replace(N,""):o.pathname,k=g?A.split("/").slice(-1)[0]||s()(g[0],{lower:!0}):"";return Object(r.b)(l.a,{homepage:!1,theme:v,pageTitle:O,pageDescription:j,pageKeywords:x,titleType:d},Object(r.b)(h,{title:i?Object(r.b)(i,null):O,label:"label",tabs:g}),g&&Object(r.b)(y,{slug:A,tabs:g,currentTab:k}),Object(r.b)(w.a,{padded:!0},n,Object(r.b)(m,{relativePagePath:u})),Object(r.b)(f.a,{pageContext:t,location:o,slug:A,tabs:g,currentTab:k}),Object(r.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-deploy-app-index-mdx-99e9d09b15c0e8585e07.js.map