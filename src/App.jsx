import React from 'react'
import Hello from 'components/Hello'
import { hashHistory as history, Router } from 'react-router'
import routes from 'routes'
import DevTools from 'components/DevTools'
import logo from './assets/logo.svg'
import './App.css'

import Counter from 'components/Counter'

const App = () => (
  <div className='App'>
    <div className='App-header'>
      <img src={logo} className='App-logo shake-rotate' alt='logo' />
    </div>
    <Counter />
    <DevTools />
    <Hello msg='Hello World' />
    <Router history={history} routes={routes} key={Math.random()} />
  </div>
)

export default App
