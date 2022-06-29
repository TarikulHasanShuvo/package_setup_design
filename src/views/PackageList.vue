<template>
  <div id="package-list" class="container">
    <div class="card border-0 shadow rounded">
      <div class="card-body p-5">
        <h4>Select One of the Following Packages</h4>
        <div class="container mt-5">
          <div class="row pb-5">
            <div class="col-md-4">
              <div class="package-card card">
                <div class="card-body">
                  <div class="d-flex justify-content-center my-3">
                    <h2 class="package-number text-primary">3</h2>
                  </div>
                  <h5>Schools Package</h5>
                  <hr>
                  <ul class="school-list">
                    <li><img class="mr-2" src="../assets/school.svg" alt="">Colorado Mesa University</li>
                    <li><img class="mr-2" src="../assets/school.svg" alt="">University of Potomac</li>
                    <li><img class="mr-2" src="../assets/school.svg" alt="">Morehead State University</li>
                  </ul>
                  <a href="#" class="book-now-btn btn btn-primary rounded-pill px-4">Book Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="package-card card">
                <div class="card-body">
                  <div class="d-flex justify-content-center my-3">
                    <h2 class="package-number text-primary">6</h2>
                  </div>
                  <h5>Schools Package</h5>
                  <hr>
                  <ul class="school-list">
                    <li><img class="mr-2" src="../assets/school.svg" alt="">Colorado Mesa University</li>
                    <li><img class="mr-2" src="../assets/school.svg" alt="">University of Potomac</li>
                    <li><img class="mr-2" src="../assets/school.svg" alt="">Morehead State University</li>
                    <li><img class="mr-2" src="../assets/school.svg" alt="">Colorado Mesa University</li>
                    <li><img class="mr-2" src="../assets/school.svg" alt="">University of Potomac</li>
                    <li><img class="mr-2" src="../assets/school.svg" alt="">Morehead State University</li>
                  </ul>
                  <a href="#" class="book-now-btn btn btn-primary rounded-pill px-4">Book Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="package-card card py-md-5">
                <div class="card-body">
                  <div class="d-flex justify-content-center my-3">
                    <h2 class="package-number image"><img src="../assets/school.svg" alt=""></h2>
                  </div>
                  <h5>Customize Package <br> With Your Own Choice</h5>
                  <hr class="my-4">
                  <a href="#" class="btn btn-primary rounded-pill px-4">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 card bottom-package">
              <div class="card-body d-flex justify-content-between">
                <h6 class="my-auto">Package for UK, Canada,Australia, Turkey, Malasia and other European schools</h6>
                <a href="#" class="book-now-btn btn btn-primary rounded-pill px-4">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageList"
}
</script>

<style scoped>

</style>