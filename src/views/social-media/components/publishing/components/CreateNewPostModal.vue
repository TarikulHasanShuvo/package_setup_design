<template>
  <!-- Modal -->
  <div class="modal fade" id="create-new-post-modal" tabindex="-1" role="dialog"
       aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title" id="exampleModalLongTitle">Create new post</h6>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
          <!--          <div class="form-group">-->
          <!--            <textarea class="form-control border-0" id="post-text" rows="1" placeholder="Write Something..."></textarea>-->
          <!--          </div>-->
          <!--         <div class="w-100">-->
          <!--           <img src="../../../../../../src/assets/social-media/post-img.png" width="100%" alt="">-->
          <!--         </div>-->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm text-primary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-sm btn-outline-primary">Post As Draft</button>
          <button type="button" class="btn btn-sm btn-primary">Post Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {VueEditor} from "vue2-editor";

export default {
  name: "CreateNewPostModal",
  components: {
    VueEditor
  },
  data() {
    return {
      content: "<p>Write Something...</p>",
      customToolbar: [
        ["bold", "italic", "underline"],
        ["image"]
      ]
    };
  }
}
</script>

<style scoped>
.ql-snow {
  border: 0!important;
}
</style>