import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import ApexChart from 'apexcharts';
import ReactApexChart from "react-apexcharts";

export default class BarChart1 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              data: [0, 0, 0, 0]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 550
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                  barHeight: '25%'
                }
              },
              dataLabels: {
                enabled: false
              },
              xaxis: {
                categories: ['DS1', 'DS2', 'DS3', 'DS4'],
              }
            },
          
          
          };
        }

         componentDidMount() {
    fetch("https://cryptic-refuge-77929.herokuapp.com/data_entries")
.then((res) => res.json())
.then((response) => {
  this.setState({
    series: [{
              data: [response[1].icDS1, response[0].icDS2, response[1].icDS3, response[0].icDS4]
            }]
	})
  console.log(this.state.swiftCode)
}).catch((err) => console.log(err));
  }
      

        render() {
          return (
            

<div id="chart2">
<ReactApexChart id="chart2" options={this.state.options} series={this.state.series} type="bar" height={250} />
<span id="inspection_bottom_text">( Inspection Coverage(%))</span>
</div>

          );
        }
      }
