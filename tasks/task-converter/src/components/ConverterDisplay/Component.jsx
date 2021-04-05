import './style.css'
import React from 'react'

export function ConverterDisplay(props) {
  const {
    currentDate,
    toAmount,
    toCurrency,
    fromAmount,
    fromCurrency,
  } = props

  return (
    <>
      <div className="date">
        Today
        {currentDate}
      </div>
      <div className="currency">
        {fromAmount}
        {fromCurrency}
        equal
        {toAmount}
        {toCurrency}
      </div>
    </>
  )
}
