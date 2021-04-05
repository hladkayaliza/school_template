import { Select, Input } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import './style.css'

export function ConverterInput(props) {
  ConverterInput.propTypes = {
    currencyValues: PropTypes.number,
    selectedCurrency: PropTypes.string,
    onChangeCurrency: PropTypes.func,
    onChangeAmount: PropTypes.func,
    amount: PropTypes.number,
  }
  const { Option } = Select
  const {
    currencyValues,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props
  return (
    <div className="inputs">
      <div className="input-item">
        <Input type="number" className="value-item" value={amount} onChange={onChangeAmount} />
        <Select className="select-item" value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyValues.map((value) => (
            <Option key={value} value={value}>{value}</Option>
          ))}
        </Select>
      </div>
    </div>
  )
}
