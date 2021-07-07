<template>
    <div class="container-fluid">
        <div class="container-fluid my-2">
            <div class="row">
                <div class="col">
                    <span class="path">STUDENT WELFARE > </span>
                    <span class="sub-path">Suggestions</span>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row ">
                <div class="col ">
                    <div class="top-header my-2">
                        <span>Add suggestion</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <table class="table">

                        <tr class="table-heading">
                            <th>S/N</th>
                            <th>Title</th>
                            <th>Created at</th>
                            <th>Status</th>
                        </tr>

                        <tr v-for="(result, index) in results" v-bind:key="index" class="td">
                            <td class="sn">{{ index + 1 }}</td>
                            <td>{{ result.title }}</td>
                            <td>{{ result.createdAt }}</td>
                            <td>{{ result.status }}</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>

        <teleport to="modal">
            <div v-if="modalOpen" class="modal">
                <div class="new-suggestion">
                    <p>Create new suggestion</p>
                    <div class="mb-3 input">
                        <input v-model="title" type="text" class="form-control" autocomplete="off" id="title" placeholder="Title">
                    </div>
                    <div class="mb-3 input">
                        <textarea v-model="body" class="form-control" placeholder="Suggestion body" id="exampleFormControlTextarea1" rows="3"></textarea>
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
    name: "SuggestionsDean",
    data(){
        return{
            title:"",
            body:"",
            error:"",
            message:"",
            loading:false,
            results:[],
            modalOpen: false
        }
    },
    methods:{
        submit(){
            this.loading = true;
            if (this.title !== "" && this.body !== ""){
                axios.post("http://localhost:8085/api/welfare/suggestions/create",{
                    title:this.title,
                    message:this.body
                }).then(response => {
                    this.loading = false;
                    this.error = "";
                    this.getSuggestions()
                    this.message = "Suggestion created successfully";
                    console.log(response.data)
                }).catch(errorMessage => {
                    this.loading = false;
                    this.message = "";
                    this.error = "Couldn't create suggestion!";
                    console.log(errorMessage);
                })
            }else {
                this.loading = false;
                this.error = "Please fill the form!";
            }
        },
        getSuggestions(){
            axios.get("http://localhost:8085/api/welfare/suggestions/student/all")
                .then(response => {
                    this.results = []
                    response.data.suggestionsResponses.forEach(item =>{
                        this.results.push(item);
                    })
                }).catch(errorMessage => {
                console.log(errorMessage)
            });
        },
        deleteSuggestion(id){
            axios.delete(`http://localhost:8085/api/welfare/suggestions/${id}/delete`)
                .then(() => {
                    this.getSuggestions();
                })
                .catch(errorMessage => {
                    console.log(errorMessage)
                });
        }
    },

    created() {
        this.getSuggestions()
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