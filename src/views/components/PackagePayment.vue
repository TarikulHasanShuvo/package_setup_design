<template>
  <div class="card">
    <div class="card-body">
      <div class="payment-info">
        <div class="d-flex justify-content-between mb-2">
          <span class="">Registration Fee</span>
          <h6>{{ fee.registration > 0 ? '$' + fee.registration.toFixed(2) : '-' }}</h6>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <span class="">Application Fee</span>
          <h6>{{ fee.application > 0 ? '$' + fee.application.toFixed(2) : '-' }}</h6>
        </div>
        <div class="d-flex justify-content-between mb-2">
          <span class="">Scholarship</span>
          <h6>{{ fee.scholarship > 0 ? '$' + fee.scholarship.toFixed(2) : '-' }}</h6>
        </div>
        <hr>
        <div class="d-flex justify-content-between mb-2">
          <h6 class="">Total</h6>
          <h6>${{ total }}</h6>
        </div>
      </div>
      <div class="card-info mt-5">
        <div class="d-flex justify-content-between mb-2">
          <h6 class="">Debit/Credit Cards</h6>
          <img src="../../assets/payment-card-icon.svg" alt="">
        </div>
        <form>
          <div class="form-group">
            <label for="card-number">Card Number</label>
            <input type="text" class="form-control" id="card-number" placeholder="1234 - 5678 - 9101 - 1213">
          </div>
          <div class="form-group">
            <label for="name-of-card">Name of Card</label>
            <input type="text" class="form-control" id="name-of-card" placeholder="Ehsaan">
          </div>
          <div class="d-flex justify-content-between">
            <div class="form-group">
              <label for="expiry-date">Expiry</label>
              <input type="text" class="form-control" id="expiry-date" placeholder="MM/YY">
            </div>
            <div class="form-group">
              <label for="cvv">CVV Code</label>
              <input type="text" class="form-control" id="cvv" placeholder="123">
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <div class="form-group form-check my-auto">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Save Card For Future Transactions</label>
              </div>
            </div>
            <div class="col-6 text-right">
              <button type="submit" class="btn btn-sm btn-primary rounded-pill px-4">Book Now ${{ total }}</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "PackagePayment",
  data() {
    return {
      fee: {
        registration: 250,
        application: 14000,
        scholarship: 0,
      }
    }
  },
  computed: {
    total() {
      return (this.fee.registration + this.fee.application + this.fee.scholarship).toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>