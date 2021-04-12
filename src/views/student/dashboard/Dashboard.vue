<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <p class="path">Dashboard</p>
            <p class="username">NGATALE, Louis</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="my-3 card-1">

            </div>
        </div>
    </div>
    <div class="row mb-4">
        <div class="col">
            <div class="card-2">

            </div>
        </div>
        <div class="col">
            <div class="notifications">
                <notifications></notifications>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import Notifications from "@/components/dashboard/Notifications";

export default {
    components: {
        'notifications': Notifications,
    },
name: "Dashboard"
}
</script>

<style lang="scss" scoped>
.path{
    font-weight: bold;
    font-size: 18px;
}
.username{
    font-size: 16px;
}
.card-1{
    height: 300px;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 3px 6px rgba(0,0,0,.2);
}
.card-2{
    height: 300px;
    border-radius: 12px;
    background: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,.2);
}
.notifications{
    height: 300px;
    border-radius: 12px;
    background: white;
    overflow: auto;
    box-shadow: 0px 3px 6px rgba(0,0,0,.2);
}
p{
    margin: 0;
}
</style>