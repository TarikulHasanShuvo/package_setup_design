<template>
  <div id="app" class="container">
    <NavBar></NavBar>
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/package-list">Package List</router-link> |-->
<!--      <router-link to="/package-checkout">Package Checkout</router-link>-->
<!--    </nav>-->
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/views/layout/NavBar";
export default {
  components: {NavBar}
}
</script>
