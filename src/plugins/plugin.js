Plugin.install = function(Vue) {
  // 1. 전역 메소드 또는 속성 추가
  Vue.hideDrawer = function() {
    const body = document.querySelector('body');
    body.addEventListener('click', console.log('zz'));
  };

  // 2. 전역 에셋 추가
  Vue.directive();

  // 3. 컴포넌트 옵션 주입
  Vue.mixin({});
};
