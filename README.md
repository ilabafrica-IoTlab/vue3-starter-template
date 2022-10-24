# vue3-starter-template

This templates use vue modular archtecture. The modules are organised by feature and exposes a common module interface.

The module should have the following:

- `view` folder which has the components of the feature
- `route` folder or file which has all the route for the feature
- `store` folder or file which has the name store for the feature
- `Root module vue file` this will be the root UI file for the feature
- `index.js` for the module.This is the common module interface

The module should expose a common module interface exposed.

```{js}
import store from './store'
import router from './router'

export default {
  store,
  router
}
```

## Project setup

## Prerequisite

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build

//Preview after build
npm run preview

```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

#### Inspired by

[Vue.js Modular Architecture](https://www.youtube.com/watch?v=iuyzO2QkY7A)

[A modular approach to building large-scale apps with Vue by Kunal Varma - Kunal Varma](https://www.youtube.com/watch?v=Zu12uA6W80Q)
