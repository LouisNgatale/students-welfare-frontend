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

        <!--        Background Image    -->
        <div class="row">
            <div class="col-md-8 bg">
                <img class="" src="../assets/images/register_bg.png" alt="">
            </div>

            <!--    Login Form      -->
            <div class="col-md-4 login-container">
                <div class="login-contents">

                    <div class="title"><p>Create Account!</p></div>
                    <div class=""><p>Student!</p></div>

                    <div class="options">
                        <div @click="loginForm" id="login-option" class="login-option">
                            <span>Login</span>
                        </div>
                        <div @click="registerForm" id="register-option" class="register-option active">
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
                            <div class="form-floating">
                                <input type="email" class="form-control" id="fullName" placeholder="name@example.com"
                                       v-model="formData.fullName" @keyup="fullName">
                                <label for="fullName">Full Name</label>
                                <span class="error" v-if="formData.errors.fullName">{{ formData.errors.fullName }}</span>
                            </div>
                            <div class="form-floating">
                                <input type="email" class="form-control" id="registrationNumber" placeholder="180000000" v-model="formData.registrationNumber">
                                <label for="registrationNumber">Registration Number</label>
                            </div>

                            <div class="row g-2">
                                <div class="col-md">
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                            <option selected>Course</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="col-md">
                                    <div class="form-floating">
                                        <select class="form-select" id="class" aria-label="Floating label select example">
                                            <option selected>Year</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-floating">
                                <input type="password" class="form-control" id="phoneNumber" placeholder="text" v-model="formData.phoneNumber">
                                <label for="phoneNumber">Phone Number</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="password" placeholder="Password" v-model="formData.password">
                                <label for="password">Password</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="confirmPassword" placeholder="Password" v-model="formData.confirmPassword">
                                <label for="confirmPassword">Confirm Password</label>
                            </div>
                        </form>
                    </div>

                    <div class="button">
                        <button class="btn btn-primary">Login</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Register",
    data(){
        return{
            formData:{
                fullName:"",
                registrationNumber:"",
                course:"",
                year:"",
                phoneNumber:"",
                password:"",
                confirmPassword:"",
                errors:{
                    fullName:"",
                    registrationNumber:"",
                    course:"",
                    year:"",
                    phoneNumber:"",
                    password:"",
                    confirmPassword:""
                }
            },
            patterns:{
                phoneNumber:/^\+?\d{12}$/ig,
                registrationNumber:/^\d{12}$/ig,
                email: /^([a-z\d\\.-]+)@([a-z]{2,8})\.([a-z]{2,8})(\.[a-z]{2,8})?$/ig ,
                password:/^[\d\w]{8,20}$/ig,
                fullName:/^([a-z]+)\s([a-z]+)$/ig
            }
        }
    },
    methods:{
        fullName:function (){
            let value = this.formData.fullName;
            if (value !== "") {
                if (this.patterns.fullName.test(value) !== true){
                    console.log(this.patterns.fullName.test(value))
                    this.formData.errors.fullName = "Enter valid name";
                }else {
                    this.formData.errors.fullName = "";
                }
            } else {
                this.formData.errors.fullName = "Full name is required"
            }
        },
        loginForm:function (){
            // eslint-disable-next-line no-undef
            $("#login-option").addClass("active");

            // eslint-disable-next-line no-undef
            $("#register-option").removeClass("active");
            this.$router.push('/login')
        },
        registerForm:function (){
            // eslint-disable-next-line no-undef
            $("#register-option").addClass("active");

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
    justify-content: center;
}
.main{
    height: 100vh;
}
.login-container{
    padding: 0 60px 0 20px;
}
.login-contents{
    background: $accent;
    border-radius: 12px;
    height: auto;
    box-shadow: 0px 10px 15px rgba(0,0,0,.2);
    padding: 0 30px 10px 30px;

    .title{
        font-weight: bold;
        text-align: left;
        padding-top: 30px;
        p{
            margin: 0;
        }
    }

    .options{
        text-align: left;
        display: flex;
        margin-bottom: 15px;
        .login-option{
            border-bottom: 3px solid $grey-200;
            cursor: pointer;
            width: 100px;
            padding: 3px 0;
            /*&:hover{
                border-bottom: 3px solid $primary;
            }*/
        }
        .register-option{
            border-bottom: 3px solid $grey-200;
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
            border-bottom: 2px solid $grey-200;
            border-radius: 0;
        }
        .form-floating select{
            border: none;
            border-radius: 0;
            background: none;
            border-bottom: 2px solid $grey-200;
        }
        .form-floating label{
            padding-left: 0;
        }

        input:focus + label{
            color: $primary;
            font-weight: 600;
            padding-left: 0;
        }

        .error{
            color: $danger;
            font-size: 12px;
            font-style: italic;
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

    .center{
        margin: 0;
    }
}
</style>