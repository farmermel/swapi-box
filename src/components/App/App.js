import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import ScrollText from '../ScrollText/ScrollText';
// import api from '../../api.js';
// import mockData from '../../mock-data';
import swapiData from '../../helper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: {},
      cardData: []
    }
  }

  async componentDidMount() {
    const movieNum = this.randomizeFilmScroll();
    const movieData = await swapiData.fetchMovie(movieNum)
    const cardData = await swapiData.fetchPeople();
    this.setState({ movieData, cardData })
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
            <CardContainer cardData={ this.state.cardData } />) }
                           getPeople={ this.getPeople }>
          </Route>
          <Route path='/vehicles' render={ () => (
            <CardContainer cardData={ this.state.cardData } />) }
                           getVehicles={ this.getVehicles }>
          </Route>
          <Route path='/planets' render={ () => (
            <CardContainer cardData={ this.state.cardData } />) }
                           getPlanets={ this.getPlanets }>
          </Route>
          <Route path='/favorites' render={ () => (
            <CardContainer cardData={ this.state.cardData } />) }
                           getFavs={ this.getFavs }>
          </Route>
        </Switch>
        <ScrollText movieData={ this.state.movieData } />
      </div>
    );
  }
}

export default App;
