import {
	applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export const middlewares = applyMiddleware(
	// you can apply you middleware here
	sagaMiddleware
);