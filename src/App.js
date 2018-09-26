import React, { Component } from 'react';
import './App.css';

import Batch from './components/Batch'
import Base from './components/Base'
import Target from './components/Target'
import Flavorings from './components/Flavorings'
import Recipe from './components/Recipe'

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
      flavors: [
        {id: 1, name: "Strawberry", percentage: 5},
        {id: 2, name: "Rainbow Candy", percentage: 5}
      ]
    }
  }

  handleBatchSizeChange = (event) => {
    if (event.target.value === '') return null
    this.setState({
      batchSize: parseInt(event.target.value, 10)
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
      flavors: this.state.flavors.map(flavor => flavor.id === id ? {...flavor, percentage: event.target.value} : flavor)
    })
  }

  handleRemoveFlavoring = (id) => {
    this.setState({
      flavors: this.state.flavors.filter(flavor => flavor.id !== id)
    })
  }

  render() {
    const { batchSize, baseNicStrength, targetNicStrength, targetVgRatio, flavors } = this.state
    return (
      <div className="App">
        <Batch batchSize={batchSize} onChangeBatchSize={this.handleBatchSizeChange} />
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
        <Recipe data={this.state}/>
      </div>
    );
  }
}

export default App;
