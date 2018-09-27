import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'
import Flavor from './Flavor'

const Flavorings = ({ ...props, flavors, onAddFlavoring }) => //, onAddFlavoring, onChangeFlavorName, onChangeFlavorPercentage, onRemoveFlavoring }) =>
  <Box title="Flavorings">
    <button onClick={onAddFlavoring}>+ Add</button>
    <table>
      <tbody>
        {flavors.map(flavor =>
          <Flavor {...props} key={flavor.id} id={flavor.id} name={flavor.name} percentage={flavor.percentage}/>
        )}
      </tbody>
    </table>
  </Box>

Flavorings.propTypes = {
  flavors: PropTypes.array.isRequired,
  onAddFlavoring: PropTypes.func.isRequired,
}

export default Flavorings
