import React, { Component } from 'react';
import { Chart, Geom, Tooltip, Legend, Coord } from 'bizcharts';
import PropTypes from 'prop-types'

import './Charts.css';

class PieCharts extends Component {
  // constructor(props) {
  //   super(props);
  //   console.info('charts++++', this.props);
  // }

  render() {
    const {
      dataGraph
    } = this.props;
    // console.info('+++++++', this.props);

    return (
      <Chart data={dataGraph} forceFit>
        <Coord type='polar' innerRadius={0.2} />
        <Tooltip />
        <Legend position='right' offsetX={-50} />
        <Geom type='interval' color='genre' position='genre*sold' style={{stroke: '#fff', lineWidth: 1}} />
      </Chart>
    )
  }
}

PieCharts.propTypes = {
  dataGraph: PropTypes.array
}

export default PieCharts;
