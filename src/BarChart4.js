import React from 'react';
import './App.css';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class BarChart4 extends React.Component {
   constructor() {
    super();
      this.state = {
        val1: 0,
        val2: 0,
        val3: 0,
        val4: 0,
        val5: 0,
        val6: 0,
        val7: 0,
        val8: 0
        
    }
  }

   componentDidMount() {
    fetch("http://localhost:8080/data_entries")
.then((res) => res.json())
.then((response) => {
  this.setState({
    val1: response[1].coverageDBs,
    val2: response[1].coverageFiles,
    val3: response[1].icDS1,
    val4: response[1].icDS3,
    val5: response[0].coverageDBs,
    val6: response[0].coverageFiles,
    val7: response[0].icDS1,
    val8: response[0].icDS3

  })
  console.log(this.state.swiftCode)
}).catch((err) => console.log(err));
  }
  
  render() {
    const options = {
      title: {
        text: ""
      },
      plotOptions: {
                bar: {
                  barHeight: '25%'
                }
              },
      toolTip: {
        shared: true
      },
      legend: {
        verticalAlign: "bottom"
      },
      axisY: {
        suffix: "k"
      },
      height: 240,
      dataPointMaxWidth: 12,
      data: [{
        type: "stackedBar",
        color: "#35ACDE",
        name: "Class1",
        showInLegend: true,
        indexLabel: "",
        indexLabelFontColor: "white",
        yValueFormatString: "",
        dataPoints: [
          { label: "DS1",   y: this.state.val1 },
          { label: "DS2",   y: this.state.val2  },
          { label: "DS3",   y: this.state.val3  },
          { label: "DS4",   y: this.state.val4  },
          
        ]
      },{
        type: "stackedBar",
        color: "#E97150",
        name: "Class2",
        showInLegend: true,
        indexLabel: "",
        indexLabelFontColor: "white",
        yValueFormatString: "",
        dataPoints: [
          { label: "DS1",   y: this.state.val5  },
          { label: "DS2",   y: this.state.val6 },
          { label: "DS3",   y: this.state.val7  },
          { label: "DS4",   y: this.state.val8  },
        ]
      },
      {
        type: "stackedBar",
        color: "#6DC893",
        name: "Class3",
        showInLegend: true,
        indexLabel: "",
        indexLabelFontColor: "white",
        yValueFormatString: "",
        dataPoints: [
          { label: "DS1",   y: 212 },
          { label: "DS2",   y: 79 },
          { label: "DS3",   y: 234 },
          { label: "DS4",   y: 12 },
        ]
      }
      ]
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