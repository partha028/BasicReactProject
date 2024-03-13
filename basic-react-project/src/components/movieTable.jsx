import React, { Component } from 'react';
import Like from "./common/like";
import Table from './common/table';


class MovieTable extends Component {
    
    columns = [
      {label:"Title" , path: "title"},
      {label:"Genre" , path: "genre.name"},
      {label:"Stock" , path: "numberInStock"},
      {label:"RentalRate" , path: "dailyRentalRate"},
      {key:"liked", content: movie =>
      <Like onClick = {()=>this.props.onLiked(movie)} liked={movie.liked}/>},
      {key:"delete", content:  movie =>
      <button onClick={() =>this.props.deleteMovie(movie)} className="btn btn-danger">
      Delete
    </button>}
    ];

    render() { 
        const {movieWithPages,onSort,onLiked,deleteMovie,sortColumn} = this.props;
        
        return ( 
            <Table data={movieWithPages} onSort={onSort} onLiked={onLiked} deleteMovie={deleteMovie} sortColumn={sortColumn} columns={this.columns}/>
         );
    }
}
 
export default MovieTable;