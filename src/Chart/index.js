import React, { Component } from 'react'
import * as d3 from 'd3'

class Chart extends Component {
    generateChart(data) {
      console.log(data)
      let margin = {top: 50, right: 50, bottom: 50, left: 50}
      , width = 500 - margin.left - margin.right
      , height = 500 - margin.top - margin.bottom
      , n
      switch (this.props.type) {
        case 'hourly':
          n = 24
          break
        case 'monthly':
          n = 31
          break
      }
      const svg = d3
        .select(`#${this.props.type}`)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      const xScale = d3.scaleLinear()
        .domain([0, n-1])
        .range([0, width]);

      // customize the y scale value of 500 to expected number of messages
      const yScale = d3.scaleLinear()
        .domain([0, 30])
        .range([height, 0]);

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale));

      svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale));

      const line = d3.line()
        .x(function(d, i) { return xScale(d.key); })
        .y(function(d) { return yScale(d.values.length); })

        //var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })
        const dataset = data
        svg.append("path")
            .datum(dataset)
            .attr("class", "line")
            .attr("d", line);

    }
    componentDidMount() {
      let { type, data } = this.props
      switch (type) {
        case 'hourly':
          data = d3.nest()
            .key(data => data.hour)
            .sortKeys((a, b) => a - b)
            .entries(data)
          break
        case 'monthly':
          data = d3.nest()
            .key(data => data.day)
            .sortKeys((a, b) => a - b)
            .entries(data)
          break
      }
      this.generateChart(data)
    }
    render() {
      const { type } = this.props
      return (
        <div id={type}>
        </div>
      )
    }
  }

  export default Chart
