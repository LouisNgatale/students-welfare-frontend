<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <span class="path">ACADEMICS > </span>
            <span class="sub-path">Appeal</span>
        </div>
    </div>

    <div class="row ">
        <div class="col ">
            <div class="top-header my-2">
                <span>Appeals</span>
                <button class="add_appeal">
                    <img src="../../../assets/icons/plus.svg" alt="">
                </button>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <table class="table">

                <tr class="table-heading">
                    <th>S/N</th>
                    <th>Subject</th>
                    <th>Appealed on</th>
                    <th>Updated on</th>
                    <th>Status</th>
                    <th>Progress</th>
                </tr>

                <tr class="td">
                    <td class="sn">1</td>
                    <td>Kiswahili</td>
                    <td>01/12/2020</td>
                    <td>01/12/2020</td>
                    <td>
                        Approved
                        <span>
                            <img src="../../../assets/icons/Done.svg" alt="">
                        </span>
                    </td>
                    <td>
                        <div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr class="td">
                    <td class="sn">2</td>
                    <td>Civics</td>
                    <td>01/12/2020</td>
                    <td>Pending</td>
                    <td class="">
                        <span>
                            Pending
                        </span>
                        <span>
                            <img src="../../../assets/icons/Pending.svg" alt="">
                        </span>
                    </td>
                    <td>
                        <div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr class="td">
                    <td class="sn">2</td>
                    <td>Biology</td>
                    <td>01/12/2020</td>
                    <td>01/12/2020</td>
                    <td class="">
                        <span>
                            Declined
                        </span>
                        <span>
                            <img src="../../../assets/icons/Cross.svg" alt="">
                        </span>
                    </td>
                    <td>
                        <div>
                            <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>

</div>
</template>

<script>
export default {
name: "Appeal"
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
        box-shadow: 0px 3px 6px rgba(0,0,0,.2);
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
        padding: 5px 5px;
        font-weight: normal;
    }
    .sn{
        text-align: center;
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