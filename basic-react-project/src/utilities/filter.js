import React, { Component } from 'react';

const FilteredMovies = (currentGenre, movies) => {
    let movie = movies.filter( movie=> movie.genre.name === currentGenre);
    if (movie.length === 0) 
    movie = movies;
    console.log('clickevent', movie);
    return movie;
}
 
export default FilteredMovies;