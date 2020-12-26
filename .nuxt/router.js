import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ea57de6e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _0df5b242 = () => interopDefault(import('..\\pages\\analytics.vue' /* webpackChunkName: "pages/analytics" */))
const _aae828e4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _340c14c1 = () => interopDefault(import('..\\pages\\lockdown.vue' /* webpackChunkName: "pages/lockdown" */))
const _74cdf8a4 = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _70840af6 = () => interopDefault(import('..\\pages\\states.vue' /* webpackChunkName: "pages/states" */))
const _1f245938 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

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
    component: _ea57de6e,
    name: "about___en"
  }, {
    path: "/analytics",
    component: _0df5b242,
    name: "analytics___en"
  }, {
    path: "/ar",
    component: _aae828e4,
    name: "index___ar"
  }, {
    path: "/lockdown",
    component: _340c14c1,
    name: "lockdown___en"
  }, {
    path: "/notifications",
    component: _74cdf8a4,
    name: "notifications___en"
  }, {
    path: "/states",
    component: _70840af6,
    name: "states___en"
  }, {
    path: "/ar/about",
    component: _ea57de6e,
    name: "about___ar"
  }, {
    path: "/ar/analytics",
    component: _0df5b242,
    name: "analytics___ar"
  }, {
    path: "/ar/lockdown",
    component: _340c14c1,
    name: "lockdown___ar"
  }, {
    path: "/ar/notifications",
    component: _74cdf8a4,
    name: "notifications___ar"
  }, {
    path: "/ar/states",
    component: _70840af6,
    name: "states___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _1f245938,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _1f245938,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _aae828e4,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
