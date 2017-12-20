import React, { Component } from 'react'
import { Chart, Axis, Geom, Tooltip, Coord, Legend, Label } from 'bizcharts'
import PropTypes from 'prop-types'
import DataSet from '@antv/data-set'

import './Charts.css';

class PieCharts extends Component {
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
    const count = keys[1].toString();
    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(dataGraph).transform({
      type: 'percent',
      field: count,
      dimension: item,
      as: 'percent'
    });
    const cols = {
      percent: {
        formatter: val => {
          val = (val * 100) + '%';
          return val;
        }
      }
    }
    const items = {item} + '*percent'

    return (
      <Chart width={550} height={320} data={dv} scale={cols} padding={[ 20, 100, 20, 0 ]} forceFit>
        <Coord type='theta' radius={0.75} />
        <Axis name='percent' label={{textStyle: {fill: '#fff'}}} />
        <Legend position='right' offsetX={-30} textStyle={{fill: '#fff'}} />
        <Tooltip
          showTitle={false}
        />
        <Geom
          type='intervalStack'
          position='percent'
          color={item}
          tooltip={[items, (item, percent) => {
            percent = percent * 100 + '%';
            return {
              name: item,
              value: percent
            };
          }]}
          style={{lineWidth: 1, stroke: '#fff'}}
        >
          <Label content='percent' textStyle={{fill: '#fff'}} formatter={(val, item) => {
              return item.point.item + ':' + val
            }
          } />
        </Geom>
      </Chart>
    )
  }
}

PieCharts.propTypes = {
  dataGraph: PropTypes.array
}

export default PieCharts;
