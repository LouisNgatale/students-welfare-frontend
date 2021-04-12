<template>
<div>
    <!--    Navigation bar      -->
     <div class="nav-container">
        <!--         Navigation Header      -->
         <div class="nav-header">
             <div class="nav-icon">
                 <span>
                     <img class="" src="../../assets/images/logo.svg" alt="">
                 </span>
             </div>
             <div class="nav-brand">
                 <p class="heading">DIT</p>
                 <p class="sub-heading">Student Welfare System</p>
             </div>
         </div>

        <!--         Navigation Menu           -->
         <div class="nav-menu">
             <router-link
                 to="/student/home"
                 custom
                 v-slot="{ href, route, isActive, navigate, }">
                 <a :href="href" @click="navigate">
                     <div
                         :class="[isActive && 'router-link-active']"
                         class="nav-item">
                      <span class="icon">
                          <img v-if="isActive" src="../../assets/icons/dashboard-active.svg" alt="">
                          <img v-else src="../../assets/icons/dashboard.svg" alt="">
                      </span>
                         <span>Dashboard</span>
                     </div>
                 </a>
             </router-link>

            <!--             TODO: Dropdown options         -->
             <div class="nav-category-wrapper">
                  <div class="nav-category-container">
                      <span class="icon">
                          <img v-if="isActive" src="../../assets/icons/academics-active.svg" alt="">
                          <img v-else src="../../assets/icons/academics.svg" alt="">
                      </span>
                      <span>Academics</span>
                  </div>

                     <ul class="nav-subcategories">
                         <li class="nav-sub-item">
                             <!--Sub categories-->
                             <router-link
                                 to="/student/academics/appeal"
                                 custom
                                 v-slot="{ href, route, isActive, navigate, }">
                                 <a :href="href" @click="navigate">
                                     <div
                                          :class="[isActive && 'router-link-active']">
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
                                 v-slot="{ href, route, isActive, navigate, }">
                                 <a :href="href" @click="navigate">
                                     <div
                                         :class="[isActive && 'router-link-active']">
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
                                 v-slot="{ href, route, isActive, navigate, }">
                                 <a :href="href" @click="navigate">
                                     <div
                                         :class="[isActive && 'router-link-active']">
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

             <div class="nav-item">
                  <div>
                      <span class="icon">
                      <img src="../../assets/icons/hostel.svg" alt="">
                  </span>
                      <span>Hostel</span>
                  </div>

              </div>
             <div class="nav-item">
                  <span class="icon">
                      <img src="../../assets/icons/welfare.svg" alt="">
                  </span>
                  <span>Student Welfare</span>
              </div>
         </div>
     </div>
    <!--    Contents Rendered here      -->
    <div class="container-fluid">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
  name: "Home",
    data(){
      return{
          menu:{
              academics:{
                  show:false
              }
          }
      }
    }
}
</script>

<style lang="scss" scoped>
ul{
    list-style-type: none;
    margin-bottom: 0;
}
.nav-container{
    width: 300px;
    height: 100%;
    position: fixed;
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
                color: $primary;
                font-size: 28px;
                font-weight: bold;
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
        .router-link-active  {
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
                    .router-link-active  {
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

</style>