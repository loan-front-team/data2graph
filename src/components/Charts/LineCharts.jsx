import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import PropTypes from 'prop-types'
import DataSet from '@antv/data-set'

import './Charts.css';

class LineCharts extends Component {
  // constructor(props) {
  //   super(props);
  //   console.info('charts++++', this.props);
  // }

  render() {
    const {
      dataGraph
    } = this.props;
    // console.info('+++++++', dataGraph);

    const ds = new DataSet();
    const dv = ds.createView().source(dataGraph);

    let keys = [];
    for (let p in dataGraph[0]) {
      if (dataGraph[0].hasOwnProperty(p)) {
        keys.push(p);
      }
    }
    const x = keys[0];
    keys = keys.slice(1);
    // console.info(x);
    // console.info(keys);
    dv.transform({
      type: 'fold',
      fields: keys, // 展开字段集
      key: 'x', // key字段
      value: 'y' // value字段
    });
    // console.info(dv);
    const axis = x + '*y';
    // console.info(axis);
    const cols = {
    }
    return (
      <Chart width={550} height={320} data={dv} scale={cols} forceFit>
        <Axis name={x} />
        <Axis name='y' />
        <Tooltip crosshairs={{type: 'y'}} />
        <Legend />
        <Geom type='line' position={axis} size={2} color={'x'} shape={'smooth'} />
        <Geom type='point' position={axis} size={4} color={'x'} shape={'circle'} style={{stroke: '#fff', lineWidth: 1}} />
      </Chart>
    )
  }
}

LineCharts.propTypes = {
  dataGraph: PropTypes.array
}

export default LineCharts;
