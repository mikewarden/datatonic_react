import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart1 extends React.Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Sensitive Info By Type"
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
					{ name: "SwiftCode", y: 5 },
					{ name: "Email", y: 31 },
					{ name: "US Bank Accounts", y: 40 },
					{ name: "Phone", y: 17 },
					{ name: "SSN", y: 7 },
					{ name: "US Passport", y: 3 },
					{ name: "Routing", y: 7 },
					{ name: "DOB", y: 7 },
					{ name: "Credit Card", y: 12 },
					{ name: "IBAN", y: 2 },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default PieChart1;                  