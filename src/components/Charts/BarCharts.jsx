import React, { Component } from 'react'
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts'
import PropTypes from 'prop-types'
import DataSet from '@antv/data-set'

import './Charts.css';

class BarCharts extends Component {
    render() {
      const {
        dataGraph
      } = this.props;
      const ds = new DataSet();
      const dv = ds.createView().source(dataGraph);
      let keys = [];
      for (let p in dataGraph[0]) {
        if (dataGraph[0].hasOwnProperty(p)) {
          keys.push(p);
        }
      }
      const name = keys[0];
      keys = keys.slice(1);
      dv.transform({
        type: 'fold',
        fields: keys, // 展开字段集
        key: 'x', // key字段
        value: 'y' // value字段
      });
      return (
        <Chart width={550} height={320} data={dv} >
          <Axis name='x' label={{textStyle: {fill: '#fff'}}} />
          <Axis name='y' label={{textStyle: {fill: '#fff'}}} />
          <Legend position='bottom' dy={-50} textStyle={{fill: '#fff'}} />
          <Tooltip offset={100} crosshairs={{type: 'y'}} />
          <Geom type='intervalStack' position='x*y' color={name} />
        </Chart>
      )
    }
}

BarCharts.propTypes = {
  dataGraph: PropTypes.array
}

export default BarCharts;
