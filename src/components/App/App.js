import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import ScrollText from '../ScrollText/ScrollText';
import swapiData from '../../helpers/helper';
import wookieeData from '../../assets/wookiee.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: {},
      peopleData: [],
      vehicleData: [],
      planetData: [],
      favorites: [],
      translated: false
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

  toggleFav = (cardData) => {
    let { [cardData.type]: stateData, favorites } = this.state
    stateData.forEach( item => {
      item.id === cardData.id 
      ? item.favorite = !item.favorite 
      : item;
    })
    favorites.includes(cardData)
    ? favorites.splice(favorites.indexOf(cardData), 1)
    : favorites = [...favorites, cardData];

    this.setState({
     [cardData.type]: stateData,
     favorites
    })
  }

  translateToShyriiwook = async () => {
    let peopleData, vehicleData, planetData;
    let { translated } = this.state;
    if(translated) {
      peopleData = await swapiData.fetchPeople();
      vehicleData = await swapiData.fetchVehicles();
      planetData = await swapiData.fetchPlanets();
    } else {
      peopleData = wookieeData.people;
      vehicleData =wookieeData.vehicles;
      planetData = wookieeData.planets;
    }
    translated = !translated;
    this.setState({ peopleData, vehicleData, planetData, translated });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header getVehicles={ this.getVehicles }
                getPlanets={ this.getPlanets }
                translate={ this.translateToShyriiwook } />
        <Switch>
          <Route path='/people' render={ () => (
            <CardContainer cardData={ this.state.peopleData } 
                           toggleFav={ this.toggleFav } />) }>
          </Route>
          <Route path='/vehicles' render={ () => (
            <CardContainer cardData={ this.state.vehicleData } 
                           toggleFav={ this.toggleFav } />) }>
          </Route>
          <Route path='/planets' render={ () => (
            <CardContainer cardData={ this.state.planetData } 
                           toggleFav={ this.toggleFav } />) }>
          </Route>
          <Route path='/favorites' render={ () => (
            <CardContainer cardData={ this.state.favorites } 
                           toggleFav={ this.toggleFav } />) }>
          </Route>
        </Switch>
        <ScrollText movieData={ this.state.movieData } />
      </div>
    );
  }
}

export default App;
