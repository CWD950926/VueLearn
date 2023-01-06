import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fitness from '@/components/Fitness'
import FitnessChildren from '@/components/FitnessChildren'

Vue.use(Router)

// axios.defaults.timeout = 20000
// axios.defaults.withCredentials = true
// Vue.prototype.$http = axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fitness',
      name: 'Fitness',
      component: Fitness,
      children:[
        {
          path:'/fitnessChildren',
          component: FitnessChildren
        }
      ]
    }
  ]
})
