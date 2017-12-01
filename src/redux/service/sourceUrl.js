import request from '../../utils/request';
export function fetch({
	url,
	method
}) {
	return request(`${url}\\${method}`, {
		method: 'GET',
		mode: 'cors'
	}).then(function(data) {
		const ret = {
			data,
			headers: {}
		};

		return ret;
	}, function(err) {
		console.log('获取数据失败！');
		const data = {
			number: 1
		};
		const ret = {
			data,
			headers: {}
		}
		return ret;
	});
}