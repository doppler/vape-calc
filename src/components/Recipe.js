import React from 'react'
// import PropTypes from 'prop-types'
import Box from './Box'

const Recipe = (props) => {
  const { data } = props
  return (
    <Box title="Recipe">
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nicotine Liquid</td>
            <td>{Number.parseFloat(data.batchSize * (data.targetNicStrength / data.baseNicStrength)).toFixed(2)} ml</td>
          </tr>
          <tr>
            <td>Polyethylene Glycol</td>
            <td>{Number.parseFloat(data.batchSize * ((100 - data.targetVgRatio) / 100)).toFixed(2)} ml</td>
          </tr>
          {data.flavors.map(flavor =>
            <tr key={flavor.id}>
              <td>{flavor.name}</td>
              <td>{Number.parseFloat(data.batchSize * (flavor.percentage / 100)).toFixed(2)} ml</td>
            </tr>
          )}
        </tbody>
      </table>
    </Box>
  )
}
Box.propTypes = {

}
export default Recipe
