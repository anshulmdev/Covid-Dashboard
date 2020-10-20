import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33f3d127 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _75c51598 = () => interopDefault(import('..\\pages\\google.vue' /* webpackChunkName: "pages/google" */))
const _1240976f = () => interopDefault(import('..\\pages\\icons.vue' /* webpackChunkName: "pages/icons" */))
const _45a39c88 = () => interopDefault(import('..\\pages\\lockdown.vue' /* webpackChunkName: "pages/lockdown" */))
const _7b67353d = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _7b04d09e = () => interopDefault(import('..\\pages\\regular.vue' /* webpackChunkName: "pages/regular" */))
const _2d0e61ff = () => interopDefault(import('..\\pages\\rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _be694870 = () => interopDefault(import('..\\pages\\starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _1418d87d = () => interopDefault(import('..\\pages\\states.vue' /* webpackChunkName: "pages/states" */))
const _081a10ac = () => interopDefault(import('..\\pages\\typography.vue' /* webpackChunkName: "pages/typography" */))
const _6f26c686 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
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
    path: "/ar",
    component: _33f3d127,
    name: "index___ar"
  }, {
    path: "/google",
    component: _75c51598,
    name: "google___en"
  }, {
    path: "/icons",
    component: _1240976f,
    name: "icons___en"
  }, {
    path: "/lockdown",
    component: _45a39c88,
    name: "lockdown___en"
  }, {
    path: "/notifications",
    component: _7b67353d,
    name: "notifications___en"
  }, {
    path: "/regular",
    component: _7b04d09e,
    name: "regular___en"
  }, {
    path: "/rtl",
    component: _2d0e61ff,
    name: "rtl___en"
  }, {
    path: "/starter-page",
    component: _be694870,
    name: "starter-page___en"
  }, {
    path: "/states",
    component: _1418d87d,
    name: "states___en"
  }, {
    path: "/typography",
    component: _081a10ac,
    name: "typography___en"
  }, {
    path: "/user",
    component: _6f26c686,
    name: "user___en"
  }, {
    path: "/ar/google",
    component: _75c51598,
    name: "google___ar"
  }, {
    path: "/ar/icons",
    component: _1240976f,
    name: "icons___ar"
  }, {
    path: "/ar/lockdown",
    component: _45a39c88,
    name: "lockdown___ar"
  }, {
    path: "/ar/notifications",
    component: _7b67353d,
    name: "notifications___ar"
  }, {
    path: "/ar/regular",
    component: _7b04d09e,
    name: "regular___ar"
  }, {
    path: "/ar/rtl",
    component: _2d0e61ff,
    name: "rtl___ar"
  }, {
    path: "/ar/starter-page",
    component: _be694870,
    name: "starter-page___ar"
  }, {
    path: "/ar/states",
    component: _1418d87d,
    name: "states___ar"
  }, {
    path: "/ar/typography",
    component: _081a10ac,
    name: "typography___ar"
  }, {
    path: "/ar/user",
    component: _6f26c686,
    name: "user___ar"
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
