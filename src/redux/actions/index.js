import * as types from '../constants/ActionTypes';

export const sourceconfig = (url) => {
	return {
		type: types.SOURCEURLCONFIG,
		payload: {
			url: url,
			method: 'query'
		}
	};
}
