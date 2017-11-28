import {
	combineReducers
} from 'redux'
import counter from './counter'
import SourceUrl from './sourceUrl'

export default combineReducers({
	counter,
	SourceUrl
})