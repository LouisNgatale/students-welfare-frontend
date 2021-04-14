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

    <div class="title"><p>Welcome Back!</p></div>

    <div class="options">
        <div @click="loginForm" id="login-option" class="login-option active">
            <span>Login</span>
        </div>
        <div @click="registerForm" id="register-option" class="register-option">
            <span>Register</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13.381" height="8.642" viewBox="0 0 13.381 8.642">
                  <path class="caret" id="caret" d="M5.98,19.087.291,13.4a1,1,0,0,1,0-1.418l.945-.945a1,1,0,0,1,1.418,0l4.032,4.032,4.032-4.032a1,1,0,0,1,1.418,0l.945.945a1,1,0,0,1,0,1.418L7.394,19.087a1,1,0,0,1-1.414,0Z" transform="translate(0.004 -10.74)" fill="#989898"/>
                </svg>
            </span>
        </div>
    </div>

    <div class="form">
        <form action="">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                       v-model="loginData.username">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                       v-model="loginData.password">
                <label for="floatingPassword">Password</label>
            </div>
        </form>
    </div>

    <div class="button">
        <button @click="login" class="btn btn-primary">Login</button>
    </div>

  </div>
</div>
</div>

</div>
</template>

<script>
import axios from "axios";

export default {
name: "Login",
    data(){
        return{
            loginData:{
                username:"",
                password:""
            }
        }
    },
methods:{
    login:function (){
        axios.post("http://localhost:8082/api/login/authenticate",{
            "username":this.loginData.username,
            "password":this.loginData.password,
            "type":"student"
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(err =>{
                console.log(err)
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
}
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