import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
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
              <PageHeader>Today</PageHeader>
              <Chart type='hourly' data={data} />
            </Col>
            <Col xs={6}>
              <PageHeader>This Month</PageHeader>
              <Chart type='monthly' data={data} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
