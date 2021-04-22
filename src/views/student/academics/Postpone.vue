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
                <button  @click="modalOpen = true" class="add_appeal">
                    <img src="../../../assets/icons/plus.svg" alt="">
                </button>
            </div>
        </div>
    </div>

    <teleport to="modal">
        <div v-if="modalOpen" class="modal">
            <div class="new-suggestion">
                <p>Create postpone request</p>
                <div class="mb-3 input">
                    <input v-model="name" type="text" class="form-control" autocomplete="off" id="name" placeholder="Full Name">
                </div>
                <div class="mb-3 input">
                    <input v-model="name" type="text" class="form-control" autocomplete="off" id="regNo" placeholder="Registration Number">
                </div>
                <select class="form-select mb-3 input" aria-label="Default select example">
                    <option selected>Department</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select mb-3 input" aria-label="Default select example">
                    <option selected>Course</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div class="mb-3 input">
                    <input v-model="name" type="text" class="form-control" autocomplete="off" id="year" placeholder="Year">
                </div>
                <div class="mb-3 input">
                    <textarea v-model="body" class="form-control" placeholder="Reason" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div v-if="error" class="container-fluid error mb-2">
                    <div class="row m">
                        <div class="col pl-0">
                            {{ error }}
                        </div>
                    </div>
                </div>
                <div v-if="message" class="container-fluid success mb-2">
                    <div class="row m">
                        <div class="col pl-0">
                            {{ message }}
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col pl-0">
                            <button :disabled="loading" class="btn btn-primary mr-2" @click="submit">
                                <span v-show="loading" class="spinner-border spinner-border-sm mr-2"></span>
                                Submit
                            </button>
                            <button class="btn btn-danger" @click="modalOpen = false">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>

</div>
</template>

<script>
export default {
  name: "Postpone",
    data(){
      return{
          modalOpen: false
      }
    }
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
.modal {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.modal > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background-color: white;
    width: 400px;
    min-height: 300px;
    padding: 10px;
}
.new-suggestion{
    .input{
        width: 100%;
    }
}
.error{
    font-size: 14px;
    color: $danger;
}
.success{
    font-size: 14px;
    color: $success;
}
</style>