<template>
  <div>
    <h2>我是vue渲染出来的</h2>
    <h2>{{ message }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'hello vue'
    }
  }
}
</script>
<style scoped>
  h2 {
    color: green;
  }
</style>