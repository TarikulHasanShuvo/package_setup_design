<template>
  <div id="package-checkout" class="container">
    <div class="card border-0 shadow rounded">
      <div class="card-body py-4 px-5">
        <h4>Checkout</h4>
        <div class="container mt-4">
          <div class="row pb-5">
            <div class="col-md-6 mb-3">
             <PackageDetails/>
            </div>
            <div class="col-md-6">
              <PackagePayment/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PackageDetails from "@/views/components/PackageDetails";
import PackagePayment from "@/views/components/PackagePayment";
export default {
  name: "PackageCheckout",
  components: {PackageDetails,PackagePayment},

}
</script>

<style scoped>

</style>