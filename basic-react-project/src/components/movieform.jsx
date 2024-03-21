import React, { Component } from 'react';

const MovieForm = ({history,match} ) => {
    return ( 
        <div className="movieFormContent">
            <h1>Movie ID: {match.params.id}</h1>
            <button 
            className='btn btn-primary' 
            onClick={()=> history.replace('/movies')}>
            Submit</button>
        </div>
       
     );
}
 
export default MovieForm;