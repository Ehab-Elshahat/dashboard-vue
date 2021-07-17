<template>
  <div class="dashboard">
    <links />
    <pageHeader title="DASHBOARD" />
    <!-- Pages Activity  -->
    <dashboard-Page/>
  </div>
</template>

<script>
import links from "../components/Global/Links"
import pageHeader from "../components/Global/HeaderPages.vue";
import DashboardPage from "../components/DashboardPage"
export default {
  name: "Dashboard",
  components: {
    links,
    pageHeader,
    DashboardPage
  }

};
</script>

