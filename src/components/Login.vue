<template>
  <div class="login">
    <h1>로그인 화면입니다.</h1>
    id: <input type="text" v-model="id">
    password: <input type="password" v-model="password">
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      id: 'abc',
      password: 'abc'
    } 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
