<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/package-list">PackageList</router-link>
    </nav>
    <router-view/>
  </div>
</template>

