<template>
  
  <div class="hello">
  
    <h1>{{ msg }}</h1>

    <h2>01.03 - 01.31</h2>
    <!-- <ul style="display:inline-block; color: #ddd">

    <li>（）特步版：添加好友发送申请，如好友没有通过申请，间隔时间段后自动再向未申请通过的好友发送二次申请</li>
    </ul> -->
    <table>
      <tr>
        <th>时间</th>
        <th>版本</th>
        <th>工作内容</th>
        <th>优先级</th>
        <th>开发进度</th>
     </tr>
    <tr>
      <td>1月</td>
      <td>标准版</td>
      <td>群成员人数同步优化</td>
      <th>A</th>
      <td>待上线</td>
    </tr>
    <tr>
      <td>1月</td>
      <td>五菱版</td>
      <td>群消息页面，新增发言客户数（每日有发送1条消息的客户数）</td>
      <th>C</th>
      <td>首次提测</td>
    </tr>
    <tr>
      <td>1月</td>
      <td>五菱版</td>
      <td>线索状态跟踪增加状态过滤</td>
      <th>A</th>
      <td>待上线</td>
    </tr>
    <tr>
      <td>1月</td>
      <td>五菱版</td>
      <td>批量分配会话</td>
      <th>B</th>
      <td>待上线</td>
    </tr>
    <tr>
      <td>1月</td>
      <td>标准版</td>
      <td>群聊增加@群成员</td>
      <th>B</th>
      <td>进行中</td>
    </tr>
    <tr>
      <td>1月</td>
      <td>特步版</td>
      <td>添加好友发送申请，如好友没有通过申请，间隔时间段后自动再向未申请通过的好友发送二次申请</td>
      <th>B</th>
      <td>未开始</td>
    </tr>
    <tr>
      <td>1月</td>
      <td>五菱版</td>
      <td>朋友圈发送次数计入发送记录</td>
      <th>C</th>
      <td>未开始</td>
    </tr>
    <tr>
      <td>1月</td>
      <td>五菱版</td>
      <td>发送时间可设置为分段时间段</td>
      <th>C</th>
      <td>未开始</td>
    </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "开发任务",
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
.hello{
  padding: 10px;
  background-color: #2B2C30;
}
table, th, td {
    border: 1px solid black;
}
</style>
