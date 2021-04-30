import React,{useState} from 'react';

import '../App.css';

import MovieCard from './MovieCard'


const MovieList = ({movies, name , search}) => {


console.log(movies)

    return (
        <div className="card">
       
        {    
         movies.filter( el=> (
                              el.name.toLowerCase().includes(name.toLowerCase().trim()) &&
                              el.rate >= search
                             )
                
           
            

         ).map(film=>(  <MovieCard film={film} key={film.id} />) )
        }
     
      
  
  
                                                    
    
          
        </div>
    );
}

export default MovieList;