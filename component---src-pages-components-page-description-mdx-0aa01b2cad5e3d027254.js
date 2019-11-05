(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{401:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(443);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o,c={},s=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:c},l=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"<PageDescription>")," component is generally used for intro text at the top of the page using the ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.carbondesignsystem.com/guidelines/typography/expressive"}),"type token")," ",Object(n.b)("inlineCode",{parentName:"p"},"expressive-heading-03"),"."),Object(n.b)("p",null,"For most pages, we recommend starting with a ",Object(n.b)("inlineCode",{parentName:"p"},"PageDescription")," followed by ",Object(n.b)("inlineCode",{parentName:"p"},"AnchorLinks")," if the content is long enough.")),Object(n.b)("p",null,"Please note that this component, like all MDX components, is picky about white space, the line break above and below your content is required, and if you even have an extra space on the empty lines above/below it won’t render correctly."),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Lorem ipsum dolor sit amet, ",Object(n.b)("strong",{parentName:"p"},"consectetur adipiscing elit"),", sed do eiusmod tempor ",Object(n.b)("em",{parentName:"p"},"incididunt")," ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),Object(n.b)("h2",{id:"code"},"Code"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-markup",metastring:"path=components/PageDescription/PageDescription.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/PageDescription",path:"components/PageDescription/PageDescription.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/PageDescription"}),"<PageDescription>\n\nLorem ipsum dolor sit amet, **consectetur adipiscing elit**, sed do eiusmod tempor _incididunt_ ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n</PageDescription>\n")),Object(n.b)("h2",{id:"props"},"Props"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"property"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"propType"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"required"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"default"),Object(n.b)("th",i({parentName:"tr"},{align:null}),"description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),"children"),Object(n.b)("td",i({parentName:"tr"},{align:null}),"node"),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null})),Object(n.b)("td",i({parentName:"tr"},{align:null}))))))}p.isMDXComponent=!0},441:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},442:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},443:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(441),i=a(0),o=a.n(i),c=a(105),s=a.n(c),b=a(195),l=a(127),p=a(3),m=a.n(p),u=a(384),d=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:m()(u.pageHeader,(t={},t[u.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:u.text},a)))))},g=a(442),O=a(385),h=function(e){var t=e.relativePagePath,a=e.repository,r=g.data.site.siteMetadata.repository,i=a||r,o=i.baseUrl,c=i.subDirectory,s=o+"/edit/"+i.branch+c+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},j=a(193),y=(a(59),a(26)),v=a(386);var N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),o=i===r,c=new RegExp(r+"(?!-)"),b=a.replace(c,i);return Object(n.b)("li",{key:e,className:m()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(n.b)(y.Link,{className:v.link,to:""+b},e))}));return Object(n.b)("div",{className:v.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:v.list},i))))))},r}(o.a.Component),f=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,c=t.frontmatter,p=void 0===c?{}:c,m=t.relativePagePath,u=t.titleType,g=p.tabs,O=p.title,y=p.theme,v=p.description,x=p.keywords,w=r.data.site.pathPrefix,P=w?i.pathname.replace(w,""):i.pathname,D=g?P.split("/").slice(-1)[0]||s()(g[0],{lower:!0}):"";return Object(n.b)(l.a,{homepage:!1,theme:y,pageTitle:O,pageDescription:v,pageKeywords:x,titleType:u},Object(n.b)(d,{title:o?Object(n.b)(o,null):O,label:"label",tabs:g}),g&&Object(n.b)(N,{slug:P,tabs:g,currentTab:D}),Object(n.b)(f.a,{padded:!0},a,Object(n.b)(h,{relativePagePath:m})),Object(n.b)(j.a,{pageContext:t,location:i,slug:P,tabs:g,currentTab:D}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-components-page-description-mdx-0aa01b2cad5e3d027254.js.map