import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Target = ({ targetNicStrength, onChangeTargetNicStrength, targetVgRatio, onChangeTargetVgRatio }) =>
  <Box title="Target Liquid">
    <input
      type="number"
      step="0.5"
      onChange={onChangeTargetNicStrength}
      value={targetNicStrength} />
    <span className="Control-right-label">% Nicotine</span>

    <input
      type="number"
      step="5"
      onChange={onChangeTargetVgRatio}
      value={targetVgRatio} />
    <span className="Control-right-label">% VG</span>
  </Box>

Target.propTypes = {
  targetNicStrength: PropTypes.number.isRequired,
  onChangeTargetNicStrength: PropTypes.func.isRequired,
  targetVgRatio: PropTypes.number.isRequired,
  onChangeTargetVgRatio: PropTypes.func.isRequired
}

export default Target
