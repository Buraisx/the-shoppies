import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './App.scss';

const App = () => {
  const [nominations, setNominations] = useState([]);
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState('false');

  const queryTerm = async (searchTerm) => {
    setTerm(searchTerm);
    
    if(searchTerm.length > 0) {
      const response = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&page=1`);
      const data = await response.json();
      
      if(data["Response"] === "True") {
        setResults(data["Search"]);
      }

    }
  }
  
  // useEffect(()=> {
  //   (async () => {
  //     const response = await fetch(`http://www.omdbapi.com/?s=${term}&apikey=2b3a969f&type=movie&page=1`);
  //     const data = await response.json();
  //     console.log(data);
  //   })();
  // }, [term]);
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar
        queryTerm={queryTerm}
        term={term}
      />

    </div>
  );
}

export default App;
