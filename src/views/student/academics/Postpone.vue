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
  <div class="row">
    <div class="col">
      <table class="table">

        <tr class="table-heading">
          <th>S/N</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Progress</th>
        </tr>

        <tr v-bind:key="index" v-for="(postpone,index) in results" class="td">
          <td class="sn">{{ index+1 }}</td>
          <td>{{ postpone.course }}</td>
          <td>
            {{ postpone.status }}
            <span v-if="postpone.status === 'Approved'">
                            <img src="../../../assets/icons/Done.svg" alt="">
                        </span>
            <span v-if="postpone.status === 'Pending'">
                            <img src="../../../assets/icons/Pending.svg" alt="">
                        </span>
          </td>
          <td>
            <div>
              <div class="progress">
                <div v-if="postpone.status === 'Denied'" class="progress-bar bg-danger" role="progressbar" style="width: 100% " aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{ postpone.status }}</div>
                <div v-else class="progress-bar bg-success" role="progressbar" :style="{ width: postpone.status === 'Approved' ? levels.done : levels.half }" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{{ postpone.status }}</div>

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
                <p>Create postpone request</p>
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
                    <input v-model="formData.course" type="text" class="form-control" autocomplete="off" id="course" placeholder="Course">
                </div>
                <div class="mb-3 input">
                    <input v-model="formData.year" type="text" class="form-control" autocomplete="off" id="year" placeholder="Period e.g (2020 - 2021)">
                </div>
                <div class="mb-3 input">
                    <textarea v-model="formData.reason" class="form-control" placeholder="Reason" id="exampleFormControlTextarea1" rows="3"></textarea>
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
import axios from "axios";

export default {
  name: "Postpone",
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
            course:"",
            year:"",
            semester:"",
            reason:"",
            department:""
        },
        message:"",
        error:"",
        results:[],
        levels:{
          done:'100%',
          half:'50%'
        },
        loading:false
      }
    },
    methods:{
        submit(){
            this.loading = true;
            if (this.formData.fullName !== ""
                && this.formData.registrationNumber !== ""
                && this.formData.department !== ""
                && this.formData.course !== ""
                && this.formData.semester !== ""){
                axios.post("http://localhost:8086/api/academics/postpones/create",{
                    fullName:this.formData.fullName,
                    registrationNumber:this.formData.registrationNumber,
                    department:this.formData.department,
                    course:this.formData.course,
                    semester:this.formData.semester,
                    reason:this.formData.reason,
                    period:this.formData.year,
                    details:this.formData.reason,
                }).then(response => {
                    this.loading = false;
                    this.error = "";
                    this.message = "Postpone request sent!";
                    console.log(response.data)
                }).catch(errorMessage => {
                    this.loading = false;
                    this.message = "";
                    this.error = "Couldn't send request!";
                    console.log(errorMessage);
                })
            }else {
                this.loading = false;
                this.error = "Please fill the form!";
            }
        },
    },
    created(){
      axios.get("http://localhost:8086/api/academics/postpones/student/get")
          .then(response => {
            this.results = []
            response.data.postpones.forEach(item =>{
              this.results.push(item);
            });
            console.log(response)
          }).catch(errorMessage => {
        console.log(errorMessage)
      });
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