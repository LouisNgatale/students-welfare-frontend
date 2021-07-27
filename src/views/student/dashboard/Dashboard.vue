<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col">
              <p class="path">Dashboard</p>
          </div>
      </div>

      <div class="row mb-4">
          <div class="col">
              <div class="card notifications">
                  <div class="card-body">
                      <p>Name: {{ results.FullName}}</p>
                      <p>Class: {{ results.Course }}</p>
                      <p>Allocated room: {{ results.Room }}</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>


<script>
import Notifications from "@/components/dashboard/Notifications";
import axios from "axios";

export default {
    components: {
        'notifications': Notifications,
    },
    data(){
        return{
            results:[]
        }
    },
    created() {
        axios.get("http://localhost:8086/api/profile")
        .then(results => {
            this.results = results.data;
        });
    },
    name: "Dashboard"
}
</script>

<style lang="scss" scoped>
.path{
    font-weight: bold;
    font-size: 18px;
}
.username{
    font-size: 16px;
}
.card-1{
    height: 300px;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 3px 6px rgba(0,0,0,.2);
}
.card-2{
    height: 300px;
    border-radius: 12px;
    background: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,.2);
}
.notifications{
    height: 300px;
    background: white;
    overflow: auto;
}
p{
    margin: 0;
}
</style>