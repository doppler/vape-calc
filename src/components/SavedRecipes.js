import React from 'react'
import Box from './Box'

export default class SavedRecipes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedRecipes: []
    }
  }

  componentDidMount() {
    const recipes = []
    for(let i=0; i < localStorage.length; i++) {
      let recipe = JSON.parse(localStorage.getItem(localStorage.key(i)))
      recipes.push(recipe)
    }
    this.setState({
      savedRecipes: recipes
    })
  }

  render() {
    return (
      <Box title="Saved Recipes">
        <ul>
          {this.state.savedRecipes.map(recipe =>
            <li key={recipe.recipeName}>
              <a
                href={recipe.recipeName}
                onClick={(event) => this.props.loadSavedRecipe(event, recipe.recipeName)}>
                {recipe.recipeName}
              </a>
            </li>
          )}
        </ul>
      </Box>
    )
  }
}
