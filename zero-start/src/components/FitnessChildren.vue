<template>
  <div class="fitnessChrldren">

    <p>这是子页面</p>
    <p><router-link to="/fitness">返回父页面</router-link></p>
    <p><router-link to="/">返回首页</router-link></p>


  </div>
</template>

<script>
export default {
  name: "FitnessChildren",
  data() {
    return {
      msg: "子页面",
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
</style>
