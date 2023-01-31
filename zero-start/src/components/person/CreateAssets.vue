<template>
  <div class="createAssets">
    <h1>{{ msg }}</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="记录时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.time"
            style="width: 20%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
      </el-form-item>
      <el-form-item label="微信" prop="wx">
        <el-input v-model.number="form.wx" style="width: 5%"></el-input>
      </el-form-item>
      <el-form-item label="支付宝" prop="alipay">
        <el-input v-model.number="form.alipay" style="width: 5%"></el-input>
      </el-form-item>
      <el-form-item label="建设银行" prop="construction">
        <el-input
          v-model.number="form.construction"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="工商银行" prop="industrialAndCommercial">
        <el-input
          v-model.number="form.industrialAndCommercial"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="招商银行" prop="merchants">
        <el-input
          v-model.number="form.merchants"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="中国银行" prop="china">
        <el-input
          v-model.number="form.china"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="东方财富" prop="eastMoney">
        <el-input
          v-model.number="form.eastMoney"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="中信证券" prop="citics">
        <el-input
          v-model.number="form.citics"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="借款" prop="borrow">
        <el-input
          v-model.number="form.borrow"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="借款描述" prop="borrowDesc">
        <el-input v-model="form.borrowDesc" style="width: 20%"></el-input>
      </el-form-item>
      <el-form-item label="负债" prop="liability">
        <el-input
          v-model.number="form.liability"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="负债描述" prop="liabilityDesc">
        <el-input v-model="form.liabilityDesc" style="width: 20%"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <el-button> <router-link to="/">取消</router-link></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateAssets",
  data() {
    return {
      msg: "CreateAssets",
      form: {
        time: "",
        wx: 0,
        alipay: 0,
        construction: 0,
        industrialAndCommercial: 0,
        merchants: 0,
        china: 0,
        borrow: 0,
        borrowDesc: "",
        liability: 0,
        liabilityDesc: "",
        eastMoney:0,
        citics:0
      },
    };
  },

  methods: {
    onSubmit() {
      console.log("submit!", this.form);
      axios.post(`http://127.0.0.1:8082/life/v1/person-assets/m/add`,this.form).then(
          (res) => {
            console.log("res!", res);
            alert("请求成功");
          },
          (error) => {
            alert("请求失败");
          }
        );
    },
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
