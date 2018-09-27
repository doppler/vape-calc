import React from 'react'
import PropTypes from 'prop-types'

const Flavor = ({id, name, percentage, onChangeFlavorName, onChangeFlavorPercentage, onRemoveFlavoring}) =>
  <div className="Input-addon">
    <input className="Input-addon-field"
      onChange={(event) => onChangeFlavorName(id, event)}
      value={name}
    />
    <input className="Input-addon-field"
      onChange={(event) => onChangeFlavorPercentage(id, event)}
      value={percentage}
      style={{width: '40px'}}
      type="number"
    />
    <span className="Input-addon-item">%</span>
    <button className="Input-addon-item" onClick={() => onRemoveFlavoring(id)}>Remove</button>
  </div>

Flavor.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  onChangeFlavorName: PropTypes.func.isRequired,
  onChangeFlavorPercentage: PropTypes.func.isRequired,
  onRemoveFlavoring: PropTypes.func.isRequired
}

export default Flavor
