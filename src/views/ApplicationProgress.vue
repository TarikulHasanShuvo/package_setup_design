<template>
  <div id="application-progress">
    <div class="row">
      <div class="col-6 card">
        <div class="card-body text-muted">
          <h4 class="pb-3 text-dark">Application Status</h4>
          <div class="d-flex justify-content-between py-md-2">
            <p>Status</p>
            <span class="badge badge-warning my-auto px-3 py-2">In Progress</span>
          </div>
          <div class="d-flex justify-content-between">
            <p>Required Documents</p>
            <div class="">
              <ul>
                <li>Document Name Here 1</li>
                <li>Document Name Here 1</li>
                <li>Document Name Here 1</li>
              </ul>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <p>Application Fee</p>
            <h6 class="text-primary">$4500.00</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicationProgress",
}
</script>

<style scoped>

</style>