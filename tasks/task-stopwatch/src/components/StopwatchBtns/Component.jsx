import React from 'react'
import './style.css'

export class StopwatchBtns extends React.Component {

  render(props) {
    return (
      <div className="stopwatch-element__btn-container">
        <button className = "btn btn-start" onClick={this.props.onBtnStartClick}>start</button>
        <button className = "btn btn-stop" onClick={this.props.onBtnStopClick}>stop</button>
        <button className = "btn btn-reset" onClick={this.props.onBtnResetClick}>reset</button>
      </div>
    )
  }
}


