<template>
  <div class="view">
    <p class="text-h2">로그인</p>
    <p class="text-h5">place share에 오신 것을 환영합니다 !</p>
    <q-input outlined v-model="id" label="아이디" />
    <q-input outlined v-model="password" label="비밀번호" />
    <q-btn label="로그인" @click="goMain" />

    <p><a href="#">아이디 찾기</a></p>
    <p><a href="#">비밀번호 찾기</a></p>

    <p>아직 회원이 아니신가요?</p>
    <q-btn label="회원가입" @click="addUser" />
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      id: 'abc',
      password: 'abc',
    };
  },
  methods: {
    goMain() {
      this.$router.push('/');
    },
    addUser() {
      this.$router.push('join');
    },
  },
};
</script>

<style scoped></style>
