## Setup

The **T-Sheets Application** is written in **Vue.js** and relies on **Node.js** v8.x+ and the **yarn** package management system.

* Download and install Node.js from: https://nodejs.org/
* Download and install yarn from: https://yarnpkg.com/en/docs/install
* Install required Node.js modules:

```
yarn install
```

## Application tasks

To run locally (i.e., start a development server):

```
npm run serve
```

To build for production deployment (i.e., create the _\dist_ directory):

```
npm run build
```

To perform static code analysis (i.e., lint):

```
npm run lint
```

To run unit tests (with Jest):

```
npm run test
```

To run integration tests (with Cypress), headlessly in the background:

```
npm run e2e
```

To run integration tests (with Cypress), interactively in an open window:

```
npm run e2e:open
```

To inspect internal webpack config:

```
npm run inspect
```

To upgrade to the latest version of a specific Node.js module:

```
yarn add <module-name> --save
```
# vue-gif-a-zoid
