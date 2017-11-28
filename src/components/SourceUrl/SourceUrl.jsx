import React from 'react'
import PropTypes from 'prop-types'
import {
	Input,
	Button,
	Row,
	Col
} from 'antd'
import {
	bindActionCreators
} from 'redux'
import './SourceUrl.css'
import { connect } from 'react-redux'
import { sourceconfig } from '$redux/actions'

const mapStateToProps = state => ({
	url: state.url
})

const mapDispatchToProps = dispatch => ({
	sourceconfig: bindActionCreators(sourceconfig, dispatch)
})

const SourceUrl = ({
	url,
	sourceconfig
}) => (
<div className='sourceUrl'>
	<Row>
  	    <Col span={5} offset={8}><Input defaultValue="请输入数据源地址" id="SourceUrl" /></Col>
  	    <Col span={3}><Button type="primary" onClick={sourceconfig}>获取数据</Button></Col>
    </Row>
</div>
)

SourceUrl.prototype.propTypes = {
	url: PropTypes.url,
	sourceconfig: PropTypes.func
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SourceUrl);