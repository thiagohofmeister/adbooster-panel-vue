import Route from './Route'
import Layout from '@/components/Template/Layout'
import TimeLine from '@/views/TimeLine'
import Search from '@/views/Search'
import AnnouncementDetail from '@/views/Announcement/Detail'

import NotFound from '@/views/NotFound'
import SignIn from '@/views/SignIn'

/**
 * Rotas da aplicação.
 *
 * @type {Route[]}
 */
const routes = [
  new Route(Layout, '/').setChildren([
    new Route(TimeLine, '', 'timeline'),
    new Route(Search, '/search/:search', 'search'),
    new Route(AnnouncementDetail, '/announcement/:code/:sharedCode')
  ]),
  new Route(NotFound, '/notFound'),
  new Route(SignIn, '/signIn', 'signin'),
  {path: '*', redirect: '/notFound'}
]

export default routes
