import Vue from 'vue'
import Router from 'vue-router'
import WorkTask from '@/components/WorkTask'
import Fitness from '@/components/Fitness'
import FitnessChildren from '@/components/FitnessChildren'
import TodayPlan from '@/components/TodayPlan'
import TodoList from '@/components/TodoList'
Vue.use(Router)

// axios.defaults.timeout = 20000
// axios.defaults.withCredentials = true
// Vue.prototype.$http = axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WorkTask',
      component: WorkTask
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
    },
    {
      path: '/todayPlan',
      name: 'TodayPlan',
      component: TodayPlan
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
