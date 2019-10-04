import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    
    {props.list.map(movie => (
      <Link  to={`/movies/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    
    <Link exact  to="/">
      <div className="home-button">Home</div>
    </Link>
    {/* <div className="home-button">Home</div> */}
  </div>
);

export default SavedList;
