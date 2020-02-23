import React from 'react';
import './App.css';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart2 extends React.Component {

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
			height: 250,
			width: 250,
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "HIPPAA", y: this.props.hippaa },
					{ name: "FERPA", y: this.props.ferpa },
					{ name: "CLASS3", y: this.props.class3 },
					{ name: "CLASS4", y: this.props.class4 },
					{ name: "CLASS5", y: this.props.class5 },
					{ name: "CLASS6", y: this.props.class6 },
					{ name: "CLASS7", y: this.props.class7 },
					{ name: "CLASS8", y: this.props.class8 },
					{ name: "PCI", y: this.props.pCi },
					{ name: "P11", y: this.props.p11 },
				]
			}]
		}
		return (
		<div className="canvas_js_chart">
			<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */
			/>
		</div>
		);
	}
}
export default PieChart2;                  