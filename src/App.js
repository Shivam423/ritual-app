import React from 'react'
import Header from './Header'
import Home from './Home'
import Map from './Map'
import FeaturedProduct from './FeaturedProduct'
import { Switch, Route } from 'react-router'

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" >
        <Header/><Home/><Map/><FeaturedProduct/>
      </Route>
    </Switch>
    </>
  )
}

export default App
