import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
   redirect: '/index'
  },
  {
    path: '/index',
    component: () => import ('../views/Index/Index.vue'),
    redirect: '/index/home',
    children: [
      {
        path: 'home',
        component: () => import('../views/Index/TabBar/Home.vue')
      },
      {
        path: 'message',
        component: () => import('../views/Index/TabBar/Message.vue')
      },
      {
        path: 'note',
        component: () => import('../views/Index/TabBar/Note.vue')
      },
      {
        path: 'profile',
        component: () => import('../views/Index/TabBar/Profile.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import ('../views/User/Login.vue')
  },
  {
    path: '/registry',
    component: () => import ('../views/User/Registry.vue')
  },
  {
    path: '/selectsubject',
    component: () => import ('../views/SelectSubject/SelectSubject.vue'),
    beforeEnter: (to, from, next) => {
      const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
    }
  },
  {
    path: '/subject/:id',
    component: () => import ('../views/Subject/Subject.vue'),
    redirect: '/subject/:id/notify',
    children: [
      {
        path: 'material',
        component: () => import ('../views/Subject/Item/Material.vue')
      },
      {
        path: 'discussion',
        component: () => import ('../views/Subject/Item/Discussion.vue')
      },
      {
        path: 'homework',
        component: () => import ('../views/Subject/Item/Homework.vue')
      },
      {
        path: 'notify',
        component: () => import ('../views/Subject/Item/Notify.vue')
      }
    ]
  },
  {
    path: '/dohomework',
    component: () => import ('../views/DoHomework/DoHomework.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
