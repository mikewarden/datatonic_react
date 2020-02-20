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
import BarChart2 from './BarChart2.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'


class App extends React.Component {
  render() {
  return (
    <div className="App">
    	<Navbar />
      <Container>
  <Row id="row1">
  </Row>
  <Row id="row2">
    <Col><br/>
      <h2 id="overview-text">Overview</h2>
      <hr/>
    </Col>
  </Row>
  <Row id="row3">
    <Col>
    	<Card border="light" >
    		
    		<Card.Body>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
    <Col>
    	<Card border="light" >
    		
    		<Card.Body>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
    <Col>
    	<Card border="light" >
    		
    		<Card.Body>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
  </Row>
  <Row id="row4">
    <Col>	
    	<Card border="light" >
    	
    		<Card.Body>
      			<Card.Title>
      				Sensitive Data Distribution by Data Sources
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<StackedChart1 />
    		</Card.Body>
  		</Card>
  	</Col>
    <Col>
    	<Card border="light" >
    		
    		<Card.Body>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
  </Row> 
  <Row id="row5">
    <Col>
    	<Card border="light" >
    		
    		<Card.Body>
      			<Card.Title>
      				Sensitive Info By Type
      			</Card.Title>
      			<Card.Text>
    				<PieChart1 />
      			</Card.Text>
      		
    		</Card.Body>
  		</Card>
    </Col>
    <Col>
    	<Card border="light" >
    		<Card.Body>
      			<Card.Title>
      				Sensitive Info By Category
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<PieChart2 />
    		</Card.Body>
  		</Card>
    </Col>
    <Col>
    	<Card border="light" >
    		<Card.Body>
      			<Card.Title>
      				Inspection Coverage	
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<BarChart1 />
    		</Card.Body>
  		</Card>
    </Col>
    <br/>
  </Row>
  <Row id="row6">
    <Col>
    	<Card border="light" >
    		
    		<Card.Body>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<BarChart2 />
    		</Card.Body>
  		</Card>
    </Col>
    <Col>
    	<Card border="light" >
    		
    		<Card.Body>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
    <Col>
    	<Card border="light" >
    		
    		<Card.Body>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
  </Row>
</Container>

    </div>
  );
}
}

export default App;
