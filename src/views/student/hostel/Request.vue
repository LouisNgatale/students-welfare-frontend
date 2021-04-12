<template>
<div class="container-fluid">
    <div class="row">
        <div class="col">
            <span class="path">HOSTEL > </span>
            <span class="sub-path">Request</span>
        </div>
    </div>

    <div class="row ">
        <div class="col ">
            <div class="top-header my-2">
                <span>Search Hostel</span>
            </div>
        </div>
    </div>

    <div class="row">
          <div class="col">
              <div class="search-card">
                  <div class="row">
                      <div class="col mx-5 my-3">
                          <span>
                            <img src="../../../assets/icons/filter.svg" alt="">
                          </span>
                          <span class="bold ml-2">FILTER</span>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col mx-5 mb-4">
                              <select name="" id="hostel">
                                  <option value="" selected>SELECT HOSTEL</option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                  <option value="">3</option>
                              </select>
                      </div>
                      <div class="col mx-4">
                          <select name="" id="wing">
                              <option value="" selected>SELECT HOSTEL</option>
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                          </select>
                      </div>
                      <div class="col mx-4">
                          <select name="" id="floor">
                              <option value="" selected>SELECT HOSTEL</option>
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                          </select>
                      </div>
                      <div class="col mx-4">
                          <select name="" id="room">
                              <option value="" selected>SELECT HOSTEL</option>
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                          </select>
                      </div>
                  </div>
                  <div class="row  ">
                      <div class="col mb-4 mx-5">
                          <button class="btn btn-primary ">Search</button>
                      </div>
                  </div>
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

.search-card{
    height: auto;
    border-radius: 12px;
    background: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,.2);

}
.btn{
    float: right;
    width: 180px;
    border-radius: 12px;
    height: 36px;
}
</style>