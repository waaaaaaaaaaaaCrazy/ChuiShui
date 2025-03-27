<template>
  <div id="app">
    <BasicLayout/>
  </div>
</template>

<script setup>
  import BasicLayout from "./layouts/BasicLayout.vue";
  import {useLoginUserStore} from "./store/useLoginUserStore.js";

  const loginUserStore = useLoginUserStore();
  loginUserStore.fetchLoginUser();
</script>

<style scoped>

</style>
