import {
  createRouter,
  createWebHistory,
  isNavigationFailure,
} from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import NotFound from '@/pages/NotFound.vue';

const membersIDGuard = (to, from) => {
  // members/:id 경로는 반드시 이전 경로가 /members, /members:id 인 경우만 내비게이션 허용
  if (from.name !== 'members' && from.name !== 'members/id') {
    return false;
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', component: Members },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
    {
      path: '/members/:id(\\d+)',
      component: MemberInfo,
      beforeEnter: membersIDGuard,
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideoColorSpace,
      children: [{ path: 'id', name: 'videos/id', component: VideoPlayer }],
    },
  ],
});

router.beforeEach((to) => {
  // to.query에 속성이 존재할 경우 제거된 경로로 재이동
  if (to.query && Object.keys(to.query).length > 0) {
    return { path: to.path, query: {}, params: to.params };
  }
});

router.afterEach((to, from, failure) => {
  // 페이지 이동 후에 실행되는 로직
  if (isNavigationFailure(failure)) {
    console.log('@@ 내비게이션 중단 : ', failure);
  }
});

export default router;
