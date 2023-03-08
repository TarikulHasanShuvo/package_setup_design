<template>
  <div class="mt-4">
    <div id="filter" class="row">
      <div class="col-2">
        <div id="menu-container">
          <img @click="activeMenu = 'menu'" role="button" class="pr-2" src="../../../../assets/social-media/menu.svg"
               width="25" alt="">
          <img @click="activeMenu = 'calender'" role="button" class="border-left pl-2"
               src="../../../../assets/social-media/calendar.svg" width="25"
               alt="">
        </div>
      </div>
      <div class="col-sm-2">
        <select class="custom-select custom-select-sm mb-3">
          <option selected>All Networks</option>
          <option value="1">Facebook Accounts</option>
          <option value="2">Instagram Accounts</option>
          <option value="3">Twitter Accounts</option>
          <option value="3">LinkedIn Accounts</option>
        </select>
      </div>
      <div class="col-sm-2">
        <select class="custom-select custom-select-sm mb-3">
          <option v-for="index in 29" value="1">Last {{ index }} Days</option>
          <option selected>Last 30 Days</option>
        </select>
      </div>
      <div class="col-sm-2">
        <select class="custom-select custom-select-sm mb-3">
          <option selected>All Users</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
    <div v-if="activeMenu=== 'menu'" class="row mt-4">
      <div class="col-2">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a class="nav-link active" id="v-pills-published-tab" data-toggle="pill" href="#v-pills-published"
             role="tab"
             aria-controls="v-pills-published" aria-selected="true">Published</a>
          <a class="nav-link" id="v-pills-scheduled-tab" data-toggle="pill" href="#v-pills-scheduled" role="tab"
             aria-controls="v-pills-scheduled" aria-selected="false">Scheduled</a>
          <a class="nav-link" id="v-pills-draft-tab" data-toggle="pill" href="#v-pills-draft" role="tab"
             aria-controls="v-pills-draft" aria-selected="false">Draft</a>
        </div>
      </div>
      <div class="col-10">
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-published" role="tabpanel"
               aria-labelledby="v-pills-published-tab">
            <Published/>
          </div>
          <div class="tab-pane fade" id="v-pills-scheduled" role="tabpanel" aria-labelledby="v-pills-scheduled-tab">
            <Scheduled/>
          </div>
          <div class="tab-pane fade" id="v-pills-draft" role="tabpanel" aria-labelledby="v-pills-draft-tab">
            <Draft/>
          </div>
        </div>
      </div>
    </div>
    <Calender v-else/>
  </div>
</template>

<script>
import Published from "@/views/social-media/components/publishing/components/Published";
import Scheduled from "@/views/social-media/components/publishing/components/Scheduled";
import Draft from "@/views/social-media/components/publishing/components/Draft";
import Calender from "@/views/social-media/components/publishing/Calender";

export default {
  name: "Publishing",
  components: {Calender, Draft, Scheduled, Published},
  data() {
    return {
      activeMenu: 'menu'
    }
  }
}
</script>

<style scoped>
#menu-container {
  width: 55%;
  background-color: #F5F5F9;
  padding: 12px 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.nav-link {
  color: #4F4F55;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
}

.nav-link.active {
  background-color: #fff;
  color: #007AE1;
  border-left: 3px solid #007AE1;
  border-radius: 0;
  font-weight: bold;
}
</style>