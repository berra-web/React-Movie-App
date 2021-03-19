import React, { Component } from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/Header/Header';
import MovieList from './component/MovieList/movieList';
import SearchBar from './component/Search.js/search_bar';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import DropDown from './component/DropDown/DropDown';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
 this.movieSearch('batman')
  }

  async movieSearch(term) {
    if(term) {
      let url = `http://www.omdbapi.com/?apikey=7ef1447d&y=${this.props.year}&s=${term}`
      const res = await fetch(url)
      const movies = await res.json();
        if(movies.Search) {
          this.setState({ 
            movies
          });
        }
      }
    }
    
  componentDidMount() {
      this.movieSearch()
   }

   componentDidUpdate(prevProps, prevState) {
       if (prevState.movies !== this.state.movies) {
           this.movieSearch()
       }
   }

    UNSAFE_componentWillMount() {
      this.movieSearch()
    }


  render() {
     if(!this.state.movies.Search) {
      return (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={300}
        width={300}
      />
      )
    }
    return (
      <>
        <div className="container">
          <Header />
          <div className="search-bar">
          <SearchBar onSearchTermChange={(term) => this.movieSearch(term)}/>
          <DropDown dropDownSearch={(term) => this.movieSearch(term)}/>
          </div>
          <MovieList movies={this.state.movies.Search}/>
        </div>
      <Footer />
      </>
    );
  }
}

export default App; 
