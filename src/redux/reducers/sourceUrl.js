import { SOURCEURLCONFIG } from '../constants/ActionTypes'

const initialState = {
	url: ''
}

export default function sourceUrl(state = initialState, action) {
	switch (action.type) {
		case SOURCEURLCONFIG:
			return {
				...state,
				url: action.payload.url
			}
		default:
			return state
	}
}
