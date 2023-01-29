<template>
  <div class="todayPlan">
    <ul style="display:block;color: aliceblue;">
      <li><a href="http://192.168.1.104:8003/#/login" target="_blank"> 标准版 </a></li>
      <li><a href="http://192.168.1.104:8002/#/login" target="_blank"> 五菱版 </a></li>
      <li><a href="http://test.wefanbot.com:8006/#/login" target="_blank">微线索</a></li>
      <li><a href="http://test.wefanbot.com:8005" target="_blank">钱大妈</a></li>
    </ul>

    <section class="jumbotron">
		<h3 class="jumbotron-heading">查询任务</h3>
		<div>
			<input type="text" placeholder="任务id" v-model="keyWord"/>&nbsp;
			<button @click="searchUsers">查询</button>
		</div>
	</section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'TodayPlan',
  data() {
    return {
      keyWord:''
    }
  },
  methods: {
    searchUsers(){
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
}
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
