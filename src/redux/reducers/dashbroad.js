import { GODASHBROAD } from '../constants/ActionTypes'

const initialState = {
	number: 0
}

export default function dashbroad(state = initialState, action) {
	switch (action.type) {
		case GODASHBROAD:
			return {
				...state,
				number: action.payload.number
			}
		default:
			return state
	}
}
