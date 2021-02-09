export default {
  install(Vue) {
    // 1. 전역 메소드 또는 속성 추가
    Vue.hideDrawer = function() {
      console.log('abc');
    };

    // 2. 전역 에셋 추가
    Vue.directive();

    // 3. 컴포넌트 옵션 주입
    Vue.mixin({});
  }
};
