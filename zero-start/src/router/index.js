import Vue from 'vue'
import Router from 'vue-router'
import WorkTask from '@/components/work/WorkTask'
import CreateTask from '@/components/work/CreateTask'
import Fitness from '@/components/person/Fitness'
import CreateFitness from '@/components/person/CreateFitness'
import FitnessChildren from '@/components/person/FitnessChildren'
import Assets from '@/components/person/Assets'
import CreateAssets from '@/components/person/CreateAssets'
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
      path: '/createTask',
      name: 'CreateTask',
      component: CreateTask
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
      path: '/createAssets',
      name: 'CreateAssets',
      component: CreateAssets
    },
    {
      path: '/assets',
      name: 'Assets',
      component: Assets
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
    },
    {
      path: '/createFitness',
      name: 'CreateFitness',
      component: CreateFitness
    },
  ]
})
