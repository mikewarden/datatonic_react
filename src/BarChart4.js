import React from 'react';
import './App.css';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class BarChart4 extends React.Component {
   
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
          { label: "DS1",   y: this.props.val1 },
          { label: "DS2",   y: this.props.val2  },
          { label: "DS3",   y: this.props.val3  },
          { label: "DS4",   y: this.props.val4  },
          
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
          { label: "DS1",   y: this.props.val5  },
          { label: "DS2",   y: this.props.val6 },
          { label: "DS3",   y: this.props.val7  },
          { label: "DS4",   y: this.props.val8  },
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
      <CanvasJSChart options = {options} />
    </div>
    );
  }
}