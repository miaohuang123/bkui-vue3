<template>
  <bk-collapse
    v-model="activeIndex"
    :list="list"
    @item-click="handlerClick"
  />
</template>
<script setup>
  import { ref } from 'vue';

  import BkCollapse from '@bkui-vue/collapse';
  import BkMessage from '@bkui-vue/message';
  const activeIndex = ref([]);
  const list = ref([
    { name: '方案成熟', content: '拥有支撑数百款腾讯业务的经验沉淀，兼容各种复杂的系统架构，生于运维 · 精于运维' },
    { name: '覆盖全面', content: '从配置管理，到作业执行、任务调度和监控自愈，再通过运维大数据分析辅助运营决策，全方位覆盖业务运营的全周期保障管理。' },
    { name: '开放平台', content: '开放的PaaS，具备强大的开发框架和调度引擎，以及完整的运维开发培训体系，助力运维快速转型升级。' },
  ]);
  const handlerClick = (item) => {
    BkMessage({
      message: `当前点击${item.name}`,
      offsetY: 80,
    });
  };
</script>

