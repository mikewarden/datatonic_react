import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class PieChart2 extends React.Component {
	  constructor() {
    super();
      this.state = {
        hippaa: 0,
        ferpa: 0,
        class3: 0,
        class4: 0,
        class5: 0,
        class6: 0,
        class7: 0,
        class8: 0,
        pCi: 0,
        p11: 0
    }
  }

   componentDidMount() {
    fetch("http://localhost:8080/data_entries")
.then((res) => res.json())
.then((response) => {
  this.setState({
    hippaa: response[1].hippaa,
    ferpa: response[1].ferpa,
    class3: response[1].class3,
    class4: response[1].class4,
    class5: response[1].class5,
    class6: response[1].class6,
    class7: response[1].class7,
    class8: response[1].class8,
    pCi: response[1].routing,
    p11: response[1].p11

  })
  console.log(this.state.swiftCode)
}).catch((err) => console.log(err));
  }
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Sensitive Info By Category"
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
					{ name: "HIPPAA", y: this.state.hippaa },
					{ name: "FERPA", y: this.state.ferpa },
					{ name: "CLASS3", y: this.state.class3 },
					{ name: "CLASS4", y: this.state.class4 },
					{ name: "CLASS5", y: this.state.class5 },
					{ name: "CLASS6", y: this.state.class6 },
					{ name: "CLASS7", y: this.state.class7 },
					{ name: "CLASS8", y: this.state.class8 },
					{ name: "PCI", y: this.state.pCi },
					{ name: "P11", y: this.state.p11 },
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
export default PieChart2;                  