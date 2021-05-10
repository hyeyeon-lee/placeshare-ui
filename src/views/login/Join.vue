<template>
  <div>
    <h2>회원가입</h2>

    <div>
      <p>기본정보</p>
      <div>
        아이디
        <input type="text" v-model="id" />
        <button>중복체크</button>
      </div>
      <div>
        비밀번호
        <input type="password" v-model="password" />
      </div>
      <div>
        비밀번호 확인
        <input type="password" v-model="password" />
      </div>
      <div>
        이름
        <input type="text" v-model="name" />
      </div>
      <div>
        핸드폰 번호
        <select>
          <option value="010">010</option>
        </select>
        <input type="tel" v-model="number" />
        <input type="tel" v-model="number" />
      </div>
      <div>
        전화 번호
        <select>
          <option value="010">02</option>
        </select>
        <input type="tel" v-model="tel" />
        <input type="tel" v-model="tel" />
      </div>
    </div>
    <div>
      <p>부가정보</p>
      <div>
        우편번호
        <input type="text" v-model="id" />
        <button>우편번호 찾기</button>
      </div>
      <div>
        주소
        <input type="password" v-model="password" />
      </div>
      <div>
        생년월일
        <select v-model="year">
          <option v-for="i in 120" :value="1900 + i" :key="1900 + i">
            {{ 1900 + i }}
          </option>
        </select>
        년
        <select v-model="month">
          <option v-for="i in 11" :value="i" :key="i">
            {{ i }}
          </option>
        </select>
        월
        <select v-model="day">
          <option v-for="i in 31" :value="i" :key="i">
            {{ i }}
          </option>
        </select>
        일
      </div>
    </div>
    <div>
      <input type="button" value="회원가입" />
      <input type="reset" value="취소" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Join",
  data() {
    return {
      id: "abc",
      password: "abc",
      name: "abc",
      number: 1234,
      tel: 1234,
      year: 2020,
      month: 11,
      day: 9
    };
  },
  methods: {}
};
</script>

<style scoped></style>
