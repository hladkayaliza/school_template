import './style.css'
import React from 'react'
import PropTypes from 'prop-types'

export function ConverterDisplay(props) {
  ConverterDisplay.propTypes = {
    currentDate: PropTypes.string.isRequired,
    toAmount: PropTypes.number.isRequired,
    toCurrency: PropTypes.string.isRequired,
    fromAmount: PropTypes.number.isRequired,
    fromCurrency: PropTypes.string.isRequired,
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
