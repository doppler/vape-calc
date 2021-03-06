import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Target = ({ targetNicStrength, onChangeTargetNicStrength, targetVgRatio, onChangeTargetVgRatio }) =>
  <Box title="Target Percentages">
    <div className="Input-addon">
      <input className="Input-addon-field"
        type="number"
        step="0.5"
        onChange={onChangeTargetNicStrength}
        value={targetNicStrength} />
      <span className="Input-addon-item">% Nicotine</span>
    </div>
    <div className="Input-addon">
      <input className="Input-addon-field"
        type="number"
        step="5"
        onChange={onChangeTargetVgRatio}
        value={targetVgRatio} />
      <span className="Input-addon-item">% VG</span>
    </div>

  </Box>

Target.propTypes = {
  targetNicStrength: PropTypes.number.isRequired,
  onChangeTargetNicStrength: PropTypes.func.isRequired,
  targetVgRatio: PropTypes.number.isRequired,
  onChangeTargetVgRatio: PropTypes.func.isRequired
}

export default Target
