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
                    <button class="add_appeal">
                        <img src="../../../assets/icons/plus.svg" alt="">
                    </button>
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
                        <th>Actions</th>
                    </tr>

                    <tr class="td">
                        <td class="sn">1</td>
                        <td>SUGGESTION TITLE</td>
                        <td>01/12/2020</td>
                        <td>Not reviewed</td>
                        <td class="d-flex justify-content-center">
                            <span>
                                <img class="delete" src="../../../assets/icons/Delete.svg" alt="">
                            </span>
                        </td>
                    </tr>

                    <tr class="td">
                        <td class="sn">2</td>
                        <td>SUGGESTION TITLE</td>
                        <td>01/12/2020</td>
                        <td>Reviewed</td>
                        <td class="d-flex justify-content-center">
                            <span>
                                <img class="delete" src="../../../assets/icons/Delete.svg" alt="">
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
  name: "Suggestions"
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
</style>