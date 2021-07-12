<template>
  <div>
    <top-place-view :type.sync="best" @click="onClickBtn"></top-place-view>
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
    return {
      best:'best'
    };
  },

  methods: {
    onClickBtn() {
      console.log('click')
    }
  }

}
;
</script>

<style></style>
