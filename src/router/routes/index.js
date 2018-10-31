import Route from './Route'
import Layout from '@/components/Template/Layout'
import TimeLine from '@/views/TimeLine'

import NotFound from '@/views/NotFound'
import SignIn from '@/views/SignIn'

/**
 * Rotas da aplicação.
 *
 * @type {Route[]}
 */
const routes = [
  new Route(Layout, '/').setChildren([
    new Route(TimeLine, '', 'timeline')
  ]),
  new Route(NotFound, '/notFound'),
  new Route(SignIn, '/signIn', 'signin'),
  {path: '*', redirect: '/notFound'}
]

export default routes
