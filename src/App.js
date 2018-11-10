import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import { Grid, Row, Col } from 'react-bootstrap'
import data from './data'

class App extends Component {
  componentWillMount() {
    data.forEach(elem => {
      elem.hour = new Date(elem.date).getHours()
      elem.day = new Date(elem.date).getDate()
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Data Visualization with D3.js
        </header>
        <Grid>
          <Row>
            <Col xs={6}>
              <div>Today</div>
              <Chart type='hourly' data={data} />
            </Col>
            <Col xs={6}>
              <div>This Month</div>
              <Chart type='monthly' data={data} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
