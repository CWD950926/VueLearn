<template>
  <div class="createFitness">
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
      <el-form-item label="早餐" prop="breakfast">
        <el-input
          v-model="form.breakfast"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="午餐" prop="lunch">
        <el-input
          v-model="form.lunch"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="晚餐" prop="dinner">
        <el-input
          v-model="form.dinner"
          style="width: 5%"
        ></el-input>
      </el-form-item>
      <el-form-item label="运动目标" prop="exercise">
        <el-input
          v-model="form.exercise"
          style="width: 5%"
        ></el-input>
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
  name: "createFitness",
  data() {
    return {
      msg: "createFitness",
      form: {
        time: Date.now(),
        lunch:"",
        breakfast:"",
        dinner:"",
        exercise:"8000步 1000下跳跃",
        weight:"",
      },
    };
  },

  methods: {
    onSubmit() {
      console.log("submit!", this.form);
      axios.post(`http://127.0.0.1:8082/life/v1/person-fitness/m/add`,this.form).then(
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
