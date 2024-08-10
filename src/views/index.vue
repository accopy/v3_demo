<template>
  <div>{{ data.name }}</div>
  <div>
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>

<script setup>
const data = reactive({
  name: "NAME",
});
</script>
<style scoped lang="scss"></style>
