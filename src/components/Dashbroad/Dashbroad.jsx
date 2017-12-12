import React, { Component } from 'react'
// import { Carousel } from 'antd'
import ReactSwipe from 'react-swipe'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Charts from './../Charts/Charts';

import '../Charts/Charts.css';
import './DashBroad.css';

class DashBroad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartsResourceUrl: [],
      index: 0
    };
  }

  componentDidMount() {
    this.setState(
      {
        chartsResourceUrl: this.props.chartsResourceUrl
      });
    // console.log(this.props.chartsResourceUrl)
  }

  render() {
    const {
      chartsResourceUrl
    } = this.props;
    console.log(this.props);
    if (chartsResourceUrl.length !== 0) {
      var list = (chartsResourceUrl) => {
        // console.log(chartsResourceUrl);
        var res = [];
        let childWarp = [];
        for (var i = 0; i < chartsResourceUrl.length; i++) {
          childWarp.push(
            <div key={i} className='warp'>
              <Charts dataGraph={chartsResourceUrl[i].dataGraph} type={chartsResourceUrl[i].type} cols={chartsResourceUrl[i].cols} />
            </div>
          )
          if ((i + 1) % 4 === 0 || (i + 1) === chartsResourceUrl.length) {
            res.push(
              <div key={i}>
                {childWarp}
              </div>
            );
            childWarp = [];
          }
        }
        return res;
      }
    }
    // console.info(list(chartsResourceUrl));
    // var length = Math.ceil(chartsResourceUrl.length / 4);
    // var liOption = [];
    // for (let i = 0; i < length; i++) {
    //   liOption.push(
    //     <li className={this.state.index === 0 ? 'selected' : ''}>{i + 1}</li>
    //   )
    // }
    let opt = {
      auto: 1000,
      callback: (index) => {
        // console.log(index);
        this.setState({
          index: index
        });
      }

    }
    // {list(chartsResourceUrl)}
    return (
      <div>
        <ReactSwipe className='carousel' swipeOptions={opt}>
          {list(chartsResourceUrl)}
        </ReactSwipe>
      </div>
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
