<template>
<div class="contaienr-fluid">
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <span class="path">HOSTEL > </span>
                <span class="sub-path">Request</span>
            </div>
        </div>
    </div>

    <div v-if="results.length" class="container-fluid mt-4">
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
                        <th>STATUS</th>
                    </tr>

                    <tr v-for="(result,index) in results" v-bind:key="result.roomId" class="td">
                        <td class="sn">{{ index + 1 }}</td>
                        <td>{{ result.hostel }}</td>
                        <td>{{ result.wing }}</td>
                        <td>{{ result.floor }}</td>
                        <td>{{ result.room }}</td>
                        <td>{{  result.availability }}</td>
                        <td>{{ result.condition }}</td>
                        <td>{{ result.status }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div v-else class="container-fluid">
        <div class="row justify-content-center">
            <div class="col p-5 justify-content-center">
                <p>No requests made yet!</p>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from "axios";

export default {
name: "Applications",
    data(){
        return{
            results:[]
        }
    },
    created() {
        axios.get("http://localhost:8084/api/hostel/application/requests")
        .then(response => {
            this.results = []
            response.data.hostelResponses.forEach(item =>{
                this.results.push(item);
            })
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