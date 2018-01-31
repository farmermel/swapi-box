import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import ScrollText from '../ScrollText/ScrollText';
// import mockData from '../../mock-data';
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
    const movieNum = this.randomizeFilmScroll();
    const movieData = await swapiData.fetchMovie(movieNum);
    // const peopleData = await swapiData.fetchPeople();
    const planetData = await swapiData.fetchPlanets()
    this.setState({ movieData, planetData });

    // this.setState({ movieData, peopleData });
  }

  randomizeFilmScroll() {
    const lastMovieNum = 7;
    return Math.ceil(Math.random() * lastMovieNum);
  }

  getPeople = () => {

  }

  getVehicles = () => {

  }

  getPlanets = () => {

  }

  getFavs = () => {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/people' render={ () => (
            <CardContainer cardData={ this.state.peopleData } 
                           getPeople={ this.getPeople }
                           cardType='PeopleCard' />) }>
          </Route>
          <Route path='/vehicles' render={ () => (
            <CardContainer cardData={ this.state.vehicleData } 
                           getVehicles={ this.getVehicles }
                           cardType='VehicleCard' />) }>
          </Route>
          <Route path='/planets' render={ () => (
            <CardContainer cardData={ this.state.planetData } 
                           getPlanets={ this.getPlanets } 
                           cardType='PlanetCard'/>) }>
          </Route>
          <Route path='/favorites' render={ () => (
            <CardContainer cardData={ this.state.favorites } 
                           getFavs={ this.getFavs } 
                           cardType='FavoritesCard'/>) }>
          </Route>
        </Switch>
        <ScrollText movieData={ this.state.movieData } />
      </div>
    );
  }
}

export default App;
