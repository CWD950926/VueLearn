<template>
  <div class="fitness">
    <h1>{{ msg }}</h1>
    <h2>{{ target }}</h2>
    <p><router-link to="/fitnessChildren">努力成为更好的自己</router-link></p>
    <p><router-view></router-view></p>

    <router-link to="/createFitness">添加记录</router-link>
    <el-table
      :data="tableData"
      style="width: 80%">
      <el-table-column
        prop="time"
        label="时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="breakfast"
        label="早餐">
      </el-table-column>
      <el-table-column
        prop="lunch"
        label="午餐">
      </el-table-column>
      <el-table-column
        prop="dinner"
        label="晚餐">
      </el-table-column>
      <el-table-column
        prop="exercise"
        label="运动目标"
        width="180">
      </el-table-column>
      <el-table-column
        prop="weight"
        label="体重">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Fitness",
  data() {
    return {
      msg: "2023 目标 63kg",
      target:"2月 目标 82kg",
      tableData:[]
    };
  },
  created() {
    this.search()
  },
  methods: {
    search(){
      //请求前更新List的数据
      axios.get(`http://127.0.0.1:8082/life/v1/person-fitness/m/findList`).then(
        res => {
          console.log("res!", res);
          this.tableData = res.data.data
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
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
