<template>
<div class="messaging-container">
    <div class="messages-container container-fluid">
        <div v-for="message in messages" :key="message.id">
            <div v-if="message.sentByStudent !== true ">
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
</template>

<script>
import axios from "axios";
export default {
  name: "Advice",
    data(){
      return{
          messages: [],
          newMessage:"",
          conversationId:''
      }
    },
    methods:{
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
      }
    },
    created() {
      axios.get("http://localhost:8085/api/welfare/advices/conversations/messages/all")
        .then(response => {
            this.conversationId = response.data.conversationId;
            this.messages =  response.data.allMessages.map(message => {
                return message;
            })
        })
    }
}
</script>

<style lang="scss" scoped>
p{
    margin: 0;
}
.messaging-container{
    display: flex;
    flex-direction: column;
    height: 100%;
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