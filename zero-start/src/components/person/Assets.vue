<template>
  <div class="assets">
    <h1>{{ msg }}</h1>
    <router-link to="/createAssets">添加记录</router-link>
    <el-table
      :data="tableData"
      style="width: 80%">
      <el-table-column
        prop="time"
        label="时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="total"
        label="总存款">
      </el-table-column>
      <el-table-column
        prop="liability"
        label="负债">
      </el-table-column>
      <el-table-column
        prop="wx"
        label="微信">
      </el-table-column>
      <el-table-column
        prop="alipay"
        label="支付宝">
      </el-table-column>
      <el-table-column
        prop="construction"
        label="建设银行">
      </el-table-column>
      <el-table-column
        prop="china"
        label="中国银行">
      </el-table-column>
      <el-table-column
        prop="industrialAndCommercial"
        label="工商银行">
      </el-table-column>
      <el-table-column
        prop="merchants"
        label="招商银行">
      </el-table-column>
      <el-table-column
        prop="china"
        label="中国银行">
      </el-table-column>
      <el-table-column
        prop="eastMoney"
        label="东方财富">
      </el-table-column>
      <el-table-column
        prop="citics"
        label="中信证券">
      </el-table-column>
      <el-table-column
        prop="borrow"
        label="借款">
      </el-table-column>
      <el-table-column
        prop="borrowDesc"
        label="借款描述">
      </el-table-column>

      <el-table-column
        prop="liabilityDesc"
        label="负债描述"
        width="180">
      </el-table-column>
    </el-table>


  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Assets",
  data() {
    return {
      msg: "Assets",
      tableData:[]
    };
  },
  created() {
    this.search()
  },
  methods: {
    search(){
      //请求前更新List的数据
      axios.get(`http://127.0.0.1:8082/life/v1/person-assets/m/findList`).then(
        res => {
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
