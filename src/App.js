import {useState} from 'react'
import './App.css';

import AddMovie from './AddMovie/AddMovie'
import MovieList from './Comp/MovieList'
import {MovieData} from './Comp/MovieData'
import NavBar from './NavBar/NavBar'


function App() {

  const [movies , setMovies] = useState(MovieData)
const [name , setName] = useState('')
const [search , setSearch ] = useState('')



// const addmv =(newmovie)=> {
//   return setMovies([...movies, newmovie])
// }



  return (
    <div className="App">
   <NavBar setName={setName} setSearch={setSearch} search={search}/>
      <MovieList movies={movies} name={name} search={search} />
      {/* <AddMovie  addmv={addmv} /> */}
      <AddMovie movies={movies} setMovies={setMovies} />
   
    </div>
  );
}

export default App;
