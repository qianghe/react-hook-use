import loadable from '@loadable/component'
import PageView from '@pages/PageView/index'

export default [{
  path: '/library/pageview',
  component: PageView
}, {
  path: '/library/pageobserv',
  component: loadable(() => import('@pages/PageObservable'))
}]