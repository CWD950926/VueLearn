<template>
  <div class="todoList">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "todoList",
  data() {
    return {
      msg: "待办事项",
      keyWord:''

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
