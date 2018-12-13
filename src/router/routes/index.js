import Route from './Route'
import Layout from '@/components/Template/Layout'
import TimeLine from '@/views/TimeLine'
import Search from '@/views/Search'
import AnnouncementDetail from '@/views/Announcement/Detail'

import CheckoutCart from '@/views/Checkout/Cart'
import CheckoutShipping from '@/views/Checkout/Shipping'
import CheckoutPayment from '@/views/Checkout/Payment'
import CheckoutConfirm from '@/views/Checkout/Confirm'

import OrderDetail from '@/views/Order/Detail'

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
    new Route(AnnouncementDetail, '/announcement/:code/:sharedCode'),
    new Route(CheckoutCart, '/checkout/cart'),
    new Route(CheckoutShipping, '/checkout/shipping'),
    new Route(CheckoutPayment, '/checkout/payment'),
    new Route(CheckoutConfirm, '/checkout/confirm'),
    new Route(OrderDetail, '/orders/:code')
  ]),
  new Route(NotFound, '/notFound'),
  new Route(SignIn, '/signIn', 'signin'),
  {path: '*', redirect: '/notFound'}
]

export default routes
