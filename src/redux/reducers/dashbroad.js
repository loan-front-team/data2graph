import { GODASHBROAD } from '../constants/ActionTypes'

const initialState = {
	chartsResourceUrl: null
}

export default function dashbroad(state = initialState, action) {
	switch (action.type) {
		case GODASHBROAD:
			return {
				...state,
				chartsResourceUrl: action.payload.chartsResourceUrl
			}
		default:
			return state
	}
}