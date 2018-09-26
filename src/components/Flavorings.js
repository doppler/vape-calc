import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'
import Flavor from './Flavor'

const Flavorings = ({ flavors, onAddFlavoring, onChangeFlavorName, onChangeFlavorPercentage, onRemoveFlavoring }) =>
  <Box title="Flavorings">
    <table>
      <tbody>
        {flavors.map(flavor =>
          <Flavor key={flavor.id}
            id={flavor.id} name={flavor.name} percentage={flavor.percentage}
            onChangeFlavorName={onChangeFlavorName}
            onChangeFlavorPercentage={onChangeFlavorPercentage}
            onRemoveFlavoring={onRemoveFlavoring}/>
        )}
      </tbody>
    </table>
    <button onClick={onAddFlavoring}>+ Add</button>
  </Box>

Flavorings.propTypes = {
  flavors: PropTypes.array.isRequired,
  onAddFlavoring: PropTypes.func.isRequired,
  onChangeFlavorName: PropTypes.func.isRequired,
  onChangeFlavorPercentage: PropTypes.func.isRequired,
  onRemoveFlavoring: PropTypes.func.isRequired
}

export default Flavorings
