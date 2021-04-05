import { useState, useEffect } from 'react'
import './style.css'
import { ConverterDisplay } from '../ConverterDisplay/Component'
import { ConverterInput } from '../ConverterInput/Component'

const URL = 'http://data.fixer.io/api/latest'
const URL_KEY = '3678b28c602e81de78157890190760b8'

export function Converter() {
  const [currencyValues, setCurrencyValues] = useState([])
  const [fromCurrency, setFromCurrency] = useState('')
  const [toCurrency, setToCurrency] = useState('')
  const [exchangeRate, setExchangeRate] = useState(1)
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [currentDate, setCurrentDate] = useState('')

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
    const { startCurrency } = this.props
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
        .then((data) => {setExchangeRate(data.rates[toCurrency])} )
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
          onChangeCurrency={value =>  setToCurrency(value)}
          amount={toAmount}
          onChangeAmount={handleChangeToAmount}
        />
      </div>
    </div>
    )
  }
