import { GODASHBROAD } from '../constants/ActionTypes'

const initialState = {
	chartsResourceUrl: []
}

export default function dashbroad(state = initialState, action) {
  // console.info(action.type);
	switch (action.type) {
		case GODASHBROAD:
      // console.log({
      //   ...state,
      //   chartsResourceUrl: action.payload.chartsResourceUrl
      // })
			return {
				...state,
				chartsResourceUrl: action.payload.chartsResourceUrl
			}
		default:
			return state
	}
}
