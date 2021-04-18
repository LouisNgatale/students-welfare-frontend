<template>
<div>
    <!--    Navigation bar      -->
     <div id="nav-container" class="nav-container">
        <!--         Navigation Header      -->
         <div class="nav-header">
             <div @click="toggleMenu" class="nav-icon">
                 <span>
                     <img class="" src="../../assets/images/logo.svg" alt="">
                 </span>
             </div>
             <div class="nav-brand">
                 <div class="heading">
                     <p class="nav-heading">DIT</p>
<!--                     <span class="menu-icon">-->
<!--                        <img class="" src="../../assets/icons/menu.svg" alt="">-->
<!--                     </span>-->
                 </div>
                 <p class="sub-heading">Student Welfare System</p>
             </div>

         </div>

        <!--         Navigation Menu           -->
         <div class="nav-menu">

             <router-link
                 to="/student"
                 custom
                 v-slot="{ href, route, isActive, navigate, }" exact>
                 <a :href="href" @click="navigate">
                     <div
                         :class="[isActive && 'router-link-exact-active']"
                         class="nav-item" exact>
                      <span class="icon">
                          <img v-if="isActive" src="../../assets/icons/dashboard-active.svg" alt="">
                          <img v-else src="../../assets/icons/dashboard.svg" alt="">
                      </span>
                         <span class="menu-title">Dashboard</span>
                     </div>
                 </a>
             </router-link>

             <div class="nav-category-wrapper">
                  <div
                      class="nav-category-container"
                      @click="showAcademicsMenu">
                      <span class="icon">
                          <img v-if="isActive" src="../../assets/icons/academics-active.svg" alt="">
                          <img v-else src="../../assets/icons/academics.svg" alt="">
                      </span>
                      <span class="menu-title">Academics</span>
                  </div>

                     <ul v-if="menu.academics.show" class="nav-subcategories">
                         <li class="nav-sub-item">
                             <!--Sub categories-->
                             <router-link
                                 to="/student/academics/appeal" exact
                                 custom
                                 v-slot="{ href, route, isActive, navigate, }" >
                                 <a :href="href" @click="navigate" >
                                     <div
                                          :class="[isActive && 'router-link-exact-active']"  >
                                         <span class="icon">
                                              <img v-if="isActive" src="../../assets/icons/subcategory-active.svg" alt="">
                                              <img v-else src="../../assets/icons/subcategory.svg" alt="">
                                         </span>
                                         <span>Appeal</span>
                                     </div>
                                 </a>
                             </router-link>
                         </li>

                         <li class="nav-sub-item">
                             <!--Sub categories-->
                             <router-link
                                 to="/student/academics/postpone"
                                 custom
                                 v-slot="{ href, route, isActive, navigate, }" exact>
                                 <a :href="href" @click="navigate">
                                     <div
                                         :class="[isActive && 'router-link-exact-active']">
                                         <span class="icon">
                                              <img v-if="isActive" src="../../assets/icons/subcategory-active.svg" alt="">
                                              <img v-else src="../../assets/icons/subcategory.svg" alt="">
                                         </span>
                                         <span>Postpone</span>
                                     </div>
                                 </a>
                             </router-link>
                         </li>

                         <li class="nav-sub-item">
                             <!--Sub categories-->
                             <router-link
                                 to="/student/academics/specials"
                                 custom
                                 v-slot="{ href, route, isActive, navigate, }" exact>
                                 <a :href="href" @click="navigate">
                                     <div
                                         :class="[isActive && 'router-link-exact-active']">
                                         <span class="icon">
                                              <img v-if="isActive" src="../../assets/icons/subcategory-active.svg" alt="">
                                              <img v-else src="../../assets/icons/subcategory.svg" alt="">
                                         </span>
                                         <span>Specials</span>
                                     </div>
                                 </a>
                             </router-link>
                         </li>
                     </ul>
              </div>

             <div class="nav-category-wrapper">
                 <div
                     class="nav-category-container"
                     @click="showHostelMenu">
                      <span class="icon">
                          <img v-if="isActive" src="../../assets/icons/hostel-active.svg" alt="">
                          <img v-else src="../../assets/icons/hostel.svg" alt="">
                      </span>
                     <span  class="menu-title">Hostel</span>

                 </div>

                 <ul v-if="menu.hostel.show" class="nav-subcategories">
                     <li class="nav-sub-item">
                         <!--Sub categories-->
                         <router-link
                             to="/student/hostel/request"
                             custom
                             v-slot="{ href, route, isActive, navigate, }" exact>
                             <a :href="href" @click="navigate">
                                 <div
                                     :class="[isActive && 'router-link-exact-active']">
                                         <span class="icon">
                                              <img v-if="isActive" src="../../assets/icons/subcategory-active.svg" alt="">
                                              <img v-else src="../../assets/icons/subcategory.svg" alt="">
                                         </span>
                                     <span>Request</span>
                                 </div>
                             </a>
                         </router-link>
                     </li>
                     <li class="nav-sub-item">
                         <!--Sub categories-->
                         <router-link
                             to="/student/hostel/applications"
                             custom
                             v-slot="{ href, route, isActive, navigate, }" exact>
                             <a :href="href" @click="navigate">
                                 <div
                                     :class="[isActive && 'router-link-exact-active']">
                                         <span class="icon">
                                              <img v-if="isActive" src="../../assets/icons/subcategory-active.svg" alt="">
                                              <img v-else src="../../assets/icons/subcategory.svg" alt="">
                                         </span>
                                     <span>Applications</span>
                                 </div>
                             </a>
                         </router-link>
                     </li>
                 </ul>
             </div>

             <div class="nav-category-wrapper">
                 <div
                     class="nav-category-container"
                     @click="showWelfareMenu">
                      <span class="icon">
                          <img v-if="isActive" src="../../assets/icons/welfare-active.svg" alt="" exact>
                          <img v-else src="../../assets/icons/welfare.svg" alt="">
                      </span>
                     <span  class="menu-title">Student Welfare</span>
                 </div>

                 <ul v-if="menu.welfare.show" class="nav-subcategories">
                     <li class="nav-sub-item">
                         <!--Sub categories-->
                         <router-link
                             to="/student/welfare/advice"
                             custom
                             v-slot="{ href, route, isActive, navigate, }" exact>
                             <a :href="href" @click="navigate">
                                 <div
                                     :class="[isActive && 'router-link-exact-active']">
                                         <span class="icon">
                                              <img v-if="isActive" src="../../assets/icons/subcategory-active.svg" alt="">
                                              <img v-else src="../../assets/icons/subcategory.svg" alt="">
                                         </span>
                                     <span>Ask for advice</span>
                                 </div>
                             </a>
                         </router-link>
                     </li>

                     <li class="nav-sub-item">
                         <!--Sub categories-->
                         <router-link
                             to="/student/welfare/suggestions"
                             custom
                             v-slot="{ href, route, isActive, navigate, }">
                             <a :href="href" @click="navigate">
                                 <div
                                     :class="[isActive && 'router-link-exact-active']" exact>
                                         <span class="icon">
                                              <img v-if="isActive" src="../../assets/icons/subcategory-active.svg" alt="">
                                              <img v-else src="../../assets/icons/subcategory.svg" alt="">
                                         </span>
                                     <span>Make suggestions</span>
                                 </div>
                             </a>
                         </router-link>
                     </li>

                     <li class="nav-sub-item">
                         <!--Sub categories-->
                         <router-link
                             to="/student/welfare/rules"
                             custom
                             v-slot="{ href, route, isActive, navigate, }" exact>
                             <a :href="href" @click="navigate">
                                 <div
                                     :class="[isActive && 'router-link-exact-active']">
                                         <span class="icon">
                                              <img v-if="isActive" src="../../assets/icons/subcategory-active.svg" alt="">
                                              <img v-else src="../../assets/icons/subcategory.svg" alt="">
                                         </span>
                                     <span>Rules and regulations</span>
                                 </div>
                             </a>
                         </router-link>
                     </li>
                 </ul>
             </div>

             <div
                 class="nav-item logout" exact
                 @click="logout">
              <span class="icon">
                  <img  src="../../assets/icons/logout.svg" alt="">
              </span>
                 <span class="menu-title">Logout</span>
             </div>


         </div>

     </div>
    <!--    Contents Rendered here      -->
    <div class="container-fluid main">
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</div>
</template>

<script>
export default {
  name: "Home",
    data(){
      return{
          isActive: false,

          menu:{
              academics:{
                  show:false
              },
              hostel:{
                  show:false
              },
              welfare:{
                  show:false
              }
          }
      }
    },
    methods:{
        toggleMenu(){
            // eslint-disable-next-line no-undef
            $("#nav-container").css("width","90px")
        },
        logout(){
          this.$store.dispatch('auth/logout').then(()=>{
              this.$router.push('/login');
          })
        },
        showAcademicsMenu(){
            this.menu.academics.show = !this.menu.academics.show;
        },
        showHostelMenu(){
            this.menu.hostel.show = !this.menu.hostel.show;
        },
        showWelfareMenu(){
            this.menu.welfare.show = !this.menu.welfare.show;
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    list-style-type: none;
    margin-bottom: 0;
}
.nav-container-min{
    width: 60px;
    height: 100%;
    z-index: 1;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
}
.nav-container-min + .nav-heading{
    display: none;
}
.nav-container-min .nav-menu{
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.nav-container-min  .nav-brand{
    justify-content: center;
}
.nav-container-min .nav-category-wrapper{
    margin: auto;

    &:hover{
        background: $primary;
    }
}

.nav-container-min + .main{
    padding-left: 60px;
}


.nav-container{
    width: 300px;
    height: 100%;
    z-index: 1;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    a{
        text-decoration: none;
        color: $grey-400;
    }
    .nav-header{
        display: flex;
        align-items: center;
        padding: 10px 15px;
        margin-bottom: 30px;
        .nav-icon{
            img{
                height: 78px;
                width: 78px;
            }
        }
        .nav-brand{
            .heading{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .menu-icon{
                    float: right;
                    padding: 5px;
                    cursor: pointer;
                }
                .nav-heading{
                    color: $primary;
                    font-size: 28px;
                    font-weight: bold;
                    display: inline-block;
                }
            }
            .sub-heading{
                font-size: 16px;
            }
            p{
                margin: 0;
            }
        }
    }
    .nav-menu{
        .logout{
            cursor: pointer;
        }
        .nav-item{
            padding: 5px 30px;
            transition: padding .3s;
            .icon{
                margin-right: 10px;
                width: 27px;
                height: auto;
            }

            &:hover{
                background: $blue-100;
                padding-left: 35px;
                transition: background,padding-left .3s;
            }
        }
        .router-link-exact-active  {
            background: $blue-100;
            color: $primary;
            border-right: 4px solid $primary;
        }
        .nav-category-wrapper{
            transition: padding .3s;
            .icon{
                margin-right: 10px;
                width: 27px;
                height: auto;
            }
            .nav-category-container{
                padding: 5px 30px;
                cursor: pointer;
                transition: padding .3s;
                &:hover{
                    padding-left: 35px;
                    background: $blue-100;
                    transition: background,padding-left .3s;
                }
            }
            .nav-subcategories{
                margin-left: 40px;
                padding: 0px;
                .nav-sub-item{
                    transition: all .3s;
                    .router-link-exact-active  {
                        background: $blue-100;
                        padding: 0px 5px 0px 10px;
                        color: $primary;
                        border-right: 4px solid $primary;
                    }
                    &:hover{
                        background: $blue-100;
                        padding-left: 15px;
                        transition: background,padding-left .3s;
                    }
                }
            }
        }
    }
}

.main{
    background: $grey-200;
    height: 100vh;
    overflow: auto;
    padding-left: 300px;
}

</style>