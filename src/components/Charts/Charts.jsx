import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import PropTypes from 'prop-types'

import './Charts.css';

// 数据源
// const data = [
//   { genre: 'Sports', sold: 275, income: 2300 },
//   { genre: 'Strategy', sold: 115, income: 667 },
//   { genre: 'Action', sold: 120, income: 982 },
//   { genre: 'Shooter', sold: 350, income: 5271 },
//   { genre: 'Other', sold: 150, income: 3710 }
// ];

// 定义度量
// const cols = {
//   sold: { alias: '销售量' },
//   genre: { alias: '游戏种类' }
// };

class Charts extends Component {
    // constructor(props) {
    //   super(props);
    //   console.info('charts++++', this.props);
    // }

    render() {
      const {
        dataGraph,
        cols,
        type
      } = this.props;
      // console.info('+++++++', this.props);

      return (
        <Chart width={500} height={300} data={dataGraph} scale={cols}>
          <Axis name='genre' />
          <Axis name='sold' />
          <Legend position='bottom' dy={-50} />
          <Tooltip offset={100} />
          <Geom type={type} position='genre*sold' color='genre' />
        </Chart>
      )
    }
}

Charts.propTypes = {
  dataGraph: PropTypes.array,
  cols: PropTypes.object,
  type: PropTypes.string
}

export default Charts;
