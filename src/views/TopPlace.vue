<template>
  <div>
    <h1 class="text-center">{{ type | toUpperCase }}</h1>
    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
          <q-btn label="button"></q-btn>
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
          <q-btn label="button" @click="onClickBtn1"></q-btn>
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
          <q-btn label="button" @click="onClickBtn2"></q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopPlaceView',
  props: {
    type: {
      require: true,
      type: String,
    },
  },
  filters: {
    toUpperCase(val) {
      return val.toUpperCase();
    },
  },
  components: {},
  data() {
    return {
      lorem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda autem distinctio dolores dolorum earum enim esse illo maxime neque, omnis pariatur quam quas quos rem rerum voluptate. Perspiciatis, sequi?"
    };
  },
  computed: {},
  methods: {
    onClickBtn1() {
      this.$emit('update:type', 'new')
    },
    onClickBtn2() {
      this.$emit('click')
    },
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
