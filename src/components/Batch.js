import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Batch = ({ batchSize, recipeName, onChangeBatchSize, onChangeRecipeName }) =>
  <Box title="Name and Size">
    <div className="Input-addon">
      <input className="Input-addon-field"
        type="text"
        onChange={onChangeRecipeName}
        value={recipeName}
      />
      <span className="Input-addon-item">Name</span>
    </div>
    <div className="Input-addon">
      <input className="Input-addon-field"
        type="number"
        step={10}
        onChange={onChangeBatchSize}
        value={batchSize}
      />
      <span className="Input-addon-item">ml</span>
    </div>
  </Box>

Batch.propTypes = {
  batchSize: PropTypes.number.isRequired,
  onChangeBatchSize: PropTypes.func.isRequired
}

export default Batch
