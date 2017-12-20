import React, { Component } from 'react'
import { Chart, Geom, Axis, Coord, Guide, Shape } from 'bizcharts'
import PropTypes from 'prop-types'

import './Charts.css';


class DiscCharts extends Component {
  render() {
    const {
      dataGraph
    } = this.props;
    const maxValue = dataGraph[0].maxValue;
    const minValue = dataGraph[0].minValue;
    const val = dataGraph[0].relValue;
    const lineWidth = 25;
    const first = minValue + (maxValue - minValue) / 3;
    const second = minValue + ((maxValue - minValue) / 3) * 2;
    const tickInterval = first / 2;
    const { Arc, Html } = Guide;

    // 自定义Shape 部分
    Shape.registerShape('point', 'pointer', {
      drawShape(cfg, group) {
        let point = cfg.points[0]; // 获取第一个标记点
        point = this.parsePoint(point);
        const center = this.parsePoint({ // 获取极坐标系下画布中心点
          x: 0,
          y: 0
        });
        // 绘制指针
        group.addShape('line', {
          attrs: {
            x1: center.x,
            y1: center.y,
            x2: point.x,
            y2: point.y - 100,
            stroke: cfg.color,
            lineWidth: 5,
            lineCap: 'round'
          }
        });
        return group.addShape('circle', {
          attrs: {
            x: center.x,
            y: center.y,
            r: 30,
            stroke: cfg.color,
            lineWidth: 4.5,
            fill: '#fff'
          }
        });
      }
    });
    const color = ['#0086FA', '#FFBF00', '#F5222D'];
    const cols = {
      'value': {
        min: minValue,
        max: maxValue,
        tickInterval: tickInterval,
        nice: false
      }
    }
    return (
      <Chart width={550} height={320} data={dataGraph} scale={cols} padding={[ 0, 0, 100, 0 ]} forceFit>
        <Coord type='polar' startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.75} />
        <Axis name='value' zIndex={2} label={{
          offset: -20,
          textStyle: {
            fontSize: 18,
            fill: '#fff',
            textAlign: 'center',
            textBaseline: 'middle'
          }}} tickLine={{
          length: -24,
          stroke: '#fff',
          strokeOpacity: 1
        }}
        />
        <Guide>
          <Arc zIndex={0} start={[ minValue, 0.965 ]} end={[ maxValue, 0.965 ]} style={{ // 底灰色
            stroke: '#aaa',
            lineWidth
          }} />
          { val >= first && <Arc zIndex={1} start={[ minValue, 0.965 ]} end={[ val, 0.965 ]} style={{ // 底灰色
            stroke: color[0],
            lineWidth
          }} />}
          { val >= second && <Arc zIndex={1} start={[ first, 0.965 ]} end={[ second, 0.965 ]} style={{ // 底灰色
            stroke: color[1],
            lineWidth
          }} />}
          { val >= second && val < maxValue && <Arc zIndex={1} start={[ second, 0.965 ]} end={[ val, 0.965 ]} style={{ // 底灰色
            stroke: color[2],
            lineWidth
          }} />}
          { val >= first && val < second && <Arc zIndex={1} start={[ first, 0.965 ]} end={[ val, 0.965 ]} style={{ // 底灰色
            stroke: color[1],
            lineWidth
          }} />}
          { val < first && <Arc zIndex={1} start={[ minValue, 0.965 ]} end={[ val, 0.965 ]} style={{ // 底灰色
            stroke: color[0],
            lineWidth
          }} />}
          <Html position={[ '50%', '95%' ]} html={() => {
            return ('<div style="width: 300px;text-align: center;font-size: 12px!important;"><p style="font-size: 1.5em; color: #fff;margin-top: 10px;">合格率</p><p style="font-size: 2.5em;color: #fff;margin: 0;">' + Math.round(val / maxValue * 100) + '%</p></div>')
          }}
          />
        </Guide>
        <Geom type='point' position='value*1' shape='pointer' color='#1890FF' active={false} style={{stroke: '#fff', lineWidth: 1}}
        />
      </Chart>);
  }
}

DiscCharts.propTypes = {
  dataGraph: PropTypes.array
}

export default DiscCharts;
