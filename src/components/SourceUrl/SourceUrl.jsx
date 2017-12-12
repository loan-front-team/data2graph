import React, { Component } from 'react'
import {Link} from 'react-router'
import { Button, Input, Row, Col } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SourceUrl.css'
import { sourceconfig } from '$redux/actions'

class SourceUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'url': ' '
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
  	if (e) e.preventDefault();
    this.setState({url: e.target.value});
  }

  handleSubmit = (e) => {
  	const {
  	  sourceDispatch
    } = this.props;
  	// console.info(this.props);

    if ((this.state.url).trim() !== '') {
       sourceDispatch(this.state.url);
    } else {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div className='sourceUrl'>
        <Row>
          <Col span={5} offset={8}><Input onChange={this.handleChange} /></Col>
          <Col span={3}>
            <Link to='/dashbroad'><Button type='primary' onClick={this.handleSubmit}>获取数据</Button></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

SourceUrl.propTypes = {
  sourceDispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  url: state.SourceUrl.url
})

const mapDispatchToProps = dispatch => ({
  sourceDispatch: bindActionCreators(sourceconfig, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SourceUrl);
