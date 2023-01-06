<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>01.03 - 01.31</h2>
    <ul style="display:inline-block;color: blue">
    <li>（0）标准版：群成员人数同步优化 √</li>
    <li>（1）五菱版：群消息页面，新增发言客户数（每日有发送1条消息的客户数） √</li>
    <li>（2）五菱版：线索状态跟踪增加状态过滤  √</li>
    <li>（4）五菱版：批量分配会话 √</li>
    <li>（）五菱版：朋友圈发送次数计入发送记录</li>
    <li>（）标准版：群聊增加@群成员</li>
    <li>（）特步版：添加好友发送申请，如好友没有通过申请，间隔时间段后自动再向未申请通过的好友发送二次申请</li>
    </ul>
    <router-link to="/fitness">跳转计划页面</router-link>
    <router-link to="/fitnessChildren">跳转子页面</router-link>
    <h2>测试环境</h2>
    <ul>
      <li>
        <a href="http://192.168.1.104:8003/#/login" target="_blank"> 标准版 </a>
      </li>
      <li>
        <a href="http://192.168.1.104:8002/#/login" target="_blank"> 五菱版 </a>
      </li>
      <li>
        <a href="http://test.wefanbot.com:8006/#/login" target="_blank">
          微线索
        </a>
      </li>
      <li>
        <a href="http://test.wefanbot.com:8005" target="_blank">钱大妈</a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "2023 开发任务",
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
