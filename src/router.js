import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/home/index.vue'),
    children: [
      {
        path: '',
        name: 'ToplicList',   // 论坛话题列表
        component: () => import('./views/home/pages/TopicList.vue'),
      },

    ]
  },
  {
    path: '/account',
    redirect: '/login',   
    component: () => import('./views/account/index.vue'),
    children: [
      {
        path: '/login', 
        name: 'Login',  
        component: () => import('./views/account/pages/Login.vue'),
      },
      {
        path: '/signup',  
        name: 'SignUp',
        component: () => import('./views/account/pages/SignUp.vue'),
      },
      {
        path: '/password_reset', 
        name: 'PasswordReset',
        component: () => import('./views/account/pages/PasswordReset.vue'),
      },

    ]
  },
  {
    path: '/dashboard',
    component: () => import('./views/dashboard/index.vue'),
    // 添加路由元信息 meta: { requiresAuth: true, } 用于标识进入该路由必须登录 
    meta: { requiresAuth: true },
    children: [
      {
        path: '',       
        alias: 'index', 
        name: 'Dashboard',  
        component: () => import('./views/dashboard/pages/MainIndex.vue'),
      },
      {
        path: 'staff_manage',
        name: 'StaffManage',
        component: () => import('./views/dashboard/forum/StaffManage.vue'),
      },
      {
        path: 'staff_add',
        name: 'StaffAdd',
        component: () => import('./views/dashboard/forum/StaffAdd.vue'),
      },
      {
        path: 'room_add',
        name: 'RoomAdd',
        component: () => import('./views/dashboard/forum/RoomAdd.vue'),
      },
      {
        path: 'room_manage',
        name: 'RoomManage',
        component: () => import('./views/dashboard/forum/RoomManage.vue'),
      },
      {
        path: 'roomstyle_add',
        name: 'RoomStyleChange',
        component: () => import('./views/dashboard/forum/RoomStyleAdd.vue'),
      },
    ],
  }
];

const router = new VueRouter({
  routes
});



// 使用路由守卫,具体内容见官方文档：https://router.vuejs.org/zh/guide/advanced/meta.html
// 特别注意事项：确保 router.beforeEach 中只有一个 next() 会被执行
// 如果有多个 next() 被执行，将会出现重复路由的异常
router.beforeEach((to, from, next) => {
  let login_router = ['/account', '/login'];
  // 如果 跳转的目标 path 是登录页（看上面的路由设置 ）
  if (to.path in login_router) {
      // 保存跳转到登录页之前的地址， 登录成功后跳转回该页
      // 回跳功能在 登录页 "src/views/account/pages/Login.vue" 实现
      localStorage.setItem("preRoute", router.currentRoute.fullPath);
  }

  // 检查跳转的目标路由是否需要登录(包含 meta: {requiresAuth: true, },)
  if (to.matched.some(record => record.meta.requiresAuth)) {
      // 检查用户是否登录 
      if (!localStorage.getItem('token')) {
          next({
              path: '/login',
              query: { redirect: to.fullPath }
          })
      } else {
          next();
      }
  } else {
      next();
  }
});


export default router;