import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Converter } from './Converter/Component'

export function ConverterRoot(props) {
  return (
    <Switch>
      <Route path="/widget" exact render={() => <Converter />}></Route>
      <Route path="/widget/:currency" render={({match}) => <Converter startCurrency = {match.params.currency} />}></Route>
    </Switch>

  )
}
