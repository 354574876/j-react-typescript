import { createStore, applyMiddleware } from 'redux'
import createRootReducer from './reducers'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from './saga/index'
export const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)
sagaMiddleware.run(rootSaga)

export default store
