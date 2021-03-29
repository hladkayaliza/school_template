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
      seconds: 0,
      minutes: 0,
      hours: 0,
      status:BEFORE_START
    }

    this.timerId = null;
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

  tick = () => {
    const { seconds, minutes, hours } = this.state
    let newSeconds = seconds + 1
    let newMinutes = minutes
    let newHours = hours

    if(newSeconds > 59) {
      newSeconds = 0
      newMinutes += 1
    }

    if(newMinutes > 59) {
      newMinutes = 0
      newHours += 1
    }

    this.setState({
      seconds: newSeconds,
      minutes: newMinutes,
      hours: newHours,
      status:AFTER_START
    })
  }


  onBtnStartClick = () => {
    debugger
    this.timerId = setInterval(this.tick, 1000)
  }

  onBtnStopClick = (state, props) => {
    clearInterval(this.timerId)
  }

  onBtnResetClick = () => {
    this.onBtnStopClick()
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      status:BEFORE_START
    })
  }

  render() {
    const  {seconds, minutes, hours} = this.state
    return (
      <div className = "stopwatch-element">
        <div className = "stopwatch-element__display display-text">
          <span>{hours}</span> :
          <span>{minutes}</span> :
          <span>{seconds}</span>
        </div>

        <StopwatchBtns onBtnStartClick = {this.onBtnStartClick}
                       onBtnStopClick = {this.onBtnStopClick}
                       onBtnResetClick = {this.onBtnResetClick} />
      </div>
    )
  }
}
