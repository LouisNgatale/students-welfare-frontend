<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <span class="path">ACADEMICS > </span>
            <span class="sub-path">Appeal</span>
        </div>
    </div>

    <div class="row ">
        <div class="col ">
            <div class="top-header my-2">
                <span>Appeals</span>
                <button  @click="modalOpen = true"  class="add_appeal">
                    <img src="../../../assets/icons/plus.svg" alt="">
                </button>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <table class="table">

                <tr class="table-heading">
                    <th>S/N</th>
                    <th>Subject</th>
                    <th>Appealed on</th>
                    <th>Updated on</th>
                    <th>Status</th>
                    <th>Progress</th>
                </tr>

                <tr class="td">
                    <td class="sn">1</td>
                    <td>Kiswahili</td>
                    <td>01/12/2020</td>
                    <td>01/12/2020</td>
                    <td>
                        Approved
                        <span>
                            <img src="../../../assets/icons/Done.svg" alt="">
                        </span>
                    </td>
                    <td>
                        <div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr class="td">
                    <td class="sn">2</td>
                    <td>Civics</td>
                    <td>01/12/2020</td>
                    <td>Pending</td>
                    <td class="">
                        <span>
                            Pending
                        </span>
                        <span>
                            <img src="../../../assets/icons/Pending.svg" alt="">
                        </span>
                    </td>
                    <td>
                        <div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr class="td">
                    <td class="sn">2</td>
                    <td>Biology</td>
                    <td>01/12/2020</td>
                    <td>01/12/2020</td>
                    <td class="">
                        <span>
                            Declined
                        </span>
                        <span>
                            <img src="../../../assets/icons/Cross.svg" alt="">
                        </span>
                    </td>
                    <td>
                        <div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <teleport to="modal">
        <div v-if="modalOpen" class="modal">
            <div class="new-suggestion">
                <p>Create appeal request</p>
                <div class="mb-3 input">
                    <input v-model="formData.fullName" type="text" class="form-control" autocomplete="off" id="name" placeholder="Full Name">
                </div>
                <div class="mb-3 input">
                    <input v-model="formData.registrationNumber" type="text" class="form-control" autocomplete="off" id="regNo" placeholder="Registration Number">
                </div>
                <select class="form-select mb-3 input" aria-label="Default select example" v-model="formData.department">
                    <option value="" selected disabled>Department</option>
                    <option v-for="department in departments" :value="department" v-bind:key="department">
                        {{ department }}
                    </option>
                </select>
                <select class="form-select mb-3 input" aria-label="Default select example" v-model="formData.semester">
                    <option value="" selected disabled>Semester</option>
                    <option v-for="semester in semesters" :value="semester" v-bind:key="semester">
                        {{ semester }}
                    </option>
                </select>
                <div class="mb-3 input">
                    <input v-model="name" type="text" class="form-control" autocomplete="off" id="year" placeholder="Subject">
                </div>

                <div class="mb-3 input">
                    <textarea v-model="formData.reason" class="form-control" placeholder="Reason" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Attachments</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple>
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
name: "Appeal",
    data(){
        return{
            modalOpen: false,
            departments:[
                "COMPUTER STUDIES",
                "CIVIL ENGINEERING",
                "LAB TECH",
                "TELECOMMUNICATION ENGINEERING",
                "ELECTRICAL ENGINEERING",
                "MECHANICAL ENGINEERING",
            ],
            semesters:["ONE","TWO","BOTH"],
            formData:{
                fullName:"",
                registrationNumber:"",
                year:"",
                semester:"",
                reason:"",
                department:""
            },
            message:"",
            error:"",
            loading:false
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
        box-shadow: 0px 3px 6px rgba(0,0,0,.2);
    }
}
.table{
    width: 100%;
    box-shadow: 0px 3px 20px rgba(0,0,0,.1);
    .table-heading{
        background: $primary;
        color: white;
        th{
            padding: 5px 5px;
            font-weight: normal;
        }
    }
    td{
        padding: 5px 5px;
        font-weight: normal;
    }
    .sn{
        text-align: center;
    }

    tr{
        background: $grey-100;
    }
    tr:nth-child(even) {background-color: white;}

    .progress{
        border-radius: 10px;
        background: $grey-300;
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