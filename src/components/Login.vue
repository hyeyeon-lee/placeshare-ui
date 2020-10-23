<template>
  <div>
    <h2>로그인</h2>
    <h5>place share에 오신 것을 환영합니다 !</h5>
    <div>아이디 <input type="text" v-model="id"/> </div>
    <div>비밀번호 <input type="password" v-model="password"/></div>
    <input type="button" value="로그인" @click="goMain"/> 

    <p><a href="#">아이디 찾기</a></p>
    <p><a href="#">비밀번호 찾기</a></p>

    <p>아직 회원이 아니신가요?</p>
    <input type="button" value="회원가입" />

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      id: 'abc',
      password: 'abc'
    } 
  },
  methods: {
    goMain() {
      this.$router.push("hello");
    }
  }
}
</script>

<style scoped>
</style>
