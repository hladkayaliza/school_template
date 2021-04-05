import './style.css'
import React from 'react'
import PropTypes from 'prop-types'

export function ConverterDisplay(props) {
  ConverterDisplay.propTypes = {
    currentDate: PropTypes.string,
    toAmount: PropTypes.number,
    toCurrency: PropTypes.string,
    fromAmount: PropTypes.number,
    fromCurrency: PropTypes.string,
  }

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
