<template>
  <q-layout view="lHr Lpr lFf">
    <header-view></header-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </q-layout>
</template>

<script>
import HeaderView from './Header';
import FooterView from './Footer';

export default {
  name: 'IndexView',

  components: {HeaderView, FooterView},

  data() {
    return {};
  },

  methods: {}
};
</script>

<style></style>
