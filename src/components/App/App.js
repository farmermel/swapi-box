import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import ScrollText from '../ScrollText/ScrollText';
import swapiData from '../../helpers/helper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: {},
      peopleData: [],
      vehicleData: [],
      planetData: [],
      favorites: []
    }
  }

  async componentDidMount() {
    const movieData = await swapiData.fetchMovie();
    const peopleData = await swapiData.fetchPeople();
    this.setState({ movieData, peopleData });
  }

  getVehicles = async () => {
    const vehicleState = this.state.vehicleData;
    vehicleState.length === 0 
    && this.setState({ 
      vehicleData: await swapiData.fetchVehicles() 
    });
  }

  getPlanets = async () => {
    const planetState = this.state.planetData;
    planetState.length === 0
    && this.setState({ 
      planetData: await swapiData.fetchPlanets() 
    });
  }

  toggleFav = (id, type) => {
    let stateData = [...this.state[type]];
    stateData.forEach( item => {
      item.id === id 
      ? item.favorite = !item.favorite 
      : item;
    })
    this.setState({ [type]: stateData })

    //also push into favs array. 
    //type is available here, could maybe set that 
    //just for favs?
  }

  getFavs = () => {

  }

  render() {
    return (
      <div className="App">
        <Header getVehicles={ this.getVehicles }
                getPlanets={ this.getPlanets } />
        <Switch>
          <Route path='/people' render={ () => (
            <CardContainer cardData={ this.state.peopleData } 
                           getData={ this.getPeople }
                           cardType='peopleData' 
                           toggleFav={ this.toggleFav } />) }>
          </Route>
          <Route path='/vehicles' render={ () => (
            <CardContainer cardData={ this.state.vehicleData } 
                           getData={ this.getVehicles }
                           cardType='vehicleData'
                           toggleFav={ this.toggleFav } />) }>
          </Route>
          <Route path='/planets' render={ () => (
            <CardContainer cardData={ this.state.planetData } 
                           getData={ this.getPlanets } 
                           cardType='planetData'
                           toggleFav={ this.toggleFav } />) }>
          </Route>
          <Route path='/favorites' render={ () => (
            <CardContainer cardData={ this.state.favorites } 
                           getData={ this.getFavs } 
                           cardType='FavoritesCard'
                           toggleFav={ this.toggleFav } />) }>
          </Route>
        </Switch>
        <ScrollText movieData={ this.state.movieData } />
      </div>
    );
  }
}

export default App;
