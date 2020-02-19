import React from 'react';
import './App.css';
import { Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip } from 'devextreme-react/chart';
import service from './data.js';



class StackedChart1 extends React.Component {
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
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/data_entries")
.then((res) => res.json())
.then((response) => {
  this.setState({
    swiftCode: response[0].swiftCode,
    email: response[0].email,
    bank: response[0].bank,
    phone: response[0].phone,
    ssn: response[0].ssn,
    passport: response[0].passport,
    routing: response[0].routing,
    dob: response[0].dob,
    credit: response[0].credit

  })
  console.log(this.state.swiftCode)
}).catch((err) => console.log(err));
  }


  customizeTooltip(arg) {
    return {
      text: `${arg.seriesName } years: ${ arg.valueText}`
    };
  }
  render() {
    const dataSource = [{
  state: 'DS1',
  swiftCode: this.state.swiftCode,
  email: 2,
  bank: 4,
  phone: 5,
  ssn: 8,
  passport: 4,
  routing: 6,
  dob: 6,
  credit: 8
}, {
  state: 'DS2',
  swiftCode: 3,
  email: 2,
  bank: 4,
  phone: 5,
  ssn: 8,
  passport: 4,
  routing: 6,
  dob: 6,
  credit: 8
}, {
  state: 'DS3',
  swiftCode: 3,
  email: 2,
  bank: 4,
  phone: 5,
  ssn: 8,
  passport: 4,
  routing: 6,
  dob: 6,
  credit: 8
}, {
  state: 'DS4',
  swiftCode: 3,
  email: 2,
  bank: 4,
  phone: 5,
  ssn: 8,
  passport: 4,
  routing: 6,
  dob: 6,
  credit: 8
},
{
  state: 'DS5',
  swiftCode: 3,
  email: 2,
  bank: 4,
  phone: 5,
  ssn: 8,
  passport: 4,
  routing: 6,
  dob: 6,
  credit: 8
},
{
  state: 'DS6',
  swswiftCode: 3,
  email: 2,
  bank: 4,
  phone: 5,
  ssn: 8,
  passport: 4,
  routing: 6,
  dob: 6,
  credit: 8
},
];
    return (
      <Chart
        id="chart"
        title="Sensitive Data Distribution by Data Sources"
        dataSource={dataSource}
      >
        <CommonSeriesSettings argumentField="state" type="stackedBar" />
        <Series className="series-bar"
          valueField="swiftCode"
          name="SwiftCode"
        />
        <Series className="series-bar"
          valueField="email"
          name="Email"
        />
        <Series className="series-bar"
          valueField="bank"
          name="US Bank Account Number"
        />
        <Series className="series-bar"
          valueField="phone"
          name="Phone"
        />
        <Series className="series-bar"
          valueField="ssn"
          name="SSN"
        />
        <Series className="series-bar"
          valueField="passport"
          name="US Passport"
        />
        <Series className="series-bar"
          valueField="routing"
          name="ABA Routing"
        />
        <Series className="series-bar"
          valueField="dob"
          name="DOB"
        />
        <Series className="series-bar"
          valueField="credit"
          name="Credit Card"
        />
        <ValueAxis position="left">
          <Title text="(Total Records)" />
        </ValueAxis>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
          itemTextPosition="top"
        />
        <Export enabled={true} />
        <Tooltip
          enabled={true}
          location="edge"
          customizeTooltip={this.customizeTooltip}
        />
      </Chart>
    );
  }
}
export default StackedChart1;