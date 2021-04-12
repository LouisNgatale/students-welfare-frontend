<template>
<div>
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
</div>
</template>

<script>
export default {
name: "Options",
    methods:{
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

<style lang="scss" scoped>
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

</style>