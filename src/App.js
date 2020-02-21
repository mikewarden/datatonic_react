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
import BarChart3 from './BarChart3.js';
import BarChart4 from './BarChart4.js';
import AsideMenu from './AsideMenu.js';
import ProgressBar from './ProgressBar.js';
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
    </Col>
    <Col><br/>
      <h6 id="scan-text">Last scan <strong>4 hours ago</strong></h6>
    </Col>

  </Row>
  <hr/>
  <Row id="row3">
    <Col id="row3_col1">
    	
    	<Card className="card_style">
    		<div className="security_issues_card"></div>
    		<Card.Body className="card_style">
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
 
    		</Card.Body>
  		</Card>
    </Col>
    <Col id="row3_col2">
    	
    	<Card className="card_style">
    		<div className="security_issues_card"></div>
    		<Card.Body className="card_style">
    			
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
          			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
    <Col id="row3_col3">
    
    	<Card  className="card_style">
    		<div className="security_issues_card"></div>
    		<Card.Body className="card_style">
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
  </Row>
  <Row id="row4">
    <Col xs={7}>	
    	<Card border="light" className="card_style">
    	
    		<Card.Body className="card_style">
      			<Card.Title>
      				Sensitive Data Distribution by Data Sources
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<StackedChart1 />
      			<p id="chart1_bottom_text">(Sensitive Info Type)</p>
    		</Card.Body>
  		</Card>
  	</Col>
    <Col xs={5}>
    	<Card border="light" className="card_style">
    		
    		<Card.Body className="card_style" id="notification_card">
      			<Card.Title>
      				Notification
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<AsideMenu />
    		</Card.Body>
  		</Card>
    </Col>
  </Row> 
  <Row id="row5">
    <Col xs={4}>
    	<Card border="light" id="pieChart1Card" className="card_style">
    		
    		<Card.Body className="card_style">
      			<Card.Title>
      				Sensitive Info By Type
      			</Card.Title>
      			<Card.Text>
    				<PieChart1 />
      			</Card.Text>
      		
    		</Card.Body>
  		</Card>
    </Col>
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		<Card.Body className="card_style">
      			<Card.Title>
      				Sensitive Info By Category
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<PieChart2 />
    		</Card.Body>
  		</Card>
    </Col>
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		<Card.Body className="card_style">
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
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		
    		<Card.Body className="card_style">
      			<Card.Title>
      				Count of Sensitive Info Type
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<BarChart2 />
    		</Card.Body>
  		</Card>
    </Col>
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		
    		<Card.Body id="chart3_style" className="card_style">
      			<Card.Title> 
      				Count of Sensitive Info Category
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<BarChart3 />
    		</Card.Body>
  		</Card>
    </Col>
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		
    		<Card.Body className="card_style">
      			<Card.Title>
      				Sensitive Data Record Count
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<BarChart4 />
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
