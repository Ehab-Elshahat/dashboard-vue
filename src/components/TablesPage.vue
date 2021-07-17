<template>
  <div class="tables-page">
    <div class="container-fluid">
      <div class="light-table bg-white">
        <nav class="p-3">
          <h3 class="h6">light table</h3>
        </nav>
        <table class="table border">
          <thead>
            <tr class="bg-light text-secondary">
              <th scope="col">PROJECT</th>
              <th scope="col">BUDJET</th>
              <th scope="col">STATUS</th>
              <th scope="col">USERS</th>
              <th scope="col">COMPLETION</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="user in api" :key="user.id">
              <td>{{ user.Project }}</td>
              <td>{{ "$ " + user.Budget + " USD" }}</td>
              <td v-if="user.Status" v-bind:class="{ red: user.Status }">
                completed
              </td>
              <td v-else v-bind:class="{ green: !user.Status }">pending</td>
              <td><div class="text-primary"> <i class="far fa-user fa-lg"></i> </div> </td>
              <td class="d-flex align-items-center">
                <span class="d-inline-block mr-1 h6">{{ user.Progress_value + " %" }}</span>
                <div class="pro"> 
                  <div class="child bg-success h-100" :style="{width: user.Progress_value + '%' }"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="buletts bg-transparent text-right p-4">
          <span> <i class="fas fa-chevron-left"></i> </span>
          <span v-for="num in 5" :key="num">{{num}}</span>
          <span> <i class="fas fa-chevron-right"></i> </span>
        </div>
      </div>

      <div class=" container-dark table-dark mb-5">
        <nav class="p-3">
          <h3 class="h5">Dark table</h3>
        </nav>
        <table class="table table-dark  border">
          <thead>
            <tr>
              <th scope="col">PROJECT</th>
              <th scope="col">BUDJET</th>
              <th scope="col">STATUS</th>
              <th scope="col">USERS</th>
              <th scope="col">COMPLETION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in api" :key="user.id">
              <td>{{ user.Project }}</td>
              <td>{{ "$ " + user.Budget + " USD" }}</td>
              <td v-if="user.Status" v-bind:class="{ red: user.Status }">
                completed
              </td>
              <td v-else v-bind:class="{ green: !user.Status }">pending</td>
              <td><div class="text-primary"> <i class="far fa-user fa-lg"></i> </div></td>
              <td class="d-flex align-items-center">
                <span class="d-inline-block mr-1 h6">{{ user.Progress_value + " %" }}</span>
                <div class="pro"> 
                  <div class="child bg-success h-100" :style="{width: user.Progress_value + '%' }"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TableApi from "../api/TablesPage.json";

export default {
  data() {
    return {
      api: TableApi
    };
  },
};
</script>

<style lang="scss" scoped>
.tables-page {
  width: calc(100% - 250px);
  margin-left: auto;

  @media(max-width: 991px) {
    width: 100%;
  }
}
.red {
  color: #e65a50;
}
.green {
  color: #3fc3d4;
}
.light-table {
  margin-top: -100px;
  border-radius: 10px;
}
.light-table tbody tr,
.table-dark tbody tr{
  transition: all .3s ease-in-out;
}
.table tr th {
  font-size: 12px;
  font-weight: 500;
}
.light-table tbody tr:hover {
  background-color: #E0E0E0;
}
.table-dark thead tr th {
  color: #42A5F5
}
.table-dark tbody tr:hover {
  background-color: #fff;
  color: #333;
}
.table-dark nav {
  border-bottom: 1px solid gray;
}
.pro{
  width: 70%;
  height: 3px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #80808063;
}
.buletts {
  span {
    display: inline-block;
    padding: 10px 17px;
    margin-left: 8px;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:nth-child(2){
      background-color: #5e72e3;
      color: #fff;
      box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    }
    &:hover {
      background-color: #EEE;
    }
  }
}
.table-dark {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
}
.container-dark {
  margin-top: 50px;
}
</style>
