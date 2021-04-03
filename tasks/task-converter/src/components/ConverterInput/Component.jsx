import { React, useState }  from 'react'
import { Select } from 'antd'
import { Input } from 'antd';
import 'antd/dist/antd.css'
import './style.css'

export function ConverterInput(props) {

  const { Option } = Select
  const { currencyValues,
          selectedCurrency,
          onChangeCurrency,
          onChangeAmount,
          amount,
          } = props

  return (
    <div className = "inputs">
      <div className = "input-item">
        <Input type="number" className = "value-item" value={amount} onChange={onChangeAmount}  />
        <Select className = "select-item" value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyValues.map((value) => (
            <Option key={value} value={value}>{value}</Option>
          ))}
        </Select>
      </div>
    </div>
  )
}
