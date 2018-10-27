import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  index: () => import ('@/views/index/index'),
  wawp: () => import ('@/views/index/wawp'),
  saaanytime: () => import ('@/views/index/saaanytime'),
  ahactivities: () => import ('@/views/index/ahactivities'),
  systemb: () => import ('@/views/index/systemb'),
  news: () => import('@/views/news/index'),
  tich: () => import('@/views/news/tich'),
  pminteraction: () => import('@/views/news/pminteraction'),
  albopb: () => import('@/views/news/albopb'),
  pmstatus: () => import('@/views/news/pmstatus'),
  login: () => import('@/views/login/index'),
  notice: () => import('@/views/notice/index'),
  integral: () => import('@/views/personal/integral'),
  Integraldetail: () => import('@/views/personal/Integraldetail'),
  personal: () => import('@/views/personal/index'),
  partyDues: () => import('@/views/personal/partyDues'),
  modify: () => import('@/views/personal/modify'),
  info: () => import('@/views/personal/info'),
  life: () => import('@/views/life/index'),
  nation: () => import('@/views/life/nation'),
  heart: () => import('@/views/life/heart'),
  thought: () => import('@/views/life/thought'),
  politics: () => import('@/views/life/politics'),
  flow: () => import('@/views/life/flow'),

}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: components.index
    },
    {
      path: '/wawp',
      name: 'wawp',
      meta: {
        title: '随时随地学'
      },
      component: components.wawp
    },
    {
      path: '/saaanytime',
      name: 'saaanytime',
      meta: {
        title: '随时随地拍'
      },
      component: components.saaanytime
    },
    {
      path: '/systemb',
      name: 'systemb',
      meta: {
        title: '制度建设'
      },
      component: components.systemb
    },
    {
      path: '/ahactivities',
      name: 'ahactivities',
      meta: {
        title: '特色活动'
      },
      component: components.ahactivities
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: '信工新闻眼'
      },
      component: components.news
    },
    {
      path: '/pminteraction',
      name: 'pminteraction',
      meta: {
        title: '党员云互动'
      },
      component: components.pminteraction
    },
    {
      path: '/albopb',
      name: 'albopb',
      meta: {
        title: '党建一点通'
      },
      component: components.albopb
    },
    {
      path: '/pmstatus',
      name: 'pmstatus',
      meta: {
        title: '党员亮身份'
      },
      component: components.pmstatus
    },
    {
      path: '/tich',
      name: 'tich',
      meta: {
        title: '党史上的今天'
      },
      component: components.tich
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: components.login
    },
    {
      path: '/notice',
      name: 'notice',
      meta: {
        title: '通知早知道'
      },
      component: components.notice
    },
    {
      path: '/personal',
      name: 'personal',
      meta: {
        title: '我的党建'
      },
      component: components.personal
    },
    {
      path: '/life',
      name: 'life',
      meta: {
        title: '掌上组织生活'
      },
      component: components.life
    },
    {
      path: '/politics',
      name: 'politics',
      meta: {
        title: '政治学习'
      },
      component: components.politics
    },
    {
      path: '/thought',
      name: 'thought',
      meta: {
        title: '思想汇报'
      },
      component: components.thought
    },
    {
      path: '/heart',
      name: 'heart',
      meta: {
        title: '心得总结'
      },
      component: components.heart
    },
    {
      path: '/nation',
      name: 'nation',
      meta: {
        title: '民族评议'
      },
      component: components.nation
    },
    {
      path: '/flow',
      name: 'flow',
      meta: {
        title: '流动党员找组织'
      },
      component: components.flow
    },
    {
      path: '/info',
      name: 'info',
      meta: {
        title: '个人信息'
      },
      component: components.info
    },
    {
      path: '/integral',
      name: 'integral',
      meta: {
        title: '个人量化积分'
      },
      component: components.integral
    },
    {
      path: '/Integraldetail',
      name: 'Integraldetail',
      meta: {
        title: '积分明细'
      },
      component: components.Integraldetail
    },
    {
      path: '/modify',
      name: 'modify',
      meta: {
        title: '修改密码'
      },
      component: components.modify
    },
    {
      path: '/partyDues',
      name: 'partyDues',
      meta: {
        title: '党员纳费'
      },
      component: components.partyDues
    },
  ]
})
