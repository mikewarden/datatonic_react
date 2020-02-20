import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Stack } from '@devexpress/dx-react-chart';
import StackedChart1 from './StackedChart1.js';
import Navbar from './Navbar.js';
import PieChart1 from './PieChart1.js';
import PieChart2 from './PieChart2.js';
import BarChart1 from './BarChart1.js';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <h2 id="overview-text">Overview</h2>
      <hr/>
      <StackedChart1 />
      <PieChart1 />
      <PieChart2 />
      <BarChart1 />
    </div>
  );
}
}

export default App;
