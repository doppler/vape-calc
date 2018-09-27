import React, { Component } from 'react';
import './App.css';

import Batch from './components/Batch'
import Base from './components/Base'
import Target from './components/Target'
import Flavorings from './components/Flavorings'
import Recipe from './components/Recipe'
import SavedRecipes from './components/SavedRecipes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeName: "New Recipe",
      batchSize: 50,
      baseNicStrength: 48,
      baseVgRatio: 100,
      targetNicStrength: 1.5,
      targetVgRatio: 80,
      flavors: [],
      savedRecipes: []
    }
  }

  componentDidMount() {
    this.loadSavedRecipeList()
  }

  handleBatchSizeChange = (event) => {
    if (event.target.value === '') return null
    this.setState({
      batchSize: parseInt(event.target.value, 10)
    })
  }

  handleRecipeNameChange = (event) => {
    this.setState({
      recipeName: event.target.value
    })
  }

  handleBaseNicStrengthChange = (event) => {
    if (event.target.value === '') return null
    this.setState({
      baseNicStrength: parseInt(event.target.value, 10)
    })
  }

  handleTargetNicStrengthChange = (event) => {
    if (event.target.value === "") return null
    this.setState({
      targetNicStrength: parseFloat(event.target.value)
    })
  }

  handleTargetVgRatioChange = (event) => {
    if (event.target.value === '') return null
    this.setState({
      targetVgRatio: parseInt(event.target.value, 10)
    })
  }

  handleAddFlavoring = () => {
    let flavorCount = this.state.flavors.length
    this.setState({
      flavors: [...this.state.flavors, {name: "Flavor " + (flavorCount + 1), percentage: 5, id: Math.random()}]
    })
  }

  handleFlavorNameChange = (id, event) => {
    this.setState({
      flavors: this.state.flavors.map(flavor => flavor.id === id ? {...flavor, name: event.target.value} : flavor)
    })
  }

  handleFlavorPercentageChange = (id, event) => {
    if (event.target.value === '') return null
    this.setState({
      flavors: this.state.flavors.map(flavor => flavor.id === id ? {...flavor, percentage: Number.parseFloat(event.target.value, 10)} : flavor)
    })
  }

  handleRemoveFlavoring = (id) => {
    this.setState({
      flavors: this.state.flavors.filter(flavor => flavor.id !== id)
    })
  }

  handleSaveRecipe = () => {
    const recipe = {...this.state}
    delete recipe.savedRecipes
    localStorage.setItem(this.state.recipeName, JSON.stringify(recipe))
    this.loadSavedRecipeList()
  }

  loadSavedRecipeList() {
    const recipes = []
    for(let i=0; i < localStorage.length; i++) {
      let recipe = JSON.parse(localStorage.getItem(localStorage.key(i)))
      recipes.push(recipe)
    }
    this.setState({
      savedRecipes: recipes
    })
  }

  loadSavedRecipe = (event, recipeName) => {
    event.preventDefault()
    const recipe = JSON.parse(localStorage.getItem(recipeName))
    this.setState({
      ...recipe
    })
  }

  handleRemoveSavedRecipe = (recipeName) => {
    localStorage.removeItem(recipeName)
    this.loadSavedRecipeList()
  }

  render() {
    const { batchSize, recipeName, baseNicStrength, targetNicStrength, targetVgRatio, flavors, savedRecipes } = this.state
    return (
      <div className="App">
        <Batch batchSize={batchSize} recipeName={recipeName}
          onChangeBatchSize={this.handleBatchSizeChange} onChangeRecipeName={this.handleRecipeNameChange} />
        <Base baseNicStrength={baseNicStrength} onChangeBaseNicStrength={this.handleBaseNicStrengthChange} />
        <Target
          targetNicStrength={targetNicStrength} onChangeTargetNicStrength={this.handleTargetNicStrengthChange}
          targetVgRatio={targetVgRatio} onChangeTargetVgRatio={this.handleTargetVgRatioChange}
        />
        <Flavorings
          flavors={flavors} onAddFlavoring={this.handleAddFlavoring}
          onChangeFlavorName={this.handleFlavorNameChange}
          onChangeFlavorPercentage={this.handleFlavorPercentageChange}
          onRemoveFlavoring={this.handleRemoveFlavoring}
        />
        <Recipe data={this.state} onSaveRecipe={this.handleSaveRecipe}/>
        <SavedRecipes savedRecipes={savedRecipes} loadSavedRecipe={this.loadSavedRecipe} onRemoveSavedRecipe={this.handleRemoveSavedRecipe}/>
      </div>
    );
  }
}

export default App;
