import React, { Component } from 'react'
import { Carousel } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class DashBroad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
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
    const {
      number
    } = this.props;

    var list = (length) => {
          var res = [];
          for (var i = 0; i < length; i++) {
            res.push(<div key={i}>hello react</div>)
          }
          return res
        }
    return (
      <Carousel verticle>
        {list(number)}
      </Carousel>
    );
  }
}

DashBroad.propTypes = {
  number: PropTypes.number
}

const mapStateToProps = state => {
  return {
    number: state.DashBroad.number
  }
}

export default connect(
	mapStateToProps
)(DashBroad);
