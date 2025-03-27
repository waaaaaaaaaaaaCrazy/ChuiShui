<template>
  <a-layout id="basic-layout">
    <a-layout-header class="header">
      <GlobalHeader/>
    </a-layout-header>
    <a-layout-content class="content">

    </a-layout-content>
    <a-layout-footer class="footer">
      <a href="http://www.baidu.com" target="_blank">
        变成茶蛋
      </a>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import GlobalHeader from "../components/GlobalHeader.vue";
</script>


<style scoped>
#basic-layout .footer {
  background-color: #f5f5f5;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  text-align: center;
  padding-top: 20px;
}

#basic-layout .header {
  background-color: white;
  color: unset;
  margin-bottom: 10px;
  padding-inline: 20px;
}

#basic-layout .content {
  background-color: white;
}

</style>