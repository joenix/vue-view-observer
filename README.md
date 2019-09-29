# vue-view-observer

## Install

```sh
yarn add vue-view-observer
# or
npm i vue-view-observer
```

## How to use ?

1. import `vue-view-observer` in `main.js`

```js
import vueViewObserver from "vue-view-observer";

Vue.use(vueViewObserver);
```

2. Use `vue-view-observer` in `vue`

```html
<vue-view-observer @subscribe="subscribe">
  some context here ...
</vue-view-observer>
```

3. Writing Function

```js
methods: {
  subscribe(intersecting) {
    console.log(`show context: ${intersecting}`)
  }
}
```
