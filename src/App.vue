<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/package-list">Package List</router-link> |
      <router-link to="/package-checkout">Package Checkout</router-link>
    </nav>
    <router-view/>
  </div>
</template>

