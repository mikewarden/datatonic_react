import React from 'react';
import './App.css';
import { Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip } from 'devextreme-react/chart';
import { Palette } from '@devexpress/dx-react-chart';
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
    fetch("https://cryptic-refuge-77929.herokuapp.com/data_entries")
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
    credit: response[1].creditCard

  })
  console.log(this.state.swiftCode)
}).catch((err) => console.log(err));
  }


  customizeTooltip(arg) {
    return {
      text: `${arg.seriesName } Records: ${ arg.valueText}`
    };
  }
  render() {
    const dataSource = [{
  state: 'DS1',
  swiftCode: this.state.swiftCode,
  email: this.state.email,
  bank: this.state.bank,
  phone: this.state.phone,
  ssn: this.state.ssn,
  passport: this.state.passport,
  routing: this.state.routing,
  dob: this.state.dob,
  credit: this.state.credit
}, {
  state: 'DS2',
  swiftCode: this.state.dob,
  email: this.state.email,
  bank: this.state.phone,
  phone: this.state.routing,
  ssn: this.state.credit,
  passport: this.state.passport,
  routing: this.state.ssn,
  dob: this.state.swiftCode,
  credit: this.state.phone
}, {
  state: 'DS3',
  swiftCode: this.state.ssn,
  email: this.state.phone,
  bank: this.state.bank,
  phone: this.state.swiftCode,
  ssn: this.state.dob,
  passport: this.state.routing,
  routing: this.state.bank,
  dob: this.state.ssn,
  credit: this.state.email
}, {
  state: 'DS4',
  swiftCode: this.state.bank,
  email: this.state.routing,
  bank: this.state.dob,
  phone: this.state.ssn,
  ssn: this.state.bank,
  passport: this.state.swiftCode,
  routing: this.state.phone,
  dob: this.state.ssn,
  credit: 8
},
{
  state: 'DS5',
  swiftCode: this.state.ssn,
  email: this.state.routing,
  bank: this.state.phone,
  phone: this.state.ssn,
  ssn: this.state.dob,
  passport:  this.state.bank,
  routing: this.state.phone,
  dob: this.state.swiftCode,
  credit: this.state.bank
},
{
  state: 'DS6',
  swswiftCode: this.state.ssn,
  email: this.state.routing,
  bank: this.state.bank,
  phone: this.state.passport,
  ssn: this.state.ssn,
  passport: this.state.dob,
  routing: this.state.email,
  dob: this.state.phone,
  credit: this.state.credit
},
];
    return (
      <Chart
        id="chart"
        title=""
        dataSource={dataSource}
      >
  
        <CommonSeriesSettings argumentField="state" type="stackedBar" />
        <Series className="series-bar"
          color="#228FC2"
          barPadding= "0.5"
          valueField="swiftCode"
          name="SwiftCode"
        />
        <Series className="series-bar"
        color="#E97150"
        barPadding= "0.5"
          valueField="email"
          name="Email"
        />
        <Series className="series-bar"
        color="#48A66B"
        barPadding= "0.5"
          valueField="bank"
          name="US Bank Account Number"
        />
        <Series className="series-bar"
        color="#228FC2"
        barPadding= "0.5"
          valueField="phone"
          name="Phone"
        />
        <Series className="series-bar"
        color="#6DC893"
        barPadding= "0.5"
          valueField="ssn"
          name="SSN"
        />
        <Series className="series-bar"
        color="#ED7F61"
        barPadding= "0.5"
          valueField="passport"
          name="US Passport"
        />
        <Series className="series-bar"
        color="#228FC2"
        barPadding= "0.5"
          valueField="routing"
          name="ABA Routing"
        />
        <Series className="series-bar"
        color="#48A66B"
        barPadding= "0.5"
          valueField="dob"
          name="DOB"
        />
        <Series className="series-bar"
        color="#CC4F2D"
        barPadding= "0.5"
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