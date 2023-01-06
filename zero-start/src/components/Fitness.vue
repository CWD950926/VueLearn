<template>
  <div class="fitness">
    <p><router-link to="/">返回首页</router-link></p>
    <p><router-link to="/fitnessChildren">转向子页面</router-link></p>
    <p><router-view></router-view></p>
    <h1>{{ msg }}</h1>

    <table>
      <tr>
        <th>日期</th>
        <th>早</th>
        <th>中</th>
        <th>晚</th>
        <th>运动步数</th>
        <th>体重</th>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: "Fitness",
  data() {
    return {
      msg: "2023 LOSE WEIGHT",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
