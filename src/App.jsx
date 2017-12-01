import React from 'react'
import { hashHistory as history, Router } from 'react-router'
import routes from 'routes'
import DevTools from './components/DevTools'
import './App.css'

const App = () => (
  <div className='App'>
    <DevTools />
    <Router history={history} routes={routes} key={Math.random()} />
  </div>
)

export default App
