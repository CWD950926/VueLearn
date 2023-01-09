<template>
  <div class="todayPlan">
    <ul style="display:block;color: aliceblue;">
      <li><a href="http://192.168.1.104:8003/#/login" target="_blank"> 标准版 </a></li>
      <li><a href="http://192.168.1.104:8002/#/login" target="_blank"> 五菱版 </a></li>
      <li><a href="http://test.wefanbot.com:8006/#/login" target="_blank">微线索</a></li>
      <li><a href="http://test.wefanbot.com:8005" target="_blank">钱大妈</a></li>
    </ul>

    <section class="jumbotron">
		<h3 class="jumbotron-heading">暂停老百姓任务</h3>
		<div>
			<input type="text" placeholder="任务id" v-model="keyWord"/>&nbsp;
			<button @click="searchUsers">暂停</button>
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
      if(this.keyWord === ''){
        alert('请输入参数');
      }else{
      //请求前更新List的数据
      axios.get(`http://test.wefanbot.com:18994/scrm/test/p/lbxStopTask?third=${this.keyWord}`).then(
        response => {
          alert('请求成功');
          console.log('请求成功了',{response})
        },
        error => {
          alert('请求失败');
        }
      )
      }
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
