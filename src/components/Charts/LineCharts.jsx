import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import PropTypes from 'prop-types'

import './Charts.css';

class LineCharts extends Component {
  // constructor(props) {
  //   super(props);
  //   console.info('charts++++', this.props);
  // }

  render() {
    const {
      dataGraph,
      cols
    } = this.props;
    // console.info('+++++++', this.props);

    return (
      <Chart width={550} height={320} data={dataGraph} scale={cols} forceFit>
        <Axis name='genre' />
        <Axis name='sold' />
        <Legend position='bottom' dy={-50} />
        <Tooltip />
        <Geom type='line' position='genre*sold' size={2} />
        <Geom type='point' position='genre*sold' size={4} shape={'circle'} style={{stroke: '#fff', lineWidth: 1}} />
      </Chart>
    )
  }
}

LineCharts.propTypes = {
  dataGraph: PropTypes.array,
  cols: PropTypes.object
}

export default LineCharts;
