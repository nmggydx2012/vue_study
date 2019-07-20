import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Home1 from './views/Home1.vue'
import Home2 from './views/Home2.vue'
import Home3 from './views/Home3.vue'

Vue.use(Router)
const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'home1',
          name: 'home1',
          component: Home1,
          children: [
            {
              path: 'home2',
              name: 'home2',
              component: Home2,
            },
            {
              path: 'home3',
              name: 'home3',
              component: Home3,
            }
          ]
        }
      ]
    },
  ]
})
// 什么事全局导航守卫？
// 什么事局部导航守卫？
// next的作用是啥子？



// 【全局导航守卫】   就是拦截路由的意思
router.beforeEach((to, from, next) => {
  // console.log('to----',to)
  // console.log('from----',from)
  // 用beforeRouteEnter 这个同样可以实现这个功能，只是router.beforeEach是遍历的整个路路由配置
  // 而beforeRouteEnter 是单个路由的【局部导航守卫，只拦截那个一个组件】
  if(to.fullPath==='/home1/home2'){
    
    // 如果不写next就访问不了下一个路由 !!!!! 相当于是中断展示页面
    // 如果写的是next()就是自然的往下走  ！！！
    // 如果next里面加了参数，就是跳到指定路由
    next({ path: '/login' })
  }else{
    next()//往下走
  }
  
})
export default router
