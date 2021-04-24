<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <span class="path">ACADEMICS > </span>
                <span class="sub-path">Specials</span>
            </div>
        </div>


        <div class="row">
            <div class="col">
                <table class="table">

                    <tr class="table-heading">
                        <th>S/N</th>
                        <th>Student</th>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Updated on</th>
                        <th>Actions</th>
                    </tr>

                    <tr class="td">
                        <td class="sn">2</td>
                        <td>Name</td>
                        <td>ID</td>
                        <td>Subject</td>
                        <td>Updated at</td>
                        <td>
                            <select class="form-select input" aria-label="Default select example" v-model="formData.semester">
                                <option value="" selected >Approve</option>
                                <option value="" selected >Deny</option>
                            </select>
                        </td>
                    </tr>

                </table>
            </div>
        </div>


    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Specials",
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
            results:[],
            formData:{
                fullName:"",
                registrationNumber:"",
                year:"",
                semester:"",
                course:"",
                subject:"",
                reason:"",
                department:""
            },
            message:"",
            error:"",
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
                axios.post("http://localhost:8086/api/academics/appeals/create",{
                    fullName:this.formData.fullName,
                    registrationNumber:this.formData.registrationNumber,
                    department:this.formData.department,
                    course:this.formData.course,
                    semester:this.formData.semester,
                    subject:this.formData.subject,
                    reason:this.formData.reason,
                }).then(response => {
                    this.loading = false;
                    this.error = "";
                    this.message = "Appeal created successfully";
                    console.log(response.data)
                }).catch(errorMessage => {
                    this.loading = false;
                    this.message = "";
                    this.error = "Couldn't create appeal!";
                    console.log(errorMessage);
                })
            }else {
                this.loading = false;
                this.error = "Please fill the form!";
            }
        },
        getSpecials(){
            axios.get("http://localhost:8086/api/academics/specials/student/get")
                .then(response => {
                    this.results = []
                    response.data.specials.forEach(item =>{
                        this.results.push(item);
                    })
                }).catch(errorMessage => {
                console.log(errorMessage)
            });
        },
    },
    created() {
        this.getSpecials()
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