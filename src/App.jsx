import React from 'react'
import { hashHistory as history, Router } from 'react-router'
import routes from 'routes'
import SourceUrl from './components/SourceUrl'
import './App.css'

const App = () => (
  <div className='App'>
    <SourceUrl />
    <Router history={history} routes={routes} key={Math.random()} />
  </div>
)

export default App
