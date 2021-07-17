<template>
  <div>
    <div class="small-nav" v-if="open">
      <div class="logo">
        <h1><i class="fab fa-vuejs"></i> logo</h1>
        <div class="close-nav" @click="smallNav">
          <i class="far fa-times-circle fa-2x"></i>
        </div>
      </div>
      <router-link to="/" @click.native="smallNav">
        <span class="icon-dash"><i class="fas fa-desktop"></i></span>
        Dashboard</router-link
      >
      <router-link to="/Icons" @click.native="smallNav">
        <span class="icon-icon"><i class="fas fa-atom"></i></span>
        Icons</router-link
      >
      <router-link to="/UserProfile" @click.native="smallNav">
        <span class="icon-user"><i class="fas fa-user"></i></span> User
        Profile</router-link
      >
      <router-link to="/Tables" @click.native="smallNav">
        <span class="icon-tables"><i class="fas fa-list"></i></span>
        Tables</router-link
      >
      <router-link to="/Login" @click.native="smallNav">
        <span class="icon-login"><i class="fab fa-keycdn"></i></span>
        Login</router-link
      >
      <router-link to="/Register" @click.native="smallNav">
        <span class="icon-register"><i class="fas fa-user-circle"></i></span>
        Register</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "linksSmallScreen",
 data() {
    return {
      open : true
    };
  },
  methods:{
    smallNav(){
      this.open = false;
    }
  },
  
};
</script>

<style lang="scss" scoped>
.small-nav {
  position: fixed;
  z-index: 1000;
  border-radius: 0.5rem;
  width: 90%;
  margin: 20px 0;
  height: auto;
  left: 5%;

  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .close-nav {
      cursor: pointer;
      opacity: 0.5;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }

  .logo h1 {
    color: #41b783;
    text-align: left;
  }

  a {
    display: block;
    margin: 15px 0;
    padding: 10px 30px;
    font-size: 20px;
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
}
</style>
