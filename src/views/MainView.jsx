import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './MainView.css'

const MainView = ({ children }) => (
  <div className='main-view'>
    <div className='view'>
      {children}
    </div>
  </div>
)

MainView.prototype.propTypes = {
  children: PropTypes.element
}

export default MainView
