import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Batch = ({ batchSize, recipeName, onChangeBatchSize, onChangeRecipeName }) =>
  <Box title="Name and Size">
    <div>
      <input
        type="text"
        onChange={onChangeRecipeName}
        value={recipeName}
      />
      <span className="Control-right-label">Recipe Name</span>
    </div>
    <div>
      <input
        type="number"
        step={10}
        onChange={onChangeBatchSize}
        value={batchSize}
      />
      <span className="Control-right-label">ml</span>
    </div>
  </Box>

Batch.propTypes = {
  batchSize: PropTypes.number.isRequired,
  onChangeBatchSize: PropTypes.func.isRequired
}

export default Batch
