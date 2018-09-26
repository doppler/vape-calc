import React from 'react'
import PropTypes from 'prop-types'
import './Box.css'

const Box = ({ title, color, children }) =>
  <div className="Box">
    <div className="Box-header">
      <h1>{title}</h1>
    </div>
    <div className="Box-content">
      {children}
    </div>
  </div>

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Box
