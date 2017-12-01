import React, { Component } from 'react'
import {
	Carousel
} from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class DashBroad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  componentDidMounted() {
    this.setState(
      {
        number: this.props.number
      });
  }

  render() {
    const {
      number
    } = this.props;

    var list = (length) => {
          var res = [];
          for (var i = 0; i < length; i++) {
            res.push(<div key={i}>hello react</div>)
          }
          return res
        }
    return (
      <Carousel verticle>
        {list(number)}
      </Carousel>
    );
  }
}

DashBroad.propTypes = {
  number: PropTypes.number
}

const mapStateToProps = state => {
  return {
    number: state.DashBroad.number
  }
}

export default connect(
	mapStateToProps
)(DashBroad);