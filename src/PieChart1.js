import React from 'react';
import './App.css';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart1 extends React.Component {

	render() {
		
		const options = {
			animationEnabled: true,
			colorSet:  "customColorSet1",
			title: {
				text: ""
			},
			height: 250,
			width: 250,
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
					{ name: "SwiftCode", y: this.props.swiftCode },
					{ name: "Email", y: this.props.email },
					{ name: "US Bank Accounts", y: this.props.bank },
					{ name: "Phone", y: this.props.phone },
					{ name: "SSN", y: this.props.ssn },
					{ name: "US Passport", y: this.props.passport },
					{ name: "Routing", y: this.props.routing },
					{ name: "DOB", y: this.props.dob },
					{ name: "Credit Card", y: this.props.credit },
					{ name: "IBAN", y: this.props.iban },
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