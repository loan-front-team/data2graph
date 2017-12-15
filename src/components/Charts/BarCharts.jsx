import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import PropTypes from 'prop-types'

import './Charts.css';

class BarCharts extends Component {
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
        <Chart width={550} height={320} data={dataGraph} scale={cols}>
          <Axis name='genre' />
          <Axis name='sold' />
          <Legend position='bottom' dy={-50} />
          <Tooltip offset={100} crosshairs={{type: 'y'}} />
          <Geom type='interval' position='genre*sold' color='genre' />
        </Chart>
      )
    }
}

BarCharts.propTypes = {
  dataGraph: PropTypes.array,
  cols: PropTypes.object
}

export default BarCharts;
