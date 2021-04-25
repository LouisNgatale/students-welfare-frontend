<template>
<div class="container-fluid">
<div class="container-fluid my-2">
    <div class="row">
        <div class="col">
            <span class="path">STUDENT WELFARE > </span>
            <span class="sub-path">Rules and regulations</span>
        </div>
    </div>

</div>
    <div class="container-fluid">
        <div class="row ">
            <div class="col ">
                <div class="top-header my-2">
                    <span>Rules and regulations</span>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div v-for="rule in rules" :key="rule.id" class="row">
            <div class="col">
                <div class="my-2 message-container">
                    <div class="title">
                        {{ rule.title }}
                    </div>
                    <div class="body">
                        <p>{{ rule.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Welfare",
    data(){
      return{
          rules:[]
      }
    },
    created() {
      axios.get("http://localhost:8085/api/welfare/rules/all")
        .then(response => {
            this.rules = response.data.suggestionsResponses.map(item => {
                return item;
            })
            console.log(this.rules)
        })
        .catch(errorMessage => {
            console.log(errorMessage);
        })
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
}
.message-container{
    background: white;
    width: 100%;
    min-height: auto;
    padding: 5px 10px;
    .title{
        font-weight: bold;
    }
    .body{
        font-size: 14px;
    }
}
</style>