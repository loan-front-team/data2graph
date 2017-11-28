import {
	SOURCEURLCONFIG
} from '../constants/ActionTypes'

const initialState = {
	url: 'localhost'
}

export default function sourceUrl(state = initialState, action) {
	switch (action.type) {
		case SOURCEURLCONFIG:
			return {
				url: 'http://test'
			}
		default:
			return state
	}
}