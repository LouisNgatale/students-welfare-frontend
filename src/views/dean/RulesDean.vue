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
            <div class="row ">
                <div class="col ">
                    <div class="top-header my-2">
                        <span>Add suggestion</span>
                        <button @click="modalOpen = true" class="add_appeal">
                            <img src="../../assets/icons/plus.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div v-for="rule in rules" :key="rule.id" class="row">
                <div class="col">
                    <div class="my-2 rule-container">
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

        <teleport name="modal" to="modal">
            <div v-if="modalOpen" class="modal">
                <div class="new-suggestion">
                    <p>Create new rule</p>
                    <div class="mb-3 input">
                        <input v-model="title" type="text" class="form-control" autocomplete="off" id="title" placeholder="Title">
                    </div>
                    <div class="mb-3 input">
                        <select class="form-select" id="class" aria-label="Floating label select example"
                                v-model="cat">
                            <option value="" selected disabled>Category</option>
                            <option v-for="category in categories" :value="category" v-bind:key="category">
                                {{ category }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-3 input">
                        <textarea v-model="body" class="form-control" placeholder="Rule" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div v-if="error" class="container-fluid error mb-2">
                        <div class="row m">
                            <div class="col pl-0">
                                {{ error }}
                            </div>
                        </div>
                    </div>
                    <div v-if="message" class="container-fluid success mb-2">
                        <div class="row m">
                            <div class="col pl-0">
                                {{ message }}
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col pl-0">
                                <button :disabled="loading" class="btn btn-primary mr-2" @click="submit">
                                    <span v-show="loading" class="spinner-border spinner-border-sm mr-2"></span>
                                    Submit
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

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "RulesDean",
    data(){
        return{
            rules:[],
            title:"",
            body:"",
            error:"",
            message:"",
            categories:['STUDENTS','ACADEMICS','STAFF'],
            cat:"",
            loading:false,
            results:[],
            modalOpen: false
        }
    },
    methods:{
        submit:function (){
            axios.post("http://localhost:8085/api/welfare/rules/create",{
                title:this.title,
                category:this.cat,
                body:this.body
            })
                .then(() => {
                    this.getRules()
                })
                .catch(errorMessage => {
                    console.log(errorMessage);
                })
        },
        getRules:function (){
            this.getRules()
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
.rule-container{
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
        box-shadow: 0 3px 6px rgba(0,0,0,.2);
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
        padding: 2px 5px;
        font-weight: normal;
    }
    .sn{
        text-align: center;
    }

    tr{
        background: $grey-100;
    }
    tr:nth-child(even) {background-color: white;}

    .delete{
        width: 28px;
        height: 28px;
    }
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