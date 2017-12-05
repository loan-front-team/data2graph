import { all } from 'redux-saga/effects';

import sourceconfigWatch from './sourceUrl'

// 返回 saga，供 redux 的中间件使用
export default function* rootsaga() {
	yield all([sourceconfigWatch()]);
}
