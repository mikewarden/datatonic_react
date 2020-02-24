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
      	sources: 0, issues: 0, dbs: 0, tables: 0, files: 0, swiftCode: 0, email: 0, bank: 0, phone: 0, ssn: 0, passport: 0, routing: 0, dob: 0, credit: 0,iban: 0, hippaa: 0, ferpa: 0, class3: 0, class4: 0, class5: 0, class6: 0,class7: 0, class8: 0, pCi: 0, p11: 0, val1: 0, val2: 0, val3: 0, val4: 0,val5: 0, val6: 0, val7: 0, val8: 0,
    }
  }

   componentDidMount() {
    fetch("https://cryptic-refuge-77929.herokuapp.com/data_entries")
.then((res) => res.json())
.then((response) => {
  this.setState({
    issues: response[1].issuesResolved,
    sources: response[1].email,
    dbs: response[1].coverageDBs,
    tables: response[1].coverageTables,
    files: response[1].coverageFiles,
    swiftCode: response[1].swiftCode,
    email: response[1].email,
    bank: response[1].bank,
    phone: response[1].phone,
    ssn: response[1].ssn,
    passport: response[1].passport,
    routing: response[1].routing,
    dob: response[1].dob,
    credit: response[1].creditCard,
    iban: response[1].ferpa,
    hippaa: response[1].hippaa,
    ferpa: response[1].ferpa,
    class3: response[1].class3,
    class4: response[1].class4,
    class5: response[1].class5,
    class6: response[1].class6,
    class7: response[1].class7,
    class8: response[1].class8,
    pCi: response[1].routing,
    p11: response[1].p11,
    val1: response[1].coverageDBs,
    val2: response[1].coverageFiles,
    val3: response[1].icDS1,
    val4: response[1].icDS3,
    val5: response[0].coverageDBs,
    val6: response[0].coverageFiles,
    val7: response[0].icDS1,
    val8: response[0].icDS
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
      <span id="overview-text">Overview</span>
    </Col>
    <Col><br/>
      <h6 id="scan-text">Last scan <strong>4 hours ago</strong></h6>
    </Col>
	</Row>
  <hr/>
  <Row id="row3">
    <Col id="row3_col1" xs={2}>	
    	<Card className="card_style">
    		<div className="security_issues_card"></div>
    		<Card.Body id="issues_card_body"className="card_style">
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
    				<span class="sources_state">{this.state.sources}</span><span className="inspection_denominator">/50</span>
    				<ProgressBar now={this.state.sources}/>
    				<span className="sens_data_text">Data Sources</span>
    			</Col>
    			<Col>
    				<span class="sources_state">{this.state.dbs}<span className="inspection_denominator">/50</span></span>
    				<ProgressBar now={this.state.dbs} />
    				<span className="sens_data_text">Databases</span>
    			</Col>
    			<Col>
    				<span class="sources_state">{this.state.tables}<span className="inspection_denominator">/7853</span></span>
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
    <Col id="row3_col3" xs={5}>
    
    	<Card  className="card_style">
    		<div className="security_issues_card"></div>
    		<Card.Body id="data_locations_card" className="card_style">
    		<p className="centered_text">Sensitive Data Locations</p>
    		<Row>
    			<Col>
    				<h2 id="sources_state" class="sources_state">{this.state.sources}</h2>
    				<span className="sens_data_text">Data Sources</span>
    			</Col>
    			<Col>
    				<h2 id="dbs_state" class="sources_state">{this.state.dbs}</h2>
    				<span className="sens_data_text">Databases</span>
    			</Col>
    			<Col>
    				<h2 id="tables_state" class="sources_state">{this.state.tables}</h2>
    				<span className="sens_data_text">Tables</span>
    			</Col>
    			<Col>
    				<h2 id="files_state" class="sources_state">{this.state.files}</h2>
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
      				<span className="chart_title_text"> Sensitive Data Distribution by Data Sources</span>
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
      				<Row>
      				<Col>
      				<span id="notification_text">Notification</span>
      				</Col>
      				<Col xs={8}>
      				<div id="notification_number">3</div>
      				</Col>
      				</Row>
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
      				<span className="chart_title_text"> Sensitive Info By Type</span>
      			</Card.Title>
      			<Card.Text>
    				<PieChart1 
    				swiftCode={this.state.swiftCode}
    				email={this.state.email}
    				bank={this.state.bank}
    				phone={this.state.phone}
    				ssn={this.state.ssn}
        			passport={this.state.passport}
        			routing={this.state.routing}
        			dob={this.state.dob}
        			credit={this.state.credit}
        			iban={this.state.iban}
    				/>
      			</Card.Text>
      		
    		</Card.Body>
  		</Card>
    </Col>
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		<Card.Body className="card_style">
      			<Card.Title>
      				<span className="chart_title_text"> Sensitive Info By Category</span>
      			</Card.Title>
      			<Card.Text>
    
      			</Card.Text>
      			<PieChart2 
      				hippaa={this.state.hippaa}
    				ferpa={this.state.ferpa}
    				class3={this.state.class3}
    				class4={this.state.class4}
    				class5={this.state.class5}
    				class6={this.state.class6}
    				class7={this.state.class7}
    				class8={this.state.class8}
    				pCi={this.state.pCi}
    				p11={this.state.p11}
      			/>
    		</Card.Body>
  		</Card>
    </Col>
    <Col xs={4}>
    	<Card border="light" className="card_style">
    		<Card.Body className="card_style">
      			<Card.Title>
      				<span className="chart_title_text"> Inspection Coverage</span>
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
      				<span className="chart_title_text">Count of Sensitive Info Type</span>
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
      				<span className="chart_title_text">Count of Sensitive Info Category</span>
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
      				<span className="chart_title_text">Sensitive Data Record Count</span>
      			</Card.Title>
      			<Row>
      			<Col xs={2}>
      			<p className="vertical_text" >(Data Source)</p>
      			</Col>
      			<Card.Text>
    
      			</Card.Text>
      			<Col xs={10}>
      			<BarChart4 
      				val1={this.state.val1}
    				val2={this.state.val2}
    				val3={this.state.val3}
    				val4={this.state.val4}
    				val5={this.state.val5}
    				val6={this.state.val6}
    				val7={this.state.val7}
    				val8={this.state.val8}
      			/>
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
