// import logo from './logo.svg';
import { useContext } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { GlobalContext } from "./GlobalContext";

function App() {
   const { movieList } = useContext(GlobalContext);
  return (
    
     <div style={{ background : movieList && movieList.length > 0 && "blue" }}> 
      <Search />
      <MovieList />

      </div>
  
  );
}

export default App;
