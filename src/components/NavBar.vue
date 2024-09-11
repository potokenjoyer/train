<template>
  <div class="container pt">
    <div class="mb-4">
      <h1>TODO-LIST</h1>
      <div class="mb-5">
        <el-button
          type="primary"
          @click="$router.push('/archive')"
          circle
          :icon="Edit"
          size="large"
        ></el-button>
        <el-button
          type="danger"
          :icon="Delete"
          circle
          size="large"
          @click="$router.push('/trash')"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Delete, Edit } from "@element-plus/icons-vue";
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
