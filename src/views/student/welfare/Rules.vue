<template>
<div class="container-fluid">
<div class="container-fluid my-2">
    <div class="row">
        <div class="col">
            <span class="path">STUDENT WELFARE > </span>
            <span class="sub-path">Rules and regulations</span>
        </div>
    </div>

</div>
    <div class="container-fluid">
        <div class="row ">
            <div class="col ">
                <div class="top-header my-2">
                    <span>Rules and regulations</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Welfare"
}
</script>

<style lang="scss" scoped>
.path{
    font-weight: bold;
    font-size: 18px;
}
.sub-path{
    font-size: 16px;
    color: $grey-300;
}
.top-header{
    display: flex;
    justify-content: space-between;

}
</style>