<template>
<div class="container-fluid">
    <div class="row mb-2 mt-2">
        <div class="col">
            <p class="heading">Notifications</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="notification my-2">
                <p class="title">Heading</p>
                <div class="notification-body">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: "Notifications"
}
</script>

<style lang="scss" scoped>
p{
    margin: 0;
}
.notification{
    border-left: 3px solid $success;
    padding-left: 6px;
}
.heading{
    font-size: 18px;
    font-weight: 500;
}
.title{
    font-size: 18px;
    color: $success;
}
.notification-body{
    font-size: 12px;
}
</style>