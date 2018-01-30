import React, { Component } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';
import ScrollText from '../ScrollText/ScrollText';
import api from '../../api.js';
import mockData from '../../mock-data';
import dataCleaner from '../../helper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: {}
    }
  }

  componentDidMount() {
    //get scroll, title, release date
    //randomize the film scroll in a different function
    // const movieNum = this.randomizeFilmScroll();
    // this.getMovie(movieNum)
      // .then(json => this.cleanData(json));

    const movieData = dataCleaner.cleanMovieData(mockData, 4)
    // api.getData()
    //get people
    this.setState({ movieData })
  }

  getMovie(movieNum) {
    console.log(api.getMovie(movieNum))
  }

  randomizeFilmScroll() {
    const lastMovieNum = 8
    return Math.ceil(Math.random() * lastMovieNum);
  }

  render() {
    console.log(this.state.movieData)
    return (
      <div className="App">
        <Header />
        <div>
          <Button name='people'/>
          <Button name='planets'/>
          <Button name='vehicles'/>
        </div>
        <CardContainer />
        <ScrollText movieData={ this.state.movieData } />
      </div>
    );
  }
}

export default App;
