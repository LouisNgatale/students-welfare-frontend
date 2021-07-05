<template>
<div class="container-fluid main">
<!--  Heading -->
  <div class="row">
    <p class="app-name">Students Welfare System</p>
  </div>

<!--  Sub heading -->
  <div class="row">
    <p class="sub-heading">For an improved student welfare
      experience!</p>
  </div>

<div class="row">
    <div class="col-md-8 bg">
        <img src="../assets/images/login_bg.png" alt="">
    </div>

<!--    Login Form      -->
<div class="col-md-4 login-container">
  <div class="login-contents">

    <div class="title">
      <p>Welcome to student welfare system!</p>


    </div>

      <p>This system enables you to do the following </p>
      <ul>
        <li>Apply for hostel services</li>
        <li>Apply for examination appeals</li>
        <li>Apply for postponement</li>
        <li>Seek advice and suggestions from dean of student</li>
      </ul>

      <a class="btn btn-outline-primary" href="/login"> Login here </a>
    


  </div>
</div>
</div>

</div>
</template>

<script>
import User from '../models/user';

export default {
name: "Login",
    data(){
        return{
            user: new User('', ''),
            loginData:{
                username:"",
                password:""
            },
            loading: false,
            message: ''
        }
    },
    methods:{
        handleLogin:function (){
            this.loading = true;
            this.$validator.validateAll().then(isValid => {
                if (!isValid) {
                    this.loading = false;
                    return;
                }

                if (this.user.username && this.user.password) {
                    this.$store.dispatch('auth/login', this.user).then(
                        () => {
                            this.$router.push('/student');
                        },
                        error => {
                            this.loading = false;
                            this.message =
                                (error.response && error.response.data) ||
                                error.message ||
                                error.toString();
                        }
                    );
                }
            });

        },
        loginForm:function (){
            // eslint-disable-next-line no-undef
          $("#login-option").addClass("active");

            // eslint-disable-next-line no-undef
          $("#register-option").removeClass("active");
        },
        registerForm:function (){
            // eslint-disable-next-line no-undef
          $("#register-option").addClass("active");
            this.$router.push('/register')

            // eslint-disable-next-line no-undef
          $("#login-option").removeClass("active");
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/student');
        }
    },
}
</script>

<style scoped lang="scss">
.app-name{
    font-size: 18px;
    text-align: center;
    margin-bottom: 0;
    margin-top: 15px;
    color: $primary;
}
.sub-heading{
    font-size: 24px;
    text-align: center;
    width: 550px;
    margin: auto;
    font-weight: bold;
}
.bg{
    display: flex;
    justify-content: center;
}
.bg img{
    height: 500px;
    width: auto;
    margin-top: 10px;
}
.main{
    height: 100vh;
}
.login-container{
    padding: 30px 60px 30px 20px;
}
.login-contents{
    background: $accent;
    border-radius: 12px;
    height: auto;
    box-shadow: 0px 10px 15px rgba(0,0,0,.2);
    padding: 20px 30px;

    .title{
        font-weight: bold;
        text-align: left;
        padding-top: 30px;
    }

    .options{
        text-align: left;
        display: flex;
        margin-bottom: 15px;
        .login-option{
            border-bottom: 3px solid $grey-300;
            cursor: pointer;
            width: 100px;
            padding: 3px 0;
            /*&:hover{
                border-bottom: 3px solid $primary;
            }*/
        }
        .register-option{
            border-bottom: 3px solid $grey-300;
            cursor: pointer;
            padding: 3px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100px;
            /*&:hover{
                border-bottom: 3px solid $primary;
            }*/
        }
        .active{
            border-bottom: 3px solid $primary;
            color: $primary;
            font-weight: bold;
            transition: all .2s;
        }
        .active .caret{
            fill: $primary;
            transition: all .2s;
        }
    }

    .form{
        .form-control{
            border: none;
            background: none;
            border-bottom: 2px solid $grey-300;
            border-radius: 0;
        }
        .form-floating label{
            padding-left: 0;
        }

        input:focus + label{
            color: $primary;
            font-weight: 600;
            padding-left: 0;
        }
    }

    .button{
        .btn{
            border-radius: 12px;
            text-transform: none;
            width: 100%;
            outline: none;
            &:focus{
                outline: none;
            }
        }

        margin-bottom: 10px;
        margin-top: 40px;
    }
}
</style>