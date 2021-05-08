# Todo App

[![Lint, test, build, deploy](https://github.com/richardbristow/todo/actions/workflows/ci-workflow.yml/badge.svg)](https://github.com/richardbristow/todo/actions/workflows/ci-workflow.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/5e57b827-786d-4539-a1b4-48b5b4b12f35/deploy-status)](https://app.netlify.com/sites/a-todos-app/deploys)

A simple todo app made with React.

All todo items get saved to localStorage if supported by the browser, otherwise they are save locally via cookies.

## Install

Install and start the app:

```shell
  git clone https://github.com/richardbristow/todo.git
  cd todo
  npm install
  npm start
```

The app will be available at: <http://localhost:3000/>

Run tests:

```shell
  npm test
```

Lint code:

```shell
  npm run lint     # lint javascript and css
  npm run lint:js  # lint javascript
  npm run lint:css # lint css
```

Build:

```shell
  npm run build
```

## Demo site

A deployed demo site is available at the link below:

<https://a-todos-app.netlify.app>

## Other Info

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
