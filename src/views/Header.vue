<template>
  <div>
    <menu-view></menu-view>
    <q-page-container>
      <div class="">
        <div class="row justify-between">
          <q-parallax :height="1000">
            <template v-slot:media>
              <img src="@images/banner5.jpg" />
            </template>
            <template v-slot:content>
              <div>
                <p class="text-h2 text-white">어떤 공간이 필요하세요?</p>
                <p class="text-h5 text-white">지금 바로 검색해 보세요</p>
                <q-select bg-color="white" v-model="sido" :options="sidoOptions" label="시/도 선택" outlined />
                <q-select bg-color="white" v-model="gugun" :options="gugunOptions" label="구/군 선택" outlined />
                <span class="text-white"> 에 있는</span>
                <q-select bg-color="white" v-model="type" :options="typeOptions" label="전체" outlined />
                <span class="text-white"> 중에서 </span>
                <q-input bg-color="white" type="date" placeholder="날짜 선택" v-model="date"></q-input>
                <q-input bg-color="white" type="number" placeholder="인원" v-model="person"></q-input>
                <q-input bg-color="white" placeholder="검색어를 입력해 주세요" v-model="keyword"></q-input>
                <span class="text-white"> 할 장소</span>
                <q-btn color="white" text-color="black" label="검색" @click="movePlaceList"></q-btn>
              </div>
            </template>
          </q-parallax>
        </div>
      </div>
    </q-page-container>
  </div>
</template>

<script>
import Vue from 'vue';
import MenuView from './Menu';
export default {
  name: 'MainView',

  components: { MenuView },

  data() {
    return {
      rightDrawerOpen: false,
      sido: '',
      sidoOptions: ['서울시'],
      gugun: '',
      gugunOptions: [],
      typeOptions: ['파티룸', '스터디카페'],
      type: '',
      date: '2021-03-06',
      person: 2,
      keyword: '',
    };
  },

  methods: {
    closeMenu() {
      //if (this.rightDrawerOpen) this.rightDrawerOpen = false;
      console.log(Vue);
      Vue.hideDrawer();
    },
    movePlaceList() {
      // api
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
