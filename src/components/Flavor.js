import React from 'react'
import PropTypes from 'prop-types'

const Flavor = ({id, name, percentage, onChangeFlavorName, onChangeFlavorPercentage, onRemoveFlavoring}) =>
  <tr className="Flavor">
    <td>
      <input
        onChange={(event) => onChangeFlavorName(id, event)}
        value={name}
      />
    </td>
    <td>
      <input onChange={(event) => onChangeFlavorPercentage(id, event)}
        value={percentage}
        style={{width: '40px'}}
        type="number"
      /> %
    </td>
    <td>
      <button onClick={() => onRemoveFlavoring(id)}>Remove</button>
    </td>
  </tr>

Flavor.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  onChangeFlavorName: PropTypes.func.isRequired,
  onChangeFlavorPercentage: PropTypes.func.isRequired,
  onRemoveFlavoring: PropTypes.func.isRequired
}

export default Flavor
