<template>
  <q-layout view="lHr Lpr lFf">
    <header-view></header-view>
  </q-layout>
</template>

<script>
import Vue from 'vue';
import HeaderView from './Header.vue';
export default {
  name: 'MainView',

  components: { HeaderView },

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
