<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <span class="path">ACADEMICS > </span>
            <span class="sub-path">Postpone</span>
        </div>
    </div>

    <div class="row ">
        <div class="col ">
            <div class="top-header my-2">
                <span>Postpone</span>
                <button class="add_appeal">
                    <img src="../../../assets/icons/plus.svg" alt="">
                </button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
  name: "Postpone"
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
    .add_appeal{
        border: 0;
        border-radius: 6px;
        background: $primary;
    }
}
</style>