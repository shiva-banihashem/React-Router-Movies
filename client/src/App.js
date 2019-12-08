import React, { useState } from 'react';
import {Route, Link } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    const IsMovieSaved = savedList.find(item => item.title === movie.title)
      if(!IsMovieSaved) {
        setSavedList( [...savedList, movie] );
      } else 
          {alert(`${movie.title} has already been saved`)}
    
  };
  
  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Route exact path="/" component={MovieList} />
      {/* <Route exact path="/movies/:id" component={Movie} /> */}
      <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList}/>} />
    </div>
  );
};

export default App;
