<template>
  <div v-on:click="clickEveryWher" class="global-header">
    <i class="ni ni-air-baloon"></i>
    <header>
      <div class="container-fluid">
        <div class="nav">
          <h3 class="page-name">{{ title }}</h3>
          <div class="search position-relative">
            <input
              class="form-control rounded-pill "
              type="search"
              name="search"
              id="search"
            />
            <span class="position-absolute"><i class="fas fa-search"></i></span>
          </div>
          <div @click.stop="toggleSubMenu" class="user position-relative">
            <img src="../../assets/profile.png" alt="profile" />
            <h4 class="user-title text-capitalize">ehab elshaht</h4>
            <transition name="fade">
              <div v-if="showSubMenu" class="user-submenu position-absolute">
                <h4>wellcom</h4>
                <ul>
                  <li>
                    <span><i class="fas fa-user"></i></span>My Profiel
                  </li>
                  <li>
                    <span><i class="fas fa-cog"></i></span>settinges
                  </li>
                  <li>
                    <span><i class="far fa-calendar-alt"></i></span>Activity
                  </li>
                  <li>
                    <span><i class="far fa-question-circle"></i></span>Support
                  </li>
                  <li>
                    <span><i class="fas fa-running"></i></span>Logout
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>

        <div class="category-boxs">
          <div class="row">
            <div class="col-xs-12 col-md-4 col-lg-3">
              <div class="box">
                <div class="box-left">
                  <h3>Total traffic</h3>
                  <p class="number">350,879</p>
                  <p class="prcint">
                    <span class=" text-success">3.48%</span>since last month
                  </p>
                </div>
                <div class="box-right">
                  <img src="../../assets/DashPage/icon-1.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4 col-lg-3">
              <div class="box">
                <div class="box-left">
                  <h3>Total traffic</h3>
                  <p class="number">350,879</p>
                  <p class="prcint">
                    <span class=" text-primary">3.48%</span>since last month
                  </p>
                </div>
                <div class="box-right">
                  <img src="../../assets/DashPage/icon-2.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4 col-lg-3">
              <div class="box">
                <div class="box-left">
                  <h3>SALES</h3>
                  <p class="number">350,879</p>
                  <p class="prcint">
                    <span class=" text-danger">3.48%</span>since last month
                  </p>
                </div>
                <div class="box-right">
                  <img src="../../assets/DashPage/icon-3.png" alt="" />
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4 col-lg-3">
              <div class="box">
                <div class="box-left">
                  <h3>PERFORMANCE</h3>
                  <p class="number">350,879</p>
                  <p class="prcint">
                    <span class=" text-success">3.48%</span>since last month
                  </p>
                </div>
                <div class="box-right">
                  <img src="../../assets/DashPage/icon-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderPages",
  data: function() {
    return {
      showSubMenu: false,
    };
  },
  props: {
    title: String,
  },
  methods: {
    toggleSubMenu: function() {
      this.showSubMenu = !this.showSubMenu;
    },
    clickEveryWher: function(e) {
      if (!e.target.classList.contains("user-title")) {
        this.showSubMenu = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.global-header {
  width: calc(100% - 250px);
  margin-left: auto;
  
  @media(max-width: 991px){
    width: 100%;
  }
}
header {
  padding-bottom: 150px;
  background: linear-gradient(87deg, #2dce89, #2dcecc) !important;

  .nav {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    color: #fff;
    .page-name {
      font-size: 18px;
    }
    .search {
      margin-left: auto;
      margin-right: 30px;
      width: 250px;
      input {
        font-size: 16px;
        padding: 20px 10px;
        background-color: transparent;
        border: 2px solid #fff;
        &:focus {
          box-shadow: none;
        }
      }
      span {
        top: 10px;
        right: 15px;
        color: #fff;
        cursor: pointer;
        z-index: 2;
      }
    }
    .user {
      margin-right: 50px;
      display: flex;
      align-items: center;
      cursor: pointer;

      position: relative;

      &:hover .user-title {
        color: rgba($color: #ffff, $alpha: 0.7);
      }

      img {
        width: 50px;
        margin-right: 10px;
      }
      .user-title {
        font-size: 16px;
        font-weight: bold;
      }
      .user-submenu {
        color: #333;
        background-color: #fff;
        width: 200px;
        top: 60px;
        left: 0;
        border-radius: 5px;
        z-index: 1000;

        h4 {
          padding: 10px;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: bold;
        }
        ul li {
          padding: 5px 10px;

          span {
            margin-right: 15px;
          }
          &:hover {
            background-color: rgba($color: #000000, $alpha: 0.1);
          }
          &:last-child {
            margin: 10px 0;
            border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
          }
        }
      }
    }
    @media (max-width: 991px) {
      .search {
        display: none;
      }
    }
  }
  .category-boxs {
    margin-top: 50px;
    .box {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      margin: 20px 0;
      border-radius: 10px;
      background-color: #fff;

      .box-left {
        h3 {
          color: rgba($color: #000000, $alpha: 0.5);
          font-size: 15px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .number {
          font-weight: bold;
          margin-bottom: 15px;
        }
        .prcint {
          font-weight: light;
          color: rgba($color: #000000, $alpha: 0.8);
          margin-bottom: 0;
          span {
            display: inline-block;
            margin-right: 8px;
          }
        }
      }
      .box-right {
        width: 25%;
        @media (max-width: 767px) {
          width: auto;
        }
        img {
          width: 100%;
          @media (max-width: 991px) {
            display: none;
          }
          @media (max-width: 767px) {
            display: block;
            width: 80px;
          }
        }
      }
    }
  }
}
</style>
