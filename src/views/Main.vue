<template>
  <q-layout view="lHr Lpr lFf">
    <q-header class="op0">
      <q-toolbar>
        <q-toolbar-title class="text-black">
          Placeshare
        </q-toolbar-title>
        <q-btn flat dense @click="rightDrawerOpen = !rightDrawerOpen" aria-label="Menu" icon="menu" label="Menu" class="text-black" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" id="rightDrawer" bordered content-class="bg-grey-2" side="right" overlay>
      <q-list>
        <q-item clickable>
          Home
        </q-item>
        <q-item clickable tag="a" target="_blank">Place</q-item>
        <q-item clickable tag="a" target="_blank">Share</q-item>
        <q-item clickable tag="a" target="_blank">Event</q-item>
        <q-item clickable tag="a" target="_blank">Promotion</q-item>
      </q-list>
    </q-drawer>

    <q-page-container @click="closeMenu">
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
                <q-select v-model="sido" :options="sidoOptions" label="시/도 선택" outlined />
                <q-select v-model="gugun" :options="gugunOptions" label="구/군 선택" outlined />
                에 있는
                <q-select v-model="gugun" :options="gugunOptions" label="전체" outlined />
                중에서
                <q-input placeholder="날짜 선택"></q-input>
              </div>
            </template>
          </q-parallax>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'LayoutDefault',

  components: {},

  data() {
    return {
      rightDrawerOpen: false,
      sido: '',
      sidoOptions: ['서울시']
    };
  },

  methods: {
    closeMenu() {
      //if (this.rightDrawerOpen) this.rightDrawerOpen = false;
      console.log(Vue);
      Vue.hideDrawer();
    }
  }
};
</script>

<style></style>
