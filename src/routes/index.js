import Loadable from 'react-loadable'
import MainView from 'views/MainView'

const AsyncView = Loadable({
  // if you have your own loading component,
  // you should consider add it here
  loading: () => null
})

export default [{
  path: '/',
  component: MainView
}]