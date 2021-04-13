import './App.css';
import React from 'react'
import { Converter } from './Converter/Component'
import { ConverterGraphic } from './ConverterGraphic/Component'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {ConverterRoot} from './ConverterRoot'

const routes = [{
    path: "/",
    title: "Home",
    isExact: true,
    component: (props) => <Redirect to="/widget" />
  },
  {
    path: "/widget",
    title: "Widget",
    component: ConverterRoot
  }
]

function App() {
  return (
   <div className = "App">
     <BrowserRouter>
       <Switch>
         {routes.map(({path, component, isExact=false}) =>
           <Route key={path} path={path} component={component} exact={isExact} />
         )}
         <Route render={() => <div>NOT FOUND PAGE</div>} />
     </Switch>
     </BrowserRouter>

       {/*<ConverterGraphic />*/}
   </div>
  );
}

export default App;
