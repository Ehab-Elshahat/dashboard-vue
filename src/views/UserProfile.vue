<template>
  <div class="user">
    <links />
    <userProfilePage />
  </div>
</template>

<script>
import links from "../components/Global/Links";
import userProfilePage from "../components/UserProfilePage";
export default {
  name: "UserProfile",
  components: {
    links,
    userProfilePage,
  },
};
</script>
