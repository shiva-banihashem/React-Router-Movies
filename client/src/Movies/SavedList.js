import React from 'react';
import { NavLink, Link } from 'react-router-dom';
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    
    {props.list.map(movie => (
      <NavLink activeClassName="nav-link" to={`/movies/${movie.id}`} key={movie.id}>
      <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    
    <NavLink activeClassName="nav-link" to="/">
      <div className="home-button" >Home</div>
    </NavLink>
    {/* <div className="home-button">Home</div> */}
  </div>
);

export default SavedList;
