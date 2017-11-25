import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './MainView.css'

const MainView = ({ children }) => (
  <div className='main-view'>
    <div className='btn-group'>
      <Link to='/sync' className='btn' activeClassName='active'>To Sync</Link>
      <Link to='/async' className='btn' activeClassName='active'>To Async</Link>
    </div>
    <div className='view'>
      {children}
    </div>
  </div>
)

MainView.prototype.propTypes = {
  children: PropTypes.element
}

export default MainView
