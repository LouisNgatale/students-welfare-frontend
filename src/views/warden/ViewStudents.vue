<template>
<div>
    <div  class="container-fluid mt-4">
        <div class="row">
            <div class="col">
                <table class="table">

                    <tr class="table-heading">
                        <th>S/N</th>
                        <th>FULL NAME</th>
                        <th>HOSTEL</th>
                        <th>WING</th>
                        <th>FLOOR</th>
                        <th>ROOM</th>
                        <th>ACTION</th>
                    </tr>

                    <tr v-for="(result,index) in results" :key="index" class="td">
                        <td class="sn">{{ index+1 }}</td>
                        <td>{{ result.studentName }}</td>
                        <td>{{ result.hostel }}</td>
                        <td>{{ result.wing }}</td>
                        <td>{{ result.floor }}</td>
                        <td>{{ result.room }}</td>
                        <td>
                        <span @click="request(result)" class="request-room mr-2">
                            <img class="" src="../../assets/icons/accept.png" alt="">
                        </span>
                            <span @click="request(result)"  class="request-room">
                            <img class="" src="../../assets/icons/deny.png" alt="">
                        </span>
                        </td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
name: "ViewStudents",
    data(){
        return{
            results:[]
        }
    },
    methods:{
    getBeds:function (){
        axios.get("http://localhost:8084/api/hostel/warden/occupied/beds")
            .then(response => {
                this.results = []
                response.data.beds.forEach(item =>{
                    this.results.push(item);
                })
            }).catch(errorMessage => {
            console.log(errorMessage)
        });
    }
    },
    created() {
        this.getBeds()
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
.search-card{
    height: auto;
    border-radius: 12px;
    background: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,.2);

}
.btn{
    float: right;
    width: 180px;
    border-radius: 18px;
    height: 36px;
    background: $primary;
}
select{
    border-radius: 12px;
    padding: 3px 15px;
    width: auto;
    border: 2px solid $grey-300;
    outline: none;
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
    .request-room{
        border: 0;
        border-radius: 6px;
        cursor: pointer;
        img{
            height: 25px;
            width: 25px;
        }
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
/* enter transitions */
.toast-enter-active {
    animation: wobble 0.5s ease;
}
/* leave transitions */
.toast-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}
.toast-leave-active {
    transition: all 0.3s ease;
}
@keyframes wobble {
    0% { transform: translateY(-100px); opacity: 0 }
    50% { transform: translateY(0px); opacity: 1 }
    60% { transform: translateX(8px); opacity: 1 }
    70% { transform: translateX(-8px); opacity: 1 }
    80% { transform: translateX(4px); opacity: 1 }
    90% { transform: translateX(-4px); opacity: 1 }
    100% { transform: translateX(0px); opacity: 1 }
}
</style>