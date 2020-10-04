import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25fab436 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _13f2f405 = () => interopDefault(import('..\\pages\\google.vue' /* webpackChunkName: "pages/google" */))
const _04477a7e = () => interopDefault(import('..\\pages\\icons.vue' /* webpackChunkName: "pages/icons" */))
const _3514ab19 = () => interopDefault(import('..\\pages\\lockdown.vue' /* webpackChunkName: "pages/lockdown" */))
const _65dd994c = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _4e57f300 = () => interopDefault(import('..\\pages\\regular.vue' /* webpackChunkName: "pages/regular" */))
const _bb7e8664 = () => interopDefault(import('..\\pages\\rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _3d00b9d9 = () => interopDefault(import('..\\pages\\starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _62ee574e = () => interopDefault(import('..\\pages\\states.vue' /* webpackChunkName: "pages/states" */))
const _594ab40a = () => interopDefault(import('..\\pages\\typography.vue' /* webpackChunkName: "pages/typography" */))
const _bf8074d2 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _76050990 = () => interopDefault(import('..\\pages\\GeneralViews\\NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))

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
    component: _25fab436,
    name: "index___ar"
  }, {
    path: "/google",
    component: _13f2f405,
    name: "google___en"
  }, {
    path: "/icons",
    component: _04477a7e,
    name: "icons___en"
  }, {
    path: "/lockdown",
    component: _3514ab19,
    name: "lockdown___en"
  }, {
    path: "/notifications",
    component: _65dd994c,
    name: "notifications___en"
  }, {
    path: "/regular",
    component: _4e57f300,
    name: "regular___en"
  }, {
    path: "/rtl",
    component: _bb7e8664,
    name: "rtl___en"
  }, {
    path: "/starter-page",
    component: _3d00b9d9,
    name: "starter-page___en"
  }, {
    path: "/states",
    component: _62ee574e,
    name: "states___en"
  }, {
    path: "/typography",
    component: _594ab40a,
    name: "typography___en"
  }, {
    path: "/user",
    component: _bf8074d2,
    name: "user___en"
  }, {
    path: "/ar/google",
    component: _13f2f405,
    name: "google___ar"
  }, {
    path: "/ar/icons",
    component: _04477a7e,
    name: "icons___ar"
  }, {
    path: "/ar/lockdown",
    component: _3514ab19,
    name: "lockdown___ar"
  }, {
    path: "/ar/notifications",
    component: _65dd994c,
    name: "notifications___ar"
  }, {
    path: "/ar/regular",
    component: _4e57f300,
    name: "regular___ar"
  }, {
    path: "/ar/rtl",
    component: _bb7e8664,
    name: "rtl___ar"
  }, {
    path: "/ar/starter-page",
    component: _3d00b9d9,
    name: "starter-page___ar"
  }, {
    path: "/ar/states",
    component: _62ee574e,
    name: "states___ar"
  }, {
    path: "/ar/typography",
    component: _594ab40a,
    name: "typography___ar"
  }, {
    path: "/ar/user",
    component: _bf8074d2,
    name: "user___ar"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _76050990,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _76050990,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/",
    component: _25fab436,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
