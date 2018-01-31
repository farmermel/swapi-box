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
      movieData: {},
      cardData: []
    }
  }

  componentDidMount() {
    //get scroll, title, release date
    //randomize the film scroll in a different function
    // const movieNum = this.randomizeFilmScroll();
    // this.getMovie(movieNum)
      // .then(json => this.cleanData(json));

    const movieData = dataCleaner.cleanMovieData(mockData, 4)
    // const cardData = api.getData('people')
    const cardData = dataCleaner.cleanCardData(mockData.people.results)
    //get people
    this.setState({ movieData, cardData })
  }

  getMovie(movieNum) {
    console.log(api.getMovie(movieNum))
  }

  randomizeFilmScroll() {
    const lastMovieNum = 8;
    return Math.ceil(Math.random() * lastMovieNum);
  }

  handleSelectCategory = (category) => {
    console.log(`clicked ${category}`)
    //make apicall to category selected
    //api.getData(category)
  }

  render() {
    return (
      <div className="App">
        <Header selectCategory={this.handleSelectCategory}/>
        <div>
          <Button name='People'
                  selectCategory={this.handleSelectCategory} />
          <Button name='Planets'
                  selectCategory={this.handleSelectCategory} />
          <Button name='Vehicles'
                  selectCategory={this.handleSelectCategory} />
        </div>
        <CardContainer cardData={ this.state.cardData } />
        <ScrollText movieData={ this.state.movieData } />
      </div>
    );
  }
}

export default App;
