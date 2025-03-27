<template>
<!--  wrap为false 左右拖拉的时候不会换行-->
  <a-row :wrap="false">
    <a-col flex="100px">
      <div class="title-bar">
      <img src="../assets/vue.svg" class="logo" alt="logo" />
      <div class="title">产品标识</div>
    </div>
    </a-col>
    <a-col flex="auto">
      <a-menu v-model:selectedKeys="current"
              mode="horizontal"
              :items="items"
              @click="onMenuClick" />
    </a-col>
    <a-col flex="150px">
      <div v-if="loginUserStore.loginUser.id">
          {{loginUserStore.loginUser.userName}}
      </div>
      <div v-else>
        <a-button type="primary">Primary Button</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script setup>
import { h, ref } from 'vue';
import {useRouter} from "vue-router";
import {useLoginUserStore} from "../store/useLoginUserStore.js";

const loginUserStore = useLoginUserStore();

const router = useRouter();
const onMenuClick = ({key}) => {
  router.push({
    path: key,
  });
}

const current = ref(['mail']);
router.afterEach((to, from, failure) => {
  current.value = [to.path];
})
const items = ref([
  {
    key: '/',
    label: '首页',
    title: 'home',
  },
  {
    key: '/second',
    label: 'second',
    title: 'second',
  },
  {
    key: '/third',
    label: 'Navigation Three - Submenu',
    title: 'Navigation Three - Submenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: h(
        'a',
        {
          href: 'https://antdv.com',
          target: '_blank',
        },
        'Navigation Four - Link',
    ),
    title: 'Navigation Four - Link',
  },
]);
</script>


<style scoped>
  .title-bar {
    display: flex;
    align-items: center;
  }
</style>
