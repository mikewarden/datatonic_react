import React from 'react';
import './App.css';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart1 extends React.Component {
	  constructor() {
    super();
      this.state = {
        swiftCode: 0,
        email: 0,
        bank: 0,
        phone: 0,
        ssn: 0,
        passport: 0,
        routing: 0,
        dob: 0,
        credit: 0,
        iban: 0
    }
  }

   componentDidMount() {
    fetch("http://localhost:8080/data_entries")
.then((res) => res.json())
.then((response) => {
  this.setState({
    swiftCode: response[1].swiftCode,
    email: response[1].email,
    bank: response[1].bank,
    phone: response[1].phone,
    ssn: response[1].ssn,
    passport: response[1].passport,
    routing: response[1].routing,
    dob: response[1].dob,
    credit: response[1].creditCard,
    iban: response[1].ferpa

  })
  console.log(this.state.swiftCode)
}).catch((err) => console.log(err));
  }
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: ""
			},
			subtitles: [{
				text: "",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "SwiftCode", y: this.state.swiftCode },
					{ name: "Email", y: this.state.email },
					{ name: "US Bank Accounts", y: this.state.bank },
					{ name: "Phone", y: this.state.phone },
					{ name: "SSN", y: this.state.ssn },
					{ name: "US Passport", y: this.state.passport },
					{ name: "Routing", y: this.state.routing },
					{ name: "DOB", y: this.state.dob },
					{ name: "Credit Card", y: this.state.credit },
					{ name: "IBAN", y: this.state.iban },
				]
			}]
		}
		return (
		<div className="canvas_js_chart">
			<CanvasJSChart  options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default PieChart1;                  