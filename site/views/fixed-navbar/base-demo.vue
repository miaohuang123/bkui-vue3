<template>
  <bk-switcher v-model="show" />
  <bk-fixed-navbar
    v-model="show"
    :nav-items="navItems"
  />
</template>
<script setup>
  import { ref } from 'vue';

  const navItems = [
    {
      icon: '',
      text: '联系',
      tooltip: '可以通过BK助手联系我们',
      action: () => {
        window.open('wxwork://message/?username=BK-MagicBox');
      },
    },
    {
      icon: '',
      text: '反馈',
      action: () => {
        window.open('/');
      },
    },
  ];
  const show = ref(true);

</script>
