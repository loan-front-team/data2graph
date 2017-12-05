import {
	takeEvery,
	call,
	put
} from 'redux-saga/effects';

import * as sourceconfigService from '../service/sourceUrl'
import * as types from '../constants/ActionTypes';

function* getSourceData({
	payload
}) {
	// 这里调用下文提及的 异步调用
	// 使用 yield 语句（可阻塞、非阻塞）
	// 可以发起其它 action 的 dispatch，不管是改变 store 的 action 还是 异步请求 action
	// 使用到的 effects：put, call, select, fork 等
	try {
		const {
			data: {
				number
			}
		} = yield call(sourceconfigService.fetch, payload);

		yield put({
			type: types.GODASHBROAD,
			payload: {
				number: number
			}
		});
	} catch (err) {
		console.log(err);
	}
}

export default function* sourceconfig() {
	// 由 saga 来监听这个 action 的 dispatch
	// 一旦在程序中任何地方被 dispatch，则调用第二个参数的 Generator 函数
	try {
		yield takeEvery(types.SOURCEURLCONFIG, getSourceData);
	} catch (err) {
		console.log(err);
	}

	// more takeEvery
}
