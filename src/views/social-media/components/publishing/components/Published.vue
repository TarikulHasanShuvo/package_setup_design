<template>
  <div class="card">
    <div class="card-header">
      <span class="card-title">Post</span>
    </div>
    <div class="card-body d-flex justify-content-center">
      <div class="my-5 text-center post-content">
        <h6>It’s time to get started</h6>
        <p>Publish your first post and connect with world</p>
        <button class="btn btn-primary px-4" data-toggle="modal" data-target="#create-new-post-modal">
          <img class="mr-2" src="../../../../../../src/assets/social-media/plus.svg" width="16" alt="">
          Create Social Post
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Published"
}
</script>

<style scoped>
.post-content {
  background-color: #F2F8FD;
  padding: 20px 25px;
  border-radius: 5px;
}
</style>