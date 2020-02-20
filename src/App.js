import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Stack } from '@devexpress/dx-react-chart';
import StackedChart1 from './StackedChart1.js';
import Navbar from './Navbar.js';
import PieChart1 from './PieChart1.js';
import PieChart2 from './PieChart2.js';
import BarChart1 from './BarChart1.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class App extends React.Component {
  render() {
  return (
    <div className="App">

      <Container>
  <Row id="row1">
  	<Col><Navbar /></Col>
  </Row>
  <Row id="row2">
    <Col><br/>
      <h2 id="overview-text">Overview</h2>
      <hr/>
    </Col>
  </Row>
  <Row id="row3">
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row id="row4">
    <Col><StackedChart1 /></Col>
    <Col>Menu Aside</Col>
  </Row> 
  <Row id="row5">
    <Col><PieChart1 /></Col>
    <Col><PieChart2 /></Col>
    <br/>
  </Row>
  <Row id="row6">
    <Col><BarChart1 /></Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

    </div>
  );
}
}

export default App;
