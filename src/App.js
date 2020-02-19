import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Stack } from '@devexpress/dx-react-chart';
import StackedChart1 from './StackedChart1.js';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <h1>DataTonic</h1>
      <StackedChart1 />
    </div>
  );
}
}

export default App;
