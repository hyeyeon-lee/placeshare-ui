<template>
  <div>
    <top-place-view :type="`best`"></top-place-view>
    <top-place-view :type="`new`"></top-place-view>
  </div>
</template>

<script>
import TopPlaceView from './TopPlace';

export default {
  name: 'MainView',

  components: {
    TopPlaceView
  }
  ,

  data() {
    return {};
  },

  methods: {}

}
;
</script>

<style></style>
