<template>
  <div class="icons-container">
    <header-pages title="ICONS" />
    <links />
    <icon-page />
  </div>
</template>

<script>
import links from "../components/Global/Links";
import headerPages from "../components/Global/HeaderPages";
import iconPage from "../components/IconPage.vue";

export default {
  components: {
    links,
    headerPages,
    iconPage,
  }, 
};
</script>
