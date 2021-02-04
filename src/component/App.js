
import React, { Component } from 'react';
import '../scss/index.scss';
import movieData from '../movieData';
import Movies from './Movies';
import MovieInfo from './MovieInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      selectedMovie: ""
    } 
  }

  selectMovie = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({selectedMovie: selectedMovie})
  }

  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {this.selectedMovie !== "" ?  <MovieInfo selectedMovie={this.state.selectedMovie}/> : <Movies movies={this.state.movies} selectMovie={this.selectMovie}/>}
        <Movies movies={this.state.movies} selectMovie={this.selectMovie}/>
      </main>
    );
  }
}

export default App;