import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Batch = ({ batchSize, onChangeBatchSize }) =>
  <Box title="Target Batch Size">
    <input
      type="number"
      step={10}
      onChange={onChangeBatchSize}
      value={batchSize} />
    <span className="Control-right-label">ml</span>
  </Box>

Batch.propTypes = {
  batchSize: PropTypes.number.isRequired,
  onChangeBatchSize: PropTypes.func.isRequired
}

export default Batch
