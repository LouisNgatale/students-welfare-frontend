<template>
    <div class="container-fluid" style="height: 100%">
        <div v-if="!messaging" class="container-fluid">
            <div v-for="result in results" @click="msg(result.conversationId)" :key="result.studentId" class="row">
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
        <div v-else class="messaging-container">
            <div class="banner p-3">
                <div @click="messaging = false">
                    Back
                </div>
            </div>
            <div class="messages-container container-fluid">

                <div v-for="message in messages" :key="message.id">
                    <div v-if="message.sentByStudent === true">
                        <div class="received">
                            <p> {{ message.messageBody }} </p>
                        </div>
                    </div>

                    <div  v-else>
                        <div class="sent">
                            <p>{{ message.messageBody }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="send-message-container">
                <div class="input-container">
                    <input v-model="newMessage" placeholder="Enter new message" type="text">
                    <button @click="sendMessage" :disabled="!newMessage" class="send">Send</button>
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
        results:[],
        messages: [],
        newMessage:"",
        conversationId:'',
        messaging:false
    }
    },
    methods:{
      getConversations:function (){
          axios.get("http://localhost:8085/api/welfare/advices/conversations/all")
            .then(response => {
                 this.results = response.data.conversations.map(conversation => {
                     return conversation;
                 });
            })
            .catch(errorMessage => {
                console.log(errorMessage)
            });
      },
      sendMessage(){
            axios.post("http://localhost:8085/api/welfare/advices/conversations/messages/new",{
                "conversationId": this.conversationId,
                "messageBody":this.newMessage
            })
                .then(response =>{
                    this.messages.push(response.data);
                    this.newMessage = "";
                }).catch(errorMessage => {
                console.log(errorMessage);
            })
        },
      msg:function (id){
          this.messaging =true;
          axios.get(`http://localhost:8085/api/welfare/advices/conversations/${id}`)
              .then(response => {
                  this.conversationId = response.data.conversationId;
                  this.messages =  response.data.allMessages.map(message => {
                      return message;
                  })
              })
              .catch(errorMessage => {
                  console.log(errorMessage)
              });
      }
    },
    created() {
        this.getConversations()
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
p{
    margin: 0;
}
.messaging-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    .banner{
        display: inline;
        div{
            display: inline-block;
            padding: 5px 8px;
            background: #2c3e50;
            color: white;
            cursor: pointer;
        }
    }
    .messages-container{
        height: 90%;
        overflow: auto;

        .received{
            max-width: 30%;
            overflow-x: hidden;
            height: auto;
            background: $received;
            padding: 6px 7px 8px 9px;
            border-radius: 10px 10px 10px 0;
            float: left;
            clear: both;
            margin: 5px 0;
            min-height: 20px;
        }
        .sent{
            max-width: 30%;
            height: auto;
            overflow-x: hidden;
            background: $sent;
            padding: 6px 7px 8px 9px;
            border-radius: 10px 10px 0 10px;
            float: right;
            clear: both;
            margin: 5px 0;
            color: black;
            min-height: 20px;
        }
    }
    .send-message-container{
        height: 80px;
        width: 100%;
        padding: 10px 20px;
        .input-container{
            box-shadow: 0px 10px 15px rgba(0,0,0,.2);
            height: 100%;
            overflow: hidden;
            border-radius: 12px;
            display: flex;
            justify-content: center;
            background: white;
            width: 100%;
            input{
                height: 100%;
                width: 100%;
                border: none;
                outline: none;
                padding: 10px 15px;
            }
            .send{
                height: 100%;
                width: 120px;
                background: $primary;
                color: white;
                outline:none;
                border: none;
            }
        }
    }
}
</style>