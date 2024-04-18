<template>
  <inbox-page></inbox-page>
</template>

<script>
import uList from "../users.json";

export default {
  data() {
    return {
      usersListJSON: uList,
    };
  },
  provide() {
    return {
      providedUsersList: this.usersListJSON,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
</style>
