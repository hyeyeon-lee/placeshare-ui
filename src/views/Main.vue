<template>
  <q-layout view="lHr Lpr lFf">
    <header-view></header-view>
    <top-place-view :type="`best`"></top-place-view>
    <top-place-view :type="`new`"></top-place-view>
    <footer-view></footer-view>
  </q-layout>
</template>

<script>
import Vue from 'vue';
import HeaderView from './Header.vue';
import TopPlaceView from './TopPlace.vue';
import FooterView from './Footer.vue';
export default {
  name: 'MainView',

  components: { HeaderView, TopPlaceView, FooterView },

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
