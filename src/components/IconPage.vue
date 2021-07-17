<template>
  <div class="container-fluid">
    <div class="icons">
      <div class="icon-container">
        <div class="icon-title"><h3 class="h5 text-secondary">icons</h3></div>
        <div class="icons-body d-flex justify-content-between flex-wrap">
          <div
            class="icon-box d-flex align-items-center"
            v-for="box in iconBox"
            :key="box.icon_src"
          >
            <div class="img mr-4 text-primary "> {{ box.icon_src }} - <i class="fas fa-atom fa-lg"></i></div>
            <h6 class="title text-secondary">{{ box.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api/iconPge.json";
export default {
  data() {
    return {
      iconBox: Api,
    };
  },
};
</script>

<style lang="scss" scoped>
.icons {
  background-color: #fff;
  margin-top: -100px;
  border-radius: 5px;
  width: calc(100% - 250px);
  margin-left: auto;

  @media(max-width: 991px) {
    width: 100%
  }  

  .icon-title {
    border-bottom: 1px solid rgb(238, 236, 236);
    padding: 15px;
    margin-bottom: 15px;
  }

  .icons-body {
    padding: 20px;
  }

  .icon-box {
    width: 23%;
    background-color: #f5f9fc;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 15px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover {
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    h6{
      margin-bottom: 0;
    }

    @media (max-width: 1199px) {
      width: 30%;
    }
    @media (max-width: 991px) {
      width: 48%;
    }
    @media (max-width: 767px){
      width: 100%;
    }
  }
}
</style>
