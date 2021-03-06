import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Appeal from "@/views/student/academics/Appeal";
import Postpone from "@/views/student/academics/Postpone";
import Specials from "@/views/student/academics/Specials";
import Request from "@/views/student/hostel/Request";
import Advice from "@/views/student/welfare/Advice";
import Suggestions from "@/views/student/welfare/Suggestions";
import Rules from "@/views/student/welfare/Rules";
import Dashboard from "@/views/student/dashboard/Dashboard";
import { Role } from "@/constants/role";
import Applications from "@/views/student/hostel/Applications";
import AddHostel from "@/views/warden/AddHostel";
import ViewRequests from "@/views/warden/ViewRequests";
import ViewStudents from "@/views/warden/ViewStudents";
import SpecialsHOD from "@/views/hod/SpecialsHOD";
import PostponesHOD from "@/views/hod/PostponesHOD";
import SpecialsReg from "@/views/registrar/SpecialsReg";
import PostponesReg from "@/views/registrar/PostponesReg";
import AppealsReg from "@/views/registrar/AppealsReg";
import AdvicesDean from "@/views/dean/AdvicesDean";
import RulesDean from "@/views/dean/RulesDean";
import SuggestionsDean from "@/views/dean/SuggestionsDean";
import Home from "@/views/Home";
import notFound from '@/views/404'
import restricted from '@/views/403'

Vue.use(VueRouter)

const routes = [
   {
     // matches everything else  
     path: '*',
     name: 'notFound',
     component: notFound
   },
   {
     // matches everything else  
     path: '/403',
     name: 'restricted',
     component: restricted
   },
   {
     path: '/',
     name: 'Home',
     component: Home
   },
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
    path: '/student/',
    meta: { authorize: [Role.Student] },
    children:[
      {
        path:'',
        meta: { authorize: [Role.Student] },
        component:Dashboard
      },
      {
        path:'academics/appeal',
        meta: { authorize: [Role.Student] },
        component: Appeal
      },
      {
        path:'academics/postpone',
        meta: { authorize: [Role.Student] },
        component: Postpone
      },
      {
        path:'academics/specials',
        meta: { authorize: [Role.Student] },
        component: Specials
      },
      {
        path:'hostel/request',
        meta: { authorize: [Role.Student] },
        component: Request
      },
      {
        path:'hostel/applications',
        meta: { authorize: [Role.Student] },
        component: Applications
      },
      {
        path:'welfare/advice',
        meta: { authorize: [Role.Student] },
        component: Advice
      },
      {
        path: 'welfare/suggestions',
        meta: { authorize: [Role.Student] },
        component: Suggestions
      },
      {
        path:'welfare/rules',
        meta: { authorize: [Role.Student] },
        component: Rules
      }
    ],

    component: () => import(/* webpackChunkName: "about" */ "@/views/student/Home")
  },
  {
    path: '/warden/',
    meta: { authorize: [Role.Admin] },
    children:[
      {
        path:'',
        meta: { authorize: [Role.Admin] },
        component:AddHostel
      },
      {
        path:'requests',
        meta: { authorize: [Role.Admin] },
        component: ViewRequests
      },
      {
        path:'students',
        meta: { authorize: [Role.Admin] },
        component: ViewStudents
      }
    ],

    component: () => import(/* webpackChunkName: "about" */ "@/views/warden/Home")
  },
  {
    path: '/hod/',
    meta: { authorize: [Role.Hod] },
    children:[
      {
        path:'specials',
        meta: { authorize: [Role.Hod] },
        component:SpecialsHOD
      },
      {
        path:'postpones',
        meta: { authorize: [Role.Hod] },
        component: PostponesHOD
      }
    ],

    component: () => import(/* webpackChunkName: "about" */ "@/views/hod/Home")
  },
  {
    path: '/registrar/',
    meta: { authorize: [Role.Registrar] },
    children:[
      {
        path:'specials',
        meta: { authorize: [Role.Registrar] },
        component:SpecialsReg
      },
      {
        path:'postpones',
        meta: { authorize: [Role.Registrar] },
        component: PostponesReg
      },
      {
        path:'appeals',
        meta: { authorize: [Role.Registrar] },
        component: AppealsReg
      }
    ],

    component: () => import(/* webpackChunkName: "about" */ "@/views/registrar/Home")
  },
  {
    path: '/dean/',
    meta: { authorize: [Role.Admin] },
    children:[
      {
        path:'suggestions',
        meta: { authorize: [Role.Admin] },
        component:SuggestionsDean
      },
      {
        path:'rules',
        meta: { authorize: [Role.Admin] },
        component: RulesDean
      },
      {
        path:'advices',
        meta: { authorize: [Role.Admin] },
        component: AdvicesDean
      }
    ],

    component: () => import(/* webpackChunkName: "about" */ "@/views/dean/Home")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  // const publicPages = ['/login', '/register'];
  // const authRequired = !publicPages.includes(to.path);
  let roles = localStorage.getItem('roles');

  roles = JSON.parse(roles);
  const loggedIn = localStorage.getItem('user');

  const { authorize } = to.meta;
  const currentUser = loggedIn;

  if (authorize) {
    if (!currentUser) {
      // not logged in so redirect to login page with the return url
      return next({ path: '/login', query: { returnUrl: to.path } });
    }

    // check if user has required role
    if (authorize.length && !roles.includes(authorize[0])) {
      // role not authorised so redirect to home page
      return next({ path: '/403' });
    }
  }

  next();
});
export default router
