<template>
<div class="container-fluid">

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <span class="path">HOSTEL > </span>
                <span class="sub-path">Request</span>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row ">
            <div class="col ">
                <div class="top-header my-2">
                    <span>Search Hostel</span>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="search-card">


                    <div class="row">
                        <div class="col mx-4 my-3">
                          <span>
                            <img src="../../../assets/icons/filter.svg" alt="">
                          </span>
                            <span class="bold mx-2">FILTER</span>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="row justify-content-between">
                            <div class="col  mb-4">
                                <select name="" id="hostel"
                                        :disabled="disabled.hostel"
                                        v-model="hostel">
                                    <option value="" selected disabled>SELECT HOSTEL</option>
                                    <option v-for="hostel in hostels" :value="hostel" v-bind:key="hostel"  >{{ hostel }}</option>

                                </select>
                            </div>
                            <div class="col ">
                                <select name="" id="wing"
                                        :disabled="disabled.wing"
                                        v-model="wing">
                                    <option value="" disabled selected>SELECT WING</option>
                                    <option v-for="wing in wings" :value="wing" v-bind:key="wing">{{ wing }}</option>

                                </select>
                            </div>
                            <div class="col ">
                                <select name="" id="floor"
                                        :disabled="disabled.floor"
                                        v-model="floor">
                                    <option value="" disabled selected>SELECT FLOOR</option>
                                    <option v-for="floor in floors" :value="floor" v-bind:key="floor">{{ floor }}</option>

                                </select>
                            </div>
                            <div class="col ">
                                <select name="" id="room"
                                        :disabled="disabled.room"
                                        v-model="room">
                                    <option value=""  selected>SELECT ROOM</option>
                                    <option v-for="room in rooms" :value="room" v-bind:key="room">{{ room }}</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="row  justify-content-end">
                            <div class="col mb-4 mx-5">
                                <button @click="search" class="btn btn-primary ">Search</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row my-3">
            <span>Results</span>
        </div>
    </div>

    <div v-if="results.length" class="container-fluid">
        <div class="row">
            <div class="col">
                <table class="table">

                    <tr class="table-heading">
                        <th>S/N</th>
                        <th>HOSTEL</th>
                        <th>WING</th>
                        <th>FLOOR</th>
                        <th>ROOM</th>
                        <th>AVAILABILITY</th>
                        <th>CONDITION</th>
                        <th>ACTION</th>
                    </tr>

                    <tr v-for="(result,index) in results" v-bind:key="result.roomId" class="td">
                        <td class="sn">{{ index + 1 }}</td>
                        <td>{{ result.hostel }}</td>
                        <td>{{ result.wing }}</td>
                        <td>{{ result.floor }}</td>
                        <td>{{ result.room }}</td>
                        <td>{{  result.availability }}</td>
                        <td>{{ result.condition }}</td>
                        <td>
                        <span @click="request(result)" :id="result.roomId" class="request-room">
                            <img class="" src="../../../assets/icons/request_room.svg" alt="">
                        </span>
                        </td>
                    </tr>

                </table>
            </div>
        </div>
    </div>


    <transition name="toast">
        <Toast v-if="notification" :message="message" :type="type" />
    </transition>
</div>
</template>

<script>
import axios from 'axios';
import Toast from "@/components/Toast";


export default {
name: "Request",
    components:{Toast},
    data(){
        return{
            notification:false,
            message:"",
            type:"",
            hostels:["BLOCK 1", "BLOCK 2", "BLOCK 3", "BLOCK 4", "BLOCK 5"],
            wings:["WING A", "WING B"],
            floors:[],
            results:[],
            sn:1,
            disabled:{
                hostel:false,
                wing:true,
                floor:true,
                room:true
            },
            rooms:"",
            hostel:"",
            wing:"",
            floor: "",
            room: ""
    }
    },
    methods:{
        request(id){
            console.log(localStorage.getItem('user'))
            axios.post("http://localhost:8084/api/hostel/application/apply",{
                "roomId":id.roomId
            }).then(response => {
                this.message =  response.data.message;
                this.type =  response.data.type;
                this.notification = true;
                setTimeout(() => this.notification = false, 3000)
            }).catch(errorMessage => {
                console.log(errorMessage)
            });
        },
        search(){
            //Search specific room
            if (this.hostel!== "" && this.wing !== "" && this.floor !== "" && this.room !== ""){
                axios.get("http://localhost:8084/api/hostel/"+ this.hostel +"/"+this.wing+"/"+this.floor+"/"+this.room)
                    .then(response => {
                        this.results = []
                        this.results.push(response.data);
                    })
                    .catch(errorMessage => {
                        console.log(errorMessage)
                    })
            }

            //Search specific floor
            if (this.hostel!== "" && this.wing !== "" && this.floor !== "" && this.room === ""){
                axios.get("http://localhost:8084/api/hostel/"+ this.hostel +"/"+this.wing+"/"+this.floor+"/all")
                    .then(response => {
                        this.results = []
                        console.log(response.data)
                        response.data.hostelResponses.forEach(item =>{
                            this.results.push(item);
                        })
                    })
                    .catch(errorMessage => {
                        console.log(errorMessage)
                    })
            }
            //Search specific wing
            if (this.hostel!== "" && this.wing !== "" && this.floor === "" && this.room === ""){
                axios.get("http://localhost:8084/api/hostel/"+ this.hostel +"/"+this.wing+"/all")
                    .then(response => {
                        this.results = []
                        response.data.hostelResponses.forEach(item =>{
                            this.results.push(item);
                        })
                    })
                    .catch(errorMessage => {
                        console.log(errorMessage)
                    })
            }
            //Search specific hostel
            if (this.hostel !== "" && this.wing === "" && this.floor === "" && this.room === ""){
                axios.get("http://localhost:8084/api/hostel/"+ this.hostel +"/all")
                    .then(response => {
                        this.results = []
                        response.data.hostelResponses.forEach(item =>{
                            this.results.push(item);
                        })
                    })
                    .catch((errorMessage) => {
                        console.log(errorMessage)
                    })
            }

            //Search specific hostel
            if (this.hostel=== "" && this.wing === "" && this.floor === "" && this.room === ""){
                axios.get("http://localhost:8084/api/hostel/all")
                    .then(response => {
                        this.results = []
                        response.data.hostelResponses.forEach(item =>{
                            this.results.push(item);
                        })
                    })
                    .catch(errorMessage => {
                        console.log(errorMessage)
                    })
            }
        }
    },
    watch: {
        // whenever question changes, this function will run
        hostel() {
            this.disabled.wing = false
        },
        wing(){
            //Query for floor number from database
            if (this.wing !== "" && this.hostel!== ""){
                axios.get("http://localhost:8084/api/hostel/"+ this.hostel +"/"+this.wing).then(response => {
                    this.floors = response.data.floors
                }).catch(errorMessage => {
                    console.log(errorMessage)
                })
            }

            this.disabled.floor =false
        },
        floor(){
            if (this.wing !== "" && this.hostel!== "" && this.floor !== ""){
                axios.get("http://localhost:8084/api/hostel/"+ this.hostel +"/"+this.wing+"/"+this.floor).then(response => {
                    console.log(response.data)
                    this.rooms = response.data.rooms
                }).catch(errorMessage => {
                    console.log(errorMessage)
                })
            }
            this.disabled.room =false
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