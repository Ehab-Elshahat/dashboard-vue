<template>
  <div class="tables">
    <Page-Header title="TABLES" />
    <links />
    <TablesPage />
  </div>
</template>

<script>
import links from "../components/Global/Links"
import PageHeader from "../components/Global/HeaderPages";
import TablesPage from "../components/TablesPage";
export default {
  name: "Tables",
  components: {
    links,
    PageHeader,
    TablesPage
  }
}
</script>