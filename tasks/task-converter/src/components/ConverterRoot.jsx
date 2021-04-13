import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Converter } from './Converter/Component'

export function ConverterRoot() {
  return (
    <Switch>
      <Route path="/widget" exact render={() => <Converter />} />
      <Route path="/widget/:currency" render={({ match }) => <Converter startCurrency={match.params.currency} />} />
    </Switch>
  )
}
