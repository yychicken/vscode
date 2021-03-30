<template>
  <div>this is app
    test1
    <test-1></test-1>
  </div>
</template>
<script>
import test1 from './components/test1.vue'

export default {
  name: "App",
  components:{
    test1,
  }
};
</script>
<style scoped>
</style>