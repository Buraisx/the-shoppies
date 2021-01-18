import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ResultsContainer from './components/ResultsContainer';
import NominationsContainer from './components/NominationsContainer';

import './App.scss';


const App = () => {
  const [nominations, setNominations] = useState({});
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  /**
   * Queries the term entered in the search bar
   * @param {string} searchTerm 
   */
  const queryTerm = async (searchTerm) => {
    setTerm(searchTerm);
    // only search if an input exists
    if(searchTerm.length > 0) {
      setIsLoading(true);
      const response = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&page=1`);
      const data = await response.json();
      
      if(data["Response"] === "True") {
        setResults(data["Search"]);
        console.log(results);
      }

    }
  }
  /**
   * Adds a movie to the nominations list
   * @param {Object} nomination 
   */
  const addNomination = (movie) => {
    // check if nomination exists in the nomination list first
    if (!(movie.imdbID in nominations)) {
      setNominations(
        { 
          ...nominations,
          [movie.imdbID]: movie
        }
      );
    }
  }

  /**
   * removes a movie from the nomination list based on movieId 
   * @param {string} nominationId 
   */
  const removeNomination = (nominationId) => {
    let newNominations = nominations;
    delete newNominations[nominationId];
    setNominations({...newNominations});
  }
  // useEffect(()=> {
  //   (async () => {
  //     const response = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=2b3a969f&type=movie&page=1`);
  //     const data = await response.json();
  //     console.log(data);
  //   })();
  // }, [term]);
  return (
    <main className="App">
      <h1>The Shoppies</h1>
      <SearchBar
        queryTerm={queryTerm}
        term={term}
      />
      <ResultsContainer
        results={results}
        term={term}
        addNomination={addNomination}
        nominations={nominations}
      />
      <NominationsContainer
        nominations={nominations}
        removeNomination={removeNomination}
      />
    </main>
  );
}

export default App;
