<template>
  <div style="height: 300px">
    <bk-table
      height="100%"
      :columns="columns"
      :data="tableData"
      scroll-loading
      @scroll-bottom="handleScrollBottom"
    >
      <template #fixedBottom>
        <bk-loading
          :loading="isScrollLoading"
          mode="spin"
        />
      </template>
    </bk-table>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { DATA_FIX_COLUMNS, DATA_FIX_TABLE } from './options';
  export default defineComponent({
    components: {},
    data() {
      return {
        tableData: [...DATA_FIX_TABLE],
        columns: [...DATA_FIX_COLUMNS],
        isScrollLoading: false,
      };
    },
    methods: {
      handleScrollBottom(arg) {
        console.log('handleScrollBottom', arg);
        this.isScrollLoading = true;

        setTimeout(() => {
          this.isScrollLoading = false;
        }, 1500);
      },
    },
  });
</script>
<style scoped>
.row {
  display: flex;
  width: 100%;
}

.cell {
  flex: 1;
  margin: 0 5px 0 5px;
}
</style>
