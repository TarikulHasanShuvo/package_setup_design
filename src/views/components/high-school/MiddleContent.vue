<template>
  <div>
    <div class="">
      <img src="../../../assets/high-school/main.png" width="100%" alt="">
    </div>
    <div class="card border-0 mt-4">
      <div class="card-header border-0 bg-white">
        <h6>Recent Activity</h6>
      </div>
      <div class="card-body border rounded p-2">
        <div class="">
          <h6 class="pb-2">You Posted an Article</h6>
          <div class="d-flex">
            <div class="mr-2">
              <img class="rounded-circle"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
                   height="40" alt="">
            </div>
            <div class="mt-1 ml-2">
              <h6>John Doe</h6>
              <span>5 Best colleges to get the support on migration facilities... </span><br>
              <small class="text-muted">1 minute ago</small>
            </div>
          </div>
          <hr>
        </div>
        <div class="d-flex">
          <div class="mr-2">
            <img class="rounded-circle"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
                 height="40" alt="">
          </div>
          <div class="mt-1 ml-2">
            <h6>John Doe</h6>
            <span>5 Best colleges to get the support on migration facilities... </span><br>
            <small class="text-muted">1 minute ago</small>
          </div>
        </div>
        <hr>
        <div class="">
          <h6 class="pb-2">You Posted an Article</h6>
          <div class="d-flex">
            <div class="mr-2">
              <img class="rounded-circle"
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU"
                   height="40" alt="">
            </div>
            <div class="mt-1 ml-2">
              <h6>John Doe</h6>
              <span>5 Best colleges to get the support on migration facilities... </span><br>
              <small class="text-muted">1 minute ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-4 border-0">
      <div class="card-header d-flex justify-content-between bg-white border-0">
        <h5 class="w-100">Media Library</h5>
        <input type="text" class="form-control w-50" placeholder="Search..">
      </div>
      <div class="card-body">
        <div
            v-for="mediaLibrary in showAll ? mediaLibraries : mediaLibraries.slice(0,Math.ceil(mediaLibraries.length / 2))"
            class="d-flex mb-3">
          <div class="mr-2">
            <img src="../../../assets/high-school/camera.svg" alt="">
          </div>
          <div class="ml-2">
            <h6>{{ mediaLibrary.name }}</h6>
            <small class="text-muted">{{ mediaLibrary.time }}</small>
          </div>
        </div>
        <div class="text-center">
          <img  v-if="showAll" style="transform: rotate(-180deg);" role="button" src="../../../assets/high-school/down-arrow.svg" alt="" @click="showAll = !showAll"><br>
          <span class="text-primary font-weight-bold">{{showAll ? 'Show Less' : 'Show More' }}</span><br>
          <img v-if="!showAll" role="button" src="../../../assets/high-school/down-arrow.svg" alt="" @click="showAll = !showAll">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiddleContent",
  data() {
    return {
      showAll: false,
      mediaLibraries: [
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
        {
          name: "Data Science Course Video",
          time: "1 minute ago",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
