<template>
  <div>
    <q-header class="op0">
      <q-toolbar>
        <q-toolbar-title class="text-black">
          Placeshare
        </q-toolbar-title>
        <q-btn flat dense @click="showMenu" aria-label="Menu" icon="menu" label="Menu" class="text-black" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" bordered content-class="bg-grey-2" side="right" overlay @mouseleave="hideMenu">
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
  </div>
</template>

<script>
export default {
  name: 'MenuView',

  components: {},

  data() {
    return {
      rightDrawerOpen: false,
    };
  },

  methods: {
    showMenu() {
      this.rightDrawerOpen = true;
    },
    hideMenu() {
      this.rightDrawerOpen = false;
    },
  },
};
</script>

<style></style>
