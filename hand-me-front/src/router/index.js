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
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/redirect/index')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/error-page/404')
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/error-page/401')
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
        path: '/register',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/auth/register'),
        name: 'registerForm'
      },
      {
        path: '/profile',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/user/profile'),
        name: 'userBoard',
        meta: { requiresAuth: true }
      },
      {
        path: '/community-blog',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/community-blog/blog'),
        name: 'communityBlog',
        meta: { requiresAuth: true }
      },
      {
        path: '/events',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/event/events'),
        name: 'events'
      },
      {
        path: '/event/create',
        component: () => import(/* webpackChunkName: "hand-me-routes" */ '@/views/event/createEvent'),
        name: 'create_event',
        meta: { requiresAuth: true }
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
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  duplicateNavigationPolicy: 'ignore'
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('userData')

  if(to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/')
  }
  next()
})

export default router
