import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './App.css';
import ApexChart from 'apexcharts';
import ReactApexChart from "react-apexcharts";

export default class BarChart2 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              data: [400, 430, 448, 470]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: true,
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
    fetch("http://localhost:8080/data_entries")
.then((res) => res.json())
.then((response) => {
  this.setState({
    series: [{
              data: [response[0].icDS1, response[0].icDS2, response[1].icDS3, response[1].icDS4]
            }]
	})
  console.log(this.state.swiftCode)
}).catch((err) => console.log(err));
  }
      

        render() {
          return (
            

<div id="chart2">
<ReactApexChart id="chart2" options={this.state.options} series={this.state.series} type="bar" height={350} />
</div>

          );
        }
      }
