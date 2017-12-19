import React, { Component } from 'react'
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts'
import PropTypes from 'prop-types'

import './Charts.css';

class AreaCharts extends Component {
  render() {
    const {
      dataGraph
    } = this.props;
    let keys = [];
    for (let p in dataGraph[0]) {
      if (dataGraph[0].hasOwnProperty(p)) {
        keys.push(p);
      }
    }
    const item = keys[0].toString();
    const year = keys[1].toString();
    const value = keys[2].toString();
    const position = year + '*' + value;

    return (
      <Chart width={550} height={320} data={dataGraph} forceFit>
        <Axis name={year} />
        <Axis name={value} />
        <Legend />
        <Tooltip crosshairs={{type: 'line'}} />
        <Geom type='area' position={position} color={item} />
        <Geom type='line' position={position} size={2} color={item} />
      </Chart>
    )
  }
}

AreaCharts.propTypes = {
  dataGraph: PropTypes.array
}

export default AreaCharts;
