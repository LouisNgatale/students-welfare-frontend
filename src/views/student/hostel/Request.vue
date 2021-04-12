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
                                <select name="" id="hostel">
                                    <option value="" selected>SELECT HOSTEL</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div class="col ">
                                <select name="" id="wing">
                                    <option value="" selected>SELECT WING</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div class="col ">
                                <select name="" id="floor">
                                    <option value="" selected>SELECT FLOOR</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div class="col ">
                                <select name="" id="room">
                                    <option value="" selected>SELECT ROOM</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="row  justify-content-end">
                            <div class="col mb-4 mx-5">
                                <button class="btn btn-primary ">Search</button>
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

    <div class="container-fluid">
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

                    <tr class="td">
                        <td class="sn">1</td>
                        <td>BLOCK 5</td>
                        <td>A</td>
                        <td>3</td>
                        <td>209</td>
                        <td>AVAILABLE</td>
                        <td>GOOD</td>
                        <td>
                        <span class="request-room">
                            <img class="" src="../../../assets/icons/request_room.svg" alt="">
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
export default {
name: "Request"
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
</style>