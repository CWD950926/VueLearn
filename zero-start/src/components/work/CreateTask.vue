<template>
  <div class="createTask">
    <h1>{{ msg }}</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="任务时间">
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
      <el-form-item label="工作内容">
        <el-input type="textarea" v-model="form.taskDesc" style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item label="优先级">
        <el-select v-model="form.priority" placeholder="优先级">
          <el-option label="A" value="A"></el-option>
          <el-option label="B" value="B"></el-option>
          <el-option label="C" value="C"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="是否提醒">
        <el-switch v-model="form.remind"></el-switch>
      </el-form-item>
      <el-form-item label="版本">
        <el-checkbox-group v-model="form.versions">
          <el-checkbox label="五菱版" name="type"></el-checkbox>
          <el-checkbox label="标准版" name="type"></el-checkbox>
          <el-checkbox label="特步版" name="type"></el-checkbox>
          <el-checkbox label="钱大妈版" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="开发进度">
        <el-radio-group v-model="form.workProcess">
          <el-radio label="未开始"></el-radio>
          <el-radio label="进行中"></el-radio>
          <el-radio label="提测"></el-radio>
          <el-radio label="待上线"></el-radio>
          <el-radio label="已上线"></el-radio>
        </el-radio-group>
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
  name: "workTask",
  data() {
    return {
      msg: "创建任务",
      form: {
        time: "",
        taskDesc: "",
        priority: "",
        versions: [],
        remind: false,
        workProcess: ""
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!",this.form);
      axios.post(`http://127.0.0.1:8082/life/v1/work-task/m/add`,this.form).then(
        res => {
          console.log("res!",res);
        },
        error => {
          alert('请求失败');
        }
      )
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
  text-decoration: none;
}
li {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
}
a {
  color: #42b983;
  text-decoration: none;
}
.workTask {
  padding: 10px;
  background-color: #2b2c30;
}
table,
th,
td {
  border: 1px solid black;
}
</style>
