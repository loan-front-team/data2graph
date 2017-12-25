import React from 'react'
import PropTypes from 'prop-types'

import SourceUrl from '../components/SourceUrl'
import './MainView.css'

const MainView = ({ children }) => (
  <div className='main-view'>
    <div className='view'>
      <SourceUrl />
      {children}
    </div>
  </div>
)

MainView.prototype.propTypes = {
  children: PropTypes.node
}

export default MainView
