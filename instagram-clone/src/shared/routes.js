import Login from './pages/login'
import DASHBOARD from './pages/dashboard'
import SIGN_UP from './pages/sign-up'
import PROFILE from './pages/profile'

const routes =  [
  {
    path: '/',
    exact: true,
    component: DASHBOARD,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/sign-up',
    exact: true,
    component: SIGN_UP,
  },
  {
    path: '/p/raphael',
    component: PROFILE,
    exact: true,
    fetchInitialData: (path = '') => path.split('/').pop()
  }
]

export default routes