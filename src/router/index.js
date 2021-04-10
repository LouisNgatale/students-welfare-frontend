import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Register from "@/views/Register";
import StudentHome from "@/views/student/Home";
import Appeal from "@/views/student/academics/Appeal";
import Postpone from "@/views/student/academics/Postpone";
import Specials from "@/views/student/academics/Specials";
import Request from "@/views/student/hostel/Request";
import Advice from "@/views/student/welfare/Advice";
import Suggestions from "@/views/student/welfare/Suggestions";
import Rules from "@/views/student/welfare/Rules";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/student',
    children:[
      {
        path:'/home',
        component:StudentHome
      },
      {
        path:'/academics/appeal',
        component: Appeal
      },
      {
        path:'academics/postpone',
        component: Postpone
      },
      {
        path:'academics/specials',
        component: Specials
      },
      {
        path:'/student/hostel/request',
        component: Request
      },
      {
        path:'/student/welfare/advice',
        component: Advice
      },
      {
        path: '/student/welfare/suggestions',
        component: Suggestions
      },
      {
        path:'/student/welfare/rules',
        component: Rules
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
