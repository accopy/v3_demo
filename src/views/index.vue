<template>
  <div>{{ userStore.name }}</div>
  <div>
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>

<script setup>
const data = reactive({
  name: "NAME",
});
import { userInfo } from "@/stores/user";

const userStore = userInfo();
</script>
<style scoped lang="scss"></style>
