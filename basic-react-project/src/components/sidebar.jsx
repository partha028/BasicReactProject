import React, { Component } from 'react';

const SideBar = (props) => {

    return ( 

        <ul className="list-group">
        {props.genres.map(genre => (
        <li key={genre._id} style={{ cursor: "pointer" }} 
        onClick={() =>(props.onSidebarChange(genre.name))} 
        className={props.currentGenre === genre.name ? "list-group-item active" : "list-group-item" }>
        {genre.name}</li> ))}
        </ul>
    );
}
 
export default SideBar;