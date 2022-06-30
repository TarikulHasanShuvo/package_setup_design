<template>
  <div class="">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <img class="mr-2" src="../../assets/school.svg" alt="" width="24px">
            <h6 class="my-auto">3 Schools Package</h6>
          </div>
          <div class="d-flex">
            <img class="mr-2" src="../../assets/edit.svg" alt="" width="15px">
            <a href="#" class="my-auto">Change</a>
          </div>
        </div>
        <div class="row mt-4 px-2">
          <span class="mr-2 mb-3 border px-2 py-1 rounded" v-for="school in schools">{{ school }}</span>
        </div>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-body">
        <div class="admission-requirements pb-3">
          <h6>Admission Requirements</h6>
          <ul class="pl-3">
            <li class="mb-1" v-for="admissionRequirement in admissionRequirements">{{
                admissionRequirement
              }}
            </li>
          </ul>
        </div>
        <div class="required-documents pb-3">
          <h6>Required Documents</h6>
          <ul class="row">
            <li class="mr-4 mb-2" v-for="requiredDocument in requiredDocuments">{{ requiredDocument }}</li>
          </ul>
        </div>
        <div class="required-documents pb-3">
          <h6>Programs Offered</h6>
          <ul class="row">
            <li class="mr-4 mb-2" v-for="programOffered in programsOffered">{{ programOffered }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageDetails",
  data() {
    return {
      schools: [
        "Colorado Mesa University",
        "University of Potomac",
        "Morehead State University",
      ],
      admissionRequirements: [
        "Admission Requirements 1",
        "Admission Requirements 2",
        "Admission Requirements 3",
      ],
      requiredDocuments: [
        "Required Documents 1",
        "Required Documents 2",
      ],
      programsOffered : [
        "Programs Offered 1",
        "Programs Offered 2",
        "Programs Offered 3",
      ]
    }
  },
}
</script>

<style scoped>

</style>