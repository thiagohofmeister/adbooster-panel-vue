import Route from './Route'
import Layout from '@/components/Template/Layout'
import Dashboard from '@/views/Dashboard'

import AccessError from '@/views/AccessError'
import NotFound from '@/views/NotFound'

/**
 * Rotas da aplicação.
 *
 * @type {Route[]}
 */
const routes = [
  new Route(Layout, '/').setChildren([
    new Route(Dashboard, '', 'dashboard')
  ]),
  new Route(AccessError, '/accessError'),
  new Route(NotFound, '/notFound'),
  {path: '*', redirect: '/notFound'}
]

export default routes
