import React from 'react'
import PropTypes from 'prop-types'

import DashBroad from 'components/dashbroad'

const DashBroadView = ({ children }) => (
  <div>
    <DashBroad />
    {children}
  </div>
)

DashBroadView.prototype.propTypes = {
   children: PropTypes.element
}

export default DashBroadView
