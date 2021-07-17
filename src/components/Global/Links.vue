<template>
  <div id="nav">
    <div class="logo text-center my-4">
      <h1><i class="fab fa-vuejs"></i> logo</h1>
    </div>
    <router-link to="/">
      <span class="icon-dash"><i class="fas fa-desktop"></i></span>
      Dashboard</router-link
    >
    <router-link to="/Icons">
      <span class="icon-icon"><i class="fas fa-atom"></i></span>
      Icons</router-link
    >
    <router-link to="/UserProfile">
      <span class="icon-user"><i class="fas fa-user"></i></span> User
      Profile</router-link
    >
    <router-link to="/Tables">
      <span class="icon-tables"><i class="fas fa-list"></i></span>
      Tables</router-link
    >
    <router-link to="/Login">
      <span class="icon-login"><i class="fab fa-keycdn"></i></span>
      Login</router-link
    >
    <router-link to="/Register">
      <span class="icon-register"><i class="fas fa-user-circle"></i></span>
      Register</router-link
    >
  </div>
</template>

<script>
export default {
  name: "links",
};
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  width: 250px;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #fff;

  .logo h1 {
    color: #41b783;
  }

  a {
    display: block;
    margin: 15px 0;
    padding: 10px 30px;
    color: rgba($color: #000000, $alpha: 0.5);
    transition: all 0.3s ease-in-out;

    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 3px;
      height: 100%;
      top: 0;
      left: 0;
      background-color: transparent;
    }

    &:hover {
      color: rgba($color: #000000, $alpha: 1);
    }

    &.router-link-exact-active {
      color: rgba($color: #000000, $alpha: 1);
    }
    &.router-link-exact-active::before {
      background-color: #0d47a1;
    }
    span {
      display: inline-block;
      margin-right: 15px;
      &.icon-dash {
        color: #7b1fa2;
      }
      &.icon-icon {
        color: #1565c0;
      }
      &.icon-user {
        color: #f9a825;
      }
      &.icon-tables {
        color: #d84315;
      }
      &.icon-login {
        color: #00838f;
      }
      &.icon-register {
        color: #ff8f00;
      }
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
}
</style>
