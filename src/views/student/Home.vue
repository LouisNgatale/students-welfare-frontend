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

             <router-link
                 to="/student/academics/appeal"
                 custom
                 v-slot="{ href, route, isActive, navigate, }">
                 <a :href="href" @click="navigate">
                     <div
                         :class="[isActive && 'router-link-active']"
                         class="nav-item">
                      <span class="icon">
                          <img v-if="isActive" src="../../assets/icons/academics-active.svg" alt="">
                          <img v-else src="../../assets/icons/academics.svg" alt="">
                      </span>
                         <span>Academics</span>
                     </div>
                 </a>
             </router-link>

             <div class="nav-item">
                  <span class="icon">
                      <img src="../../assets/icons/hostel.svg" alt="">
                  </span>
                  <span>Hostel</span>
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
  name: "Home"
}
</script>

<style lang="scss" scoped>
.nav-container{
    width: 350px;
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
                transition: all .3s;
            }
        }
        .router-link-active  {
            background: $blue-100;
            color: $primary;
            border-right: 4px solid $primary;
        }
    }
}

</style>