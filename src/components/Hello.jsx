import React from 'react'
import PropTypes from 'prop-types'
import './Hello.css'

const Hello = ({ msg }) => (
  <div id='Hello'>
    <h2>{msg}</h2>
    <p className='doc'>
      <i className='redux'>Redux's</i> <a href='http://redux.js.org/' target='_blank'>doc</a>
    </p>
    <p className='doc'>
      <i className='router'>react-router's</i> <a href='https://github.com/ReactTraining/react-router/tree/v3/docs' target='_blank'>doc</a>
    </p>
  </div>
)

Hello.prototype.propTypes = {
  msg: PropTypes.string
}

export default Hello
