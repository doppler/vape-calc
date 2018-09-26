import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Base = ({ baseNicStrength, onChangeBaseNicStrength }) =>
  <Box title="Base Nicotine Liquid">
    <input
      type="number"
      onChange={onChangeBaseNicStrength}
      value={baseNicStrength} />
    <span className="Control-right-label">% Nicotine</span>
  </Box>

Base.propTypes = {
  baseNicStrength: PropTypes.number.isRequired,
  onChangeBaseNicStrength: PropTypes.func.isRequired
}

export default Base
