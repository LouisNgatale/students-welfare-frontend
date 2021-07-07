<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <table class="table">
                <tr class="table-heading">
                    <th>S/N</th>
                    <th>Student</th>
                    <th>ID</th>
                    <th>Period</th>
                    <th>Actions</th>
                </tr>
                <tr v-for="(result,index) in results" :key="index" class="td">
                    <td class="sn">{{index+1}}</td>
                    <td>{{result.fullname}}</td>
                    <td>{{result.studentId}}</td>
                    <td>{{result.period}}</td>
                    <td>
                        <select class="form-select d-inline mr-2 input" v-model="result.status" @change="changed(result)" aria-label="Default select example">
                            <option value="Pending" selected disabled>Action</option>
                                <option value="Registrar">Send to Registrar</option>
                                <option value="Denied"  >Deny</option>
                        </select>
                        <button @click="preview(result)" class="btn btn-outline-info">View Details</button>

                    </td>
                </tr>

            </table>
        </div>
    </div>
    <teleport name="modal" to="modal">
            <div v-if="modalOpen" class="modal">
                <div class="new-suggestion">
                        <p>Confirm</p>
                        <div v-if="message" class="container-fluid success mb-2">
                            <div class="row m">
                                <div class="col pl-0">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <div v-if="error" class="container-fluid error mb-2">
                            <div class="row m">
                                <div class="col pl-0">
                                    {{ error }}
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="row jus">
                                <div class="col pl-0">
                                    <button :disabled="loading" class="btn btn-primary mr-2" @click="proceed">
                                        <span v-show="loading" class="spinner-border spinner-border-sm mr-2"></span>
                                        Proceed
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
    <teleport name="modal2" to="modal">
            <div v-if="viewDetails" class="modal">
                <div class="new-suggestion">
                        <div>
                            <p>Name: {{ preview_details.fullname }}</p>
                        </div>
                        <div>
                            <p>Course: {{ preview_details.course}}</p>
                        </div>
                        <div>
                            <p>Semester: {{preview_details.semester}}</p>
                        </div>
                        <div>
                            Description:
                            <p>{{ preview_details.reason }}</p>
                        </div>
                        <div class="container-fluid">
                            <div class="row jus">
                                <div class="col pl-0">
                                    <button :disabled="loading" class="btn btn-primary mr-2" @click="proceed">
                                        <span v-show="loading" class="spinner-border spinner-border-sm mr-2"></span>
                                        Proceed
                                    </button>
                                    <button class="btn btn-danger" @click="viewDetails = false">
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
import axios from 'axios'
export default {
name: "PostponesHOD",
data(){
    return{
        results:[],
        action:"",
        currentStatus:"",
        modalOpen: false,
        loading:false,
        id:"",
        message:"",
        preview_details:"",
        viewDetails:false,
        error:""
    }
},
methods:{
    changed:function(e){
        this.modalOpen=true
        this.message=""
        this.error = "";
        this.currentStatus = e.status
        console.log(e.status);
        this.id = e.id
    },
    preview:function(result){
        this.viewDetails = true;
        this.preview_details = result
        console.log(result)
    },
    proceed:function(){
        if(this.currentStatus === "Registrar"){
            axios.put(`http://localhost:8086/api/academics/postpones/hod/${this.id}/registrar`)
            .then(() => {
                this.message="Successfully updated!"
                this.error = "";

            })
            .catch(() => {
                this.error = "Couldn't update!";
                this.message = "";
            })
        }else{
            axios.put(`http://localhost:8086/api/academics/postpones/hod/${this.id}/deny`)
            .then(() => {
                this.message="Successfully updated!"
                this.error = "";
            })
            .catch(() => {
                this.error = "Couldn't update!";
                this.message = "";
            })
        }
    },
    getPostpones:function(){
        axios.get("http://localhost:8086/api/academics/postpones/hod/get")
        .then(Response => {
            this.results = Response.data.postpones.map(item => {
                    return item;
                })
        })
    }
},
created(){
    this.getPostpones()
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
        box-shadow: 0px 3px 20px rgba(0,0,0,.1);
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
.form-select{
    width: auto;
    padding: 3px 10px;
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
    display: flex;
    justify-content: center;
    align-content: center;
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
.input{
    width: 120px;
}
</style>