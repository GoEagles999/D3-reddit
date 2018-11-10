import React, { Component } from 'react'
import * as d3 from 'd3'

class Chart extends Component {
    generateChart(data) {
      console.log(data)
      document.getElementById(this.props.type).style.backgroundColor = 'red'
    }
    componentDidMount() {
      let { type, data } = this.props
      switch(type) {
        case 'hourly':
          data = d3.nest()
            .key(data => data.hour)
            .entries(data)
          break
        case 'monthly':
          data = d3.nest()
            .key(data => data.day)
            .entries(data)
          break
      }
      this.generateChart(data)
    }
    render() {
      const { type } = this.props
      return (
        <div id={type}>
          Chart of {type}
        </div>
      )
    }
  }

  export default Chart
