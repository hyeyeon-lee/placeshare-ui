<template>
<div>Place 화면입니다</div>
</template>

<script>
export default {
  name: "Place",
  watch: {
    $route(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

</style>