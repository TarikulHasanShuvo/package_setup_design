<template>
  <div class="container">
    <div class="card border-0 border-15">
      <div class="card-header d-flex justify-content-between bg-white border-0 border-15">
        <h5 class="card-title">Social</h5>
        <button class="btn btn-primary my-auto px-4" data-toggle="modal" data-target="#create-new-post-modal">
          <img class="mr-2" src="../../../src/assets/social-media/plus.svg" width="16" alt="">
          Create Social Post
        </button>
      </div>
      <div class="card-body">
        <ul class="nav nav-pills mb-3 px-2" id="pills-tab" role="tablist">
          <li @click="activeTab = 'publishing'" class="nav-item px-2">
            <a class="nav-link active d-flex" id="publishing-tab" data-toggle="pill" href="#publishing" role="tab"
               aria-controls="publishing" aria-selected="true">
              <img v-if="activeTab=== 'publishing'" src="../../../src/assets/social-media/file-plus-blue.svg" alt="">
              <img v-else src="../../../src/assets/social-media/file-plus.svg" alt="">
              <span class="ml-2"> Publishing</span></a>
          </li>
          <li class="nav-item px-2" @click="activeTab = 'monitoring'">
            <a class="nav-link d-flex" id="monitoring-tab" data-toggle="pill" href="#monitoring" role="tab"
               aria-controls="monitoring" aria-selected="false">
              <img v-if="activeTab=== 'monitoring'" src="../../../src/assets/social-media/eye-blue.svg" alt="">
              <img v-else src="../../../src/assets/social-media/eye.svg" alt="">
              <span  class="ml-2"> Monitoring</span></a>
          </li>
          <li class="nav-item px-2" @click="activeTab = 'reporting'">
            <a class="nav-link d-flex" id="reporting-tab" data-toggle="pill" href="#reporting" role="tab"
               aria-controls="reporting" aria-selected="false">
              <img v-if="activeTab=== 'reporting'" src="../../../src/assets/social-media/report-blue.svg" alt="">
              <img v-else src="../../../src/assets/social-media/report.svg" alt="">
              <span class="ml-2"> Reporting</span></a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="publishing" role="tabpanel" aria-labelledby="publishing-tab">
           <Publishing/>
          </div>
          <div class="tab-pane fade" id="monitoring" role="tabpanel" aria-labelledby="monitoring-tab">
            <Monitoring/>
          </div>
          <div class="tab-pane fade" id="reporting" role="tabpanel" aria-labelledby="reporting-tab">
            <Reporting/>
          </div>
        </div>
      </div>
    </div>
    <CreateNewPost/>
  </div>
</template>

<script>
import Publishing from "@/views/social-media/components/publishing/Publishing";
import Monitoring from "@/views/social-media/components/Monitoring";
import Reporting from "@/views/social-media/components/Reporting";
import CreateNewPost from "@/views/social-media/components/publishing/components/CreateNewPostModal";
export default {
  name: "SocialMedia",
  components: {CreateNewPost, Publishing,Monitoring,Reporting},
  data() {
    return {
      activeTab: "publishing"
    }
  }
}
</script>

<style scoped>
.border-15 {
  border-radius: 15px;
}

.nav-pills {
  border-radius: 12px;
  background-color: #F5F5F9;
}

.nav-link {
  color: #4F4F55;
  padding-top: 12px;
  padding-bottom: 15px;
  background-color: #F5F5F9;
  border-radius: 15px;
}

.nav-link.active {
  background-color: #F5F5F9;
  color: #007AE1;
  border-bottom: 3px solid #007AE1;
  border-radius: 0;
  font-weight: bold;
}

</style>