(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{410:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(443);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l,i={},s=(l="PageDescription",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:i},b=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use the Cloud Developer Tools environment to delete itself when it’s no longer needed.")),Object(n.b)("p",null,"The Cloud Developer Tools environment can not only install itself, it can also delete itself. The\nenvironment is installed using Terraform, which stores the state of the creation in the ",Object(n.b)("inlineCode",{parentName:"p"},"workspace")," folder.\nTerraform can use that state to delete what it installed."),Object(n.b)("p",null,"It is is possible to destory the development environment following these steps."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Run the following command to launch a IBM Garage ",Object(n.b)("a",o({parentName:"li"},{href:"https://github.ibm.com/garage-catalyst/client-tools-image"}),"Developer Tools CLI Tools Docker container"),".")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In the container, change to the ",Object(n.b)("inlineCode",{parentName:"li"},"workspace")," directory.")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"cd workspace\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In the container, run the Terraform tool with the ",Object(n.b)("inlineCode",{parentName:"li"},"destroy")," option.")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"terraform destroy\n")),Object(n.b)("p",null,"This will remove the development cluster and all the services that were created previously."))}p.isMDXComponent=!0},441:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},442:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},443:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(441),o=a(0),l=a.n(o),i=a(105),s=a.n(i),c=a(195),b=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(n.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},h=a(442),O=a(385),j=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,o=a||r,l=o.baseUrl,i=o.subDirectory,s=l+"/edit/"+o.branch+i+"/src/pages"+t;return l?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},g=a(193),v=(a(59),a(26)),f=a(386);var w=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),l=o===r,i=new RegExp(r+"(?!-)"),c=a.replace(i,o);return Object(n.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(n.b)(v.Link,{className:f.link,to:""+c},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},o))))))},r}(l.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,l=e.Title,i=t.frontmatter,p=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,h=p.tabs,O=p.title,v=p.theme,f=p.description,N=p.keywords,x=r.data.site.pathPrefix,T=x?o.pathname.replace(x,""):o.pathname,k=h?T.split("/").slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:v,pageTitle:O,pageDescription:f,pageKeywords:N,titleType:d},Object(n.b)(m,{title:l?Object(n.b)(l,null):O,label:"label",tabs:h}),h&&Object(n.b)(w,{slug:T,tabs:h,currentTab:k}),Object(n.b)(y.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:u})),Object(n.b)(g.a,{pageContext:t,location:o,slug:T,tabs:h,currentTab:k}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-destroying-index-mdx-b6a7542cd739d3212938.js.map