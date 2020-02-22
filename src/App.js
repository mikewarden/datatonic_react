import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Stack } from '@devexpress/dx-react-chart';
import ProgressBar from 'react-bootstrap/ProgressBar'
import StackedChart1 from './StackedChart1.js';
import Navbar from './Navbar.js';
import PieChart1 from './PieChart1.js';
import PieChart2 from './PieChart2.js';
import BarChart1 from './BarChart1.js';
import BarChart2 from './BarChart2.js';
import BarChart3 from './BarChart3.js';
import BarChart4 from './BarChart4.js';
import AsideMenu from './AsideMenu.js';
import TimelineIcon from '@material-ui/icons/Timeline';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'


class App extends React.Component {

	constructor() {
    super();
      this.state = {
      	sources: 0,
        issues: 0,
    	dbs: 0,
    	tables: 0,
    	files: 0,
    }
  }

   componentDidMount() {
    fetch("http://localhost:8080/data_entries")
.then((res) => res.json())
.then((response) => {
  this.setState({
    issues: response[1].issuesResolved,
    sources: response[1].email,
    dbs: response[1].coverageDBs,
    tables: response[1].coverageTables,
    files: response[1].coverageFiles,
  })
  console.log(this.state.swiftCode)
}).catch((err) => console.log(err));
  }

  render() {
  return (
    <div className="App">
    	<Navbar />
      <Container>
  <Row id="row1">
  </Row>
  <Row id="row2">
    <Col>
      <h2 id="overview-text">Overview</h2>
    </Col>
    <Col><br/>
      <h6 id="scan-text">Last scan <strong>4 hours ago</strong></h6>
    </Col>

  </Row>
  <hr/>
  <Row id="row3">
    <Col id="row3_col1" xs={3}>
    	
    	<Card className="card_style">
    		<div className="security_issues_card"></div>
    		<Card.Body className="card_style">
    		<p className="centered_text">Security Issues Resolved</p>
    		<h2 id="issues_state">{this.state.issues}</h2>
    		<TimelineIcon id="graph_icon1"/>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
 
    		</Card.Body>
  		</Card>
    </Col>
    <Col id="row3_col2" xs={5}>
    	
    	<Card className="card_style">
    		<div className="security_issues_card"></div>
    		<Card.Body className="card_style">
    			<p className="centered_text">Inspection Coverage</p>
    			<Row>
    			<Col>
    				<h2 class="sources_state">{this.state.sources}<span className="inspection_denominator">/50</span></h2>
    				<ProgressBar now={this.state.sources} />
    				<span className="sens_data_text">Data Sources</span>
    			</Col>
    			<Col>
    				<h2 class="sources_state">{this.state.dbs}<span className="inspection_denominator">/50</span></h2>
    				<ProgressBar now={this.state.dbs} />
    				<span className="sens_data_text">Databases</span>
    			</Col>
    			<Col>
    				<h2 class="sources_state">{this.state.tables}<span className="inspection_denominator">/7853</span></h2>
    				<ProgressBar now={this.state.tables} />
    				<span className="sens_data_text">Tables</span>
    			</Col>
    		</Row>
      			<Card.Title>
      				
      			</Card.Title>
      			<Card.Text>
          			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
    <Col id="row3_col3" xs={4}>
    
    	<Card  className="card_style">
    		<div className="security_issues_card"></div>
    		<Card.Body className="card_style">
    		<p className="centered_text">Sensitive Data Locations</p>
    		<Row>
    			<Col>
    				<h2 id="sources_state">{this.state.sources}</h2>
    				<span className="sens_data_text">Data Sources</span>
    			</Col>
    			<Col>
    				<h2 id="dbs_state">{this.state.dbs}</h2>
    				<span className="sens_data_text">Databases</span>
    			</Col>
    			<Col>
    				<h2 id="tables_state">{this.state.tables}</h2>
    				<span className="sens_data_text">Tables</span>
    			</Col>
    			<Col>
    				<h2 id="files_state">{this.state.files}</h2>
    				<span className="sens_data_text">Files</span>
    			</Col>
    		</Row>
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
      			<Row>
      			<Col xs={2}>
      			<p className="vertical_text" >(Data Source)</p>
      			</Col>
      			<Card.Text>
    
      			</Card.Text>
      			<Col xs={10}>
      			<BarChart1 />
      			</Col>
      			</Row>
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
      			<Row>
      			<Col xs={2}>
      			<p className="vertical_text" >(Data Source)</p>
      			</Col>
      			<Card.Text>
    
      			</Card.Text>
      			<Col xs={10}>
      			<BarChart2 />
      			</Col>
      			</Row>
      			<Card.Text>
    
      			</Card.Text>
      			
    		</Card.Body>
  		</Card>
    </Col>
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		
    		<Card.Body id="chart3_style" className="card_style">
      			<Card.Title> 
      				Count of Sensitive Info Category
      			</Card.Title>
      			<Row>
      			<Col xs={2}>
      			<p className="vertical_text" >(Data Source)</p>
      			</Col>
      			<Card.Text>
    
      			</Card.Text>
      			<Col xs={10}>
      			<BarChart3 />
      			</Col>
      			</Row>
      			<Card.Text>
    
      			</Card.Text>
    		</Card.Body>
  		</Card>
    </Col>
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		
    		<Card.Body className="card_style">
      			<Card.Title>
      				Sensitive Data Record Count
      			</Card.Title>
      			<Row>
      			<Col xs={2}>
      			<p className="vertical_text" >(Data Source)</p>
      			</Col>
      			<Card.Text>
    
      			</Card.Text>
      			<Col xs={10}>
      			<BarChart4 />
      			</Col>
      			</Row>
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
