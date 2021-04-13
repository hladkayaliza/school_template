import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { ConverterDisplay } from '../ConverterDisplay/Component'
import { ConverterInput } from '../ConverterInput/Component'

const URL = 'http://data.fixer.io/api/latest'
const URL_KEY = '3678b28c602e81de78157890190760b8'

export function Converter(props) {
  Converter.propTypes = {
    startCurrency: PropTypes.string.isRequired,
    currentDate: PropTypes.string.isRequired,
    toAmount: PropTypes.number.isRequired,
    toCurrency: PropTypes.string.isRequired,
    fromAmount: PropTypes.number.isRequired,
    fromCurrency: PropTypes.string.isRequired,
  }
  const [currencyValues, setCurrencyValues] = useState([])
  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] = useState('')
  const [exchangeRate, setExchangeRate] = useState(1)
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [currentDate, setCurrentDate] = useState('')
  const { startCurrency } = props


  let toAmount
  let fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = fromAmount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(`${URL}?access_key=${URL_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (startCurrency) {
          setFromCurrency(startCurrency)
        } else {
          setFromCurrency(data.base)
        }
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyValues([data.base, ...Object.keys(data.rates)])
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
        setCurrentDate(data.date)
      })
  }, [])

  useEffect(() => {

    if (fromCurrency !== '' && toCurrency !== '') {
      fetch(`${URL}?access_key=${URL_KEY}&cbase=${fromCurrency}&symbol=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          if(fromCurrency === 'EUR') {
            setExchangeRate(data.rates[toCurrency])
          } else {
            let rateFrom = 1/data.rates[fromCurrency]  //сколько евро будет 1 выбранная валюта
            let rateIn = 1/data.rates[toCurrency]
            let rate = rateFrom/rateIn
            setExchangeRate(rate)

          }

        })
    }
  }, [fromCurrency, toCurrency])

  function handleChangeFromAmount(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleChangeToAmount(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className="converter__container">
      <div className="container-item">
        <ConverterDisplay
          currentDate={currentDate}
          toAmount={toAmount}
          toCurrency={toCurrency}
          fromAmount={fromAmount}
          fromCurrency={fromCurrency}
        />
      </div>
      <div className="container-item">
        <ConverterInput
          currencyValues={currencyValues}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(value) => setFromCurrency(value)}
          amount={fromAmount}
          onChangeAmount={handleChangeFromAmount}
        />
        <ConverterInput
          currencyValues={currencyValues}
          selectedCurrency={toCurrency}
          onChangeCurrency={(value) => setToCurrency(value)}
          amount={toAmount}
          onChangeAmount={handleChangeToAmount}
        />
      </div>
    </div>
  )
}
