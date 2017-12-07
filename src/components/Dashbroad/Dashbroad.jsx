import React, { Component } from 'react'
import { Carousel } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Charts from './../Charts/Charts';

import '../Charts/Charts.css';

class DashBroad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartsResourceUrl: []
    };
  }

  componentDidMounted() {
    this.setState(
      {
        chartsResourceUrl: this.props.chartsResourceUrl
      });
  }

  render() {
    const {
      chartsResourceUrl
    } = this.props;

    var list = (chartsResourceUrl) => {
      console.log(chartsResourceUrl)
          var res = [];
          let childWarp = [];
          for (var i = 0; i < chartsResourceUrl.length; i++) {
            childWarp.push(
              <div className='warp'key={i}>
                <Charts />
              </div>
            )
            if ((i + 1) % 4 === 0 || (i + 1) === chartsResourceUrl.length) {
              res.push(
                <div>
                  {childWarp}
                </div>
              );
              childWarp = [];
            }
          }
          return res;
        }
    return (
      <Carousel verticle>
        {list(chartsResourceUrl)}
      </Carousel>
    );
  }
}

DashBroad.propTypes = {
  chartsResourceUrl: PropTypes.array
}

const mapStateToProps = state => {
  return {
    chartsResourceUrl: state.DashBroad.chartsResourceUrl
  }
}

export default connect(
	mapStateToProps
)(DashBroad);
