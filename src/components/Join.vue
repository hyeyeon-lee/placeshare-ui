<template>
  <div>
    <h2>회원가입</h2>

    <div><p>기본정보</p>
    <div>아이디 <input type="text" v-model="id"/> <button>중복체크</button></div>
    <div>비밀번호 <input type="password" v-model="password"/></div>
    <div>비밀번호 확인 <input type="password" v-model="password"/></div>
    <div>이름 <input type="text" v-model="name"/></div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Join',
  data() {
    return {
      id: 'abc',
      password: 'abc',
      name: 'abc'
    } 
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
