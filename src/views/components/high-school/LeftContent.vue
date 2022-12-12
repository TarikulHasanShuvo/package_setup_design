<template>
<div class="">
  <div class="card info-card">
    <div class="card-body">
      <div class="d-flex">
        <img class="rounded-circle"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
             height="40" alt="">
        <div class="ml-3">
          <h6 class="text-white">Kathryn Murphy</h6>
          <span class="text-white">Search</span>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-6 border-right">
          <h6 class="text-white"><img src="../../../assets/high-school/upload.svg" width="13" alt=""> 250</h6>
          <span class="text-white">Uploads</span>
        </div>
        <div class="col-6">
          <h6 class="text-white"><img src="../../../assets/high-school/white-users.svg" width="20" alt=""> 1,234</h6>
          <span class="text-white">Connections</span>
        </div>
      </div>
    </div>
    <ul class="list-group mt-4 border-0">
      <router-link to="">
        <li class="list-group-item">
          <img src="../../../assets/high-school/multi-users.svg" alt="">
          Auto School
        </li>
      </router-link>
      <router-link to="">
        <li class="list-group-item">
          <img src="../../../assets/high-school/mic.svg" alt="">
          Marketing Campaign
        </li>
      </router-link>
      <router-link to="">
        <li class="list-group-item">
          <img src="../../../assets/high-school/book.svg" alt="">
          Courses Offered
        </li>
      </router-link>
      <router-link to="">
        <li class="list-group-item">
          <img src="../../../assets/high-school/user-plus.svg" alt="">
          Account Requests
        </li>
      </router-link>
      <router-link to="">
        <li class="list-group-item mb-4">
          <img src="../../../assets/high-school/white-star.svg" alt="">
          Education Programs
        </li>
      </router-link>
    </ul>
  </div>
  <div class="card mt-4">
    <div class="card-header bg-white border-0 pb-0"><h6>News</h6></div>
    <div class="card-body">
    <div class="">
      <span >5 Best colleges to get the support on migration facilities... </span><br>
      <small>1 minute ago</small>
      <hr>
    </div>
    <div class="">
      <span >5 Best colleges to get the support on migration facilities... </span><br>
      <small>1 minute ago</small>
      <hr>
    </div>
      <div class="">
      <span >5 Best colleges to get the support on migration facilities... </span><br>
      <small>1 minute ago</small>
      <hr>
    </div>
    <div class="">
      <span >5 Best colleges to get the support on migration facilities... </span><br>
      <small>1 minute ago</small>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "LeftContent"
}
</script>

<style lang="scss" scoped>
.info-card{
  background:#007ae1;
  .list-group-item {
    border: none;
    background: #007ae1;
    color: #fff;

    img {
      margin-right: 8px;
    }

    &:hover {
      background: #0069d9;
    }
  }
  a{
    &:hover{
      text-decoration: none;
    }
  }
}

</style>
