import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Base = ({ baseNicStrength, onChangeBaseNicStrength }) =>
  <Box title="Base Nicotine Liquid">
    <div className="Input-addon">
      <input className="Input-addon-field"
        type="number"
        onChange={onChangeBaseNicStrength}
        value={baseNicStrength} />
      <span className="Input-addon-item">% Nicotine</span>
    </div>
  </Box>

Base.propTypes = {
  baseNicStrength: PropTypes.number.isRequired,
  onChangeBaseNicStrength: PropTypes.func.isRequired
}

export default Base
