<template>
  <div id="app">
    <div class="close-nav" @click="smallNav">
      <i class="fas fa-bars fa-2x"></i>
    </div>
    <linksSmallScreen v-if="isNav"></linksSmallScreen>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import linksSmallScreen from "../src/components/Global/LinksSmallScreen.vue";

export default {
  name: "App",
  components: {
    linksSmallScreen,
  },
  data() {
    return {
      isNav: false
    };
  },
  methods: {
    smallNav() {
      this.isNav = !this.isNav;
    }
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#app {
  font-family: "Open Sans", sans-serif !important;

  .close-nav {
    position: absolute;
    right: 20px;
    top: 10px;
    z-index: 1000;
    cursor: pointer;
    display: none;

    opacity: 0.5;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 991px) {
      display: block;
    }
  }
}
#nav {
  @media (max-width: 991px) {
    display: none;
  }
}
</style>
