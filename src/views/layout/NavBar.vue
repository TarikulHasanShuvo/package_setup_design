<template>
<div class="bg-light">
  <nav id="nav-bar" class="container navbar navbar-expand-lg navbar-light  static-top header_area" >
    <router-link class="navbar-brand" to="/">
      <img src="../../assets/high-school/logo.png" height="35" alt="">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link d-flex my-auto" to="/"><img src="../../assets/high-school/home.svg" alt="">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link d-flex my-auto" to="/"><img src="../../assets/high-school/users.svg" alt="">Connections</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link d-flex my-auto" to="/"><img src="../../assets/high-school/message.svg" alt="">Messages</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link d-flex my-auto" to="/"><img src="../../assets/high-school/bell.svg" alt="">Notifications</router-link>
        </li>
        <li class="nav-item dropdown last-item">
          <a class="nav-link dropdown-toggle last-li" href="#" id="navbarDropdown" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://platform.woostudy.in/images/avatar.jpg" class="profile-image" width="30" height="30" alt="">
          </a>
          <div class="dropdown-menu dropdown-menu-right custom-drop-down"
               aria-labelledby="navbarDropdown">
            <div class="profile-title dropdown-item text-center">
              <div class="profile-image-d pb-3">
                <img src="https://platform.woostudy.in/images/avatar.jpg" class="profile-image" width="60" height="60" alt="">
              </div>
              <div class="profile-user">
                <h6>Shuvo</h6>
                <p>shuvo@gmail.com</p>
                <p class="view-profile">
                  <router-link to>View Your Profile</router-link>
                </p>
              </div>
            </div>
            <a href="#" class="dropdown-item">Logout</a>
          </div>
        </li>
      </ul>

    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>
#nav-bar {
.nav-item {
  margin-right: 10px;
img {
  margin-right: 7px;
}
}
}
</style>
