<template>
  <div class="fitnessChrldren">
    <p><router-link to="/fitness">收起</router-link></p>
    <p>3月目标 77kg</p>
    <p>4月目标 72kg</p>
    <p>5月目标 67kg</p>
    <p>6月目标 63kg</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FitnessChildren",
  data() {
    return {
      msg: "子页面",
    };
  },
};
</script>

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
