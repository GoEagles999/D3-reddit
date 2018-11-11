import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap'
import data from './data'

let transformed 

class App extends Component {
  componentWillMount() {
    data.forEach(elem => {
      elem.hour = new Date(elem.date).getHours()
      elem.day = new Date(elem.date).getDate()
    })
		transformed = data.filter(message => {
			return message.bot != true 
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
              <Chart type='hourly' data={transformed} />
            </Col>
            <Col xs={6}>
              <PageHeader>This Month</PageHeader>
              <Chart type='monthly' data={transformed} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
