import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _143bf662 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _2f4f235b = () => interopDefault(import('..\\pages\\analytics.vue' /* webpackChunkName: "pages/analytics" */))
const _33f3d127 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _45a39c88 = () => interopDefault(import('..\\pages\\lockdown.vue' /* webpackChunkName: "pages/lockdown" */))
const _7b67353d = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _1418d87d = () => interopDefault(import('..\\pages\\states.vue' /* webpackChunkName: "pages/states" */))
const _51fa1d3f = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _143bf662,
    name: "about___en"
  }, {
    path: "/analytics",
    component: _2f4f235b,
    name: "analytics___en"
  }, {
    path: "/ar",
    component: _33f3d127,
    name: "index___ar"
  }, {
    path: "/lockdown",
    component: _45a39c88,
    name: "lockdown___en"
  }, {
    path: "/notifications",
    component: _7b67353d,
    name: "notifications___en"
  }, {
    path: "/states",
    component: _1418d87d,
    name: "states___en"
  }, {
    path: "/ar/about",
    component: _143bf662,
    name: "about___ar"
  }, {
    path: "/ar/analytics",
    component: _2f4f235b,
    name: "analytics___ar"
  }, {
    path: "/ar/lockdown",
    component: _45a39c88,
    name: "lockdown___ar"
  }, {
    path: "/ar/notifications",
    component: _7b67353d,
    name: "notifications___ar"
  }, {
    path: "/ar/states",
    component: _1418d87d,
    name: "states___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _51fa1d3f,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _51fa1d3f,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _33f3d127,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
