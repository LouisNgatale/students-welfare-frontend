<template>
    <div>
        <div class="container-fluid">
            <div v-for="result in results" :key="result.studentId" class="row">
                <div class="col">
                    <div class="my-2 message-container">
                        <div class="title">
                            {{ result.studentId }}
                        </div>
                        <div class="body">
                            <p>{{ result.lastMessage }}</p>
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
name: "Advices",
    data(){
    return{
        results:[]
    }
    },
    methods:{
      getMessages:function (){
          axios.get("http://localhost:8085/api/welfare/advices/conversations/all")
            .then(response => {
                 this.results = response.data.conversations.map(conversation => {
                     return conversation;
                 });
                console.log(this.results)
            })
            .catch(errorMessage => {
                console.log(errorMessage)
            });
      }
    },
    created() {
        this.getMessages()
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
    cursor: pointer;
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