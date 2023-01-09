<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="navigationTop">
      <h1>微分机器人</h1>
    </div>
    <div class="navigationLeft">
      <ul id="nav" class="nav navbar-nav">
        <li><router-link to="/">工作任务</router-link></li>
        <li><router-link to="/todoList">待办事项</router-link></li>
        <li><router-link to="/todayPlan">今日计划</router-link></li>
      </ul>
    </div>
    <div class="navigationRight">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  background-color: #2b2c30;
  font-family: "Ubuntu", "Arial", sans-serif;
  line-height: 1.5;
  color: #ddd;
  width: 100%;
  height: 100%;
  margin: 0px;
}
.navigationTop {
  width: auto;
  height: 60px;
  float: top;
  text-align: center;
  margin: auto;
}

.navigationLeft {
  text-align: left;
  float: left;
  color: #ddd;
  background-color: #2b2c30;
  margin-top: 10px;
  width: 9%;
  height: 900px;
  padding-left: 5px;
}

.navigationRight {
  margin-top: 10px;
  float: right;
  background-color: #2b2c30;
  width: 90%;
  height: 900px;
}

ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #ddd;
  font-size: 20px;
  margin: 0 10px;
  padding: 5px 15px;
  position: relative;
}

li {
  color: #ddd;
  display: inline-balock;
  margin: 10px;

}
a {
  color: #42b983;
	top: 10;
}

</style>
