import React from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

const SavedRecipes = ({ savedRecipes, loadSavedRecipe, onRemoveSavedRecipe }) =>
  <Box title="Saved Recipes">
    <table>
      <tbody>
        {savedRecipes.map(recipe =>
          <tr key={recipe.recipeName}>
            <td>
              <a
                href={recipe.recipeName}
                onClick={(event) => loadSavedRecipe(event, recipe.recipeName)}>
                {recipe.recipeName}
              </a>
            </td>
            <td>
              <button onClick={() => onRemoveSavedRecipe(recipe.recipeName, this.loadSavedRecipeList)}>Remove</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </Box>

SavedRecipes.propTypes = {
  savedRecipes: PropTypes.array.isRequired,
  loadSavedRecipe: PropTypes.func.isRequired,
  onRemoveSavedRecipe: PropTypes.func.isRequired
}

export default SavedRecipes
