import React from 'react';
import './App.css';
import AsideNav from './AsideNav';
import AsideList from './AsideList';

export default class AsideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    }
  }

  render() {
    return (
        <div className="aside_nav">
          <AsideNav />
          <AsideList />
        </div>
    )
  }
}