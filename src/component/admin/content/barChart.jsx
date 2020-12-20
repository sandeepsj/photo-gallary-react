import React, { Component } from "react";
import BarChart from "react-bar-chart";
class BarChartComponent extends Component {
  state = { width: 500 };

  margin = { top: 20, right: 80, bottom: 30, left: 100 };

  render() {
    return (
      <BarChart
        ylabel="Quantity"
        width={this.state.width}
        height={200}
        margin={this.margin}
        data={this.props.data}
      />
    );
  }
}

export default BarChartComponent;
