import React, { Component } from "react";
import _ from "lodash";
import { getMovie, getMovies, deleteMovie } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import Paginate from "../utilities/paginate";
import SideBar from "./sidebar";
import { getGenres } from "../services/fakeGenreService";
import FilteredMovies from "../utilities/filter";
import MovieTable from "./movieTable";
import NavBar from "./navbar";
import MovieNavbar from "./common/movieNavbar";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    currentGenre: "All Genre",
    sortColumn : {
      path : 'title',
      order: 'asc',
    }
  };

  render() 
  {
    const count = this.state.movies.length;
    const {currentPage, pageSize, movies, currentGenre, sortColumn} = this.state;
    const filteredMovies = FilteredMovies (currentGenre, movies);
    const sorted = _(filteredMovies).orderBy([sortColumn.path],[sortColumn.order])
    const movieWithPages = Paginate(currentPage, pageSize, sorted);

    return (
    <React.Fragment>
      <MovieNavbar  />
      { count=== 0 ? <p>There are no Movies in the Database</p> : 
      <div className="row m-3" >
      <div className="col-2">
      <SideBar genres={this.state.genres} 
      onSidebarChange={this.onSidebarChange} 
      currentGenre={currentGenre}/>
      </div>
      <div className="col">
      <h6>The Number of Movies available in Database : {count} Movies</h6>
      <MovieTable movieWithPages = {movieWithPages} onLiked ={this.onLiked} deleteMovie = {this.deleteMovie} onSort={this.handleSort} sortColumn={sortColumn}/>
      <Pagination currentPage={currentPage} onPageChange={this.pageSelect} movieCount={filteredMovies.length} pageSize={pageSize}/>
      </div> 
    </div> }
    </React.Fragment>)
  }

  pageSelect = (page) => {
      this.setState({currentPage : page});
  }

  handleSort = (sortColumn) => {
    this.setState({sortColumn});
  }

  deleteMovie = (movie) => {
   const movies = this.state.movies.filter(del => del._id !== movie._id);
   this.setState({movies});    
  }

  onSidebarChange = (name) => {
    this.setState({currentGenre: name, currentPage: 1});
  }

  onLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked =!movies[index].liked;
    this.setState({movies});
  }

 
}
