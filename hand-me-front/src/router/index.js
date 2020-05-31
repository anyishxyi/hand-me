import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/error-page/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/home'),
        name: 'home',
        // meta: { title: 'events', icon: 'home', affix: true }
      },
      {
        path: '/login',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/auth/auth'),
        name: 'login',
        hidden: true
      },
      {
        path: '/register',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/auth/register'),
        name: 'registerForm',
        hidden: true
      },
      {
        path: '/register-particular',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/auth/register-particular'),
        name: 'registerParticular',
        hidden: true
      },
      {
        path: '/register-association',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/auth/register-association'),
        name: 'registerAssociation',
        hidden: true
      },
      {
        path: '/profile',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/user/profile'),
        name: 'profile',
        hidden: true
      },
      {
        path: '/events',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/events'),
        name: 'events',
        hidden: true
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
