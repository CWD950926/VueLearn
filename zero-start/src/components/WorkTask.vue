<template>
  <div class="workTask">
    <h1>{{ msg }}</h1>
    <el-table
      :data="tableData"
      style="width: 80%">
      <el-table-column
        prop="time"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="version"
        label="版本"
        width="180">
      </el-table-column>
      <el-table-column
        prop="taskDesc"
        label="工作内容">
        
      </el-table-column>
      <el-table-column
        prop="priority"
        label="优先级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="workProcess"
        label="开发进度"
        width="180">
      </el-table-column>
    </el-table>
  </div>



</template>

<script>
import axios from 'axios'
export default {
  name: "workTask",
  data() {
    return {
      msg: "开发任务",
      keyWord:'',
      tableData:[]
    };
  },
  methods: {
    search(){
      //请求前更新List的数据
      axios.get(`http://127.0.0.1:8082/life/v1/work-task/m/findList`).then(
        res => {
          alert('请求成功');
          console.log('请求成功了',res.data.data)
         
        },
        error => {
          alert('请求失败');
        }
      )
    }
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
  text-decoration:none
}
li {
  display: inline-block;
  margin: 0 10px;
  text-decoration:none
}
a {
  color: #42b983;
  text-decoration:none
}
.workTask{
  padding: 10px;
  background-color: #2B2C30;
}
table, th, td {
    border: 1px solid black;
}
</style>
