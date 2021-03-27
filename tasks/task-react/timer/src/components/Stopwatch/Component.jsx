import React from 'react'
import {AFTER_START, BEFORE_START, PAUSE} from '../../constants'
import { StopwatchBtns } from '../StopwatchBtns/Component'
import './style.css'

function InitState () {
  const seconds = 0
  return seconds
}

export class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: InitState(),
      status:BEFORE_START
    }
  }

  getSeconds = () => {
    return Math.floor(this.state.time / 60)
  }

  getMinutes = () => {
    return Math.trunc( this.state.time / 60)
  }

  getHours = () => {
    return Math.trunc( this.state.time / 60)
  }


  onBtnStartClick = () => {
    debugger
   this.setState((state, props) => {
      return { status: AFTER_START}
    }, () => {
      while (this.state.status === "active") {
        setInterval(this.setState((state, props) => {
            return { time: this.state.time + 1 }
          }), 1000)
      }
    })
  }

  onBtnStopClick = (state, props) => {
    this.setState((state, props) => {
      return { status: PAUSE }
    })
  }

  onBtnResetClick = () => {
    this.setState((state, props) => {
      return { status: BEFORE_START,
               time: 0 }
    })
  }

  render() {
    return (
      <div className = "stopwatch-element">
        <div className = "stopwatch-element__display display-text">
          <span>{(this.getHours() >= 10) ? this.getHours() : "0" + this.getHours()}</span> :
          <span>{(this.getMinutes() >= 10) ? this.getMinutes() : "0" + this.getMinutes()}</span> :
          <span>{(this.getSeconds() >= 10) ? this.getSeconds() : "0" + this.getSeconds()}</span> :
        </div>

        <StopwatchBtns onBtnStartClick = {this.onBtnStartClick}
                       onBtnStopClick = {this.onBtnStopClick}
                       onBtnResetClick = {this.onBtnResetClick} />
      </div>
    )
  }
}
