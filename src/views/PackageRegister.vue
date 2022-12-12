<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
       <LeftContent/>
      </div>
      <div class="col-md-6">
        <MiddleContent/>
      </div>
      <div class="col-md-3">
        <RightContent/>
      </div>
    </div>

  </div>
</template>

<script>
import LeftContent from "@/views/components/high-school/LeftContent";
import MiddleContent from "@/views/components/high-school/MiddleContent";
import RightContent from "@/views/components/high-school/RightContent";
export default {
  name: 'PackageRegister',
  components: {LeftContent,MiddleContent,RightContent},
}
</script>
