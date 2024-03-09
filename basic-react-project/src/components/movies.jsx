import React, { Component } from "react";
import { getMovie, getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() 
  {
    return this.state.movies.length === 0 ? <p>There are no Movies in the Database</p> : this.tableFunction();
  }

  deleteMovie = (movie) => {
   const movies = this.state.movies.filter(del => del._id !== movie._id);
   this.setState({movies});    
  }

  onLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked =!movies[index].liked;
    this.setState({movies});
  }

  tableFunction = () => {
    return (
    <React.Fragment>
      <h6>The Number of Movies available in Database : {this.state.movies.length} Movies</h6>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">RentalRate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {this.state.movies.map((movie, index) => (
          <tbody>
            <tr key={movie._id}>
              <td >{index+1}</td>
              <td >{movie.title}</td>
              <td >{movie.genre.name}</td>
              <td >{movie.numberInStock}</td>
              <td >{movie.dailyRentalRate}</td>
              <td> <Like onClick = {()=>this.onLiked(movie)} liked = {movie.liked}/></td>
              <td >
                <button onClick={ () =>this.deleteMovie(movie)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </React.Fragment>
    );
  };
}
