<template>
    <div class="notification-wrapper">
        <div v-bind:class="type" class="notification">
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
name: "Toast",
    props:{
        message:String,
        type:String
    },
    created() {
        console.log(this.type)
    }
}
</script>

<style lang="scss" scoped>
.notification-wrapper {
    position: fixed;
    width: 100%;
    top: 20px;
    left: 0;
    z-index: 2;
}
.notification {
    padding: 20px;
    color: white;
    background: #ff0062;
    border-radius: 10px;
    text-align: center;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    max-width: 400px;
    margin: 0 auto;
}

.Warning{
    background: $warning;
    font-weight: bold;
}
.Danger{
    background: $danger;
}
.Success{
    background: $success;
}
</style>