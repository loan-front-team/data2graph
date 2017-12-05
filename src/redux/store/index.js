import configureStore from './configureStore'
import rootsaga from '../sagas'
import { sagaMiddleware } from './middlewares'

const store = configureStore()

sagaMiddleware.run(rootsaga)

export default store
