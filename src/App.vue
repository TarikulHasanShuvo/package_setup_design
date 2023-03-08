<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="pt-5" style="background-color: #f6f8ff">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/layout/NavBar";

export default {
  components: {NavBar}
}
</script>
