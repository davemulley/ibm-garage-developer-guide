(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{401:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(430);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o,s={},c=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),p={_frontmatter:s},b=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Contract testing")," is a testing discipline that ensures two applications (a consumer and\na provider) have a shared understanding of the interactions or the ",Object(n.b)("em",{parentName:"p"},"contract")," between them.")),Object(n.b)("p",null,"The Pact framework has been selected for the provided tool set. Pact is a\nconsumer-driven contract testing framework. More details can be found here -\n",Object(n.b)("a",i({parentName:"p"},{href:"https://docs.pact.io/"}),"Pact overview"),". The framework has been built into the Starter Kits\nand a Pact Broker instance is provisioned in the cluster along with the other tools."),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"consumer-driven contract testing")," it is the consumer who defines the ",Object(n.b)("inlineCode",{parentName:"p"},"contract")," in terms of the\nexpected interactions, the data structure, and the expected responses. That ",Object(n.b)("inlineCode",{parentName:"p"},"contract")," can then be used\non the consumer-side to mock the interactions and validate the consumer behavior. More importantly,\nthe ",Object(n.b)("inlineCode",{parentName:"p"},"contract")," can be shared with the provider of the interaction so that the provider’s responses\ncan be validated to ensure the consumer’s expectations are met."),Object(n.b)("p",null,"In the Pact framework, the contract is called a ",Object(n.b)("inlineCode",{parentName:"p"},"pact"),". A ",Object(n.b)("inlineCode",{parentName:"p"},"pact")," consists of one or more\n",Object(n.b)("inlineCode",{parentName:"p"},"interactions"),". Each ",Object(n.b)("inlineCode",{parentName:"p"},"interaction")," has the following structure:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"Given a *state* of {state}\n\n*upon receiving* a {description} request\n\n*with request* parameters\n- HTTP method\n- path\n- headers\n- body\n\n*will respond with* values like\n- status\n- headers\n- body\n")),Object(n.b)("p",null,"where:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"{state} is an optional string that describes the initial state. This value can be used by the\nprovider during testing to make sure the preconditions are met"),Object(n.b)("li",{parentName:"ul"},"{description} is a unique description of the interaction"),Object(n.b)("li",{parentName:"ul"},"the request parameters can contain any values that describe the interaction"),Object(n.b)("li",{parentName:"ul"},"the response contains the relevant information for the consumer. The response values can be exact values\nor using matchers for type, regular expressions, etc")),Object(n.b)("h2",{id:"consumer"},"Consumer"),Object(n.b)("p",null,"Using the Pact framework libraries in conjunction with the unit testing framework on the consumer, the\n",Object(n.b)("inlineCode",{parentName:"p"},"pact")," for the interaction between the consumer and provider is generated and validated. As part of the\npact test setup, a Pact server is started and configured with the expected interactions. All of the consumer\nservice invocations are directed at the Pact server which provides mock responses based on the\ninteractions defined by the ",Object(n.b)("inlineCode",{parentName:"p"},"pact"),". At the end of the test, if all the interactions completed successfully\na file containing the pact definition is generated."),Object(n.b)("p",null,"The following diagram gives an overview of the consumer interactions:\n",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"607px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"108.89621087314663%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAACC0lEQVQ4y42U544CMQyEef93AyEh8QOJ3ntdOvj0WZqV2exxFymQdZzx2J6kYoUxn8+tWq1avV63RqNhj8fDbreb1Wo163a71mq17HA4WNl4v99WOR6Ppsnhy+Vii8XCgVerldter5ctl0vb7/e22+3ser26nTOn08myLHMfRgXHZrNpk8nEmeA8m81sOp3adru15/Ppjuv12sbjsQeTX7/f9yzww+aARCIykVgziUh02J7PZ5+ssbF3v9/dj9RhzDfpOiA/sFMqAiEAUWEFWw5hY5/JHkQ2m01eP68hH0QuDqX6zUbdCJ4AEp1aDodDZ0szVBMOqTHYtI6gAsxThjaTFJg0AGBKwLrT6dhgMLB2u+2NIDBpUyZmwjB2UwMbbLBrSi6sxRi/Dx3Gw7FWMCgTbnHoXJIyEiAi616v56mRJh2GGXKhzhK/Ok39E0AJEyPspLPYEAaixpcrSF0JTgOTGrKBxgDT3R2NRvmVIgD/XEdkoquKf5TcB2DUE4cB44C++SdQUTJq5kfK1IaawYA1kgGw2Ailr/TEPkkZEPQmB5ogYcsxAkaGscs5oC74X1ePw5Ex61JAJACgBIwTLFlzc9SAMmErEw0HpKOwZFOvDSAAUE/eR9bY9JTxTTD2ZGM6IBsxRenxPy8QlwB9MulDLpvYhLLu6VVSl/VNBknK0ty37v3WZVKPfj+ayLNBucbMvAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pact consumer interactions",title:"Pact consumer interactions",src:"/ibm-garage-developer-guide/static/39dbe818c7125f745c85a2314aa88d5b/e77bb/PactFramework-consumer.png",srcSet:["/ibm-garage-developer-guide/static/39dbe818c7125f745c85a2314aa88d5b/d6747/PactFramework-consumer.png 288w","/ibm-garage-developer-guide/static/39dbe818c7125f745c85a2314aa88d5b/09548/PactFramework-consumer.png 576w","/ibm-garage-developer-guide/static/39dbe818c7125f745c85a2314aa88d5b/e77bb/PactFramework-consumer.png 607w"],sizes:"(max-width: 607px) 100vw, 607px",loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"An example pact test on a Typescript consumer using the jest testing framework is provided below. It has\nbeen broken into several parts."),Object(n.b)("h3",{id:"pact-server-config"},"Pact server config"),Object(n.b)("p",null,"At the beginning of the test file, the pact server is configured and started in the\n",Object(n.b)("inlineCode",{parentName:"p"},"beforeAll()")," block. The ",Object(n.b)("inlineCode",{parentName:"p"},"afterAll()")," block finalizes the pacts by writing them out\nto a file and stopping the pact server."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"  const port = 1234;\n  const baseUrl = `http://localhost:${port}`;\n  let pact: Pact;\n  beforeAll(() => {\n    pact = new Pact({\n      consumer: consumerName,\n      provider: providerName,\n      logLevel: 'error',\n      port,\n    });\n\n    return pact.setup();\n  });\n\n  afterAll(() => {\n    return pact.finalize()\n      .catch(err => console.error('Error finalizing pact', err));\n  });\n")),Object(n.b)("h3",{id:"setup-the-service"},"Setup the service"),Object(n.b)("p",null,"Next, an instance of the component that will be tested is loaded and configured with the\npact server host and port as the base url used for the interactions. In this example,\nthe consumer is using the ",Object(n.b)("inlineCode",{parentName:"p"},"typescript-ioc")," library to inject the ",Object(n.b)("inlineCode",{parentName:"p"},"baseUrl")," config value\ninto the service."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"  let service: SampleApi;\n  beforeAll(() => {\n    Container\n      .bind(MyServiceConfig)\n      .provider({get: () => ({baseUrl})});\n    \n    service = Container.get(SampleService);\n  });\n")),Object(n.b)("h3",{id:"define-and-test-the-interaction"},"Define and test the interaction"),Object(n.b)("p",null,"For each interaction with the provider, a test similar to the one provided below is created. In\nit, the Pact framework is used to define the interaction. The ",Object(n.b)("inlineCode",{parentName:"p"},"addInteraction()")," publishes the\ninteraction to the Pact server so that it can be used to provide a mock response when the\nrequest is made."),Object(n.b)("p",null,"The mock response is then used to validate the behavior of the component that is being tested.\nThe example below is simple and passes the provider response directly through the service api\nbut in more sophisticated examples the value would be transformed."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-typescript"}),"  describe('given createWidget()', () => {\n    context('when called with valid request', () => {\n      const widgetRequest = {...};\n      const widgetResponse = {...};\n      \n      beforeEach(() => {\n        return pact.addInteraction({\n          uponReceiving: 'a valid widget request',\n          withRequest: {\n            method: 'POST',\n            path: '/widgets',\n            headers: {\n              'Content-Type': 'application/json',\n              'Accept': 'application/json',\n            },\n            body: widgetRequest,\n          },\n          willRespondWith: {\n            status: 200,\n            headers: {\n              'Content-Type': Matchers.regex({\n                generate: 'application/json', matcher: 'application/json.*'\n              }),\n            },\n            body: Matchers.like(widgetResponse),\n          },\n        });\n      });\n\n      test('then return 200 status', async () => {\n        expect(await service.createWidget(widgetRequest)).toEqual(widgetResponse);\n      });\n    });\n  });\n")),Object(n.b)("h2",{id:"provider"},"Provider"),Object(n.b)("p",null,"The provider uses the Pact framework to verify the running server against the ",Object(n.b)("inlineCode",{parentName:"p"},"pact"),", either\none started locally as part of the test or another instance running elsewhere. The interactions\nin the pact are sent to the provider by a mock consumer in the Pact framework and the results\nare verified against the expected results defined by the pact."),Object(n.b)("p",null,"As an optional configuration for the verification process, an endpoint can be provided that handles\nthe state information in the pact in order to ensure the preconditions for the test are met. (E.g.\nstate=“given an empty database”). In order for these tests to be repeatable, it is often advisable\nto stand up a clean backend to run the pact tests when the tests start and tear it down when the\ntests are completed. For example, if a provider interacts with a Cloudant database point the\ntest provider at a new database instance for the tests."),Object(n.b)("p",null,"The following diagram shows the interactions for the pact provider:\n",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"401px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"107.48129675810473%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAABlklEQVQ4y5WUba+CMAyF+f8/jmAiET9gREXAqB/Ed5CaZ0kJd26E26RZGdvZaXu2IM9zmc1mMp/PJQxDOZ1OcrvdBOu6TmzTuff7LVVVSVmWst1uzVjXtQTn81mSJDGAjI/HYxJg0zRyuVzkeDzKarWSw+EgbdtKcL1eDQDAnECsm8YAGdl7v98NMDEe6EJOHC5WdwHb36/Xq58LNHg+n/L5fLyMXAxdew1DPqgBLCk2o83YZToPwz+A/Fiv15JlmSyXS1PkzWbTL/o3IJamqQHF6NYQzFfTUYa73c50ybXBZmW7s4aIE2a2UVOkgZyIXTbMqAfc7/e9ntAjMUDUNY5jiaLIxKo71Sz7yE6tByyKwjDgNDqs4zBtYlWAruEAsut1qIDcRZ8NG+L6h+R+UuaR0GunDGBMB1EATozTBHVKhMR+GFIHagMIC3UzzoPBnBbfdtL+YUjKrqs3xZw6hDYdI7XFYmE6yo3hSeON9Glw9KZonUiBFPVtVP35HgrvTdGHdezeTgYkZViNpTaJoWvSp7kpDL8rymy+bY1CRwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pact provider interactions",title:"Pact provider interactions",src:"/ibm-garage-developer-guide/static/5b87a6af5243f5b34ff2164e1f6370d6/1e3c2/PactFramework-provider.png",srcSet:["/ibm-garage-developer-guide/static/5b87a6af5243f5b34ff2164e1f6370d6/d6747/PactFramework-provider.png 288w","/ibm-garage-developer-guide/static/5b87a6af5243f5b34ff2164e1f6370d6/1e3c2/PactFramework-provider.png 401w"],sizes:"(max-width: 401px) 100vw, 401px",loading:"lazy"})),"\n    ")),Object(n.b)("h2",{id:"pact-broker"},"Pact Broker"),Object(n.b)("p",null,"One of the underpinning requirements of the pact verification process is the ability to make the\npact files generated by the consumer available to the provider. When the pact verification is run\nin an automated pipeline this is difficult without an intermediary. Within the Pact framework,\nthe ",Object(n.b)("inlineCode",{parentName:"p"},"Pact Broker")," provides the facility for consumers and providers to share the pact definitions\nwith minimal dependencies between the systems."),Object(n.b)("p",null,"Additionally, the Pact Broker provides a place to define webhooks to trigger the provider build\nprocess when the pact definition changes and a way record and visualise the results of the\nverification process. The high-level interaction is shown below:\n",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"481px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.86694386694386%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABX0lEQVQoz3WQ62qDQBBG9/1fpvRXQ1vohTYN5ioGG5oGzaVqvMaouNlVv7o2yhLSgWFFZg7nGzLbTTA2FUw3Y4y3ClKaQFRVVVffsizB2QkrO4O2OUE1EsyMFPoPQ2/ogCgrBY+TB/QX71CtKRIJeAljjCFJkrqP+DRDLOwSH3Mbb+oOy32Fu9EeZB2a2EQmzMDAwtJBOf3XUMDaCpIChkthujl2YYFtwKCuDiCQilLatGzYAvM8b4BhGCKO4+ZflqbgnJ23/+aIvEhPFJ7ndQstjHOOtIYV9ev7PtIGxDtjcdeWQeRjR1EEy7IaYJplnbn4Ls5zbcnx22qAsolceRBgPRrC0nW4cw359xKZadSWrIkv4gpb27bhOE6XishHb1roC+O9A3uoQNc0rF+eEL8+wx/0kRwOyGpjkUhEF6bibW9PLpW7u3kujsoAX/c9zG9v4NZAps9RFbwdvhr5F3HvszutCAiZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pact broker interactions",title:"Pact broker interactions",src:"/ibm-garage-developer-guide/static/a7a882a6504c5c1ab5ba0e4cf7d13345/1d8cf/PactFramework-pactbroker.png",srcSet:["/ibm-garage-developer-guide/static/a7a882a6504c5c1ab5ba0e4cf7d13345/d6747/PactFramework-pactbroker.png 288w","/ibm-garage-developer-guide/static/a7a882a6504c5c1ab5ba0e4cf7d13345/1d8cf/PactFramework-pactbroker.png 481w"],sizes:"(max-width: 481px) 100vw, 481px",loading:"lazy"})),"\n    ")),Object(n.b)("h2",{id:"starter-kits"},"Starter kits"),Object(n.b)("p",null,"The Starter kits have been built with the frameworks necessary to generate and publish pacts for\napi consumers and verify against pacts and publish the results for api providers. The pipelines\nwill do all the publishing and verification against Pact Broker if an instance of Pact Broker has\nbeen configured within the cluster."))}l.isMDXComponent=!0},428:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},429:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},430:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(428),i=a(0),o=a.n(i),s=a(105),c=a.n(s),p=a(195),b=a(127),l=a(3),d=a.n(l),h=a(384),m=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:d()(h.pageHeader,(t={},t[h.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:h.text},a)))))},u=a(429),g=a(385),v=function(e){var t=e.relativePagePath,a=e.repository,r=u.data.site.siteMetadata.repository,i=a||r,o=i.baseUrl,s=i.subDirectory,c=o+"/edit/"+i.branch+s+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},f=a(193),A=(a(59),a(26)),w=a(386);var O=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0}),o=i===r,s=new RegExp(r+"(?!-)"),p=a.replace(s,i);return Object(n.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=o,t),w.listItem)},Object(n.b)(A.Link,{className:w.link,to:""+p},e))}));return Object(n.b)("div",{className:w.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:w.list},i))))))},r}(o.a.Component),j=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,s=t.frontmatter,l=void 0===s?{}:s,d=t.relativePagePath,h=t.titleType,u=l.tabs,g=l.title,A=l.theme,w=l.description,y=l.keywords,k=r.data.site.pathPrefix,N=k?i.pathname.replace(k,""):i.pathname,P=u?N.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:A,pageTitle:g,pageDescription:w,pageKeywords:y,titleType:h},Object(n.b)(m,{title:o?Object(n.b)(o,null):g,label:"label",tabs:u}),u&&Object(n.b)(O,{slug:N,tabs:u,currentTab:P}),Object(n.b)(j.a,{padded:!0},a,Object(n.b)(v,{relativePagePath:d})),Object(n.b)(f.a,{pageContext:t,location:i,slug:N,tabs:u,currentTab:P}),Object(n.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-contract-testing-index-mdx-f32945abef06d68cb25b.js.map