import React, { Component } from 'react'
import { Carousel } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BarCharts from './../Charts/BarCharts'
import LineCharts from './../Charts/LineCharts'
import PieCharts from './../Charts/PieCharts'
import AreaCharts from './../Charts/AreaCharts'
import DiscCharts from './../Charts/DiscCharts'
// import MapCharts from './../Charts/MapCharts'

import '../Charts/Charts.css'
import './DashBroad.css'

class DashBroad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      chartsResourceUrl: []
    };
  }
  componentDidMount() {
    const { url } = this.props;
    const method = 'query';
    fetch(`${url}\\${method}`).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status' + response.status);
      }
      response.json().then((responseJson) => {
        this.setState({chartsResourceUrl: responseJson.chartsResourceUrl})
      }).catch((error) => {
        this.setState({ chartsResourceUrl: [] })
      })
    }).catch((error) => {
      this.setState({ chartsResourceUrl: [] })
    });
  }
  renderChartsType(item) {
    let charts = [];
    switch (item.type) {
      case 'A': charts.push(<BarCharts key={Math.random()} dataGraph={item.dataGraph} />); break;
      case 'B': charts.push(<LineCharts key={Math.random()} dataGraph={item.dataGraph} />); break;
      case 'C': charts.push(<PieCharts key={Math.random()} dataGraph={item.dataGraph} />); break;
      case 'D': charts.push(<AreaCharts key={Math.random()} dataGraph={item.dataGraph} />); break;
      case 'E': charts.push(<DiscCharts key={Math.random()} dataGraph={item.dataGraph} />); break;
      // case 'F': charts.push(<MapCharts dataGraph={item.dataGraph} />); break;
      default : break;
    }
    return charts;
  }
  render() {
    const pageSize = 4;
    const array = this.state.chartsResourceUrl;
    const pageNo = Math.ceil(array.length / pageSize);
    let list = [];
    for (let i = pageNo; i > 0; i--) {
      list[i - 1] = [...pagination(i, pageSize, array)]
    }
    // <BarCharts dataGraph={item.dataGraph} cols={item.cols} />
    return (
      <Carousel autoplay className='marginTop'>
        {
          list.map((val, index) => {
            return (
              <div key={index}>{
                val.map((item, index) => {
                  return (
                    <div key={index * 0.1} className='warp'>
                      {this.renderChartsType(item)}
                    </div>
                  )
                })
              }
              </div>
            )
          })
        }
      </Carousel>
    );
  }
}

DashBroad.propTypes = {
  url: PropTypes.string
}

// const mapStateToProps = state => {
//   return {
//     chartsResourceUrl: state.DashBroad.chartsResourceUrl
//   }
// }

const mapStateToProps = state => ({
  url: state.SourceUrl.url
})

export default connect(
	mapStateToProps
)(DashBroad);

function pagination(pageNo, pageSize, array) {
  let offset = (pageNo - 1) * pageSize;
  return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
}
