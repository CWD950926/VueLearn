<template>
  <div class="todayPlan">
    <h1>{{ msg }}</h1>
    <ul style="display:block;color: aliceblue;">
      <li><a href="http://192.168.1.104:8003/#/login" target="_blank"> 标准版 </a></li>
      <li><a href="http://192.168.1.104:8002/#/login" target="_blank"> 五菱版 </a></li>
      <li><a href="http://test.wefanbot.com:8006/#/login" target="_blank">微线索</a></li>
      <li><a href="http://test.wefanbot.com:8005" target="_blank">钱大妈</a></li>
    </ul>

    <p>标准版	群聊增加@群成员</p>
  </div>
</template>

<script>
export default {
  name: "TodayPlan",
  data() {
    return {
      msg: "今日计划",
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
