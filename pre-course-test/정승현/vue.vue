<template>
  <div id="app">
    <!-- 문제 1 -->
    <!-- 아래 버튼을 클릭했을 때 브라우저 기본 경고창을 띄워보세요 -->
    <button v-on:click="clickme">click me</button>

    <!-- 문제 2 -->
    <!-- 뷰 데이터 속성인 login 값에 따라 아래 태그가 표시되거나 미표시되게 해보세요.  -->
    <p v-if="login">user has been logged in</p>

    <!-- 문제 3 -->
    <!-- '<p>hello vue</p>' 를 기본 템플릿으로 갖는 로컬 컴포넌트를 한개 등록해보세요 -->
    <myComponent v-bind:num="num" />

    <!-- 문제 4 -->
    <!-- 문제 3에서 등록한 컴포넌트에 아래의 num 데이터를 전달해보세요 -->

    <!-- 문제 5 -->
    <!-- 문제 3에서 등록한 컴포넌트에서 이벤트를 발생시켜 num 데이터의 값을 변경해보세요 -->
  </div>
</template>

<script>
const myComponent = {
  props: ['num'],
  template: '<label><p>hello vue {{ num }} </p><button v-on:click="num += 1">Change Count</button></label>'
}

export default {
  name: 'app',
  components: {
    myComponent
  },
  methods: {
    clickme () {
      alert('clickme')
    }
  },
  data () {
    return {
      login: true,
      num: 10
    }
  }
}
</script>

<style>

</style>
