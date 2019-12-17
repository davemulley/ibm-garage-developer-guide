# IBM Garage for Cloud

## Developer Tools Developer Guide

The developer guide has been written to help developers get familiar with how to use to the tools to manage the full
lifecycle of cloud native development with IBM Kubernetes Service or managed Red Hat OpenShift on IBM Cloud.

The rendered Developer Guide can be viewed here - [https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/](https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/)

To update and manage the Developer Guide follow these steps.

### Clone the repository

```
git clone
```

### Install dependencies

```
npm install
```

This will install all the dependencies necessary to run the environment in development mode
and to build and publish the content.

Most notably, this project depends on the following:
(documented in `package.json`):

- gatsby
- gh-pages
- gatsby-transformer-json


### Write content

The content of the Developer Guide is authored through a hybrid of Markdown and React. The content
itself is primarily provided using Markdown. React components are sprinkled into the Markdown to
provide for a richer and more interactive set of components in the published guide.

To render the content within your local development environment, run the following:

```
npm run dev
```

### Publish Content

Currently, the content is published to the GitHub pages site through the `gh-pages` branch
using the `gh-pages` npm module. All of the details for handling the publishing are covered within
the deploy script. The deploy can be run using the following:

```
npm run deploy
```

The result of the `deploy` can be viewed here - https://ibm-garage-cloud.github.io/ibm-garage-developer-guide/

**Note:** There is a time delay between when the deploy process completes and when the
content is available on the published site.

### Gatsby and Carbon

Get started using with the Gatsby Carbon theme which includes all configuration you might need to build a
beautiful site inspired by the [Carbon Design System](https://www.carbondesignsystem.com).

## Resources

- [Getting Started](https://gatsby-theme-carbon.now.sh/getting-started)
- [Guides](https://gatsby-theme-carbon.now.sh/guides/configuration)
- [Components](https://gatsby-theme-carbon.now.sh/components/markdown)
- [Demo](https://gatsby-theme-carbon.now.sh/demo)
- [Gallery](https://gatsby-theme-carbon.now.sh/gallery)
- [Contributions](https://gatsby-theme-carbon.now.sh/contributions)
