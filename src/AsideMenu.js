import React from 'react';
import './App.css';
import AsideNav from './AsideNav';

export default class AsideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    }
  }

  render() {
    return (
        <div>
          <AsideNav />
        </div>
    )
  }
}