import Progress from 'react-progressbar';
import React from 'react';
import './App.css';
export default class ProgressBar extends React.Component {
  render () {
    return (
      <div>
        <Progress completed={75} />
      </div>
    )
  }
}